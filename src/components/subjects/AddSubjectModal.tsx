'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { BookOpen, Gauge, Cpu, Layers, Binary, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AddSubjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, code?: string, icon?: string) => void;
}

const ICONS = [
  { id: 'gauge', label: 'Gauge', icon: Gauge },
  { id: 'cpu', label: 'Circuit', icon: Cpu },
  { id: 'book-open', label: 'Book', icon: BookOpen },
  { id: 'layers', label: 'Layers', icon: Layers },
  { id: 'binary', label: 'Digital', icon: Binary },
  { id: 'activity', label: 'Waves', icon: Activity }
];

export function AddSubjectModal({
  isOpen,
  onClose,
  onSubmit
}: AddSubjectModalProps) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('book-open');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Subject name is required');
      return;
    }
    onSubmit(name.trim(), code.trim() || undefined, selectedIcon);
    setName('');
    setCode('');
    setSelectedIcon('book-open');
    setError('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Subject"
      description="Add an academic subject or course to track."
      maxWidth="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#20211F] dark:text-[#EAECE7] mb-1.5">
            Subject Name
          </label>
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
              if (error) setError('');
            }}
            placeholder="e.g. Linear Control Systems"
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] placeholder:text-[#858780] focus:outline-none focus:border-[#64866D] dark:focus:border-[#7B9F84]"
            autoFocus
          />
          {error && <p className="text-[11px] text-[#C85A48] mt-1">{error}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-[#20211F] dark:text-[#EAECE7] mb-1.5">
            Course / Subject Code (optional)
          </label>
          <input
            type="text"
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="e.g. EC-34001"
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] placeholder:text-[#858780] focus:outline-none focus:border-[#64866D] dark:focus:border-[#7B9F84]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#20211F] dark:text-[#EAECE7] mb-1.5">
            Subject Icon
          </label>
          <div className="grid grid-cols-6 gap-2">
            {ICONS.map(item => {
              const Icon = item.icon;
              const isSelected = selectedIcon === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setSelectedIcon(item.id)}
                  className={cn(
                    "flex flex-col items-center justify-center p-2 rounded-lg border transition-colors",
                    isSelected
                      ? "border-[#64866D] dark:border-[#7B9F84] bg-[#EBF1ED] dark:bg-[#1C271F] text-[#42614B] dark:text-[#8EAF96]"
                      : "border-[#E8E9E4] dark:border-[#292C27] text-[#858780] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E]"
                  )}
                  title={item.label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#F0F1EC] dark:border-[#252824]">
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#858780] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-1.5 rounded-lg text-xs font-medium bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors"
          >
            Create Subject
          </button>
        </div>
      </form>
    </Modal>
  );
}

