'use client';

import React, { useState } from 'react';
import {
  Bookmark,
  AlertTriangle,
  Clock,
  BookOpen,
  Award,
  Edit3,
  Calendar,
  Sparkles,
  CheckCircle2,
  FileText,
  ChevronRight,
  Flame,
  Zap
} from 'lucide-react';
import { CASQuestion, CASQuestionPrepStatus } from '@/types/cas';
import { useCAS } from '@/context/CASContext';
import { cn } from '@/lib/utils';

interface CASQuestionCardProps {
  question: CASQuestion;
  showUnitBadge?: boolean;
}

const statusConfig: Record<
  CASQuestionPrepStatus,
  { label: string; bgClass: string; textClass: string; borderClass: string; icon: any }
> = {
  not_started: {
    label: 'Not Started',
    bgClass: 'bg-[#F3F3EF] dark:bg-[#1F211E]',
    textClass: 'text-[#858780] dark:text-[#8E928A]',
    borderClass: 'border-[#E8E9E4] dark:border-[#2E312B]',
    icon: Clock
  },
  reading: {
    label: 'Reading',
    bgClass: 'bg-[#EFF6FF] dark:bg-[#1E293B]',
    textClass: 'text-[#2563EB] dark:text-[#93C5FD]',
    borderClass: 'border-[#BFDBFE] dark:border-[#1E3A8A]',
    icon: BookOpen
  },
  understood: {
    label: 'Understood',
    bgClass: 'bg-[#F5F3FF] dark:bg-[#2E1065]',
    textClass: 'text-[#7C3AED] dark:text-[#C4B5FD]',
    borderClass: 'border-[#DDD6FE] dark:border-[#4C1D95]',
    icon: Sparkles
  },
  practising: {
    label: 'Practising',
    bgClass: 'bg-[#FFFBEB] dark:bg-[#2C2314]',
    textClass: 'text-[#B45309] dark:text-[#FBBF24]',
    borderClass: 'border-[#FDE68A] dark:border-[#4E3917]',
    icon: Edit3
  },
  revised: {
    label: 'Revised',
    bgClass: 'bg-[#ECFDF5] dark:bg-[#064E3B]',
    textClass: 'text-[#059669] dark:text-[#6EE7B7]',
    borderClass: 'border-[#A7F3D0] dark:border-[#047857]',
    icon: CheckCircle2
  },
  exam_ready: {
    label: 'Exam Ready',
    bgClass: 'bg-[#F0FDF4] dark:bg-[#14281A]',
    textClass: 'text-[#166534] dark:text-[#86EFAC]',
    borderClass: 'border-[#BBF7D0] dark:border-[#1B4D2B]',
    icon: Award
  }
};

const priorityBadgeConfig = {
  very_high: {
    label: 'Very High',
    badgeClass: 'bg-[#FCEAE7] dark:bg-[#2C1816] text-[#B23326] dark:text-[#EF6966] border-[#F4C5BD] dark:border-[#532622]'
  },
  high: {
    label: 'High',
    badgeClass: 'bg-[#FBF0EE] dark:bg-[#2E1C1A] text-[#A83D2D] dark:text-[#E0705F] border-[#F5CEC7] dark:border-[#4B2824]'
  },
  moderate: {
    label: 'Moderate',
    badgeClass: 'bg-[#FAF3E8] dark:bg-[#2B2316] text-[#9E6520] dark:text-[#DDA256] border-[#F2DFBD] dark:border-[#48371C]'
  }
};

export function CASQuestionCard({ question, showUnitBadge = false }: CASQuestionCardProps) {
  const {
    openAnswer,
    updateQuestionStatus,
    toggleBookmark,
    toggleDifficult,
    saveNotes
  } = useCAS();

  const [notesOpen, setNotesOpen] = useState(false);
  const [notesText, setNotesText] = useState(question.notes || '');

  const statusInfo = statusConfig[question.status] || statusConfig.not_started;
  const priorityInfo = priorityBadgeConfig[question.priority];

  const handleNotesSave = () => {
    saveNotes(question.id, notesText);
    setNotesOpen(false);
  };

  return (
    <div
      className={cn(
        "rounded-xl border p-4 sm:p-5 transition-all duration-150 relative bg-white dark:bg-[#1D1F1C]",
        question.status === 'exam_ready'
          ? "border-[#BBF7D0] dark:border-[#1B4D2B] shadow-2xs"
          : "border-[#E8E9E4] dark:border-[#292C27] hover:border-[#D0D2CB] dark:hover:border-[#3D423A]",
        question.isDifficult && "ring-1 ring-[#C85A48]/30 dark:ring-[#E0705F]/30"
      )}
    >
      {/* Top Meta Line: Marks, Type, Priority, Recurring, Action Icons */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
        <div className="flex flex-wrap items-center gap-1.5">
          {/* Marks Badge */}
          <span
            className={cn(
              "px-2 py-0.5 text-[11px] font-bold rounded-md font-mono border",
              question.marks === 7
                ? "bg-[#64866D]/10 text-[#64866D] dark:text-[#8EAF96] border-[#64866D]/30"
                : question.marks === 3
                ? "bg-[#C2843A]/10 text-[#9E6520] dark:text-[#DDA256] border-[#C2843A]/30"
                : "bg-[#858780]/10 text-[#6F716A] dark:text-[#8E928A] border-[#858780]/30"
            )}
          >
            {question.marks}M
          </span>

          {/* Unit Badge (if requested) */}
          {showUnitBadge && (
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#F3F3EF] dark:bg-[#252824] text-[#6F716A] dark:text-[#8E928A]">
              Unit {question.unitId}
            </span>
          )}

          {/* Priority Badge */}
          <span
            className={cn(
              "px-2 py-0.5 text-[10px] font-semibold rounded-md border",
              priorityInfo.badgeClass
            )}
          >
            {priorityInfo.label}
          </span>

          {/* Question Type */}
          <span className="capitalize px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#FAFBF9] dark:bg-[#20221E] text-[#6F716A] dark:text-[#9EA299] border border-[#ECEEE9] dark:border-[#2D302A]">
            {question.type.replace('_', ' ')}
          </span>

          {/* Supplementary Topic Tag */}
          {question.isSupplementaryTopic && (
            <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] dark:bg-[#78350F]/40 dark:text-[#FDE68A] dark:border-[#B45309]/50">
              PYQ Supplementary
            </span>
          )}

          {/* Recurring Tag */}
          {question.isRecurring && (
            <span className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#FCEAE7] dark:bg-[#2C1816] text-[#C8483B] dark:text-[#EF6966] border border-[#F4C5BD] dark:border-[#532622]">
              <Flame className="w-2.5 h-2.5 fill-current" />
              <span>Repeated</span>
            </span>
          )}

          {/* PYQ Years */}
          {question.years && question.years.length > 0 && (
            <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#EBF1ED] dark:bg-[#1C271F] text-[#4D6C55] dark:text-[#7B9F84]">
              <Calendar className="w-2.5 h-2.5" />
              <span>{question.years.join(', ')}</span>
            </span>
          )}
        </div>

        {/* Right Corner: Difficult & Bookmark Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => toggleDifficult(question.id)}
            className={cn(
              "p-1.5 rounded-lg transition-colors",
              question.isDifficult
                ? "text-[#C8483B] dark:text-[#EF5350] bg-[#FCEAE7] dark:bg-[#2C1816]"
                : "text-[#858780] hover:text-[#C8483B] hover:bg-[#F3F3EF] dark:hover:bg-[#252824]"
            )}
            title={question.isDifficult ? "Marked as Difficult" : "Mark as Difficult"}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => toggleBookmark(question.id)}
            className={cn(
              "p-1.5 rounded-lg transition-colors",
              question.bookmarked
                ? "text-[#C2843A] dark:text-[#DDA256] bg-[#FAF3E8] dark:bg-[#2B2316]"
                : "text-[#858780] hover:text-[#C2843A] hover:bg-[#F3F3EF] dark:hover:bg-[#252824]"
            )}
            title={question.bookmarked ? "Bookmarked" : "Bookmark Question"}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
          </button>
        </div>
      </div>

      {/* Main Question Title & Statement */}
      <div className="space-y-1.5">
        <h4 className="text-sm sm:text-base font-bold text-[#20211F] dark:text-[#EAECE7] leading-snug">
          {question.title}
        </h4>
        <p className="text-xs text-[#52544E] dark:text-[#B5B9B0] leading-relaxed line-clamp-3">
          {question.questionText}
        </p>
      </div>

      {/* Revision Meta info if revised */}
      {(question.revisionCount || 0) > 0 && (
        <div className="mt-2 flex items-center gap-2 text-[10px] text-[#64866D] dark:text-[#8EAF96]">
          <CheckCircle2 className="w-3 h-3" />
          <span>Revised {question.revisionCount} time{question.revisionCount! > 1 ? 's' : ''} (Last: {question.lastRevised})</span>
        </div>
      )}

      {/* Action Footer: Status Selector & 3-Mode Answer Buttons */}
      <div className="mt-4 pt-3 border-t border-[#F0F1EC] dark:border-[#252824] flex flex-wrap items-center justify-between gap-2.5">
        {/* Status Dropdown */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-[#858780] dark:text-[#8E928A]">Status:</span>
          <select
            value={question.status}
            onChange={e => updateQuestionStatus(question.id, e.target.value as CASQuestionPrepStatus)}
            className={cn(
              "text-[11px] font-semibold py-1 px-2 rounded-lg border focus:outline-none transition-colors",
              statusInfo.bgClass,
              statusInfo.textClass,
              statusInfo.borderClass
            )}
          >
            <option value="not_started">⚪ Not Started</option>
            <option value="reading">📖 Reading</option>
            <option value="understood">💡 Understood</option>
            <option value="practising">✏️ Practising</option>
            <option value="revised">✅ Revised</option>
            <option value="exam_ready">🎯 Exam Ready</option>
          </select>

          {/* Notes Toggle */}
          <button
            onClick={() => setNotesOpen(!notesOpen)}
            className={cn(
              "p-1.5 rounded-lg text-xs transition-colors",
              question.notes
                ? "text-[#64866D] dark:text-[#8EAF96] bg-[#64866D]/10"
                : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#252824]"
            )}
            title="Personal Notes"
          >
            <FileText className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Answer Reading Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => openAnswer(question, 'quickRevision')}
            className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-lg bg-[#FAFBF9] dark:bg-[#20221E] border border-[#E8E9E4] dark:border-[#2E312B] text-[#52544E] dark:text-[#C5C9C0] hover:bg-[#F3F3EF] dark:hover:bg-[#262823] transition-colors"
            title="Quick bullet summary for last minute revision"
          >
            <Zap className="w-3 h-3 text-[#C2843A]" />
            <span>Quick (1 Min)</span>
          </button>

          <button
            onClick={() => openAnswer(question, 'examAnswer')}
            className="flex items-center gap-1 px-3 py-1 text-[11px] font-semibold rounded-lg bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors shadow-2xs"
            title="Full university exam solution with circuit equations and steps"
          >
            <span>Exam Answer</span>
            <ChevronRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => openAnswer(question, 'detailedLearning')}
            className="flex items-center gap-1 px-2 py-1 text-[11px] font-medium rounded-lg text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#252824] transition-colors"
            title="Deep conceptual understanding and physics behind the theorem"
          >
            <BookOpen className="w-3 h-3" />
            <span className="hidden sm:inline">Concept</span>
          </button>
        </div>
      </div>

      {/* Notes Drawer */}
      {notesOpen && (
        <div className="mt-3 pt-3 border-t border-[#F0F1EC] dark:border-[#252824] space-y-2">
          <textarea
            value={notesText}
            onChange={e => setNotesText(e.target.value)}
            placeholder="Add personal exam notes, formulas, or reminders for this question..."
            rows={2}
            className="w-full p-2 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#161815] text-[#20211F] dark:text-[#EAECE7] placeholder:text-[#858780] focus:outline-none focus:border-[#64866D]"
          />
          <div className="flex justify-end gap-1.5">
            <button
              onClick={() => setNotesOpen(false)}
              className="px-2.5 py-1 text-xs text-[#858780] hover:text-[#20211F]"
            >
              Cancel
            </button>
            <button
              onClick={handleNotesSave}
              className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#64866D] text-white hover:bg-[#54735C]"
            >
              Save Notes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
