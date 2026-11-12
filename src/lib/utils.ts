import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Subject, Unit, Priority, StudyStatus, Topic } from '@/types/study';
import { MOTIVATIONAL_QUOTES } from './constants';
import confetti from 'canvas-confetti';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGreeting(name: string = 'Satyam'): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return `Good morning, ${name}.`;
  }
  if (hour >= 12 && hour < 17) {
    return `Good afternoon, ${name}.`;
  }
  if (hour >= 17 && hour < 22) {
    return `Good evening, ${name}.`;
  }
  return `Good night, ${name}.`;
}

export function getRandomQuote(): string {
  const index = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
  return MOTIVATIONAL_QUOTES[index];
}

export function formatDate(date: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }).format(date);
}

export function formatISODateKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getTopicStudyStatus(topic: Topic): StudyStatus {
  if (topic.studyStatus) return topic.studyStatus;
  return topic.completed ? 'exam_ready' : 'not_started';
}

export function getUnitStats(unit: Unit) {
  const total = unit.topics.length;
  const completed = unit.topics.filter(t => t.completed || t.studyStatus === 'exam_ready').length;
  const examReady = unit.topics.filter(t => t.studyStatus === 'exam_ready' || (t.completed && !t.studyStatus)).length;
  const practising = unit.topics.filter(t => t.studyStatus === 'practising').length;
  const learning = unit.topics.filter(t => t.studyStatus === 'learning').length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { total, completed, percentage, examReady, practising, learning };
}

export function getSubjectStats(subject: Subject) {
  let total = 0;
  let completed = 0;
  let examReady = 0;
  let practising = 0;
  let learning = 0;
  let totalPyqs = 0;
  let solvedPyqs = 0;
  let solvedWithoutNotesPyqs = 0;
  let independentProblems = 0;
  let totalAttemptedProblems = 0;

  subject.units.forEach(u => {
    u.topics.forEach(t => {
      total += 1;
      const status = getTopicStudyStatus(t);
      if (t.completed || status === 'exam_ready') completed += 1;
      if (status === 'exam_ready') examReady += 1;
      if (status === 'practising') practising += 1;
      if (status === 'learning') learning += 1;

      if (t.pyqs) {
        totalPyqs += t.pyqs.length;
        solvedPyqs += t.pyqs.filter(p => p.solved).length;
        solvedWithoutNotesPyqs += t.pyqs.filter(p => p.solvedWithoutNotes).length;
      }

      if (t.numericalPractice) {
        independentProblems += t.numericalPractice.independentSolved || 0;
        totalAttemptedProblems += t.numericalPractice.attempted || 0;
      }
    });
  });

  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return {
    total,
    completed,
    percentage,
    examReady,
    practising,
    learning,
    notStarted: total - (examReady + practising + learning),
    totalPyqs,
    solvedPyqs,
    solvedWithoutNotesPyqs,
    independentProblems,
    totalAttemptedProblems
  };
}

export function getOverallStats(subjects: Subject[]) {
  let totalTopics = 0;
  let completedTopics = 0;
  let examReadyTopics = 0;
  let practisingTopics = 0;
  let highPriorityTotal = 0;
  let highPriorityCompleted = 0;
  let totalPyqs = 0;
  let solvedPyqs = 0;
  let independentProblems = 0;

  subjects.forEach(s => {
    s.units.forEach(u => {
      u.topics.forEach(t => {
        totalTopics += 1;
        const status = getTopicStudyStatus(t);
        const isDone = t.completed || status === 'exam_ready';
        if (isDone) completedTopics += 1;
        if (status === 'exam_ready') examReadyTopics += 1;
        if (status === 'practising') practisingTopics += 1;

        if (t.priority === 'high' || t.priority === 'very_high') {
          highPriorityTotal += 1;
          if (isDone) highPriorityCompleted += 1;
        }

        if (t.pyqs) {
          totalPyqs += t.pyqs.length;
          solvedPyqs += t.pyqs.filter(p => p.solved).length;
        }

        if (t.numericalPractice) {
          independentProblems += t.numericalPractice.independentSolved || 0;
        }
      });
    });
  });

  const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return {
    totalTopics,
    completedTopics,
    examReadyTopics,
    practisingTopics,
    percentage,
    subjectCount: subjects.length,
    highPriorityTotal,
    highPriorityCompleted,
    totalPyqs,
    solvedPyqs,
    independentProblems
  };
}

export function triggerMilestoneConfetti() {
  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#64866D', '#8EAF96', '#C4922A', '#D5D7D0']
    });
  } catch {
    // fallback gracefully if canvas-confetti is not loaded in SSR
  }
}

export const priorityConfig: Record<
  Priority,
  { label: string; dotClass: string; bgClass: string; textClass: string; borderClass: string }
> = {
  very_high: {
    label: 'Very High',
    dotClass: 'bg-[#C8483B] dark:bg-[#EF5350]',
    bgClass: 'bg-[#FCEAE7] dark:bg-[#2C1816]',
    textClass: 'text-[#B23326] dark:text-[#EF6966]',
    borderClass: 'border-[#F4C5BD] dark:border-[#532622]'
  },
  high: {
    label: 'High',
    dotClass: 'bg-[#C85A48] dark:bg-[#E0705F]',
    bgClass: 'bg-[#FBF0EE] dark:bg-[#2E1C1A]',
    textClass: 'text-[#A83D2D] dark:text-[#E0705F]',
    borderClass: 'border-[#F5CEC7] dark:border-[#4B2824]'
  },
  moderate: {
    label: 'Moderate',
    dotClass: 'bg-[#C2843A] dark:bg-[#DDA256]',
    bgClass: 'bg-[#FAF3E8] dark:bg-[#2B2316]',
    textClass: 'text-[#9E6520] dark:text-[#DDA256]',
    borderClass: 'border-[#F2DFBD] dark:border-[#48371C]'
  },
  medium: {
    label: 'Medium',
    dotClass: 'bg-[#C2843A] dark:bg-[#DDA256]',
    bgClass: 'bg-[#FAF3E8] dark:bg-[#2B2316]',
    textClass: 'text-[#9E6520] dark:text-[#DDA256]',
    borderClass: 'border-[#F2DFBD] dark:border-[#48371C]'
  },
  low: {
    label: 'Low',
    dotClass: 'bg-[#64866D] dark:bg-[#7B9F84]',
    bgClass: 'bg-[#EBF1ED] dark:bg-[#1C271F]',
    textClass: 'text-[#4D6C55] dark:text-[#7B9F84]',
    borderClass: 'border-[#D0DFD4] dark:border-[#2C4132]'
  }
};

export const studyStatusConfig: Record<
  StudyStatus,
  { label: string; dotClass: string; bgClass: string; textClass: string; borderClass: string; iconName: string }
> = {
  not_started: {
    label: 'Not Started',
    dotClass: 'bg-[#A3A59E] dark:bg-[#60645D]',
    bgClass: 'bg-[#F3F3EF] dark:bg-[#1F211E]',
    textClass: 'text-[#6F716A] dark:text-[#8E928A]',
    borderClass: 'border-[#E8E9E4] dark:border-[#2E312B]',
    iconName: 'circle'
  },
  learning: {
    label: 'Learning',
    dotClass: 'bg-[#3B82F6] dark:bg-[#60A5FA]',
    bgClass: 'bg-[#EFF6FF] dark:bg-[#1E293B]',
    textClass: 'text-[#2563EB] dark:text-[#93C5FD]',
    borderClass: 'border-[#BFDBFE] dark:border-[#1E3A8A]',
    iconName: 'book-open'
  },
  practising: {
    label: 'Practising',
    dotClass: 'bg-[#D97706] dark:bg-[#F59E0B]',
    bgClass: 'bg-[#FFFBEB] dark:bg-[#2C2314]',
    textClass: 'text-[#B45309] dark:text-[#FBBF24]',
    borderClass: 'border-[#FDE68A] dark:border-[#4E3917]',
    iconName: 'edit-3'
  },
  exam_ready: {
    label: 'Exam Ready',
    dotClass: 'bg-[#15803D] dark:bg-[#4ADE80]',
    bgClass: 'bg-[#F0FDF4] dark:bg-[#14281A]',
    textClass: 'text-[#166534] dark:text-[#86EFAC]',
    borderClass: 'border-[#BBF7D0] dark:border-[#1B4D2B]',
    iconName: 'check-circle'
  }
};


