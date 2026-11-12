import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number; // 0 to 100
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function ProgressBar({
  value,
  className,
  size = 'md',
  showLabel = false
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, Math.round(value)));

  const heightClass = {
    sm: 'h-1',
    md: 'h-1.5',
    lg: 'h-2.5'
  }[size];

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs mb-1.5 text-[#858780] dark:text-[#8E928A]">
          <span>Progress</span>
          <span className="font-medium text-[#20211F] dark:text-[#EAECE7]">{clamped}%</span>
        </div>
      )}
      <div
        className={cn(
          "w-full bg-[#E8E9E4] dark:bg-[#2A2D27] rounded-full overflow-hidden relative",
          heightClass
        )}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={cn(
            "h-full rounded-full transition-transform duration-500 ease-out origin-left",
            clamped === 100
              ? "bg-[#64866D] dark:bg-[#7B9F84]"
              : "bg-[#64866D] dark:bg-[#7B9F84]"
          )}
          style={{
            transform: `scaleX(${clamped / 100})`
          }}
        />
      </div>
    </div>
  );
}

