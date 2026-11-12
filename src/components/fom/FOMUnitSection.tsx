'use client';

import React, { useState } from 'react';
import {
  Layers,
  Award,
  Flame,
  CheckCircle2,
  Clock,
  Filter,
  Calculator,
  FileText
} from 'lucide-react';
import { useFOM } from '@/context/FOMContext';
import { FOM_UNITS_METADATA } from '@/lib/fomData';
import { FOMQuestionCard } from './FOMQuestionCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils';
import { QuestionMarks, QuestionPriority, QuestionType } from '@/types/fom';

export function FOMUnitSection() {
  const {
    selectedUnitId,
    setSelectedUnitId,
    getUnitQuestions,
    getUnitAnalytics,
    filters,
    setFilters
  } = useFOM();

  const currentUnitId = selectedUnitId || 1;
  const unitMeta = FOM_UNITS_METADATA.find(u => u.id === currentUnitId) || FOM_UNITS_METADATA[0];
  const analytics = getUnitAnalytics(currentUnitId);
  const questions = getUnitQuestions(currentUnitId);

  // Local filter within unit
  const [markFilter, setMarkFilter] = useState<QuestionMarks | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<QuestionType | 'all'>('all');
  const [priorityFilter, setPriorityFilter] = useState<QuestionPriority | 'all'>('all');

  const filteredQuestions = questions.filter(q => {
    if (markFilter !== 'all' && q.marks !== markFilter) return false;
    if (typeFilter !== 'all' && q.type !== typeFilter) return false;
    if (priorityFilter !== 'all' && q.priority !== priorityFilter) return false;
    if (filters.search.trim()) {
      const query = filters.search.toLowerCase();
      const matchTitle = q.title.toLowerCase().includes(query);
      const matchText = q.questionText.toLowerCase().includes(query);
      const matchYears = q.years.some(y => y.includes(query));
      if (!matchTitle && !matchText && !matchYears) return false;
    }
    return true;
  });

  return (
    <div className="space-y-5">
      {/* Unit Switcher Tabs (Unit 1 to 5) */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EFEFEA]/80 dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] overflow-x-auto">
        {FOM_UNITS_METADATA.map(unit => {
          const isSelected = unit.id === currentUnitId;
          const uStats = getUnitAnalytics(unit.id);
          return (
            <button
              key={unit.id}
              onClick={() => setSelectedUnitId(unit.id)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 shrink-0",
                isSelected
                  ? "bg-white dark:bg-[#252824] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                  : "text-[#858780] dark:text-[#8E928A] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
              )}
            >
              <span>Unit {unit.id}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#F3F3EF] dark:bg-[#1F211E] font-mono text-[#64866D] dark:text-[#8EAF96]">
                {uStats.percentage}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Required Unit-Wise Analytics Dashboard at Top */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#64866D]/15 text-[#64866D] dark:text-[#8EAF96] font-mono">
                UNIT {currentUnitId} ANALYTICS
              </span>
              <span className="text-xs text-[#858780] dark:text-[#8E928A]">
                {analytics.total} Total Questions
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#20211F] dark:text-[#EAECE7]">
              {unitMeta.name}
            </h3>
          </div>

          <div className="flex items-baseline sm:justify-end gap-1.5">
            <span className="text-2xl font-extrabold text-[#20211F] dark:text-[#EAECE7]">
              {analytics.percentage}%
            </span>
            <span className="text-xs text-[#858780] dark:text-[#8E928A]">
              completed
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar value={analytics.percentage} size="md" className="mb-4" />

        {/* The Exact 8 Analytics Metrics Required by User */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-3 border-t border-[#F0F1EC] dark:border-[#252824]">
          <div className="p-2 rounded-lg bg-[#FAFBF9] dark:bg-[#181A16] border border-[#ECEEE9] dark:border-[#262822] text-center">
            <span className="text-[9px] text-[#858780] dark:text-[#8E928A] block uppercase font-mono">Total Qs</span>
            <span className="text-sm font-bold text-[#20211F] dark:text-[#EAECE7]">{analytics.total}</span>
          </div>

          <div className="p-2 rounded-lg bg-[#FAFBF9] dark:bg-[#181A16] border border-[#ECEEE9] dark:border-[#262822] text-center">
            <span className="text-[9px] text-[#858780] dark:text-[#8E928A] block uppercase font-mono">2-Mark</span>
            <span className="text-sm font-bold text-[#20211F] dark:text-[#EAECE7]">{analytics.marks2}</span>
          </div>

          <div className="p-2 rounded-lg bg-[#FAFBF9] dark:bg-[#181A16] border border-[#ECEEE9] dark:border-[#262822] text-center">
            <span className="text-[9px] text-[#858780] dark:text-[#8E928A] block uppercase font-mono">3-Mark</span>
            <span className="text-sm font-bold text-[#20211F] dark:text-[#EAECE7]">{analytics.marks3}</span>
          </div>

          <div className="p-2 rounded-lg bg-[#FAFBF9] dark:bg-[#181A16] border border-[#ECEEE9] dark:border-[#262822] text-center">
            <span className="text-[9px] text-[#858780] dark:text-[#8E928A] block uppercase font-mono">7-Mark</span>
            <span className="text-sm font-bold text-[#64866D] dark:text-[#8EAF96]">{analytics.marks7}</span>
          </div>

          <div className="p-2 rounded-lg bg-[#FAFBF9] dark:bg-[#181A16] border border-[#ECEEE9] dark:border-[#262822] text-center">
            <span className="text-[9px] text-[#858780] dark:text-[#8E928A] block uppercase font-mono">Numericals</span>
            <span className="text-sm font-bold text-[#B45309] dark:text-[#FBBF24]">{analytics.numericals}</span>
          </div>

          <div className="p-2 rounded-lg bg-[#FCEAE7] dark:bg-[#2C1816] border border-[#F4C5BD] dark:border-[#532622] text-center">
            <span className="text-[9px] text-[#B23326] dark:text-[#EF6966] block uppercase font-mono">Very High</span>
            <span className="text-sm font-bold text-[#B23326] dark:text-[#EF6966]">{analytics.veryHigh}</span>
          </div>

          <div className="p-2 rounded-lg bg-[#F0FDF4] dark:bg-[#14281A] border border-[#BBF7D0] dark:border-[#1B4D2B] text-center">
            <span className="text-[9px] text-[#166534] dark:text-[#86EFAC] block uppercase font-mono">Exam Ready</span>
            <span className="text-sm font-bold text-[#166534] dark:text-[#86EFAC]">{analytics.examReady}</span>
          </div>

          <div className="p-2 rounded-lg bg-[#FAFBF9] dark:bg-[#181A16] border border-[#ECEEE9] dark:border-[#262822] text-center">
            <span className="text-[9px] text-[#858780] dark:text-[#8E928A] block uppercase font-mono">Remaining</span>
            <span className="text-sm font-bold text-[#20211F] dark:text-[#EAECE7]">{analytics.remaining}</span>
          </div>
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-[11px] font-medium text-[#858780] mr-1">Marks:</span>
          {(['all', 7, 3, 2] as const).map(m => (
            <button
              key={m}
              onClick={() => setMarkFilter(m)}
              className={cn(
                "px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors",
                markFilter === m
                  ? "bg-[#20211F] text-white dark:bg-[#EAECE7] dark:text-[#20211F]"
                  : "bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] text-[#858780] hover:text-[#20211F]"
              )}
            >
              {m === 'all' ? 'All Marks' : `${m}M`}
            </button>
          ))}

          <span className="text-[11px] font-medium text-[#858780] ml-2 mr-1">Type:</span>
          {(['all', 'theory', 'derivation', 'numerical', 'diagram'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={cn(
                "px-2.5 py-1 rounded-lg text-[11px] font-semibold capitalize transition-colors",
                typeFilter === t
                  ? "bg-[#64866D] text-white"
                  : "bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] text-[#858780] hover:text-[#20211F]"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <span className="text-xs text-[#858780] dark:text-[#8E928A]">
          Showing {filteredQuestions.length} of {questions.length} questions
        </span>
      </div>

      {/* Question Cards List */}
      <div className="space-y-3 pt-1">
        {filteredQuestions.length === 0 ? (
          <div className="p-8 text-center rounded-xl border border-dashed border-[#E8E9E4] dark:border-[#292C27] text-[#858780]">
            No questions match the current filter selection.
          </div>
        ) : (
          filteredQuestions.map(q => <FOMQuestionCard key={q.id} question={q} />)
        )}
      </div>
    </div>
  );
}
