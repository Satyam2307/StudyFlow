'use client';

import React, { useState } from 'react';
import {
  Menu,
  X,
  Sparkles,
  LayoutDashboard,
  BookOpen,
  Target,
  BarChart3,
  Settings,
  Sun,
  Moon
} from 'lucide-react';
import { useStudy } from '@/context/StudyContext';
import { useTheme } from '@/context/ThemeContext';
import { ActiveTab } from '@/types/study';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, activeTab, setActiveTab, setSelectedSubjectId } = useStudy();
  const { toggleTheme, resolvedTheme } = useTheme();

  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab !== 'subjects') setSelectedSubjectId(null);
    setIsOpen(false);
  };

  const navItems: { id: ActiveTab; label: string; icon: React.ElementType }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'subjects', label: 'My Subjects', icon: BookOpen },
    { id: 'today', label: "Today's Focus", icon: Target },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <header className="md:hidden sticky top-0 z-40 w-full bg-[#FDFDFB]/90 dark:bg-[#181A17]/90 backdrop-blur-md border-b border-[#E8E9E4] dark:border-[#292C27] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-[#64866D] dark:bg-[#7B9F84] flex items-center justify-center text-white">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <span className="text-sm font-semibold text-[#20211F] dark:text-[#EAECE7]">
          StudyFlow
        </span>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={toggleTheme}
          className="p-1.5 text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] rounded-md transition-colors"
          aria-label="Toggle theme"
        >
          {resolvedTheme === 'dark' ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] rounded-md transition-colors"
          aria-label="Open menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Slide-out mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[49px] z-50 bg-black/40 backdrop-blur-xs flex flex-col justify-start">
          <div className="w-full bg-[#FDFDFB] dark:bg-[#181A17] border-b border-[#E8E9E4] dark:border-[#292C27] p-4 shadow-xl space-y-2 animate-in slide-in-from-top-2 duration-150">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors text-left",
                    isActive
                      ? "bg-[#EBF1ED] text-[#42614B] dark:bg-[#1F2B22] dark:text-[#8EAF96]"
                      : "text-[#62655F] dark:text-[#8E928A] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E]"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

