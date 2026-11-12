'use client';

import React, { useState, useRef } from 'react';
import {
  Download,
  Upload,
  RotateCcw,
  User,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileJson
} from 'lucide-react';
import { useStudy } from '@/context/StudyContext';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';

export function SettingsView() {
  const { data, updateUserName, exportData, importData, resetProgress } = useStudy();
  const [userName, setUserName] = useState(data.user.name);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserName(userName);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const content = event.target?.result as string;
      if (content) {
        importData(content);
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6 max-w-3xl animate-in fade-in duration-150">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-[#20211F] dark:text-[#EAECE7]">
          Settings & Data Management
        </h2>
        <p className="text-xs text-[#858780] dark:text-[#8E928A] mt-1">
          Customize your workspace, backup your syllabus progress, or restore from a file.
        </p>
      </div>

      {/* User Profile Card */}
      <div className="bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-[#64866D] dark:text-[#7B9F84]" />
          <h3 className="text-sm font-semibold text-[#20211F] dark:text-[#EAECE7]">
            Personal Profile
          </h3>
        </div>

        <form onSubmit={handleSaveName} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-[#20211F] dark:text-[#EAECE7] mb-1">
              Your Name
            </label>
            <div className="flex items-center gap-2 max-w-sm">
              <input
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] focus:outline-none focus:border-[#64866D] dark:focus:border-[#7B9F84]"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors shrink-0"
              >
                Save
              </button>
            </div>
            <p className="text-[11px] text-[#858780] dark:text-[#8E928A] mt-1">
              Used for your dashboard greeting: "Good morning, {data.user.name}."
            </p>
          </div>
        </form>
      </div>

      {/* Backup and Restore */}
      <div className="bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <FileJson className="w-4 h-4 text-[#64866D] dark:text-[#7B9F84]" />
          <h3 className="text-sm font-semibold text-[#20211F] dark:text-[#EAECE7]">
            Data Portability (Export & Import)
          </h3>
        </div>

        <p className="text-xs text-[#858780] dark:text-[#8E928A]">
          StudyFlow runs local-first in your browser storage. You can export your syllabus structure and completion timestamps at any time as JSON, and restore it on any machine.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={exportData}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#EBF1ED] text-[#42614B] dark:bg-[#1F2B22] dark:text-[#8EAF96] hover:bg-[#DFEAE2] dark:hover:bg-[#25382A] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Progress (JSON)</span>
          </button>

          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".json"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E] transition-colors"
            >
              <Upload className="w-3.5 h-3.5 text-[#858780]" />
              <span>Import Backup JSON</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reset Progress Section */}
      <div className="bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl p-5 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-[#C85A48] dark:text-[#E0705F]">
          <AlertTriangle className="w-4 h-4" />
          <h3 className="text-sm font-semibold">
            Reset Study Progress
          </h3>
        </div>

        <p className="text-xs text-[#858780] dark:text-[#8E928A]">
          Clears all topic completion checkboxes and today's task list back to 0% for a fresh revision cycle. Your subjects, units, and topic notes are safely preserved.
        </p>

        <button
          onClick={() => setIsResetConfirmOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[#F1C3BC] text-[#C85A48] dark:border-[#522924] dark:text-[#E0705F] hover:bg-[#FDF0EE] dark:hover:bg-[#2E1C1A] transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Progress</span>
        </button>
      </div>

      {/* Local Storage Status */}
      <div className="p-4 rounded-xl bg-[#FAFBF9] dark:bg-[#151714] border border-[#E8E9E4] dark:border-[#292C27] flex items-center justify-between text-xs text-[#858780] dark:text-[#8E928A]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#64866D] dark:text-[#7B9F84]" />
          <span>Local-first architecture · 100% private to your browser</span>
        </div>
        <span className="font-mono text-[11px]">v1.0.0</span>
      </div>

      {/* Reset Confirmation Dialog */}
      <ConfirmDialog
        isOpen={isResetConfirmOpen}
        onClose={() => setIsResetConfirmOpen(false)}
        onConfirm={resetProgress}
        title="Reset All Progress?"
        description="This will uncheck all topics in your subjects and clear Today's Focus. Your syllabus structure and units will not be deleted."
        confirmText="Reset Progress"
        variant="danger"
      />
    </div>
  );
}

