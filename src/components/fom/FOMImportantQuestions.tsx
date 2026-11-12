'use client';

import React, { useState } from 'react';
import {
  Flame,
  Filter,
  Layers,
  Award,
  CheckCircle2,
  Calendar,
  Sparkles,
  SlidersHorizontal,
  RotateCcw
} from 'lucide-react';
import { useFOM } from '@/context/FOMContext';
import { FOMQuestionCard } from './FOMQuestionCard';
import { QuestionMarks, QuestionPriority, QuestionType, QuestionPrepStatus } from '@/types/fom';
import { cn } from '@/lib/utils';

export function FOMImportantQuestions() {
  const { getImportantRecurringQuestions } = useFOM();

  const [unitFilter, setUnitFilter] = useState<number | 'all'>('all');
  const [markFilter, setMarkFilter] = useState<QuestionMarks | 'all'>('all');
  const [priorityFilter, setPriorityFilter] = useState<QuestionPriority | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<QuestionType | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<QuestionPrepStatus | 'all'>('all');

  const importantQuestions = getImportantRecurringQuestions();

  const filtered = importantQuestions.filter(q => {
    if (unitFilter !== 'all' && q.unitId !== unitFilter) return false;
    if (markFilter !== 'all' && q.marks !== markFilter) return false;
    if (priorityFilter !== 'all' && q.priority !== priorityFilter) return false;
    if (typeFilter !== 'all' && q.type !== typeFilter) return false;
    if (statusFilter !== 'all' && q.status !== statusFilter) return false;
    return true;
  });

  const resetAllFilters = () => {
    setUnitFilter('all');
    setMarkFilter('all');
    setPriorityFilter('all');
    setTypeFilter('all');
    setStatusFilter('all');
  };

  const isFiltered =
    unitFilter !== 'all' ||
    markFilter !== 'all' ||
    priorityFilter !== 'all' ||
    typeFilter !== 'all' ||
    statusFilter !== 'all';

  return (
    <div className="space-y-5">
      {/* Header Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#FDF6F5] to-white dark:from-[#231716] dark:to-[#1D1F1C] border border-[#F4C5BD] dark:border-[#532622] shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 rounded-lg bg-[#FCEAE7] dark:bg-[#3D1D1B] text-[#C8483B]">
            <Flame className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-[#B23326] dark:text-[#EF6966] uppercase tracking-wider font-mono">
            Most Important Recurring Questions
          </span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-[#20211F] dark:text-[#EAECE7]">
          High-Yield Exam Questions Across All 5 Units
        </h2>
        <p className="text-xs text-[#858780] dark:text-[#8E928A] mt-1 max-w-2xl">
          Prioritized ranking of the most frequently asked 7-mark and 2–3 mark questions appearing across 2019, 2022, 2023, 2024, and 2025 examination papers.
        </p>

        {/* Quick summary stats */}
        <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-[#F5CEC7]/50 dark:border-[#532622]/50 text-xs text-[#858780] dark:text-[#8E928A]">
          <span>
            <strong className="text-[#20211F] dark:text-[#EAECE7]">{importantQuestions.length}</strong> top recurring questions
          </span>
          <span>•</span>
          <span>
            <strong className="text-[#64866D] dark:text-[#8EAF96]">
              {importantQuestions.filter(q => q.marks === 7).length}
            </strong> 7-mark core questions
          </span>
          <span>•</span>
          <span>
            <strong className="text-[#166534] dark:text-[#86EFAC]">
              {importantQuestions.filter(q => q.status === 'exam_ready').length}
            </strong> exam ready
          </span>
        </div>
      </div>

      {/* Filter Control Console */}
      <div className="p-4 rounded-xl bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-[#20211F] dark:text-[#EAECE7] flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#64866D]" />
            <span>Filter High-Yield Questions</span>
          </span>
          {isFiltered && (
            <button
              onClick={resetAllFilters}
              className="flex items-center gap-1 text-[11px] text-[#C85A48] hover:underline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
          {/* Unit filter */}
          <div>
            <label className="text-[10px] text-[#858780] block mb-1">Unit</label>
            <select
              value={unitFilter}
              onChange={e => setUnitFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full text-xs p-1.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#181A16] text-[#20211F] dark:text-[#EAECE7]"
            >
              <option value="all">All Units</option>
              <option value="1">Unit 1: Fundamentals</option>
              <option value="2">Unit 2: CRO/CRT</option>
              <option value="3">Unit 3: Analog Meters</option>
              <option value="4">Unit 4: Power/Bridges</option>
              <option value="5">Unit 5: AC Bridges</option>
            </select>
          </div>

          {/* Marks filter */}
          <div>
            <label className="text-[10px] text-[#858780] block mb-1">Marks</label>
            <select
              value={markFilter}
              onChange={e => setMarkFilter(e.target.value === 'all' ? 'all' : (Number(e.target.value) as QuestionMarks))}
              className="w-full text-xs p-1.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#181A16] text-[#20211F] dark:text-[#EAECE7]"
            >
              <option value="all">All Marks</option>
              <option value="7">7 Marks</option>
              <option value="3">3 Marks</option>
              <option value="2">2 Marks</option>
            </select>
          </div>

          {/* Priority filter */}
          <div>
            <label className="text-[10px] text-[#858780] block mb-1">Priority</label>
            <select
              value={priorityFilter}
              onChange={e => setPriorityFilter(e.target.value as any)}
              className="w-full text-xs p-1.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#181A16] text-[#20211F] dark:text-[#EAECE7]"
            >
              <option value="all">All Priorities</option>
              <option value="very_high">Very High</option>
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
            </select>
          </div>

          {/* Type filter */}
          <div>
            <label className="text-[10px] text-[#858780] block mb-1">Question Type</label>
            <select
              value={typeFilter}
              onChange={e => setTypeFilter(e.target.value as any)}
              className="w-full text-xs p-1.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#181A16] text-[#20211F] dark:text-[#EAECE7]"
            >
              <option value="all">All Types</option>
              <option value="theory">Theory</option>
              <option value="derivation">Derivation</option>
              <option value="numerical">Numerical</option>
              <option value="diagram">Diagram</option>
            </select>
          </div>

          {/* Status filter */}
          <div>
            <label className="text-[10px] text-[#858780] block mb-1">Status</label>
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value as any)}
              className="w-full text-xs p-1.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#181A16] text-[#20211F] dark:text-[#EAECE7]"
            >
              <option value="all">All Statuses</option>
              <option value="not_studied">⚪ Not Studied</option>
              <option value="reading">📖 Reading</option>
              <option value="understood">💡 Understood</option>
              <option value="practising">✏️ Practising</option>
              <option value="revised">✅ Revised</option>
              <option value="exam_ready">🎯 Exam Ready</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filtered Question Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-[#858780]">
          <span>Showing {filtered.length} priority questions</span>
        </div>

        {filtered.length === 0 ? (
          <div className="p-8 text-center rounded-xl border border-dashed border-[#E8E9E4] dark:border-[#292C27] text-[#858780]">
            No recurring questions match your selected filter criteria.
          </div>
        ) : (
          filtered.map(q => <FOMQuestionCard key={q.id} question={q} showUnitBadge />)
        )}
      </div>
    </div>
  );
}
