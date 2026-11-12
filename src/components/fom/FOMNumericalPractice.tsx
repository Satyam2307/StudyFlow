'use client';

import React, { useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Bookmark,
  AlertTriangle,
  Award,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Plus,
  BookOpen,
  Edit3
} from 'lucide-react';
import { useFOM } from '@/context/FOMContext';
import { FOMNumericalProblem } from '@/types/fom';
import { cn } from '@/lib/utils';

export function FOMNumericalPractice() {
  const {
    numericalProblems,
    updateNumericalProblem,
    recordNumericalAttempt
  } = useFOM();

  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');
  const [selectedType, setSelectedType] = useState<string | 'all'>('all');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});

  // Stats calculation
  const total = numericalProblems.length;
  const attempted = numericalProblems.filter(n => n.userSolution || n.isCorrect !== undefined).length;
  const correct = numericalProblems.filter(n => n.isCorrect === true).length;
  const independentSolved = numericalProblems.filter(n => n.isIndependentSolved === true).length;

  const toggleSolution = (id: string) => {
    setExpandedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInputChange = (id: string, text: string) => {
    setUserInputs(prev => ({ ...prev, [id]: text }));
  };

  const handleMarkResult = (problem: FOMNumericalProblem, isCorrect: boolean, isIndependent: boolean) => {
    const inputVal = userInputs[problem.id] ?? problem.userSolution ?? '';
    recordNumericalAttempt(problem.id, inputVal, isCorrect, isIndependent);
  };

  // Filter problems
  const filteredProblems = numericalProblems.filter(n => {
    if (selectedUnit !== 'all' && n.unitId !== selectedUnit) return false;
    if (selectedType !== 'all' && n.problemType !== selectedType) return false;
    return true;
  });

  // Extract unique types for dropdown
  const problemTypes = Array.from(new Set(numericalProblems.map(n => n.problemType)));

  return (
    <div className="space-y-6">
      {/* Top Banner and Numerical Stats */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1D1F1C] border border-[#E8E9E4] dark:border-[#292C27] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-md bg-[#64866D]/15 text-[#64866D] dark:text-[#8EAF96]">
                <Calculator className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#64866D] dark:text-[#8EAF96] font-mono">
                Numerical Practice System
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#20211F] dark:text-[#EAECE7]">
              Step-by-Step Numerical Practice Area
            </h2>
            <p className="text-xs text-[#858780] dark:text-[#8E928A] mt-1 max-w-2xl">
              Solve actual exam problems on limiting errors, CRT deflection, PMMC shunt/multiplier sizing, two-wattmeter calculations, and AC bridge balances. Record your answers and self-grade.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 text-center shrink-0">
            <div className="p-2.5 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
              <span className="text-[10px] text-[#858780] block font-mono">Attempted</span>
              <strong className="text-base font-bold text-[#20211F] dark:text-[#EAECE7]">
                {attempted}/{total}
              </strong>
            </div>

            <div className="p-2.5 rounded-xl bg-[#F0FDF4] dark:bg-[#14281A] border border-[#BBF7D0] dark:border-[#1B4D2B]">
              <span className="text-[10px] text-[#166534] dark:text-[#86EFAC] block font-mono">Correct</span>
              <strong className="text-base font-bold text-[#166534] dark:text-[#86EFAC]">
                {correct}
              </strong>
            </div>

            <div className="p-2.5 rounded-xl bg-[#FAF3E8] dark:bg-[#2B2316] border border-[#F2DFBD] dark:border-[#48371C]">
              <span className="text-[10px] text-[#C2843A] dark:text-[#DDA256] block font-mono">Independent</span>
              <strong className="text-base font-bold text-[#C2843A] dark:text-[#DDA256]">
                {independentSolved}
              </strong>
            </div>
          </div>
        </div>

        {/* Filter Selection Controls */}
        <div className="flex flex-wrap items-center gap-2 mt-5 pt-4 border-t border-[#F0F1EC] dark:border-[#252824]">
          <span className="text-xs font-semibold text-[#858780]">Filter:</span>

          <select
            value={selectedUnit}
            onChange={e => setSelectedUnit(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="text-xs p-1.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#181A16] text-[#20211F] dark:text-[#EAECE7]"
          >
            <option value="all">All Units (1 to 5)</option>
            <option value="1">Unit 1: Limiting Errors</option>
            <option value="2">Unit 2: CRO & CRT</option>
            <option value="3">Unit 3: PMMC Shunts & Multipliers</option>
            <option value="4">Unit 4: Kelvin Bridge & Wattmeters</option>
            <option value="5">Unit 5: Maxwell, Hay & Schering Bridges</option>
          </select>

          <select
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
            className="text-xs p-1.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#181A16] text-[#20211F] dark:text-[#EAECE7]"
          >
            <option value="all">All Problem Categories</option>
            {problemTypes.map(pt => (
              <option key={pt} value={pt}>
                {pt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {filteredProblems.map((prob, idx) => {
          const isExpanded = Boolean(expandedSolutions[prob.id]);
          const currentInput = userInputs[prob.id] ?? prob.userSolution ?? '';

          return (
            <div
              key={prob.id}
              className={cn(
                "p-4 sm:p-5 rounded-xl border bg-white dark:bg-[#1D1F1C] transition-all",
                prob.isCorrect === true
                  ? "border-[#BBF7D0] dark:border-[#1B4D2B]"
                  : prob.isCorrect === false
                  ? "border-[#F4C5BD] dark:border-[#532622]"
                  : "border-[#E8E9E4] dark:border-[#292C27]"
              )}
            >
              {/* Problem Meta Line */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#64866D]/15 text-[#64866D] dark:text-[#8EAF96] font-mono">
                    PROB {idx + 1}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-[#F3F3EF] dark:bg-[#252824] text-[#858780]">
                    Unit {prob.unitId}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#F8F9F7] dark:bg-[#222420] text-[#6F716A] border border-[#ECEEE9] dark:border-[#2D302A]">
                    {prob.problemType}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-[#FAF3E8] text-[#9E6520] dark:bg-[#2B2316] dark:text-[#DDA256]">
                    {prob.marks} Marks
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {prob.isIndependentSolved && (
                    <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-md bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0]">
                      <Award className="w-2.5 h-2.5" /> Solved Independently
                    </span>
                  )}
                  {prob.isCorrect === true && (
                    <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#F0FDF4] text-[#166534]">
                      <CheckCircle2 className="w-3 h-3 text-[#166534]" /> Correct
                    </span>
                  )}
                </div>
              </div>

              {/* Problem Statement */}
              <h3 className="text-sm font-bold text-[#20211F] dark:text-[#EAECE7] mb-1.5">
                {prob.title}
              </h3>
              <p className="text-xs text-[#52544E] dark:text-[#B5B9B0] leading-relaxed mb-3">
                {prob.problemStatement}
              </p>

              {/* Given Data Chips */}
              <div className="mb-3.5 p-2.5 rounded-lg bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822]">
                <span className="text-[10px] font-semibold text-[#858780] block mb-1">
                  Given Parameters:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {prob.givenData.map((g, gIdx) => (
                    <code
                      key={gIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-[#20221E] border border-[#E8E9E4] dark:border-[#2E312B] text-[#20211F] dark:text-[#EAECE7]"
                    >
                      {g}
                    </code>
                  ))}
                </div>
              </div>

              {/* User Solution Recording Workspace */}
              <div className="mb-3 p-3 rounded-xl bg-[#F8F9F7] dark:bg-[#181A16] border border-[#E8E9E4] dark:border-[#292C27] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#20211F] dark:text-[#EAECE7] flex items-center gap-1">
                    <Edit3 className="w-3 h-3 text-[#64866D]" />
                    <span>Your Work & Final Calculated Answer:</span>
                  </span>
                </div>
                <textarea
                  value={currentInput}
                  onChange={e => handleInputChange(prob.id, e.target.value)}
                  placeholder="Record your formula substitution, intermediate numbers, and final value with units here..."
                  rows={2}
                  className="w-full text-xs p-2.5 rounded-lg border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] focus:outline-none focus:border-[#64866D]"
                />

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleMarkResult(prob, true, true)}
                      className="flex items-center gap-1 px-3 py-1 text-[11px] font-semibold rounded-lg bg-[#166534] hover:bg-[#14532D] text-white transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Correct (Independent)</span>
                    </button>
                    <button
                      onClick={() => handleMarkResult(prob, true, false)}
                      className="flex items-center gap-1 px-3 py-1 text-[11px] font-medium rounded-lg bg-[#EBF1ED] text-[#4D6C55] hover:bg-[#D5E2D9] transition-colors"
                    >
                      <span>Correct (With Hint)</span>
                    </button>
                    <button
                      onClick={() => handleMarkResult(prob, false, false)}
                      className="flex items-center gap-1 px-3 py-1 text-[11px] font-medium rounded-lg bg-[#FCEAE7] text-[#B23326] hover:bg-[#F8D5CE] transition-colors"
                    >
                      <XCircle className="w-3 h-3" />
                      <span>Incorrect (Revise)</span>
                    </button>
                  </div>

                  <button
                    onClick={() => toggleSolution(prob.id)}
                    className="flex items-center gap-1 text-xs font-semibold text-[#64866D] dark:text-[#8EAF96] hover:underline"
                  >
                    <span>{isExpanded ? 'Hide Solution' : 'View Step-by-Step Solution'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Expandable Step-by-Step Solution Section */}
              {isExpanded && (
                <div className="p-4 rounded-xl bg-[#FAFBF9] dark:bg-[#151714] border border-[#E0E2DC] dark:border-[#2A2D27] space-y-2.5 animate-in fade-in duration-100">
                  <span className="text-xs font-bold text-[#64866D] dark:text-[#8EAF96] block">
                    Verified Step-by-Step Solution:
                  </span>

                  <div className="text-xs space-y-1.5 font-mono">
                    <div className="p-2 rounded bg-white dark:bg-[#1E201C] border border-[#E8E9E4] dark:border-[#292C27] text-[#20211F] dark:text-[#EAECE7]">
                      <span className="text-[10px] text-[#858780] block font-sans font-semibold">Formula:</span>
                      {prob.formula}
                    </div>

                    {prob.stepByStepSolution.map((step, sIdx) => (
                      <div key={sIdx} className="text-[#333530] dark:text-[#C5C8C0] pl-1">
                        {step}
                      </div>
                    ))}

                    <div className="p-2 rounded bg-[#F0FDF4] dark:bg-[#14281A] border border-[#BBF7D0] dark:border-[#1B4D2B] text-xs font-bold text-[#166534] dark:text-[#86EFAC] mt-2">
                      Final Verified Answer: {prob.finalAnswer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
