'use client';

import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/ui/Modal';

interface AddUnitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
  initialName?: string;
  isRenaming?: boolean;
}

export function AddUnitModal({
  isOpen,
  onClose,
  onSubmit,
  initialName = '',
  isRenaming = false
}: AddUnitModalProps) {
  const [name, setName] = useState(initialName);
  const [error, setError] = useState('');

  useEffect(() => {
    setName(initialName);
    setError('');
  }, [initialName, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Unit name cannot be empty');
      return;
    }
    onSubmit(name.trim());
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isRenaming ? 'Rename Unit' : 'Add New Unit'}
      description="Organize your syllabus into focused study modules."
      maxWidth="sm"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#20211F] dark:text-[#EAECE7] mb-1.5">
            Unit Title
          </label>
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
              if (error) setError('');
            }}
            placeholder="e.g. Unit 6 – Transducers and Sensors"
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] placeholder:text-[#858780] focus:outline-none focus:border-[#64866D] dark:focus:border-[#7B9F84]"
            autoFocus
          />
          {error && <p className="text-[11px] text-[#C85A48] mt-1">{error}</p>}
        </div>

        <div className="flex items-center justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#858780] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-1.5 rounded-lg text-xs font-medium bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors"
          >
            {isRenaming ? 'Save' : 'Add Unit'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

