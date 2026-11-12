'use client';

import React, { useMemo } from 'react';
import {
  BarChart3,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Clock,
  Flame,
  Award
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { useStudy } from '@/context/StudyContext';
import { useTheme } from '@/context/ThemeContext';
import { getOverallStats, getSubjectStats, formatISODateKey } from '@/lib/utils';
import { ProgressBar } from '@/components/ui/ProgressBar';

export function AnalyticsView() {
  const { data } = useStudy();
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';
  const overallStats = getOverallStats(data.subjects);

  // Calculate past 7 days activity from actual activityLogs
  const weeklyData = useMemo(() => {
    const days: { day: string; date: string; count: number }[] = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const key = formatISODateKey(d);
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      const log = data.activityLogs[key];
      days.push({
        day: dayName,
        date: key,
        count: log ? log.count : 0
      });
    }
    return days;
  }, [data.activityLogs]);

  // Subject comparison data
  const subjectBreakdown = useMemo(() => {
    return data.subjects.map(s => {
      const st = getSubjectStats(s);
      return {
        name: s.name.length > 18 ? s.name.substring(0, 18) + '...' : s.name,
        fullName: s.name,
        completed: st.completed,
        total: st.total,
        percentage: st.percentage
      };
    });
  }, [data.subjects]);

  const totalCompletedThisWeek = weeklyData.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      {/* Analytics Hero Card */}
      <div className="bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#64866D] dark:text-[#7B9F84]">
              Performance & Cadence
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-[#20211F] dark:text-[#EAECE7] mt-1">
              Study Analytics
            </h2>
            <p className="text-xs text-[#858780] dark:text-[#8E928A] mt-1">
              Clear visibility into your preparation speed and topic coverage.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-[#FAFBF9] dark:bg-[#151714] border border-[#E8E9E4] dark:border-[#292C27] text-center min-w-24">
              <span className="text-xl font-bold text-[#20211F] dark:text-[#EAECE7]">
                {totalCompletedThisWeek}
              </span>
              <p className="text-[10px] text-[#858780] dark:text-[#8E928A] mt-0.5">
                Completed this week
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAFBF9] dark:bg-[#151714] border border-[#E8E9E4] dark:border-[#292C27] text-center min-w-24">
              <span className="text-xl font-bold text-[#64866D] dark:text-[#7B9F84]">
                {overallStats.percentage}%
              </span>
              <p className="text-[10px] text-[#858780] dark:text-[#8E928A] mt-0.5">
                Total Syllabus
              </p>
            </div>
          </div>
        </div>

        {/* 4 Quick Stat Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 mt-5 border-t border-[#F0F1EC] dark:border-[#252824]">
          <div className="p-3 rounded-lg bg-[#FAFBF9] dark:bg-[#151714]">
            <p className="text-[11px] text-[#858780] dark:text-[#8E928A]">
              Total Topics
            </p>
            <p className="text-lg font-semibold text-[#20211F] dark:text-[#EAECE7] mt-0.5">
              {overallStats.totalTopics}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-[#FAFBF9] dark:bg-[#151714]">
            <p className="text-[11px] text-[#858780] dark:text-[#8E928A]">
              Topics Mastered
            </p>
            <p className="text-lg font-semibold text-[#64866D] dark:text-[#7B9F84] mt-0.5">
              {overallStats.completedTopics}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-[#FAFBF9] dark:bg-[#151714]">
            <p className="text-[11px] text-[#858780] dark:text-[#8E928A]">
              Topics Remaining
            </p>
            <p className="text-lg font-semibold text-[#20211F] dark:text-[#EAECE7] mt-0.5">
              {overallStats.totalTopics - overallStats.completedTopics}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-[#FAFBF9] dark:bg-[#151714]">
            <p className="text-[11px] text-[#858780] dark:text-[#8E928A]">
              High Priority Done
            </p>
            <p className="text-lg font-semibold text-[#C2843A] dark:text-[#DDA256] mt-0.5">
              {overallStats.highPriorityCompleted} / {overallStats.highPriorityTotal}
            </p>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity Chart */}
        <div className="bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-[#20211F] dark:text-[#EAECE7]">
                Daily Activity (Past 7 Days)
              </h3>
              <p className="text-[11px] text-[#858780] dark:text-[#8E928A]">
                Topics verified completed per calendar date.
              </p>
            </div>
            <Calendar className="w-4 h-4 text-[#858780]" />
          </div>

          <div className="h-56 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: isDark ? '#8E928A' : '#858780', fontSize: 11 }}
                />
                <YAxis
                  allowDecimals={false}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: isDark ? '#8E928A' : '#858780', fontSize: 11 }}
                />
                <Tooltip
                  cursor={{ fill: isDark ? '#232621' : '#F3F4F0' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const d = payload[0].payload;
                      return (
                        <div className="px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-[#181A17] border border-[#E8E9E4] dark:border-[#292C27] shadow-md">
                          <p className="font-semibold text-[#20211F] dark:text-[#EAECE7]">{d.day} ({d.date})</p>
                          <p className="text-[#64866D] dark:text-[#7B9F84] font-medium">{d.count} topics completed</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {weeklyData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.count > 0 ? (isDark ? '#7B9F84' : '#64866D') : (isDark ? '#262923' : '#E8E9E4')}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject-Wise Completion Progress */}
        <div className="bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-[#20211F] dark:text-[#EAECE7]">
                Subject Breakdown
              </h3>
              <p className="text-[11px] text-[#858780] dark:text-[#8E928A]">
                Completion percentage comparison across courses.
              </p>
            </div>
            <TrendingUp className="w-4 h-4 text-[#858780]" />
          </div>

          <div className="space-y-4 pt-1">
            {subjectBreakdown.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#20211F] dark:text-[#EAECE7] truncate">
                    {item.fullName}
                  </span>
                  <span className="font-semibold text-[#20211F] dark:text-[#EAECE7] ml-2 shrink-0">
                    {item.completed} / {item.total} ({item.percentage}%)
                  </span>
                </div>
                <ProgressBar value={item.percentage} size="sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

