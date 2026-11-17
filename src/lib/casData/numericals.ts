import { CASNumericalProblem } from "@/types/cas";

export const CAS_NUMERICAL_PROBLEMS: CASNumericalProblem[] = [
  {
    "id": "cas-num-101",
    "unitId": 1,
    "unitName": "Unit I - Basics of Electrical Networks",
    "title": "Supernode Analysis with Dependent Voltage Source",
    "problemStatement": "In the circuit below, find the node voltages V1 and V2 using nodal analysis. The circuit has a 10 V independent source, a 5 V dependent source connected between node 1 and node 2 such that V1 - V2 = 2*ix, where ix is the current flowing from node 1 to reference through a 4 ohm resistor. Node 2 is connected to ground through a 6 ohm resistor, and an independent current source of 3 A injects current into node 2.",
    "problemType": "Nodal / Supernode Analysis",
    "marks": 7,
    "years": [
      "2023",
      "2025 Test"
    ],
    "sourcePaperType": "internal_test",
    "givenData": [
      "Constraint: V1 - V2 = 2 * ix",
      "Controlling current: ix = V1 / 4",
      "Resistor at Node 1: R1 = 4 \u03a9 to ground",
      "Resistor at Node 2: R2 = 6 \u03a9 to ground",
      "Independent Current Source at Node 2: I_in = 3 A into Node 2",
      "Independent Voltage Source branch at Node 1: 10 V source with 2 \u03a9 series resistor"
    ],
    "formula": "KCL at Supernode (1-2): \u03a3 I_out = 0; Constraint: V1 - V2 = 2 * (V1 / 4) => 0.5 * V1 - V2 = 0",
    "stepByStepSolution": [
      "Step 1: Express the constraint equation across the dependent source between nodes 1 and 2: V1 - V2 = 2*ix. Since ix = V1 / 4, we have V1 - V2 = 2*(V1/4) = 0.5*V1 => 0.5*V1 - V2 = 0 => V2 = 0.5*V1.",
      "Step 2: Form the supernode enclosing node 1 and node 2 and write KCL summing all currents leaving the supernode: (V1 - 10)/2 + V1/4 + V2/6 - 3 = 0.",
      "Step 3: Clear denominators by multiplying the entire KCL equation by 12: 6*(V1 - 10) + 3*V1 + 2*V2 - 36 = 0 => 9*V1 + 2*V2 - 60 - 36 = 0 => 9*V1 + 2*V2 = 96.",
      "Step 4: Substitute V2 = 0.5*V1 into the supernode KCL equation: 9*V1 + 2*(0.5*V1) = 96 => 10*V1 = 96 => V1 = 9.6 V.",
      "Step 5: Compute V2: V2 = 0.5 * 9.6 = 4.8 V.",
      "Step 6: Verify branch currents: ix = 9.6 / 4 = 2.4 A. Constraint check: V1 - V2 = 9.6 - 4.8 = 4.8 V; 2*ix = 2 * 2.4 = 4.8 V (Confirmed!)."
    ],
    "finalAnswer": "V1 = 9.6 V, V2 = 4.8 V, ix = 2.4 A",
    "units": "Volts (V) and Amperes (A)",
    "circuitDiagram": "\n         +----[ 2 \u03a9 ]----+-----------[ +  2*ix  - ]-----------+\n         |               |                                    |\n     [ 10 V ]         [ 4 \u03a9 ] (ix v)                       [ 6 \u03a9 ]   (^) 3 A\n         |               |                                    |       |\n        GND             GND                                  GND     GND\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": false,
    "isDifficult": false
  },
  {
    "id": "cas-num-102",
    "unitId": 1,
    "unitName": "Unit I - Basics of Electrical Networks",
    "title": "Thevenin Equivalent with Dependent Source",
    "problemStatement": "Find the Thevenin equivalent circuit (Vth and Rth) seen across terminals A-B for a network containing a 20 V independent DC source in series with a 5 ohm resistor, connected in parallel with a dependent current source of 0.5*Vx, and terminal resistor R = 10 ohms across which Vx appears.",
    "problemType": "Thevenin's Theorem",
    "marks": 7,
    "years": [
      "2022",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "Independent Source: Vs = 20 V",
      "Series Resistor: R1 = 5 \u03a9",
      "Dependent Current Source: I_dep = 0.5 * Vx (pointing upward)",
      "Parallel Load branch resistor: R2 = 10 \u03a9 across terminals A-B",
      "Controlling variable: Vx = V_AB (voltage across 10 \u03a9 resistor)"
    ],
    "formula": "Vth = Voc across terminals A-B; Rth = Voc / Isc (or via test source V_test / I_test with independent sources deactivated).",
    "stepByStepSolution": [
      "Step 1: Calculate Open-Circuit Voltage Voc across terminals A-B. Node equation at terminal A (voltage Vx): (Vx - 20)/5 - 0.5*Vx + Vx/10 = 0.",
      "Step 2: Multiply by 10: 2*(Vx - 20) - 5*Vx + Vx = 0 => 2*Vx - 40 - 5*Vx + Vx = 0 => -2*Vx = 40 => Vx = -20 V. Hence, Voc = Vth = -20 V (or 20 V with inverted polarity).",
      "Step 3: Calculate Short-Circuit Current Isc by shorting terminals A-B (Vx = 0). Since Vx = 0, the dependent source 0.5*Vx = 0 (open circuit).",
      "Step 4: The only current flowing into the short-circuit path from the 20 V source through the 5 \u03a9 resistor is: Isc = 20 / 5 = 4 A.",
      "Step 5: Compute Thevenin resistance: Rth = Voc / Isc = -20 V / 4 A = -5 \u03a9 (negative resistance due to active dependent current source feedback!).",
      "Step 6: Alternative Test Source verification: Deactivate 20 V independent source (short circuit). Connect 1 V test source across A-B (Vx = 1 V). Test current leaving test source: Itest = Vx/10 + (Vx - 0)/5 - 0.5*Vx = 0.1 + 0.2 - 0.5 = -0.2 A. Rth = Vtest / Itest = 1 / (-0.2) = -5 \u03a9 (Confirmed!)."
    ],
    "finalAnswer": "Vth = -20 V, Rth = -5 \u03a9",
    "units": "V and \u03a9",
    "circuitDiagram": "\n        A o------+-----------+------------+\n                 |           |            |\n               [ 5 \u03a9 ]     (^) 0.5*Vx   [ 10 \u03a9 ] (Vx)\n                 |           |            |\n              [ 20 V ]       |            |\n                 |           |            |\n        B o------+-----------+------------+\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": false,
    "isDifficult": true
  },
  {
    "id": "cas-num-103",
    "unitId": 1,
    "unitName": "Unit I - Basics of Electrical Networks",
    "title": "Maximum Power Transfer to a Variable Load",
    "problemStatement": "A practical generator has an open-circuit voltage of 100 V and an internal impedance of Zg = (8 + j6) ohms. Determine: (a) The optimal load impedance ZL for maximum power transfer, (b) The maximum active power transferred to the load, and (c) The power transferred if the load is restricted to be purely resistive (RL only).",
    "problemType": "Maximum Power Transfer Theorem",
    "marks": 7,
    "years": [
      "2019",
      "2024 Test"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "Source voltage: Vth = 100 V (RMS)",
      "Internal generator impedance: Zg = 8 + j6 \u03a9"
    ],
    "formula": "Case 1 (Complex ZL): ZL = Zg* = Rg - jXg; Pmax = |Vth|^2 / (4 * Rg). Case 2 (Purely Resistive RL): RL = |Zg| = sqrt(Rg^2 + Xg^2); P = |I|^2 * RL.",
    "stepByStepSolution": [
      "Step 1 (Part a - Complex ZL): For a complex load with independent resistance and reactance controls, maximum power is delivered when ZL equals the complex conjugate of source impedance: ZL = Zg* = 8 - j6 \u03a9.",
      "Step 2: The total loop impedance becomes Z_total = Zg + ZL = (8 + j6) + (8 - j6) = 16 + j0 \u03a9 (purely resistive).",
      "Step 3 (Part b - Maximum Active Power): Loop current I = Vth / Z_total = 100 / 16 = 6.25 A. Pmax = I^2 * RL = (6.25)^2 * 8 = 39.0625 * 8 = 312.5 W. Using direct formula: Pmax = |Vth|^2 / (4 * Rg) = (100)^2 / (4 * 8) = 10000 / 32 = 312.5 W.",
      "Step 4 (Part c - Purely Resistive RL): When the load angle cannot be tuned and must be purely resistive, optimal resistance equals the magnitude of the source impedance: RL = |Zg| = sqrt(8^2 + 6^2) = sqrt(64 + 36) = sqrt(100) = 10 \u03a9.",
      "Step 5: Total impedance with RL = 10 \u03a9: Z_total = (8 + 10) + j6 = 18 + j6 \u03a9. Magnitude |Z_total| = sqrt(18^2 + 6^2) = sqrt(324 + 36) = sqrt(360) = 18.974 \u03a9.",
      "Step 6: Power in resistive load: I_RMS = 100 / 18.974 = 5.27 A. P_res = (5.27)^2 * 10 = 277.78 W. (Notice 277.78 W < 312.5 W because inductive reactance is not canceled)."
    ],
    "finalAnswer": "(a) ZL = 8 - j6 \u03a9, (b) Pmax = 312.5 W, (c) RL = 10 \u03a9, P_res = 277.78 W",
    "units": "\u03a9 and Watts (W)",
    "circuitDiagram": "\n            +---[ 8 \u03a9 ]---[ +j6 \u03a9 ]---+\n            |                         |\n         [ 100 V ]                  [ ZL ]\n            |                         |\n            +-------------------------+\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": false,
    "isDifficult": false
  },
  {
    "id": "cas-num-201",
    "unitId": 2,
    "unitName": "Unit II - Steady State AC and Three-Phase Systems",
    "title": "Two-Wattmeter Method for 3-Phase Induction Motor Power Factor",
    "problemStatement": "Two wattmeters connected to measure the input power of a 415 V, 50 Hz, 3-phase balanced delta-connected load indicate 5.0 kW and 1.2 kW respectively. Calculate: (a) The total active power drawn by the load, (b) The operating power factor of the load, (c) The total reactive power, and (d) The phase current and phase impedance assuming a balanced star-equivalent.",
    "problemType": "Two-Wattmeter Power Measurement",
    "marks": 7,
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "Line voltage: VL = 415 V",
      "Wattmeter 1 reading: W1 = 5.0 kW = 5000 W",
      "Wattmeter 2 reading: W2 = 1.2 kW = 1200 W",
      "Load: 3-phase balanced 415 V, 50 Hz"
    ],
    "formula": "Total Active Power P = W1 + W2; Phase angle \u03d5 = arctan( sqrt(3) * (W1 - W2) / (W1 + W2) ); Power factor = cos(\u03d5); Total Reactive Power Q = sqrt(3) * (W1 - W2).",
    "stepByStepSolution": [
      "Step 1: Total 3-phase active power P = W1 + W2 = 5.0 kW + 1.2 kW = 6.2 kW = 6200 W.",
      "Step 2: Compute (W1 - W2) = 5.0 - 1.2 = 3.8 kW. Compute (W1 + W2) = 6.2 kW.",
      "Step 3: Calculate the phase angle tangent: tan(\u03d5) = sqrt(3) * (W1 - W2) / (W1 + W2) = 1.732 * (3.8) / (6.2) = 6.5818 / 6.2 = 1.0616.",
      "Step 4: Determine phase angle \u03d5: \u03d5 = arctan(1.0616) = 46.71\u00b0.",
      "Step 5: Compute power factor: cos(\u03d5) = cos(46.71\u00b0) = 0.6857 lagging.",
      "Step 6: Total 3-phase reactive power Q = sqrt(3) * (W1 - W2) = 1.73205 * 3800 = 6581.8 VAR = 6.582 kVAR.",
      "Step 7: Line current IL: P = sqrt(3) * VL * IL * cos(\u03d5) => IL = P / (sqrt(3) * VL * cos(\u03d5)) = 6200 / (1.73205 * 415 * 0.6857) = 6200 / 492.9 = 12.58 A.",
      "Step 8: Star-equivalent phase impedance: Z_ph = V_ph / I_ph = (415 / sqrt(3)) / 12.58 = 239.6 / 12.58 = 19.05 \u03a9 at angle 46.71\u00b0."
    ],
    "finalAnswer": "(a) P = 6.2 kW, (b) pf = 0.686 lagging, (c) Q = 6.58 kVAR, (d) IL = 12.58 A, Z_ph = 19.05 \u222046.71\u00b0 \u03a9",
    "units": "kW, lagging pf, kVAR, A, and \u03a9",
    "circuitDiagram": "\n        R o----[ CC1 ]----+-------------------( Load Phase R )\n               |          |\n        Y o----+--[ CC2 ]-+-------------------( Load Phase Y )\n               |  |       |\n               [PC1]     [PC2]\n               |  |       |\n        B o----+--+-------+-------------------( Load Phase B )\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": true,
    "isDifficult": false
  },
  {
    "id": "cas-num-202",
    "unitId": 2,
    "unitName": "Unit II - Steady State AC and Three-Phase Systems",
    "title": "Unbalanced 3-Phase Star Load with Neutral Shift Voltage",
    "problemStatement": "A 400 V, 3-phase, 4-wire supply feeds an unbalanced star-connected load with impedances ZR = 10 + j0 ohms, ZY = 5 + j5 ohms, and ZB = 0 - j10 ohms. If the neutral wire is disconnected (creating an isolated star neutral N'), calculate the neutral displacement voltage VN'N with respect to the supply neutral N using Millman's Theorem.",
    "problemType": "Unbalanced Three-Phase System",
    "marks": 7,
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "Line voltage: VL = 400 V (RMS), Phase voltage Vph = 400 / sqrt(3) = 230.94 V",
      "Phase voltages: V_RN = 230.94 \u22200\u00b0 V, V_YN = 230.94 \u2220-120\u00b0 V, V_BN = 230.94 \u2220120\u00b0 V",
      "Load branch impedances: ZR = 10 \u03a9, ZY = (5 + j5) \u03a9, ZB = -j10 \u03a9"
    ],
    "formula": "Millman's Theorem for neutral shift: V_N'N = (V_RN * Y_R + V_YN * Y_Y + V_BN * Y_B) / (Y_R + Y_Y + Y_B)",
    "stepByStepSolution": [
      "Step 1: Compute phase admittances: Y_R = 1 / 10 = 0.1 S.",
      "Step 2: Y_Y = 1 / (5 + j5) = (5 - j5) / 50 = 0.1 - j0.1 S = 0.1414 \u2220-45\u00b0 S.",
      "Step 3: Y_B = 1 / (-j10) = +j0.1 S = 0.1 \u222090\u00b0 S.",
      "Step 4: Total admittance: Y_total = Y_R + Y_Y + Y_B = 0.1 + (0.1 - j0.1) + j0.1 = 0.2 + j0 = 0.2 S.",
      "Step 5: Compute numerator currents: I_R = 230.94 \u22200\u00b0 * 0.1 = 23.094 + j0 A.",
      "Step 6: I_Y = 230.94 \u2220-120\u00b0 * 0.1414 \u2220-45\u00b0 = 32.65 \u2220-165\u00b0 = -31.54 - j8.45 A.",
      "Step 7: I_B = 230.94 \u2220120\u00b0 * 0.1 \u222090\u00b0 = 23.094 \u2220210\u00b0 = -20.0 - j11.55 A.",
      "Step 8: Sum numerator currents: \u03a3 (V_ph * Y) = (23.094 - 31.54 - 20.0) + j(0 - 8.45 - 11.55) = -28.45 - j20.0 A = 34.78 \u2220-144.9\u00b0 A.",
      "Step 9: Calculate neutral shift voltage: V_N'N = (-28.45 - j20.0) / 0.2 = -142.25 - j100.0 V = 173.88 \u2220-144.9\u00b0 V."
    ],
    "finalAnswer": "V_N'N = 173.88 \u2220-144.9\u00b0 V (Neutral shift = 173.9 V)",
    "units": "Volts (V)",
    "circuitDiagram": "\n        R o----[ ZR = 10 \u03a9 ]----+\n                                |\n        Y o----[ ZY = 5+j5 ]----+---- (Isolated Neutral N')\n                                |\n        B o----[ ZB = -j10 ]----+\n                                :\n                                : (V_N'N across floating neutral and supply neutral)\n        N o---------------------+\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": false,
    "isDifficult": true
  },
  {
    "id": "cas-num-203",
    "unitId": 2,
    "unitName": "Unit II - Steady State AC and Three-Phase Systems",
    "title": "Coupled Inductors Mutual Inductance and Coupling Coefficient",
    "problemStatement": "Two magnetically coupled coils have self-inductances L1 = 0.36 H and L2 = 0.16 H. When connected in series-aiding, their equivalent inductance is measured as 0.76 H. Calculate: (a) The mutual inductance M between the two coils, (b) The coefficient of coupling k, and (c) The equivalent inductance when the coils are reconnected in series-opposing.",
    "problemType": "Magnetic Coupling and Mutual Inductance",
    "marks": 3,
    "years": [
      "2019",
      "2024 Test"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "Self inductance of coil 1: L1 = 0.36 H",
      "Self inductance of coil 2: L2 = 0.16 H",
      "Series aiding inductance: L_aiding = 0.76 H"
    ],
    "formula": "Series Aiding: L_aid = L1 + L2 + 2*M; Series Opposing: L_opp = L1 + L2 - 2*M; Coupling Coefficient: k = M / sqrt(L1 * L2).",
    "stepByStepSolution": [
      "Step 1: Set up the series-aiding inductance formula: L_aid = L1 + L2 + 2*M.",
      "Step 2: Substitute given values: 0.76 = 0.36 + 0.16 + 2*M => 0.76 = 0.52 + 2*M.",
      "Step 3: Solve for mutual inductance M: 2*M = 0.76 - 0.52 = 0.24 H => M = 0.12 H.",
      "Step 4: Compute coefficient of coupling k: k = M / sqrt(L1 * L2) = 0.12 / sqrt(0.36 * 0.16) = 0.12 / sqrt(0.0576) = 0.12 / 0.24 = 0.50.",
      "Step 5: Compute series-opposing equivalent inductance: L_opp = L1 + L2 - 2*M = 0.36 + 0.16 - 2*(0.12) = 0.52 - 0.24 = 0.28 H."
    ],
    "finalAnswer": "(a) M = 0.12 H, (b) k = 0.50, (c) L_opp = 0.28 H",
    "units": "Henry (H) and dimensionless (k)",
    "circuitDiagram": "\n        Series Aiding:   o---[ L1 ]*---[ L2 ]*---o  (Dots on entry: L = L1+L2+2M)\n        Series Opposing: o---[ L1 ]*---*[ L2 ]---o  (Dot on entry & exit: L = L1+L2-2M)\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": false,
    "isDifficult": false
  },
  {
    "id": "cas-num-301",
    "unitId": 3,
    "unitName": "Unit III - Resonance and Circuit Theorems in AC",
    "title": "Series RLC Resonant Frequency, Bandwidth, and Quality Factor",
    "problemStatement": "A series RLC circuit consists of R = 10 ohms, L = 25 mH, and C = 0.1 microfarad, energized by a 100 V AC source. Calculate: (a) Resonant frequency fo in Hz and angular frequency \u03c9o in rad/s, (b) Quality factor Q of the circuit, (c) Half-power bandwidth BW in Hz, (d) Lower and upper half-power cutoff frequencies f1 and f2, and (e) Voltages across L and C at resonance.",
    "problemType": "Series Resonance",
    "marks": 7,
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "Resistance R = 10 \u03a9",
      "Inductance L = 25 mH = 0.025 H",
      "Capacitance C = 0.1 \u03bcF = 10^-7 F",
      "Applied Voltage V = 100 V (RMS)"
    ],
    "formula": "\u03c9o = 1 / sqrt(L*C); fo = \u03c9o / (2*\u03c0); Q = \u03c9o * L / R = (1/R)*sqrt(L/C); BW = fo / Q; f1 = fo - BW/2, f2 = fo + BW/2; VL = VC = Q * V.",
    "stepByStepSolution": [
      "Step 1: Calculate angular resonant frequency \u03c9o: L*C = 0.025 * 10^-7 = 2.5 * 10^-9 s^2. \u03c9o = 1 / sqrt(2.5 * 10^-9) = 1 / (5 * 10^-5) = 20,000 rad/s.",
      "Step 2: Calculate cyclic resonant frequency fo: fo = 20,000 / (2 * 3.14159) = 3183.1 Hz = 3.183 kHz.",
      "Step 3: Calculate Quality factor Q: Q = (\u03c9o * L) / R = (20,000 * 0.025) / 10 = 500 / 10 = 50.",
      "Step 4: Calculate Bandwidth BW: BW = fo / Q = 3183.1 / 50 = 63.66 Hz. (Angular bandwidth \u0394\u03c9 = R/L = 10 / 0.025 = 400 rad/s).",
      "Step 5: Half-power cutoff frequencies: Lower cutoff f1 = fo - BW/2 = 3183.1 - 31.83 = 3151.27 Hz; Upper cutoff f2 = fo + BW/2 = 3183.1 + 31.83 = 3214.93 Hz.",
      "Step 6: Current at resonance: At resonance, Z = R = 10 \u03a9 (purely resistive). Io = V / R = 100 / 10 = 10 A.",
      "Step 7: Inductor and capacitor voltages at resonance: VL = Io * (\u03c9o * L) = 10 * 500 = 5000 V = Q * V = 50 * 100 = 5000 V. VC = Io * (1 / (\u03c9o * C)) = 10 * 500 = 5000 V. (Extreme voltage magnification: 50 times the applied voltage!)."
    ],
    "finalAnswer": "(a) fo = 3183.1 Hz, \u03c9o = 20000 rad/s, (b) Q = 50, (c) BW = 63.66 Hz, (d) f1 = 3151.3 Hz, f2 = 3214.9 Hz, (e) VL = VC = 5000 V",
    "units": "Hz, rad/s, dimensionless, and Volts (V)",
    "circuitDiagram": "\n             +----[ R = 10 \u03a9 ]----[ L = 25 mH ]----[ C = 0.1 \u03bcF ]----+\n             |                                                       |\n        [ 100 V, ~ ]                                                 |\n             |                                                       |\n             +-------------------------------------------------------+\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": true,
    "isDifficult": false
  },
  {
    "id": "cas-num-302",
    "unitId": 3,
    "unitName": "Unit III - Resonance and Circuit Theorems in AC",
    "title": "Parallel Resonant Circuit Dynamic Impedance and Antiresonance",
    "problemStatement": "A practical coil having an inductance of 10 mH and a winding resistance of 4 ohms is connected in parallel with a variable capacitor C across a 200 V, 50 Hz AC supply. Find: (a) The value of C required to produce parallel resonance (unity power factor), (b) The dynamic impedance Zd of the parallel tank circuit at resonance, and (c) The total supply current drawn at antiresonance.",
    "problemType": "Parallel Resonance",
    "marks": 7,
    "years": [
      "2022",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "Supply: V = 200 V, f = 50 Hz (\u03c9 = 2*\u03c0*50 = 314.16 rad/s)",
      "Inductive branch: R = 4 \u03a9, L = 10 mH = 0.01 H",
      "Capacitive branch: Pure capacitor C"
    ],
    "formula": "Parallel resonance condition (zero net susceptance): C = L / (R^2 + \u03c9^2 * L^2); Dynamic Impedance: Zd = L / (R * C) = (R^2 + \u03c9^2 * L^2) / R; Supply current Io = V / Zd.",
    "stepByStepSolution": [
      "Step 1: Calculate inductive reactance: XL = \u03c9 * L = 314.16 * 0.01 = 3.1416 \u03a9.",
      "Step 2: Calculate coil impedance magnitude squared: |ZL|^2 = R^2 + XL^2 = 4^2 + (3.1416)^2 = 16 + 9.87 = 25.87 \u03a9^2.",
      "Step 3: Determine resonant capacitance C for unity power factor: C = L / |ZL|^2 = 0.01 / 25.87 = 3.865 * 10^-4 F = 386.5 \u03bcF.",
      "Step 4: Calculate Dynamic Impedance Zd of the parallel resonant tank: Zd = L / (R * C) = 0.01 / (4 * 3.865 * 10^-4) = 0.01 / 0.001546 = 6.468 \u03a9. (Alternatively, Zd = |ZL|^2 / R = 25.87 / 4 = 6.468 \u03a9).",
      "Step 5: Calculate total current drawn from supply at resonance: Io = V / Zd = 200 / 6.468 = 30.92 A at unity power factor.",
      "Step 6: Verify branch currents: Coil current I_coil = 200 / sqrt(25.87) = 200 / 5.086 = 39.32 A. Capacitor current Ic = 200 * \u03c9 * C = 200 * 314.16 * 3.865*10^-4 = 24.28 A. (Reactive component of coil current exactly cancels Ic!)."
    ],
    "finalAnswer": "(a) C = 386.5 \u03bcF, (b) Zd = 6.468 \u03a9, (c) Io = 30.92 A (in phase with V)",
    "units": "\u03bcF, \u03a9, and A",
    "circuitDiagram": "\n                   +-------[ R = 4 \u03a9 ]----[ L = 10 mH ]-------+\n                   |                                          |\n        o----------+                                          +----------o\n        200 V      |                                          |\n        50 Hz      +-----------------[ C = 386.5 \u03bcF ]---------+\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": false,
    "isDifficult": false
  },
  {
    "id": "cas-num-401",
    "unitId": 4,
    "unitName": "Unit IV - Two-Port Networks and Network Synthesis",
    "title": "Z and Y Parameters Matrix Determination for a T-Network",
    "problemStatement": "A symmetrical T-network has series arms Z1 = 4 ohms, Z2 = 4 ohms, and shunt arm Z3 = 8 ohms. Find: (a) The open-circuit impedance parameters [Z], (b) The short-circuit admittance parameters [Y], and (c) Verify reciprocity (Z12 = Z21) and symmetry (Z11 = Z22).",
    "problemType": "Two-Port Parameters",
    "marks": 7,
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "T-network topology",
      "Series arm 1: Za = 4 \u03a9",
      "Series arm 2: Zb = 4 \u03a9",
      "Shunt arm: Zc = 8 \u03a9"
    ],
    "formula": "Z11 = Za + Zc; Z22 = Zb + Zc; Z12 = Z21 = Zc; [Y] = [Z]^-1 = (1/\u0394Z) * [[Z22, -Z12], [-Z21, Z11]].",
    "stepByStepSolution": [
      "Step 1: Compute Z-parameters using open-circuit terminal definitions: Z11 = V1/I1 with I2 = 0 => Z11 = Za + Zc = 4 + 8 = 12 \u03a9.",
      "Step 2: Z22 = V2/I2 with I1 = 0 => Z22 = Zb + Zc = 4 + 8 = 12 \u03a9.",
      "Step 3: Transfer impedances: Z12 = V1/I2 with I1 = 0 => Current I2 flows entirely through shunt branch Zc => V1 = I2 * Zc => Z12 = 8 \u03a9. By symmetry, Z21 = 8 \u03a9.",
      "Step 4: Form the Z-parameter matrix: [Z] = [[12, 8], [8, 12]] \u03a9.",
      "Step 5: Verify reciprocity and symmetry: Z12 = Z21 = 8 \u03a9 (Reciprocal). Z11 = Z22 = 12 \u03a9 (Symmetrical).",
      "Step 6: Compute determinant \u0394Z: \u0394Z = Z11*Z22 - Z12*Z21 = (12 * 12) - (8 * 8) = 144 - 64 = 80 \u03a9^2.",
      "Step 7: Invert [Z] to find [Y]: Y11 = Z22 / \u0394Z = 12 / 80 = 0.15 S. Y22 = Z11 / \u0394Z = 12 / 80 = 0.15 S. Y12 = Y21 = -Z12 / \u0394Z = -8 / 80 = -0.10 S.",
      "Step 8: Form Y-parameter matrix: [Y] = [[0.15, -0.10], [-0.10, 0.15]] S."
    ],
    "finalAnswer": "[Z] = [[12, 8], [8, 12]] \u03a9, [Y] = [[0.15, -0.10], [-0.10, 0.15]] S",
    "units": "\u03a9 and Siemens (S)",
    "circuitDiagram": "\n             +----[ 4 \u03a9 ]----+----[ 4 \u03a9 ]----+\n             |               |               |\n        1 o--+             [ 8 \u03a9 ]           +--o 2\n                           (Zc)\n        1'o------------------+------------------o 2'\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": false,
    "isDifficult": false
  },
  {
    "id": "cas-num-402",
    "unitId": 4,
    "unitName": "Unit IV - Two-Port Networks and Network Synthesis",
    "title": "Cauer I Form Ladder Network LC Synthesis",
    "problemStatement": "Synthesize the driving-point impedance function Z(s) = (s^3 + 4s) / (2s^4 + 10s^2 + 8) into a Cauer I (first Cauer) ladder network.",
    "problemType": "LC Network Synthesis (Cauer I)",
    "marks": 7,
    "years": [
      "2019",
      "2025 Test"
    ],
    "sourcePaperType": "internal_test",
    "givenData": [
      "Z(s) = (s^3 + 4s) / (2s^4 + 10s^2 + 8)",
      "Degree of denominator (4) > degree of numerator (3) => Invert to Y(s) to remove highest power of s first"
    ],
    "formula": "Cauer I Form: Continued fraction expansion by successive polynomial division in descending powers of s. Y(s) = s*C1 + 1 / ( s*L2 + 1 / ( s*C3 + 1 / (s*L4) ) ).",
    "stepByStepSolution": [
      "Step 1: Notice that Z(0) = 0 and Z(\u221e) = 0 (degree of denominator is 4, numerator is 3). To begin Cauer I expansion in descending powers, invert to admittance: Y(s) = (2s^4 + 10s^2 + 8) / (s^3 + 4s).",
      "Step 2 (First Division): Divide (2s^4 + 10s^2 + 8) by (s^3 + 4s): Quotient = 2s. Remainder: (2s^4 + 10s^2 + 8) - (2s^4 + 8s^2) = 2s^2 + 8. Hence, first element is a shunt capacitor C1 = 2 F.",
      "Step 3 (Second Division): Divide (s^3 + 4s) by (2s^2 + 8): Quotient = 0.5s. Remainder: (s^3 + 4s) - (s^3 + 4s) = 0. Wait! (s^3 + 4s) / (2s^2 + 8) = 0.5s with zero remainder! Let us check common factor.",
      "Step 4: Check poles/zeros: 2s^4 + 10s^2 + 8 = 2(s^2 + 1)(s^2 + 4). s^3 + 4s = s(s^2 + 4). The factor (s^2 + 4) cancels! Z(s) = s / [2(s^2 + 1)] = s / (2s^2 + 2).",
      "Step 5: Re-evaluate reduced function: Y_red(s) = (2s^2 + 2) / s = 2s + 2/s. Quotient 1: 2s => Shunt capacitor C1 = 2 F. Remainder: 2/s => Shunt inductor with admittance 2/s => 1/(s*L) = 2/s => L1 = 0.5 H.",
      "Step 6: Alternatively, for non-cancelling classic problem Z(s) = (2s^4 + 10s^2 + 4) / (s^3 + 2s), four-element ladder yields C1 = 2 F, L2 = 0.167 H, C3 = 3.6 F, L4 = 0.833 H.",
      "Step 7: In the reduced physical LC tank: The driving point consists of a parallel combination of capacitor C = 2 F and inductor L = 0.5 H!"
    ],
    "finalAnswer": "C1 = 2 F (shunt) in parallel with L1 = 0.5 H (shunt) [Parallel LC Tank]",
    "units": "Farads (F) and Henrys (H)",
    "circuitDiagram": "\n        1 o--------+-------------------+\n                   |                   |\n                 [ C = 2 F ]         [ L = 0.5 H ]\n                   |                   |\n        1'o--------+-------------------+\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": true,
    "isDifficult": true
  },
  {
    "id": "cas-num-403",
    "unitId": 4,
    "unitName": "Unit IV - Two-Port Networks and Network Synthesis",
    "title": "Foster I Form Partial Fraction LC Synthesis",
    "problemStatement": "Synthesize the driving point impedance function Z(s) = (2 * (s^2 + 1) * (s^2 + 9)) / (s * (s^2 + 4)) into Foster I canonical form.",
    "problemType": "LC Network Synthesis (Foster I)",
    "marks": 7,
    "years": [
      "2022",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "Impedance function Z(s) = 2(s^2 + 1)(s^2 + 9) / [s(s^2 + 4)]",
      "Numerator: 2(s^4 + 10s^2 + 9) = 2s^4 + 20s^2 + 18",
      "Denominator: s^3 + 4s",
      "Degree of numerator is 4, degree of denominator is 3 => Pole at infinity exists"
    ],
    "formula": "Foster I Form: Z(s) = s*L_inf + 1/(s*Co) + \u03a3 [ (2*ki * s) / (s^2 + \u03c9i^2) ], realized as series inductor L_inf, series capacitor Co, and parallel LC tanks in series.",
    "stepByStepSolution": [
      "Step 1: Divide numerator by denominator to extract the pole at s = infinity: (2s^4 + 20s^2 + 18) / (s^3 + 4s) = 2s + Remainder / (s^3 + 4s).",
      "Step 2: Calculate remainder: (2s^4 + 20s^2 + 18) - 2s*(s^3 + 4s) = (2s^4 + 20s^2 + 18) - (2s^4 + 8s^2) = 12s^2 + 18. Thus, L_inf = 2 H.",
      "Step 3: Perform partial fraction expansion on Z_rem(s) = (12s^2 + 18) / [s*(s^2 + 4)] = ko / s + (2*k1 * s) / (s^2 + 4).",
      "Step 4: Compute residue ko at s = 0: ko = lim_{s->0} [ s * Z_rem(s) ] = 18 / 4 = 4.5. Since the term is ko / s = 1 / (s * Co) => Co = 1 / 4.5 = 2/9 F = 0.222 F.",
      "Step 5: Compute residue 2*k1 at pole s^2 = -4: Multiply Z_rem(s) by (s^2 + 4): (12s^2 + 18) / s. At s^2 = -4, numerator is 12*(-4) + 18 = -48 + 18 = -30. So term is -30 / s. Thus 2*k1 = -30 / (-4) = 7.5.",
      "Step 6: For the parallel LC tank representing (7.5 s) / (s^2 + 4): Z_tank(s) = (1 / C1) * s / (s^2 + 1/(L1*C1)). Matching coefficients: 1 / C1 = 7.5 => C1 = 1 / 7.5 = 2/15 F = 0.1333 F. Resonant frequency \u03c91^2 = 4 = 1 / (L1 * C1) => L1 = 1 / (4 * C1) = 1 / (4 * 2/15) = 15 / 8 H = 1.875 H.",
      "Step 7: Assemble Foster I Network: Series inductor L_inf = 2 H in series with series capacitor Co = 0.222 F in series with parallel tank (L1 = 1.875 H, C1 = 0.133 F)."
    ],
    "finalAnswer": "L_inf = 2 H, Co = 0.222 F (series), Tank: L1 = 1.875 H || C1 = 0.133 F",
    "units": "H and F",
    "circuitDiagram": "\n        o---[ L = 2 H ]---[ C = 0.222 F ]---+----[ L1 = 1.875 H ]----+---o\n                                            |                        |\n                                            +----[ C1 = 0.133 F ]----+\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": false,
    "isDifficult": true
  },
  {
    "id": "cas-num-501",
    "unitId": 5,
    "unitName": "Unit V - Transient Circuit Analysis and Laplace Transforms",
    "title": "Series RL Circuit DC Transient Current and Time Constant",
    "problemStatement": "A coil of resistance R = 20 ohms and inductance L = 4 H is connected across a 100 V DC voltage source at t = 0 through a switch. (a) Derive the expression for the current i(t) for t >= 0 assuming zero initial current. (b) Find the circuit time constant tau. (c) Determine the current and the inductor voltage at t = 0.1 s and t = tau. (d) What is the steady-state current?",
    "problemType": "RL DC Transients",
    "marks": 7,
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "DC Source Voltage: V = 100 V",
      "Resistance: R = 20 \u03a9",
      "Inductance: L = 4 H",
      "Initial inductor current: i(0-) = 0 A"
    ],
    "formula": "i(t) = (V/R) * (1 - e^(-t/tau)); tau = L / R; v_L(t) = L * (di/dt) = V * e^(-t/tau); I_ss = V / R.",
    "stepByStepSolution": [
      "Step 1: Calculate circuit time constant: tau = L / R = 4 / 20 = 0.2 seconds.",
      "Step 2: Determine steady-state current: At t -> infinity, the inductor acts as a short circuit: I_ss = V / R = 100 / 20 = 5.0 A.",
      "Step 3: Write complete transient current equation: i(t) = I_ss * (1 - e^(-t/tau)) = 5 * (1 - e^(-t / 0.2)) = 5 * (1 - e^(-5t)) A for t >= 0.",
      "Step 4: Inductor voltage expression: v_L(t) = L * di/dt = 4 * [5 * 5 * e^(-5t)] = 100 * e^(-5t) V.",
      "Step 5: Compute current and inductor voltage at t = tau = 0.2 s: i(0.2) = 5 * (1 - e^-1) = 5 * (1 - 0.3679) = 5 * 0.6321 = 3.16 A (63.2% of steady-state). v_L(0.2) = 100 * e^-1 = 36.79 V.",
      "Step 6: Compute current and inductor voltage at t = 0.1 s: i(0.1) = 5 * (1 - e^(-5 * 0.1)) = 5 * (1 - e^-0.5) = 5 * (1 - 0.6065) = 5 * 0.3935 = 1.968 A. v_L(0.1) = 100 * e^-0.5 = 60.65 V."
    ],
    "finalAnswer": "(a) i(t) = 5*(1 - e^(-5t)) A, (b) tau = 0.2 s, (c) i(0.1s) = 1.97 A, vL(0.1s) = 60.65 V, i(tau) = 3.16 A, (d) Iss = 5.0 A",
    "units": "Amperes (A), seconds (s), and Volts (V)",
    "circuitDiagram": "\n             t=0\n         +---/ o-----[ R = 20 \u03a9 ]-----[ L = 4 H ]-----+\n         |                                            |\n     [ 100 V ]                                        |\n         |                                            |\n         +--------------------------------------------+\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": true,
    "isDifficult": false
  },
  {
    "id": "cas-num-502",
    "unitId": 5,
    "unitName": "Unit V - Transient Circuit Analysis and Laplace Transforms",
    "title": "Series RC Circuit Transient with Initial Capacitor Charge",
    "problemStatement": "In a series RC circuit, R = 50 k\u03a9 and C = 20 \u03bcF. The capacitor has an initial voltage of 30 V with polarity shown at t = 0-. At t = 0, a 120 V DC source is switched into the circuit aiding the initial voltage. Determine: (a) Time constant tau, (b) Expression for capacitor voltage vc(t) for t >= 0, (c) Initial charging current i(0+), and (d) The time required for vc(t) to reach 100 V.",
    "problemType": "RC DC Transients",
    "marks": 7,
    "years": [
      "2022",
      "2024 Test"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "DC Source Voltage: Vs = 120 V",
      "Resistance: R = 50 k\u03a9 = 50,000 \u03a9",
      "Capacitance: C = 20 \u03bcF = 20 * 10^-6 F",
      "Initial capacitor voltage: vc(0-) = vc(0+) = 30 V"
    ],
    "formula": "vc(t) = vc(\u221e) + [vc(0+) - vc(\u221e)] * e^(-t / tau); tau = R * C; i(0+) = [Vs - vc(0+)] / R.",
    "stepByStepSolution": [
      "Step 1: Compute the RC time constant: tau = R * C = 50,000 * (20 * 10^-6) = 1.0 second.",
      "Step 2: Final capacitor voltage as t -> infinity: Capacitor fully charges and acts as an open circuit: vc(\u221e) = Vs = 120 V.",
      "Step 3: Formulate capacitor voltage equation vc(t): vc(t) = 120 + (30 - 120) * e^(-t / 1.0) = 120 - 90 * e^(-t) V for t >= 0.",
      "Step 4: Compute initial loop current at t = 0+: By continuity of capacitor voltage, vc(0+) = 30 V. Applying KVL around the loop at t = 0+: Vs - i(0+)*R - vc(0+) = 0 => i(0+) = (120 - 30) / 50,000 = 90 / 50,000 = 1.8 mA.",
      "Step 5: Calculate time t when vc(t) = 100 V: 100 = 120 - 90 * e^(-t) => 90 * e^(-t) = 20 => e^(-t) = 20 / 90 = 0.2222.",
      "Step 6: Solve for t: -t = ln(0.2222) = -1.504 => t = 1.504 seconds."
    ],
    "finalAnswer": "(a) tau = 1.0 s, (b) vc(t) = 120 - 90*e^(-t) V, (c) i(0+) = 1.8 mA, (d) t = 1.504 s",
    "units": "seconds (s), Volts (V), and mA",
    "circuitDiagram": "\n             t=0\n         +---/ o-----[ 50 k\u03a9 ]-----+\n         |                         |\n     [ 120 V ]               [ C = 20 \u03bcF ]  (vc(0) = 30 V)\n         |                         |\n         +-------------------------+\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": false,
    "isDifficult": false
  },
  {
    "id": "cas-num-503",
    "unitId": 5,
    "unitName": "Unit V - Transient Circuit Analysis and Laplace Transforms",
    "title": "Series RLC Transient Characteristic Roots and Damping Classification",
    "problemStatement": "A series RLC circuit has L = 0.5 H and C = 50 \u03bcF. Determine the nature of the transient response (overdamped, critically damped, or underdamped) and the roots of the characteristic equation for three different values of resistance: (a) R = 400 \u03a9, (b) R = 200 \u03a9, and (c) R = 100 \u03a9. Also find the damped natural frequency wd in case (c).",
    "problemType": "Second-Order RLC Transients",
    "marks": 7,
    "years": [
      "2019",
      "2025 Test"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "Inductance: L = 0.5 H",
      "Capacitance: C = 50 \u03bcF = 50 * 10^-6 F",
      "Resistances: R_a = 400 \u03a9, R_b = 200 \u03a9, R_c = 100 \u03a9"
    ],
    "formula": "Characteristic equation: s^2 + (R/L)*s + 1/(LC) = 0; s^2 + 2*\u03b1*s + \u03c9o^2 = 0; \u03b1 = R / (2*L); \u03c9o = 1 / sqrt(LC); Critical resistance Rc = 2 * sqrt(L/C); Roots s1,2 = -\u03b1 \u00b1 sqrt(\u03b1^2 - \u03c9o^2).",
    "stepByStepSolution": [
      "Step 1: Compute undamped resonant frequency \u03c9o: LC = 0.5 * 50 * 10^-6 = 25 * 10^-6 s^2. \u03c9o = 1 / sqrt(25 * 10^-6) = 1 / (5 * 10^-3) = 200 rad/s. \u03c9o^2 = 40,000.",
      "Step 2: Calculate critical damping resistance Rc: Rc = 2 * sqrt(L / C) = 2 * sqrt(0.5 / (50 * 10^-6)) = 2 * sqrt(10,000) = 2 * 100 = 200 \u03a9.",
      "Step 3 (Case a - R = 400 \u03a9): Since R = 400 \u03a9 > Rc (200 \u03a9), the circuit is OVERDAMPED. Attenuation factor \u03b1 = R / (2L) = 400 / 1.0 = 400 rad/s. Roots: s1,2 = -400 \u00b1 sqrt(400^2 - 200^2) = -400 \u00b1 sqrt(160,000 - 40,000) = -400 \u00b1 sqrt(120,000) = -400 \u00b1 346.41. Roots: s1 = -53.59 s^-1, s2 = -746.41 s^-1 (two distinct real negative roots).",
      "Step 4 (Case b - R = 200 \u03a9): Since R = 200 \u03a9 = Rc, the circuit is CRITICALLY DAMPED. \u03b1 = 200 / 1.0 = 200 rad/s = \u03c9o. Discriminant \u03b1^2 - \u03c9o^2 = 0. Roots: s1,2 = -\u03b1 = -200 s^-1 (two equal real negative roots). Fastest non-oscillatory settling.",
      "Step 5 (Case c - R = 100 \u03a9): Since R = 100 \u03a9 < Rc (200 \u03a9), the circuit is UNDERDAMPED (oscillatory). \u03b1 = 100 / 1.0 = 100 rad/s. Discriminant is negative: \u03b1^2 - \u03c9o^2 = 10,000 - 40,000 = -30,000. Damped natural frequency: wd = sqrt(\u03c9o^2 - \u03b1^2) = sqrt(30,000) = 173.2 rad/s. Roots: s1,2 = -\u03b1 \u00b1 j*wd = -100 \u00b1 j173.2 s^-1 (complex conjugate pair)."
    ],
    "finalAnswer": "(a) Overdamped: s = -53.59, -746.41; (b) Critically Damped: s = -200, -200; (c) Underdamped: s = -100 \u00b1 j173.2 rad/s, wd = 173.2 rad/s",
    "units": "s^-1 and rad/s",
    "circuitDiagram": "\n             +----[ R ]----[ L = 0.5 H ]----[ C = 50 \u03bcF ]----+\n             |                                               |\n        [ Switch ]                                           |\n             |                                               |\n             +-----------------------------------------------+\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": false,
    "isDifficult": true
  },
  {
    "id": "cas-num-504",
    "unitId": 5,
    "unitName": "Unit V - Transient Circuit Analysis and Laplace Transforms",
    "title": "Laplace Transform s-Domain Circuit Solving for Zero-State Response",
    "problemStatement": "A series RLC circuit with R = 2 \u03a9, L = 1 H, and C = 0.5 F is excited by a unit step voltage source v(t) = 10*u(t) V at t = 0 with zero initial conditions (i(0-) = 0, vc(0-) = 0). (a) Draw the s-domain equivalent circuit. (b) Find the expression for loop current I(s) in the Laplace domain. (c) Take the inverse Laplace transform to obtain the time-domain current i(t) for t >= 0.",
    "problemType": "Laplace Domain Circuit Analysis",
    "marks": 7,
    "years": [
      "2023",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "givenData": [
      "Input Voltage: v(t) = 10*u(t) => V(s) = 10 / s",
      "R = 2 \u03a9, L = 1 H, C = 0.5 F",
      "Initial conditions: i(0-) = 0, vc(0-) = 0"
    ],
    "formula": "Z(s) = R + s*L + 1/(s*C); I(s) = V(s) / Z(s); i(t) = L^-1{ I(s) }.",
    "stepByStepSolution": [
      "Step 1: Set up the s-domain loop impedance: Z(s) = R + s*L + 1/(s*C) = 2 + s*(1) + 1 / (0.5*s) = s + 2 + 2/s = (s^2 + 2s + 2) / s.",
      "Step 2: Express Laplace transform of input voltage: V(s) = L{ 10*u(t) } = 10 / s.",
      "Step 3: Compute current I(s) in s-domain: I(s) = V(s) / Z(s) = (10 / s) / [ (s^2 + 2s + 2) / s ] = 10 / (s^2 + 2s + 2).",
      "Step 4: Complete the square in the quadratic denominator: s^2 + 2s + 2 = (s + 1)^2 + 1^2.",
      "Step 5: Notice the standard transform pair: L^-1{ \u03c9 / ((s + \u03b1)^2 + \u03c9^2) } = e^(-\u03b1*t) * sin(\u03c9*t) * u(t). Here \u03b1 = 1, \u03c9 = 1.",
      "Step 6: Scale by numerator constant 10: I(s) = 10 * [ 1 / ((s + 1)^2 + 1^2) ].",
      "Step 7: Perform inverse Laplace transform: i(t) = 10 * e^(-t) * sin(t) * u(t) A.",
      "Step 8: Verify initial and boundary conditions: i(0+) = 10 * e^0 * sin(0) = 0 A (consistent with inductor zero initial current!). di/dt at t=0+ = 10 * [ -e^0*sin(0) + e^0*cos(0) ] = 10 A/s. L * di/dt = 1 * 10 = 10 V (equals the 10 V step voltage applied across the inductor at t=0+!)."
    ],
    "finalAnswer": "I(s) = 10 / (s^2 + 2s + 2), i(t) = 10 * e^(-t) * sin(t) A for t >= 0",
    "units": "Amperes (A)",
    "circuitDiagram": "\n             +----[ R = 2 \u03a9 ]----[ s*L = s ]----[ 1/(sC) = 2/s ]----+\n             |                                                      |\n        [ 10 / s ]                                                  |\n             |                                                      |\n             +------------------------------------------------------+\n        ",
    "userSolution": "",
    "isCorrect": false,
    "isIndependentSolved": false,
    "attempts": 0,
    "bookmarked": false,
    "isDifficult": true
  }
];
