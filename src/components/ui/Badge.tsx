import React from 'react';
import { Priority } from '@/types/study';
import { priorityConfig, cn } from '@/lib/utils';

interface PriorityBadgeProps {
  priority: Priority;
  showText?: boolean;
  className?: string;
}

export function PriorityBadge({
  priority,
  showText = true,
  className
}: PriorityBadgeProps) {
  const config = priorityConfig[priority];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[11px] font-medium leading-none px-2 py-0.5 rounded-full transition-colors",
        config.bgClass,
        config.textClass,
        className
      )}
      title={`${config.label} Priority`}
    >
      <span
        className={cn("w-1.5 h-1.5 rounded-full shrink-0", config.dotClass)}
        aria-hidden="true"
      />
      {showText && <span>{config.label}</span>}
    </span>
  );
}

export function PriorityDot({ priority, className }: { priority: Priority; className?: string }) {
  const config = priorityConfig[priority];
  return (
    <span
      className={cn(
        "inline-block w-2 h-2 rounded-full shrink-0",
        config.dotClass,
        className
      )}
      title={`${config.label} Priority`}
      aria-label={`${config.label} Priority`}
    />
  );
}

