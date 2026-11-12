export type FOMSection =
  | 'overview'
  | 'syllabus'
  | 'important_questions'
  | 'pyqs'
  | 'numerical_practice'
  | 'answer_library'
  | 'revision_tracker';

export type QuestionMarks = 2 | 3 | 7;
export type QuestionPriority = 'very_high' | 'high' | 'moderate';
export type QuestionType = 'theory' | 'derivation' | 'numerical' | 'diagram';
export type QuestionPrepStatus =
  | 'not_studied'
  | 'reading'
  | 'learning'
  | 'understood'
  | 'practising'
  | 'revised'
  | 'exam_ready';

export interface NumericalSolution {
  given: string[];
  toFind: string;
  formula: string;
  substitution: string;
  calculation: string;
  answer: string;
  units: string;
}

export interface AnswerContent {
  quickRevision: string;
  examAnswer: string;
  detailedLearning: string;
  diagramSvg?: string;
  numericalSolution?: NumericalSolution;
}

export interface FOMQuestion {
  id: string;
  unitId: number; // 1 to 5
  unitName: string;
  title: string;
  questionText: string;
  marks: QuestionMarks;
  priority: QuestionPriority;
  type: QuestionType;
  years: string[]; // e.g. ["2025", "2024", "2022"]
  frequency: string; // e.g. "Repeated 4 times (Top Priority)"
  isRecurring: boolean;
  answer: AnswerContent;
  status: QuestionPrepStatus;
  bookmarked: boolean;
  isDifficult: boolean;
  notes?: string;
  understood?: boolean;
  lastRevised?: string;
}

export interface FOMNumericalProblem {
  id: string;
  unitId: number;
  unitName: string;
  title: string;
  problemStatement: string;
  problemType: string;
  marks: QuestionMarks;
  years?: string[];
  givenData: string[];
  formula: string;
  stepByStepSolution: string[];
  finalAnswer: string;
  units: string;
  userSolution?: string;
  isCorrect?: boolean;
  isIndependentSolved?: boolean;
  bookmarked?: boolean;
  isDifficult?: boolean;
  notes?: string;
}

export interface FOMData {
  version: number;
  questions: FOMQuestion[];
  numericalProblems: FOMNumericalProblem[];
  lastUpdated: string;
}

