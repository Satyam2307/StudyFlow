export type Priority = 'high' | 'medium' | 'low';

export interface Topic {
  id: string;
  name: string;
  completed: boolean;
  priority: Priority;
  estimatedTime?: string; // e.g. "30 min", "1 hr", "45 min"
  completedAt?: string; // ISO date string when marked completed
  inTodayFocus?: boolean; // quick flag for today's focus
  notes?: string;
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
  icon: string; // Lucide icon identifier (e.g. "gauge", "cpu", "book-open")
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

