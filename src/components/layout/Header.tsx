'use client';

import React from 'react';
import { Settings, Sun, Moon, Sparkles } from 'lucide-react';
import { useStudy } from '@/context/StudyContext';
import { useTheme } from '@/context/ThemeContext';
import { formatDate, getGreeting } from '@/lib/utils';

export function Header() {
  const { data, setActiveTab, setSelectedSubjectId } = useStudy();
  const { toggleTheme, resolvedTheme } = useTheme();

  const greeting = getGreeting(data.user.name);
  const dateFormatted = formatDate(new Date());

  const handleOpenSettings = () => {
    setActiveTab('settings');
    setSelectedSubjectId(null);
  };

  return (
    <div className="mb-8">
      {/* Top Metadata Row */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E9E4] dark:border-[#292C27]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#858780] dark:text-[#8E928A]">
            {dateFormatted}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#D0D2CB] dark:bg-[#3D423A]" />
          <span className="text-xs text-[#858780] dark:text-[#8E928A]">
            Semester Prep
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E] transition-colors"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={handleOpenSettings}
            className="p-1.5 rounded-lg text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E] transition-colors"
            title="Open settings"
            aria-label="Open settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Welcome Greeting */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#20211F] dark:text-[#EAECE7]">
            {greeting}
          </h2>
          <p className="text-sm text-[#858780] dark:text-[#8E928A] mt-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#64866D] dark:text-[#7B9F84]" />
            Small progress every day adds up.
          </p>
        </div>
      </div>
    </div>
  );
}

