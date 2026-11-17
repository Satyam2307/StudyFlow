export type Priority = 'very_high' | 'high' | 'moderate' | 'medium' | 'low';

export type StudyStatus = 'not_started' | 'learning' | 'practising' | 'exam_ready';

export interface PYQItem {
  id: string;
  question: string;
  year?: string; // e.g. "Dec 2023", "May 2022" (empty if unestablished)
  marks?: number; // 2, 3, 5, 7
  solved: boolean;
  solvedWithoutNotes: boolean;
  notes?: string;
}

export interface NumericalPractice {
  attempted: number;
  correct: number;
  requiresRevision: number;
  independentSolved: number;
}

export interface Topic {
  id: string;
  name: string;
  completed: boolean;
  priority: Priority;
  studyStatus?: StudyStatus;
  estimatedTime?: string; // e.g. "30 min", "1 hr", "45 min"
  completedAt?: string; // ISO date string when marked completed
  inTodayFocus?: boolean; // quick flag for today's focus
  notes?: string;
  pyqs?: PYQItem[];
  numericalPractice?: NumericalPractice;
  isSupplementary?: boolean; // True for PYQ supplementary topics
}

export interface Unit {
  id: string;
  name: string;
  order: number;
  topics: Topic[];
}

export interface Subject {
  id: string;
  name: string;
  code?: string;
  semester?: string;
  department?: string;
  icon: string; // Lucide icon identifier (e.g. "gauge", "calculator", "cpu", "book-open")
  color?: string; // Optional custom accent
  units: Unit[];
}

export interface TodayTask {
  id: string;
  topicId?: string;
  subjectId?: string;
  unitId?: string;
  title: string;
  subjectName?: string;
  completed: boolean;
  priority: Priority;
  estimatedTime?: string;
  addedAt: string; // ISO date string
}

export interface StudyActivityLog {
  date: string; // YYYY-MM-DD
  count: number;
  topics: {
    topicId: string;
    topicName: string;
    subjectName: string;
    completedAt: string;
  }[];
}

export interface UserProfile {
  name: string;
  targetExam?: string;
}

export interface StudyFlowData {
  version: number;
  user: UserProfile;
  subjects: Subject[];
  todayTasks: TodayTask[];
  activityLogs: Record<string, StudyActivityLog>; // keyed by YYYY-MM-DD
  lastUpdated: string;
}

export type ActiveTab = 'overview' | 'subjects' | 'today' | 'analytics' | 'settings';
