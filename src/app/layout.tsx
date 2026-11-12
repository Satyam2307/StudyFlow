import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/context/ToastContext';
import { StudyProvider } from '@/context/StudyContext';

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
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <ToastProvider>
            <StudyProvider>
              {children}
            </StudyProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
