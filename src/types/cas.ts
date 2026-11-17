export type CASSection =
  | 'overview'
  | 'syllabus'
  | 'important_questions'
  | 'pyqs'
  | 'numerical_practice'
  | 'answer_library'
  | 'revision_tracker';

export type CASQuestionMarks = 2 | 3 | 7;
export type CASQuestionPriority = 'very_high' | 'high' | 'moderate';
export type CASQuestionType =
  | 'conceptual'
  | 'numerical'
  | 'derivation'
  | 'circuit_diagram'
  | 'graph_waveform'
  | 'theorem'
  | 'application';

export type CASSourceType = 'university_exam' | 'internal_test' | 'practice';

export type CASQuestionPrepStatus =
  | 'not_started'
  | 'reading'
  | 'understood'
  | 'practising'
  | 'revised'
  | 'exam_ready';

export interface CASNumericalSolution {
  given: string[];
  toFind: string;
  formula: string;
  stepByStepSolution: string[];
  substitution: string;
  calculation: string;
  finalAnswer: string;
  units: string;
  explanation: string;
}

export interface CASAnswerContent {
  quickRevision: string;
  examAnswer: string;
  detailedLearning: string;
  circuitDiagram?: string;
  numericalSolution?: CASNumericalSolution;
}

export interface CASQuestion {
  id: string;
  unitId: number; // 1 to 5
  unitName: string;
  topicName: string;
  title: string;
  questionText: string;
  marks: CASQuestionMarks;
  priority: CASQuestionPriority;
  type: CASQuestionType;
  years: string[]; // e.g. ["2023", "2022", "2019"] or ["2025 Test"] or ["Practice"]
  sourcePaperType: CASSourceType;
  isSupplementaryTopic?: boolean;
  frequency?: string;
  isRecurring?: boolean;
  answer: CASAnswerContent;
  status: CASQuestionPrepStatus;
  bookmarked: boolean;
  isDifficult: boolean;
  notes?: string;
  lastStudied?: string;
  lastRevised?: string;
  revisionCount?: number;
  numericalAttempts?: number;
}

export interface CASNumericalProblem {
  id: string;
  unitId: number;
  unitName: string;
  title: string;
  problemStatement: string;
  problemType: string;
  marks: CASQuestionMarks;
  years?: string[];
  sourcePaperType: CASSourceType;
  givenData: string[];
  formula: string;
  stepByStepSolution: string[];
  finalAnswer: string;
  units: string;
  circuitDiagram?: string;
  userSolution?: string;
  isCorrect?: boolean;
  isIndependentSolved?: boolean;
  attempts?: number;
  bookmarked?: boolean;
  isDifficult?: boolean;
  notes?: string;
}

export interface CASUnitMetadata {
  id: number;
  name: string;
  code: string;
  description: string;
  coreTopicsCount: number;
  supplementaryTopicsCount: number;
  topicsCovered: string[];
  pyqWeightage: string;
}

export interface CASData {
  version: number;
  questions: CASQuestion[];
  numericalProblems: CASNumericalProblem[];
  lastUpdated: string;
}
