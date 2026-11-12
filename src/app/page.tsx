'use client';

import React, { useState } from 'react';
import { useStudy } from '@/context/StudyContext';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';
import { OverviewView } from '@/components/dashboard/OverviewView';
import { SubjectsOverview } from '@/components/subjects/SubjectsOverview';
import { SubjectDetail } from '@/components/subjects/SubjectDetail';
import { TodaysFocusView } from '@/components/today/TodaysFocusView';
import { AnalyticsView } from '@/components/analytics/AnalyticsView';
import { SettingsView } from '@/components/settings/SettingsView';
import { AddSubjectModal } from '@/components/subjects/AddSubjectModal';

export default function Home() {
  const {
    data,
    isLoaded,
    activeTab,
    selectedSubjectId,
    setSelectedSubjectId,
    addSubject
  } = useStudy();

  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F8F5] dark:bg-[#141513] text-[#858780]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-[#64866D] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-medium">Opening StudyFlow...</span>
        </div>
      </div>
    );
  }

  // Selected subject object for detail view
  const currentSubject = data.subjects.find(s => s.id === selectedSubjectId);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F8F8F5] dark:bg-[#141513] transition-colors duration-150">
      {/* Mobile Top Navigation */}
      <MobileNav />

      {/* Desktop Sidebar */}
      <Sidebar
        onOpenAddSubject={() => setIsAddSubjectOpen(true)}
        className="hidden md:flex"
      />

      {/* Main Content Workspace */}
      <main className="flex-1 min-w-0 p-4 sm:p-8 lg:p-10 overflow-y-auto">
        <div className="max-w-5xl mx-auto w-full">
          {activeTab === 'overview' && <OverviewView />}

          {activeTab === 'subjects' && (
            currentSubject ? (
              <SubjectDetail
                subject={currentSubject}
                onBack={() => setSelectedSubjectId(null)}
              />
            ) : (
              <SubjectsOverview />
            )
          )}

          {activeTab === 'today' && <TodaysFocusView />}

          {activeTab === 'analytics' && <AnalyticsView />}

          {activeTab === 'settings' && <SettingsView />}
        </div>
      </main>

      {/* Global Add Subject Modal */}
      <AddSubjectModal
        isOpen={isAddSubjectOpen}
        onClose={() => setIsAddSubjectOpen(false)}
        onSubmit={addSubject}
      />
    </div>
  );
}
