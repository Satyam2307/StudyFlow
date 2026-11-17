'use client';

import React, { useState } from 'react';
import {
  Flame,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Zap,
  Filter
} from 'lucide-react';
import { useCAS } from '@/context/CASContext';
import { CASQuestionCard } from './CASQuestionCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils';
import { CASQuestionPriority } from '@/types/cas';

export function CASImportantQuestions() {
  const { questions, getOverallAnalytics } = useCAS();
  const [priorityFilter, setPriorityFilter] = useState<CASQuestionPriority | 'all'>('all');
  const [unitFilter, setUnitFilter] = useState<number | 'all'>('all');

  const importantQuestions = questions.filter(q => {
    if (priorityFilter !== 'all' && q.priority !== priorityFilter) return false;
    if (unitFilter !== 'all' && q.unitId !== unitFilter) return false;
    return q.priority === 'very_high' || q.priority === 'high' || q.isRecurring;
  });

  const veryHighQuestions = importantQuestions.filter(q => q.priority === 'very_high');
  const highQuestions = importantQuestions.filter(q => q.priority === 'high');

  const analytics = getOverallAnalytics();

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-2xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#C8483B] dark:text-[#EF6966]">
              <Flame className="w-4 h-4 fill-current" />
              <span>HIGH-YIELD EXAMINATION QUESTIONS</span>
            </div>
            <h2 className="text-xl font-bold text-[#20211F] dark:text-[#EAECE7]">
              Most Important Questions & Recurring Topics
            </h2>
            <p className="text-xs text-[#52544E] dark:text-[#B5B9B0] max-w-2xl">
              Curated from SGSITS university exams (2019, 2022, 2023) and internal tests (2024, 2025). Prioritize these questions for maximum scoring efficiency in mid-sem and end-sem exams.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822] shrink-0 text-right">
            <span className="text-[10px] text-[#858780] block">Top Priority Readiness</span>
            <span className="text-xl font-bold text-[#C8483B] dark:text-[#EF6966]">
              {analytics.veryHighCompleted} / {analytics.veryHighTotal}
            </span>
            <span className="text-[10px] text-[#858780] block mt-0.5">
              {Math.round((analytics.veryHighCompleted / (analytics.veryHighTotal || 1)) * 100)}% Mastered
            </span>
          </div>
        </div>

        {/* Priority Filter and Unit Filter Bar */}
        <div className="pt-3 border-t border-[#F0F1EC] dark:border-[#252824] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 p-0.5 rounded-lg bg-[#EFEFEA]/60 dark:bg-[#252824]">
            {(
              [
                { id: 'all', label: 'All Top Questions' },
                { id: 'very_high', label: '🔥 Very High Priority' },
                { id: 'high', label: 'High Priority' }
              ] as const
            ).map(tab => (
              <button
                key={tab.id}
                onClick={() => setPriorityFilter(tab.id)}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-md transition-colors",
                  priorityFilter === tab.id
                    ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                    : "text-[#858780] hover:text-[#20211F]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#858780]">Filter Unit:</span>
            <select
              value={unitFilter}
              onChange={e => setUnitFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="text-xs font-medium py-1 px-2.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] focus:outline-none"
            >
              <option value="all">All 5 Units</option>
              <option value="1">Unit I: Basics & Theorems</option>
              <option value="2">Unit II: AC & 3-Phase</option>
              <option value="3">Unit III: Resonance</option>
              <option value="4">Unit IV: Two-Port & Synthesis</option>
              <option value="5">Unit V: Transients & Laplace</option>
            </select>
          </div>
        </div>
      </div>

      {/* Very High Priority Questions */}
      {(priorityFilter === 'all' || priorityFilter === 'very_high') && veryHighQuestions.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8483B]" />
              <h3 className="text-sm sm:text-base font-bold text-[#20211F] dark:text-[#EAECE7]">
                Very High Priority (Must-Prepare 7-Mark & Repeated Questions)
              </h3>
            </div>
            <span className="text-xs font-mono text-[#858780]">
              {veryHighQuestions.length} questions
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {veryHighQuestions.map(q => (
              <CASQuestionCard key={q.id} question={q} showUnitBadge />
            ))}
          </div>
        </div>
      )}

      {/* High Priority Questions */}
      {(priorityFilter === 'all' || priorityFilter === 'high') && highQuestions.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A83D2D]" />
              <h3 className="text-sm sm:text-base font-bold text-[#20211F] dark:text-[#EAECE7]">
                High Priority Questions (Conceptual Derivations & Numericals)
              </h3>
            </div>
            <span className="text-xs font-mono text-[#858780]">
              {highQuestions.length} questions
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {highQuestions.map(q => (
              <CASQuestionCard key={q.id} question={q} showUnitBadge />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
