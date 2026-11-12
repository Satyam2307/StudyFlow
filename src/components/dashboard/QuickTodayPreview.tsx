'use client';

import React from 'react';
import { Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useStudy } from '@/context/StudyContext';
import { Checkbox } from '@/components/ui/Checkbox';
import { PriorityDot } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export function QuickTodayPreview() {
  const { data, toggleTodayTask, setActiveTab } = useStudy();

  const tasks = data.todayTasks;
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl p-5 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#EBF1ED] dark:bg-[#1C271F] flex items-center justify-center text-[#64866D] dark:text-[#7B9F84]">
            <Target className="w-3.5 h-3.5" />
          </div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#858780] dark:text-[#8E928A]">
            Today's Focus
          </h3>
        </div>

        <button
          onClick={() => setActiveTab('today')}
          className="text-xs text-[#64866D] dark:text-[#7B9F84] hover:underline flex items-center gap-1 font-medium"
        >
          <span>Open Focus</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="py-6 text-center">
          <p className="text-xs text-[#858780] dark:text-[#8E928A]">
            No topics scheduled for today yet.
          </p>
          <button
            onClick={() => setActiveTab('today')}
            className="text-xs text-[#64866D] dark:text-[#7B9F84] font-medium hover:underline mt-1.5 inline-block"
          >
            Add topics to study today →
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] text-[#858780] dark:text-[#8E928A] mb-2 pb-1.5 border-b border-[#F0F1EC] dark:border-[#252824]">
            <span>{completedCount} of {totalCount} completed ({percentage}%)</span>
            {completedCount === totalCount && totalCount > 0 && (
              <span className="text-[#64866D] dark:text-[#7B9F84] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> All caught up!
              </span>
            )}
          </div>

          <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
            {tasks.slice(0, 5).map(task => (
              <div
                key={task.id}
                onClick={() => toggleTodayTask(task.id)}
                className={cn(
                  "flex items-center justify-between gap-3 p-2 rounded-lg text-xs transition-colors cursor-pointer group",
                  task.completed
                    ? "bg-[#FAFBF9] dark:bg-[#1A1C19] text-[#858780] dark:text-[#8E928A]"
                    : "hover:bg-[#F8F8F5] dark:hover:bg-[#222521] text-[#20211F] dark:text-[#EAECE7]"
                )}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Checkbox
                    checked={task.completed}
                    onChange={() => toggleTodayTask(task.id)}
                  />
                  <span
                    className={cn(
                      "truncate text-xs",
                      task.completed && "line-through text-[#858780] dark:text-[#8E928A]"
                    )}
                  >
                    {task.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <PriorityDot priority={task.priority} />
                  {task.estimatedTime && (
                    <span className="text-[10px] text-[#858780] dark:text-[#8E928A] font-mono">
                      {task.estimatedTime}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {tasks.length > 5 && (
            <p className="text-[11px] text-center text-[#858780] dark:text-[#8E928A] pt-1">
              +{tasks.length - 5} more in Today's Focus
            </p>
          )}
        </div>
      )}
    </div>
  );
}

