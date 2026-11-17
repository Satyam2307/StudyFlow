'use client';

import React from 'react';
import {
  Layers,
  Filter,
  Bookmark,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Calendar,
  Zap,
  Flame,
  Award
} from 'lucide-react';
import { useCAS } from '@/context/CASContext';
import { CASQuestionCard } from './CASQuestionCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils';
import { CASQuestionMarks, CASQuestionPriority, CASQuestionType } from '@/types/cas';

export function CASUnitSection() {
  const {
    unitsMetadata,
    selectedUnitId,
    setSelectedUnitId,
    filters,
    setFilters,
    resetFilters,
    getFilteredQuestions,
    getUnitAnalytics
  } = useCAS();

  const questions = getFilteredQuestions();

  const activeUnitId = selectedUnitId || 1;
  const currentUnitMeta = unitsMetadata.find(u => u.id === activeUnitId) || unitsMetadata[0];
  const unitAnalytics = getUnitAnalytics(activeUnitId);

  return (
    <div className="space-y-5">
      {/* 5 Unit Selector Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EFEFEA]/80 dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] overflow-x-auto scrollbar-none">
        <button
          onClick={() => {
            setSelectedUnitId(null);
            setFilters({ unit: null });
          }}
          className={cn(
            "px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0",
            selectedUnitId === null
              ? "bg-white dark:bg-[#252824] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
              : "text-[#858780] dark:text-[#8E928A] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
          )}
        >
          All 5 Units
        </button>

        {unitsMetadata.map(u => {
          const isSelected = selectedUnitId === u.id;
          return (
            <button
              key={u.id}
              onClick={() => {
                setSelectedUnitId(u.id);
                setFilters({ unit: u.id });
              }}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0",
                isSelected
                  ? "bg-white dark:bg-[#252824] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                  : "text-[#858780] dark:text-[#8E928A] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
              )}
            >
              <span className="font-mono text-[11px]">Unit {['I','II','III','IV','V'][u.id-1]}:</span>
              <span>{u.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Unit Summary Card */}
      {selectedUnitId !== null && (
        <div className="rounded-2xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] p-5 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-[#64866D]/15 text-[#64866D] dark:text-[#8EAF96] font-mono">
                  UNIT {['I','II','III','IV','V'][currentUnitMeta.id-1]}
                </span>
                <span className="text-xs text-[#858780] dark:text-[#8E928A]">
                  {currentUnitMeta.code} • {currentUnitMeta.pyqWeightage}
                </span>
              </div>
              <h2 className="text-lg font-bold text-[#20211F] dark:text-[#EAECE7]">
                {currentUnitMeta.name}
              </h2>
              <p className="text-xs text-[#52544E] dark:text-[#B5B9B0] mt-1">
                {currentUnitMeta.description}
              </p>
            </div>

            {/* Core vs PYQ topics badge */}
            <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
              <span className="text-xs font-semibold text-[#20211F] dark:text-[#EAECE7]">
                {currentUnitMeta.coreTopicsCount} Core Topics
              </span>
              <span className="text-[11px] font-medium text-[#92400E] dark:text-[#FDE68A] bg-[#FEF3C7] dark:bg-[#78350F]/40 px-2 py-0.5 rounded-md border border-[#FDE68A] dark:border-[#B45309]/50">
                +{currentUnitMeta.supplementaryTopicsCount} PYQ Supplementary
              </span>
            </div>
          </div>

          {/* Unit Analytics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 pt-3 border-t border-[#F0F1EC] dark:border-[#252824]">
            <div className="p-2.5 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
              <span className="text-[10px] text-[#858780] block">Total Questions</span>
              <span className="text-base font-bold text-[#20211F] dark:text-[#EAECE7]">
                {unitAnalytics.total}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
              <span className="text-[10px] text-[#166534] dark:text-[#86EFAC] block">Exam Ready</span>
              <span className="text-base font-bold text-[#166534] dark:text-[#86EFAC]">
                {unitAnalytics.examReady}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
              <span className="text-[10px] text-[#64866D] dark:text-[#8EAF96] block">7-Mark Questions</span>
              <span className="text-base font-bold text-[#64866D] dark:text-[#8EAF96]">
                {unitAnalytics.marks7}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
              <span className="text-[10px] text-[#9E6520] dark:text-[#DDA256] block">3-Mark Questions</span>
              <span className="text-base font-bold text-[#9E6520] dark:text-[#DDA256]">
                {unitAnalytics.marks3}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
              <span className="text-[10px] text-[#2563EB] dark:text-[#60A5FA] block">Numericals</span>
              <span className="text-base font-bold text-[#2563EB] dark:text-[#60A5FA]">
                {unitAnalytics.numericals}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
              <span className="text-[10px] text-[#C8483B] dark:text-[#EF6966] block">Top Priority</span>
              <span className="text-base font-bold text-[#C8483B] dark:text-[#EF6966]">
                {unitAnalytics.veryHigh}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#858780] font-medium">Unit Exam Readiness</span>
              <span className="font-bold text-[#64866D] dark:text-[#8EAF96]">
                {unitAnalytics.percentage}%
              </span>
            </div>
            <ProgressBar value={unitAnalytics.percentage} size="sm" />
          </div>
        </div>
      )}

      {/* Filter and Refinement Controls */}
      <div className="p-3.5 rounded-xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] space-y-3 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Marks Filter */}
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#EFEFEA]/60 dark:bg-[#252824]">
              <button
                onClick={() => setFilters({ marks: null })}
                className={cn(
                  "px-2.5 py-1 rounded-md font-medium transition-colors",
                  filters.marks === null
                    ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                    : "text-[#858780] hover:text-[#20211F]"
                )}
              >
                All Marks
              </button>
              {([7, 3, 2] as CASQuestionMarks[]).map(m => (
                <button
                  key={m}
                  onClick={() => setFilters({ marks: m })}
                  className={cn(
                    "px-2.5 py-1 rounded-md font-medium transition-colors",
                    filters.marks === m
                      ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                      : "text-[#858780] hover:text-[#20211F]"
                  )}
                >
                  {m}M
                </button>
              ))}
            </div>

            {/* Priority Filter */}
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#EFEFEA]/60 dark:bg-[#252824]">
              <button
                onClick={() => setFilters({ priority: null })}
                className={cn(
                  "px-2.5 py-1 rounded-md font-medium transition-colors",
                  filters.priority === null
                    ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                    : "text-[#858780] hover:text-[#20211F]"
                )}
              >
                All Priority
              </button>
              {(
                [
                  { id: 'very_high', label: '🔥 Very High' },
                  { id: 'high', label: 'High' }
                ] as { id: CASQuestionPriority; label: string }[]
              ).map(p => (
                <button
                  key={p.id}
                  onClick={() => setFilters({ priority: p.id })}
                  className={cn(
                    "px-2.5 py-1 rounded-md font-medium transition-colors",
                    filters.priority === p.id
                      ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                      : "text-[#858780] hover:text-[#20211F]"
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Supplementary toggle */}
            <button
              onClick={() => setFilters({ supplementaryOnly: !filters.supplementaryOnly })}
              className={cn(
                "px-2.5 py-1 rounded-lg text-xs font-semibold border transition-colors",
                filters.supplementaryOnly
                  ? "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A] dark:bg-[#78350F] dark:text-[#FDE68A]"
                  : "bg-white dark:bg-[#20221E] text-[#858780] border-[#E8E9E4] dark:border-[#2D302A] hover:text-[#20211F]"
              )}
            >
              PYQ Supplementary Only
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Bookmarked Only */}
            <button
              onClick={() => setFilters({ bookmarkedOnly: !filters.bookmarkedOnly })}
              className={cn(
                "flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors",
                filters.bookmarkedOnly
                  ? "bg-[#FAF3E8] dark:bg-[#2B2316] text-[#C2843A] dark:text-[#DDA256] border-[#F2DFBD] dark:border-[#48371C]"
                  : "bg-white dark:bg-[#20221E] text-[#858780] border-[#E8E9E4] dark:border-[#2D302A] hover:text-[#20211F]"
              )}
            >
              <Bookmark className="w-3 h-3 fill-current" />
              <span>Bookmarked</span>
            </button>

            {/* Difficult Only */}
            <button
              onClick={() => setFilters({ difficultOnly: !filters.difficultOnly })}
              className={cn(
                "flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors",
                filters.difficultOnly
                  ? "bg-[#FCEAE7] dark:bg-[#2C1816] text-[#C8483B] dark:text-[#EF6966] border-[#F4C5BD] dark:border-[#532622]"
                  : "bg-white dark:bg-[#20221E] text-[#858780] border-[#E8E9E4] dark:border-[#2D302A] hover:text-[#20211F]"
              )}
            >
              <AlertTriangle className="w-3 h-3" />
              <span>Difficult</span>
            </button>

            {/* Reset */}
            <button
              onClick={resetFilters}
              className="p-1 rounded-lg text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] transition-colors"
              title="Reset Filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-[#858780] dark:text-[#8E928A] px-1">
          <span>Showing <strong>{questions.length}</strong> questions</span>
        </div>

        {questions.length === 0 ? (
          <div className="text-center py-12 rounded-2xl border border-dashed border-[#E8E9E4] dark:border-[#292C27] p-8">
            <Layers className="w-8 h-8 text-[#858780] mx-auto mb-2 opacity-50" />
            <h4 className="text-sm font-semibold text-[#20211F] dark:text-[#EAECE7]">
              No questions found
            </h4>
            <p className="text-xs text-[#858780] mt-1">
              Try adjusting your filters or search query to view questions.
            </p>
            <button
              onClick={resetFilters}
              className="mt-3 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#64866D] text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {questions.map(q => (
              <CASQuestionCard key={q.id} question={q} showUnitBadge={selectedUnitId === null} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
