'use client';

import React, { useState } from 'react';
import { BookOpen, Search, Filter, ChevronRight, Award, Flame, ExternalLink } from 'lucide-react';
import { useFOM } from '@/context/FOMContext';
import { cn } from '@/lib/utils';
import { FOMQuestion } from '@/types/fom';

export function FOMAnswerLibrary() {
  const { questions, openAnswer } = useFOM();

  const [unitFilter, setUnitFilter] = useState<number | 'all'>('all');
  const [markFilter, setMarkFilter] = useState<number | 'all'>('all');
  const [search, setSearch] = useState('');

  const filtered = questions.filter(q => {
    if (unitFilter !== 'all' && q.unitId !== unitFilter) return false;
    if (markFilter !== 'all' && q.marks !== markFilter) return false;
    if (search.trim()) {
      const query = search.toLowerCase();
      const matchTitle = q.title.toLowerCase().includes(query);
      const matchText = q.questionText.toLowerCase().includes(query);
      if (!matchTitle && !matchText) return false;
    }
    return true;
  });

  return (
    <div className="space-y-5">
      {/* Search & Filter Header */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#64866D] dark:text-[#8EAF96] uppercase font-mono mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Comprehensive Answer Library</span>
          </div>
          <h2 className="text-lg font-bold text-[#20211F] dark:text-[#EAECE7]">
            Full Solutions for All 105 FOM Questions
          </h2>
          <p className="text-xs text-[#858780] dark:text-[#8E928A] mt-0.5">
            Every question features three tailored study modes: Quick Revision, University Exam Answer, and Detailed Conceptual Learning.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 border-t border-[#F0F1EC] dark:border-[#252824]">
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#858780]" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by topic, formula, or question keywords..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#181A16] text-[#20211F] dark:text-[#EAECE7] focus:outline-none focus:border-[#64866D]"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={unitFilter}
              onChange={e => setUnitFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="text-xs p-1.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#181A16] text-[#20211F] dark:text-[#EAECE7]"
            >
              <option value="all">All Units (1 to 5)</option>
              <option value="1">Unit 1: Fundamentals</option>
              <option value="2">Unit 2: CRO/CRT</option>
              <option value="3">Unit 3: Analog Instruments</option>
              <option value="4">Unit 4: Power & Resistance</option>
              <option value="5">Unit 5: AC Bridges</option>
            </select>

            <select
              value={markFilter}
              onChange={e => setMarkFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="text-xs p-1.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#181A16] text-[#20211F] dark:text-[#EAECE7]"
            >
              <option value="all">All Marks</option>
              <option value="7">7-Mark Core</option>
              <option value="3">3-Mark Short</option>
              <option value="2">2-Mark Definitions</option>
            </select>
          </div>
        </div>
      </div>

      {/* Answer Library Index List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map(q => (
          <div
            key={q.id}
            className="p-4 rounded-xl bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] hover:border-[#64866D] dark:hover:border-[#7B9F84] transition-all flex flex-col justify-between group shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-[#64866D]/15 text-[#64866D] dark:text-[#8EAF96]">
                    {q.marks} MARKS
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-[#F3F3EF] dark:bg-[#252824] text-[#858780]">
                    Unit {q.unitId}
                  </span>
                  <span className="capitalize px-1.5 py-0.5 text-[9px] rounded bg-[#FAFBF9] dark:bg-[#20221E] text-[#858780] border border-[#ECEEE9] dark:border-[#2C2E28]">
                    {q.type}
                  </span>
                </div>
                {q.isRecurring && (
                  <span className="text-[10px] text-[#C8483B] font-semibold flex items-center gap-0.5">
                    <Flame className="w-3 h-3 fill-current" /> Recurring
                  </span>
                )}
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-[#20211F] dark:text-[#EAECE7] mb-1 group-hover:text-[#64866D] dark:group-hover:text-[#8EAF96] transition-colors">
                {q.title}
              </h3>
              <p className="text-[11px] text-[#6F716A] dark:text-[#9EA299] line-clamp-2 leading-relaxed">
                {q.questionText}
              </p>
            </div>

            {/* Quick 3-mode action triggers */}
            <div className="flex items-center justify-between gap-1 mt-4 pt-3 border-t border-[#F0F1EC] dark:border-[#252824] text-[11px]">
              <button
                onClick={() => openAnswer(q, 'quickRevision')}
                className="text-[#858780] hover:text-[#64866D] dark:hover:text-[#8EAF96] font-medium"
              >
                ⚡ Quick
              </button>
              <button
                onClick={() => openAnswer(q, 'detailedLearning')}
                className="text-[#858780] hover:text-[#64866D] dark:hover:text-[#8EAF96] font-medium"
              >
                🔍 Deep Dive
              </button>
              <button
                onClick={() => openAnswer(q, 'examAnswer')}
                className="flex items-center gap-1 font-semibold text-[#64866D] dark:text-[#8EAF96] hover:underline"
              >
                <span>Read Full Answer</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
