'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Layers,
  ChevronRight,
  Bookmark,
  AlertTriangle,
  Zap,
  Award,
  Calendar,
  X
} from 'lucide-react';
import { useCAS } from '@/context/CASContext';
import { cn } from '@/lib/utils';
import { CASQuestionMarks } from '@/types/cas';

export function CASAnswerLibrary() {
  const { questions, openAnswer, unitsMetadata } = useCAS();
  const [search, setSearch] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');
  const [selectedMarks, setSelectedMarks] = useState<CASQuestionMarks | 'all'>('all');

  const filteredQuestions = questions.filter(q => {
    if (selectedUnit !== 'all' && q.unitId !== selectedUnit) return false;
    if (selectedMarks !== 'all' && q.marks !== selectedMarks) return false;

    if (search.trim()) {
      const query = search.toLowerCase().trim();
      const matchTitle = q.title.toLowerCase().includes(query);
      const matchText = q.questionText.toLowerCase().includes(query);
      const matchAnswer = q.answer.examAnswer.toLowerCase().includes(query);
      const matchQuick = q.answer.quickRevision.toLowerCase().includes(query);
      return matchTitle || matchText || matchAnswer || matchQuick;
    }

    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-2xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#64866D] dark:text-[#8EAF96]">
            <BookOpen className="w-4 h-4" />
            <span>CENTRAL MODEL ANSWER REPOSITORY</span>
          </div>
          <h2 className="text-xl font-bold text-[#20211F] dark:text-[#EAECE7]">
            CAS Answer Library (102 Questions)
          </h2>
          <p className="text-xs text-[#52544E] dark:text-[#B5B9B0] max-w-2xl">
            Access complete, examination-formatted solutions with circuit diagrams, mathematical derivations, and 3-mode reading engines for all five CAS syllabus units.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#858780]" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search questions, derivations, formulas, theorems..."
            className="w-full pl-8 pr-8 py-2 text-xs rounded-xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#161815] text-[#20211F] dark:text-[#EAECE7] placeholder:text-[#858780] focus:outline-none focus:border-[#64866D]"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#858780] hover:text-[#20211F]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="pt-3 border-t border-[#F0F1EC] dark:border-[#252824] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Unit Filter */}
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#EFEFEA]/60 dark:bg-[#252824]">
              <button
                onClick={() => setSelectedUnit('all')}
                className={cn(
                  "px-2.5 py-1 text-xs rounded-md font-medium transition-colors",
                  selectedUnit === 'all'
                    ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                    : "text-[#858780] hover:text-[#20211F]"
                )}
              >
                All Units
              </button>
              {[1, 2, 3, 4, 5].map(u => (
                <button
                  key={u}
                  onClick={() => setSelectedUnit(u)}
                  className={cn(
                    "px-2.5 py-1 text-xs rounded-md font-medium transition-colors",
                    selectedUnit === u
                      ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                      : "text-[#858780] hover:text-[#20211F]"
                  )}
                >
                  Unit {['I','II','III','IV','V'][u-1]}
                </button>
              ))}
            </div>

            {/* Marks Filter */}
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#EFEFEA]/60 dark:bg-[#252824]">
              <button
                onClick={() => setSelectedMarks('all')}
                className={cn(
                  "px-2.5 py-1 text-xs rounded-md font-medium transition-colors",
                  selectedMarks === 'all'
                    ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                    : "text-[#858780] hover:text-[#20211F]"
                )}
              >
                All Marks
              </button>
              {([7, 3, 2] as CASQuestionMarks[]).map(m => (
                <button
                  key={m}
                  onClick={() => setSelectedMarks(m)}
                  className={cn(
                    "px-2.5 py-1 text-xs rounded-md font-medium transition-colors",
                    selectedMarks === m
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
            Showing <strong>{filteredQuestions.length}</strong> / {questions.length} answers
          </span>
        </div>
      </div>

      {/* Answer Cards List */}
      <div className="space-y-3">
        {filteredQuestions.map(q => (
          <div
            key={q.id}
            className="rounded-2xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D0D2CB] dark:hover:border-[#3D423A] transition-all shadow-2xs group"
          >
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#64866D]/15 text-[#64866D] dark:text-[#8EAF96] font-mono">
                  {q.marks} MARKS
                </span>
                <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#F3F3EF] dark:bg-[#252824] text-[#858780] dark:text-[#8E928A]">
                  Unit {q.unitId}: {q.unitName.replace(/^Unit [IVXLCDM]+\s*–\s*/, '')}
                </span>
                <span className="capitalize px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#FAFBF9] dark:bg-[#20221E] text-[#6F716A] dark:text-[#9EA299] border border-[#ECEEE9] dark:border-[#2D302A]">
                  {q.type.replace('_', ' ')}
                </span>
                {q.years && q.years.length > 0 && (
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#EBF1ED] dark:bg-[#1C271F] text-[#4D6C55] dark:text-[#7B9F84]">
                    {q.years.join(', ')}
                  </span>
                )}
              </div>

              <h4 className="text-sm sm:text-base font-bold text-[#20211F] dark:text-[#EAECE7] group-hover:text-[#64866D] dark:group-hover:text-[#8EAF96] transition-colors leading-snug">
                {q.title}
              </h4>
              <p className="text-xs text-[#52544E] dark:text-[#B5B9B0] line-clamp-2">
                {q.questionText}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <button
                onClick={() => openAnswer(q, 'quickRevision')}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#FAFBF9] dark:bg-[#20221E] border border-[#E8E9E4] dark:border-[#2E312B] text-[#52544E] dark:text-[#C5C9C0] hover:bg-[#F3F3EF] dark:hover:bg-[#262823] transition-colors"
              >
                <Zap className="w-3 h-3 text-[#C2843A]" />
                <span>Quick</span>
              </button>
              <button
                onClick={() => openAnswer(q, 'examAnswer')}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors shadow-2xs"
              >
                <span>Read Answer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
