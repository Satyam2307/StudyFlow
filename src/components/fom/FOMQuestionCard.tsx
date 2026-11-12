'use client';

import React, { useState } from 'react';
import {
  Bookmark,
  AlertTriangle,
  FileText,
  Clock,
  CheckCircle2,
  BookOpen,
  ChevronRight,
  Flame,
  Award,
  Edit3,
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { FOMQuestion, QuestionPrepStatus } from '@/types/fom';
import { useFOM } from '@/context/FOMContext';
import { cn } from '@/lib/utils';

interface FOMQuestionCardProps {
  question: FOMQuestion;
  showUnitBadge?: boolean;
}

const statusConfig: Record<
  QuestionPrepStatus,
  { label: string; bgClass: string; textClass: string; borderClass: string; icon: any }
> = {
  not_studied: {
    label: 'Not Studied',
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
  learning: {
    label: 'Learning',
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

export function FOMQuestionCard({ question, showUnitBadge = false }: FOMQuestionCardProps) {
  const {
    openAnswer,
    updateQuestionStatus,
    toggleBookmark,
    toggleDifficult,
    addNotes
  } = useFOM();

  const [notesOpen, setNotesOpen] = useState(false);
  const [notesText, setNotesText] = useState(question.notes || '');

  const statusInfo = statusConfig[question.status] || statusConfig.not_studied;
  const priorityInfo = priorityBadgeConfig[question.priority];

  const handleNotesSave = () => {
    addNotes(question.id, notesText);
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
            {question.marks} MARKS
          </span>

          {/* Unit Badge (optional) */}
          {showUnitBadge && (
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#F3F3EF] dark:bg-[#252824] text-[#858780] dark:text-[#8E928A]">
              Unit {question.unitId}
            </span>
          )}

          {/* Question Type */}
          <span className="capitalize px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#F8F9F7] dark:bg-[#222420] text-[#6F716A] dark:text-[#9EA299] border border-[#ECEEE9] dark:border-[#2D302A]">
            {question.type}
          </span>

          {/* Priority */}
          <span
            className={cn(
              "px-2 py-0.5 text-[10px] font-medium rounded-md border",
              priorityInfo.badgeClass
            )}
          >
            {priorityInfo.label} Priority
          </span>

          {/* Recurring / Frequency Tag */}
          {question.isRecurring && (
            <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-md bg-[#FCEAE7] dark:bg-[#2C1816] text-[#B23326] dark:text-[#EF6966] border border-[#F4C5BD] dark:border-[#532622]">
              <Flame className="w-2.5 h-2.5 text-[#C8483B] animate-pulse" />
              <span>Recurring PYQ</span>
            </span>
          )}
        </div>

        {/* Action icons: Difficult, Bookmark, Notes Toggle */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => toggleDifficult(question.id)}
            title={question.isDifficult ? "Unmark difficult" : "Mark as difficult"}
            className={cn(
              "p-1.5 rounded-md transition-colors",
              question.isDifficult
                ? "text-[#C8483B] dark:text-[#EF5350] bg-[#FCEAE7] dark:bg-[#2C1816]"
                : "text-[#A3A59E] hover:text-[#C8483B] dark:hover:text-[#EF5350] hover:bg-[#F3F3EF] dark:hover:bg-[#252824]"
            )}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => toggleBookmark(question.id)}
            title={question.bookmarked ? "Remove bookmark" : "Bookmark question"}
            className={cn(
              "p-1.5 rounded-md transition-colors",
              question.bookmarked
                ? "text-[#C2843A] dark:text-[#DDA256] bg-[#FAF3E8] dark:bg-[#2B2316]"
                : "text-[#A3A59E] hover:text-[#C2843A] dark:hover:text-[#DDA256] hover:bg-[#F3F3EF] dark:hover:bg-[#252824]"
            )}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
          </button>

          <button
            onClick={() => setNotesOpen(!notesOpen)}
            title="Personal study notes"
            className={cn(
              "p-1.5 rounded-md transition-colors",
              question.notes
                ? "text-[#64866D] dark:text-[#7B9F84] bg-[#EBF1ED] dark:bg-[#1C271F]"
                : "text-[#A3A59E] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#252824]"
            )}
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Question Title & Text */}
      <div className="mb-3">
        <h4 className="text-sm font-semibold text-[#20211F] dark:text-[#EAECE7] mb-1 leading-snug">
          {question.title}
        </h4>
        <p className="text-xs text-[#52544E] dark:text-[#B5B9B0] leading-relaxed">
          {question.questionText}
        </p>
      </div>

      {/* PYQ Years & Frequency Info */}
      <div className="flex flex-wrap items-center gap-2 mb-3 text-[11px] text-[#858780] dark:text-[#8E928A]">
        {question.years && question.years.length > 0 && (
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#64866D] dark:text-[#7B9F84]" />
            <span className="font-medium text-[#20211F] dark:text-[#EAECE7]">
              {question.years.join(', ')}
            </span>
          </div>
        )}
        {question.frequency && (
          <span className="text-[10px] text-[#858780] dark:text-[#8E928A] italic">
            • {question.frequency}
          </span>
        )}
        {question.lastRevised && (
          <span className="text-[10px] text-[#64866D] dark:text-[#7B9F84] ml-auto">
            Revised: {question.lastRevised}
          </span>
        )}
      </div>

      {/* Inline Notes Box (collapsible) */}
      {notesOpen && (
        <div className="mb-3 p-3 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#E8E9E4] dark:border-[#292C27] animate-in fade-in duration-100">
          <label className="text-[10px] font-semibold text-[#858780] dark:text-[#8E928A] block mb-1">
            Personal Preparation Notes
          </label>
          <textarea
            value={notesText}
            onChange={e => setNotesText(e.target.value)}
            placeholder="Add key formulas, doubts to clarify, or memory mnemonics..."
            rows={2}
            className="w-full text-xs p-2 rounded-md border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] focus:outline-none focus:border-[#64866D]"
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={() => setNotesOpen(false)}
              className="px-2.5 py-1 text-[11px] text-[#858780] hover:text-[#20211F]"
            >
              Cancel
            </button>
            <button
              onClick={handleNotesSave}
              className="px-3 py-1 text-[11px] font-medium rounded-md bg-[#64866D] text-white hover:bg-[#54735C]"
            >
              Save Notes
            </button>
          </div>
        </div>
      )}

      {/* Card Footer: Status Selector & View Answer Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-[#F0F1EC] dark:border-[#252824]">
        {/* Status Dropdown Selector */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[#858780] dark:text-[#8E928A]">Status:</span>
          <select
            value={question.status}
            onChange={e => updateQuestionStatus(question.id, e.target.value as QuestionPrepStatus)}
            className={cn(
              "text-[11px] font-medium py-1 px-2.5 rounded-lg border focus:outline-none transition-colors cursor-pointer",
              statusInfo.bgClass,
              statusInfo.textClass,
              statusInfo.borderClass
            )}
          >
            <option value="not_studied">⚪ Not Studied</option>
            <option value="reading">📖 Reading</option>
            <option value="understood">💡 Understood</option>
            <option value="practising">✏️ Practising</option>
            <option value="revised">✅ Revised</option>
            <option value="exam_ready">🎯 Exam Ready</option>
          </select>
        </div>

        {/* View Answer Button with Mode Options */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => openAnswer(question, 'quickRevision')}
            className="px-2.5 py-1 text-[11px] font-medium rounded-lg text-[#64866D] dark:text-[#8EAF96] hover:bg-[#EBF1ED] dark:hover:bg-[#1C271F] transition-colors"
            title="Quick definitions and formulas"
          >
            Quick Rev
          </button>
          <button
            onClick={() => openAnswer(question, 'examAnswer')}
            className="flex items-center gap-1 px-3 py-1 text-[11px] font-semibold rounded-lg bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors shadow-2xs"
          >
            <span>Complete Answer</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
