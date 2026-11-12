'use client';

import React, { useState } from 'react';
import {
  Clock,
  MoreVertical,
  Pencil,
  Trash2,
  Star,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Circle,
  BookOpen,
  Edit3,
  Plus,
  HelpCircle,
  Award,
  FileText,
  Calculator,
  RotateCcw
} from 'lucide-react';
import { Topic, Priority, StudyStatus, PYQItem } from '@/types/study';
import { Checkbox } from '@/components/ui/Checkbox';
import { PriorityBadge } from '@/components/ui/Badge';
import { cn, getTopicStudyStatus, studyStatusConfig } from '@/lib/utils';
import { useStudy } from '@/context/StudyContext';

interface TopicItemProps {
  topic: Topic;
  subjectId: string;
  unitId: string;
  onEdit: (topic: Topic) => void;
  onDelete: (topicId: string) => void;
}

export function TopicItem({
  topic,
  subjectId,
  unitId,
  onEdit,
  onDelete
}: TopicItemProps) {
  const {
    toggleTopic,
    updateTopicStatus,
    addTopicToToday,
    data,
    addPYQ,
    togglePYQ,
    togglePYQWithoutNotes,
    deletePYQ,
    updateNumericalPractice
  } = useStudy();

  const [showMenu, setShowMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAddPYQForm, setShowAddPYQForm] = useState(false);

  // New PYQ local state
  const [newQuestion, setNewQuestion] = useState('');
  const [newYear, setNewYear] = useState('');
  const [newMarks, setNewMarks] = useState<number>(7);
  const [newNotes, setNewNotes] = useState('');

  const currentStatus = getTopicStudyStatus(topic);
  const statusCfg = studyStatusConfig[currentStatus];
  const isDone = currentStatus === 'exam_ready';
  const isInToday = data.todayTasks.some(t => t.topicId === topic.id);

  const pyqList = topic.pyqs || [];
  const solvedPyqsCount = pyqList.filter(p => p.solved).length;
  const solvedWithoutNotesCount = pyqList.filter(p => p.solvedWithoutNotes).length;
  const practice = topic.numericalPractice || {
    attempted: 0,
    correct: 0,
    requiresRevision: 0,
    independentSolved: 0
  };

  const handleToggle = () => {
    toggleTopic(subjectId, unitId, topic.id);
  };

  const handleStatusSelect = (status: StudyStatus) => {
    updateTopicStatus(subjectId, unitId, topic.id, status);
    setShowStatusMenu(false);
  };

  const handleAddToToday = (e: React.MouseEvent) => {
    e.stopPropagation();
    addTopicToToday(subjectId, unitId, topic.id);
  };

  const handleCreatePYQ = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    addPYQ(subjectId, unitId, topic.id, {
      question: newQuestion.trim(),
      year: newYear.trim() || undefined,
      marks: Number(newMarks) || undefined,
      solved: false,
      solvedWithoutNotes: false,
      notes: newNotes.trim() || undefined
    });

    setNewQuestion('');
    setNewYear('');
    setNewNotes('');
    setShowAddPYQForm(false);
  };

  const hasExtraContent = pyqList.length > 0 || practice.attempted > 0 || topic.notes;

  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-200 overflow-hidden shadow-2xs",
        isDone
          ? "bg-[#FAFBF9]/80 dark:bg-[#181A17]/60 border-[#E8E9E4]/70 dark:border-[#242721]"
          : "bg-white dark:bg-[#1D1F1C] border-[#E8E9E4] dark:border-[#292C27] hover:border-[#D0D2CB] dark:hover:border-[#3A3F35]"
      )}
    >
      {/* Primary Topic Row */}
      <div className="flex items-center justify-between gap-3 px-3.5 py-3 select-none">
        {/* Left: Checkbox + Expand caret + Name */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <Checkbox
            checked={isDone}
            onChange={handleToggle}
            aria-label={`Mark "${topic.name}" as ${isDone ? 'incomplete' : 'exam ready'}`}
          />

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Collapse details" : "Expand details (PYQs & practice)"}
            className="p-0.5 rounded text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] transition-colors"
          >
            {isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5 text-[#858780]" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-[#858780]" />
            )}
          </button>

          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="min-w-0 flex-1 cursor-pointer"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <p
                className={cn(
                  "text-xs font-medium leading-normal transition-all",
                  isDone
                    ? "line-through text-[#858780] dark:text-[#7A7E76]"
                    : "text-[#20211F] dark:text-[#EAECE7]"
                )}
              >
                {topic.name}
              </p>

              {/* PYQ indicator tag if exists */}
              {pyqList.length > 0 && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(true);
                  }}
                  className={cn(
                    "text-[10px] font-mono px-1.5 py-0.5 rounded border transition-colors inline-flex items-center gap-1",
                    solvedPyqsCount === pyqList.length
                      ? "bg-[#F0FDF4] dark:bg-[#14281A] text-[#166534] dark:text-[#86EFAC] border-[#BBF7D0] dark:border-[#1B4D2B]"
                      : "bg-[#F8F9FA] dark:bg-[#20221E] text-[#858780] dark:text-[#8E928A] border-[#E8E9E4] dark:border-[#2D302A]"
                  )}
                >
                  <FileText className="w-2.5 h-2.5" />
                  {solvedPyqsCount}/{pyqList.length} PYQ
                </span>
              )}

              {/* Numerical Practice counter tag if active */}
              {practice.attempted > 0 && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(true);
                  }}
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded border bg-[#F8F9FA] dark:bg-[#20221E] text-[#64866D] dark:text-[#7B9F84] border-[#E8E9E4] dark:border-[#2D302A] inline-flex items-center gap-1"
                >
                  <Calculator className="w-2.5 h-2.5" />
                  {practice.independentSolved}/{practice.attempted} solved
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: 4-Level Status Selector + Priority + Meta */}
        <div className="flex items-center gap-2 shrink-0">
          {/* 4-Level Topic Status Pill Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowStatusMenu(!showStatusMenu)}
              className={cn(
                "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium border transition-colors cursor-pointer",
                statusCfg.bgClass,
                statusCfg.textClass,
                statusCfg.borderClass
              )}
              title="Change 4-level study status"
            >
              <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", statusCfg.dotClass)} />
              <span>{statusCfg.label}</span>
              <ChevronDown className="w-2.5 h-2.5 opacity-60" />
            </button>

            {showStatusMenu && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setShowStatusMenu(false)}
                />
                <div className="absolute right-0 top-full mt-1.5 z-40 w-44 bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl shadow-lg py-1.5 text-xs animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-[#A3A59E] dark:text-[#60645D] font-semibold">
                    Study Progress Level
                  </div>
                  {(['not_started', 'learning', 'practising', 'exam_ready'] as StudyStatus[]).map(st => {
                    const cfg = studyStatusConfig[st];
                    const active = currentStatus === st;
                    return (
                      <button
                        key={st}
                        onClick={() => handleStatusSelect(st)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-1.5 text-left transition-colors",
                          active
                            ? "bg-[#F3F3EF] dark:bg-[#252824] font-semibold text-[#20211F] dark:text-[#EAECE7]"
                            : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#FAFBF9] dark:hover:bg-[#20221E]"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <span className={cn("w-2 h-2 rounded-full", cfg.dotClass)} />
                          <span>{cfg.label}</span>
                        </div>
                        {active && <CheckCircle2 className="w-3.5 h-3.5 text-[#64866D] dark:text-[#7B9F84]" />}
                      </button>
                    );
                  })}
                  <div className="px-3 pt-1.5 mt-1 border-t border-[#F0F1EC] dark:border-[#262823] text-[10px] text-[#858780] dark:text-[#8E928A] leading-tight">
                    *Exam Ready: can solve important problems independently without notes.
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Priority indicator */}
          <PriorityBadge priority={topic.priority} />

          {/* Estimated study time */}
          {topic.estimatedTime && (
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-[#858780] dark:text-[#8E928A] font-mono px-1.5 py-0.5 rounded bg-[#F3F3EF] dark:bg-[#252824]">
              <Clock className="w-3 h-3" />
              {topic.estimatedTime}
            </span>
          )}

          {/* Add to Today's Focus */}
          <button
            onClick={handleAddToToday}
            disabled={isInToday}
            title={isInToday ? "Already in Today's Focus" : "Add to Today's Focus"}
            className={cn(
              "p-1 rounded-md transition-colors",
              isInToday
                ? "text-[#64866D] dark:text-[#7B9F84] opacity-100"
                : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#252824]"
            )}
            aria-label="Add to Today's Focus"
          >
            <Star className={cn("w-3.5 h-3.5", isInToday && "fill-current")} />
          </button>

          {/* More Actions Menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 rounded-md text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#252824] transition-colors"
              aria-label="Topic options"
            >
              <MoreVertical className="w-3.5 h-3.5" />
            </button>

            {showMenu && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setShowMenu(false)}
                />
                <div className="absolute right-0 top-full mt-1 z-30 w-36 bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl shadow-md py-1 text-xs animate-in fade-in zoom-in-95 duration-100">
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      setIsExpanded(!isExpanded);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-[#20211F] dark:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#252824] transition-colors"
                  >
                    <FileText className="w-3 h-3 text-[#858780]" />
                    <span>{isExpanded ? 'Hide details' : 'View details'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      onEdit(topic);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-[#20211F] dark:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#252824] transition-colors"
                  >
                    <Pencil className="w-3 h-3 text-[#858780]" />
                    <span>Edit topic</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      onDelete(topic.id);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-[#C85A48] dark:text-[#E0705F] hover:bg-[#FDF0EE] dark:hover:bg-[#2E1C1A] transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Delete topic</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Section: PYQs & Numerical Practice */}
      {isExpanded && (
        <div className="border-t border-[#E8E9E4] dark:border-[#252824] bg-[#FAFBF9]/90 dark:bg-[#161815]/90 p-3.5 space-y-4 text-xs">
          {/* Numerical Problem Practice Tracker */}
          <div className="bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-lg p-3">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Calculator className="w-3.5 h-3.5 text-[#64866D] dark:text-[#7B9F84]" />
                <span className="font-semibold text-[#20211F] dark:text-[#EAECE7]">
                  Numerical Practice & Accuracy
                </span>
              </div>
              <span className="text-[11px] text-[#858780] dark:text-[#8E928A]">
                {practice.independentSolved} solved independently
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
              {/* Attempted */}
              <div className="p-2 rounded-md bg-[#F8F9F7] dark:bg-[#232621] border border-[#ECEEE9] dark:border-[#2D302A] flex flex-col items-center">
                <span className="text-[10px] text-[#858780] dark:text-[#8E928A]">Attempted</span>
                <span className="text-base font-bold text-[#20211F] dark:text-[#EAECE7] my-0.5">
                  {practice.attempted}
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <button
                    onClick={() =>
                      updateNumericalPractice(subjectId, unitId, topic.id, {
                        attempted: Math.max(0, practice.attempted - 1)
                      })
                    }
                    className="w-5 h-5 rounded flex items-center justify-center bg-white dark:bg-[#1D1F1C] text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] border border-[#E8E9E4] dark:border-[#292C27]"
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      updateNumericalPractice(subjectId, unitId, topic.id, {
                        attempted: practice.attempted + 1
                      })
                    }
                    className="w-5 h-5 rounded flex items-center justify-center bg-white dark:bg-[#1D1F1C] text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] border border-[#E8E9E4] dark:border-[#292C27]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Correct */}
              <div className="p-2 rounded-md bg-[#F0FDF4] dark:bg-[#16271B] border border-[#DCFCE7] dark:border-[#1F3D27] flex flex-col items-center">
                <span className="text-[10px] text-[#166534] dark:text-[#86EFAC]">Correct</span>
                <span className="text-base font-bold text-[#166534] dark:text-[#86EFAC] my-0.5">
                  {practice.correct}
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <button
                    onClick={() =>
                      updateNumericalPractice(subjectId, unitId, topic.id, {
                        correct: Math.max(0, practice.correct - 1)
                      })
                    }
                    className="w-5 h-5 rounded flex items-center justify-center bg-white dark:bg-[#1D1F1C] text-[#166534] dark:text-[#86EFAC] border border-[#DCFCE7] dark:border-[#1F3D27]"
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      updateNumericalPractice(subjectId, unitId, topic.id, {
                        correct: practice.correct + 1,
                        attempted: Math.max(practice.attempted, practice.correct + 1)
                      })
                    }
                    className="w-5 h-5 rounded flex items-center justify-center bg-white dark:bg-[#1D1F1C] text-[#166534] dark:text-[#86EFAC] border border-[#DCFCE7] dark:border-[#1F3D27]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Requires Revision */}
              <div className="p-2 rounded-md bg-[#FFFBEB] dark:bg-[#2C2314] border border-[#FEF3C7] dark:border-[#4B391A] flex flex-col items-center">
                <span className="text-[10px] text-[#B45309] dark:text-[#FBBF24]">Need Revision</span>
                <span className="text-base font-bold text-[#B45309] dark:text-[#FBBF24] my-0.5">
                  {practice.requiresRevision}
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <button
                    onClick={() =>
                      updateNumericalPractice(subjectId, unitId, topic.id, {
                        requiresRevision: Math.max(0, practice.requiresRevision - 1)
                      })
                    }
                    className="w-5 h-5 rounded flex items-center justify-center bg-white dark:bg-[#1D1F1C] text-[#B45309] dark:text-[#FBBF24] border border-[#FEF3C7] dark:border-[#4B391A]"
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      updateNumericalPractice(subjectId, unitId, topic.id, {
                        requiresRevision: practice.requiresRevision + 1
                      })
                    }
                    className="w-5 h-5 rounded flex items-center justify-center bg-white dark:bg-[#1D1F1C] text-[#B45309] dark:text-[#FBBF24] border border-[#FEF3C7] dark:border-[#4B391A]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Independent Solved (No Notes) */}
              <div className="p-2 rounded-md bg-[#EFF6FF] dark:bg-[#17253D] border border-[#DBEAFE] dark:border-[#1E3A66] flex flex-col items-center">
                <span className="text-[10px] text-[#1E40AF] dark:text-[#93C5FD]">Independent</span>
                <span className="text-base font-bold text-[#1E40AF] dark:text-[#93C5FD] my-0.5">
                  {practice.independentSolved}
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <button
                    onClick={() =>
                      updateNumericalPractice(subjectId, unitId, topic.id, {
                        independentSolved: Math.max(0, practice.independentSolved - 1)
                      })
                    }
                    className="w-5 h-5 rounded flex items-center justify-center bg-white dark:bg-[#1D1F1C] text-[#1E40AF] dark:text-[#93C5FD] border border-[#DBEAFE] dark:border-[#1E3A66]"
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      updateNumericalPractice(subjectId, unitId, topic.id, {
                        independentSolved: practice.independentSolved + 1,
                        attempted: Math.max(practice.attempted, practice.independentSolved + 1)
                      })
                    }
                    className="w-5 h-5 rounded flex items-center justify-center bg-white dark:bg-[#1D1F1C] text-[#1E40AF] dark:text-[#93C5FD] border border-[#DBEAFE] dark:border-[#1E3A66]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Year Questions (PYQs) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#64866D] dark:text-[#7B9F84]" />
                <span className="font-semibold text-[#20211F] dark:text-[#EAECE7]">
                  Previous Year Questions ({solvedPyqsCount}/{pyqList.length} Solved)
                </span>
              </div>

              <button
                onClick={() => setShowAddPYQForm(!showAddPYQForm)}
                className="flex items-center gap-1 text-[11px] font-medium text-[#64866D] dark:text-[#7B9F84] hover:underline"
              >
                <Plus className="w-3 h-3" />
                <span>{showAddPYQForm ? 'Cancel' : 'Add Question'}</span>
              </button>
            </div>

            {/* Add PYQ mini form */}
            {showAddPYQForm && (
              <form
                onSubmit={handleCreatePYQ}
                className="p-3 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] space-y-2.5 animate-in fade-in"
              >
                <div>
                  <label className="block text-[11px] font-medium text-[#20211F] dark:text-[#EAECE7] mb-1">
                    Question Statement
                  </label>
                  <input
                    type="text"
                    value={newQuestion}
                    onChange={e => setNewQuestion(e.target.value)}
                    placeholder="e.g. Find the Fourier transform of f(x) = 1 for |x| < a..."
                    className="w-full px-2.5 py-1.5 text-xs rounded border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] focus:outline-none focus:border-[#64866D]"
                    autoFocus
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-[#858780] dark:text-[#8E928A] mb-1">
                      Exam Year
                    </label>
                    <input
                      type="text"
                      value={newYear}
                      onChange={e => setNewYear(e.target.value)}
                      placeholder="e.g. Dec 2023"
                      className="w-full px-2 py-1 text-xs rounded border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] focus:outline-none focus:border-[#64866D]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#858780] dark:text-[#8E928A] mb-1">
                      Marks (2, 3, 5, 7)
                    </label>
                    <select
                      value={newMarks}
                      onChange={e => setNewMarks(Number(e.target.value))}
                      className="w-full px-2 py-1 text-xs rounded border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] focus:outline-none focus:border-[#64866D]"
                    >
                      <option value={2}>2 Marks</option>
                      <option value={3}>3 Marks</option>
                      <option value={5}>5 Marks</option>
                      <option value={7}>7 Marks</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-[#858780] dark:text-[#8E928A] mb-1">
                    Key Formula / Notes
                  </label>
                  <input
                    type="text"
                    value={newNotes}
                    onChange={e => setNewNotes(e.target.value)}
                    placeholder="e.g. Use Dirichlet conditions; integrate by parts"
                    className="w-full px-2 py-1 text-xs rounded border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] focus:outline-none focus:border-[#64866D]"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowAddPYQForm(false)}
                    className="px-2.5 py-1 text-xs text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 text-xs font-medium rounded bg-[#64866D] text-white hover:bg-[#54735C]"
                  >
                    Save PYQ
                  </button>
                </div>
              </form>
            )}

            {/* PYQ List */}
            {pyqList.length === 0 ? (
              <p className="text-[11px] text-[#858780] dark:text-[#8E928A] py-1 italic">
                No previous year questions logged for this topic yet.
              </p>
            ) : (
              <div className="space-y-2">
                {pyqList.map(pyq => (
                  <div
                    key={pyq.id}
                    className={cn(
                      "p-2.5 rounded-lg border transition-all text-left space-y-1.5",
                      pyq.solved
                        ? "bg-[#FAFBF9] dark:bg-[#181A17] border-[#E8E9E4] dark:border-[#282B25]"
                        : "bg-white dark:bg-[#1D1F1C] border-[#E8E9E4] dark:border-[#292C27]"
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2 flex-1">
                        <Checkbox
                          checked={pyq.solved}
                          onChange={() => togglePYQ(subjectId, unitId, topic.id, pyq.id)}
                          aria-label="Mark PYQ solved"
                          className="mt-0.5"
                        />
                        <div className="flex-1 min-w-0">
                          <p
                            className={cn(
                              "text-xs leading-relaxed",
                              pyq.solved
                                ? "line-through text-[#858780] dark:text-[#7A7E76]"
                                : "text-[#20211F] dark:text-[#EAECE7]"
                            )}
                          >
                            {pyq.question}
                          </p>

                          {pyq.notes && (
                            <p className="text-[11px] text-[#64866D] dark:text-[#7B9F84] mt-1 italic">
                              💡 Note: {pyq.notes}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {pyq.year && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#F3F3EF] dark:bg-[#252824] text-[#858780] dark:text-[#8E928A]">
                            {pyq.year}
                          </span>
                        )}
                        {pyq.marks && (
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#EBF1ED] dark:bg-[#1C271F] text-[#64866D] dark:text-[#7B9F84]">
                            {pyq.marks}M
                          </span>
                        )}
                        <button
                          onClick={() => deletePYQ(subjectId, unitId, topic.id, pyq.id)}
                          className="p-1 text-[#858780] hover:text-[#C85A48] dark:hover:text-[#E0705F] transition-colors"
                          title="Remove question"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Independent Solving Pill Button */}
                    <div className="flex items-center justify-between pt-1 border-t border-[#F0F1EC] dark:border-[#242721] text-[11px]">
                      <button
                        onClick={() =>
                          togglePYQWithoutNotes(subjectId, unitId, topic.id, pyq.id)
                        }
                        className={cn(
                          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] transition-colors border",
                          pyq.solvedWithoutNotes
                            ? "bg-[#F0FDF4] dark:bg-[#14281A] text-[#166534] dark:text-[#86EFAC] border-[#BBF7D0] dark:border-[#1B4D2B] font-medium"
                            : "bg-[#F8F9F7] dark:bg-[#20221E] text-[#858780] dark:text-[#8E928A] border-[#E8E9E4] dark:border-[#2D302A] hover:text-[#20211F]"
                        )}
                      >
                        <Award className="w-3 h-3" />
                        <span>
                          {pyq.solvedWithoutNotes
                            ? "Solved Independently (No Notes)"
                            : "Mark Solved Without Notes"}
                        </span>
                      </button>

                      <span className="text-[10px] text-[#A3A59E] dark:text-[#60645D]">
                        {pyq.solved ? (pyq.solvedWithoutNotes ? "Exam Ready" : "Solved") : "Unsolved"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
