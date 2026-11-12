'use client';

import React, { useState } from 'react';
import {
  Target,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Clock,
  Layers
} from 'lucide-react';
import { useStudy } from '@/context/StudyContext';
import { Priority } from '@/types/study';
import { Checkbox } from '@/components/ui/Checkbox';
import { PriorityBadge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { EmptyState } from '@/components/ui/EmptyState';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn, getRandomQuote } from '@/lib/utils';

export function TodaysFocusView() {
  const {
    data,
    toggleTodayTask,
    removeTodayTask,
    addCustomTodayTask,
    addTopicToToday
  } = useStudy();

  const [quote] = useState(getRandomQuote);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPickerModalOpen, setIsPickerModalOpen] = useState(false);

  // Custom task form state
  const [taskTitle, setTaskTitle] = useState('');
  const [taskPriority, setTaskPriority] = useState<Priority>('medium');
  const [taskTime, setTaskTime] = useState('45 min');

  const tasks = data.todayTasks;
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const remainingCount = totalCount - completedCount;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;
    addCustomTodayTask(taskTitle, taskPriority, taskTime);
    setTaskTitle('');
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#64866D] dark:text-[#7B9F84]">
                Daily Execution
              </span>
              <span className="w-1 h-1 rounded-full bg-[#D0D2CB] dark:bg-[#3D423A]" />
              <span className="text-xs text-[#858780] dark:text-[#8E928A]">
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#20211F] dark:text-[#EAECE7]">
              Today's Focus
            </h2>
            <p className="text-xs text-[#858780] dark:text-[#8E928A] flex items-center gap-1.5 pt-1">
              <Sparkles className="w-3.5 h-3.5 text-[#64866D] dark:text-[#7B9F84] shrink-0" />
              <span>"{quote}"</span>
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsPickerModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E] transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#858780]" />
              <span>Pick from Syllabus</span>
            </button>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Task</span>
            </button>
          </div>
        </div>

        {/* Progress summary bar */}
        {totalCount > 0 && (
          <div className="pt-5 mt-5 border-t border-[#F0F1EC] dark:border-[#252824]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-[#858780] dark:text-[#8E928A]">
                {completedCount} of {totalCount} tasks completed ·{' '}
                <span className="font-medium text-[#20211F] dark:text-[#EAECE7]">
                  {remainingCount} {remainingCount === 1 ? 'task' : 'tasks'} remaining
                </span>
              </span>
              <span className="font-semibold text-[#20211F] dark:text-[#EAECE7]">
                {percentage}%
              </span>
            </div>
            <ProgressBar value={percentage} size="sm" />
          </div>
        )}
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {tasks.length === 0 ? (
          <EmptyState
            icon={Target}
            title="Your focus list is clear"
            description="Select key topics from your course syllabus or add target goals to accomplish today."
            action={{
              label: 'Pick Topics from Syllabus',
              onClick: () => setIsPickerModalOpen(true)
            }}
          />
        ) : (
          tasks.map(task => (
            <div
              key={task.id}
              onClick={() => toggleTodayTask(task.id)}
              className={cn(
                "group flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all duration-150 cursor-pointer text-left select-none",
                task.completed
                  ? "bg-[#FAFBF9]/80 dark:bg-[#181A17]/60 border-[#E8E9E4]/60 dark:border-[#242721] text-[#858780] dark:text-[#7A7E76]"
                  : "bg-white dark:bg-[#1D1F1C] border-[#E8E9E4] dark:border-[#292C27] hover:border-[#D0D2CB] dark:hover:border-[#3A3F35] text-[#20211F] dark:text-[#EAECE7] shadow-2xs"
              )}
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <Checkbox
                  checked={task.completed}
                  onChange={() => toggleTodayTask(task.id)}
                  aria-label={`Mark "${task.title}" as complete`}
                />

                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "text-xs font-medium leading-snug transition-all",
                      task.completed && "line-through text-[#858780] dark:text-[#7A7E76]"
                    )}
                  >
                    {task.title}
                  </p>
                  {task.subjectName && (
                    <p className="text-[11px] text-[#858780] dark:text-[#8E928A] mt-0.5 truncate">
                      {task.subjectName}
                    </p>
                  )}
                </div>
              </div>

              <div
                className="flex items-center gap-2.5 shrink-0"
                onClick={e => e.stopPropagation()}
              >
                <PriorityBadge priority={task.priority} />

                {task.estimatedTime && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#858780] dark:text-[#8E928A] font-mono px-2 py-0.5 rounded bg-[#F3F3EF] dark:bg-[#252824]">
                    <Clock className="w-3 h-3" />
                    {task.estimatedTime}
                  </span>
                )}

                <button
                  onClick={() => removeTodayTask(task.id)}
                  className="p-1 rounded-md text-[#858780] hover:text-[#C85A48] dark:hover:text-[#E0705F] hover:bg-[#FDF0EE] dark:hover:bg-[#2E1C1A] opacity-0 group-hover:opacity-100 transition-all"
                  title="Remove from Today (keeps in syllabus)"
                  aria-label="Remove from Today"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Custom Task Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add to Today's Focus"
        description="Add a task or revision goal for today."
        maxWidth="sm"
      >
        <form onSubmit={handleCustomSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#20211F] dark:text-[#EAECE7] mb-1.5">
              Task Description
            </label>
            <input
              type="text"
              value={taskTitle}
              onChange={e => setTaskTitle(e.target.value)}
              placeholder="e.g. Solve 5 numericals on Limiting Errors"
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] placeholder:text-[#858780] focus:outline-none focus:border-[#64866D] dark:focus:border-[#7B9F84]"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#20211F] dark:text-[#EAECE7] mb-1.5">
              Priority
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['low', 'medium', 'high'] as Priority[]).map(p => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setTaskPriority(p)}
                  className={cn(
                    "py-1.5 rounded-lg text-xs font-medium border capitalize transition-colors",
                    taskPriority === p
                      ? "border-[#64866D] bg-[#EBF1ED] text-[#42614B] dark:border-[#7B9F84] dark:bg-[#1C271F] dark:text-[#8EAF96]"
                      : "border-[#E8E9E4] dark:border-[#292C27] text-[#858780] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E]"
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#20211F] dark:text-[#EAECE7] mb-1.5">
              Target Duration
            </label>
            <input
              type="text"
              value={taskTime}
              onChange={e => setTaskTime(e.target.value)}
              placeholder="e.g. 45 min"
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] placeholder:text-[#858780] focus:outline-none focus:border-[#64866D] dark:focus:border-[#7B9F84]"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#858780] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg text-xs font-medium bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors"
            >
              Add to Today
            </button>
          </div>
        </form>
      </Modal>

      {/* Pick from Syllabus Modal */}
      <Modal
        isOpen={isPickerModalOpen}
        onClose={() => setIsPickerModalOpen(false)}
        title="Add from Course Syllabus"
        description="Select topics to queue into today's focus list."
        maxWidth="lg"
      >
        <div className="max-h-96 overflow-y-auto space-y-4 pr-1">
          {data.subjects.map(subject => (
            <div key={subject.id} className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#858780] dark:text-[#8E928A] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {subject.name}
              </h4>

              <div className="space-y-1.5">
                {subject.units.flatMap(u =>
                  u.topics
                    .filter(t => !t.completed)
                    .map(topic => {
                      const isAdded = tasks.some(t => t.topicId === topic.id);
                      return (
                        <div
                          key={topic.id}
                          className="flex items-center justify-between gap-3 p-2.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] hover:bg-[#FAFBF9] dark:hover:bg-[#20221E] transition-colors"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium text-[#20211F] dark:text-[#EAECE7] truncate">
                              {topic.name}
                            </p>
                            <p className="text-[10px] text-[#858780] dark:text-[#8E928A]">
                              {u.name}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <PriorityBadge priority={topic.priority} />
                            <button
                              onClick={() => {
                                addTopicToToday(subject.id, u.id, topic.id);
                              }}
                              disabled={isAdded}
                              className={cn(
                                "px-2.5 py-1 text-xs font-medium rounded-md transition-colors",
                                isAdded
                                  ? "bg-[#EBF1ED] text-[#64866D] dark:bg-[#1C271F] dark:text-[#7B9F84]"
                                  : "bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white"
                              )}
                            >
                              {isAdded ? 'Added' : 'Add to Today'}
                            </button>
                          </div>
                        </div>
                      );
                    })
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-3 mt-3 border-t border-[#F0F1EC] dark:border-[#252824]">
          <button
            onClick={() => setIsPickerModalOpen(false)}
            className="px-4 py-1.5 rounded-lg text-xs font-medium bg-[#F3F3EF] dark:bg-[#20221E] text-[#20211F] dark:text-[#EAECE7]"
          >
            Done
          </button>
        </div>
      </Modal>
    </div>
  );
}

