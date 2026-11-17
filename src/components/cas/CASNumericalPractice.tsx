'use client';

import React, { useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  HelpCircle,
  Eye,
  EyeOff,
  Sparkles,
  Award,
  Layers,
  ChevronDown,
  ChevronUp,
  Bookmark,
  AlertTriangle
} from 'lucide-react';
import { useCAS } from '@/context/CASContext';
import { CASNumericalProblem } from '@/types/cas';
import { cn } from '@/lib/utils';
import { ProgressBar } from '@/components/ui/ProgressBar';

export function CASNumericalPractice() {
  const {
    numericalProblems,
    updateNumericalProblem,
    recordNumericalAttempt,
    getOverallAnalytics
  } = useCAS();

  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});

  const analytics = getOverallAnalytics();

  const filteredProblems = numericalProblems.filter(p => {
    if (selectedUnit !== 'all' && p.unitId !== selectedUnit) return false;
    return true;
  });

  const toggleSolution = (problemId: string) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [problemId]: !prev[problemId]
    }));
  };

  const handleInputChange = (problemId: string, val: string) => {
    setUserInputs(prev => ({ ...prev, [problemId]: val }));
  };

  const handleMarkSolved = (problem: CASNumericalProblem, isIndependent: boolean) => {
    const input = userInputs[problem.id] || problem.userSolution || '';
    recordNumericalAttempt(problem.id, input, true, isIndependent);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Stats */}
      <div className="rounded-2xl border border-[#E8E9E4] dark:border-[#292C27] bg-white dark:bg-[#1D1F1C] p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB] dark:text-[#60A5FA]">
              <Calculator className="w-4 h-4" />
              <span>CIRCUIT ANALYSIS & SYNTHESIS NUMERICAL WORKSPACE</span>
            </div>
            <h2 className="text-xl font-bold text-[#20211F] dark:text-[#EAECE7]">
              Numerical Problem Solver
            </h2>
            <p className="text-xs text-[#52544E] dark:text-[#B5B9B0] max-w-2xl">
              Solve exam numericals covering Supernodes, Thevenin with dependent sources, 3-Phase wattmeter methods, Resonance Q-factor, Two-port matrices, Foster/Cauer ladder synthesis, and Transient responses.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822] shrink-0 text-right">
            <span className="text-[10px] text-[#858780] block">Numericals Solved</span>
            <span className="text-xl font-bold text-[#2563EB] dark:text-[#60A5FA]">
              {analytics.solvedNumericalsCount} / {analytics.totalNumericalsCount}
            </span>
            <span className="text-[10px] text-[#858780] block mt-0.5">
              {Math.round((analytics.solvedNumericalsCount / (analytics.totalNumericalsCount || 1)) * 100)}% Completed
            </span>
          </div>
        </div>

        {/* Unit Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EFEFEA]/80 dark:bg-[#252824] overflow-x-auto">
          <button
            onClick={() => setSelectedUnit('all')}
            className={cn(
              "px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0",
              selectedUnit === 'all'
                ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
            )}
          >
            All Units ({numericalProblems.length})
          </button>
          {[1, 2, 3, 4, 5].map(uNum => (
            <button
              key={uNum}
              onClick={() => setSelectedUnit(uNum)}
              className={cn(
                "px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0",
                selectedUnit === uNum
                  ? "bg-white dark:bg-[#1D1F1C] text-[#20211F] dark:text-[#EAECE7] shadow-2xs font-bold"
                  : "text-[#858780] hover:text-[#20211F] dark:hover:text-[#EAECE7]"
              )}
            >
              Unit {['I', 'II', 'III', 'IV', 'V'][uNum - 1]}
            </button>
          ))}
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {filteredProblems.map((problem, index) => {
          const isRevealed = revealedSolutions[problem.id];
          const isSolved = problem.isCorrect || problem.isIndependentSolved;

          return (
            <div
              key={problem.id}
              className={cn(
                "rounded-2xl border p-5 bg-white dark:bg-[#1D1F1C] transition-all shadow-2xs space-y-4",
                isSolved
                  ? "border-[#BBF7D0] dark:border-[#1B4D2B]"
                  : "border-[#E8E9E4] dark:border-[#292C27]"
              )}
            >
              {/* Header: Title, Marks, Type, Status */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-[#2563EB]/10 text-[#2563EB] dark:text-[#60A5FA] border border-[#2563EB]/30 font-mono">
                    Problem #{index + 1}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-[#64866D]/10 text-[#64866D] dark:text-[#8EAF96]">
                    Unit {problem.unitId}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#FAFBF9] dark:bg-[#20221E] border border-[#ECEEE9] dark:border-[#2D302A] text-[#52544E] dark:text-[#B5B9B0]">
                    {problem.problemType}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#64866D]/15 text-[#64866D] font-mono">
                    {problem.marks} Marks
                  </span>
                </div>

                {isSolved ? (
                  <span className="flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#ECFDF5] dark:bg-[#064E3B] text-[#059669] dark:text-[#6EE7B7] border border-[#A7F3D0] dark:border-[#047857]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{problem.isIndependentSolved ? 'Solved Independently' : 'Solved'}</span>
                  </span>
                ) : (
                  <span className="text-xs text-[#858780] font-medium">
                    Not Solved Yet
                  </span>
                )}
              </div>

              {/* Title & Statement */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#20211F] dark:text-[#EAECE7]">
                  {problem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#333530] dark:text-[#D5D8D0] leading-relaxed">
                  {problem.problemStatement}
                </p>
              </div>

              {/* Circuit Diagram (if available) */}
              {problem.circuitDiagram && (
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#858780]">
                    Circuit Schematic / Topology:
                  </span>
                  <pre className="p-3 rounded-xl font-mono text-[11px] bg-[#181A17] dark:bg-[#121411] text-[#A7F3D0] border border-[#2A2E28] dark:border-[#222620] overflow-x-auto shadow-inner">
                    <code>{problem.circuitDiagram.trim()}</code>
                  </pre>
                </div>
              )}

              {/* Given Data & Formula Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#FAFBF9] dark:bg-[#161815] border border-[#ECEEE9] dark:border-[#262822] text-xs">
                <div>
                  <span className="font-bold text-[#858780] block mb-1">Given Parameters:</span>
                  <ul className="space-y-0.5 list-disc list-inside text-[#333530] dark:text-[#D5D8D0]">
                    {problem.givenData.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-[#858780] block mb-1">Standard Formula / Theorem:</span>
                  <code className="text-[#20211F] dark:text-[#EAECE7] bg-white dark:bg-[#20221E] px-2 py-1 rounded border border-[#E8E9E4] dark:border-[#2E312B] block font-mono text-[11px]">
                    {problem.formula}
                  </code>
                </div>
              </div>

              {/* User Solution Input Area */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#20211F] dark:text-[#EAECE7] flex items-center justify-between">
                  <span>Your Working / Calculated Answer:</span>
                  {problem.attempts && problem.attempts > 0 ? (
                    <span className="text-[10px] text-[#858780] font-normal">
                      {problem.attempts} attempt{problem.attempts > 1 ? 's' : ''} recorded
                    </span>
                  ) : null}
                </label>
                <textarea
                  value={userInputs[problem.id] !== undefined ? userInputs[problem.id] : problem.userSolution || ''}
                  onChange={e => handleInputChange(problem.id, e.target.value)}
                  placeholder="Enter your step values, equations, and final numerical result..."
                  rows={2}
                  className="w-full p-2.5 text-xs rounded-xl border border-[#E8E9E4] dark:border-[#292C27] bg-[#FAFBF9] dark:bg-[#161815] text-[#20211F] dark:text-[#EAECE7] focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              {/* Action Buttons: Solution Reveal & Self-Grading */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-[#F0F1EC] dark:border-[#252824]">
                <button
                  onClick={() => toggleSolution(problem.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FAFBF9] dark:bg-[#20221E] border border-[#E8E9E4] dark:border-[#2E312B] text-[#52544E] dark:text-[#C5C9C0] hover:bg-[#F3F3EF] dark:hover:bg-[#262823] transition-colors"
                >
                  {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{isRevealed ? 'Hide Solution' : 'Reveal Step-by-Step Solution'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleMarkSolved(problem, false)}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg border border-[#BBF7D0] dark:border-[#1B4D2B] bg-[#F0FDF4] dark:bg-[#14281A] text-[#166534] dark:text-[#86EFAC] hover:bg-[#DCFCE7] transition-colors"
                  >
                    Solved with Help
                  </button>
                  <button
                    onClick={() => handleMarkSolved(problem, true)}
                    className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#166534] hover:bg-[#14532D] text-white shadow-2xs transition-colors"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Solved Independently 🎯</span>
                  </button>
                </div>
              </div>

              {/* Revealed Step-by-Step Solution Drawer */}
              {isRevealed && (
                <div className="mt-3 p-4 rounded-xl bg-[#F8F9F7] dark:bg-[#181A16] border border-[#E0E2DC] dark:border-[#2D302A] space-y-3 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#64866D] dark:text-[#8EAF96] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Step-by-Step Analytical Derivation</span>
                    </span>
                    <span className="text-xs font-bold text-[#166534] dark:text-[#86EFAC]">
                      Final Result: {problem.finalAnswer}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-[#333530] dark:text-[#D5D8D0] leading-relaxed">
                    {problem.stepByStepSolution.map((step, sIdx) => (
                      <p key={sIdx} className="pl-2 border-l-2 border-[#64866D]/40">
                        {step}
                      </p>
                    ))}
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
