'use client';

import React from 'react';
import {
  Flame,
  Award,
  Layers,
  Calendar,
  Calculator,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Bookmark,
  Zap,
  GraduationCap
} from 'lucide-react';
import { useCAS } from '@/context/CASContext';
import { useStudy } from '@/context/StudyContext';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { getSubjectStats, getUnitStats } from '@/lib/utils';
import { CASQuestionCard } from './CASQuestionCard';

export function CASOverview() {
  const {
    unitsMetadata,
    setActiveSection,
    setSelectedUnitId,
    getOverallAnalytics,
    getUnitAnalytics,
    getImportantQuestions
  } = useCAS();

  const { data } = useStudy();
  const casSubject = data.subjects.find(s => s.id === 'subj-cas-27001' || s.code === 'EI-27001');
  const subjectStats = casSubject ? getSubjectStats(casSubject) : null;

  const analytics = getOverallAnalytics();
  const importantQuestions = getImportantQuestions().slice(0, 4);

  return (
    <div className="space-y-6">
      {/* Subject Information Banner */}
      <div className="rounded-2xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-[#64866D]/15 text-[#64866D] dark:text-[#8EAF96] font-mono border border-[#64866D]/30">
                EI-27001
              </span>
              <span className="text-xs font-medium text-[#858780] dark:text-[#8E928A]">
                Electronics & Instrumentation • 3rd Semester • SGSITS Indore
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#20211F] dark:text-[#EAECE7]">
              Circuit Analysis and Synthesis (CAS)
            </h2>
            <p className="text-xs sm:text-sm text-[#52544E] dark:text-[#B5B9B0] max-w-3xl">
              Comprehensive preparation system based on the official 2026–27 SGSITS syllabus and university examination papers (2019, 2022, 2023) and internal test papers (2024, 2025).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveSection('important_questions')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-[#C8483B] hover:bg-[#B33E32] text-white shadow-2xs transition-colors"
            >
              <Flame className="w-4 h-4 fill-current" />
              <span>Top Exam Questions</span>
            </button>
            <button
              onClick={() => setActiveSection('numerical_practice')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-2xs transition-colors"
            >
              <Calculator className="w-4 h-4" />
              <span>Numerical Solver</span>
            </button>
          </div>
        </div>

        {/* Core Syllabus vs Supplementary Breakdown Bar */}
        {subjectStats && (
          <div className="mt-5 pt-5 border-t border-[#F0F1EC] dark:border-[#252824] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-[#858780] dark:text-[#8E928A] font-medium">Official Core Syllabus</span>
                <span className="font-bold text-[#64866D] dark:text-[#8EAF96]">
                  {subjectStats.corePercentage}%
                </span>
              </div>
              <ProgressBar value={subjectStats.corePercentage} size="sm" />
              <span className="text-[10px] text-[#858780] dark:text-[#8E928A] mt-1 block">
                {subjectStats.coreCompleted} of {subjectStats.coreTotal} core topics completed
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-[#858780] dark:text-[#8E928A] font-medium">PYQ Supplementary Topics</span>
                <span className="font-bold text-[#D97706] dark:text-[#FBBF24]">
                  {subjectStats.suppPercentage}%
                </span>
              </div>
              <ProgressBar value={subjectStats.suppPercentage} size="sm" />
              <span className="text-[10px] text-[#858780] dark:text-[#8E928A] mt-1 block">
                {subjectStats.suppCompleted} of {subjectStats.suppTotal} PYQ topics covered
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-[#858780] dark:text-[#8E928A] font-medium">Exam-Ready Questions</span>
                <span className="font-bold text-[#166534] dark:text-[#86EFAC]">
                  {analytics.percentage}%
                </span>
              </div>
              <ProgressBar value={analytics.percentage} size="sm" />
              <span className="text-[10px] text-[#858780] dark:text-[#8E928A] mt-1 block">
                {analytics.completed} of {analytics.total} questions ready
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-[#858780] dark:text-[#8E928A] font-medium">Numerical Problems</span>
                <span className="font-bold text-[#2563EB] dark:text-[#60A5FA]">
                  {Math.round((analytics.solvedNumericalsCount / analytics.totalNumericalsCount) * 100)}%
                </span>
              </div>
              <ProgressBar value={Math.round((analytics.solvedNumericalsCount / analytics.totalNumericalsCount) * 100)} size="sm" />
              <span className="text-[10px] text-[#858780] dark:text-[#8E928A] mt-1 block">
                {analytics.solvedNumericalsCount} of {analytics.totalNumericalsCount} problems solved
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 6 Key Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-4 rounded-xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C]">
          <span className="text-[11px] font-medium text-[#858780] dark:text-[#8E928A] block mb-1">
            Total Questions
          </span>
          <span className="text-2xl font-bold text-[#20211F] dark:text-[#EAECE7]">
            {analytics.total}
          </span>
          <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block mt-0.5">
            5 full units
          </span>
        </div>

        <div className="p-4 rounded-xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C]">
          <span className="text-[11px] font-medium text-[#166534] dark:text-[#86EFAC] block mb-1">
            Exam Ready
          </span>
          <span className="text-2xl font-bold text-[#166534] dark:text-[#86EFAC]">
            {analytics.examReady}
          </span>
          <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block mt-0.5">
            {analytics.revised} revised
          </span>
        </div>

        <div className="p-4 rounded-xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C]">
          <span className="text-[11px] font-medium text-[#C8483B] dark:text-[#EF6966] block mb-1 flex items-center gap-1">
            <Flame className="w-3 h-3 fill-current" /> Very High Priority
          </span>
          <span className="text-2xl font-bold text-[#C8483B] dark:text-[#EF6966]">
            {analytics.veryHighCompleted}
            <span className="text-sm font-normal text-[#858780]">/{analytics.veryHighTotal}</span>
          </span>
          <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block mt-0.5">
            Key exam targets
          </span>
        </div>

        <div className="p-4 rounded-xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C]">
          <span className="text-[11px] font-medium text-[#2563EB] dark:text-[#60A5FA] block mb-1">
            Numericals Solved
          </span>
          <span className="text-2xl font-bold text-[#2563EB] dark:text-[#60A5FA]">
            {analytics.solvedNumericalsCount}
            <span className="text-sm font-normal text-[#858780]">/{analytics.totalNumericalsCount}</span>
          </span>
          <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block mt-0.5">
            Step-by-step
          </span>
        </div>

        <div className="p-4 rounded-xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C]">
          <span className="text-[11px] font-medium text-[#C2843A] dark:text-[#DDA256] block mb-1 flex items-center gap-1">
            <Bookmark className="w-3 h-3 fill-current" /> Bookmarked
          </span>
          <span className="text-2xl font-bold text-[#20211F] dark:text-[#EAECE7]">
            {analytics.bookmarkedCount}
          </span>
          <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block mt-0.5">
            Pinned for revision
          </span>
        </div>

        <div className="p-4 rounded-xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C]">
          <span className="text-[11px] font-medium text-[#B23326] dark:text-[#EF5350] block mb-1 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> Difficult
          </span>
          <span className="text-2xl font-bold text-[#20211F] dark:text-[#EAECE7]">
            {analytics.difficultCount}
          </span>
          <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block mt-0.5">
            Needs attention
          </span>
        </div>
      </div>

      {/* 5 Units Breakdown Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-[#20211F] dark:text-[#EAECE7] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#64866D] dark:text-[#8EAF96]" />
            <span>Unit-Wise Syllabus Breakdown (EI-27001)</span>
          </h3>
          <span className="text-xs text-[#858780] dark:text-[#8E928A]">
            84 Core + 37 PYQ Topics
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {unitsMetadata.map(unit => {
            const uAnalytics = getUnitAnalytics(unit.id);
            const matchingSubjectUnit = casSubject?.units.find(
              u => u.name.toLowerCase().includes(`unit ${unit.id}`) || u.name.toLowerCase().includes(`unit ${['i','ii','iii','iv','v'][unit.id-1]}`)
            );
            const topicStats = matchingSubjectUnit ? getUnitStats(matchingSubjectUnit) : null;

            return (
              <div
                key={unit.id}
                className="rounded-2xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] p-4 sm:p-5 flex flex-col justify-between hover:border-[#D0D2CB] dark:hover:border-[#3D423A] transition-all shadow-2xs group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#64866D]/15 text-[#64866D] dark:text-[#8EAF96] font-mono">
                      UNIT {['I','II','III','IV','V'][unit.id-1]}
                    </span>
                    <span className="text-[10px] font-medium text-[#C8483B] dark:text-[#EF6966] bg-[#FCEAE7] dark:bg-[#2C1816] px-2 py-0.5 rounded-md">
                      {unit.pyqWeightage.split(' ')[0]} Weightage
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#20211F] dark:text-[#EAECE7] group-hover:text-[#64866D] dark:group-hover:text-[#8EAF96] transition-colors">
                      {unit.name}
                    </h4>
                    <p className="text-xs text-[#52544E] dark:text-[#B5B9B0] mt-1 line-clamp-2">
                      {unit.description}
                    </p>
                  </div>

                  {/* Core vs Supplementary topic pill */}
                  <div className="flex items-center gap-1.5 text-[11px] text-[#858780] dark:text-[#8E928A]">
                    <span className="font-semibold text-[#20211F] dark:text-[#EAECE7]">
                      {unit.coreTopicsCount} Core Topics
                    </span>
                    <span>•</span>
                    <span className="text-[#92400E] dark:text-[#FDE68A] font-medium">
                      +{unit.supplementaryTopicsCount} PYQ Topics
                    </span>
                  </div>

                  {/* Question stats pills */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-[#FAFBF9] dark:bg-[#20221E] border border-[#ECEEE9] dark:border-[#2D302A] text-[#20211F] dark:text-[#EAECE7]">
                      {uAnalytics.total} Questions
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#64866D]/10 text-[#64866D] dark:text-[#8EAF96]">
                      {uAnalytics.marks7} × 7M
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#C2843A]/10 text-[#9E6520] dark:text-[#DDA256]">
                      {uAnalytics.marks3} × 3M
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#858780]/10 text-[#858780]">
                      {uAnalytics.marks2} × 2M
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#858780]">Questions Ready</span>
                      <span className="font-bold text-[#64866D] dark:text-[#8EAF96]">
                        {uAnalytics.percentage}%
                      </span>
                    </div>
                    <ProgressBar value={uAnalytics.percentage} size="sm" />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0F1EC] dark:border-[#252824] flex items-center justify-between">
                  <span className="text-[11px] text-[#166534] dark:text-[#86EFAC] font-medium">
                    {uAnalytics.examReady} Exam Ready
                  </span>
                  <button
                    onClick={() => {
                      setSelectedUnitId(unit.id);
                      setActiveSection('syllabus');
                    }}
                    className="flex items-center gap-1 text-xs font-semibold text-[#64866D] dark:text-[#8EAF96] hover:underline"
                  >
                    <span>Open Unit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Recurring Exam Questions Highlight */}
      <div className="rounded-2xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#C8483B] fill-current" />
            <h3 className="text-sm sm:text-base font-bold text-[#20211F] dark:text-[#EAECE7]">
              Most Repeated University Exam Questions
            </h3>
          </div>
          <button
            onClick={() => setActiveSection('important_questions')}
            className="text-xs font-semibold text-[#64866D] dark:text-[#8EAF96] hover:underline flex items-center gap-1"
          >
            <span>View All Top Questions</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {importantQuestions.map(q => (
            <CASQuestionCard key={q.id} question={q} showUnitBadge />
          ))}
        </div>
      </div>
    </div>
  );
}
