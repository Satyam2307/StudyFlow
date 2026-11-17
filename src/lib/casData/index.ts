import { CASQuestion, CASNumericalProblem, CASUnitMetadata } from "@/types/cas";
import { CAS_UNIT_1_QUESTIONS } from "./unit1";
import { CAS_UNIT_2_QUESTIONS } from "./unit2";
import { CAS_UNIT_3_QUESTIONS } from "./unit3";
import { CAS_UNIT_4_QUESTIONS } from "./unit4";
import { CAS_UNIT_5_QUESTIONS } from "./unit5";
import { CAS_NUMERICAL_PROBLEMS } from "./numericals";

export const CAS_QUESTIONS: CASQuestion[] = [
  ...CAS_UNIT_1_QUESTIONS,
  ...CAS_UNIT_2_QUESTIONS,
  ...CAS_UNIT_3_QUESTIONS,
  ...CAS_UNIT_4_QUESTIONS,
  ...CAS_UNIT_5_QUESTIONS,
];

export { CAS_NUMERICAL_PROBLEMS };

export const CAS_UNITS_METADATA: CASUnitMetadata[] = [
  {
    id: 1,
    name: "Basics of Electrical Networks",
    code: "EI-27001-U1",
    description: "Source models, source transformations, network topology (graph, tree, cutsets, tiesets), Mesh/Nodal analysis with dependent sources, duality, and DC network theorems.",
    coreTopicsCount: 17,
    supplementaryTopicsCount: 7,
    topicsCovered: [
      "Controlled Sources (VCVS, VCCS, CCVS, CCCS)",
      "Source Transformations",
      "Network Topology (Graph, Trees, Links, Tie-set, Cut-set)",
      "Mesh and Nodal Analysis with Dependent Sources",
      "Thevenin, Norton, Superposition, Reciprocity, Max Power Theorems",
      "Principle of Duality and Dual Networks",
      "Supernode and Supermesh Techniques"
    ],
    pyqWeightage: "25-30% (High occurrence in Q1 & Q2 of University Exams)"
  },
  {
    id: 2,
    name: "Steady State AC and Three-Phase Systems",
    code: "EI-27001-U2",
    description: "Sinusoidal steady-state AC analysis, phasor representation, complex power, balanced and unbalanced three-phase systems, neutral shift, and two-wattmeter method.",
    coreTopicsCount: 15,
    supplementaryTopicsCount: 8,
    topicsCovered: [
      "Sinusoidal Steady State & Phasor Analysis",
      "Real, Reactive, Apparent, and Complex Power",
      "Power Factor Correction",
      "Balanced Three-Phase Star and Delta Systems",
      "Unbalanced Three-Phase Systems & Neutral Displacement",
      "Two-Wattmeter Power and Power Factor Measurement",
      "Dot Convention & Magnetically Coupled Circuits"
    ],
    pyqWeightage: "20-25% (Standard Q2/Q3 on Two-Wattmeter & 3-Phase loads)"
  },
  {
    id: 3,
    name: "Resonance and Circuit Theorems in AC",
    code: "EI-27001-U3",
    description: "Series and parallel resonance, quality factor, half-power bandwidth, selectivity, AC network theorems with phasor impedances, and coupled circuit equivalents.",
    coreTopicsCount: 15,
    supplementaryTopicsCount: 8,
    topicsCovered: [
      "Series RLC Resonance & Voltage Magnification",
      "Parallel Resonance (Tank Circuit) & Dynamic Impedance",
      "Quality Factor (Q), Selectivity, and Half-Power Frequencies",
      "Universal Resonance Curve",
      "Thevenin, Norton, and Superposition in AC Networks",
      "Maximum Power Transfer Theorem in Complex Domain",
      "Conductively Coupled Equivalent Circuits"
    ],
    pyqWeightage: "20-25% (Crucial Q3 on Q-factor, Bandwidth & Dynamic Impedance)"
  },
  {
    id: 4,
    name: "Two-Port Networks and Network Synthesis",
    code: "EI-27001-U4",
    description: "Open-circuit Z, short-circuit Y, transmission ABCD, and hybrid h parameters, parameter conversions, interconnection of two-ports, Positive Real (PR) functions, Hurwitz polynomials, and Foster & Cauer LC synthesis.",
    coreTopicsCount: 20,
    supplementaryTopicsCount: 7,
    topicsCovered: [
      "Z, Y, ABCD, and h Two-Port Parameters",
      "Parameter Interrelationships and Conversions",
      "Symmetry and Reciprocity Conditions",
      "Interconnection: Series, Parallel, and Cascade Two-Ports",
      "Positive Real (PR) Functions & Properties",
      "Hurwitz Polynomials & Routh-Hurwitz Test",
      "Foster I & II Canonical Forms for LC Networks",
      "Cauer I & II Ladder Forms for LC Networks"
    ],
    pyqWeightage: "25-30% (Guaranteed 7-mark synthesis & two-port problem in Q4)"
  },
  {
    id: 5,
    name: "Transient Circuit Analysis and Laplace Transforms",
    code: "EI-27001-U5",
    description: "Classical and Laplace transform solutions for DC and AC transients in first-order (RL, RC) and second-order (RLC) circuits, initial and final conditions, s-domain equivalent representations.",
    coreTopicsCount: 17,
    supplementaryTopicsCount: 7,
    topicsCovered: [
      "Inductor and Capacitor Continuity & Boundary Conditions",
      "DC Transient Analysis of Series RL and RC Circuits",
      "Time Constants and Physical Meaning",
      "Series and Parallel RLC Transients (Overdamped, Critically Damped, Underdamped)",
      "Laplace Transform Properties for Circuit Analysis",
      "Transformed s-Domain Equivalent Models with Initial Conditions",
      "Impulse, Step, and Sinusoidal Responses in s-Domain",
      "Initial Value Theorem (IVT) and Final Value Theorem (FVT)"
    ],
    pyqWeightage: "20-25% (Standard Q5 on Transients, Roots, and Laplace Solving)"
  }
];
