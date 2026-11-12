'use client';

import React, { useState } from 'react';
import {
  Clock,
  MoreVertical,
  PlusCircle,
  Pencil,
  Trash2,
  Check,
  Star
} from 'lucide-react';
import { Topic, Priority } from '@/types/study';
import { Checkbox } from '@/components/ui/Checkbox';
import { PriorityBadge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
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
  const { toggleTopic, addTopicToToday, data } = useStudy();
  const [showMenu, setShowMenu] = useState(false);

  const isInToday = data.todayTasks.some(t => t.topicId === topic.id);

  const handleToggle = () => {
    toggleTopic(subjectId, unitId, topic.id);
  };

  const handleAddToToday = (e: React.MouseEvent) => {
    e.stopPropagation();
    addTopicToToday(subjectId, unitId, topic.id);
  };

  return (
    <div
      onClick={handleToggle}
      className={cn(
        "group relative flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg border transition-all duration-150 cursor-pointer text-left select-none",
        topic.completed
          ? "bg-[#FAFBF9]/80 dark:bg-[#181A17]/60 border-[#E8E9E4]/60 dark:border-[#242721] text-[#858780] dark:text-[#7A7E76]"
          : "bg-white dark:bg-[#1D1F1C] border-[#E8E9E4] dark:border-[#292C27] hover:border-[#D0D2CB] dark:hover:border-[#3A3F35] text-[#20211F] dark:text-[#EAECE7] shadow-2xs"
      )}
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <Checkbox
          checked={topic.completed}
          onChange={handleToggle}
          aria-label={`Mark "${topic.name}" as ${topic.completed ? 'incomplete' : 'complete'}`}
        />

        <div className="min-w-0 flex-1">
          <p
            className={cn(
              "text-xs leading-normal transition-all",
              topic.completed && "line-through text-[#858780] dark:text-[#7A7E76]"
            )}
          >
            {topic.name}
          </p>
        </div>
      </div>

      {/* Meta tags and Actions */}
      <div
        className="flex items-center gap-2 shrink-0"
        onClick={e => e.stopPropagation()}
      >
        {/* Priority indicator */}
        <PriorityBadge priority={topic.priority} />

        {/* Estimated study time */}
        {topic.estimatedTime && (
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#858780] dark:text-[#8E928A] font-mono px-1.5 py-0.5 rounded bg-[#F3F3EF] dark:bg-[#252824]">
            <Clock className="w-3 h-3" />
            {topic.estimatedTime}
          </span>
        )}

        {/* Quick Add to Today's Focus */}
        <button
          onClick={handleAddToToday}
          disabled={isInToday}
          title={isInToday ? "Already in Today's Focus" : "Add to Today's Focus"}
          className={cn(
            "p-1 rounded-md transition-colors",
            isInToday
              ? "text-[#64866D] dark:text-[#7B9F84] opacity-100"
              : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] opacity-0 group-hover:opacity-100 hover:bg-[#F3F3EF] dark:hover:bg-[#252824]"
          )}
          aria-label="Add to Today's Focus"
        >
          <Star className={cn("w-3.5 h-3.5", isInToday && "fill-current")} />
        </button>

        {/* More Actions Dropdown Menu */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 rounded-md text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#252824] transition-colors opacity-0 group-hover:opacity-100"
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
              <div className="absolute right-0 top-full mt-1 z-30 w-32 bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-lg shadow-md py-1 text-xs animate-in fade-in zoom-in-95 duration-100">
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
  );
}

