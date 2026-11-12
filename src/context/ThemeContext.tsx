'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { THEME_STORAGE_KEY } from '@/lib/constants';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (stored && ['light', 'dark', 'system'].includes(stored)) {
        setThemeState(stored);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setThemeState(prefersDark ? 'dark' : 'light');
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    let effective: 'light' | 'dark' = 'light';

    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      effective = isDark ? 'dark' : 'light';
    } else {
      effective = theme;
    }

    setResolvedTheme(effective);

    if (effective === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // storage unavailable
    }
  }, [theme, mounted]);

  // Listener for system preference changes when in 'system' mode
  useEffect(() => {
    if (!mounted || theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const effective = e.matches ? 'dark' : 'light';
      setResolvedTheme(effective);
      if (effective === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, mounted]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  const toggleTheme = () => {
    setThemeState(prev => {
      const next = resolvedTheme === 'dark' ? 'light' : 'dark';
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
