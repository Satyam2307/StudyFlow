'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import {
  FOMQuestion,
  FOMNumericalProblem,
  FOMSection,
  QuestionMarks,
  QuestionPriority,
  QuestionType,
  QuestionPrepStatus,
  FOMData
} from '@/types/fom';
import { FOM_QUESTIONS, FOM_NUMERICAL_PROBLEMS } from '@/lib/fomData';
import { FOM_STORAGE_KEY } from '@/lib/constants';
import { useToast } from './ToastContext';

export interface FOMFilterState {
  unit: number | null;
  marks: QuestionMarks | null;
  priority: QuestionPriority | null;
  type: QuestionType | null;
  status: QuestionPrepStatus | null;
  search: string;
  bookmarkedOnly: boolean;
  difficultOnly: boolean;
  recurringOnly: boolean;
}

export interface UnitAnalytics {
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
  notStudied: number;
  remaining: number;
  percentage: number;
}

interface FOMContextType {
  questions: FOMQuestion[];
  numericalProblems: FOMNumericalProblem[];
  isLoaded: boolean;
  activeSection: FOMSection;
  setActiveSection: (section: FOMSection) => void;
  selectedUnitId: number | null;
  setSelectedUnitId: (unitId: number | null) => void;
  filters: FOMFilterState;
  setFilters: (filters: Partial<FOMFilterState>) => void;
  resetFilters: () => void;

  // Answer Reader Modal
  activeAnswerQuestion: FOMQuestion | null;
  activeAnswerMode: 'quickRevision' | 'examAnswer' | 'detailedLearning';
  openAnswer: (question: FOMQuestion, mode?: 'quickRevision' | 'examAnswer' | 'detailedLearning') => void;
  closeAnswer: () => void;
  setAnswerMode: (mode: 'quickRevision' | 'examAnswer' | 'detailedLearning') => void;

  // Actions
  updateQuestionStatus: (questionId: string, status: QuestionPrepStatus) => void;
  toggleBookmark: (questionId: string) => void;
  toggleDifficult: (questionId: string) => void;
  addNotes: (questionId: string, notes: string) => void;
  markUnderstood: (questionId: string) => void;
  markExamReady: (questionId: string) => void;
  updateLastRevised: (questionId: string) => void;

  // Numerical Practice
  updateNumericalProblem: (problemId: string, updates: Partial<FOMNumericalProblem>) => void;
  recordNumericalAttempt: (
    problemId: string,
    userSolution: string,
    isCorrect: boolean,
    isIndependent: boolean
  ) => void;

  // Queries
  getUnitQuestions: (unitId: number) => FOMQuestion[];
  getUnitAnalytics: (unitId: number) => UnitAnalytics;
  getOverallAnalytics: () => {
    total: number;
    completed: number;
    examReady: number;
    revised: number;
    practising: number;
    reading: number;
    understood: number;
    notStudied: number;
    veryHighTotal: number;
    veryHighCompleted: number;
    percentage: number;
    bookmarkedCount: number;
    difficultCount: number;
  };
  getFilteredQuestions: () => FOMQuestion[];
  getImportantRecurringQuestions: () => FOMQuestion[];
}

const DEFAULT_FILTERS: FOMFilterState = {
  unit: null,
  marks: null,
  priority: null,
  type: null,
  status: null,
  search: '',
  bookmarkedOnly: false,
  difficultOnly: false,
  recurringOnly: false
};

const FOMContext = createContext<FOMContextType | undefined>(undefined);

export function FOMProvider({ children }: { children: React.ReactNode }) {
  const [questions, setQuestions] = useState<FOMQuestion[]>(FOM_QUESTIONS);
  const [numericalProblems, setNumericalProblems] = useState<FOMNumericalProblem[]>(FOM_NUMERICAL_PROBLEMS);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<FOMSection>('overview');
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);
  const [filters, setFiltersState] = useState<FOMFilterState>(DEFAULT_FILTERS);

  // Answer Reader State
  const [activeAnswerQuestion, setActiveAnswerQuestion] = useState<FOMQuestion | null>(null);
  const [activeAnswerMode, setActiveAnswerMode] = useState<'quickRevision' | 'examAnswer' | 'detailedLearning'>('examAnswer');

  const { toast } = useToast();

  // Load from LocalStorage on mount and merge with initial questions
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FOM_STORAGE_KEY);
      if (stored) {
        const parsed: FOMData = JSON.parse(stored);
        if (parsed.questions && Array.isArray(parsed.questions)) {
          // Merge stored questions with current master list (preserving user status/notes/bookmarks)
          const mergedQuestions = FOM_QUESTIONS.map(masterQ => {
            const found = parsed.questions.find(q => q.id === masterQ.id);
            if (found) {
              return {
                ...masterQ,
                status: found.status || 'not_studied',
                bookmarked: Boolean(found.bookmarked),
                isDifficult: Boolean(found.isDifficult),
                notes: found.notes || undefined,
                understood: Boolean(found.understood),
                lastRevised: found.lastRevised || undefined
              };
            }
            return masterQ;
          });

          // Merge stored numerical practice
          const mergedNumericals = FOM_NUMERICAL_PROBLEMS.map(masterN => {
            const found = (parsed.numericalProblems || []).find(n => n.id === masterN.id);
            if (found) {
              return {
                ...masterN,
                userSolution: found.userSolution || undefined,
                isCorrect: found.isCorrect,
                isIndependentSolved: found.isIndependentSolved,
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
      console.error('Failed to load FOM data from LocalStorage', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage helper
  const saveToStorage = useCallback((qList: FOMQuestion[], nList: FOMNumericalProblem[]) => {
    try {
      const payload: FOMData = {
        version: 1,
        questions: qList,
        numericalProblems: nList,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(FOM_STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.error('Failed to persist FOM data', e);
    }
  }, []);

  // Update question status
  const updateQuestionStatus = useCallback(
    (questionId: string, status: QuestionPrepStatus) => {
      setQuestions(prev => {
        const next = prev.map(q => {
          if (q.id !== questionId) return q;
          const isDone = status === 'exam_ready' || status === 'revised';
          return {
            ...q,
            status,
            understood: isDone ? true : q.understood,
            lastRevised: new Date().toISOString().split('T')[0]
          };
        });
        saveToStorage(next, numericalProblems);
        return next;
      });

      // Also update currently active question in modal if open
      setActiveAnswerQuestion(prev => (prev && prev.id === questionId ? { ...prev, status } : prev));

      if (status === 'exam_ready') {
        toast('Marked Exam Ready! 🎯');
      } else if (status === 'revised') {
        toast('Marked as Revised! 📖');
      } else {
        toast('Preparation status updated');
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

  // Add notes
  const addNotes = useCallback(
    (questionId: string, notes: string) => {
      setQuestions(prev => {
        const next = prev.map(q => {
          if (q.id !== questionId) return q;
          return { ...q, notes };
        });
        saveToStorage(next, numericalProblems);
        return next;
      });

      setActiveAnswerQuestion(prev => (prev && prev.id === questionId ? { ...prev, notes } : prev));
      toast('Personal notes saved');
    },
    [numericalProblems, saveToStorage, toast]
  );

  // Mark understood
  const markUnderstood = useCallback(
    (questionId: string) => {
      setQuestions(prev => {
        const next = prev.map(q => {
          if (q.id !== questionId) return q;
          return {
            ...q,
            understood: true,
            status: q.status === 'not_studied' ? 'understood' : q.status
          };
        });
        saveToStorage(next, numericalProblems);
        return next;
      });

      setActiveAnswerQuestion(prev =>
        prev && prev.id === questionId ? { ...prev, understood: true } : prev
      );
      toast('Marked concept as understood');
    },
    [numericalProblems, saveToStorage, toast]
  );

  // Mark exam ready
  const markExamReady = useCallback(
    (questionId: string) => {
      updateQuestionStatus(questionId, 'exam_ready');
    },
    [updateQuestionStatus]
  );

  // Update last revised date
  const updateLastRevised = useCallback(
    (questionId: string) => {
      const today = new Date().toISOString().split('T')[0];
      setQuestions(prev => {
        const next = prev.map(q => {
          if (q.id !== questionId) return q;
          return { ...q, lastRevised: today };
        });
        saveToStorage(next, numericalProblems);
        return next;
      });
      toast(`Revised today (${today})`);
    },
    [numericalProblems, saveToStorage, toast]
  );

  // Update Numerical Problem
  const updateNumericalProblem = useCallback(
    (problemId: string, updates: Partial<FOMNumericalProblem>) => {
      setNumericalProblems(prev => {
        const next = prev.map(n => (n.id === problemId ? { ...n, ...updates } : n));
        saveToStorage(questions, next);
        return next;
      });
    },
    [questions, saveToStorage]
  );

  // Record Numerical Attempt
  const recordNumericalAttempt = useCallback(
    (problemId: string, userSolution: string, isCorrect: boolean, isIndependent: boolean) => {
      setNumericalProblems(prev => {
        const next = prev.map(n => {
          if (n.id !== problemId) return n;
          return {
            ...n,
            userSolution,
            isCorrect,
            isIndependentSolved: isIndependent
          };
        });
        saveToStorage(questions, next);
        return next;
      });
      toast(isCorrect ? 'Solution marked correct!' : 'Attempt saved for revision', isCorrect ? 'success' : 'info');
    },
    [questions, saveToStorage, toast]
  );

  // Filter setters
  const setFilters = useCallback((newFilters: Partial<FOMFilterState>) => {
    setFiltersState(prev => ({ ...prev, ...newFilters }));
  }, []);

  const resetFilters = useCallback(() => {
    setFiltersState(DEFAULT_FILTERS);
  }, []);

  // Open/Close Answer Reader
  const openAnswer = useCallback(
    (question: FOMQuestion, mode: 'quickRevision' | 'examAnswer' | 'detailedLearning' = 'examAnswer') => {
      setActiveAnswerQuestion(question);
      setActiveAnswerMode(mode);
    },
    []
  );

  const closeAnswer = useCallback(() => {
    setActiveAnswerQuestion(null);
  }, []);

  const setAnswerMode = useCallback(
    (mode: 'quickRevision' | 'examAnswer' | 'detailedLearning') => {
      setActiveAnswerMode(mode);
    },
    []
  );

  // Queries
  const getUnitQuestions = useCallback(
    (unitId: number) => {
      return questions.filter(q => q.unitId === unitId);
    },
    [questions]
  );

  const getUnitAnalytics = useCallback(
    (unitId: number): UnitAnalytics => {
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
      const understood = uQuestions.filter(q => q.status === 'understood').length;
      const reading = uQuestions.filter(q => q.status === 'reading' || q.status === 'learning').length;
      const notStudied = uQuestions.filter(q => q.status === 'not_studied').length;

      // Completed is exam_ready + revised
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
        notStudied,
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
    const understood = questions.filter(q => q.status === 'understood').length;
    const reading = questions.filter(q => q.status === 'reading' || q.status === 'learning').length;
    const notStudied = questions.filter(q => q.status === 'not_studied').length;

    const completed = examReady + revised;
    const veryHighQuestions = questions.filter(q => q.priority === 'very_high');
    const veryHighTotal = veryHighQuestions.length;
    const veryHighCompleted = veryHighQuestions.filter(
      q => q.status === 'exam_ready' || q.status === 'revised'
    ).length;

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    const bookmarkedCount = questions.filter(q => q.bookmarked).length;
    const difficultCount = questions.filter(q => q.isDifficult).length;

    return {
      total,
      completed,
      examReady,
      revised,
      practising,
      reading,
      understood,
      notStudied,
      veryHighTotal,
      veryHighCompleted,
      percentage,
      bookmarkedCount,
      difficultCount
    };
  }, [questions]);

  const getFilteredQuestions = useCallback(() => {
    return questions.filter(q => {
      if (filters.unit !== null && q.unitId !== filters.unit) return false;
      if (filters.marks !== null && q.marks !== filters.marks) return false;
      if (filters.priority !== null && q.priority !== filters.priority) return false;
      if (filters.type !== null && q.type !== filters.type) return false;
      if (filters.status !== null && q.status !== filters.status) return false;
      if (filters.bookmarkedOnly && !q.bookmarked) return false;
      if (filters.difficultOnly && !q.isDifficult) return false;
      if (filters.recurringOnly && !q.isRecurring) return false;
      if (filters.search.trim()) {
        const query = filters.search.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesText = q.questionText.toLowerCase().includes(query);
        const matchesYears = q.years.some(y => y.includes(query));
        if (!matchesTitle && !matchesText && !matchesYears) return false;
      }
      return true;
    });
  }, [questions, filters]);

  const getImportantRecurringQuestions = useCallback(() => {
    // Sort by recurring first, then priority, then marks
    return [...questions]
      .filter(q => q.isRecurring || q.priority === 'very_high')
      .sort((a, b) => {
        if (a.isRecurring && !b.isRecurring) return -1;
        if (!a.isRecurring && b.isRecurring) return 1;
        if (a.priority === 'very_high' && b.priority !== 'very_high') return -1;
        if (a.priority !== 'very_high' && b.priority === 'very_high') return 1;
        return b.marks - a.marks;
      });
  }, [questions]);

  const value = useMemo(
    () => ({
      questions,
      numericalProblems,
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
      addNotes,
      markUnderstood,
      markExamReady,
      updateLastRevised,
      updateNumericalProblem,
      recordNumericalAttempt,
      getUnitQuestions,
      getUnitAnalytics,
      getOverallAnalytics,
      getFilteredQuestions,
      getImportantRecurringQuestions
    }),
    [
      questions,
      numericalProblems,
      isLoaded,
      activeSection,
      selectedUnitId,
      filters,
      activeAnswerQuestion,
      activeAnswerMode,
      openAnswer,
      closeAnswer,
      setAnswerMode,
      updateQuestionStatus,
      toggleBookmark,
      toggleDifficult,
      addNotes,
      markUnderstood,
      markExamReady,
      updateLastRevised,
      updateNumericalProblem,
      recordNumericalAttempt,
      getUnitQuestions,
      getUnitAnalytics,
      getOverallAnalytics,
      getFilteredQuestions,
      getImportantRecurringQuestions,
      setFilters,
      resetFilters
    ]
  );

  return <FOMContext.Provider value={value}>{children}</FOMContext.Provider>;
}

export function useFOM() {
  const context = useContext(FOMContext);
  if (!context) {
    throw new Error('useFOM must be used within a FOMProvider');
  }
  return context;
}
