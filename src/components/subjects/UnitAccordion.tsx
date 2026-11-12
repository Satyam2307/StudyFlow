'use client';

import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Plus,
  MoreHorizontal,
  Pencil,
  Trash2,
  CheckCircle2
} from 'lucide-react';
import { Unit, Topic } from '@/types/study';
import { getUnitStats, cn } from '@/lib/utils';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { TopicItem } from './TopicItem';

interface UnitAccordionProps {
  unit: Unit;
  subjectId: string;
  defaultExpanded?: boolean;
  filter: 'all' | 'pending' | 'completed' | 'high';
  searchQuery: string;
  onAddTopic: (unitId: string, unitName: string) => void;
  onEditTopic: (unitId: string, topic: Topic) => void;
  onDeleteTopic: (unitId: string, topicId: string) => void;
  onRenameUnit: (unitId: string, currentName: string) => void;
  onDeleteUnit: (unitId: string, unitName: string) => void;
}

export function UnitAccordion({
  unit,
  subjectId,
  defaultExpanded = true,
  filter,
  searchQuery,
  onAddTopic,
  onEditTopic,
  onDeleteTopic,
  onRenameUnit,
  onDeleteUnit
}: UnitAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [showUnitMenu, setShowUnitMenu] = useState(false);

  const stats = getUnitStats(unit);

  // Apply filters and search query
  const filteredTopics = unit.topics.filter(topic => {
    // Search query check
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesName = topic.name.toLowerCase().includes(q);
      const matchesNotes = topic.notes?.toLowerCase().includes(q);
      if (!matchesName && !matchesNotes) return false;
    }

    // Filter check
    if (filter === 'pending') return !topic.completed && topic.studyStatus !== 'exam_ready';
    if (filter === 'completed') return topic.completed || topic.studyStatus === 'exam_ready';
    if (filter === 'high') return topic.priority === 'high' || topic.priority === 'very_high';
    return true;
  });

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl overflow-hidden shadow-2xs transition-all duration-200">
      {/* Unit Header Bar */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-3 p-4 hover:bg-[#FAFBF9] dark:hover:bg-[#20221E] cursor-pointer select-none transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="p-1 rounded-md text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] transition-colors">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 stroke-[2]" />
            ) : (
              <ChevronRight className="w-4 h-4 stroke-[2]" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-[#20211F] dark:text-[#EAECE7] truncate">
                {unit.name}
              </h4>
              {stats.percentage === 100 && stats.total > 0 && (
                <span className="flex items-center gap-1 text-[11px] text-[#64866D] dark:text-[#7B9F84] font-medium shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Completed
                </span>
              )}
            </div>
            <p className="text-[11px] text-[#858780] dark:text-[#8E928A] mt-0.5">
              {stats.completed} of {stats.total} topics completed ({stats.percentage}%)
            </p>
          </div>
        </div>

        {/* Progress bar + Controls */}
        <div
          className="flex items-center gap-4 shrink-0"
          onClick={e => e.stopPropagation()}
        >
          <div className="hidden sm:block w-28">
            <ProgressBar value={stats.percentage} size="sm" />
          </div>

          {/* Quick Add Topic */}
          <button
            onClick={() => onAddTopic(unit.id, unit.name)}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg text-[#64866D] dark:text-[#7B9F84] hover:bg-[#EBF1ED] dark:hover:bg-[#1C271F] transition-colors"
            title="Add topic to unit"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add topic</span>
          </button>

          {/* Unit Settings Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUnitMenu(!showUnitMenu)}
              className="p-1 rounded-md text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#252824] transition-colors"
              aria-label="Unit options"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>

            {showUnitMenu && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setShowUnitMenu(false)}
                />
                <div className="absolute right-0 top-full mt-1 z-30 w-36 bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-lg shadow-md py-1 text-xs animate-in fade-in zoom-in-95 duration-100">
                  <button
                    onClick={() => {
                      setShowUnitMenu(false);
                      onRenameUnit(unit.id, unit.name);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-[#20211F] dark:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#252824] transition-colors"
                  >
                    <Pencil className="w-3 h-3 text-[#858780]" />
                    <span>Rename unit</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowUnitMenu(false);
                      onDeleteUnit(unit.id, unit.name);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-[#C85A48] dark:text-[#E0705F] hover:bg-[#FDF0EE] dark:hover:bg-[#2E1C1A] transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Delete unit</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Topic List */}
      {isExpanded && (
        <div className="px-4 pb-4 pt-1 border-t border-[#F0F1EC] dark:border-[#252824] space-y-2">
          {filteredTopics.length === 0 ? (
            <div className="py-5 text-center text-xs text-[#858780] dark:text-[#8E928A]">
              {unit.topics.length === 0 ? (
                <span>No topics in this unit yet.</span>
              ) : (
                <span>No topics match the selected filter.</span>
              )}
            </div>
          ) : (
            filteredTopics.map(topic => (
              <TopicItem
                key={topic.id}
                topic={topic}
                subjectId={subjectId}
                unitId={unit.id}
                onEdit={t => onEditTopic(unit.id, t)}
                onDelete={tId => onDeleteTopic(unit.id, tId)}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

