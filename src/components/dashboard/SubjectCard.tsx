'use client';

import React from 'react';
import {
  Gauge,
  BookOpen,
  Cpu,
  Layers,
  ArrowRight,
  ChevronRight,
  MoreVertical
} from 'lucide-react';
import { Subject } from '@/types/study';
import { getSubjectStats, cn } from '@/lib/utils';
import { ProgressBar } from '@/components/ui/ProgressBar';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
}

export function SubjectCard({ subject, onClick }: SubjectCardProps) {
  const stats = getSubjectStats(subject);

  // Dynamic icon mapping
  const renderIcon = () => {
    switch (subject.icon) {
      case 'gauge':
        return <Gauge className="w-4 h-4" />;
      case 'cpu':
        return <Cpu className="w-4 h-4" />;
      case 'layers':
        return <Layers className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group bg-[#FFFFFF] dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] hover:border-[#C9D8CD] dark:hover:border-[#3E4F42] rounded-xl p-5 shadow-xs transition-all duration-200 text-left flex flex-col justify-between cursor-pointer relative overflow-hidden",
        "focus-visible:outline-2 focus-visible:outline-[#64866D] dark:focus-visible:outline-[#7B9F84]"
      )}
    >
      <div>
        {/* Header Icon + Code */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[#EBF1ED] dark:bg-[#1C271F] flex items-center justify-center text-[#64866D] dark:text-[#7B9F84] transition-colors group-hover:bg-[#DFEAE2] dark:group-hover:bg-[#233527]">
            {renderIcon()}
          </div>
          {subject.code && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F3F3EF] dark:bg-[#252824] text-[#858780] dark:text-[#8E928A]">
              {subject.code}
            </span>
          )}
        </div>

        {/* Subject Title */}
        <h3 className="text-sm font-semibold text-[#20211F] dark:text-[#EAECE7] group-hover:text-[#64866D] dark:group-hover:text-[#7B9F84] transition-colors leading-snug line-clamp-2">
          {subject.name}
        </h3>

        {/* Units count */}
        <p className="text-[11px] text-[#858780] dark:text-[#8E928A] mt-1">
          {subject.units.length} {subject.units.length === 1 ? 'unit' : 'units'} · {stats.total} total topics
        </p>
      </div>

      {/* Progress & Bottom Bar */}
      <div className="pt-4 mt-4 border-t border-[#F0F1EC] dark:border-[#252824]">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-[#858780] dark:text-[#8E928A] text-[11px]">
            {stats.completed} of {stats.total} completed
          </span>
          <span className="font-semibold text-[#20211F] dark:text-[#EAECE7] text-[11px]">
            {stats.percentage}%
          </span>
        </div>

        <ProgressBar value={stats.percentage} size="sm" />

        <div className="flex items-center justify-between text-[11px] text-[#64866D] dark:text-[#7B9F84] font-medium pt-3 opacity-90 group-hover:opacity-100 transition-opacity">
          <span>View syllabus</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

