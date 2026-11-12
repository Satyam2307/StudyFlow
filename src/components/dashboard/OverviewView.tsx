'use client';

import React, { useState } from 'react';
import { Plus, BookOpen, Target, Sparkles, ArrowRight } from 'lucide-react';
import { useStudy } from '@/context/StudyContext';
import { Header } from '@/components/layout/Header';
import { OverallProgressCard } from './OverallProgressCard';
import { QuickTodayPreview } from './QuickTodayPreview';
import { SubjectCard } from './SubjectCard';
import { AddSubjectModal } from '@/components/subjects/AddSubjectModal';

export function OverviewView() {
  const { data, setSelectedSubjectId, setActiveTab } = useStudy();
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Top Header & Greeting */}
      <Header />

      {/* Hero Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OverallProgressCard />
        </div>
        <div className="lg:col-span-1">
          <QuickTodayPreview />
        </div>
      </div>

      {/* Subjects Section */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-[#20211F] dark:text-[#EAECE7]">
              Current Subjects
            </h3>
            <p className="text-xs text-[#858780] dark:text-[#8E928A]">
              Click any course to open its modular unit syllabus.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('subjects')}
              className="text-xs text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] font-medium mr-2 hidden sm:inline-block"
            >
              View all ({data.subjects.length})
            </button>
            <button
              onClick={() => setIsAddSubjectOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Subject</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.subjects.map(subject => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onClick={() => {
                setSelectedSubjectId(subject.id);
                setActiveTab('subjects');
              }}
            />
          ))}
        </div>
      </div>

      <AddSubjectModal
        isOpen={isAddSubjectOpen}
        onClose={() => setIsAddSubjectOpen(false)}
        onSubmit={(name, code, icon) => {
          // addSubject handled in context
          data.subjects.push({
            id: `subj-${Date.now()}`,
            name,
            code,
            icon: icon || 'book-open',
            units: []
          });
        }}
      />
    </div>
  );
}

