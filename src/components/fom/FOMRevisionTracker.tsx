'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  BookOpen,
  Award,
  Bookmark,
  AlertTriangle,
  Sparkles,
  Calendar,
  RotateCcw,
  Edit3
} from 'lucide-react';
import { useFOM } from '@/context/FOMContext';
import { FOMQuestionCard } from './FOMQuestionCard';
import { QuestionPrepStatus } from '@/types/fom';
import { cn } from '@/lib/utils';
import { ProgressBar } from '@/components/ui/ProgressBar';

export function FOMRevisionTracker() {
  const { questions, getOverallAnalytics } = useFOM();

  const [activeTab, setActiveTab] = useState<'all' | 'exam_ready' | 'revised' | 'difficult' | 'bookmarked' | 'notes'>('all');

  const analytics = getOverallAnalytics();

  const filteredQuestions = questions.filter(q => {
    if (activeTab === 'exam_ready') return q.status === 'exam_ready';
    if (activeTab === 'revised') return q.status === 'revised';
    if (activeTab === 'difficult') return q.isDifficult;
    if (activeTab === 'bookmarked') return q.bookmarked;
    if (activeTab === 'notes') return Boolean(q.notes);
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Revision Dashboard Header */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#64866D] dark:text-[#8EAF96] uppercase font-mono mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Personal Revision & Readiness Tracker</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#20211F] dark:text-[#EAECE7]">
              Examination Readiness Dashboard
            </h2>
            <p className="text-xs text-[#858780] dark:text-[#8E928A] mt-0.5">
              Track questions from first read to independent exam mastery with revision dates and notes.
            </p>
          </div>

          <div className="sm:text-right shrink-0">
            <span className="text-2xl font-extrabold text-[#166534] dark:text-[#86EFAC]">
              {analytics.examReady}
            </span>
            <span className="text-xs text-[#858780] dark:text-[#8E928A] block">
              Exam Ready of {analytics.total} total
            </span>
          </div>
        </div>

        <ProgressBar value={analytics.percentage} size="md" className="mt-4" />

        {/* Status Distribution Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mt-4 pt-4 border-t border-[#F0F1EC] dark:border-[#252824]">
          <div className="p-2 rounded-lg bg-[#F0FDF4] dark:bg-[#14281A] border border-[#BBF7D0] dark:border-[#1B4D2B] text-center">
            <span className="text-[10px] text-[#166534] dark:text-[#86EFAC] block font-medium">Exam Ready</span>
            <strong className="text-sm font-bold text-[#166534] dark:text-[#86EFAC]">{analytics.examReady}</strong>
          </div>

          <div className="p-2 rounded-lg bg-[#ECFDF5] dark:bg-[#064E3B]/40 border border-[#A7F3D0] dark:border-[#047857] text-center">
            <span className="text-[10px] text-[#059669] dark:text-[#6EE7B7] block font-medium">Revised</span>
            <strong className="text-sm font-bold text-[#059669] dark:text-[#6EE7B7]">{analytics.revised}</strong>
          </div>

          <div className="p-2 rounded-lg bg-[#F5F3FF] dark:bg-[#2E1065]/30 border border-[#DDD6FE] dark:border-[#4C1D95] text-center">
            <span className="text-[10px] text-[#7C3AED] dark:text-[#C4B5FD] block font-medium">Understood</span>
            <strong className="text-sm font-bold text-[#7C3AED] dark:text-[#C4B5FD]">{analytics.understood}</strong>
          </div>

          <div className="p-2 rounded-lg bg-[#FFFBEB] dark:bg-[#2C2314] border border-[#FDE68A] dark:border-[#4E3917] text-center">
            <span className="text-[10px] text-[#B45309] dark:text-[#FBBF24] block font-medium">Practising</span>
            <strong className="text-sm font-bold text-[#B45309] dark:text-[#FBBF24]">{analytics.practising}</strong>
          </div>

          <div className="p-2 rounded-lg bg-[#EFF6FF] dark:bg-[#1E293B] border border-[#BFDBFE] dark:border-[#1E3A8A] text-center">
            <span className="text-[10px] text-[#2563EB] dark:text-[#93C5FD] block font-medium">Reading</span>
            <strong className="text-sm font-bold text-[#2563EB] dark:text-[#93C5FD]">{analytics.reading}</strong>
          </div>

          <div className="p-2 rounded-lg bg-[#FAFBF9] dark:bg-[#181A16] border border-[#ECEEE9] dark:border-[#262822] text-center">
            <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block font-medium">Not Studied</span>
            <strong className="text-sm font-bold text-[#20211F] dark:text-[#EAECE7]">{analytics.notStudied}</strong>
          </div>
        </div>
      </div>

      {/* Filter Views: All / Exam Ready / Revised / Difficult / Bookmarked / With Notes */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EFEFEA]/80 dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] overflow-x-auto">
        <button
          onClick={() => setActiveTab('all')}
          className={cn(
            "px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0",
            activeTab === 'all'
              ? "bg-white dark:bg-[#252824] text-[#20211F] dark:text-[#EAECE7] shadow-2xs"
              : "text-[#858780] hover:text-[#20211F]"
          )}
        >
          All Questions ({analytics.total})
        </button>

        <button
          onClick={() => setActiveTab('exam_ready')}
          className={cn(
            "flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0",
            activeTab === 'exam_ready'
              ? "bg-[#166534] text-white shadow-2xs"
              : "text-[#166534] dark:text-[#86EFAC] hover:bg-white/50"
          )}
        >
          <Award className="w-3 h-3" />
          <span>Exam Ready ({analytics.examReady})</span>
        </button>

        <button
          onClick={() => setActiveTab('revised')}
          className={cn(
            "flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0",
            activeTab === 'revised'
              ? "bg-[#059669] text-white shadow-2xs"
              : "text-[#059669] dark:text-[#6EE7B7] hover:bg-white/50"
          )}
        >
          <CheckCircle2 className="w-3 h-3" />
          <span>Revised ({analytics.revised})</span>
        </button>

        <button
          onClick={() => setActiveTab('difficult')}
          className={cn(
            "flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0",
            activeTab === 'difficult'
              ? "bg-[#C8483B] text-white shadow-2xs"
              : "text-[#C8483B] dark:text-[#EF5350] hover:bg-white/50"
          )}
        >
          <AlertTriangle className="w-3 h-3" />
          <span>Marked Difficult ({analytics.difficultCount})</span>
        </button>

        <button
          onClick={() => setActiveTab('bookmarked')}
          className={cn(
            "flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0",
            activeTab === 'bookmarked'
              ? "bg-[#C2843A] text-white shadow-2xs"
              : "text-[#C2843A] dark:text-[#DDA256] hover:bg-white/50"
          )}
        >
          <Bookmark className="w-3 h-3" />
          <span>Bookmarked ({analytics.bookmarkedCount})</span>
        </button>

        <button
          onClick={() => setActiveTab('notes')}
          className={cn(
            "flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0",
            activeTab === 'notes'
              ? "bg-[#64866D] text-white shadow-2xs"
              : "text-[#64866D] dark:text-[#7B9F84] hover:bg-white/50"
          )}
        >
          <Edit3 className="w-3 h-3" />
          <span>With Personal Notes</span>
        </button>
      </div>

      {/* Question Cards List */}
      <div className="space-y-3">
        {filteredQuestions.length === 0 ? (
          <div className="p-8 text-center rounded-xl border border-dashed border-[#E8E9E4] dark:border-[#292C27] text-[#858780]">
            No questions found in this view category.
          </div>
        ) : (
          filteredQuestions.map(q => <FOMQuestionCard key={q.id} question={q} showUnitBadge />)
        )}
      </div>
    </div>
  );
}
