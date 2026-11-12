'use client';

import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  Plus,
  Trash2,
  CheckCircle2,
  Filter,
  Layers,
  BookOpen,
  Award,
  Calculator,
  Flame,
  FileText
} from 'lucide-react';
import { useStudy } from '@/context/StudyContext';
import { Subject, Topic, Priority } from '@/types/study';
import { getSubjectStats, getUnitStats, cn } from '@/lib/utils';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { UnitAccordion } from './UnitAccordion';
import { AddEditTopicModal } from './AddEditTopicModal';
import { AddUnitModal } from './AddUnitModal';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { EmptyState } from '@/components/ui/EmptyState';

interface SubjectDetailProps {
  subject: Subject;
  onBack: () => void;
}

type TopicFilter = 'all' | 'pending' | 'completed' | 'high';

export function SubjectDetail({ subject, onBack }: SubjectDetailProps) {
  const {
    addTopic,
    editTopic,
    deleteTopic,
    addUnit,
    renameUnit,
    deleteUnit,
    deleteSubject
  } = useStudy();

  const [filter, setFilter] = useState<TopicFilter>('all');
  const [search, setSearch] = useState('');

  // Topic Modal state
  const [topicModalOpen, setTopicModalOpen] = useState(false);
  const [activeUnitId, setActiveUnitId] = useState<string>('');
  const [activeUnitName, setActiveUnitName] = useState<string>('');
  const [editingTopic, setEditingTopic] = useState<Topic | null>(null);

  // Unit Modal state
  const [unitModalOpen, setUnitModalOpen] = useState(false);
  const [isRenamingUnit, setIsRenamingUnit] = useState(false);
  const [targetUnitId, setTargetUnitId] = useState<string>('');
  const [targetUnitName, setTargetUnitName] = useState<string>('');

  // Confirm delete states
  const [confirmDeleteTopic, setConfirmDeleteTopic] = useState<{
    unitId: string;
    topicId: string;
  } | null>(null);
  const [confirmDeleteUnit, setConfirmDeleteUnit] = useState<{
    unitId: string;
    unitName: string;
  } | null>(null);
  const [confirmDeleteSubject, setConfirmDeleteSubject] = useState(false);

  const stats = getSubjectStats(subject);

  // Add / Edit topic handlers
  const handleOpenAddTopic = (unitId: string, unitName: string) => {
    setActiveUnitId(unitId);
    setActiveUnitName(unitName);
    setEditingTopic(null);
    setTopicModalOpen(true);
  };

  const handleOpenEditTopic = (unitId: string, topic: Topic) => {
    setActiveUnitId(unitId);
    setEditingTopic(topic);
    setTopicModalOpen(true);
  };

  const handleTopicSubmit = (topicData: {
    name: string;
    priority: Priority;
    estimatedTime?: string;
  }) => {
    if (editingTopic) {
      editTopic(subject.id, activeUnitId, editingTopic.id, topicData);
    } else {
      addTopic(subject.id, activeUnitId, topicData);
    }
  };

  // Unit handlers
  const handleOpenAddUnit = () => {
    setIsRenamingUnit(false);
    setTargetUnitId('');
    setTargetUnitName('');
    setUnitModalOpen(true);
  };

  const handleOpenRenameUnit = (unitId: string, currentName: string) => {
    setIsRenamingUnit(true);
    setTargetUnitId(unitId);
    setTargetUnitName(currentName);
    setUnitModalOpen(true);
  };

  const handleUnitSubmit = (name: string) => {
    if (isRenamingUnit && targetUnitId) {
      renameUnit(subject.id, targetUnitId, name);
    } else {
      addUnit(subject.id, name);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between pb-2">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-medium text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Subjects</span>
        </button>

        <button
          onClick={() => setConfirmDeleteSubject(true)}
          className="flex items-center gap-1 text-xs text-[#858780] hover:text-[#C85A48] dark:hover:text-[#E0705F] transition-colors"
          title="Delete subject"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Delete subject</span>
        </button>
      </div>

      {/* Subject Hero Header */}
      <div className="bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              {subject.code && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F3F3EF] dark:bg-[#252824] text-[#858780] dark:text-[#8E928A]">
                  {subject.code}
                </span>
              )}
              <span className="text-xs text-[#858780] dark:text-[#8E928A]">
                {subject.units.length} {subject.units.length === 1 ? 'Unit' : 'Units'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#20211F] dark:text-[#EAECE7]">
              {subject.name}
            </h2>
          </div>

          <div className="sm:text-right shrink-0">
            <div className="flex items-baseline sm:justify-end gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-[#20211F] dark:text-[#EAECE7]">
                {stats.percentage}%
              </span>
              <span className="text-xs text-[#858780] dark:text-[#8E928A]">
                completed
              </span>
            </div>
            <p className="text-xs text-[#858780] dark:text-[#8E928A] mt-0.5">
              {stats.completed} of {stats.total} topics mastered
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar value={stats.percentage} size="md" className="mt-4" />

        {/* Subject Preparation Analytics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-5 pt-5 border-t border-[#F0F1EC] dark:border-[#252824]">
          <div className="p-2.5 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
            <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block">Syllabus Done</span>
            <span className="text-base font-bold text-[#20211F] dark:text-[#EAECE7]">
              {stats.percentage}%
            </span>
            <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block">
              {stats.completed}/{stats.total} topics
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#F0FDF4] dark:bg-[#14281A] border border-[#BBF7D0] dark:border-[#1B4D2B]">
            <span className="text-[10px] text-[#166534] dark:text-[#86EFAC] block flex items-center gap-1">
              <Award className="w-2.5 h-2.5" /> Exam Ready
            </span>
            <span className="text-base font-bold text-[#166534] dark:text-[#86EFAC]">
              {stats.examReady}
            </span>
            <span className="text-[10px] text-[#166534]/80 dark:text-[#86EFAC]/80 block">
              independent prep
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#FFFBEB] dark:bg-[#2C2314] border border-[#FEF3C7] dark:border-[#4B391A]">
            <span className="text-[10px] text-[#B45309] dark:text-[#FBBF24] block">In Practice</span>
            <span className="text-base font-bold text-[#B45309] dark:text-[#FBBF24]">
              {stats.practising}
            </span>
            <span className="text-[10px] text-[#B45309]/80 dark:text-[#FBBF24]/80 block">
              active problem sets
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
            <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block">Pending / Learn</span>
            <span className="text-base font-bold text-[#20211F] dark:text-[#EAECE7]">
              {stats.notStarted + stats.learning}
            </span>
            <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block">
              remaining topics
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
            <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block flex items-center gap-1">
              <FileText className="w-2.5 h-2.5" /> PYQs Solved
            </span>
            <span className="text-base font-bold text-[#20211F] dark:text-[#EAECE7]">
              {stats.solvedPyqs}
              <span className="text-xs font-normal text-[#858780]">/{stats.totalPyqs}</span>
            </span>
            <span className="text-[10px] text-[#64866D] dark:text-[#7B9F84] block truncate">
              {stats.solvedWithoutNotesPyqs} no notes
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
            <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block flex items-center gap-1">
              <Calculator className="w-2.5 h-2.5" /> Independent Solved
            </span>
            <span className="text-base font-bold text-[#20211F] dark:text-[#EAECE7]">
              {stats.independentProblems}
            </span>
            <span className="text-[10px] text-[#858780] dark:text-[#8E928A] block">
              {stats.totalAttemptedProblems} attempted
            </span>
          </div>
        </div>

        {/* Unit-Wise Mini Progress Visualizer */}
        {subject.units.length > 0 && (
          <div className="mt-4 pt-4 border-t border-[#F0F1EC] dark:border-[#252824]">
            <span className="text-[11px] font-medium text-[#858780] dark:text-[#8E928A] block mb-2">
              Unit-Wise Progress
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {subject.units.map(u => {
                const uStats = getUnitStats(u);
                return (
                  <div
                    key={u.id}
                    className="p-2 rounded-lg bg-[#F8F9F7] dark:bg-[#20221E] border border-[#ECEEE9] dark:border-[#2B2E28]"
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-medium text-[#20211F] dark:text-[#EAECE7] truncate max-w-[120px]">
                        {u.name.replace(/^Unit \d+\s*–\s*/, '')}
                      </span>
                      <span className="font-bold text-[#64866D] dark:text-[#7B9F84]">
                        {uStats.percentage}%
                      </span>
                    </div>
                    <ProgressBar value={uStats.percentage} size="sm" />
                    <div className="flex items-center justify-between text-[10px] text-[#858780] dark:text-[#8E928A] mt-1">
                      <span>{uStats.completed}/{uStats.total} done</span>
                      {uStats.examReady > 0 && (
                        <span className="text-[#166534] dark:text-[#86EFAC] font-medium">
                          {uStats.examReady} ready
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#858780]" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search topics in this subject..."
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] placeholder:text-[#858780] focus:outline-none focus:border-[#64866D] dark:focus:border-[#7B9F84]"
          />
        </div>

        {/* Filters and Add Unit */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <div className="flex items-center p-0.5 rounded-lg bg-[#E8E9E4]/60 dark:bg-[#252824] shrink-0">
            {(
              [
                { id: 'all', label: 'All' },
                { id: 'pending', label: 'Pending' },
                { id: 'completed', label: 'Done' },
                { id: 'high', label: 'High Priority' }
              ] as const
            ).map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "px-2.5 py-1 text-xs font-medium rounded-md transition-colors",
                  filter === f.id
                    ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-semibold"
                    : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleOpenAddUnit}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors shrink-0 shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Unit</span>
          </button>
        </div>
      </div>

      {/* Unit Accordions List */}
      <div className="space-y-3 pt-1">
        {subject.units.length === 0 ? (
          <EmptyState
            icon={Layers}
            title="No syllabus units created"
            description="Start structuring your course syllabus by creating your first unit."
            action={{
              label: 'Add First Unit',
              onClick: handleOpenAddUnit
            }}
          />
        ) : (
          subject.units.map(unit => (
            <UnitAccordion
              key={unit.id}
              unit={unit}
              subjectId={subject.id}
              filter={filter}
              searchQuery={search}
              onAddTopic={handleOpenAddTopic}
              onEditTopic={handleOpenEditTopic}
              onDeleteTopic={(uId, tId) =>
                setConfirmDeleteTopic({ unitId: uId, topicId: tId })
              }
              onRenameUnit={handleOpenRenameUnit}
              onDeleteUnit={(uId, uName) =>
                setConfirmDeleteUnit({ unitId: uId, unitName: uName })
              }
            />
          ))
        )}
      </div>

      {/* Add / Edit Topic Modal */}
      <AddEditTopicModal
        isOpen={topicModalOpen}
        onClose={() => setTopicModalOpen(false)}
        onSubmit={handleTopicSubmit}
        initialTopic={editingTopic}
        unitName={activeUnitName}
      />

      {/* Add / Rename Unit Modal */}
      <AddUnitModal
        isOpen={unitModalOpen}
        onClose={() => setUnitModalOpen(false)}
        onSubmit={handleUnitSubmit}
        initialName={targetUnitName}
        isRenaming={isRenamingUnit}
      />

      {/* Delete Topic Confirm */}
      <ConfirmDialog
        isOpen={!!confirmDeleteTopic}
        onClose={() => setConfirmDeleteTopic(null)}
        onConfirm={() => {
          if (confirmDeleteTopic) {
            deleteTopic(
              subject.id,
              confirmDeleteTopic.unitId,
              confirmDeleteTopic.topicId
            );
          }
        }}
        title="Delete Topic"
        description="Are you sure you want to delete this topic from the syllabus? This cannot be undone."
        confirmText="Delete"
        variant="danger"
      />

      {/* Delete Unit Confirm */}
      <ConfirmDialog
        isOpen={!!confirmDeleteUnit}
        onClose={() => setConfirmDeleteUnit(null)}
        onConfirm={() => {
          if (confirmDeleteUnit) {
            deleteUnit(subject.id, confirmDeleteUnit.unitId);
          }
        }}
        title="Delete Unit"
        description={`Are you sure you want to delete "${confirmDeleteUnit?.unitName}" and all its topics?`}
        confirmText="Delete Unit"
        variant="danger"
      />

      {/* Delete Subject Confirm */}
      <ConfirmDialog
        isOpen={confirmDeleteSubject}
        onClose={() => setConfirmDeleteSubject(false)}
        onConfirm={() => {
          deleteSubject(subject.id);
          onBack();
        }}
        title="Delete Subject"
        description={`Are you sure you want to delete "${subject.name}"? All syllabus units, topics, and progress will be permanently removed.`}
        confirmText="Delete Subject"
        variant="danger"
      />
    </div>
  );
}

