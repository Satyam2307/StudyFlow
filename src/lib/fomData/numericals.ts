import { FOMNumericalProblem } from '@/types/fom';

export const FOM_NUMERICAL_PROBLEMS: FOMNumericalProblem[] = [
  // --- UNIT 1 NUMERICALS ---
  {
    id: 'num-u1-1',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Voltmeter Limiting Error Calculation',
    problemType: 'Limiting Error Analysis',
    problemStatement: 'A 0–150 V voltmeter has a guaranteed accuracy of 1% of full-scale reading. The voltage measured by the instrument is 75 V. Calculate the limiting error in percentage for this reading.',
    marks: 7,
    years: ['2025', '2024'],
    givenData: [
      'Full Scale Range (V_FSD) = 150 V',
      'Accuracy Rating = ±1% of full scale',
      'Measured Voltage (V_m) = 75 V'
    ],
    formula: 'delta V = (Accuracy% / 100) * V_FSD; % Limiting Error = (delta V / V_m) * 100',
    stepByStepSolution: [
      'Step 1: Calculate the absolute magnitude of the limiting error:',
      'delta V = (1 / 100) * 150 V = ±1.5 V',
      'Step 2: Calculate the relative percentage error at the measured value of 75 V:',
      '% Error = (1.5 V / 75 V) * 100 = ±2.0%',
      'Step 3: Conclusion: The percentage error doubles when the meter is read at half scale.'
    ],
    finalAnswer: '±2.0%',
    units: '%'
  },
  {
    id: 'num-u1-2',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Ammeter Limiting Range of Current',
    problemType: 'Limiting Error Analysis',
    problemStatement: 'A 0–25 A ammeter has a guaranteed accuracy of 1.5% of full-scale reading. The current measured by this instrument is 10 A. Determine the limiting error in amperes, the percentage limiting error, and the range of true current.',
    marks: 7,
    years: ['2023'],
    givenData: [
      'Full scale current (I_FSD) = 25 A',
      'Accuracy = ±1.5% of full scale',
      'Measured current (I_m) = 10 A'
    ],
    formula: 'delta I = (1.5/100) * 25; % Error = (delta I / 10) * 100; Range = 10 ± delta I',
    stepByStepSolution: [
      'Step 1: delta I = 0.015 * 25 A = ±0.375 A',
      'Step 2: % Limiting Error = (0.375 / 10) * 100 = ±3.75%',
      'Step 3: Range of true current = 10 ± 0.375 A = [9.625 A, 10.375 A]'
    ],
    finalAnswer: '±0.375 A (±3.75%), Range: 9.625 A to 10.375 A',
    units: 'A, %'
  },
  {
    id: 'num-u1-3',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Statistical Analysis of Independent Measurements',
    problemType: 'Statistical Error Analysis',
    problemStatement: 'Six independent current measurements are: 12.8 mA, 12.2 mA, 12.5 mA, 13.1 mA, 12.9 mA, and 12.4 mA. Find the mean, range of error, average deviation, and standard deviation.',
    marks: 7,
    years: ['2022'],
    givenData: [
      'Readings: 12.8, 12.2, 12.5, 13.1, 12.9, 12.4 mA',
      'Sample size: n = 6'
    ],
    formula: 'Mean = sum(x)/n; Range = max - min; D = sum(|d_i|)/n; s = sqrt(sum(d_i^2)/(n-1))',
    stepByStepSolution: [
      'Step 1: Mean = (12.8 + 12.2 + 12.5 + 13.1 + 12.9 + 12.4) / 6 = 75.9 / 6 = 12.65 mA',
      'Step 2: Range = 13.1 - 12.2 = 0.9 mA',
      'Step 3: Deviations: +0.15, -0.45, -0.15, +0.45, +0.25, -0.25. Sum(|d|) = 1.70 mA',
      'Step 4: Average Deviation D = 1.70 / 6 = 0.283 mA',
      'Step 5: Sum(d^2) = 0.575. s = sqrt(0.575 / 5) = sqrt(0.115) = 0.339 mA'
    ],
    finalAnswer: 'Mean: 12.65 mA, Range: 0.9 mA, s: 0.339 mA',
    units: 'mA'
  },

  // --- UNIT 2 NUMERICALS ---
  {
    id: 'num-u2-1',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Electron Beam Velocity and Transit Time',
    problemType: 'CRT Electron Ballistics',
    problemStatement: 'In a CRT, accelerating anode voltage is 2000 V. Find the beam velocity and transit time through 2.5 cm long deflecting plates.',
    marks: 7,
    years: ['2022'],
    givenData: [
      'Accelerating voltage (V_a) = 2000 V',
      'Plate length (l) = 2.5 cm = 0.025 m',
      'e/m = 1.7588 * 10^11 C/kg'
    ],
    formula: 'v = sqrt(2 * (e/m) * V_a); t = l / v',
    stepByStepSolution: [
      'Step 1: v = sqrt(2 * 1.7588 * 10^11 * 2000) = sqrt(7.0352 * 10^14) = 2.652 * 10^7 m/s',
      'Step 2: t = 0.025 m / (2.652 * 10^7 m/s) = 9.425 * 10^-10 s = 0.943 ns'
    ],
    finalAnswer: 'Velocity: 2.652 × 10⁷ m/s, Transit Time: 0.943 ns',
    units: 'm/s, ns'
  },
  {
    id: 'num-u2-2',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Bandwidth from Signal Rise Time',
    problemType: 'Oscilloscope Dynamic Response',
    problemStatement: 'An oscilloscope vertical amplifier input has R = 1 MΩ in parallel with C = 25 pF. Determine cutoff frequency. If measuring a pulse with rise time 10 ns, find the required oscilloscope bandwidth.',
    marks: 7,
    years: ['2023'],
    givenData: [
      'R_in = 1 MΩ, C_in = 25 pF',
      'Signal rise time t_r = 10 ns'
    ],
    formula: 'f_c = 1 / (2 * pi * R * C); Bandwidth = 0.35 / t_r',
    stepByStepSolution: [
      'Step 1: f_c = 1 / (2 * pi * 10^6 * 25 * 10^-12) = 6366 Hz = 6.366 kHz',
      'Step 2: Bandwidth required = 0.35 / (10 * 10^-9) = 35 MHz'
    ],
    finalAnswer: 'Cutoff: 6.366 kHz, Required BW: 35 MHz',
    units: 'kHz, MHz'
  },
  {
    id: 'num-u2-3',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Amplitude, RMS and Frequency from CRO Screen',
    problemType: 'Waveform Measurements',
    problemStatement: 'A sine wave trace occupies 4.8 vertical divisions at 50 mV/div with a 10:1 probe. One cycle spans 5 horizontal divisions at 0.2 ms/div. Find V_pp, V_m, V_rms, and frequency.',
    marks: 7,
    years: ['2025', '2022'],
    givenData: [
      'Height = 4.8 div, Sensitivity = 50 mV/div, Probe = 10:1',
      'Cycle length = 5 div, Time base = 0.2 ms/div'
    ],
    formula: 'V_pp = div * Sens * Probe; V_m = V_pp / 2; V_rms = V_m / sqrt(2); f = 1 / (div * TimeBase)',
    stepByStepSolution: [
      'Step 1: V_pp = 4.8 * 50 mV * 10 = 2400 mV = 2.40 V',
      'Step 2: V_m = 2.40 / 2 = 1.20 V; V_rms = 1.20 / 1.4142 = 0.849 V',
      'Step 3: T = 5 * 0.2 ms = 1.0 ms. f = 1 / 1.0 ms = 1000 Hz = 1.0 kHz'
    ],
    finalAnswer: 'V_pp = 2.4 V, V_rms = 0.849 V, f = 1.0 kHz',
    units: 'V, kHz'
  },

  // --- UNIT 3 NUMERICALS ---
  {
    id: 'num-u3-1',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'PMMC Multiplier Resistor Design',
    problemType: 'PMMC Range Extension',
    problemStatement: 'A 1 mA meter movement has internal resistance 100 Ω. Calculate the multiplier resistance required for 10 V, 50 V, and 250 V ranges. Find the meter sensitivity.',
    marks: 7,
    years: ['2025'],
    givenData: [
      'I_m = 1 mA = 0.001 A',
      'R_m = 100 Ω',
      'Target Ranges: 10 V, 50 V, 250 V'
    ],
    formula: 'R_se = (V / I_m) - R_m; Sensitivity = 1 / I_m',
    stepByStepSolution: [
      'Step 1: Sensitivity = 1 / 0.001 A = 1000 Ω/V',
      'Step 2: For 10 V: R_se = (10 / 0.001) - 100 = 10,000 - 100 = 9,900 Ω = 9.9 kΩ',
      'Step 3: For 50 V: R_se = (50 / 0.001) - 100 = 50,000 - 100 = 49,900 Ω = 49.9 kΩ',
      'Step 4: For 250 V: R_se = (250 / 0.001) - 100 = 250,000 - 100 = 249,900 Ω = 249.9 kΩ'
    ],
    finalAnswer: 'R_se: 9.9 kΩ, 49.9 kΩ, 249.9 kΩ; Sensitivity: 1000 Ω/V',
    units: 'kΩ, Ω/V'
  },
  {
    id: 'num-u3-2',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Galvanometer to Ammeter Shunt Resistor',
    problemType: 'PMMC Range Extension',
    problemStatement: 'A galvanometer with R_m = 50 Ω and full scale current 2 mA is converted into an ammeter for 1 A, 5 A, and 10 A. Find the required shunt resistances.',
    marks: 7,
    years: ['2023'],
    givenData: [
      'R_m = 50 Ω, I_m = 2 mA = 0.002 A',
      'Ranges: 1 A, 5 A, 10 A'
    ],
    formula: 'R_sh = R_m / (m - 1) where m = I / I_m',
    stepByStepSolution: [
      'Step 1: For 1 A: m = 1 / 0.002 = 500. R_sh = 50 / 499 = 0.1002 Ω',
      'Step 2: For 5 A: m = 5 / 0.002 = 2500. R_sh = 50 / 2499 = 0.0200 Ω',
      'Step 3: For 10 A: m = 10 / 0.002 = 5000. R_sh = 50 / 4999 = 0.0100 Ω'
    ],
    finalAnswer: '0.1002 Ω (1A), 0.0200 Ω (5A), 0.0100 Ω (10A)',
    units: 'Ω'
  },

  // --- UNIT 4 NUMERICALS ---
  {
    id: 'num-u4-1',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Kelvin Double Bridge Unknown Low Resistance',
    problemType: 'Low Resistance Bridge',
    problemStatement: 'In a Kelvin double bridge: P/Q = 1000/1000 = 1; p/q = 1000/1002; S = 0.001 Ω; link r = 0.005 Ω. Calculate unknown resistance R and percentage discrepancy.',
    marks: 7,
    years: ['2024'],
    givenData: [
      'P/Q = 1.0, p/q = 1000/1002 = 0.9980',
      'S = 0.001 Ω, r = 0.005 Ω'
    ],
    formula: 'R = (P/Q) * S + [q*r / (p+q+r)] * (P/Q - p/q)',
    stepByStepSolution: [
      'Step 1: Main term = 1.0 * 0.001 = 0.001000 Ω',
      'Step 2: Error term = [1002 * 0.005 / 2002.005] * [1 - 1000/1002] = 0.002502 * 0.001996 = 0.000005 Ω',
      'Step 3: Total R = 0.001000 + 0.000005 = 0.001005 Ω = 1.005 mΩ',
      'Step 4: Percentage discrepancy = (0.001005 - 0.001000)/0.001 * 100 = +0.50%'
    ],
    finalAnswer: 'R = 1.005 mΩ (Discrepancy: +0.50%)',
    units: 'mΩ, %'
  },
  {
    id: 'num-u4-2',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Two-Wattmeter Power and Power Factor Calculation',
    problemType: '3-Phase Power Measurement',
    problemStatement: 'Two wattmeters measure 3-phase motor power as W₁ = 5.0 kW and W₂ = 1.2 kW at 400 V. Find total active power, power factor, reactive power, and line current.',
    marks: 7,
    years: ['2023'],
    givenData: [
      'W_1 = 5.0 kW, W_2 = 1.2 kW',
      'V_L = 400 V, f = 50 Hz'
    ],
    formula: 'P = W_1 + W_2; tan(phi) = sqrt(3) * (W_1 - W_2) / (W_1 + W_2); pf = cos(phi); Q = sqrt(3)*(W_1 - W_2)',
    stepByStepSolution: [
      'Step 1: Total Power P = 5.0 + 1.2 = 6.20 kW',
      'Step 2: tan(phi) = 1.73205 * (3.8 / 6.2) = 1.0616 => phi = 46.71 deg',
      'Step 3: Power Factor = cos(46.71 deg) = 0.6857 lagging',
      'Step 4: Reactive Power Q = 1.73205 * 3.8 kW = 6.582 kVAR',
      'Step 5: Line Current I_L = 6200 / (sqrt(3) * 400 * 0.6857) = 13.05 A'
    ],
    finalAnswer: 'P = 6.2 kW, pf = 0.686 lagging, Q = 6.58 kVAR, I_L = 13.05 A',
    units: 'kW, kVAR, A'
  },
  {
    id: 'num-u4-3',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Two-Wattmeter Method with Reversed Polarities',
    problemType: '3-Phase Power Measurement',
    problemStatement: 'In a 3-phase load test, W₁ reads 10 kW and W₂ reads 2.5 kW after reversing current coil connections. Find total power and power factor.',
    marks: 7,
    years: ['2024', '2022'],
    givenData: [
      'W_1 = +10.0 kW, W_2 = -2.5 kW'
    ],
    formula: 'P = W_1 + W_2; tan(phi) = sqrt(3) * (W_1 - W_2) / (W_1 + W_2)',
    stepByStepSolution: [
      'Step 1: Total Power P = 10.0 + (-2.5) = 7.50 kW',
      'Step 2: W_1 - W_2 = 10 - (-2.5) = 12.5 kW; W_1 + W_2 = 7.5 kW',
      'Step 3: tan(phi) = sqrt(3) * (12.5 / 7.5) = 2.8868 => phi = 70.89 deg',
      'Step 4: Power Factor = cos(70.89 deg) = 0.3274 lagging'
    ],
    finalAnswer: 'Total Power: 7.50 kW, Power Factor: 0.327 lagging',
    units: 'kW'
  },

  // --- UNIT 5 NUMERICALS ---
  {
    id: 'num-u5-1',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Maxwell\'s L-C Bridge Inductance and Quality Factor',
    problemType: 'AC Bridge Calculations',
    problemStatement: 'A Maxwell L-C bridge at 1000 Hz balance has: R₂ = 1000 Ω, R₃ = 1000 Ω, R₄ = 1000 Ω, and C₄ = 0.5 μF. Calculate unknown inductance L₁, resistance R₁, and Q-factor.',
    marks: 7,
    years: ['2024', '2023'],
    givenData: [
      'f = 1000 Hz, R_2 = R_3 = R_4 = 1000 Ω, C_4 = 0.5 μF'
    ],
    formula: 'L_1 = R_2 * R_3 * C_4; R_1 = (R_2 * R_3) / R_4; Q = omega * C_4 * R_4',
    stepByStepSolution: [
      'Step 1: L_1 = 1000 * 1000 * (0.5 * 10^-6) = 0.50 H',
      'Step 2: R_1 = (1000 * 1000) / 1000 = 1000 Ω',
      'Step 3: Q = 2 * pi * 1000 * (0.5 * 10^-6) * 1000 = 3.1416'
    ],
    finalAnswer: 'L₁ = 0.50 H, R₁ = 1000 Ω, Q = 3.14',
    units: 'H, Ω'
  },
  {
    id: 'num-u5-2',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Hay\'s Bridge High-Q Coil Inductance',
    problemType: 'AC Bridge Calculations',
    problemStatement: 'A Hay bridge at 1000 Hz has R₂ = 1000 Ω, R₃ = 1000 Ω, C₄ = 0.1 μF, and R₄ = 20 Ω. Calculate L₁, R₁, and Q.',
    marks: 7,
    years: ['2023'],
    givenData: [
      'f = 1000 Hz, R_2 = R_3 = 1000 Ω, C_4 = 0.1 μF, R_4 = 20 Ω'
    ],
    formula: 'Q = 1 / (omega * C_4 * R_4); L_1 = R_2*R_3*C_4 / [1 + (1/Q)^2]; R_1 = omega*L_1 / Q',
    stepByStepSolution: [
      'Step 1: omega = 2 * pi * 1000 = 6283.2 rad/s',
      'Step 2: Q = 1 / (6283.2 * 10^-7 * 20) = 79.58',
      'Step 3: 1 + (1/Q)^2 = 1 + 0.000158 = 1.000158',
      'Step 4: L_1 = 0.1 / 1.000158 = 0.09998 H = 100 mH',
      'Step 5: R_1 = (6283.2 * 0.1) / 79.58 = 7.89 Ω'
    ],
    finalAnswer: 'L₁ = 100 mH, R₁ = 7.89 Ω, Q = 79.6',
    units: 'mH, Ω'
  },
  {
    id: 'num-u5-3',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Schering Bridge Capacitance and Loss Factor',
    problemType: 'AC Bridge Calculations',
    problemStatement: 'A Schering bridge at 50 Hz balance has C₂ = 100 pF, R₃ = 1000/π Ω, R₄ = 200/π Ω, and C₄ = 0.5 μF. Calculate C₁, r₁, dissipation factor D, and loss angle.',
    marks: 7,
    years: ['2022'],
    givenData: [
      'f = 50 Hz, C_2 = 100 pF, R_3 = 1000/pi Ω, R_4 = 200/pi Ω, C_4 = 0.5 μF'
    ],
    formula: 'C_1 = C_2 * (R_4 / R_3); r_1 = R_3 * (C_4 / C_2); D = omega * C_4 * R_4',
    stepByStepSolution: [
      'Step 1: C_1 = 100 pF * (200 / 1000) = 20.0 pF',
      'Step 2: r_1 = (1000 / pi) * (0.5 * 10^-6 / 100 * 10^-12) = (1000 / pi) * 5000 = 1.5915 MΩ',
      'Step 3: D = 100 * pi * 0.5 * 10^-6 * (200 / pi) = 0.010',
      'Step 4: delta = tan^-1(0.010) = 0.573 deg'
    ],
    finalAnswer: 'C₁ = 20.0 pF, r₁ = 1.59 MΩ, D = 0.010, delta = 0.573°',
    units: 'pF, MΩ, °'
  },
  {
    id: 'num-u5-4',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Wien Bridge Frequency Determination',
    problemType: 'Frequency Measurement',
    problemStatement: 'In a Wien bridge, R₁ = R₂ = 10 kΩ, C₁ = C₂ = 0.01 μF, and R₃ = 1 kΩ. Calculate balancing frequency f and required R₄.',
    marks: 7,
    years: ['2022'],
    givenData: [
      'R = 10 kΩ, C = 0.01 μF, R_3 = 1 kΩ'
    ],
    formula: 'f = 1 / (2 * pi * R * C); R_4 = 2 * R_3',
    stepByStepSolution: [
      'Step 1: f = 1 / (2 * pi * 10,000 * 10^-8) = 1 / (2 * pi * 10^-4) = 1591.55 Hz',
      'Step 2: R_4 = 2 * R_3 = 2 * 1000 Ω = 2000 Ω = 2.0 kΩ'
    ],
    finalAnswer: 'Frequency = 1.592 kHz, R₄ = 2.0 kΩ',
    units: 'kHz, kΩ'
  }
];
