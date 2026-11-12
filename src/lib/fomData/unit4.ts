import { FOMQuestion } from '@/types/fom';

export const UNIT_4_QUESTIONS: FOMQuestion[] = [
  // --- 7-MARK QUESTIONS ---
  {
    id: 'fom-u4-q1',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Single-Phase Induction-Type Energy Meter',
    questionText: 'Draw and explain the working of a single-phase induction-type energy meter.',
    marks: 7,
    priority: 'high',
    type: 'diagram',
    years: ['2023', '2019'],
    frequency: 'Repeated 2 times in 7-mark category',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Induction Energy Meter Summary:
- **Operating Principle**: Ferraris induction principle. Two alternating magnetic fluxes ($\\Phi_{sh} \\propto V$ and $\\Phi_{se} \\propto I$) induce eddy currents in an aluminum disc, creating driving torque $T_d \\propto V I \\sin \\beta = V I \\cos \\phi$ (when $\\Delta = 90^{\\circ}$).
- **Braking Torque**: Permanent magnet induces eddy currents in disc: $T_b \\propto N$ (speed).
- **At steady speed**: $T_d = T_b \\implies N \\propto P \\implies \\text{Total Revolutions} = \\int N dt \\propto \\int P dt = \\text{Energy (kWh)}$.
- **Creeping**: Prevented by drilling two diametrically opposite holes in disc.`,
      examAnswer: `### 1. Operating Principle
A single-phase induction-type energy meter is an integrating instrument that measures the total electrical energy consumed in kilowatt-hours (kWh). It operates on the induction principle: the interaction of two alternating magnetic fluxes (one proportional to voltage, one to current) with the eddy currents they induce in a rotating aluminum disc creates a continuous driving torque.

---

### 2. Constructional Subsystems
1. **Driving System**:
   - **Shunt Magnet**: M-shaped laminated silicon steel core carrying a coil of thousands of turns of fine wire connected directly across the supply voltage ($V$). It is highly inductive ($L \\gg R$), so its flux $\\Phi_{sh}$ lags supply voltage by nearly $90^{\\circ}$.
   - **Copper Shading Band**: Placed on the central limb of the shunt magnet. Adjusting its position ensures $\\Phi_{sh}$ lags $V$ by exactly $90^{\\circ}$ for true power factor measurement.
   - **Series Magnet**: U-shaped core carrying a few turns of thick wire connected in series with the load ($I$). Its flux $\\Phi_{se}$ is in phase with load current.
2. **Moving System**:
   - A light aluminum disc mounted on a vertical spindle supported by a sapphire jewel bearing.
3. **Braking System**:
   - A permanent C-shaped magnet placed diametrically opposite the driving magnets. As the disc rotates through its field, eddy currents are induced, creating an opposing braking torque $T_b$ directly proportional to rotational speed $N$.
4. **Registering (Counting) Mechanism**:
   - A pinion gear on the spindle drives a gear train with cyclometer dials calibrated directly in kilowatt-hours (kWh).

---

### 3. Theory and Torque Equation
Let:
- $\\Phi_{sh}$ = Flux of shunt magnet $\\propto V$, lagging $V$ by $90^{\\circ}$
- $\\Phi_{se}$ = Flux of series magnet $\\propto I$, in phase with $I$
- $\\phi$ = Load phase angle (power factor $\\cos \\phi$)
- $\\beta = 90^{\\circ} - \\phi$ = Phase angle between $\\Phi_{sh}$ and $\\Phi_{se}$

The average driving torque produced on the disc is:
$$T_d \\propto \\Phi_{sh} \\cdot \\Phi_{se} \\cdot \\sin \\beta$$
$$T_d = K_1 \\cdot V \\cdot I \\cdot \\sin(90^{\\circ} - \\phi) = K_1 \\cdot V \\cdot I \\cdot \\cos \\phi = K_1 \\cdot P \\quad (\\text{Active Power})$$

The braking torque provided by the permanent magnet is:
$$T_b = K_2 \\cdot N$$
where $N$ is the rotational speed in revolutions per minute (RPM).

Under steady rotational speed, driving torque equals braking torque ($T_d = T_b$):
$$K_2 \\cdot N = K_1 \\cdot P \\implies N = \\left(\\frac{K_1}{K_2}\\right) P$$
The rotational speed is directly proportional to power $P$.

Integrating both sides with respect to time $t$:
$$\\text{Total Revolutions} = \\int_0^t N dt = \\frac{K_1}{K_2} \\int_0^t P dt = K \\times (\\text{Total Electrical Energy Consumed})$$

---

### 4. Meter Constant ($K$):
$$\\text{Meter Constant } (K) = \\frac{\\text{Total Revolutions}}{\\text{Energy in kWh}} \\quad (\\text{rev/kWh})$$

---

### 5. Creeping and Its Prevention
- **Creeping**: Slow, continuous rotation of the disc under no-load condition when only the pressure coil is energized.
- **Cause**: Excessive friction compensation (over-adjusted shading loop) or high supply voltage.
- **Prevention**: Two diametrically opposite small holes are drilled into the aluminum disc. When a hole comes under the shunt magnet pole, the distortion of eddy currents produces an opposing torque that arrests rotation until a real load is applied.`,
      detailedLearning: `Lag adjustment is critical: if $\\Phi_{sh}$ lags $V$ by $(90^{\\circ} - \\theta)$ instead of $90^{\\circ}$, the meter registers $V I \\cos(\\phi - \\theta)$, resulting in large errors at low power factors.`
    }
  },
  {
    id: 'fom-u4-q2',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Two-Wattmeter Method for 3-Phase Power Measurement',
    questionText: 'Explain the two-wattmeter method for measuring power in a three-phase system.',
    marks: 7,
    priority: 'very_high',
    type: 'theory',
    years: ['2024', '2022'],
    frequency: 'Repeated core 7M question',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Two-Wattmeter Summary Formulas:
- Total 3-Phase Power: $P = W_1 + W_2 = \\sqrt{3} V_L I_L \\cos \\phi$.
- Individual Readings:
  $$W_1 = V_L I_L \\cos(30^{\\circ} - \\phi)$$
  $$W_2 = V_L I_L \\cos(30^{\\circ} + \\phi)$$
- Power Factor Angle:
  $$\\tan \\phi = \\sqrt{3} \\left(\\frac{W_1 - W_2}{W_1 + W_2}\\right)$$
- Power factor: $\\cos \\phi = \\cos \\left[\\tan^{-1}\\left(\\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}\\right)\\right]$.
- **Special Cases**:
  - $\\cos \\phi = 1 \\implies W_1 = W_2$.
  - $\\cos \\phi = 0.5 (\\phi = 60^{\\circ}) \\implies W_2 = 0$.
  - $\\cos \\phi < 0.5 (\\phi > 60^{\\circ}) \\implies W_2 < 0$ (reads reverse).`,
      examAnswer: `### 1. Introduction and Connection
The two-wattmeter method is the universal industrial technique used to measure total active power and power factor in a 3-phase, 3-wire balanced or unbalanced system (Star or Delta connected).

#### Connection Scheme:
- Current coil of Wattmeter 1 ($W_1$) is inserted in Line R. Its pressure coil is connected between Line R and Line B.
- Current coil of Wattmeter 2 ($W_2$) is inserted in Line Y. Its pressure coil is connected between Line Y and Line B.
- Line B serves as the common reference line.

---

### 2. Phasor Derivation for Balanced Star Load

Let:
- $V_{RN}, V_{YN}, V_{BN}$ = Phase voltages of magnitude $V_{ph}$
- Line voltage $V_L = \\sqrt{3} V_{ph}$
- Line currents $I_R = I_Y = I_B = I_L$, lagging respective phase voltages by phase angle $\\phi$.

#### Reading of Wattmeter 1 ($W_1$):
- Current through current coil = $I_R$
- Voltage across pressure coil = $\\mathbf{V}_{RB} = \\mathbf{V}_{RN} - \\mathbf{V}_{BN}$
- Magnitude of voltage $V_{RB} = V_L$
- Phase angle between $\\mathbf{V}_{RB}$ and $\\mathbf{I}_R$ is $(30^{\\circ} - \\phi)$.
$$W_1 = V_{RB} \\cdot I_R \\cdot \\cos(\\angle(\\mathbf{V}_{RB}, \\mathbf{I}_R)) = V_L I_L \\cos(30^{\\circ} - \\phi) \\quad \\text{--- (Equation 1)}$$

#### Reading of Wattmeter 2 ($W_2$):
- Current through current coil = $I_Y$
- Voltage across pressure coil = $\\mathbf{V}_{YB} = \\mathbf{V}_{YN} - \\mathbf{V}_{BN}$
- Magnitude of voltage $V_{YB} = V_L$
- Phase angle between $\\mathbf{V}_{YB}$ and $\\mathbf{I}_Y$ is $(30^{\\circ} + \\phi)$.
$$W_2 = V_{YB} \\cdot I_Y \\cdot \\cos(\\angle(\\mathbf{V}_{YB}, \\mathbf{I}_Y)) = V_L I_L \\cos(30^{\\circ} + \\phi) \\quad \\text{--- (Equation 2)}$$

---

### 3. Total 3-Phase Active Power ($P$)
Summing Equations 1 and 2:
$$W_1 + W_2 = V_L I_L [\\cos(30^{\\circ} - \\phi) + \\cos(30^{\\circ} + \\phi)]$$
Using identity $\\cos(A - B) + \\cos(A + B) = 2 \\cos A \\cos B$:
$$W_1 + W_2 = V_L I_L [2 \\cos 30^{\\circ} \\cos \\phi] = V_L I_L \\left[2 \\left(\\frac{\\sqrt{3}}{2}\\right) \\cos \\phi\\right] = \\mathbf{\\sqrt{3} V_L I_L \\cos \\phi}$$
**Conclusion**: The algebraic sum $(W_1 + W_2)$ equals the total 3-phase real power regardless of power factor.

---

### 4. Determination of Power Factor ($\\cos \\phi$)
Subtracting Equation 2 from Equation 1:
$$W_1 - W_2 = V_L I_L [\\cos(30^{\\circ} - \\phi) - \\cos(30^{\\circ} + \\phi)] = V_L I_L [2 \\sin 30^{\\circ} \\sin \\phi] = V_L I_L \\sin \\phi$$
Dividing $(W_1 - W_2)$ by $(W_1 + W_2)$:
$$\\frac{W_1 - W_2}{W_1 + W_2} = \\frac{V_L I_L \\sin \\phi}{\\sqrt{3} V_L I_L \\cos \\phi} = \\frac{\\tan \\phi}{\\sqrt{3}}$$
$$\\mathbf{\\tan \\phi = \\sqrt{3} \\left(\\frac{W_1 - W_2}{W_1 + W_2}\\right)}$$
$$\\mathbf{\\text{Power Factor } = \\cos \\phi = \\cos \\left[\\tan^{-1}\\left(\\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}\\right)\\right]}$$

---

### 5. Effect of Power Factor on Wattmeter Readings
| Power Factor ($\\cos \\phi$) | Phase Angle $\\phi$ | $W_1$ Reading | $W_2$ Reading | Remarks |
|---|---|---|---|---|
| **$1.0$ (Unity)** | $0^{\\circ}$ | $W_1 = \\frac{\\sqrt{3}}{2} V_L I_L$ | $W_2 = \\frac{\\sqrt{3}}{2} V_L I_L$ | $W_1 = W_2$ (Equal positive readings) |
| **$0.5$** | $60^{\\circ}$ | $W_1 = V_L I_L$ | $W_2 = 0$ | One meter reads the entire total power |
| **$< 0.5$** | $> 60^{\\circ}$ | Positive | **Negative** | $W_2$ deflects backwards (reverse polarity) |
| **$0.0$ (Zero)** | $90^{\\circ}$ | $W_1 = +0.5 V_L I_L$ | $W_2 = -0.5 V_L I_L$ | $W_1 = -W_2$, Total power = 0 |`,
      detailedLearning: `If $W_2$ reads backwards (below zero), reverse either the current coil or pressure coil connections to take a reading, and then record it with a **negative sign** ($P = W_1 - W_2$).`
    }
  },
  {
    id: 'fom-u4-q3',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Construction and Working of Dynamometer-Type Wattmeter',
    questionText: 'Explain the construction and working of a dynamometer-type wattmeter.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2023', '2019'],
    frequency: 'Repeated core 7M question',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Fixed coils (Current Coils): Carry load current $I$, split into two halves for uniform field.
- Moving coil (Pressure Coil): Connected across voltage $V$ with series non-inductive resistor $R_s$.
- Deflecting Torque: $T_d = I_1 I_2 \\frac{dM}{d\\theta} = \\left(I\\right) \\left(\\frac{V}{R_p}\\right) \\frac{dM}{d\\theta} \\propto V I \\cos \\phi = \\text{Power}$.
- Uniform linear scale ($\\\\theta \\propto P$).`,
      examAnswer: `### Dynamometer-Type Wattmeter

#### 1. Operating Principle
An electrodynamometer-type wattmeter operates on the mutual magnetic interaction between fixed coils carrying load current and a moving coil carrying a current proportional to line voltage.

---

#### 2. Constructional Details
1. **Fixed Coils (Current Coils)**:
   - Divided into two identical halves separated by a central gap.
   - Wound with thick, insulated copper conductors to carry heavy load current with negligible voltage drop.
   - Produces a uniform magnetic field in the center where the moving coil rotates.
2. **Moving Coil (Pressure / Voltage Coil)**:
   - Mounted on a vertical pivoted spindle in the central air gap between the fixed coils.
   - Wound with fine copper wire to minimize mass and inertia.
   - Connected in series with a large, non-inductive swamping resistor $R_s$ (Manganin) across the supply lines.
3. **Control System**:
   - Two phosphor-bronze hairsprings provide controlling torque and convey current into and out of the moving coil.
4. **Damping System**:
   - Air friction damping using a light aluminum vane moving in an enclosed air chamber.
   *(Eddy current damping cannot be used because stray permanent magnets would distort the weak air-cored magnetic field)*.

---

#### 3. Mathematical Derivation of Torque
Let:
- $v = V_m \\sin \\omega t$ = Instantaneous supply voltage
- $i = I_m \\sin(\\omega t - \\phi)$ = Instantaneous load current
- $R_p$ = Total resistance of pressure coil circuit ($R_p = R_v + R_s$)

The instantaneous current in the pressure coil is strictly in phase with supply voltage:
$$i_p = \\frac{v}{R_p} = \\frac{V_m}{R_p} \\sin \\omega t$$

The instantaneous deflecting torque is:
$$T_i = i \\cdot i_p \\cdot \\frac{dM}{d\\theta} = [I_m \\sin(\\omega t - \\phi)] \\left[\\frac{V_m}{R_p} \\sin \\omega t\\right] \\frac{dM}{d\\theta}$$
$$T_i = \\frac{V_m I_m}{R_p} \\sin \\omega t \\sin(\\omega t - \\phi) \\frac{dM}{d\\theta}$$

The average deflecting torque over one full AC cycle is:
$$T_d = \\frac{1}{2\\pi} \\int_0^{2\\pi} T_i \\, d(\\omega t) = \\frac{V_m I_m}{2 R_p} \\cos \\phi \\left(\\frac{dM}{d\\theta}\\right)$$
Since $V = V_m/\\sqrt{2}$ and $I = I_m/\\sqrt{2}$:
$$T_d = \\frac{V I}{R_p} \\cos \\phi \\left(\\frac{dM}{d\\theta}\\right) = \\left(\\frac{1}{R_p} \\frac{dM}{d\\theta}\\right) \\cdot P$$
where $P = V I \\cos \\phi$ is active true power.

Equating to spring control torque $T_c = C \\theta$:
$$\\theta = \\left(\\frac{1}{C R_p} \\frac{dM}{d\\theta}\\right) \\cdot P$$
$$\\mathbf{\\theta \\propto P}$$
**Conclusion**: The angular deflection of the pointer is strictly directly proportional to true power. The wattmeter scale is uniform and linear.`,
      detailedLearning: `Error due to Pressure Coil Inductance:
In reality, the pressure coil has small inductance $L$. Current lags voltage by small angle $\\beta = \\tan^{-1}(\\omega L / R_p)$. The actual reading becomes:
$$W_{actual} = \\frac{\\cos \\phi}{\\cos \\beta \\cos(\\phi - \\beta)} W_{true}$$
At low lagging power factors, the wattmeter over-reads significantly.`
    }
  },
  {
    id: 'fom-u4-q4',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Kelvin\'s Double Bridge Balance Condition Derivation for Low Resistance',
    questionText: 'Draw the circuit diagram of Kelvin\'s double bridge and derive the balance condition for measurement of low resistance.',
    marks: 7,
    priority: 'very_high',
    type: 'derivation',
    years: ['2024', '2023', '2022'],
    frequency: 'Repeated 3 times (Top Priority recurring bridge derivation)',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: true,
    answer: {
      quickRevision: `### Kelvin Double Bridge Balance Equation:
$$R = \\frac{P}{Q} S + \\frac{q r}{p + q + r} \\left(\\frac{P}{Q} - \\frac{p}{q}\\right)$$
- If the inner and outer ratio arms are set equal:
  $$\\frac{P}{Q} = \\frac{p}{q}$$
- Then the second term vanishes completely:
  $$\\mathbf{R = \\frac{P}{Q} S}$$
- Lead resistance $r$ and contact resistance are completely eliminated!
- Ideal for measuring low resistance ($< 1\\ \\Omega$, down to $1\\ \\mu\\Omega$).`,
      examAnswer: `### 1. Introduction
Kelvin's Double Bridge is a modification of the Wheatstone bridge designed specifically to measure low resistances (from $1\\ \\Omega$ down to $1\\ \\mu\\Omega$) with extreme accuracy by completely eliminating the errors caused by connecting lead resistances and contact resistances.

---

### 2. Circuit Diagram and Nomenclature
- $R$ = Unknown low resistance under test
- $S$ = Standard low resistance of known value
- $r$ = Connecting lead resistance between $R$ and $S$
- $P, Q$ = Outer ratio arms (precision non-inductive decade resistors)
- $p, q$ = Inner ratio arms
- $G$ = Sensitive galvanometer detector

---

### 3. Derivation of Balance Condition

Consider the inner ratio arms $p$ and $q$ connected across the link resistance $r$.
Using Delta-Star ($\\Delta - Y$) transformation, the mesh consisting of $p, q,$ and $r$ can be converted into an equivalent star network with star point $c$:
$$r_a = \\frac{p \\cdot r}{p + q + r}$$
$$r_b = \\frac{q \\cdot r}{p + q + r}$$
$$r_c = \\frac{p \\cdot q}{p + q + r}$$

The branch resistance $r_c$ appears in series with the galvanometer branch and merely affects detector sensitivity without altering the null balance point.
The branch resistance $r_a$ is placed in series with $R$, and $r_b$ is placed in series with $S$.

The circuit now reduces to a simple four-arm bridge:
$$\\frac{P}{Q} = \\frac{R + r_a}{S + r_b}$$
$$P(S + r_b) = Q(R + r_a)$$
$$R + r_a = \\frac{P}{Q} (S + r_b)$$
$$R = \\frac{P}{Q} S + \\frac{P}{Q} r_b - r_a$$

Substitute the expressions for $r_a$ and $r_b$:
$$R = \\frac{P}{Q} S + \\frac{P}{Q} \\left(\\frac{q \\cdot r}{p + q + r}\\right) - \\left(\\frac{p \\cdot r}{p + q + r}\\right)$$
$$R = \\frac{P}{Q} S + \\frac{r}{p + q + r} \\left(\\frac{P}{Q} q - p\\right)$$
Factor out $q$:
$$\\mathbf{R = \\frac{P}{Q} S + \\frac{q \\cdot r}{p + q + r} \\left(\\frac{P}{Q} - \\frac{p}{q}\\right)} \\quad \\text{--- (General Balance Equation)}$$

---

### 4. Condition for Lead Resistance Elimination
The inner and outer ratio arms are mechanically ganged together on dual-concentric rotary dials such that their resistance ratios are always maintained strictly identical:
$$\\frac{P}{Q} = \\frac{p}{q}$$
Then:
$$\\left(\\frac{P}{Q} - \\frac{p}{q}\\right) = 0$$
The second term in the general equation drops out entirely, yielding:
$$\\mathbf{R = \\frac{P}{Q} S}$$

---

### 5. Significant Conclusions:
1. **Complete Immunity to Lead Resistance**: The connecting lead resistance $r$ between $R$ and $S$ does not appear in the final balance equation.
2. **Four-Terminal Connections**: Both $R$ and $S$ use four-terminal connections (two current terminals carrying high source current, two potential terminals across which $P$ and $p$ are connected), entirely eliminating terminal contact voltage drops.`,
      detailedLearning: `If $P/Q \\neq p/q$ due to component tolerance $\\epsilon$, the residual error term is $\\Delta R = \\frac{q r}{p + q + r} \\epsilon$. Since $r$ is tiny ($< 0.01\\ \\Omega$), the error remains negligible.`
    }
  },
  {
    id: 'fom-u4-q5',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Low-Resistance Bridge vs Medium-Range Resistance Bridges',
    questionText: 'Explain the bridge used for measurement of low resistance and discuss its merits and demerits compared with a medium-range resistance bridge.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2025', '2022'],
    frequency: 'Repeated comparison question',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Low resistance ($< 1\\ \\Omega$): Kelvin's Double Bridge.
- Medium resistance ($1\\ \\Omega - 100\\text{ k}\\Omega$): Wheatstone Bridge.
- Why Wheatstone fails for low R: Contact and lead resistance ($0.01 - 0.1\\ \\Omega$) become comparable to unknown resistance, causing 10% - 100% error.`,
      examAnswer: `### Comparison: Low-Resistance Bridge (Kelvin's Double Bridge) vs Medium-Range Bridge (Wheatstone Bridge)

#### 1. The Low-Resistance Measurement Bridge: Kelvin's Double Bridge
A Kelvin's Double Bridge employs two sets of ratio arms ($P/Q$ and $p/q$) and four-terminal connections to measure resistances ranging from $1\\ \\Omega$ down to $1\\ \\mu\\Omega$.

---

### 2. Why the Wheatstone Bridge Fails for Low Resistance:
1. **Lead and Contact Resistance Error**:
   In a Wheatstone bridge, connecting wires have resistance ($r_{lead} \\approx 0.005 - 0.05\\ \\Omega$), and terminal contact screws introduce contact resistance ($r_{contact} \\approx 0.01\\ \\Omega$).
   When measuring a medium resistance ($1000\\ \\Omega$), an error of $0.02\\ \\Omega$ is negligible ($0.002\\%$).
   When measuring a low resistance of $0.01\\ \\Omega$, an extraneous lead resistance of $0.02\\ \\Omega$ causes a catastrophic **$200\\%$ measurement error!**
2. **Current Carrying Limitation**:
   Low resistances require substantial test current ($1 - 10\\text{ A}$) to generate measurable millivolt drops, which standard Wheatstone bridge ratio arms cannot handle.

---

### 3. Merits of Kelvin's Double Bridge:
1. **Absolute Elimination of Lead & Contact Resistances**: The duplicate inner ratio arms ($p, q$) cancel out the interconnecting link resistance $r$.
2. **Four-Terminal Design**: Potential leads carry negligible galvanometer current ($< 1\\mu\\text{A}$), making potential terminal contact drops zero.
3. **High Measurement Accuracy**: Can achieve $\\pm 0.05\\%$ accuracy down to $10\\ \\mu\\Omega$.

---

### 4. Demerits of Kelvin's Double Bridge:
1. **Circuit Complexity**: Requires four ratio arm arms ($P, Q, p, q$) that must be precisely matched ($P/Q = p/q$).
2. **Heavy Current Source Needed**: Requires high-current DC regulated power supply or heavy storage battery ($10 - 50\\text{ A}$) to pass sufficient current through $R$ and $S$.
3. **Thermo-Electric EMFs**: Heavy test currents cause localized Joule heating at junctions, generating parasitic Seebeck thermal EMFs that must be canceled by reversing DC current polarity.`,
      detailedLearning: `For ultra-low resistances in superconductors ($< 1\\text{ n}\\Omega$), AC cryogenic SQUID bridges are used.`
    }
  },
  {
    id: 'fom-u4-q6',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Low-Power-Factor (LPF) Wattmeter Method',
    questionText: 'Explain the low-power-factor wattmeter method.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2023'],
    frequency: 'Appeared in 2023 7-mark section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### LPF Wattmeter Features:
1. **Low Power Factor ($\cos \phi < 0.2$)**: Deflecting torque is tiny ($T_d \propto V I \cos \phi$).
2. **Special Modifications**:
   - Small spring control stiffness to boost deflection.
   - Low pressure coil resistance ($R_p$) to maximize pressure current $I_p$.
   - **Compensating Coil**: Neutralizes magnetic field produced by pressure coil current flowing through current coil.
   - **Capacitor across multiplier**: Neutralizes pressure coil inductance ($\omega L = 1/\omega C$).`,
      examAnswer: `### Low-Power-Factor (LPF) Wattmeter

#### 1. Why Standard Wattmeters Are Unsuitable at Low Power Factor
In circuits with low power factor ($\cos \phi < 0.1$ to $0.2$, such as no-load transformer tests or induction motor starting):
1. **Deflecting Torque is Extremely Weak**:
   $$T_d \propto V I \cos \phi$$
   Even with full-scale voltage and current, the pointer scarcely deflects beyond $10\%$ of the scale, causing poor reading accuracy.
2. **Pressure Coil Inductance Error Dominates**:
   The correction factor is $\frac{\cos \phi}{\cos \beta \cos(\phi - \beta)}$. When $\phi \to 90^\circ$, even a tiny phase lag $\beta$ in the pressure coil creates huge percentage over-reading errors.

---

#### 2. Design Modifications in LPF Wattmeters

#### (a) High Deflection Sensitivity
- The controlling spring stiffness is reduced by a factor of 10.
- The number of turns on both fixed and moving coils is increased to maximize magnetic interaction.

#### (b) Low Pressure Coil Circuit Resistance
- To obtain adequate driving torque, the series resistance in the pressure coil circuit is reduced, allowing higher current $I_p$ to flow.

#### (c) Compensating Winding for Power Loss
- Since current coil and pressure coil currents are of comparable order, the power loss in the pressure coil ($I_p^2 R_p$) is significant.
- A **compensating winding** is wound coincident with the main current coil conductors. The pressure coil current flows through this compensating winding in the reverse direction, producing an opposing magnetic flux that exactly neutralizes the magnetic field due to $I_p$ in the current coil.

#### (d) Inductance Compensation Capacitor
- A small capacitor $C$ is connected in parallel with a portion of the series multiplier resistor $R_s$:
  $$C = \frac{L}{r^2}$$
  This makes the pressure coil circuit strictly non-inductive across a wide frequency range, eliminating phase error $\beta$.`,
      detailedLearning: `Using a standard wattmeter for transformer open-circuit testing yields wildly inflated core loss readings due to power factor errors.`
    }
  },
  {
    id: 'fom-u4-q7',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Measurement of Power in AC and DC Circuits',
    questionText: 'Explain the measurement of power in AC and DC circuits.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2025'],
    frequency: 'Comprehensive overview in 2025 7M paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- **DC Power**: $P = V \times I$. Measured using Ammeter-Voltmeter method or PMMC wattmeter.
- **AC Power**:
  - Active: $P = V I \cos \phi$ (Watts) - Dynamometer wattmeter.
  - Reactive: $Q = V I \sin \phi$ (VAR) - Varmeter.
  - Apparent: $S = V I$ (VA).
  - 3-Phase AC: Measured using Two-Wattmeter method ($P = W_1 + W_2$).`,
      examAnswer: `### Power Measurement in DC and AC Circuits

---

### 1. DC Power Measurement

In DC circuits, power is simply the product of voltage and current ($P = V \cdot I$, in Watts).
- **Ammeter-Voltmeter Method**:
  1. *Connection 1 (Ammeter near load)*: Measures true load current, but voltmeter includes ammeter drop: $P_{measured} = V I = P_{true} + I^2 R_a$. Used for high-resistance loads ($R_L \gg R_a$).
  2. *Connection 2 (Voltmeter near load)*: Measures true load voltage, but ammeter includes voltmeter current: $P_{measured} = V I = P_{true} + V^2 / R_v$. Used for low-resistance loads ($R_L \ll R_v$).
- **PMMC Wattmeter**: Fixed permanent magnet provides field, moving coil carries voltage current.

---

### 2. AC Power Measurement

In alternating current circuits with reactive components (inductors, capacitors), current lags or leads voltage by phase angle $\phi$:
- **Instantaneous Power**: $p(t) = v(t) \cdot i(t) = V_m \sin \omega t \cdot I_m \sin(\omega t - \phi)$
- **Active (Real) Power**:
  $$P = V I \cos \phi \quad (\text{Watts})$$
  *(The actual average rate of energy dissipated into heat or mechanical work)*.
- **Reactive Power**:
  $$Q = V I \sin \phi \quad (\text{Volt-Amperes Reactive, VAR})$$
  *(Oscillating energy stored and released alternately by magnetic/electric fields)*.
- **Apparent Power**:
  $$S = V I \quad (\text{Volt-Amperes, VA})$$
  $$S = \sqrt{P^2 + Q^2}$$

#### Instruments for AC Power:
1. **Electrodynamometer Wattmeter**: The universal analog instrument for single-phase active power ($T_d \propto V I \cos \phi$).
2. **Two-Wattmeter Method**: Used for 3-phase systems without neutral connection ($P_{3\phi} = W_1 + W_2$).
3. **Digital Power Analyzer**: Uses high-speed dual ADCs sampling $v(t)$ and $i(t)$ simultaneously, computing $P = \frac{1}{N} \sum v_k i_k$ directly via DSP algorithms.`,
      detailedLearning: `Digital power analyzers measure true power accurately even in the presence of heavy harmonic distortion (THD) caused by modern non-linear switched-mode power supplies (SMPS).`
    }
  },

  // --- 2-3 MARK QUESTIONS ---
  {
    id: 'fom-u4-q8',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Definitions of Power Factor and Q-Factor',
    questionText: 'Define power factor and Q-factor.',
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
      quickRevision: `- **Power Factor**: Ratio of active power to apparent power ($\cos \phi = P / S$).
- **Q-Factor**: Quality factor of coil ($Q = \omega L / R = \text{Reactive Power} / \text{Active Power}$).`,
      examAnswer: `**Power Factor ($\cos \phi$)**: The ratio of the active (real) power $P$ in Watts to the apparent power $S$ in Volt-Amperes in an AC circuit:
$$\text{Power Factor} = \frac{P}{S} = \frac{V I \cos \phi}{V I} = \cos \phi$$

**Q-Factor (Quality Factor)**: The figure of merit of an energy-storing component (inductor or capacitor), defined as $2\pi$ times the ratio of maximum energy stored to energy dissipated per cycle:
$$Q = \frac{\omega L}{R} = \frac{\text{Reactive Power}}{\text{Active Power}}$$`,
      detailedLearning: `A high Q-factor ($Q > 10$) indicates an inductor with low internal copper loss resistance.`
    }
  },
  {
    id: 'fom-u4-q9',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Power in AC and DC Circuits',
    questionText: 'Define power in AC and DC circuits.',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2025'],
    frequency: 'Appeared in 2025 2-mark paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- DC Power: Steady rate of energy transfer ($P = V \times I$).
- AC Power: Average of instantaneous power ($P = V_{rms} I_{rms} \cos \phi$).`,
      examAnswer: `**DC Power**: The time rate at which electrical energy is transferred in a unidirectional direct current circuit, equal to the scalar product of voltage and current:
$$P = V \times I = I^2 R = \frac{V^2}{R} \quad (\text{Watts})$$

**AC Active Power**: The real power absorbed by an AC circuit, defined as the average of the instantaneous power $p(t) = v(t) i(t)$ over one complete cycle:
$$P = V_{rms} \cdot I_{rms} \cdot \cos \phi \quad (\text{Watts})$$
where $\phi$ is the phase angle between voltage and current.`,
      detailedLearning: `In DC, current and voltage are always in phase; in AC, phase displacement $\phi$ reduces real work done.`
    }
  },
  {
    id: 'fom-u4-q10',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Difference Between AC and DC Power Measurement',
    questionText: 'What is the difference between AC and DC power measurement?',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2025'],
    frequency: 'Appeared in 2025 2-mark paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- DC power depends solely on magnitudes ($V \times I$).
- AC power depends crucially on phase angle $\phi$ ($V I \cos \phi$); meters must account for phase displacement and reactive components.`,
      examAnswer: `### Comparison: AC vs DC Power Measurement
1. **Phase Dependency**: In DC, power is strictly $P = V \times I$ without phase considerations. In AC, power depends on the phase angle $\phi$ ($P = V I \cos \phi$). Simply multiplying voltmeter and ammeter readings in AC yields apparent power ($VA$), not real power ($W$).
2. **Instrument Requirement**: DC power can be accurately determined using separate voltmeter and ammeter. AC power strictly requires a specialized wattmeter (electrodynamometer or digital) that integrates instantaneous product $v(t) \cdot i(t)$.`,
      detailedLearning: `In purely reactive AC circuits ($\phi = 90^\circ$), current can be 100 A at 230 V, but active power dissipated is 0 Watts!`
    }
  },
  {
    id: 'fom-u4-q11',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Dissipation Factor and Loss Angle Definitions',
    questionText: 'Define dissipation factor and loss angle.',
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
      quickRevision: `- **Loss Angle ($\delta$)**: Angle by which current in imperfect capacitor falls short of ideal $90^\circ$ lead ($\delta = 90^\circ - \theta$).
- **Dissipation Factor ($D$)**: Tangent of loss angle ($D = \tan \delta = \omega C r = 1/Q$).`,
      examAnswer: `**Loss Angle ($\delta$)**: In an ideal capacitor, current leads voltage by exactly $90^\circ$. Due to dielectric and leakage resistance, the actual phase angle $\theta$ is slightly less than $90^\circ$. The defect angle $\delta = 90^\circ - \theta$ is called the **dielectric loss angle**.

**Dissipation Factor ($D$)**: The tangent of the dielectric loss angle, representing the ratio of active power dissipated in the dielectric to reactive power:
$$D = \tan \delta = \frac{I_R}{I_C} = \frac{r}{1/(\omega C)} = \omega C r = \frac{1}{Q}$$
where $r$ is the equivalent series resistance (ESR).`,
      detailedLearning: `A high dissipation factor in an HV bushing or transformer oil indicates moisture contamination and impending breakdown.`
    }
  },
  {
    id: 'fom-u4-q12',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Operating Principle of Induction Energy Meter',
    questionText: 'What is the principle of operation of an energy meter?',
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
      quickRevision: `- Ferraris Induction Motor principle: Alternating magnetic fluxes induce eddy currents in aluminum disc, creating torque $T_d \propto P$. Speed $N \propto P \implies \text{Revs} \propto \text{Energy}$.`,
      examAnswer: `An **induction energy meter** operates on the induction principle (Ferraris principle):
Two alternating magnetic fluxes—one proportional to supply voltage ($\Phi_{sh}$) and one proportional to load current ($\Phi_{se}$)—induce eddy currents in a pivoted aluminum disc. The interaction between each flux and the eddy currents induced by the other flux produces a continuous driving torque proportional to real active power ($T_d \propto V I \cos \phi$). A permanent magnet provides braking torque ($T_b \propto N$), making rotor revolutions directly proportional to total electrical energy consumed ($\text{kWh}$).`,
      detailedLearning: `The mechanical gear train simply counts the revolutions of the aluminum rotor.`
    }
  },
  {
    id: 'fom-u4-q13',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Methods Used for Measurement of Low Resistance',
    questionText: 'List the methods used for measurement of low resistance.',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2025', '2023'],
    frequency: 'Repeated list in 2-mark papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `Methods for low resistance ($< 1\ \Omega$):
1. Kelvin's Double Bridge method (most accurate).
2. Potentiometer method.
3. Ammeter-Voltmeter method (with 4-terminal connections).
4. Ohmmeter / Milliohmmeter (Kelvin sensing).`,
      examAnswer: `The standard methods used for measuring low resistances (values below $1\ \Omega$) are:
1. **Kelvin's Double Bridge Method**: The industry standard bridge that eliminates lead and contact resistance errors.
2. **DC Potentiometer Method**: Compares the voltage drop across the unknown resistance with that across a known standard low resistor using a slide-wire potentiometer.
3. **Ammeter-Voltmeter Method**: Using separate current and potential leads with high-accuracy digital meters.
4. **Direct-Reading Digital Micro-Ohmmeter (4-Wire Kelvin Clip Method)**: Injects constant DC current and reads voltage drops.`,
      detailedLearning: `Ordinary 2-wire multimeters cannot measure low resistance because test lead probe resistance ($0.2 - 0.5\ \Omega$) corrupts the reading.`
    }
  },
  {
    id: 'fom-u4-q14',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Purpose and Role of Instrument Transformers',
    questionText: 'What is the purpose of an instrument transformer?',
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
      quickRevision: `1. Step down high AC currents/voltages to standardized safe levels ($5\text{ A}, 110\text{ V}$).
2. Provide galvanic safety isolation for operating personnel and metering panels.`,
      examAnswer: `The primary purposes of **Instrument Transformers (CTs and PTs)** are:
1. **Scaling**: To step down high transmission-level currents (kiloamperes) and voltages (kilovolts) to safe, standardized values ($5\text{ A}$ for current coils, $110\text{ V}$ for potential coils) suitable for standard commercial meters.
2. **Safety Isolation**: To physically isolate measuring instruments, control relays, and operators from hazardous high-voltage transmission lines, with secondary terminals safely grounded.`,
      detailedLearning: `Without instrument transformers, high-voltage substations would be impossible to monitor safely.`
    }
  },
  {
    id: 'fom-u4-q15',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Key Advantages of Kelvin\'s Double Bridge',
    questionText: 'What are the advantages of Kelvin\'s double bridge?',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2024', '2022'],
    frequency: 'Repeated in 2022 and 2024 2-mark papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `1. Completely eliminates connecting lead and contact resistance errors.
2. Achieves high accuracy ($\pm 0.05\%$) for ultra-low values ($1\ \mu\Omega$ to $1\ \Omega$).
3. Utilizes 4-terminal connections for both unknown and standard resistors.`,
      examAnswer: `### Advantages of Kelvin's Double Bridge:
1. **Lead Resistance Elimination**: By using matched inner ratio arms ($p/q = P/Q$), the connecting lead resistance between unknown and standard resistors is completely cancelled from the balance equation.
2. **Contact Resistance Immunity**: Four-terminal connections ensure that contact resistances carry no detector current, eliminating contact voltage drops.
3. **High Metrological Precision**: Capable of measuring resistances down to $10^{-6}\ \Omega$ ($1\ \mu\Omega$) with high accuracy ($\pm 0.1\%$).`,
      detailedLearning: `It remains the gold standard for verifying transformer winding resistance, busbar contact integrity, and cable conductivity.`
    }
  },
  {
    id: 'fom-u4-q16',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Definition of Low-Power-Factor Wattmeter',
    questionText: 'What is a low-power-factor wattmeter?',
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
      quickRevision: `- Specially designed dynamometer wattmeter for measuring power in low power factor circuits ($\cos \phi < 0.2$).
- Features light control springs, low pressure coil resistance, compensating winding, and inductance compensation capacitor.`,
      examAnswer: `A **Low-Power-Factor (LPF) Wattmeter** is an electrodynamometer wattmeter specially engineered to accurately measure active electrical power in circuits having very low power factors ($\cos \phi \le 0.2$):
- Incorporates high-sensitivity weak control springs to yield large pointer deflection despite low driving torque.
- Features low-impedance pressure coil circuits and a **compensating winding** to cancel power losses caused by pressure coil current.
- Utilizes capacitor compensation to eliminate pressure coil phase angle error $\beta$.`,
      detailedLearning: `Standard wattmeters cannot read transformer core losses because the excitation current power factor is typically $< 0.15$.`
    }
  },

  // --- NUMERICAL QUESTIONS ---
  {
    id: 'fom-u4-q17',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Error in Electrodynamometer Ammeter Calibrated on DC and Used on AC',
    questionText: 'An electrodynamometer ammeter has a deflection of 40° for a direct current of 5 A. The instrument has spring control. Calculate: (a) The deflection produced by an alternating current of 5 A (RMS), and (b) The reading of the ammeter when carrying an AC current with a peak of 7.07 A.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2023'],
    frequency: 'Appeared in 2023 7M numerical section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- $T_d \propto I_{rms}^2$.
- For DC: $5\text{ A} \implies \theta = 40^{\circ}$.
- For AC (5 A RMS): $I_{rms} = 5\text{ A} \implies \theta = 40^{\circ}$ (Electrodynamometer is a true RMS instrument!).
- For peak $7.07\text{ A}$: $I_{rms} = 7.07 / \sqrt{2} = 5.0\text{ A} \implies \theta = 40^{\circ}$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Instrument: Electrodynamometer ammeter with spring control ($T_c = C \theta$)
- Direct current ($I_{dc}$) = $5\text{ A}$
- Deflection produced on DC ($\theta_1$) = $40^{\circ}$

---

#### 2. Governing Torque Relation:
In an electrodynamometer ammeter with both fixed and moving coils in series:
$$T_d = I^2 \frac{dM}{d\theta}$$
With spring control ($T_c = C \theta$):
$$\theta \propto I^2$$
For alternating currents, the deflection is governed by the square of the RMS value:
$$\theta \propto I_{rms}^2$$

---

#### 3. Part (a): Deflection Produced by 5 A (RMS) AC Current
Since the instrument deflects proportional to the square of current:
$$\frac{\theta_{ac}}{\theta_{dc}} = \frac{I_{rms}^2}{I_{dc}^2}$$
Given $I_{rms} = 5\text{ A}$ and $I_{dc} = 5\text{ A}$:
$$\frac{\theta_{ac}}{40^{\circ}} = \frac{(5)^2}{(5)^2} = 1$$
$$\mathbf{\theta_{ac} = 40^{\circ}}$$
**Conclusion**: An electrodynamometer ammeter calibrated on DC will indicate the exact same deflection on AC of the same RMS value without calibration error. (It is a true transfer standard!).

---

#### 4. Part (b): Reading for AC Current with Peak of 7.07 A
For a sinusoidal current:
$$I_{rms} = \frac{I_{peak}}{\sqrt{2}} = \frac{7.071\text{ A}}{1.4142} = \mathbf{5.00\text{ A}}$$
Since $I_{rms} = 5.0\text{ A}$:
$$\mathbf{\text{Indicated Reading} = 5.0\text{ A}}$$
Deflection is $\mathbf{40^{\circ}}$.

---

#### 5. Final Answer:
- (a) Deflection on 5 A RMS AC: $\mathbf{40^{\circ}}$
- (b) Ammeter reading for 7.07 A peak: $\mathbf{5.0\text{ A}}$ (Deflection: $\mathbf{40^{\circ}}$)`,
      detailedLearning: `This problem demonstrates why electrodynamic instruments serve as transfer standards between DC primary standards and AC working meters.`
    }
  },
  {
    id: 'fom-u4-q18',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Kelvin\'s Double Bridge Unknown Low Resistance Calculation',
    questionText: 'A Kelvin\'s double bridge has the following parameters: Ratio of outer arms P/Q = 1000/1000 = 1; ratio of inner arms p/q = 1000/1002; standard resistor S = 0.001 Ω; and connecting lead resistance r = 0.005 Ω. Calculate the value of the unknown resistance R. What would be the percentage error if the inner ratio was exactly equal to the outer ratio?',
    marks: 7,
    priority: 'very_high',
    type: 'numerical',
    years: ['2024'],
    frequency: 'Core bridge numerical repeated in 2024',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: true,
    answer: {
      quickRevision: `- General Formula: $R = \frac{P}{Q} S + \frac{q r}{p + q + r} \left(\frac{P}{Q} - \frac{p}{q}\right)$.
- Term 1: $\frac{1000}{1000} \times 0.001 = 0.001\ \Omega$.
- Term 2: $\frac{1002 \times 0.005}{2002.005} \times \left(1 - \frac{1000}{1002}\right) = 0.0025 \times 0.001996 = 5 \times 10^{-6}\ \Omega$.
- $R = 0.001005\ \Omega$.
- If $P/Q = p/q$, $R = 0.001\ \Omega$. Error = $0.5\%$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Outer ratio: $P = 1000\ \Omega$, $Q = 1000\ \Omega \implies \frac{P}{Q} = 1.0000$
- Inner ratio: $p = 1000\ \Omega$, $q = 1002\ \Omega \implies \frac{p}{q} = \frac{1000}{1002} = 0.998004$
- Standard resistor ($S$) = $0.001\ \Omega = 10^{-3}\ \Omega$
- Connecting lead resistance ($r$) = $0.005\ \Omega$

---

#### 2. General Formula:
$$R = \frac{P}{Q} S + \frac{q \cdot r}{p + q + r} \left(\frac{P}{Q} - \frac{p}{q}\right)$$

---

#### 3. Step-by-Step Substitution:

**Step 1: Compute Primary Term:**
$$\text{Term 1} = \frac{P}{Q} S = (1.0000) \times (0.001\ \Omega) = 0.001000\ \Omega$$

**Step 2: Compute Factor $\frac{q \cdot r}{p + q + r}$:**
$$p + q + r = 1000 + 1002 + 0.005 = 2002.005\ \Omega$$
$$\frac{q \cdot r}{p + q + r} = \frac{1002 \times 0.005}{2002.005} = \frac{5.01}{2002.005} = 0.00250249\ \Omega$$

**Step 3: Compute Ratio Mismatch $\left(\frac{P}{Q} - \frac{p}{q}\right)$:**
$$\frac{P}{Q} - \frac{p}{q} = 1.0000 - \frac{1000}{1002} = \frac{1002 - 1000}{1002} = \frac{2}{1002} = 0.0019960$$

**Step 4: Compute Residual Error Term:**
$$\text{Term 2} = 0.00250249 \times 0.0019960 = 4.995 \times 10^{-6}\ \Omega \approx 0.000005\ \Omega$$

**Step 5: Compute Total Unknown Resistance ($R$):**
$$R = 0.001000\ \Omega + 0.000005\ \Omega = \mathbf{0.001005\ \Omega = 1.005\text{ m}\Omega}$$

---

#### 4. Comparison when $P/Q = p/q$:
If inner arms match outer arms ($p/q = P/Q = 1$):
$$R_{ideal} = \frac{P}{Q} S = \mathbf{0.001000\ \Omega = 1.000\text{ m}\Omega}$$

$$\% \text{ Discrepancy} = \frac{0.001005 - 0.001000}{0.001000} \times 100 = \mathbf{+0.50\%}$$

---

#### 5. Final Answer:
- **Actual Unknown Resistance ($R$)**: $\mathbf{0.001005\ \Omega}$
- **Ideal Resistance with matched ratio arms**: $\mathbf{0.001000\ \Omega}$
- **Percentage error due to ratio mismatch**: $\mathbf{0.50\%}$`,
      detailedLearning: `This problem clearly proves the necessity of maintaining $P/Q = p/q$ with matched precision resistors in Kelvin bridge assemblies.`
    }
  },
  {
    id: 'fom-u4-q19',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Current and Power Calculation at Bridge Balance',
    questionText: 'In a Kelvin\'s double bridge, the working battery supplies a total current of 10 A through the series combination of an unknown resistance R and a standard resistor S = 0.05 Ω. If P = 1000 Ω, Q = 500 Ω, p = 1000 Ω, q = 500 Ω, and link resistance r = 0.01 Ω, calculate: (a) The value of R, (b) The voltage drop across R, and (c) The power dissipated in R.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2022'],
    frequency: 'Comprehensive power & bridge calculation',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Ratio: $P/Q = p/q = 1000/500 = 2$.
- $R = (P/Q) S = 2 \times 0.05 = 0.1\ \Omega$.
- Voltage drop: $V_R = I \times R = 10 \times 0.1 = 1.0\text{ V}$.
- Power dissipated: $P = I^2 R = (10)^2 \times 0.1 = 10\text{ W}$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Supply current through main loop ($I$) = $10\text{ A}$
- Standard resistance ($S$) = $0.05\ \Omega$
- Outer ratio arms: $P = 1000\ \Omega$, $Q = 500\ \Omega \implies P/Q = 2.0$
- Inner ratio arms: $p = 1000\ \Omega$, $q = 500\ \Omega \implies p/q = 2.0$
- Link resistance ($r$) = $0.01\ \Omega$

---

#### 2. Part (a): Value of Unknown Resistance ($R$)
Since $P/Q = p/q = 2.0$, the balance equation simplifies strictly to:
$$R = \left(\frac{P}{Q}\right) \cdot S$$
$$R = 2.0 \times 0.05\ \Omega = \mathbf{0.10\ \Omega = 100\text{ m}\Omega}$$

---

#### 3. Part (b): Voltage Drop Across $R$ ($V_R$)
Using Ohm's law (noting that the ratio arm resistances are $> 1000\ \Omega$, shunting negligible current $< 1\text{ mA}$ from the $10\text{ A}$ loop):
$$V_R = I \times R = 10\text{ A} \times 0.10\ \Omega = \mathbf{1.00\text{ V}}$$

---

#### 4. Part (c): Power Dissipated in $R$ ($P_R$)
$$P_R = I^2 \times R = (10\text{ A})^2 \times 0.10\ \Omega = 100 \times 0.10 = \mathbf{10.0\text{ Watts}}$$

---

#### 5. Final Summary:
- **Unknown Resistance ($R$)**: $\mathbf{0.10\ \Omega}$
- **Voltage Drop**: $\mathbf{1.0\text{ V}}$
- **Power Dissipation**: $\mathbf{10.0\text{ W}}$`,
      detailedLearning: `A dissipation of 10 W in a small resistor will cause heating; hence low-resistance standards must have massive copper heat fins or oil immersion.`
    }
  },
  {
    id: 'fom-u4-q20',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: '3-Phase Power Calculation from Two-Wattmeter Readings',
    questionText: 'The power input to a 3-phase, 400 V, 50 Hz induction motor is measured by two wattmeters. The readings of the two wattmeters are W₁ = 5.0 kW and W₂ = 1.2 kW. Calculate: (a) The total active power, (b) The power factor of the motor, (c) The reactive power, and (d) The line current drawn by the motor.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2023'],
    frequency: 'Core practical two-wattmeter problem',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Total Power $P = W_1 + W_2 = 5.0 + 1.2 = 6.2\text{ kW}$.
- $\tan \phi = \sqrt{3} \frac{W_1 - W_2}{W_1 + W_2} = \sqrt{3} \frac{3.8}{6.2} = 1.0617 \implies \phi = 46.71^{\circ}$.
- Power Factor: $\cos \phi = \cos(46.71^{\circ}) = 0.6857\text{ lagging}$.
- Reactive Power: $Q = \sqrt{3} (W_1 - W_2) = \sqrt{3} \times 3.8 = 6.58\text{ kVAR}$.
- Line Current: $I_L = \frac{P}{\sqrt{3} V_L \cos \phi} = \frac{6200}{\sqrt{3} \times 400 \times 0.6857} = 13.05\text{ A}$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Line voltage ($V_L$) = $400\text{ V}$
- Frequency ($f$) = $50\text{ Hz}$
- Wattmeter 1 reading ($W_1$) = $5.0\text{ kW} = 5000\text{ W}$
- Wattmeter 2 reading ($W_2$) = $1.2\text{ kW} = 1200\text{ W}$

---

#### 2. Part (a): Total Active Power ($P$)
$$P = W_1 + W_2 = 5.0\text{ kW} + 1.2\text{ kW} = \mathbf{6.20\text{ kW} = 6200\text{ W}}$$

---

#### 3. Part (b): Power Factor of the Motor ($\cos \phi$)
$$W_1 - W_2 = 5000 - 1200 = 3800\text{ W}$$
$$W_1 + W_2 = 5000 + 1200 = 6200\text{ W}$$

$$\tan \phi = \sqrt{3} \left(\frac{W_1 - W_2}{W_1 + W_2}\right) = 1.73205 \times \left(\frac{3800}{6200}\right) = 1.73205 \times 0.6129 = \mathbf{1.0616}$$
$$\phi = \tan^{-1}(1.0616) = \mathbf{46.71^{\circ}}$$

The power factor is:
$$\text{Power Factor } (\cos \phi) = \cos(46.71^{\circ}) = \mathbf{0.6857\text{ (Lagging)}}$$

---

#### 4. Part (c): Total Reactive Power ($Q$)
In the two-wattmeter method:
$$Q = \sqrt{3} (W_1 - W_2) = 1.73205 \times 3800\text{ W} = \mathbf{6581.8\text{ VAR} = 6.582\text{ kVAR}}$$

---

#### 5. Part (d): Line Current Drawn ($I_L$)
$$P = \sqrt{3} V_L I_L \cos \phi$$
$$I_L = \frac{P}{\sqrt{3} V_L \cos \phi} = \frac{6200\text{ W}}{1.73205 \times 400\text{ V} \times 0.6857}$$
$$I_L = \frac{6200}{475.06} = \mathbf{13.05\text{ A}}$$

---

#### 6. Final Summary:
- **Total Active Power**: $\mathbf{6.20\text{ kW}}$
- **Power Factor**: $\mathbf{0.686\text{ lagging}}$
- **Total Reactive Power**: $\mathbf{6.58\text{ kVAR}}$
- **Line Current**: $\mathbf{13.05\text{ A}}$`,
      detailedLearning: `Notice that $W_1 > W_2 > 0$ confirms that power factor $\cos \phi > 0.5$. If $\cos \phi$ were below 0.5, $W_2$ would be negative.`
    }
  },
  {
    id: 'fom-u4-q21',
    unitId: 4,
    unitName: 'Unit 4 – Electrical Measurements',
    title: 'Two-Wattmeter Power Factor Calculation with One Reverse Reading',
    questionText: 'In a two-wattmeter measurement on a 3-phase balanced load, one wattmeter reads 10 kW and the other wattmeter reads 2.5 kW after reversing its current coil connections. Calculate: (a) The total power consumed by the load, and (b) The power factor of the load.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2024', '2022'],
    frequency: 'Classic exam problem on negative wattmeter reading',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Reversing connection means $W_2$ is NEGATIVE: $W_1 = +10\text{ kW}$, $W_2 = -2.5\text{ kW}$.
- Total Power: $P = W_1 + W_2 = 10 + (-2.5) = 7.5\text{ kW}$.
- $\tan \phi = \sqrt{3} \frac{10 - (-2.5)}{10 + (-2.5)} = \sqrt{3} \frac{12.5}{7.5} = 2.8867 \implies \phi = 70.89^{\circ}$.
- Power Factor: $\cos(70.89^{\circ}) = 0.3274\text{ lagging}$ ($< 0.5$, which explains why $W_2$ was negative!).`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Wattmeter 1 reading ($W_1$) = $+10.0\text{ kW}$
- Wattmeter 2 reading requires coil reversal $\implies$ Actual reading is negative:
  $$W_2 = -2.5\text{ kW}$$

---

#### 2. Part (a): Total Active Power ($P$)
$$P = W_1 + W_2 = 10.0\text{ kW} + (-2.5\text{ kW}) = \mathbf{7.50\text{ kW} = 7500\text{ W}}$$

---

#### 3. Part (b): Power Factor Calculation ($\cos \phi$)
$$W_1 - W_2 = 10.0 - (-2.5) = 10.0 + 2.5 = 12.5\text{ kW}$$
$$W_1 + W_2 = 10.0 + (-2.5) = 7.5\text{ kW}$$

$$\tan \phi = \sqrt{3} \left(\frac{W_1 - W_2}{W_1 + W_2}\right) = 1.73205 \times \left(\frac{12.5}{7.5}\right) = 1.73205 \times 1.6667 = \mathbf{2.88675}$$
$$\phi = \tan^{-1}(2.88675) = \mathbf{70.89^{\circ}}$$

The load power factor is:
$$\text{Power Factor } (\cos \phi) = \cos(70.89^{\circ}) = \mathbf{0.3274\text{ (Lagging)}}$$

---

#### 4. Engineering Verification:
Since $\phi = 70.89^{\circ} > 60^{\circ}$, the power factor is strictly below $0.5$.
As derived in theory:
$$W_2 = V_L I_L \cos(30^{\circ} + \phi) = V_L I_L \cos(30^{\circ} + 70.89^{\circ}) = V_L I_L \cos(100.89^{\circ}) < 0$$
Because $\cos(100.89^{\circ})$ is negative, Wattmeter 2 naturally reads negative, fully confirming the physical validity of the reversal.

---

#### 5. Final Answer:
- **Total Active Power**: $\mathbf{7.50\text{ kW}}$
- **Power Factor**: $\mathbf{0.327\text{ lagging}}$`,
      detailedLearning: `Never add the magnitude $10 + 2.5 = 12.5$! The reading after reversal must ALWAYS be taken as negative: $10 - 2.5 = 7.5\text{ kW}$.`
    }
  }
];
