'use client';

import React, { useState } from 'react';
import { Plus, BookOpen } from 'lucide-react';
import { useStudy } from '@/context/StudyContext';
import { SubjectCard } from '@/components/dashboard/SubjectCard';
import { AddSubjectModal } from './AddSubjectModal';
import { EmptyState } from '@/components/ui/EmptyState';

export function SubjectsOverview() {
  const { data, addSubject, setSelectedSubjectId } = useStudy();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#64866D] dark:text-[#7B9F84]">
            Academic Curriculum
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-[#20211F] dark:text-[#EAECE7] mt-0.5">
            My Subjects
          </h2>
          <p className="text-xs text-[#858780] dark:text-[#8E928A] mt-1">
            Organized syllabus breakdowns and unit-level preparation progress.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors shadow-2xs self-start sm:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Subject</span>
        </button>
      </div>

      {data.subjects.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="No subjects registered"
          description="Create your first subject to start tracking units, chapters, and exam topics."
          action={{
            label: 'Add Subject',
            onClick: () => setIsAddModalOpen(true)
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.subjects.map(subject => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onClick={() => setSelectedSubjectId(subject.id)}
            />
          ))}
        </div>
      )}

      <AddSubjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={addSubject}
      />
    </div>
  );
}

