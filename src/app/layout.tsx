import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/context/ToastContext';
import { StudyProvider } from '@/context/StudyContext';
import { FOMProvider } from '@/context/FOMContext';
import { CASProvider } from '@/context/CASContext';

export const metadata: Metadata = {
  title: 'StudyFlow — Personal Study Tracker',
  description: 'Your personal learning space. Minimal, aesthetic syllabus and exam preparation tracker.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('studyflow_theme');
                const isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <ToastProvider>
            <StudyProvider>
              <FOMProvider>
                <CASProvider>
                  {children}
                </CASProvider>
              </FOMProvider>
            </StudyProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
