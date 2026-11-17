'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Layers,
  Award,
  Filter,
  CheckCircle2,
  FileText,
  Clock
} from 'lucide-react';
import { useCAS } from '@/context/CASContext';
import { CASQuestionCard } from './CASQuestionCard';
import { cn } from '@/lib/utils';
import { CASQuestionMarks } from '@/types/cas';

const YEARS = [
  { id: 'all', label: 'All Exam Papers' },
  { id: '2025 Test', label: '2025 Test Papers' },
  { id: '2024 Test', label: '2024 Test Papers' },
  { id: '2023', label: '2023 University Exam' },
  { id: '2022', label: '2022 University Exam' },
  { id: '2019', label: '2019 University Exam' }
];

export function CASPYQSection() {
  const { questions, getPYQQuestions } = useCAS();
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [marksFilter, setMarksFilter] = useState<CASQuestionMarks | 'all'>('all');

  const pyqQuestions = questions.filter(q => {
    if (selectedYear !== 'all') {
      if (!q.years.some(y => y.includes(selectedYear))) return false;
    } else {
      if (q.years.length === 0 || q.years.includes('Practice')) return false;
    }
    if (marksFilter !== 'all' && q.marks !== marksFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-2xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#64866D] dark:text-[#8EAF96]">
            <Calendar className="w-4 h-4" />
            <span>PAST UNIVERSITY & INTERNAL EXAM PAPERS</span>
          </div>
          <h2 className="text-xl font-bold text-[#20211F] dark:text-[#EAECE7]">
            Previous Year Examination Questions
          </h2>
          <p className="text-xs text-[#52544E] dark:text-[#B5B9B0] max-w-2xl">
            SGSITS university end-sem papers (2019, 2022, 2023) and internal test papers (2024, 2025). Filter by examination paper year and marks category.
          </p>
        </div>

        {/* Year Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EFEFEA]/80 dark:bg-[#252824] overflow-x-auto">
          {YEARS.map(y => (
            <button
              key={y.id}
              onClick={() => setSelectedYear(y.id)}
              className={cn(
                "px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0",
                selectedYear === y.id
                  ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                  : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
              )}
            >
              {y.label}
            </button>
          ))}
        </div>

        {/* Marks Filter */}
        <div className="pt-3 border-t border-[#F0F1EC] dark:border-[#252824] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[#858780]">Marks:</span>
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#EFEFEA]/60 dark:bg-[#252824]">
              <button
                onClick={() => setMarksFilter('all')}
                className={cn(
                  "px-2.5 py-1 text-xs rounded-md font-medium transition-colors",
                  marksFilter === 'all'
                    ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                    : "text-[#858780] hover:text-[#20211F]"
                )}
              >
                All Marks
              </button>
              {([7, 3, 2] as CASQuestionMarks[]).map(m => (
                <button
                  key={m}
                  onClick={() => setMarksFilter(m)}
                  className={cn(
                    "px-2.5 py-1 text-xs rounded-md font-medium transition-colors",
                    marksFilter === m
                      ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                      : "text-[#858780] hover:text-[#20211F]"
                  )}
                >
                  {m}M
                </button>
              ))}
            </div>
          </div>

          <span className="text-xs text-[#858780] font-mono">
            <strong>{pyqQuestions.length}</strong> questions found
          </span>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {pyqQuestions.length === 0 ? (
          <div className="text-center py-12 rounded-2xl border border-dashed border-[#E8E9E4] dark:border-[#292C27] p-8">
            <Calendar className="w-8 h-8 text-[#858780] mx-auto mb-2 opacity-50" />
            <h4 className="text-sm font-semibold text-[#20211F] dark:text-[#EAECE7]">
              No questions found for this exam filter
            </h4>
            <p className="text-xs text-[#858780] mt-1">
              Select a different year or marks category above.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {pyqQuestions.map(q => (
              <CASQuestionCard key={q.id} question={q} showUnitBadge />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
