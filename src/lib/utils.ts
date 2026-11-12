import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Subject, Unit, Priority } from '@/types/study';
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

export function getUnitStats(unit: Unit) {
  const total = unit.topics.length;
  const completed = unit.topics.filter(t => t.completed).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { total, completed, percentage };
}

export function getSubjectStats(subject: Subject) {
  let total = 0;
  let completed = 0;
  subject.units.forEach(u => {
    u.topics.forEach(t => {
      total += 1;
      if (t.completed) completed += 1;
    });
  });
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { total, completed, percentage };
}

export function getOverallStats(subjects: Subject[]) {
  let totalTopics = 0;
  let completedTopics = 0;
  let highPriorityTotal = 0;
  let highPriorityCompleted = 0;

  subjects.forEach(s => {
    s.units.forEach(u => {
      u.topics.forEach(t => {
        totalTopics += 1;
        if (t.completed) completedTopics += 1;
        if (t.priority === 'high') {
          highPriorityTotal += 1;
          if (t.completed) highPriorityCompleted += 1;
        }
      });
    });
  });

  const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return {
    totalTopics,
    completedTopics,
    percentage,
    subjectCount: subjects.length,
    highPriorityTotal,
    highPriorityCompleted
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
  { label: string; dotClass: string; bgClass: string; textClass: string }
> = {
  high: {
    label: 'High',
    dotClass: 'bg-[#C85A48] dark:bg-[#E0705F]',
    bgClass: 'bg-[#FBF0EE] dark:bg-[#2E1C1A]',
    textClass: 'text-[#A83D2D] dark:text-[#E0705F]'
  },
  medium: {
    label: 'Medium',
    dotClass: 'bg-[#C2843A] dark:bg-[#DDA256]',
    bgClass: 'bg-[#FAF3E8] dark:bg-[#2B2316]',
    textClass: 'text-[#9E6520] dark:text-[#DDA256]'
  },
  low: {
    label: 'Low',
    dotClass: 'bg-[#64866D] dark:bg-[#7B9F84]',
    bgClass: 'bg-[#EBF1ED] dark:bg-[#1C271F]',
    textClass: 'text-[#4D6C55] dark:text-[#7B9F84]'
  }
};

