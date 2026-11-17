'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import {
  CASQuestion,
  CASNumericalProblem,
  CASSection,
  CASQuestionMarks,
  CASQuestionPriority,
  CASQuestionType,
  CASSourceType,
  CASQuestionPrepStatus,
  CASData,
  CASUnitMetadata
} from '@/types/cas';
import { CAS_QUESTIONS, CAS_NUMERICAL_PROBLEMS, CAS_UNITS_METADATA } from '@/lib/casData';
import { CAS_STORAGE_KEY } from '@/lib/constants';
import { useToast } from './ToastContext';

export interface CASFilterState {
  unit: number | null;
  marks: CASQuestionMarks | null;
  priority: CASQuestionPriority | null;
  type: CASQuestionType | null;
  sourcePaperType: CASSourceType | null;
  status: CASQuestionPrepStatus | null;
  search: string;
  bookmarkedOnly: boolean;
  difficultOnly: boolean;
  recurringOnly: boolean;
  supplementaryOnly: boolean;
  year: string | null;
}

export interface CASUnitAnalytics {
  unitId: number;
  total: number;
  marks2: number;
  marks3: number;
  marks7: number;
  numericals: number;
  veryHigh: number;
  completed: number;
  examReady: number;
  revised: number;
  practising: number;
  reading: number;
  understood: number;
  notStarted: number;
  remaining: number;
  percentage: number;
}

interface CASContextType {
  questions: CASQuestion[];
  numericalProblems: CASNumericalProblem[];
  unitsMetadata: CASUnitMetadata[];
  isLoaded: boolean;
  activeSection: CASSection;
  setActiveSection: (section: CASSection) => void;
  selectedUnitId: number | null;
  setSelectedUnitId: (unitId: number | null) => void;
  filters: CASFilterState;
  setFilters: (filters: Partial<CASFilterState>) => void;
  resetFilters: () => void;

  // Answer Reader Modal
  activeAnswerQuestion: CASQuestion | null;
  activeAnswerMode: 'quickRevision' | 'examAnswer' | 'detailedLearning';
  openAnswer: (question: CASQuestion, mode?: 'quickRevision' | 'examAnswer' | 'detailedLearning') => void;
  closeAnswer: () => void;
  setAnswerMode: (mode: 'quickRevision' | 'examAnswer' | 'detailedLearning') => void;

  // Actions
  updateQuestionStatus: (questionId: string, status: CASQuestionPrepStatus) => void;
  toggleBookmark: (questionId: string) => void;
  toggleDifficult: (questionId: string) => void;
  saveNotes: (questionId: string, notes: string) => void;
  recordRevision: (questionId: string) => void;

  // Numerical Practice
  updateNumericalProblem: (problemId: string, updates: Partial<CASNumericalProblem>) => void;
  recordNumericalAttempt: (
    problemId: string,
    userSolution: string,
    isCorrect: boolean,
    isIndependent: boolean
  ) => void;

  // Queries
  getUnitQuestions: (unitId: number) => CASQuestion[];
  getUnitAnalytics: (unitId: number) => CASUnitAnalytics;
  getOverallAnalytics: () => {
    total: number;
    completed: number;
    examReady: number;
    revised: number;
    practising: number;
    reading: number;
    understood: number;
    notStarted: number;
    veryHighTotal: number;
    veryHighCompleted: number;
    percentage: number;
    bookmarkedCount: number;
    difficultCount: number;
    solvedNumericalsCount: number;
    totalNumericalsCount: number;
  };
  getFilteredQuestions: () => CASQuestion[];
  getImportantQuestions: () => CASQuestion[];
  getPYQQuestions: (year?: string) => CASQuestion[];
}

const DEFAULT_FILTERS: CASFilterState = {
  unit: null,
  marks: null,
  priority: null,
  type: null,
  sourcePaperType: null,
  status: null,
  search: '',
  bookmarkedOnly: false,
  difficultOnly: false,
  recurringOnly: false,
  supplementaryOnly: false,
  year: null
};

const CASContext = createContext<CASContextType | undefined>(undefined);

export function CASProvider({ children }: { children: React.ReactNode }) {
  const [questions, setQuestions] = useState<CASQuestion[]>(CAS_QUESTIONS);
  const [numericalProblems, setNumericalProblems] = useState<CASNumericalProblem[]>(CAS_NUMERICAL_PROBLEMS);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<CASSection>('overview');
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);
  const [filters, setFiltersState] = useState<CASFilterState>(DEFAULT_FILTERS);

  // Answer Reader State
  const [activeAnswerQuestion, setActiveAnswerQuestion] = useState<CASQuestion | null>(null);
  const [activeAnswerMode, setActiveAnswerMode] = useState<'quickRevision' | 'examAnswer' | 'detailedLearning'>('examAnswer');

  const { toast } = useToast();

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CAS_STORAGE_KEY);
      if (stored) {
        const parsed: CASData = JSON.parse(stored);
        if (parsed.questions && Array.isArray(parsed.questions)) {
          const mergedQuestions = CAS_QUESTIONS.map(masterQ => {
            const found = parsed.questions.find(q => q.id === masterQ.id);
            if (found) {
              return {
                ...masterQ,
                status: found.status || 'not_started',
                bookmarked: Boolean(found.bookmarked),
                isDifficult: Boolean(found.isDifficult),
                notes: found.notes || undefined,
                lastRevised: found.lastRevised || undefined,
                lastStudied: found.lastStudied || undefined,
                revisionCount: found.revisionCount || 0
              };
            }
            return masterQ;
          });

          const mergedNumericals = CAS_NUMERICAL_PROBLEMS.map(masterN => {
            const found = (parsed.numericalProblems || []).find(n => n.id === masterN.id);
            if (found) {
              return {
                ...masterN,
                userSolution: found.userSolution || undefined,
                isCorrect: found.isCorrect,
                isIndependentSolved: found.isIndependentSolved,
                attempts: found.attempts || 0,
                bookmarked: Boolean(found.bookmarked),
                isDifficult: Boolean(found.isDifficult),
                notes: found.notes || undefined
              };
            }
            return masterN;
          });

          setQuestions(mergedQuestions);
          setNumericalProblems(mergedNumericals);
          setIsLoaded(true);
          return;
        }
      }
    } catch (e) {
      console.error('Failed to load CAS data from LocalStorage', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage helper
  const saveToStorage = useCallback((qList: CASQuestion[], nList: CASNumericalProblem[]) => {
    try {
      const payload: CASData = {
        version: 1,
        questions: qList,
        numericalProblems: nList,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(CAS_STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.error('Failed to persist CAS data', e);
    }
  }, []);

  // Update question status
  const updateQuestionStatus = useCallback(
    (questionId: string, status: CASQuestionPrepStatus) => {
      setQuestions(prev => {
        const next = prev.map(q => {
          if (q.id !== questionId) return q;
          const isDone = status === 'exam_ready' || status === 'revised';
          return {
            ...q,
            status,
            lastStudied: new Date().toISOString().split('T')[0],
            lastRevised: isDone ? new Date().toISOString().split('T')[0] : q.lastRevised,
            revisionCount: isDone ? (q.revisionCount || 0) + 1 : q.revisionCount
          };
        });
        saveToStorage(next, numericalProblems);
        return next;
      });

      setActiveAnswerQuestion(prev => (prev && prev.id === questionId ? { ...prev, status } : prev));

      if (status === 'exam_ready') {
        toast('Marked Exam Ready! 🎯');
      } else if (status === 'revised') {
        toast('Marked as Revised! ⚡');
      } else {
        toast('Status updated');
      }
    },
    [numericalProblems, saveToStorage, toast]
  );

  // Toggle bookmark
  const toggleBookmark = useCallback(
    (questionId: string) => {
      setQuestions(prev => {
        const next = prev.map(q => {
          if (q.id !== questionId) return q;
          return { ...q, bookmarked: !q.bookmarked };
        });
        saveToStorage(next, numericalProblems);
        return next;
      });

      setActiveAnswerQuestion(prev =>
        prev && prev.id === questionId ? { ...prev, bookmarked: !prev.bookmarked } : prev
      );
    },
    [numericalProblems, saveToStorage]
  );

  // Toggle difficult flag
  const toggleDifficult = useCallback(
    (questionId: string) => {
      setQuestions(prev => {
        const next = prev.map(q => {
          if (q.id !== questionId) return q;
          return { ...q, isDifficult: !q.isDifficult };
        });
        saveToStorage(next, numericalProblems);
        return next;
      });

      setActiveAnswerQuestion(prev =>
        prev && prev.id === questionId ? { ...prev, isDifficult: !prev.isDifficult } : prev
      );
      toast('Question difficulty flag toggled');
    },
    [numericalProblems, saveToStorage, toast]
  );

  // Save notes
  const saveNotes = useCallback(
    (questionId: string, notes: string) => {
      setQuestions(prev => {
        const next = prev.map(q => {
          if (q.id !== questionId) return q;
          return { ...q, notes };
        });
        saveToStorage(next, numericalProblems);
        return next;
      });

      setActiveAnswerQuestion(prev =>
        prev && prev.id === questionId ? { ...prev, notes } : prev
      );
      toast('Notes saved');
    },
    [numericalProblems, saveToStorage, toast]
  );

  // Record revision
  const recordRevision = useCallback(
    (questionId: string) => {
      setQuestions(prev => {
        const next = prev.map(q => {
          if (q.id !== questionId) return q;
          return {
            ...q,
            status: 'revised' as CASQuestionPrepStatus,
            revisionCount: (q.revisionCount || 0) + 1,
            lastRevised: new Date().toISOString().split('T')[0]
          };
        });
        saveToStorage(next, numericalProblems);
        return next;
      });
      toast('Revision recorded! 📖');
    },
    [numericalProblems, saveToStorage, toast]
  );

  // Update numerical problem
  const updateNumericalProblem = useCallback(
    (problemId: string, updates: Partial<CASNumericalProblem>) => {
      setNumericalProblems(prev => {
        const next = prev.map(p => {
          if (p.id !== problemId) return p;
          return { ...p, ...updates };
        });
        saveToStorage(questions, next);
        return next;
      });
    },
    [questions, saveToStorage]
  );

  // Record numerical attempt
  const recordNumericalAttempt = useCallback(
    (problemId: string, userSolution: string, isCorrect: boolean, isIndependent: boolean) => {
      setNumericalProblems(prev => {
        const next = prev.map(p => {
          if (p.id !== problemId) return p;
          return {
            ...p,
            userSolution,
            isCorrect,
            isIndependentSolved: isIndependent,
            attempts: (p.attempts || 0) + 1
          };
        });
        saveToStorage(questions, next);
        return next;
      });
      toast(isCorrect ? 'Numerical solved correctly! 🎉' : 'Solution saved');
    },
    [questions, saveToStorage, toast]
  );

  // Set filters
  const setFilters = useCallback((updates: Partial<CASFilterState>) => {
    setFiltersState(prev => ({ ...prev, ...updates }));
  }, []);

  // Reset filters
  const resetFilters = useCallback(() => {
    setFiltersState(DEFAULT_FILTERS);
  }, []);

  // Open / Close Answer Modal
  const openAnswer = useCallback(
    (question: CASQuestion, mode: 'quickRevision' | 'examAnswer' | 'detailedLearning' = 'examAnswer') => {
      setActiveAnswerQuestion(question);
      setActiveAnswerMode(mode);
    },
    []
  );

  const closeAnswer = useCallback(() => {
    setActiveAnswerQuestion(null);
  }, []);

  const setAnswerMode = useCallback((mode: 'quickRevision' | 'examAnswer' | 'detailedLearning') => {
    setActiveAnswerMode(mode);
  }, []);

  // Queries
  const getUnitQuestions = useCallback(
    (unitId: number) => questions.filter(q => q.unitId === unitId),
    [questions]
  );

  const getUnitAnalytics = useCallback(
    (unitId: number): CASUnitAnalytics => {
      const uQuestions = questions.filter(q => q.unitId === unitId);
      const total = uQuestions.length;
      const marks2 = uQuestions.filter(q => q.marks === 2).length;
      const marks3 = uQuestions.filter(q => q.marks === 3).length;
      const marks7 = uQuestions.filter(q => q.marks === 7).length;
      const numericals = uQuestions.filter(q => q.type === 'numerical').length;
      const veryHigh = uQuestions.filter(q => q.priority === 'very_high').length;

      const examReady = uQuestions.filter(q => q.status === 'exam_ready').length;
      const revised = uQuestions.filter(q => q.status === 'revised').length;
      const practising = uQuestions.filter(q => q.status === 'practising').length;
      const reading = uQuestions.filter(q => q.status === 'reading').length;
      const understood = uQuestions.filter(q => q.status === 'understood').length;
      const notStarted = uQuestions.filter(q => q.status === 'not_started').length;

      const completed = examReady + revised;
      const remaining = total - completed;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

      return {
        unitId,
        total,
        marks2,
        marks3,
        marks7,
        numericals,
        veryHigh,
        completed,
        examReady,
        revised,
        practising,
        reading,
        understood,
        notStarted,
        remaining,
        percentage
      };
    },
    [questions]
  );

  const getOverallAnalytics = useCallback(() => {
    const total = questions.length;
    const examReady = questions.filter(q => q.status === 'exam_ready').length;
    const revised = questions.filter(q => q.status === 'revised').length;
    const practising = questions.filter(q => q.status === 'practising').length;
    const reading = questions.filter(q => q.status === 'reading').length;
    const understood = questions.filter(q => q.status === 'understood').length;
    const notStarted = questions.filter(q => q.status === 'not_started').length;

    const completed = examReady + revised;
    const veryHighQuestions = questions.filter(q => q.priority === 'very_high');
    const veryHighTotal = veryHighQuestions.length;
    const veryHighCompleted = veryHighQuestions.filter(
      q => q.status === 'exam_ready' || q.status === 'revised'
    ).length;

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    const bookmarkedCount = questions.filter(q => q.bookmarked).length;
    const difficultCount = questions.filter(q => q.isDifficult).length;

    const solvedNumericalsCount = numericalProblems.filter(n => n.isCorrect || n.isIndependentSolved).length;
    const totalNumericalsCount = numericalProblems.length;

    return {
      total,
      completed,
      examReady,
      revised,
      practising,
      reading,
      understood,
      notStarted,
      veryHighTotal,
      veryHighCompleted,
      percentage,
      bookmarkedCount,
      difficultCount,
      solvedNumericalsCount,
      totalNumericalsCount
    };
  }, [questions, numericalProblems]);

  const getFilteredQuestions = useCallback(() => {
    return questions.filter(q => {
      if (filters.unit !== null && q.unitId !== filters.unit) return false;
      if (filters.marks !== null && q.marks !== filters.marks) return false;
      if (filters.priority !== null && q.priority !== filters.priority) return false;
      if (filters.type !== null && q.type !== filters.type) return false;
      if (filters.sourcePaperType !== null && q.sourcePaperType !== filters.sourcePaperType) return false;
      if (filters.status !== null && q.status !== filters.status) return false;
      if (filters.bookmarkedOnly && !q.bookmarked) return false;
      if (filters.difficultOnly && !q.isDifficult) return false;
      if (filters.recurringOnly && !q.isRecurring) return false;
      if (filters.supplementaryOnly && !q.isSupplementaryTopic) return false;
      if (filters.year && !q.years.some(y => y.includes(filters.year!))) return false;

      if (filters.search.trim()) {
        const query = filters.search.toLowerCase().trim();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesTopic = q.topicName.toLowerCase().includes(query);
        const matchesText = q.questionText.toLowerCase().includes(query);
        const matchesNotes = q.notes?.toLowerCase().includes(query);
        return matchesTitle || matchesTopic || matchesText || matchesNotes;
      }

      return true;
    });
  }, [questions, filters]);

  const getImportantQuestions = useCallback(() => {
    return questions.filter(q => q.priority === 'very_high' || q.isRecurring);
  }, [questions]);

  const getPYQQuestions = useCallback(
    (year?: string) => {
      return questions.filter(q => {
        if (!year) return q.years.length > 0 && !q.years.includes('Practice');
        return q.years.some(y => y.includes(year));
      });
    },
    [questions]
  );

  const value = useMemo(
    () => ({
      questions,
      numericalProblems,
      unitsMetadata: CAS_UNITS_METADATA,
      isLoaded,
      activeSection,
      setActiveSection,
      selectedUnitId,
      setSelectedUnitId,
      filters,
      setFilters,
      resetFilters,
      activeAnswerQuestion,
      activeAnswerMode,
      openAnswer,
      closeAnswer,
      setAnswerMode,
      updateQuestionStatus,
      toggleBookmark,
      toggleDifficult,
      saveNotes,
      recordRevision,
      updateNumericalProblem,
      recordNumericalAttempt,
      getUnitQuestions,
      getUnitAnalytics,
      getOverallAnalytics,
      getFilteredQuestions,
      getImportantQuestions,
      getPYQQuestions
    }),
    [
      questions,
      numericalProblems,
      isLoaded,
      activeSection,
      selectedUnitId,
      filters,
      setFilters,
      resetFilters,
      activeAnswerQuestion,
      activeAnswerMode,
      openAnswer,
      closeAnswer,
      setAnswerMode,
      updateQuestionStatus,
      toggleBookmark,
      toggleDifficult,
      saveNotes,
      recordRevision,
      updateNumericalProblem,
      recordNumericalAttempt,
      getUnitQuestions,
      getUnitAnalytics,
      getOverallAnalytics,
      getFilteredQuestions,
      getImportantQuestions,
      getPYQQuestions
    ]
  );

  return <CASContext.Provider value={value}>{children}</CASContext.Provider>;
}

export function useCAS() {
  const context = useContext(CASContext);
  if (!context) {
    throw new Error('useCAS must be used within a CASProvider');
  }
  return context;
}
