'use client';

import React from 'react';
import { Modal } from './Modal';
import { cn } from '@/lib/utils';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'default';
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'default'
}: ConfirmDialogProps) {
  const isDanger = variant === 'danger';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
      maxWidth="sm"
    >
      <div className="flex items-center justify-end gap-2.5 mt-5">
        <button
          type="button"
          onClick={onClose}
          className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#858780] dark:text-[#8E928A] hover:bg-[#F3F3EF] dark:hover:bg-[#252824] transition-colors"
        >
          {cancelText}
        </button>
        <button
          type="button"
          onClick={() => {
            onConfirm();
            onClose();
          }}
          className={cn(
            "px-4 py-1.5 rounded-lg text-xs font-medium text-white transition-colors",
            isDanger
              ? "bg-[#C85A48] hover:bg-[#B34C3C] dark:bg-[#E0705F] dark:hover:bg-[#CB5D4C]"
              : "bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71]"
          )}
        >
          {confirmText}
        </button>
      </div>
    </Modal>
  );
}

