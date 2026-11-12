import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 border border-dashed border-[#E8E9E4] dark:border-[#292C27] rounded-xl bg-[#FAFBF9]/50 dark:bg-[#181A17]/30",
        className
      )}
    >
      <div className="w-10 h-10 rounded-full bg-[#EBF1ED] dark:bg-[#1C271F] flex items-center justify-center text-[#64866D] dark:text-[#7B9F84] mb-3">
        <Icon className="w-5 h-5 stroke-[1.75]" />
      </div>
      <h4 className="text-sm font-medium text-[#20211F] dark:text-[#EAECE7]">
        {title}
      </h4>
      <p className="text-xs text-[#858780] dark:text-[#8E928A] max-w-xs mt-1 mb-4">
        {description}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#64866D] hover:bg-[#54735C] dark:bg-[#7B9F84] dark:hover:bg-[#688E71] text-white transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

