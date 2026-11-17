'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Award,
  AlertTriangle,
  Bookmark,
  FileText,
  Clock,
  RotateCcw,
  Sparkles,
  Zap,
  TrendingUp
} from 'lucide-react';
import { useCAS } from '@/context/CASContext';
import { CASQuestionCard } from './CASQuestionCard';
import { cn } from '@/lib/utils';
import { ProgressBar } from '@/components/ui/ProgressBar';

type RevisionFilter = 'exam_ready' | 'revised' | 'in_progress' | 'difficult' | 'bookmarked' | 'notes';

export function CASRevisionTracker() {
  const { questions, getOverallAnalytics } = useCAS();
  const [activeTab, setActiveTab] = useState<RevisionFilter>('exam_ready');

  const analytics = getOverallAnalytics();

  const filteredQuestions = questions.filter(q => {
    if (activeTab === 'exam_ready') return q.status === 'exam_ready';
    if (activeTab === 'revised') return q.status === 'revised' || (q.revisionCount || 0) > 0;
    if (activeTab === 'in_progress')
      return q.status === 'reading' || q.status === 'understood' || q.status === 'practising';
    if (activeTab === 'difficult') return q.isDifficult;
    if (activeTab === 'bookmarked') return q.bookmarked;
    if (activeTab === 'notes') return Boolean(q.notes && q.notes.trim().length > 0);
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-2xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#166534] dark:text-[#86EFAC]">
              <CheckCircle2 className="w-4 h-4" />
              <span>ACTIVE REVISION & RETENTION ENGINE</span>
            </div>
            <h2 className="text-xl font-bold text-[#20211F] dark:text-[#EAECE7]">
              CAS Revision Tracker
            </h2>
            <p className="text-xs text-[#52544E] dark:text-[#B5B9B0] max-w-2xl">
              Monitor spaced repetition, exam readiness, and tricky derivations. Keep track of revised topics, difficult problem flags, and personal formula notes.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822] shrink-0 text-right">
            <span className="text-[10px] text-[#858780] block">Overall Readiness</span>
            <span className="text-xl font-bold text-[#166534] dark:text-[#86EFAC]">
              {analytics.percentage}%
            </span>
            <span className="text-[10px] text-[#858780] block mt-0.5">
              {analytics.completed} of {analytics.total} ready
            </span>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-[#F0F1EC] dark:border-[#252824]">
          <div className="p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
            <span className="text-[10px] text-[#166534] dark:text-[#86EFAC] font-medium block">
              Exam Ready
            </span>
            <span className="text-xl font-bold text-[#166534] dark:text-[#86EFAC]">
              {analytics.examReady}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
            <span className="text-[10px] text-[#059669] dark:text-[#6EE7B7] font-medium block">
              Revised Topics
            </span>
            <span className="text-xl font-bold text-[#059669] dark:text-[#6EE7B7]">
              {analytics.revised}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
            <span className="text-[10px] text-[#C8483B] dark:text-[#EF6966] font-medium block">
              Difficult Flags
            </span>
            <span className="text-xl font-bold text-[#C8483B] dark:text-[#EF6966]">
              {analytics.difficultCount}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
            <span className="text-[10px] text-[#C2843A] dark:text-[#DDA256] font-medium block">
              Bookmarked
            </span>
            <span className="text-xl font-bold text-[#C2843A] dark:text-[#DDA256]">
              {analytics.bookmarkedCount}
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="pt-2 flex items-center gap-1.5 p-1 rounded-xl bg-[#EFEFEA]/80 dark:bg-[#252824] overflow-x-auto">
          {(
            [
              { id: 'exam_ready', label: '🎯 Exam Ready' },
              { id: 'revised', label: '✅ Revised' },
              { id: 'in_progress', label: '⏳ In Progress' },
              { id: 'difficult', label: '⚠️ Difficult' },
              { id: 'bookmarked', label: '⭐ Bookmarked' },
              { id: 'notes', label: '📝 Personal Notes' }
            ] as { id: RevisionFilter; label: string }[]
          ).map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0",
                activeTab === tab.id
                  ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                  : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filtered Questions List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-[#858780] px-1">
          <span>Showing <strong>{filteredQuestions.length}</strong> questions in this view</span>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 rounded-2xl border border-dashed border-[#E8E9E4] dark:border-[#292C27] p-8">
            <CheckCircle2 className="w-8 h-8 text-[#858780] mx-auto mb-2 opacity-50" />
            <h4 className="text-sm font-semibold text-[#20211F] dark:text-[#EAECE7]">
              No questions found for this revision filter
            </h4>
            <p className="text-xs text-[#858780] mt-1">
              Mark questions as revised or difficult to track them here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {filteredQuestions.map(q => (
              <CASQuestionCard key={q.id} question={q} showUnitBadge />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
