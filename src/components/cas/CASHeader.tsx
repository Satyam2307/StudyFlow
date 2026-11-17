'use client';

import React from 'react';
import {
  LayoutDashboard,
  Layers,
  Flame,
  Calendar,
  Calculator,
  BookOpen,
  CheckCircle2,
  Search,
  X
} from 'lucide-react';
import { CASSection } from '@/types/cas';
import { useCAS } from '@/context/CASContext';
import { cn } from '@/lib/utils';

const SECTIONS: { id: CASSection; label: string; icon: any }[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'syllabus', label: 'Unit-wise Syllabus', icon: Layers },
  { id: 'important_questions', label: 'Important Questions', icon: Flame },
  { id: 'pyqs', label: 'Previous Year Questions', icon: Calendar },
  { id: 'numerical_practice', label: 'Numerical Practice', icon: Calculator },
  { id: 'answer_library', label: 'Answer Library', icon: BookOpen },
  { id: 'revision_tracker', label: 'Revision Tracker', icon: CheckCircle2 }
];

export function CASHeader() {
  const {
    activeSection,
    setActiveSection,
    filters,
    setFilters,
    getOverallAnalytics
  } = useCAS();

  const analytics = getOverallAnalytics();

  return (
    <div className="space-y-4">
      {/* 7 Navigation Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EFEFEA]/80 dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] overflow-x-auto scrollbar-none">
        {SECTIONS.map(s => {
          const Icon = s.icon;
          const isActive = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0",
                isActive
                  ? "bg-white dark:bg-[#252824] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                  : "text-[#858780] dark:text-[#8E928A] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-white/40 dark:hover:bg-[#252824]/40"
              )}
            >
              <Icon
                className={cn(
                  "w-3.5 h-3.5",
                  isActive
                    ? "text-[#64866D] dark:text-[#8EAF96]"
                    : "text-[#858780] dark:text-[#8E928A]"
                )}
              />
              <span>{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* Global Quick Search and Active Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#858780]" />
          <input
            type="text"
            value={filters.search}
            onChange={e => setFilters({ search: e.target.value })}
            placeholder="Search all 102 CAS questions, derivations, formulas, theorems..."
            className="w-full pl-8 pr-8 py-1.5 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] placeholder:text-[#858780] focus:outline-none focus:border-[#64866D]"
          />
          {filters.search && (
            <button
              onClick={() => setFilters({ search: '' })}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#858780] hover:text-[#20211F]"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Global Progress Pills */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto text-xs font-medium text-[#858780] dark:text-[#8E928A]">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#15803D]" />
            <strong className="text-[#20211F] dark:text-[#EAECE7]">{analytics.examReady}</strong> / {analytics.total} Exam Ready
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] font-mono text-[11px]">
            <span className="text-[#C8483B] font-bold">🔥 {analytics.veryHighCompleted}/{analytics.veryHighTotal}</span> Top Priority
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] font-mono text-[11px]">
            <span className="text-[#2563EB] font-bold">⚡ {analytics.solvedNumericalsCount}/{analytics.totalNumericalsCount}</span> Numericals
          </span>
        </div>
      </div>
    </div>
  );
}
