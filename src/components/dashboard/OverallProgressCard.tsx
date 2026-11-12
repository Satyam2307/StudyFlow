'use client';

import React from 'react';
import { useStudy } from '@/context/StudyContext';
import { getOverallStats } from '@/lib/utils';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { BookOpen, CheckCircle2, Flame, Layers } from 'lucide-react';

export function OverallProgressCard() {
  const { data } = useStudy();
  const stats = getOverallStats(data.subjects);

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl p-5 sm:p-6 shadow-xs relative overflow-hidden transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#858780] dark:text-[#8E928A]">
            Overall Progress
          </span>
          <div className="flex items-baseline gap-2.5 mt-1">
            <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#20211F] dark:text-[#EAECE7]">
              {stats.percentage}%
            </span>
            <span className="text-xs text-[#858780] dark:text-[#8E928A]">
              completed
            </span>
          </div>
        </div>

        <div className="text-right sm:text-right">
          <p className="text-xs font-medium text-[#20211F] dark:text-[#EAECE7]">
            {stats.completedTopics} / {stats.totalTopics} topics
          </p>
          <p className="text-[11px] text-[#858780] dark:text-[#8E928A]">
            across {stats.subjectCount} {stats.subjectCount === 1 ? 'subject' : 'subjects'}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar value={stats.percentage} size="md" className="my-3" />

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-3 pt-4 mt-4 border-t border-[#F0F1EC] dark:border-[#252824]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#EBF1ED] dark:bg-[#1C271F] flex items-center justify-center text-[#64866D] dark:text-[#7B9F84] shrink-0">
            <BookOpen className="w-4 h-4 stroke-[1.8]" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#20211F] dark:text-[#EAECE7]">
              {stats.subjectCount}
            </p>
            <p className="text-[10px] text-[#858780] dark:text-[#8E928A]">
              Subjects
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#EBF1ED] dark:bg-[#1C271F] flex items-center justify-center text-[#64866D] dark:text-[#7B9F84] shrink-0">
            <CheckCircle2 className="w-4 h-4 stroke-[1.8]" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#20211F] dark:text-[#EAECE7]">
              {stats.completedTopics}
            </p>
            <p className="text-[10px] text-[#858780] dark:text-[#8E928A]">
              Completed
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FAF3E8] dark:bg-[#2B2316] flex items-center justify-center text-[#C2843A] dark:text-[#DDA256] shrink-0">
            <Flame className="w-4 h-4 stroke-[1.8]" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#20211F] dark:text-[#EAECE7]">
              {stats.highPriorityCompleted}/{stats.highPriorityTotal}
            </p>
            <p className="text-[10px] text-[#858780] dark:text-[#8E928A]">
              High Priority
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

