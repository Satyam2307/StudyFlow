'use client';

import React from 'react';
import {
  X,
  Bookmark,
  AlertTriangle,
  Award,
  CheckCircle2,
  BookOpen,
  Calculator,
  Zap,
  Calendar,
  Layers
} from 'lucide-react';
import { useCAS } from '@/context/CASContext';
import { cn } from '@/lib/utils';
import { CASQuestionPrepStatus } from '@/types/cas';

export function CASAnswerModal() {
  const {
    activeAnswerQuestion,
    activeAnswerMode,
    closeAnswer,
    setAnswerMode,
    updateQuestionStatus,
    toggleBookmark,
    toggleDifficult,
    recordRevision
  } = useCAS();

  if (!activeAnswerQuestion) return null;

  const q = activeAnswerQuestion;

  const renderContent = () => {
    let rawText = '';
    if (activeAnswerMode === 'quickRevision') {
      rawText = q.answer.quickRevision;
    } else if (activeAnswerMode === 'examAnswer') {
      rawText = q.answer.examAnswer;
    } else {
      rawText = q.answer.detailedLearning;
    }

    const lines = rawText.split('\n');
    let insideCodeBlock = false;
    let codeBuffer: string[] = [];
    const elements: React.ReactNode[] = [];

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      // Check code block fence (```)
      if (trimmed.startsWith('```')) {
        if (insideCodeBlock) {
          // Flush code block
          elements.push(
            <pre
              key={`code-${idx}`}
              className="p-3 my-2 rounded-xl font-mono text-[11px] sm:text-xs leading-normal bg-[#181A17] dark:bg-[#121411] text-[#A7F3D0] border border-[#2A2E28] dark:border-[#222620] overflow-x-auto shadow-inner"
            >
              <code>{codeBuffer.join('\n')}</code>
            </pre>
          );
          codeBuffer = [];
          insideCodeBlock = false;
        } else {
          insideCodeBlock = true;
          codeBuffer = [];
        }
        return;
      }

      if (insideCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      // Headers
      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3
            key={idx}
            className="text-sm sm:text-base font-bold text-[#20211F] dark:text-[#EAECE7] pt-3 pb-1 border-b border-[#E8E9E4] dark:border-[#292C27]"
          >
            {trimmed.replace(/^###\s+/, '')}
          </h3>
        );
        return;
      }

      if (trimmed.startsWith('#### ')) {
        elements.push(
          <h4
            key={idx}
            className="text-xs sm:text-sm font-semibold text-[#64866D] dark:text-[#8EAF96] pt-2"
          >
            {trimmed.replace(/^####\s+/, '')}
          </h4>
        );
        return;
      }

      // Horizontal rule
      if (trimmed === '---') {
        elements.push(<hr key={idx} className="my-3 border-[#E8E9E4] dark:border-[#292C27]" />);
        return;
      }

      // Bullet lists
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        elements.push(
          <div key={idx} className="flex items-start gap-2 pl-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#64866D] dark:bg-[#7B9F84] mt-1.5 shrink-0" />
            <span className="flex-1 text-[#333530] dark:text-[#D5D8D0]">
              {trimmed.replace(/^[-*]\s+/, '')}
            </span>
          </div>
        );
        return;
      }

      // Numbered lists
      if (/^\d+\.\s/.test(trimmed)) {
        const num = trimmed.match(/^(\d+)\.\s/)?.[1];
        elements.push(
          <div key={idx} className="flex items-start gap-2 pl-2">
            <span className="font-mono font-bold text-[11px] text-[#64866D] dark:text-[#7B9F84] mt-0.5 shrink-0">
              {num}.
            </span>
            <span className="flex-1 text-[#333530] dark:text-[#D5D8D0]">
              {trimmed.replace(/^\d+\.\s+/, '')}
            </span>
          </div>
        );
        return;
      }

      // ASCII Diagram detection (lines with +---+ or | or ----)
      if (trimmed.includes('+---') || trimmed.includes('|') && trimmed.includes('[') || trimmed.includes('o---')) {
        elements.push(
          <pre
            key={idx}
            className="p-2.5 my-1.5 rounded-lg font-mono text-[11px] bg-[#1E201D] text-[#E0E2DC] overflow-x-auto border border-[#333630]"
          >
            {line}
          </pre>
        );
        return;
      }

      // Empty line
      if (!trimmed) {
        elements.push(<div key={idx} className="h-1" />);
        return;
      }

      // Normal paragraph
      elements.push(
        <p key={idx} className="text-[#333530] dark:text-[#D5D8D0]">
          {line}
        </p>
      );
    });

    return (
      <div className="space-y-3.5 text-xs sm:text-sm text-[#20211F] dark:text-[#EAECE7] leading-relaxed">
        {elements}

        {/* Specialized Numerical Box (if applicable) */}
        {q.answer.numericalSolution && (
          <div className="mt-4 p-4 rounded-xl bg-[#F8F9F7] dark:bg-[#181A16] border border-[#E0E2DC] dark:border-[#2D302A] space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#64866D] dark:text-[#8EAF96]">
              <Calculator className="w-4 h-4" />
              <span>Numerical Solution Summary</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="font-semibold text-[#858780] block">Formula Applied:</span>
                <code className="text-[#20211F] dark:text-[#EAECE7] bg-white dark:bg-[#20221E] px-1.5 py-0.5 rounded border border-[#E8E9E4] dark:border-[#2E312B] block mt-0.5 font-mono">
                  {q.answer.numericalSolution.formula}
                </code>
              </div>
              <div>
                <span className="font-semibold text-[#858780] block">Final Calculated Answer:</span>
                <span className="text-sm font-bold text-[#166534] dark:text-[#86EFAC] block mt-0.5">
                  {q.answer.numericalSolution.finalAnswer} {q.answer.numericalSolution.units}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-[#1A1C19] border border-[#E8E9E4] dark:border-[#292C27] rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8E9E4] dark:border-[#292C27] flex items-start justify-between gap-3 bg-[#FAFBF9] dark:bg-[#161815]">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#64866D]/15 text-[#64866D] dark:text-[#8EAF96] border border-[#64866D]/30 font-mono">
                {q.marks} MARKS
              </span>
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-[#F3F3EF] dark:bg-[#252824] text-[#858780] dark:text-[#8E928A]">
                Unit {q.unitId}: {q.unitName.replace(/^Unit [IVXLCDM]+\s*–\s*/, '')}
              </span>
              <span className="capitalize px-2 py-0.5 text-[10px] font-medium rounded-md bg-white dark:bg-[#20221E] text-[#6F716A] dark:text-[#9EA299] border border-[#ECEEE9] dark:border-[#2D302A]">
                {q.type.replace('_', ' ')}
              </span>
              {q.isSupplementaryTopic && (
                <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] dark:bg-[#78350F]/40 dark:text-[#FDE68A] dark:border-[#B45309]/50">
                  PYQ Supplementary
                </span>
              )}
              {q.years && q.years.length > 0 && (
                <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#EBF1ED] dark:bg-[#1C271F] text-[#4D6C55] dark:text-[#7B9F84]">
                  PYQ: {q.years.join(', ')}
                </span>
              )}
            </div>
            <h2 className="text-base sm:text-lg font-bold text-[#20211F] dark:text-[#EAECE7] leading-snug">
              {q.title}
            </h2>
            <p className="text-xs text-[#6F716A] dark:text-[#9EA299] mt-1">
              {q.questionText}
            </p>
          </div>

          {/* Close & Header Icons */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => toggleDifficult(q.id)}
              className={cn(
                "p-2 rounded-lg transition-colors",
                q.isDifficult
                  ? "text-[#C8483B] dark:text-[#EF5350] bg-[#FCEAE7] dark:bg-[#2C1816]"
                  : "text-[#858780] hover:text-[#C8483B] hover:bg-[#F3F3EF] dark:hover:bg-[#252824]"
              )}
              title={q.isDifficult ? "Marked as Difficult" : "Mark as Difficult"}
            >
              <AlertTriangle className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleBookmark(q.id)}
              className={cn(
                "p-2 rounded-lg transition-colors",
                q.bookmarked
                  ? "text-[#C2843A] dark:text-[#DDA256] bg-[#FAF3E8] dark:bg-[#2B2316]"
                  : "text-[#858780] hover:text-[#C2843A] hover:bg-[#F3F3EF] dark:hover:bg-[#252824]"
              )}
              title={q.bookmarked ? "Bookmarked" : "Bookmark"}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={closeAnswer}
              className="p-2 rounded-lg text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#252824] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1 px-4 sm:px-5 py-2.5 border-b border-[#E8E9E4] dark:border-[#292C27] bg-[#F8F9F7] dark:bg-[#1D1F1C] overflow-x-auto">
          <button
            onClick={() => setAnswerMode('quickRevision')}
            className={cn(
              "px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0",
              activeAnswerMode === 'quickRevision'
                ? "bg-[#64866D] text-white shadow-2xs"
                : "text-[#858780] dark:text-[#8E928A] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#EAECE7] dark:hover:bg-[#262823]"
            )}
          >
            ⚡ Mode 1: Quick Revision
          </button>
          <button
            onClick={() => setAnswerMode('examAnswer')}
            className={cn(
              "px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0",
              activeAnswerMode === 'examAnswer'
                ? "bg-[#64866D] text-white shadow-2xs"
                : "text-[#858780] dark:text-[#8E928A] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#EAECE7] dark:hover:bg-[#262823]"
            )}
          >
            📝 Mode 2: University Exam Answer ({q.marks} Marks)
          </button>
          <button
            onClick={() => setAnswerMode('detailedLearning')}
            className={cn(
              "px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0",
              activeAnswerMode === 'detailedLearning'
                ? "bg-[#64866D] text-white shadow-2xs"
                : "text-[#858780] dark:text-[#8E928A] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#EAECE7] dark:hover:bg-[#262823]"
            )}
          >
            🔍 Mode 3: Detailed Conceptual Learning
          </button>
        </div>

        {/* Scrollable Answer Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">{renderContent()}</div>

        {/* Bottom Action Footer */}
        <div className="p-3 sm:p-4 border-t border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#161815] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#858780] dark:text-[#8E928A]">Mark Prep Status:</span>
            <select
              value={q.status}
              onChange={e => updateQuestionStatus(q.id, e.target.value as CASQuestionPrepStatus)}
              className="text-xs font-medium py-1 px-2.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] focus:outline-none"
            >
              <option value="not_started">⚪ Not Started</option>
              <option value="reading">📖 Reading</option>
              <option value="understood">💡 Understood</option>
              <option value="practising">✏️ Practising</option>
              <option value="revised">✅ Revised</option>
              <option value="exam_ready">🎯 Exam Ready</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => recordRevision(q.id)}
              className="px-3 py-1.5 text-xs font-medium rounded-lg border border-[#A7F3D0] dark:border-[#047857] bg-[#ECFDF5] dark:bg-[#064E3B] text-[#059669] dark:text-[#6EE7B7] hover:bg-[#D1FAE5] transition-colors"
            >
              Record Revision
            </button>
            <button
              onClick={() => updateQuestionStatus(q.id, 'exam_ready')}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#166534] hover:bg-[#14532D] text-white transition-colors shadow-2xs"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Mark Exam Ready</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
