'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastType = 'success' | 'info' | 'error';

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const toast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev.slice(-3), { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 2800);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Toast viewport */}
      <div
        className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4 sm:px-0"
        aria-live="polite"
      >
        {toasts.map(t => (
          <div
            key={t.id}
            role="status"
            className={cn(
              "pointer-events-auto flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium shadow-md border backdrop-blur-md transition-all duration-200 animate-in fade-in slide-in-from-bottom-2",
              t.type === 'success' && "bg-[#F3F6F4]/95 dark:bg-[#1C271F]/95 text-[#20211F] dark:text-[#EAECE7] border-[#C9D8CD] dark:border-[#2E4033]",
              t.type === 'error' && "bg-[#FDF0EE]/95 dark:bg-[#2E1C1A]/95 text-[#20211F] dark:text-[#EAECE7] border-[#F1C3BC] dark:border-[#522924]",
              t.type === 'info' && "bg-[#F8F8F5]/95 dark:bg-[#1D1F1C]/95 text-[#20211F] dark:text-[#EAECE7] border-[#E8E9E4] dark:border-[#292C27]"
            )}
          >
            <div className="flex items-center gap-2">
              {t.type === 'success' && (
                <CheckCircle2 className="w-4 h-4 text-[#64866D] dark:text-[#7B9F84] shrink-0" />
              )}
              {t.type === 'error' && (
                <AlertCircle className="w-4 h-4 text-[#C85A48] dark:text-[#E0705F] shrink-0" />
              )}
              {t.type === 'info' && (
                <Info className="w-4 h-4 text-[#858780] dark:text-[#8E928A] shrink-0" />
              )}
              <span className="leading-tight">{t.message}</span>
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7] p-0.5 rounded transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

