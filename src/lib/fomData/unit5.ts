import { FOMQuestion } from '@/types/fom';

export const UNIT_5_QUESTIONS: FOMQuestion[] = [
  // --- 7-MARK QUESTIONS ---
  {
    id: 'fom-u5-q1',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Maxwell\'s Inductance Bridge and Balance Derivation',
    questionText: 'Explain Maxwell\'s inductance bridge and derive its balance equation.',
    marks: 7,
    priority: 'very_high',
    type: 'derivation',
    years: ['2022', '2019'],
    frequency: 'Repeated 2 times in 7M bridge papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Maxwell\'s Inductance Bridge Summary:
- Compares unknown inductor ($L_1, R_1$) against a known standard variable inductor ($L_2$).
- Balance Equations:
  $$L_1 = L_2 \\left(\\frac{R_3}{R_4}\\right)$$
  $$R_1 = R_2 \\left(\\frac{R_3}{R_4}\\right)$$
- If $R_3 = R_4$, then $L_1 = L_2$ and $R_1 = R_2$.
- Limitation: Requires a bulky, calibrated standard variable inductor ($L_2$), which is expensive and subject to mutual coupling.`,
      examAnswer: `### 1. Introduction
Maxwell\'s Inductance Bridge measures an unknown self-inductance and associated internal resistance by direct comparison with a calibrated standard variable self-inductor.

---

### 2. Bridge Circuit Arm Configuration
- **Arm 1 (AB)**: Unknown inductor with inductance $L_1$ and effective resistance $R_1$.
  $$\\mathbf{Z}_1 = R_1 + j \\omega L_1$$
- **Arm 2 (AD)**: Known standard variable inductor with inductance $L_2$ and variable series resistor $R_2$.
  $$\\mathbf{Z}_2 = R_2 + j \\omega L_2$$
- **Arm 3 (BC)**: Known non-inductive decade resistance $R_3$.
  $$\\mathbf{Z}_3 = R_3$$
- **Arm 4 (CD)**: Known non-inductive decade resistance $R_4$.
  $$\\mathbf{Z}_4 = R_4$$
- AC source (audio oscillator, e.g., $1000\\text{ Hz}$) connected across AC.
- Null detector (headphones or tuned AC amplifier detector) connected across BD.

---

### 3. Derivation of Balance Equations
The fundamental general balance equation for any four-arm AC bridge is:
$$\\mathbf{Z}_1 \\mathbf{Z}_4 = \\mathbf{Z}_2 \\mathbf{Z}_3$$

Substitute arm impedances:
$$(R_1 + j \\omega L_1) R_4 = (R_2 + j \\omega L_2) R_3$$
$$R_1 R_4 + j \\omega L_1 R_4 = R_2 R_3 + j \\omega L_2 R_3$$

Equating real parts (resistive balance):
$$R_1 R_4 = R_2 R_3$$
$$\\mathbf{R_1 = R_2 \\left(\\frac{R_3}{R_4}\\right)}$$

Equating imaginary parts (reactive balance):
$$\\omega L_1 R_4 = \\omega L_2 R_3$$
$$\\mathbf{L_1 = L_2 \\left(\\frac{R_3}{R_4}\\right)}$$

---

### 4. Phasor Diagram at Balance
- Reference phasor: Current $\\mathbf{I}_1 = \\mathbf{I}_3$ through branch ABC.
- Voltage drop $\\mathbf{V}_{BC} = \\mathbf{I}_1 R_3$.
- Voltage drop $\\mathbf{V}_{AB} = \\mathbf{I}_1 R_1 + j \\mathbf{I}_1 (\\omega L_1)$.
- Total voltage $\\mathbf{V} = \\mathbf{V}_{AB} + \\mathbf{V}_{BC}$.
- At null balance, detector potential difference is zero ($V_B = V_D$).
- Branch ADC current $\\mathbf{I}_2 = \\mathbf{I}_4$ creates in-phase drop $\\mathbf{I}_2 R_4 = \\mathbf{I}_1 R_3$ and $\\mathbf{I}_2 (R_2 + j \\omega L_2) = \\mathbf{I}_1 (R_1 + j \\omega L_1)$.

---

### 5. Merits and Demerits
- **Merit**: Balance equations are completely independent of frequency ($\\omega$ cancels out).
- **Demerit**: Requires a calibrated variable standard inductor ($L_2$), which is bulky, prone to stray magnetic coupling, and costly.`,
      detailedLearning: `This limitation led directly to the invention of Maxwell\'s Inductance-Capacitance bridge, which replaces $L_2$ with an inexpensive, accurate standard mica capacitor.`
    }
  },
  {
    id: 'fom-u5-q2',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Maxwell\'s Inductance-Capacitance Bridge Derivation',
    questionText: 'Derive the expression for measuring unknown capacitance using Maxwell\'s capacitance bridge.',
    marks: 7,
    priority: 'very_high',
    type: 'derivation',
    years: ['2023', '2022', '2019'],
    frequency: 'Repeated 3 times (Top Priority recurring bridge question)',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Maxwell L-C Bridge Formulas:
- Balance Equations:
  $$L_1 = R_2 R_3 C_4$$
  $$R_1 = \\frac{R_2 R_3}{R_4}$$
- Quality Factor:
  $$Q = \\frac{\\omega L_1}{R_1} = \\omega C_4 R_4$$
- Useful range: Medium Q coils ($1 < Q < 10$).
- Standard component: Fixed standard mica capacitor $C_4$.`,
      examAnswer: `### 1. Introduction
Maxwell\'s Inductance-Capacitance Bridge measures an unknown self-inductance $L_1$ and effective resistance $R_1$ in terms of a known standard fixed capacitor $C_4$ and decade resistors.

---

### 2. Bridge Arm Impedances
- **Arm 1 (AB)**: Unknown coil with series inductance $L_1$ and resistance $R_1$:
  $$\\mathbf{Z}_1 = R_1 + j \\omega L_1$$
- **Arm 2 (AD)**: Pure non-inductive precision resistor $R_2$:
  $$\\mathbf{Z}_2 = R_2$$
- **Arm 3 (BC)**: Pure non-inductive precision resistor $R_3$:
  $$\\mathbf{Z}_3 = R_3$$
- **Arm 4 (CD)**: Parallel combination of standard variable capacitor $C_4$ and decade resistor $R_4$:
  $$\\mathbf{Y}_4 = \\frac{1}{R_4} + j \\omega C_4 \\implies \\mathbf{Z}_4 = \\frac{1}{\\mathbf{Y}_4} = \\frac{R_4}{1 + j \\omega C_4 R_4}$$

---

### 3. Derivation of Balance Condition
At bridge balance:
$$\\mathbf{Z}_1 \\mathbf{Z}_4 = \\mathbf{Z}_2 \\mathbf{Z}_3 \\implies \\mathbf{Z}_1 = \\mathbf{Z}_2 \\mathbf{Z}_3 \\mathbf{Y}_4$$

Substitute impedances:
$$R_1 + j \\omega L_1 = R_2 R_3 \\left(\\frac{1}{R_4} + j \\omega C_4\\right)$$
$$R_1 + j \\omega L_1 = \\frac{R_2 R_3}{R_4} + j \\omega (R_2 R_3 C_4)$$

Equating real parts:
$$\\mathbf{R_1 = \\frac{R_2 R_3}{R_4}}$$

Equating imaginary parts:
$$\\omega L_1 = \\omega R_2 R_3 C_4$$
$$\\mathbf{L_1 = R_2 R_3 C_4}$$

---

### 4. Quality Factor ($Q$) of the Coil
$$Q = \\frac{\\omega L_1}{R_1} = \\frac{\\omega (R_2 R_3 C_4)}{\\left(\\frac{R_2 R_3}{R_4}\\right)} = \\mathbf{\\omega C_4 R_4}$$

---

### 5. Critical Observations:
1. **Independent Balance**: Adjusting $R_4$ achieves resistive balance ($R_1$) without disturbing the reactive balance ($L_1$), since $R_4$ does not appear in the equation for $L_1$!
2. **Frequency Independent**: The balance equations are independent of excitation frequency $\\omega$.
3. **Suitability Range ($1 < Q < 10$)**:
   - For low Q ($Q < 1$), balance convergence is sliding and slow.
   - For high Q ($Q > 10$), $R_4 = Q / (\\omega C_4)$ becomes impractically huge ($> 1\\text{ M}\\Omega$). Hence, Hay\'s bridge is preferred for high Q.`,
      detailedLearning: `A fixed standard mica capacitor is far superior to a variable inductor because capacitors have negligible stray magnetic fields and zero aging drift.`
    }
  },
  {
    id: 'fom-u5-q3',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Schering Bridge for Capacitance and Dielectric Loss',
    questionText: 'Draw and explain Schering bridge. Derive its balance equation and explain its applications.',
    marks: 7,
    priority: 'very_high',
    type: 'derivation',
    years: ['2023', '2022', '2019'],
    frequency: 'Repeated 3 times (Top Priority recurring bridge derivation)',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Schering Bridge Summary:
- Measures unknown capacitance $C_1$ and dielectric dissipation factor ($D = \\tan \\delta$).
- Balance Equations:
  $$C_1 = C_2 \\left(\\frac{R_4}{R_3}\\right)$$
  $$r_1 = R_3 \\left(\\frac{C_4}{C_2}\\right)$$
- Dissipation Factor:
  $$D = \\tan \\delta = \\omega C_1 r_1 = \\omega C_4 R_4$$
- Applications: High-voltage cable testing, transformer bushing insulation diagnosis, relative permittivity measurement.`,
      examAnswer: `### 1. Introduction
The Schering Bridge is one of the most widely used AC bridge circuits for measuring unknown capacitance, dielectric loss, and dissipation factor ($D = \\tan \\delta$) of insulating materials and high-voltage cables.

---

### 2. Circuit Configuration
- **Arm 1 (AB)**: Unknown capacitor under test with capacitance $C_1$ and equivalent series resistance $r_1$:
  $$\\mathbf{Z}_1 = r_1 + \\frac{1}{j \\omega C_1} = r_1 - \\frac{j}{\\omega C_1}$$
- **Arm 2 (AD)**: Standard loss-free air/gas capacitor $C_2$ (dielectric loss $\\approx 0$):
  $$\\mathbf{Z}_2 = \\frac{1}{j \\omega C_2} = -\\frac{j}{\\omega C_2}$$
- **Arm 3 (BC)**: Non-inductive precision decade resistor $R_3$:
  $$\\mathbf{Z}_3 = R_3$$
- **Arm 4 (CD)**: Parallel combination of variable non-inductive resistor $R_4$ and variable standard mica capacitor $C_4$:
  $$\\mathbf{Y}_4 = \\frac{1}{R_4} + j \\omega C_4$$

---

### 3. Derivation of Balance Equations
General balance condition:
$$\\mathbf{Z}_1 \\mathbf{Z}_4 = \\mathbf{Z}_2 \\mathbf{Z}_3 \\implies \\mathbf{Z}_1 = \\mathbf{Z}_2 \\mathbf{Z}_3 \\mathbf{Y}_4$$

Substitute:
$$r_1 - \\frac{j}{\\omega C_1} = \\left(-\\frac{j}{\\omega C_2}\\right) R_3 \\left(\\frac{1}{R_4} + j \\omega C_4\\right)$$
$$r_1 - \\frac{j}{\\omega C_1} = -\\frac{j R_3}{\\omega C_2 R_4} - \\frac{j^2 \\omega C_4 R_3}{\\omega C_2}$$
Since $j^2 = -1$:
$$r_1 - \\frac{j}{\\omega C_1} = \\frac{C_4 R_3}{C_2} - j \\left(\\frac{R_3}{\\omega C_2 R_4}\\right)$$

Equating real parts:
$$\\mathbf{r_1 = R_3 \\left(\\frac{C_4}{C_2}\\right)}$$

Equating imaginary parts:
$$\\frac{1}{\\omega C_1} = \\frac{R_3}{\\omega C_2 R_4} \\implies \\mathbf{C_1 = C_2 \\left(\\frac{R_4}{R_3}\\right)}$$

---

### 4. Dissipation Factor ($D = \\tan \\delta$)
The dissipation factor (dielectric loss tangent) is:
$$D = \\tan \\delta = \\omega C_1 r_1$$
Substitute $C_1$ and $r_1$:
$$D = \\omega \\left[C_2 \\left(\\frac{R_4}{R_3}\\right)\\right] \\left[R_3 \\left(\\frac{C_4}{C_2}\\right)\\right] = \\mathbf{\\omega C_4 R_4}$$
**Remarkable Feature**: If frequency $\\omega$ and resistance $R_4$ are kept fixed, the dial of capacitor $C_4$ can be calibrated directly to read dissipation factor $\\tan \\delta$!

---

### 5. Industrial Applications:
1. **High-Voltage Insulation Testing**: Used at $10\\text{ kV}$ to $500\\text{ kV}$ to measure power factor of power cables and transformer bushings.
2. **Relative Permittivity ($\\epsilon_r$)**: By measuring capacitance with test dielectric ($C_x$) and without ($C_0$), $\\epsilon_r = C_x / C_0$.`,
      detailedLearning: `In high-voltage Schering bridges, the low-voltage arms (Arms 3 and 4) are kept at near ground potential, protecting the operator from lethal high voltages.`
    }
  },
  {
    id: 'fom-u5-q4',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Wien Bridge Balance Equation and Frequency Measurement',
    questionText: 'Explain Wien bridge with its balance equation and application in frequency measurement.',
    marks: 7,
    priority: 'high',
    type: 'derivation',
    years: ['2022', '2019'],
    frequency: 'Repeated 2 times in 7M bridge papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Wien Bridge Formulas:
- Balance conditions:
  $$f = \\frac{1}{2 \\pi \\sqrt{R_1 R_2 C_1 C_2}}$$
  $$\\frac{R_4}{R_3} = \\frac{R_1}{R_2} + \\frac{C_2}{C_1}$$
- When components are identical ($R_1 = R_2 = R, C_1 = C_2 = C$):
  $$f = \\frac{1}{2 \\pi R C}$$
  $$R_4 = 2 R_3$$
- Applications: Audio frequency measurement ($10\\text{ Hz} - 100\\text{ kHz}$), lead-lag oscillator feedback network.`,
      examAnswer: `### 1. Introduction
The Wien Bridge is primarily used for the precise measurement of audio frequencies, as a notch filter, and as the frequency-determining feedback network in low-distortion RC audio oscillators.

---

### 2. Circuit Configuration
- **Arm 1 (AB)**: Series combination of resistor $R_1$ and capacitor $C_1$:
  $$\\mathbf{Z}_1 = R_1 + \\frac{1}{j \\omega C_1} = \\frac{1 + j \\omega C_1 R_1}{j \\omega C_1}$$
- **Arm 2 (BC)**: Parallel combination of resistor $R_2$ and capacitor $C_2$:
  $$\\mathbf{Z}_2 = \\frac{R_2}{1 + j \\omega C_2 R_2}$$
- **Arm 3 (AD)**: Pure non-inductive resistor $R_3$.
- **Arm 4 (CD)**: Pure non-inductive resistor $R_4$.

---

### 3. Derivation of Balance Equations
General balance condition:
$$\\mathbf{Z}_1 \\mathbf{Z}_4 = \\mathbf{Z}_2 \\mathbf{Z}_3 \\implies \\frac{\\mathbf{Z}_1}{\\mathbf{Z}_2} = \\frac{R_3}{R_4}$$

Substitute expressions:
$$\\frac{\\frac{1 + j \\omega C_1 R_1}{j \\omega C_1}}{\\frac{R_2}{1 + j \\omega C_2 R_2}} = \\frac{R_3}{R_4}$$
$$\\frac{(1 + j \\omega C_1 R_1)(1 + j \\omega C_2 R_2)}{j \\omega C_1 R_2} = \\frac{R_3}{R_4}$$
$$[1 - \\omega^2 C_1 C_2 R_1 R_2] + j \\omega [C_1 R_1 + C_2 R_2] = j \\omega C_1 R_2 \\left(\\frac{R_3}{R_4}\\right)$$

Equating real parts to zero:
$$1 - \\omega^2 C_1 C_2 R_1 R_2 = 0$$
$$\\omega^2 = \\frac{1}{C_1 C_2 R_1 R_2}$$
$$\\mathbf{f = \\frac{1}{2 \\pi \\sqrt{R_1 R_2 C_1 C_2}}}$$

Equating imaginary parts:
$$\\omega [C_1 R_1 + C_2 R_2] = \\omega C_1 R_2 \\left(\\frac{R_3}{R_4}\\right)$$
Dividing by $\\omega C_1 R_2$:
$$\\mathbf{\\frac{R_4}{R_3} = \\frac{R_1}{R_2} + \\frac{C_2}{C_1}}$$

---

### 4. Symmetrical Design Case ($R_1 = R_2 = R, C_1 = C_2 = C$):
In practical commercial frequency meters:
$$\\mathbf{f = \\frac{1}{2 \\pi R C}}$$
$$\\frac{R_4}{R_3} = 1 + 1 = 2 \\implies \\mathbf{R_4 = 2 R_3}$$
By using a two-gang variable resistor for $R$, the frequency scale is calibrated directly ($f \\propto 1/R$).`,
      detailedLearning: `Wien bridge oscillators utilize this balance condition: at balance, transfer gain is $1/3$ and phase shift is $0^{\\circ}$, satisfying Barkhausen criteria with an amplifier gain of $3$.`
    }
  },
  {
    id: 'fom-u5-q5',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Hay\'s Bridge for High-Q Inductor Measurement',
    questionText: 'Explain Hay\'s bridge and derive the conditions for balance.',
    marks: 7,
    priority: 'high',
    type: 'derivation',
    years: ['2023'],
    frequency: 'Appeared in 2023 7M paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: true,
    answer: {
      quickRevision: `### Hay\'s Bridge Summary:
- Used for HIGH Q coils ($Q > 10$).
- Arm 4 has series $R_4 - C_4$ (unlike Maxwell which has parallel $R_4 \\parallel C_4$).
- Balance Equations:
  $$L_1 = \\frac{R_2 R_3 C_4}{1 + \\omega^2 C_4^2 R_4^2} = \\frac{R_2 R_3 C_4}{1 + (1/Q)^2}$$
  $$R_1 = \\frac{\\omega^2 C_4^2 R_2 R_3 R_4}{1 + \\omega^2 C_4^2 R_4^2}$$
- For $Q > 10$, $(1/Q)^2 < 0.01 \\implies L_1 \\approx R_2 R_3 C_4$ (independent of frequency!).`,
      examAnswer: `### 1. Introduction
Hay\'s Bridge is a specialized AC bridge developed specifically to measure the self-inductance and resistance of **high-Q coils** ($Q > 10$). It replaces the parallel RC combination of Maxwell\'s bridge with a **series RC combination**.

---

### 2. Circuit Arm Configuration
- **Arm 1 (AB)**: Unknown high-Q inductor ($L_1, R_1$):
  $$\\mathbf{Z}_1 = R_1 + j \\omega L_1$$
- **Arm 2 (AD)**: Pure precision resistor $R_2$:
  $$\\mathbf{Z}_2 = R_2$$
- **Arm 3 (BC)**: Pure precision resistor $R_3$:
  $$\\mathbf{Z}_3 = R_3$$
- **Arm 4 (CD)**: Series combination of variable resistor $R_4$ and standard capacitor $C_4$:
  $$\\mathbf{Z}_4 = R_4 + \\frac{1}{j \\omega C_4} = R_4 - \\frac{j}{\\omega C_4}$$

---

### 3. Derivation of Balance Conditions
General balance equation:
$$\\mathbf{Z}_1 \\mathbf{Z}_4 = \\mathbf{Z}_2 \\mathbf{Z}_3$$
$$(R_1 + j \\omega L_1) \\left(R_4 - \\frac{j}{\\omega C_4}\\right) = R_2 R_3$$
$$R_1 R_4 - \\frac{j R_1}{\\omega C_4} + j \\omega L_1 R_4 + \\frac{L_1}{C_4} = R_2 R_3$$
$$\\left(R_1 R_4 + \\frac{L_1}{C_4}\\right) + j \\left(\\omega L_1 R_4 - \\frac{R_1}{\\omega C_4}\\right) = R_2 R_3 + j 0$$

Equating imaginary parts:
$$\\omega L_1 R_4 - \\frac{R_1}{\\omega C_4} = 0 \\implies R_1 = \\omega^2 L_1 C_4 R_4 \\quad \\text{--- (Equation 1)}$$

Equating real parts:
$$R_1 R_4 + \\frac{L_1}{C_4} = R_2 R_3 \\quad \\text{--- (Equation 2)}$$

Substitute Equation 1 into Equation 2:
$$(\\omega^2 L_1 C_4 R_4) R_4 + \\frac{L_1}{C_4} = R_2 R_3$$
$$L_1 \\left(\\omega^2 C_4 R_4^2 + \\frac{1}{C_4}\\right) = R_2 R_3$$
$$L_1 \\left(\\frac{1 + \\omega^2 C_4^2 R_4^2}{C_4}\\right) = R_2 R_3$$
$$\\mathbf{L_1 = \\frac{R_2 R_3 C_4}{1 + \\omega^2 C_4^2 R_4^2}} \\quad \\text{--- (Equation 3)}$$

Substitute $L_1$ back into Equation 1:
$$\\mathbf{R_1 = \\frac{\\omega^2 C_4^2 R_2 R_3 R_4}{1 + \\omega^2 C_4^2 R_4^2}} \\quad \\text{--- (Equation 4)}$$

---

### 4. Quality Factor and High-Q Approximation
$$Q = \\frac{\\omega L_1}{R_1} = \\frac{1}{\\omega C_4 R_4}$$
Notice that $\\omega^2 C_4^2 R_4^2 = (1/Q)^2$. Therefore:
$$L_1 = \\frac{R_2 R_3 C_4}{1 + (1/Q)^2}$$
For high-Q coils ($Q > 10$), $(1/Q)^2 < 1/100 = 0.01$. The denominator approximates strictly to $1$:
$$\\mathbf{L_1 \\approx R_2 R_3 C_4}$$
**Significant Advantage**: For $Q > 10$, Hay\'s bridge measures inductance directly independent of excitation frequency $\\omega$!`,
      detailedLearning: `Hay\'s bridge uses a low-value series resistor $R_4$ ($< 100\\ \\Omega$), whereas Maxwell\'s bridge would require a megohm resistor, making Hay\'s bridge far easier to construct.`
    }
  },
  {
    id: 'fom-u5-q6',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'D\'Sauty\'s Bridge and Modified D\'Sauty\'s Bridge with Phasor Diagram',
    questionText: 'Explain D\'Sauty\'s bridge. Discuss its limitations and the modified D\'Sauty\'s bridge.',
    marks: 7,
    priority: 'high',
    type: 'derivation',
    years: ['2024'],
    frequency: 'Repeated in 2024 7M paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- **Simple D\'Sauty**: Compares two perfect capacitors:
  $$C_1 = C_2 \\left(\\frac{R_4}{R_3}\\right)$$
- **Limitation**: Fails for imperfect (lossy) capacitors because dielectric loss angles cannot be matched.
- **Modified D\'Sauty**: Adds non-inductive series resistors $r_1, r_2$:
  $$\\frac{C_1}{C_2} = \\frac{R_4}{R_3} = \\frac{R_2 + r_2}{R_1 + r_1}$$`,
      examAnswer: `### 1. Simple D\'Sauty\'s Bridge
D\'Sauty\'s bridge is the simplest AC bridge method for comparing two capacitances.
- Arm 1: Capacitor $C_1$ under test.
- Arm 2: Standard capacitor $C_2$.
- Arm 3: Non-inductive resistor $R_3$.
- Arm 4: Non-inductive resistor $R_4$.

#### Balance Condition:
$$\\mathbf{Z}_1 \\mathbf{Z}_4 = \\mathbf{Z}_2 \\mathbf{Z}_3 \\implies \\left(\\frac{1}{j \\omega C_1}\\right) R_4 = \\left(\\frac{1}{j \\omega C_2}\\right) R_3$$
$$\\mathbf{C_1 = C_2 \\left(\\frac{R_4}{R_3}\\right)}$$

---

### 2. Limitations of Simple D\'Sauty\'s Bridge
The simple bridge yields a sharp null balance **only if both capacitors are completely loss-free (ideal air capacitors)**.
Real physical capacitors possess dielectric leakage and series resistance:
$$\\mathbf{Z}_1 = r_1 - \\frac{j}{\\omega C_1}, \\quad \\mathbf{Z}_2 = r_2 - \\frac{j}{\\omega C_2}$$
To achieve null balance, two conditions must be satisfied simultaneously:
1. Equality of magnitudes ($|Z_1 Z_4| = |Z_2 Z_3|$).
2. Equality of phase angles ($\\theta_1 + \\theta_4 = \\theta_2 + \\theta_3$).
Since Arms 3 and 4 are pure resistors ($\\theta_3 = \\theta_4 = 0$), balance requires $\\theta_1 = \\theta_2$, meaning both capacitors must have identical loss angles ($\delta_1 = \delta_2$). If their loss angles differ, no true null balance can ever be obtained!

---

### 3. Modified D\'Sauty\'s Bridge (Series Resistance Method)
To enable testing of real, imperfect capacitors with different dissipation factors, non-inductive variable resistors $r_1$ and $r_2$ are placed in series with $C_1$ and $C_2$.

#### Balance Equations:
Equating real and imaginary components:
$$\\mathbf{\\frac{C_1}{C_2} = \\frac{R_4}{R_3} = \\frac{R_2 + r_2}{R_1 + r_1}}$$
By independently adjusting $R_3, R_4$ and $r_1, r_2$, an exact null balance is obtained.`,
      detailedLearning: `The angle difference between voltage and current vectors collapses to zero on the detector phasor when both phase and magnitude criteria are satisfied.`
    }
  },
  {
    id: 'fom-u5-q7',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Kelvin\'s Double Bridge for Low-Resistance Measurement',
    questionText: 'Explain Kelvin\'s double bridge for low-resistance measurement.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2019'],
    frequency: 'Appeared in 2019 7M paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Kelvin Double Bridge:
- Balance condition: $R = \\frac{P}{Q} S$ (when $P/Q = p/q$).
- Eliminates lead resistance $r$ and contact resistance.
- Measures $1\\ \\mu\\Omega$ to $1\\ \\Omega$.`,
      examAnswer: `### Kelvin\'s Double Bridge for Low Resistance Measurement

#### 1. Circuit Design
A Kelvin\'s Double Bridge incorporates two sets of ratio arms:
- Outer ratio arms ($P$ and $Q$)
- Inner ratio arms ($p$ and $q$)
- Unknown low resistance ($R$) and certified standard resistance ($S$).
- Low-resistance connecting link ($r$).

#### 2. Working and Cancellation of Link Resistance:
$$R = \\frac{P}{Q} S + \\frac{q r}{p + q + r} \\left(\\frac{P}{Q} - \\frac{p}{q}\\right)$$
When inner and outer ratio arms are maintained equal ($P/Q = p/q$):
$$R = \\frac{P}{Q} S$$
The link resistance $r$ is completely eliminated from the measurement. Both $R$ and $S$ use 4-terminal connections, ensuring contact voltage drops do not influence the galvanometer.`,
      detailedLearning: `Low-resistance measurement is essential in verifying copper busbar bolted joints in power substations.`
    }
  },
  {
    id: 'fom-u5-q8',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Low-Voltage Schering Bridge Working and Derivation',
    questionText: 'Explain the working of a low-voltage Schering bridge and derive the equation for capacitance and dissipation factor.',
    marks: 7,
    priority: 'high',
    type: 'derivation',
    years: ['2022'],
    frequency: 'Repeated in 2022 7M paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- $C_1 = C_2 (R_4 / R_3)$.
- $r_1 = R_3 (C_4 / C_2)$.
- Dissipation Factor: $D = \\tan \\delta = \\omega C_4 R_4$.`,
      examAnswer: `### Low-Voltage Schering Bridge

#### 1. Circuit Arrangement:
In a low-voltage Schering bridge (operating at $100\\text{ V}$ to $250\\text{ V}$ AC):
- Arm 1 contains unknown capacitor $C_1$ with series loss resistance $r_1$.
- Arm 2 contains standard standard air capacitor $C_2$.
- Arm 3 contains pure resistor $R_3$.
- Arm 4 contains parallel combination of decade resistor $R_4$ and variable standard capacitor $C_4$.

#### 2. Balance Derivation:
$$\\mathbf{Z}_1 \\mathbf{Z}_4 = \\mathbf{Z}_2 \\mathbf{Z}_3$$
$$(r_1 - j/\\omega C_1) \\left(\\frac{R_4}{1 + j \\omega C_4 R_4}\\right) = \\left(-\\frac{j}{\\omega C_2}\\right) R_3$$
$$(r_1 - j/\\omega C_1) = -\\frac{j R_3}{\\omega C_2} \\left(\\frac{1}{R_4} + j \\omega C_4\\right) = \\frac{C_4 R_3}{C_2} - j \\frac{R_3}{\\omega C_2 R_4}$$

Equating real parts:
$$r_1 = R_3 \\left(\\frac{C_4}{C_2}\\right)$$
Equating imaginary parts:
$$C_1 = C_2 \\left(\\frac{R_4}{R_3}\\right)$$

#### 3. Dissipation Factor ($D$):
$$D = \\tan \\delta = \\omega C_1 r_1 = \\omega \\left[C_2 \\frac{R_4}{R_3}\\right] \\left[R_3 \\frac{C_4}{C_2}\\right] = \\mathbf{\\omega C_4 R_4}$$`,
      detailedLearning: `Low-voltage Schering bridges are used in university and standards labs for characterising solid dielectric samples placed in guard-ring electrode fixtures.`
    }
  },

  // --- 2-3 MARK QUESTIONS ---
  {
    id: 'fom-u5-q9',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Universal Impedance Bridge Working Principle',
    questionText: 'What is a Universal Impedance Bridge?',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2024'],
    frequency: 'Appeared in 2024 2-mark paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Multifunction laboratory instrument that measures R, L, C, Q, and D.
- Reconfigures internal bridge arms (Wheatstone for R, Maxwell/Hay for L, Schering/De-Sauty for C) via rotary function switch.`,
      examAnswer: `A **Universal Impedance Bridge** (LCR Bridge) is a versatile, self-contained laboratory measuring instrument capable of measuring Resistance ($R$), Inductance ($L$), Capacitance ($C$), Storage Factor ($Q$), and Dissipation Factor ($D$) across wide ranges.
By switching front-panel rotary selectors, its internal circuit topology reconfigures into:
- Wheatstone Bridge for DC Resistance.
- Maxwell or Hay\'s Bridge for Inductance and Q-factor.
- Schering or Series/Parallel RC Bridge for Capacitance and Dissipation factor.`,
      detailedLearning: `Modern digital LCR meters use automatic autobalancing bridge techniques with DSP vector voltage-current sampling.`
    }
  },
  {
    id: 'fom-u5-q10',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Q-Factor of a Coil: Expression and Significance',
    questionText: 'What is the Q-factor of a coil? Write its expression and significance.',
    marks: 2,
    priority: 'high',
    type: 'theory',
    years: ['2024'],
    frequency: 'Appeared in 2024 2-mark paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- $Q = \\frac{\\omega L}{R} = \\frac{\\text{Energy Stored per cycle}}{\\text{Energy Dissipated per cycle}}$.
- Measures sharpness of resonance in tuned circuits. Higher Q means lower internal power loss.`,
      examAnswer: `**Q-Factor (Quality Factor)**: The figure of merit of an inductor coil, defined as the ratio of its inductive reactance to its effective series resistance at a given frequency:
$$Q = \\frac{\\omega L}{R} = \\frac{2 \\pi f L}{R}$$
**Significance**:
1. High Q implies a pure, high-efficiency inductor with minimal internal copper heat dissipation.
2. In tuned resonant circuits ($RLC$), high Q produces high selectivity (sharp bandwidth: $\\Delta f = f_0 / Q$) and high resonant voltage magnification.`,
      detailedLearning: `At high frequencies, skin effect and proximity effect increase AC resistance $R$, causing Q-factor to peak and then roll off.`
    }
  },
  {
    id: 'fom-u5-q11',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Power Factor, Dissipation Factor and Loss Angle Definitions',
    questionText: 'Define power factor, dissipation factor and loss angle.',
    marks: 2,
    priority: 'high',
    type: 'theory',
    years: ['2024'],
    frequency: 'Appeared in 2024 2-mark paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Power Factor: $\\cos \\theta = P / S$.
- Loss Angle: $\\delta = 90^{\\circ} - \\theta$.
- Dissipation Factor: $D = \\tan \\delta = \\omega C r = 1/Q$.
- For small loss: $\\tan \\delta \\approx \\cos \\theta \\approx \\delta$ (radians).`,
      examAnswer: `1. **Power Factor (PF)**: The cosine of the phase angle $\\theta$ between voltage and current: $PF = \\cos \\theta$.
2. **Loss Angle ($\\delta$)**: The complement of the phase angle ($\\delta = 90^{\\circ} - \\theta$), representing the phase defect by which capacitor current fails to lead voltage by a perfect $90^{\\circ}$.
3. **Dissipation Factor ($D$)**: The tangent of the loss angle:
   $$D = \\tan \\delta = \\frac{1}{Q} = \\omega C r$$
   For low-loss dielectrics ($\\delta < 0.1\\text{ rad}$), $\\tan \\delta \\approx \\sin \\delta \\approx \\cos \\theta$.`,
      detailedLearning: `Dielectric loss causes heating in HV cables: $P_{loss} = \\omega C V^2 \\tan \\delta$.`
    }
  },
  {
    id: 'fom-u5-q12',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'IEEE Standards in Instrumentation',
    questionText: 'Write notes on IEEE standards.',
    marks: 3,
    priority: 'moderate',
    type: 'theory',
    years: ['2022'],
    frequency: 'Appeared in 2022 3-mark paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Standardized specifications published by Institute of Electrical and Electronics Engineers.
- Ensure worldwide compatibility, safety, calibration procedures, and digital communication buses (e.g., IEEE-488 GPIB for instrument automation).`,
      examAnswer: `### IEEE Standards in Instrumentation
IEEE Standards are officially documented technical benchmarks established by the Institute of Electrical and Electronics Engineers to ensure equipment compatibility, measurement accuracy, and safety across global industries.

---

### Key Areas Covered:
1. **Calibration and Uncertainty Standards (IEEE 1459, IEEE 1057)**: Define rigorous testing algorithms for ADCs, oscilloscopes, and electric power quality measurement under non-sinusoidal conditions.
2. **Instrumentation Interface Buses (IEEE-488 GPIB)**: General Purpose Interface Bus enabling digital communication and automated remote control between oscilloscopes, signal generators, and computers.
3. **Safety and Grounding Standards (IEEE 142)**: Specify electrical grounding protocols to safeguard human operators and suppress electromagnetic noise.`,
      detailedLearning: `Compliance with IEEE standards ensures that an ammeter calibrated in India yields identical measurement results when deployed in Germany or Japan.`
    }
  },
  {
    id: 'fom-u5-q13',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Applications of Schering Bridge',
    questionText: 'What are the applications of Schering bridge?',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2023'],
    frequency: 'Appeared in 2023 2-mark paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `Applications:
1. Measuring unknown capacitance.
2. Measuring dielectric loss and dissipation factor ($D = \\tan \\delta$).
3. Testing high-voltage insulators, bushings, and underground cables.
4. Measuring relative permittivity ($\\epsilon_r$) of solid/liquid insulating materials.`,
      examAnswer: `The primary applications of the **Schering Bridge** are:
1. **Measurement of Capacitance and Dielectric Loss**: Precise determination of equivalent series capacitance and loss angle of capacitors.
2. **High-Voltage Cable and Bushing Testing**: Diagnosing deterioration, moisture ingress, and partial discharge in high-voltage transformer bushings and underground power cables.
3. **Measurement of Relative Permittivity ($\\epsilon_r$)**: Determining the dielectric constant of insulating liquids (transformer oil) and solids (Bakelite, mica, polymers).`,
      detailedLearning: `A sudden rise in $\\tan \\delta$ during routine maintenance indicates insulation degradation and impending electrical puncture.`
    }
  },
  {
    id: 'fom-u5-q14',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Purpose of Wien Bridge',
    questionText: 'What is the purpose of Wien bridge?',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2022'],
    frequency: 'Appeared in 2022 2-mark paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Accurate measurement of audio frequency ($10\\text{ Hz} - 100\\text{ kHz}$).
- Serving as frequency-selective feedback network in Wien bridge RC oscillators.
- Used as notch filter to eliminate fundamental frequency in harmonic distortion analyzers.`,
      examAnswer: `The primary purposes of the **Wien Bridge** are:
1. **Measurement of Unknown Frequency**: Measuring the frequency of an AC voltage source across the audio spectrum ($10\\text{ Hz}$ to $100\\text{ kHz}$) using calibrated RC decade dials ($f = 1/(2\\pi RC)$).
2. **RC Audio Oscillators**: Serving as the positive feedback phase-shift network in standard laboratory sine wave oscillators.
3. **Harmonic Distortion Analysers**: Operating as a narrow band-rejection (notch) filter to suppress the fundamental frequency, allowing measurement of residual harmonic distortion.`,
      detailedLearning: `Because balance depends on frequency squared ($\omega^2 = 1/(R_1 R_2 C_1 C_2)$), it is extraordinarily sensitive as a frequency detector.`
    }
  },
  {
    id: 'fom-u5-q15',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Difference Between Maxwell\'s Inductance and Capacitance Bridges',
    questionText: 'What is the difference between Maxwell\'s inductance bridge and Maxwell\'s capacitance bridge?',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2022'],
    frequency: 'Appeared in 2022 2-mark paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Inductance bridge: Compares unknown L against standard variable inductor ($L_1 = L_2 R_3/R_4$).
- Capacitance bridge: Compares unknown L against standard fixed capacitor ($L_1 = R_2 R_3 C_4$). Eliminates bulky, expensive standard inductors.`,
      examAnswer: `### Comparison: Maxwell\'s Inductance vs Capacitance Bridge

| Feature | Maxwell\'s Inductance Bridge | Maxwell\'s Capacitance Bridge (L-C Bridge) |
|---|---|---|
| **Standard Component** | Uses a variable standard inductor ($L_2$). | Uses a standard fixed capacitor ($C_4$). |
| **Balance Relation** | $L_1 = L_2 (R_3 / R_4)$. | $L_1 = R_2 R_3 C_4$. |
| **Practical Advantage** | Bulky, expensive, susceptible to stray magnetic field interference. | Compact, inexpensive, highly stable standard mica capacitor with zero stray coupling. |`,
      detailedLearning: `Capacitors are far cheaper, smaller, and more physically ideal than variable inductors.`
    }
  },
  {
    id: 'fom-u5-q16',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Purpose of Hay\'s Bridge',
    questionText: 'What is the purpose of Hay\'s bridge?',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2023'],
    frequency: 'Appeared in 2023 2-mark paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Specifically designed to measure self-inductance of HIGH-Q coils ($Q > 10$).
- Overcomes Maxwell\'s bridge limitation where $R_4$ becomes impractically large for high Q.`,
      examAnswer: `The purpose of **Hay\'s Bridge** is to accurately measure the self-inductance and effective resistance of **high-Q inductor coils** ($Q > 10$).
In a Maxwell bridge, high Q requires an impractically large parallel resistor ($R_4 = Q/\\omega C > 1\\text{ M}\\Omega$). Hay\'s bridge connects $R_4$ in **series** with capacitor $C_4$, requiring only a small, easily realizable decade resistor ($R_4 = 1/(\\omega C Q) < 100\\ \\Omega$), and yields $L_1 \\approx R_2 R_3 C_4$ independent of frequency.`,
      detailedLearning: `Hay\'s bridge is the universal choice for radio-frequency (RF) tuning coils and chokes.`
    }
  },

  // --- NUMERICAL QUESTIONS ---
  {
    id: 'fom-u5-q17',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Maxwell\'s Capacitance Bridge Inductance and Resistance Calculation',
    questionText: 'The four arms of a Maxwell\'s capacitance bridge at balance are: Arm AB: unknown coil with inductance L₁ and resistance R₁; Arm BC: non-inductive resistance R₃ = 1000 Ω; Arm CD: standard capacitor C₄ = 0.5 μF in parallel with non-inductive resistance R₄ = 1000 Ω; Arm DA: non-inductive resistance R₂ = 1000 Ω. The bridge is excited by a 1000 Hz oscillator. Calculate: (a) The unknown inductance L₁, (b) The resistance R₁, and (c) The Q-factor of the coil.',
    marks: 7,
    priority: 'very_high',
    type: 'numerical',
    years: ['2024', '2023'],
    frequency: 'Repeated core bridge calculation in 2023 and 2024',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- $R_1 = \\frac{R_2 R_3}{R_4} = \\frac{1000 \\times 1000}{1000} = 1000\\ \\Omega$.
- $L_1 = R_2 R_3 C_4 = 1000 \\times 1000 \\times (0.5 \\times 10^{-6}) = 0.5\\text{ H}$.
- $Q = \\frac{\\omega L_1}{R_1} = \\omega C_4 R_4 = 2 \\pi (1000) \\times (0.5 \\times 10^{-6}) \\times 1000 = 3.1416$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Excitation frequency ($f$) = $1000\\text{ Hz}$
- Angular frequency ($\\omega$) = $2 \\pi f = 2 \\pi \\times 1000 = 6283.185\\text{ rad/s}$
- Arm 2 resistance ($R_2$) = $1000\\ \\Omega$
- Arm 3 resistance ($R_3$) = $1000\\ \\Omega$
- Arm 4 resistance ($R_4$) = $1000\\ \\Omega$
- Arm 4 capacitance ($C_4$) = $0.5\\ \\mu\\text{F} = 0.5 \\times 10^{-6}\\text{ F}$

---

#### 2. Governing Equations:
For Maxwell\'s Inductance-Capacitance bridge at balance:
$$R_1 = \\frac{R_2 R_3}{R_4}$$
$$L_1 = R_2 R_3 C_4$$
$$Q = \\frac{\\omega L_1}{R_1} = \\omega C_4 R_4$$

---

#### 3. Calculations:

**(a) Unknown Inductance ($L_1$):**
$$L_1 = R_2 \\times R_3 \\times C_4$$
$$L_1 = (1000\\ \\Omega) \\times (1000\\ \\Omega) \\times (0.5 \\times 10^{-6}\\text{ F})$$
$$L_1 = 10^6 \\times 0.5 \\times 10^{-6} = \\mathbf{0.50\\text{ Henry (H)}}$$

**(b) Effective Coil Resistance ($R_1$):**
$$R_1 = \\frac{R_2 \\times R_3}{R_4} = \\frac{1000 \\times 1000}{1000} = \\mathbf{1000\\ \\Omega}$$

**(c) Quality Factor ($Q$) of the Coil:**
$$Q = \\omega \\cdot C_4 \\cdot R_4 = (6283.185\\text{ rad/s}) \\times (0.5 \\times 10^{-6}\\text{ F}) \\times (1000\\ \\Omega)$$
$$Q = 6283.185 \\times 0.5 \\times 10^{-3} = \\mathbf{3.1416 \\approx 3.14}$$

---

#### 4. Verification using $Q = \\omega L_1 / R_1$:
$$Q = \\frac{6283.185 \\times 0.5}{1000} = \\frac{3141.59}{1000} = 3.1416 \\quad (\\text{Matches perfectly!})$$

---

#### 5. Final Answer:
- **Unknown Inductance ($L_1$)**: $\\mathbf{0.50\\text{ H}}$
- **Unknown Resistance ($R_1$)**: $\\mathbf{1000\\ \\Omega}$
- **Quality Factor ($Q$)**: $\\mathbf{3.14}$ (Ideal medium-Q range $1 < Q < 10$).`,
      detailedLearning: `Since $Q = 3.14$ lies comfortably between $1$ and $10$, Maxwell\'s bridge is ideally suited for this measurement.`
    }
  },
  {
    id: 'fom-u5-q18',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Maxwell\'s Inductance Bridge Unknown Inductance Calculation',
    questionText: 'In a Maxwell\'s inductance bridge, balance is obtained with standard inductor L₂ = 0.2 H, variable resistor R₂ = 50 Ω, ratio arm R₃ = 500 Ω, and ratio arm R₄ = 200 Ω. Calculate: (a) The unknown inductance L₁, and (b) The effective resistance R₁.',
    marks: 3,
    priority: 'high',
    type: 'numerical',
    years: ['2024'],
    frequency: 'Appeared in 2024 3-mark numerical problem',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- $L_1 = L_2 (R_3 / R_4) = 0.2 \\times (500 / 200) = 0.5\\text{ H}$.
- $R_1 = R_2 (R_3 / R_4) = 50 \\times (500 / 200) = 125\\ \\Omega$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Standard inductance ($L_2$) = $0.2\\text{ H}$
- Standard branch resistance ($R_2$) = $50\\ \\Omega$
- Ratio arm ($R_3$) = $500\\ \\Omega$
- Ratio arm ($R_4$) = $200\\ \\Omega$

---

#### 2. Calculations:
Ratio factor:
$$\\frac{R_3}{R_4} = \\frac{500}{200} = 2.50$$

**(a) Unknown Inductance ($L_1$):**
$$L_1 = L_2 \\left(\\frac{R_3}{R_4}\\right) = 0.2\\text{ H} \\times 2.50 = \\mathbf{0.50\\text{ Henry (H)}}$$

**(b) Effective Resistance ($R_1$):**
$$R_1 = R_2 \\left(\\frac{R_3}{R_4}\\right) = 50\\ \\Omega \\times 2.50 = \\mathbf{125.0\\ \\Omega}$$

---

#### 3. Final Answer:
- **$L_1 = 0.50\\text{ H}$**
- **$R_1 = 125\\ \\Omega$**`,
      detailedLearning: `Notice how scaling the ratio arms $R_3/R_4$ scales both inductance and resistance by the exact same multiplier.`
    }
  },
  {
    id: 'fom-u5-q19',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Hay\'s Bridge High-Q Coil Inductance and Resistance Calculation',
    questionText: 'A Hay\'s bridge is used to measure an inductor at 1000 Hz. The bridge parameters at balance are: R₂ = 1000 Ω, R₃ = 1000 Ω, C₄ = 0.1 μF, and R₄ = 20 Ω. Calculate: (a) The unknown inductance L₁, (b) The effective series resistance R₁, and (c) The Q-factor of the coil. What is the percentage error if the high-Q approximation is used?',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2023'],
    frequency: 'Core high-Q bridge calculation in 2023',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: true,
    answer: {
      quickRevision: `- $\\omega = 2 \\pi (1000) = 6283.2\\text{ rad/s}$.
- $Q = \\frac{1}{\\omega C_4 R_4} = \\frac{1}{6283.2 \\times 10^{-7} \\times 20} = 79.58$.
- Factor $1 + (1/Q)^2 = 1 + (1/79.58)^2 = 1 + 0.000158 = 1.000158$.
- Exact $L_1 = \\frac{R_2 R_3 C_4}{1.000158} = \\frac{0.1}{1.000158} = 0.09998\\text{ H} \\approx 0.10\\text{ H}$.
- Approx $L_1 = R_2 R_3 C_4 = 0.10\\text{ H}$. Error is barely $0.015\\%$!
- $R_1 = \\frac{\\omega L_1}{Q} = \\frac{628.32}{79.58} = 7.89\\ \\Omega$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Frequency ($f$) = $1000\\text{ Hz} \\implies \\omega = 2 \\pi \\times 1000 = 6283.185\\text{ rad/s}$
- Arm 2 resistance ($R_2$) = $1000\\ \\Omega$
- Arm 3 resistance ($R_3$) = $1000\\ \\Omega$
- Arm 4 capacitance ($C_4$) = $0.1\\ \\mu\\text{F} = 10^{-7}\\text{ F}$
- Arm 4 series resistance ($R_4$) = $20\\ \\Omega$

---

#### 2. Calculations:

**(a) Quality Factor ($Q$):**
$$Q = \\frac{1}{\\omega C_4 R_4} = \\frac{1}{(6283.185\\text{ rad/s}) \\times (10^{-7}\\text{ F}) \\times (20\\ \\Omega)}$$
$$Q = \\frac{1}{1.25664 \\times 10^{-5}} = \\mathbf{79.58}$$
*(Since $Q = 79.6 \\gg 10$, this is a very high quality coil)*.

**(b) Term $1 + (1/Q)^2$:**
$$\\left(\\frac{1}{Q}\\right)^2 = \\left(\\frac{1}{79.58}\\right)^2 = (0.012566)^2 = 0.0001579$$
$$1 + \\omega^2 C_4^2 R_4^2 = 1 + 0.000158 = 1.000158$$

**(c) Exact Unknown Inductance ($L_1$):**
$$L_1 = \\frac{R_2 R_3 C_4}{1 + \\omega^2 C_4^2 R_4^2} = \\frac{(1000) \\times (1000) \\times (10^{-7})}{1.000158} = \\frac{0.10000}{1.000158} = \\mathbf{0.099984\\text{ H} \\approx 100\\text{ mH}}$$

**(d) High-Q Approximation ($L_{approx}$):**
$$L_{approx} = R_2 R_3 C_4 = (1000) \\times (1000) \\times (10^{-7}) = \\mathbf{0.10000\\text{ H} = 100\\text{ mH}}$$
$$\\% \\text{ Error} = \\frac{0.10000 - 0.099984}{0.099984} \\times 100 = \\mathbf{+0.016\\%}$$

**(e) Effective Coil Resistance ($R_1$):**
$$R_1 = \\frac{\\omega L_1}{Q} = \\frac{6283.185 \\times 0.099984}{79.58} = \\frac{628.218}{79.58} = \\mathbf{7.894\\ \\Omega}$$

---

#### 3. Final Summary:
- **Inductance ($L_1$)**: $\\mathbf{100\\text{ mH} \\ (0.09998\\text{ H})}$
- **Resistance ($R_1$)**: $\\mathbf{7.89\\ \\Omega}$
- **Q-Factor**: $\\mathbf{79.6}$
- **Approximation Error**: $\\mathbf{0.016\\%}$ (completely negligible).`,
      detailedLearning: `This proof demonstrates why the simple formula $L_1 = R_2 R_3 C_4$ is used without reservation in RF engineering for $Q > 30$.`
    }
  },
  {
    id: 'fom-u5-q20',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Schering Bridge Unknown Capacitance and Dissipation Factor Calculation',
    questionText: 'A Schering bridge at 50 Hz balance has: standard capacitor C₂ = 100 pF; non-inductive resistor R₃ = 1000/π Ω; non-inductive resistor R₄ = 200/π Ω; and capacitor C₄ = 0.5 μF. Calculate: (a) The unknown capacitance C₁, (b) The equivalent series resistance r₁, and (c) The dissipation factor D and loss angle δ.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2022'],
    frequency: 'Core Schering bridge calculation',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- $\\omega = 2 \\pi (50) = 100 \\pi\\text{ rad/s}$.
- $C_1 = C_2 (R_4 / R_3) = 100\\text{ pF} \\times \\frac{200/\\pi}{1000/\\pi} = 100 \\times 0.2 = 20\\text{ pF}$.
- $r_1 = R_3 (C_4 / C_2) = \\left(\\frac{1000}{\\pi}\\right) \\times \\left(\\frac{0.5 \\times 10^{-6}}{100 \\times 10^{-12}}\\right) = \\frac{1000}{\\pi} \\times 5000 = \\frac{5 \\times 10^6}{\\pi} = 1.591\\text{ M}\\Omega$.
- $D = \\omega C_4 R_4 = (100 \\pi) \\times (0.5 \\times 10^{-6}) \\times \\left(\\frac{200}{\\pi}\\right) = 0.010$.
- Loss angle $\\delta = \\tan^{-1}(0.010) = 0.573^{\\circ}$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Frequency ($f$) = $50\\text{ Hz} \\implies \\omega = 2 \\pi f = 100\\pi\\text{ rad/s}$
- Standard capacitor ($C_2$) = $100\\text{ pF} = 100 \\times 10^{-12}\\text{ F}$
- Non-inductive resistor ($R_3$) = $\\frac{1000}{\\pi}\\ \\Omega$
- Non-inductive resistor ($R_4$) = $\\frac{200}{\\pi}\\ \\Omega$
- Standard capacitor ($C_4$) = $0.5\\ \\mu\\text{F} = 0.5 \\times 10^{-6}\\text{ F}$

---

#### 2. Calculations:

**(a) Unknown Capacitance ($C_1$):**
$$C_1 = C_2 \\left(\\frac{R_4}{R_3}\\right)$$
$$C_1 = (100\\text{ pF}) \\times \\left(\\frac{200/\\pi}{1000/\\pi}\\right) = 100\\text{ pF} \\times \\left(\\frac{200}{1000}\\right) = 100 \\times 0.2 = \\mathbf{20.0\\text{ pF}}$$

**(b) Equivalent Series Resistance ($r_1$):**
$$r_1 = R_3 \\left(\\frac{C_4}{C_2}\\right) = \\left(\\frac{1000}{\\pi}\\right) \\times \\left(\\frac{0.5 \\times 10^{-6}\\text{ F}}{100 \\times 10^{-12}\\text{ F}}\\right)$$
$$r_1 = \\left(\\frac{1000}{\\pi}\\right) \\times 5000 = \\frac{5 \\times 10^6}{\\pi} = \\mathbf{1.5915 \\times 10^6\\ \\Omega = 1.5915\\text{ M}\\Omega}$$

**(c) Dissipation Factor ($D$) and Loss Angle ($\\delta$):**
$$D = \\omega \\cdot C_4 \\cdot R_4 = (100 \\pi) \\times (0.5 \\times 10^{-6}\\text{ F}) \\times \\left(\\frac{200}{\\pi}\\ \\Omega\\right)$$
$$D = \\frac{100 \\pi \\times 0.5 \\times 10^{-6} \\times 200}{\\pi} = 100 \\times 0.5 \\times 10^{-6} \\times 200 = 10000 \\times 10^{-6} = \\mathbf{0.010}$$

Loss angle $\\delta$:
$$\\delta = \\tan^{-1}(D) = \\tan^{-1}(0.010) = 0.010\\text{ rad} = 0.010 \\times \\left(\\frac{180^{\\circ}}{\\pi}\\right) = \\mathbf{0.573^{\\circ} \\approx 34.4\\text{ minutes}}$$

---

#### 3. Final Answer:
- **Unknown Capacitance ($C_1$)**: $\\mathbf{20.0\\text{ pF}}$
- **Equivalent Series Resistance ($r_1$)**: $\\mathbf{1.59\\text{ M}\\Omega}$
- **Dissipation Factor ($D$)**: $\\mathbf{0.010}$
- **Dielectric Loss Angle ($\\delta$)**: $\\mathbf{0.573^{\\circ}}$`,
      detailedLearning: `A dissipation factor of 0.010 (1%) indicates a very high-grade insulating dielectric sample.`
    }
  },
  {
    id: 'fom-u5-q21',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'Wien Bridge Frequency Calculation',
    questionText: 'A Wien bridge circuit has the following component values: R₁ = 10 kΩ, C₁ = 0.01 μF; R₂ = 10 kΩ, C₂ = 0.01 μF; R₃ = 1 kΩ. Calculate: (a) The frequency of the source for bridge balance, and (b) The value of resistor R₄ required for balance.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2022'],
    frequency: 'Core Wien bridge calculation',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Symmetrical components: $R = 10\\text{ k}\\Omega = 10^4\\ \\Omega$, $C = 0.01\\mu\\text{F} = 10^{-8}\\text{ F}$.
- $f = \\frac{1}{2 \\pi R C} = \\frac{1}{2 \\pi \\times 10^4 \\times 10^{-8}} = \\frac{1}{2 \\pi \\times 10^{-4}} = \\frac{10^4}{2 \\pi} = 1591.5\\text{ Hz}$.
- $R_4 = 2 R_3 = 2 \\times 1000 = 2000\\ \\Omega = 2\\text{ k}\\Omega$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Series arm: $R_1 = 10\\text{ k}\\Omega = 10,000\\ \\Omega$, $C_1 = 0.01\\ \\mu\\text{F} = 10^{-8}\\text{ F}$
- Parallel arm: $R_2 = 10\\text{ k}\\Omega = 10,000\\ \\Omega$, $C_2 = 0.01\\ \\mu\\text{F} = 10^{-8}\\text{ F}$
- Ratio arm: $R_3 = 1\\text{ k}\\Omega = 1000\\ \\Omega$

---

#### 2. Part (a): Source Frequency for Bridge Balance ($f$)
Since $R_1 = R_2 = R$ and $C_1 = C_2 = C$:
$$f = \\frac{1}{2 \\pi R C}$$
Substitute values:
$$f = \\frac{1}{2 \\times 3.14159 \\times (10,000\\ \\Omega) \\times (10^{-8}\\text{ F})}$$
$$f = \\frac{1}{6.28318 \\times 10^{-4}} = \\frac{10,000}{6.28318} = \\mathbf{1591.55\\text{ Hz} \\approx 1.592\\text{ kHz}}$$

---

#### 3. Part (b): Value of Resistor $R_4$
From the general Wien bridge resistive balance equation:
$$\\frac{R_4}{R_3} = \\frac{R_1}{R_2} + \\frac{C_2}{C_1} = \\frac{10\\text{ k}\\Omega}{10\\text{ k}\\Omega} + \\frac{0.01\\mu\\text{F}}{0.01\\mu\\text{F}} = 1 + 1 = 2$$
$$R_4 = 2 \\times R_3 = 2 \\times 1000\\ \\Omega = \\mathbf{2000\\ \\Omega = 2.0\\text{ k}\\Omega}$$

---

#### 4. Final Answer:
- **Balance Frequency ($f$)**: $\\mathbf{1.592\\text{ kHz}}$
- **Required Resistor ($R_4$)**: $\\mathbf{2.0\\text{ k}\\Omega}$`,
      detailedLearning: `If $R_4$ drifts from $2 R_3$, no null balance is possible even at the exact frequency of $1592\\text{ Hz}$.`
    }
  },
  {
    id: 'fom-u5-q22',
    unitId: 5,
    unitName: 'Unit 5 – AC Bridges',
    title: 'AC Bridge with Parallel RC and Series RC Arms Calculation',
    questionText: 'An AC bridge has: Arm AB: R₁ = 400 Ω in parallel with C₁ = 0.2 μF; Arm BC: pure resistance R₃ = 1000 Ω; Arm CD: pure resistance R₄ = 2000 Ω; Arm DA: series combination of unknown resistance R₂ and unknown capacitor C₂. Derive the balance conditions and find the values of R₂ and C₂ if the bridge is balanced at 1000 Hz.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2024'],
    frequency: 'Comprehensive 4-arm balance problem in 2024',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: true,
    answer: {
      quickRevision: `- Balance condition: $\\mathbf{Z}_1 \\mathbf{Z}_4 = \\mathbf{Z}_2 \\mathbf{Z}_3 \\implies \\mathbf{Z}_2 = \\mathbf{Z}_1 (R_4 / R_3)$.
- Here Arm 1 is parallel RC, Arm 2 is series RC.
- $\\frac{R_4}{R_3} = \\frac{2000}{1000} = 2$.
- $R_2 = R_1 / [1 + (\\omega R_1 C_1)^2] \\times (R_4 / R_3)$.
- $C_2 = C_1 \\frac{1 + (\\omega R_1 C_1)^2}{(\\omega R_1 C_1)^2} \\times (R_3 / R_4)$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Frequency ($f$) = $1000\\text{ Hz} \\implies \\omega = 2 \\pi \\times 1000 = 6283.185\\text{ rad/s}$
- Arm 1 (AB): $R_1 = 400\\ \\Omega$, $C_1 = 0.2\\ \\mu\\text{F} = 0.2 \\times 10^{-6}\\text{ F}$ (Parallel)
  $$\\mathbf{Y}_1 = \\frac{1}{R_1} + j \\omega C_1 = \\frac{1}{400} + j (6283.185 \\times 0.2 \\times 10^{-6}) = 0.0025 + j 0.0012566\\text{ S}$$
- Arm 3 (BC): $R_3 = 1000\\ \\Omega$
- Arm 4 (CD): $R_4 = 2000\\ \\Omega$
- Arm 2 (DA): Series combination $R_2$ and $C_2$:
  $$\\mathbf{Z}_2 = R_2 - j \\frac{1}{\\omega C_2}$$

---

#### 2. Derivation of Balance Relation:
General balance condition:
$$\\mathbf{Z}_1 \\mathbf{Z}_4 = \\mathbf{Z}_2 \\mathbf{Z}_3 \\implies \\mathbf{Z}_2 = \\frac{R_4}{R_3} \\mathbf{Z}_1 = \\left(\\frac{R_4}{R_3}\\right) \\frac{1}{\\mathbf{Y}_1}$$
$$\\mathbf{Z}_2 = \\left(\\frac{2000}{1000}\\right) \\frac{1}{\\frac{1}{R_1} + j \\omega C_1} = 2 \\times \\left[\\frac{R_1}{1 + j \\omega R_1 C_1}\\right]$$
Rationalizing:
$$\\mathbf{Z}_2 = 2 R_1 \\left[\\frac{1 - j \\omega R_1 C_1}{1 + \\omega^2 R_1^2 C_1^2}\\right] = \\frac{2 R_1}{1 + \\omega^2 R_1^2 C_1^2} - j \\left[\\frac{2 \\omega R_1^2 C_1}{1 + \\omega^2 R_1^2 C_1^2}\\right]$$

Equating to $\\mathbf{Z}_2 = R_2 - \\frac{j}{\\omega C_2}$:

**(a) Resistance $R_2$:**
$$R_2 = \\frac{2 R_1}{1 + \\omega^2 R_1^2 C_1^2}$$

**(b) Capacitance $C_2$:**
$$\\frac{1}{\\omega C_2} = \\frac{2 \\omega R_1^2 C_1}{1 + \\omega^2 R_1^2 C_1^2} \\implies C_2 = \\frac{1 + \\omega^2 R_1^2 C_1^2}{2 \\omega^2 R_1^2 C_1}$$

---

#### 3. Numerical Computation:
$$\\omega R_1 C_1 = 6283.185 \\times 400 \\times (0.2 \\times 10^{-6}) = 0.50265$$
$$(\\omega R_1 C_1)^2 = (0.50265)^2 = 0.25266$$
$$1 + \\omega^2 R_1^2 C_1^2 = 1 + 0.25266 = 1.25266$$

1. **Calculate $R_2$:**
   $$R_2 = \\frac{2 \\times 400\\ \\Omega}{1.25266} = \\frac{800}{1.25266} = \\mathbf{638.64\\ \\Omega}$$

2. **Calculate $C_2$:**
   $$C_2 = \\frac{1.25266}{2 \\times (6283.185)^2 \\times (400)^2 \\times (0.2 \\times 10^{-6})}$$
   $$\\text{Denominator} = 2 \\times 3.94784 \\times 10^7 \\times 160000 \\times 0.2 \\times 10^{-6} = 2.5266 \\times 10^6$$
   $$C_2 = \\frac{1.25266}{2.5266 \\times 10^6} = 0.4958 \\times 10^{-6}\\text{ F} = \\mathbf{0.496\\ \\mu\\text{F}}$$

---

#### 4. Final Answer:
- **Unknown Resistance ($R_2$)**: $\\mathbf{638.6\\ \\Omega}$
- **Unknown Capacitance ($C_2$)**: $\\mathbf{0.496\\ \\mu\\text{F}}$`,
      detailedLearning: `This problem demonstrates parallel-to-series network equivalence transformation in AC bridges.`
    }
  }
];
