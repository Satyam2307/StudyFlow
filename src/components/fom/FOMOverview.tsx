'use client';

import React from 'react';
import {
  Award,
  CheckCircle2,
  Clock,
  BookOpen,
  Edit3,
  Flame,
  Calculator,
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles,
  Calendar
} from 'lucide-react';
import { useFOM } from '@/context/FOMContext';
import { FOM_UNITS_METADATA } from '@/lib/fomData';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils';

export function FOMOverview() {
  const {
    getOverallAnalytics,
    getUnitAnalytics,
    setActiveSection,
    setSelectedUnitId,
    setFilters
  } = useFOM();

  const overall = getOverallAnalytics();

  const handleOpenUnit = (unitId: number) => {
    setSelectedUnitId(unitId);
    setFilters({ unit: unitId });
    setActiveSection('syllabus');
  };

  const handleOpenImportant = () => {
    setFilters({ priority: 'very_high' });
    setActiveSection('important_questions');
  };

  const handleOpenNumericals = () => {
    setActiveSection('numerical_practice');
  };

  const handleOpenPYQs = () => {
    setActiveSection('pyqs');
  };

  return (
    <div className="space-y-6">
      {/* Hero Stats Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F3F3EF] dark:bg-[#252824] text-[#858780] dark:text-[#8E928A]">
                EI-27002 / EI-27012
              </span>
              <span className="text-xs text-[#858780] dark:text-[#8E928A]">
                5 Units • 105 Exam Questions
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#20211F] dark:text-[#EAECE7]">
              FOM Complete Examination System
            </h2>
            <p className="text-xs text-[#858780] dark:text-[#8E928A] mt-1 max-w-xl">
              Complete unit-wise previous-year question bank with 3-mode answers, technical derivations, circuit diagrams, and numerical solutions from 2019–2025.
            </p>
          </div>

          <div className="sm:text-right shrink-0">
            <div className="flex items-baseline sm:justify-end gap-1.5">
              <span className="text-3xl font-extrabold tracking-tight text-[#20211F] dark:text-[#EAECE7]">
                {overall.percentage}%
              </span>
              <span className="text-xs text-[#858780] dark:text-[#8E928A]">
                mastered
              </span>
            </div>
            <p className="text-xs text-[#858780] dark:text-[#8E928A] mt-0.5 font-mono">
              {overall.completed} of {overall.total} questions ready
            </p>
          </div>
        </div>

        {/* Global Progress Bar */}
        <ProgressBar value={overall.percentage} size="md" className="mt-4" />

        {/* 6 Key Analytics Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-5 pt-5 border-t border-[#F0F1EC] dark:border-[#252824]">
          <div className="p-3 rounded-xl bg-[#F0FDF4] dark:bg-[#14281A] border border-[#BBF7D0] dark:border-[#1B4D2B]">
            <span className="text-[10px] text-[#166534] dark:text-[#86EFAC] block font-medium flex items-center gap-1">
              <Award className="w-3 h-3" /> Exam Ready
            </span>
            <span className="text-lg font-bold text-[#166534] dark:text-[#86EFAC] block mt-0.5">
              {overall.examReady}
            </span>
            <span className="text-[10px] text-[#166534]/70 dark:text-[#86EFAC]/70">
              verified solutions
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#ECFDF5] dark:bg-[#064E3B]/40 border border-[#A7F3D0] dark:border-[#047857]">
            <span className="text-[10px] text-[#059669] dark:text-[#6EE7B7] block font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Revised
            </span>
            <span className="text-lg font-bold text-[#059669] dark:text-[#6EE7B7] block mt-0.5">
              {overall.revised}
            </span>
            <span className="text-[10px] text-[#059669]/70 dark:text-[#6EE7B7]/70">
              recent revision
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#FCEAE7] dark:bg-[#2C1816] border border-[#F4C5BD] dark:border-[#532622]">
            <span className="text-[10px] text-[#B23326] dark:text-[#EF6966] block font-medium flex items-center gap-1">
              <Flame className="w-3 h-3 text-[#C8483B]" /> Top Priority
            </span>
            <span className="text-lg font-bold text-[#B23326] dark:text-[#EF6966] block mt-0.5">
              {overall.veryHighCompleted}/{overall.veryHighTotal}
            </span>
            <span className="text-[10px] text-[#B23326]/70 dark:text-[#EF6966]/70">
              recurring PYQs
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#FFFBEB] dark:bg-[#2C2314] border border-[#FDE68A] dark:border-[#4E3917]">
            <span className="text-[10px] text-[#B45309] dark:text-[#FBBF24] block font-medium flex items-center gap-1">
              <Edit3 className="w-3 h-3" /> In Practice
            </span>
            <span className="text-lg font-bold text-[#B45309] dark:text-[#FBBF24] block mt-0.5">
              {overall.practising}
            </span>
            <span className="text-[10px] text-[#B45309]/70 dark:text-[#FBBF24]/70">
              active numericals
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#F5F3FF] dark:bg-[#2E1065]/30 border border-[#DDD6FE] dark:border-[#4C1D95]">
            <span className="text-[10px] text-[#7C3AED] dark:text-[#C4B5FD] block font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Understood
            </span>
            <span className="text-lg font-bold text-[#7C3AED] dark:text-[#C4B5FD] block mt-0.5">
              {overall.understood}
            </span>
            <span className="text-[10px] text-[#7C3AED]/70 dark:text-[#C4B5FD]/70">
              concept grasped
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
            <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" /> Remaining
            </span>
            <span className="text-lg font-bold text-[#20211F] dark:text-[#EAECE7] block mt-0.5">
              {overall.notStudied + overall.reading}
            </span>
            <span className="text-[10px] text-[#858780] dark:text-[#8E928A]">
              to study
            </span>
          </div>
        </div>

        {/* Quick Action Navigation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-[#F0F1EC] dark:border-[#252824]">
          <button
            onClick={handleOpenImportant}
            className="flex items-center justify-between p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#1E201C] hover:bg-[#F3F4EE] dark:hover:bg-[#282B25] border border-[#E8E9E4] dark:border-[#2E312B] text-left transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#FCEAE7] dark:bg-[#2C1816] text-[#C8483B]">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#20211F] dark:text-[#EAECE7] block">
                  Top Recurring Questions
                </span>
                <span className="text-[10px] text-[#858780] dark:text-[#8E928A]">
                  Ranked by repetition frequency
                </span>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#858780] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleOpenNumericals}
            className="flex items-center justify-between p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#1E201C] hover:bg-[#F3F4EE] dark:hover:bg-[#282B25] border border-[#E8E9E4] dark:border-[#2E312B] text-left transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#EBF1ED] dark:bg-[#1C271F] text-[#64866D] dark:text-[#7B9F84]">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#20211F] dark:text-[#EAECE7] block">
                  Numerical Practice Area
                </span>
                <span className="text-[10px] text-[#858780] dark:text-[#8E928A]">
                  Solved examples & self-attempt
                </span>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#858780] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleOpenPYQs}
            className="flex items-center justify-between p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#1E201C] hover:bg-[#F3F4EE] dark:hover:bg-[#282B25] border border-[#E8E9E4] dark:border-[#2E312B] text-left transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#FAF3E8] dark:bg-[#2B2316] text-[#C2843A] dark:text-[#DDA256]">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#20211F] dark:text-[#EAECE7] block">
                  Previous Year Papers
                </span>
                <span className="text-[10px] text-[#858780] dark:text-[#8E928A]">
                  2019, 2022, 2023, 2024, 2025
                </span>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#858780] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Unit-Wise Preparation Dashboard Cards */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-[#20211F] dark:text-[#EAECE7] flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#64866D] dark:text-[#7B9F84]" />
            <span>Unit-Wise Examination Dashboard</span>
          </h3>
          <span className="text-xs text-[#858780] dark:text-[#8E928A]">
            All 5 units populated
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {FOM_UNITS_METADATA.map(unit => {
            const uAnalytics = getUnitAnalytics(unit.id);
            return (
              <div
                key={unit.id}
                className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] hover:border-[#D0D2CB] dark:hover:border-[#3D423A] transition-all flex flex-col justify-between shadow-2xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#64866D]/10 text-[#64866D] dark:text-[#8EAF96] font-mono">
                      UNIT {unit.id}
                    </span>
                    <span className="text-sm font-extrabold text-[#20211F] dark:text-[#EAECE7]">
                      {uAnalytics.percentage}%
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[#20211F] dark:text-[#EAECE7] mb-2 leading-snug line-clamp-2">
                    {unit.name.replace(/^Unit \d+\s*–\s*/, '')}
                  </h4>

                  <ProgressBar value={uAnalytics.percentage} size="sm" className="mb-3" />

                  {/* Marks & Category Breakdown */}
                  <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center mb-3">
                    <div className="p-1.5 rounded bg-[#FAFBF9] dark:bg-[#181A16] border border-[#ECEEE9] dark:border-[#262822]">
                      <span className="text-[#858780] block font-mono">7-Mark</span>
                      <strong className="text-[#20211F] dark:text-[#EAECE7] text-xs">
                        {unit.sevenMarkCount}
                      </strong>
                    </div>
                    <div className="p-1.5 rounded bg-[#FAFBF9] dark:bg-[#181A16] border border-[#ECEEE9] dark:border-[#262822]">
                      <span className="text-[#858780] block font-mono">2-3 Mark</span>
                      <strong className="text-[#20211F] dark:text-[#EAECE7] text-xs">
                        {unit.twoMarkCount + unit.threeMarkCount}
                      </strong>
                    </div>
                    <div className="p-1.5 rounded bg-[#FAFBF9] dark:bg-[#181A16] border border-[#ECEEE9] dark:border-[#262822]">
                      <span className="text-[#858780] block font-mono">Numericals</span>
                      <strong className="text-[#20211F] dark:text-[#EAECE7] text-xs">
                        {unit.numericalCount}
                      </strong>
                    </div>
                  </div>

                  {/* Prep status indicators */}
                  <div className="flex items-center justify-between text-[11px] text-[#858780] dark:text-[#8E928A] pt-2 border-t border-[#F0F1EC] dark:border-[#252824]">
                    <span className="text-[#166534] dark:text-[#86EFAC] font-semibold">
                      🎯 {uAnalytics.examReady} Exam Ready
                    </span>
                    <span>
                      ⏳ {uAnalytics.remaining} Remaining
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenUnit(unit.id)}
                  className="mt-4 w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-lg bg-[#F3F4EE] hover:bg-[#E8EAE2] dark:bg-[#252824] dark:hover:bg-[#2E312B] text-[#20211F] dark:text-[#EAECE7] transition-colors"
                >
                  <span>Open Unit {unit.id} Questions</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
