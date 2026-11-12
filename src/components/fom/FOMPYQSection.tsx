'use client';

import React, { useState } from 'react';
import { Calendar, Filter, Flame, Clock, Award } from 'lucide-react';
import { useFOM } from '@/context/FOMContext';
import { FOMQuestionCard } from './FOMQuestionCard';
import { cn } from '@/lib/utils';

const YEARS = ['2025', '2024', '2023', '2022', '2019'] as const;

export function FOMPYQSection() {
  const { questions } = useFOM();
  const [selectedYear, setSelectedYear] = useState<string>('2025');
  const [unitFilter, setUnitFilter] = useState<number | 'all'>('all');

  const yearQuestions = questions.filter(q => {
    const matchesYear = q.years.includes(selectedYear);
    if (!matchesYear) return false;
    if (unitFilter !== 'all' && q.unitId !== unitFilter) return false;
    return true;
  });

  return (
    <div className="space-y-5">
      {/* Year Selection Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EFEFEA]/80 dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] overflow-x-auto">
        {YEARS.map(year => {
          const isSelected = selectedYear === year;
          const count = questions.filter(q => q.years.includes(year)).length;
          return (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all duration-150 shrink-0",
                isSelected
                  ? "bg-white dark:bg-[#252824] text-[#20211F] dark:text-[#EAECE7] shadow-2xs"
                  : "text-[#858780] dark:text-[#8E928A] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
              )}
            >
              <Calendar className="w-3.5 h-3.5 text-[#64866D]" />
              <span>{year} Paper</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#F3F3EF] dark:bg-[#1F211E] text-[#64866D] font-mono">
                {count} Qs
              </span>
            </button>
          );
        })}
      </div>

      {/* Header and Unit Filters */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-[#FAF3E8] text-[#9E6520] dark:bg-[#2B2316] dark:text-[#DDA256] uppercase">
            Examination Year: {selectedYear}
          </span>
          <h2 className="text-base font-bold text-[#20211F] dark:text-[#EAECE7] mt-1">
            Questions from the {selectedYear} Semester Examination
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-[#858780]">Filter Unit:</span>
          <select
            value={unitFilter}
            onChange={e => setUnitFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="text-xs p-1.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#181A16] text-[#20211F] dark:text-[#EAECE7]"
          >
            <option value="all">All Units (1 to 5)</option>
            <option value="1">Unit 1: Fundamentals</option>
            <option value="2">Unit 2: CRO & CRT</option>
            <option value="3">Unit 3: Analog Instruments</option>
            <option value="4">Unit 4: Power & Resistance</option>
            <option value="5">Unit 5: AC Bridges</option>
          </select>
        </div>
      </div>

      {/* Question Cards */}
      <div className="space-y-3">
        {yearQuestions.length === 0 ? (
          <div className="p-8 text-center rounded-xl border border-dashed border-[#E8E9E4] dark:border-[#292C27] text-[#858780]">
            No questions recorded for this year under the chosen unit.
          </div>
        ) : (
          yearQuestions.map(q => <FOMQuestionCard key={q.id} question={q} showUnitBadge />)
        )}
      </div>
    </div>
  );
}
