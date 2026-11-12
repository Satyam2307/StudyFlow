'use client';

import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Target,
  BarChart3,
  Settings,
  Sparkles,
  Sun,
  Moon,
  Laptop,
  CheckCircle2,
  Plus
} from 'lucide-react';
import { useStudy } from '@/context/StudyContext';
import { useTheme } from '@/context/ThemeContext';
import { ActiveTab } from '@/types/study';
import { cn, getOverallStats } from '@/lib/utils';
import { ProgressBar } from '@/components/ui/ProgressBar';

interface SidebarProps {
  onOpenAddSubject?: () => void;
  className?: string;
}

export function Sidebar({ onOpenAddSubject, className }: SidebarProps) {
  const { data, activeTab, setActiveTab, selectedSubjectId, setSelectedSubjectId } = useStudy();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const stats = getOverallStats(data.subjects);
  const todayRemaining = data.todayTasks.filter(t => !t.completed).length;

  const navItems: { id: ActiveTab; label: string; icon: React.ElementType; badge?: number }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'subjects', label: 'My Subjects', icon: BookOpen, badge: data.subjects.length },
    { id: 'today', label: "Today's Focus", icon: Target, badge: todayRemaining > 0 ? todayRemaining : undefined },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    if (tabId !== 'subjects') {
      setSelectedSubjectId(null);
    }
  };

  const handleSubjectClick = (subjId: string) => {
    setSelectedSubjectId(subjId);
    setActiveTab('subjects');
  };

  return (
    <aside
      className={cn(
        "w-64 h-screen sticky top-0 flex flex-col justify-between border-r border-[#E8E9E4] dark:border-[#292C27] bg-[#FDFDFB] dark:bg-[#181A17] p-4 select-none shrink-0",
        className
      )}
    >
      {/* Top Branding */}
      <div className="space-y-6">
        <div className="px-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#64866D] dark:bg-[#7B9F84] flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-tight text-[#20211F] dark:text-[#EAECE7]">
                StudyFlow
              </h1>
              <p className="text-[11px] text-[#858780] dark:text-[#8E928A]">
                Your personal learning space
              </p>
            </div>
          </div>
        </div>

        {/* Main Nav Items */}
        <nav className="space-y-1" aria-label="Main Navigation">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id && (item.id !== 'subjects' || selectedSubjectId === null);

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-150 text-left",
                  isActive
                    ? "bg-[#EBF1ED] text-[#42614B] dark:bg-[#1F2B22] dark:text-[#8EAF96] font-semibold"
                    : "text-[#62655F] dark:text-[#8E928A] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 stroke-[1.8] shrink-0" />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span
                    className={cn(
                      "px-1.5 py-0.2 rounded-full text-[10px] font-semibold",
                      isActive
                        ? "bg-[#64866D]/15 text-[#42614B] dark:text-[#8EAF96]"
                        : "bg-[#E8E9E4] dark:bg-[#292C27] text-[#858780] dark:text-[#8E928A]"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Subjects List in Sidebar */}
        <div className="pt-2">
          <div className="flex items-center justify-between px-3 mb-1.5">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#858780] dark:text-[#8E928A]">
              Subjects
            </span>
            {onOpenAddSubject && (
              <button
                onClick={onOpenAddSubject}
                className="text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] p-0.5 rounded transition-colors"
                title="Add new subject"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="space-y-0.5 max-h-48 overflow-y-auto pr-1">
            {data.subjects.map(s => {
              const isSubjActive = activeTab === 'subjects' && selectedSubjectId === s.id;
              const completedCount = s.units.reduce(
                (acc, u) => acc + u.topics.filter(t => t.completed).length,
                0
              );
              const totalCount = s.units.reduce((acc, u) => acc + u.topics.length, 0);

              return (
                <button
                  key={s.id}
                  onClick={() => handleSubjectClick(s.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-colors duration-150 text-left group",
                    isSubjActive
                      ? "bg-[#EBF1ED] text-[#42614B] dark:bg-[#1F2B22] dark:text-[#8EAF96] font-medium"
                      : "text-[#62655F] dark:text-[#8E928A] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
                  )}
                >
                  <span className="truncate pr-2">{s.name}</span>
                  <span className="text-[10px] text-[#858780] dark:text-[#8E928A] font-mono shrink-0">
                    {completedCount}/{totalCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Profile & Progress Section */}
      <div className="space-y-4 pt-4 border-t border-[#E8E9E4] dark:border-[#292C27]">
        {/* Quick Overall Progress */}
        <div className="px-2">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[#858780] dark:text-[#8E928A]">Syllabus</span>
            <span className="font-semibold text-[#20211F] dark:text-[#EAECE7]">
              {stats.percentage}%
            </span>
          </div>
          <ProgressBar value={stats.percentage} size="sm" />
          <div className="flex items-center justify-between text-[11px] text-[#858780] dark:text-[#8E928A] mt-1.5">
            <span>{stats.completedTopics} of {stats.totalTopics} done</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#64866D] dark:text-[#7B9F84]" />
              Active
            </span>
          </div>
        </div>

        {/* User Card & Theme Switcher */}
        <div className="flex items-center justify-between px-2 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#E8E9E4] dark:bg-[#2A2D27] flex items-center justify-center text-xs font-semibold text-[#20211F] dark:text-[#EAECE7]">
              {data.user.name.charAt(0)}
            </div>
            <div className="leading-tight">
              <p className="text-xs font-medium text-[#20211F] dark:text-[#EAECE7]">
                {data.user.name}
              </p>
              <p className="text-[10px] text-[#858780] dark:text-[#8E928A]">
                Personal Space
              </p>
            </div>
          </div>

          {/* Theme toggles */}
          <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#E8E9E4]/60 dark:bg-[#292C27]">
            <button
              onClick={() => setTheme('light')}
              className={cn(
                "p-1 rounded-md transition-colors",
                theme === 'light'
                  ? "bg-white text-[#20211F] shadow-xs"
                  : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
              )}
              title="Light mode"
              aria-label="Light mode"
            >
              <Sun className="w-3 h-3" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={cn(
                "p-1 rounded-md transition-colors",
                theme === 'dark'
                  ? "bg-[#1D1F1C] text-[#EAECE7] shadow-xs"
                  : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
              )}
              title="Dark mode"
              aria-label="Dark mode"
            >
              <Moon className="w-3 h-3" />
            </button>
            <button
              onClick={() => setTheme('system')}
              className={cn(
                "p-1 rounded-md transition-colors",
                theme === 'system'
                  ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-xs"
                  : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
              )}
              title="System theme"
              aria-label="System theme"
            >
              <Laptop className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

