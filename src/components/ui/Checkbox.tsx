'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

export function Checkbox({
  checked,
  onChange,
  id,
  className,
  disabled = false,
  'aria-label': ariaLabel
}: CheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      id={id}
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled) onChange(!checked);
      }}
      className={cn(
        "relative w-4 h-4 rounded-[4px] flex items-center justify-center transition-colors duration-150 shrink-0",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64866D] dark:focus-visible:outline-[#7B9F84]",
        checked
          ? "bg-[#64866D] dark:bg-[#7B9F84] border border-[#64866D] dark:border-[#7B9F84] text-white"
          : "border border-[#D0D2CB] dark:border-[#3D423A] bg-transparent hover:border-[#9B9E95] dark:hover:border-[#5A6054]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <Check
        className={cn(
          "w-3 h-3 stroke-[2.5] transition-opacity duration-150",
          checked ? "opacity-100" : "opacity-0"
        )}
      />
    </button>
  );
}

