'use client';

import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Topic, Priority } from '@/types/study';
import { priorityConfig, cn } from '@/lib/utils';

interface AddEditTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (topicData: { name: string; priority: Priority; estimatedTime?: string }) => void;
  initialTopic?: Topic | null;
  unitName?: string;
}

export function AddEditTopicModal({
  isOpen,
  onClose,
  onSubmit,
  initialTopic,
  unitName
}: AddEditTopicModalProps) {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialTopic) {
      setName(initialTopic.name);
      setPriority(initialTopic.priority);
      setEstimatedTime(initialTopic.estimatedTime || '');
    } else {
      setName('');
      setPriority('medium');
      setEstimatedTime('45 min');
    }
    setError('');
  }, [initialTopic, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Topic name cannot be empty');
      return;
    }
    onSubmit({
      name: name.trim(),
      priority,
      estimatedTime: estimatedTime.trim() || undefined
    });
    onClose();
  };

  const isEditing = !!initialTopic;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? 'Edit Topic' : 'Add New Topic'}
      description={unitName ? `For ${unitName}` : undefined}
      maxWidth="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Topic Name */}
        <div>
          <label className="block text-xs font-medium text-[#20211F] dark:text-[#EAECE7] mb-1.5">
            Topic Name
          </label>
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
              if (error) setError('');
            }}
            placeholder="e.g. Lissajous patterns and frequency measurement"
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] placeholder:text-[#858780] focus:outline-none focus:border-[#64866D] dark:focus:border-[#7B9F84] transition-colors"
            autoFocus
          />
          {error && <p className="text-[11px] text-[#C85A48] mt-1">{error}</p>}
        </div>

        {/* Priority Selector */}
        <div>
          <label className="block text-xs font-medium text-[#20211F] dark:text-[#EAECE7] mb-1.5">
            Exam Priority
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {(['very_high', 'high', 'moderate', 'low'] as Priority[]).map(p => {
              const cfg = priorityConfig[p];
              const isSelected = priority === p;
              return (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPriority(p)}
                  className={cn(
                    "flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium border transition-colors",
                    isSelected
                      ? cn(cfg.bgClass, cfg.textClass, "border-current font-semibold")
                      : "border-[#E8E9E4] dark:border-[#292C27] text-[#858780] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E]"
                  )}
                >
                  <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", cfg.dotClass)} />
                  <span className="truncate">{cfg.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Estimated Time */}
        <div>
          <label className="block text-xs font-medium text-[#20211F] dark:text-[#EAECE7] mb-1.5">
            Estimated Study Time
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={estimatedTime}
              onChange={e => setEstimatedTime(e.target.value)}
              placeholder="e.g. 45 min, 1.5 hr"
              className="flex-1 px-3 py-2 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#151714] text-[#20211F] dark:text-[#EAECE7] placeholder:text-[#858780] focus:outline-none focus:border-[#64866D] dark:focus:border-[#7B9F84]"
            />
            {['30 min', '45 min', '1 hr'].map(preset => (
              <button
                type="button"
                key={preset}
                onClick={() => setEstimatedTime(preset)}
                className="px-2.5 py-1.5 rounded text-[11px] font-mono border border-[#E8E9E4] dark:border-[#292C27] text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] hover:bg-[#F3F3EF] dark:hover:bg-[#20221E] transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#F0F1EC] dark:border-[#252824]">
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
            {isEditing ? 'Save Changes' : 'Add Topic'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

