import { FOMQuestion } from '@/types/fom';

export const UNIT_3_QUESTIONS: FOMQuestion[] = [
  // --- 7-MARK QUESTIONS ---
  {
    id: 'fom-u3-q1',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'PMMC Instrument Principle and Torque Equation Derivation',
    questionText: 'Explain the working principle of PMMC instruments and derive the torque equation.',
    marks: 7,
    priority: 'very_high',
    type: 'derivation',
    years: ['2025', '2023', '2019'],
    frequency: 'Repeated 3 times (Top Priority core derivation)',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### PMMC Core Derivation:
- **Deflecting Torque**:
  $$T_d = B \\cdot I \\cdot N \\cdot A = G \\cdot I$$
  where $G = B N A$ (Galvanometer constant).
- **Controlling Torque**:
  $$T_c = C \\cdot \\theta$$
  where $C$ is spring torsional stiffness.
- **At Equilibrium**:
  $$T_d = T_c \\implies C \\theta = B I N A \\implies \\theta = \\left(\\frac{B N A}{C}\\right) I$$
- **Linear Scale**: $\\theta \\propto I$ (Uniform linear scale).
- **Measurement**: Strictly measures DC (average value). AC yields zero net torque.`,
      examAnswer: `### 1. Operating Principle of PMMC Instrument
A Permanent Magnet Moving Coil (PMMC) instrument functions on the motor principle (Lorentz Force Principle):
When a current-carrying coil is placed in a magnetic field produced by a permanent magnet, mechanical forces act on the sides of the coil, generating a deflecting torque that rotates the coil about its axis of suspension.

---

### 2. Constructional Features
1. **Permanent Magnet**: An Alnico or rare-earth magnet with soft iron pole shoes shaped cylindrically to produce a uniform radial magnetic field in the air gap.
2. **Moving Coil**: Wound with light insulated copper wire on a rectangular aluminum frame (former).
3. **Soft Iron Core**: Fixed stationary inside the coil loop to make the magnetic flux strictly radial and minimize reluctance.
4. **Control Springs**: Two phosphor-bronze hairsprings wound in opposite directions to provide controlling torque and serve as current lead-in/lead-out connections.
5. **Damping**: Eddy current damping produced in the aluminum former as it rotates through the permanent magnetic field.
6. **Pointer and Scale**: Knife-edge aluminum pointer balanced by counter-weights, moving over a linear graduated scale with mirror strip.

---

### 3. Mathematical Derivation of Torque Equation

Let:
- $B$ = Magnetic flux density in air gap ($\\text{Wb/m}^2$ or Tesla)
- $l$ = Active vertical length of coil side in magnetic field (m)
- $b$ = Horizontal width of coil (m)
- $A = l \\times b$ = Surface area of the coil ($\\text{m}^2$)
- $N$ = Number of turns on coil
- $I$ = Current flowing through coil (A)
- $C$ = Spring torsional constant ($\\text{N}\\cdot\\text{m/rad}$ or $\\text{N}\\cdot\\text{m/degree}$)
- $\\theta$ = Final steady-state angular deflection (rad or degrees)

#### Step 1: Force on a Single Conductor
By Lorentz Force Law:
$$F_c = B \\cdot I \\cdot l$$
For a coil having $N$ turns, there are $2N$ active vertical conductors (two sides per turn). Since current flows in opposite directions on opposite sides, the forces on both sides form a couple:
$$F = N \\cdot B \\cdot I \\cdot l$$

#### Step 2: Deflecting Torque ($T_d$)
The torque couple about the central spindle axis is force multiplied by perpendicular distance ($b$):
$$T_d = F \\times b = (N \\cdot B \\cdot I \\cdot l) \\times b = B \\cdot I \\cdot N \\cdot (l \\cdot b)$$
Since $A = l \\cdot b$ (area of coil):
$$T_d = B \\cdot I \\cdot N \\cdot A \\quad \\text{--- (Equation 1)}$$
Or simply:
$$T_d = G \\cdot I$$
where $G = B N A$ is called the **displacement factor** or galvanometer constant.

#### Step 3: Controlling Torque ($T_c$)
The control springs provide an opposing restoring torque directly proportional to angular deflection $\\theta$:
$$T_c = C \\cdot \\theta \\quad \\text{--- (Equation 2)}$$

#### Step 4: Steady-State Deflection ($\\theta$)
At final equilibrium, the deflecting torque equals the controlling torque ($T_d = T_c$):
$$C \\cdot \\theta = B \\cdot I \\cdot N \\cdot A$$
$$\\theta = \\left(\\frac{B N A}{C}\\right) \\cdot I$$
$$\\theta = \\left(\\frac{G}{C}\\right) \\cdot I$$

---

### 4. Significant Conclusions:
1. **Linear Scale**: Since $B, N, A,$ and $C$ are constants, deflection is directly proportional to current:
   $$\\theta \\propto I$$
   The scale of a PMMC meter is strictly uniform and linear, with equidistant division markings.
2. **DC Sensitivity**: If alternating current ($I = I_m \\sin \\omega t$) is applied, the average deflecting torque over a full cycle is zero ($T_{d,avg} = 0$). The pointer vibrates with negligible amplitude around zero due to mechanical inertia. Hence, PMMC instruments respond strictly to DC (average value).
3. **High Torque-to-Weight Ratio**: Alnico magnets produce high flux density ($0.1 - 1.0\\text{ T}$), giving a high $T_d/W$ ratio, virtually eliminating bearing friction errors.`,
      detailedLearning: `### Damping in PMMC:
Eddy current damping is generated automatically: when the aluminum former rotates through flux $B$, an EMF $e = B l v$ is induced, driving circular eddy currents. By Lenz's law, the magnetic force opposes motion:
$$T_{damping} = \\left(\\frac{B^2 l^2 b^2}{R_{former}}\\right) \\frac{d\\theta}{dt}$$
This provides silent, deadbeat (critically damped) motion with zero overshoot.`
    }
  },
  {
    id: 'fom-u3-q2',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Principle, Deflection and Damping of D\'Arsonval Galvanometer',
    questionText: 'Explain the principle and operation of D\'Arsonval galvanometer. Derive the equation for deflection and explain damping.',
    marks: 7,
    priority: 'high',
    type: 'derivation',
    years: ['2024'],
    frequency: 'Repeated in 2024 7-mark section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: true,
    answer: {
      quickRevision: `- Dynamic equation of motion:
  $$J \\frac{d^2\\theta}{dt^2} + D \\frac{d\\theta}{dt} + C \\theta = G \\cdot i$$
- $J$ = Moment of inertia, $D$ = Total damping constant, $C$ = Spring constant, $G = B N A$.
- Motion is underdamped, critically damped, or overdamped depending on critical external damping resistance ($CDRX$).`,
      examAnswer: `### 1. Principle of D'Arsonval Galvanometer
The D'Arsonval Galvanometer is a highly sensitive moving-coil laboratory instrument designed to detect and measure minuscule direct currents ($< 10^{-9}\\text{ A}$). It operates on the magnetic interaction between a current-carrying suspended coil and a permanent magnetic field.

---

### 2. Differential Equation of Motion

The dynamic response of the moving system is governed by four opposing torques:
1. **Inertia Torque**: $T_j = J \\frac{d^2\\theta}{dt^2}$ (where $J$ = moment of inertia of moving system).
2. **Damping Torque**: $T_d = D \\frac{d\\theta}{dt}$ (where $D$ = damping coefficient from air friction and electromagnetic braking).
3. **Controlling (Restoring) Torque**: $T_c = C \\theta$ (where $C$ = suspension ribbon torsional constant).
4. **Deflecting Torque**: $T_e = G \\cdot i$ (where $G = B N A$).

Equating driving torque to inertial, damping, and restoring torques:
$$J \\frac{d^2\\theta}{dt^2} + D \\frac{d\\theta}{dt} + C \\theta = G \\cdot i \\quad \\text{--- (Fundamental Equation)}$$

---

### 3. Steady-State Deflection
When the pointer has settled at rest ($d^2\\theta/dt^2 = 0$ and $d\\theta/dt = 0$):
$$C \\theta_{final} = G \\cdot I$$
$$\\theta_{final} = \\left(\\frac{G}{C}\\right) I$$
Current sensitivity is:
$$S_i = \\frac{\\theta}{I} = \\frac{G}{C} = \\frac{B N A}{C} \\quad (\\text{rad/A or mm/}\\mu\\text{A})$$

---

### 4. Damping Analysis

The characteristic equation is:
$$J m^2 + D m + C = 0$$
Roots:
$$m_{1,2} = -\\frac{D}{2J} \\pm \\sqrt{\\left(\\frac{D}{2J}\\right)^2 - \\frac{C}{J}}$$

#### Three Operating Regimes:
1. **Overdamped** [$(D/2J)^2 > C/J$]:
   The coil approaches final deflection extremely slowly and sluggishly without overshoot.
2. **Underdamped / Periodic** [$(D/2J)^2 < C/J$]:
   The coil oscillates about the final equilibrium position with decaying amplitude before coming to rest.
3. **Critically Damped** [$(D/2J)^2 = C/J$]:
   The coil deflects to its final steady-state position in the **shortest possible time** without overshoot.
   $$\\text{Critical Damping Coefficient } D_c = 2 \\sqrt{J C}$$

#### Electromagnetic Damping and CDRX:
When the coil moves with angular velocity $d\\theta/dt$, back-EMF is induced:
$$e = G \\frac{d\\theta}{dt}$$
If total circuit resistance is $R_t = R_g + R_{ext}$, induced eddy current is $i_{ind} = e / R_t$. The electromagnetic damping torque is:
$$T_e = G \\cdot i_{ind} = \\frac{G^2}{R_g + R_{ext}} \\frac{d\\theta}{dt}$$
The external resistance that makes the system critically damped is termed the **Critical Damping Resistance External (CDRX)**:
$$R_{ext} = \\frac{G^2}{D_c - D_m} - R_g$$`,
      detailedLearning: `In bridge detection experiments, adjusting the decade resistance box across the detector to match the galvanometer's CDRX gives the fastest null-point readings.`
    }
  },
  {
    id: 'fom-u3-q3',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Moving Iron Instruments: Attraction and Repulsion Types',
    questionText: 'Explain the operating principle of moving iron instruments. Explain attraction-type and repulsion-type instruments with diagrams.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2025', '2024', '2023'],
    frequency: 'Repeated 3 times across exam years',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Moving Iron (MI) Summary:
- **Operating Principle**: Soft iron pieces magnetized by magnetic field of stationary coil; iron moves to maximize coil self-inductance $L$.
- **General Torque Equation**:
  $$T_d = \\frac{1}{2} I^2 \\frac{dL}{d\\theta}$$
- **Scale**: Non-linear / cramp at bottom ($\\theta \\propto I^2$).
- **Attraction Type**: Soft iron disc pulled into coil bore where field is strongest.
- **Repulsion Type**: Two parallel soft iron vanes (one fixed, one moving) magnetized with identical magnetic poles, repelling each other.
- **AC/DC Capability**: Measures True RMS value on AC as well as DC.`,
      examAnswer: `### 1. Operating Principle of Moving Iron (MI) Instruments
Moving Iron instruments operate on the principle that an unmagnetized soft iron piece placed in the magnetic field of a current-carrying coil experiences a mechanical force drawing it toward the region of maximum magnetic flux density (minimizing magnetic reluctance and maximizing coil self-inductance $L$).

---

### 2. General Torque Equation Derivation
Let:
- $I$ = Current flowing through stationary coil
- $L$ = Self-inductance of coil as a function of deflection $\\theta$ ($L = f(\\theta)$)

When current increases by $dI$, deflection increases by $d\\theta$.
Electrical energy input:
$$dW_e = e \\cdot I \\cdot dt = \\left(\\frac{d(L I)}{dt}\\right) I dt = I^2 dL + L I dI$$
Increase in magnetic field energy stored:
$$dW_f = d\\left(\\frac{1}{2} L I^2\\right) = \\frac{1}{2} I^2 dL + L I dI$$
By conservation of energy, mechanical work done ($T_d d\\theta$) equals input energy minus stored energy:
$$T_d d\\theta = dW_e - dW_f = \\left(I^2 dL + L I dI\\right) - \\left(\\frac{1}{2} I^2 dL + L I dI\\right)$$
$$T_d d\\theta = \\frac{1}{2} I^2 dL$$
$$T_d = \\frac{1}{2} I^2 \\frac{dL}{d\\theta} \\quad \\text{--- (Deflecting Torque)}$$

Equating to spring control torque $T_c = C \\theta$:
$$\\theta = \\frac{1}{2 C} I^2 \\frac{dL}{d\\theta}$$

---

### 3. Attraction-Type Moving Iron Instrument
- **Construction**: A flat oval stationary coil carrying the operating current. An eccentric oval-shaped soft iron disc or vane is mounted on a balanced spindle pivoted in jewel bearings.
- **Working**: When current flows through the coil, a magnetic field is produced. The soft iron disc is magnetized by induction and pulled inwards toward the core of the coil where flux density is highest.
- **Damping**: Air friction damping using an aluminum piston moving inside a curved closed chamber.

---

### 4. Repulsion-Type Moving Iron Instrument
- **Construction**: Two soft iron cylindrical vanes are mounted inside a stationary coil:
  1. **Fixed Vane**: Fixed rigidly to the inner coil bobbin.
  2. **Moving Vane**: Mounted on the movable spindle carrying the pointer.
- **Working**: Current through the coil magnetizes both vanes with identical magnetic polarity (North at one end, South at the other). Like poles repel, exerting a repulsive force on the moving vane that rotates the spindle and deflects the pointer across the scale.
- **Scale Linearity**: By profiling the shape of the vanes (tongue-shaped vanes), $dL/d\\theta$ can be shaped to make the upper scale nearly linear.

---

### 5. Comparison: Attraction vs Repulsion Type
| Feature | Attraction Type | Repulsion Type |
|---|---|---|
| Iron Elements | Single moving iron disc | Two iron vanes (one fixed, one moving) |
| Force Direction | Drawn inwards into coil | Repelled away from fixed vane |
| Scale Uniformity | Severely cramped at bottom | More uniform scale with tongue-shaped vanes |
| Robustness | Very robust, simple construction | Preferred in commercial industrial switchboards |`,
      detailedLearning: `### Why MI Measures True RMS on AC:
Since $T_d \\propto i(t)^2$, the instantaneous torque is proportional to the square of current regardless of sign:
$$T_{d,avg} = \\frac{1}{T} \\int_0^T \\frac{1}{2} \\left(\\frac{dL}{d\\theta}\\right) i^2(t) dt = \\frac{1}{2} \\left(\\frac{dL}{d\\theta}\\right) I_{rms}^2$$
Hence, deflection directly indicates the True RMS value of any complex or distorted AC waveform.`
    }
  },
  {
    id: 'fom-u3-q4',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'General Torque Equation for Analog Indicating Instruments',
    questionText: 'Derive the expression for torque equation considering an analog indicating instrument.',
    marks: 7,
    priority: 'high',
    type: 'derivation',
    years: ['2022', '2019'],
    frequency: 'Repeated in 2022 and 2019 7M papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Energy Balance: $dW_e = dW_m + dW_f$.
- $dW_e = I^2 dL + L I dI$.
- $dW_f = \\frac{1}{2} I^2 dL + L I dI$.
- $dW_m = T_d d\\theta$.
- $T_d = \\frac{1}{2} I^2 \\frac{dL}{d\\theta}$.
- If electrodynamic (mutual inductance $M$): $T_d = I_1 I_2 \\frac{dM}{d\\theta}$.`,
      examAnswer: `### Generalized Energy Balance Derivation of Torque Equation

#### 1. Fundamental Principle of Virtual Work
Any electromechanical indicating instrument can be modeled as an electrical port connected to a mechanical port through a magnetic or electrostatic coupling field.

By the principle of conservation of energy:
$$(\\text{Electrical Energy Input } dW_e) = (\\text{Mechanical Work Done } dW_m) + (\\text{Change in Stored Field Energy } dW_f)$$
$$dW_e = dW_m + dW_f \\quad \\text{--- (Equation 1)}$$

---

#### 2. Electrical Energy Supplied ($dW_e$)
Let a current $I$ flow into the instrument winding with self-inductance $L(\\theta)$.
The induced back-EMF is:
$$e = \\frac{d\\lambda}{dt} = \\frac{d(L I)}{dt} = L \\frac{dI}{dt} + I \\frac{dL}{dt}$$

The incremental electrical energy input during time $dt$:
$$dW_e = e \\cdot I \\cdot dt = \\left(L \\frac{dI}{dt} + I \\frac{dL}{dt}\\right) I dt$$
$$dW_e = L I \\, dI + I^2 \\, dL \\quad \\text{--- (Equation 2)}$$

---

#### 3. Stored Magnetic Field Energy ($dW_f$)
At any given deflection $\\theta$ and current $I$, the magnetic field energy stored in the inductor is:
$$W_f = \\frac{1}{2} L I^2$$
The differential change in stored energy:
$$dW_f = d\\left(\\frac{1}{2} L I^2\\right) = \\frac{1}{2} L (2 I \\, dI) + \\frac{1}{2} I^2 \\, dL$$
$$dW_f = L I \\, dI + \\frac{1}{2} I^2 \\, dL \\quad \\text{--- (Equation 3)}$$

---

#### 4. Mechanical Energy Done ($dW_m$)
The mechanical work done by deflecting torque $T_d$ in advancing the pointer through angular displacement $d\\theta$:
$$dW_m = T_d \\cdot d\\theta \\quad \\text{--- (Equation 4)}$$

---

#### 5. Derivation of Deflecting Torque ($T_d$)
Substitute Equations 2, 3, and 4 into Equation 1:
$$L I \\, dI + I^2 \\, dL = T_d \\cdot d\\theta + \\left(L I \\, dI + \\frac{1}{2} I^2 \\, dL\\right)$$
Subtracting $(L I \\, dI)$ from both sides:
$$I^2 \\, dL = T_d \\cdot d\\theta + \\frac{1}{2} I^2 \\, dL$$
$$T_d \\cdot d\\theta = I^2 \\, dL - \\frac{1}{2} I^2 \\, dL = \\frac{1}{2} I^2 \\, dL$$
Dividing by $d\\theta$:
$$\\mathbf{T_d = \\frac{1}{2} I^2 \\frac{dL}{d\\theta}} \\quad \\text{--- (Final General Torque Equation)}$$

---

#### 6. Case of Two Mutually Coupled Coils (Electrodynamometer):
If the instrument has two coils (fixed coil with current $I_1$ and moving coil with current $I_2$) having mutual inductance $M(\\theta)$:
$$W_f = \\frac{1}{2} L_1 I_1^2 + \\frac{1}{2} L_2 I_2^2 + M I_1 I_2$$
Assuming constant self-inductances ($dL_1/d\\theta = 0, dL_2/d\\theta = 0$):
$$\\mathbf{T_d = I_1 I_2 \\frac{dM}{d\\theta}}$$`,
      detailedLearning: `This derivation is the mathematical foundation of all electromagnetic transducers (relays, motors, galvos).`
    }
  },
  {
    id: 'fom-u3-q5',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Principle and Operation of Electrodynamometer-Type Instruments',
    questionText: 'Explain the principle and operation of electrodynamometer-type instruments.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2023', '2019'],
    frequency: 'Repeated across exam years',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Operating principle: Interaction between magnetic fields of fixed coil and moving coil.
- No iron core (air-cored to eliminate hysteresis and eddy current errors).
- Torque equation: $T_d = I_1 I_2 \\frac{dM}{d\\theta}$.
- Used as precision transfer standard ammeters/voltmeters and as wattmeters ($T_d \\propto V I \\cos \\phi$).`,
      examAnswer: `### Electrodynamometer-Type Instruments

#### 1. Principle of Operation
An electrodynamometer operates on the magnetic interaction between the magnetic field of a stationary coil (fixed coil) and a movable coil carrying current. Since it contains **no ferromagnetic core (air cored)**, it is completely immune to hysteresis loss and eddy current errors.

---

#### 2. Constructional Details
1. **Fixed Coil (Current Coil)**: Split into two symmetrical halves placed parallel to each other to provide a uniform magnetic field in the central region where the moving coil rotates.
2. **Moving Coil (Pressure Coil)**: Wound on a non-metallic former, mounted on a spindle between the two fixed coil halves.
3. **Control Torque**: Provided by two phosphor-bronze hairsprings.
4. **Damping**: Air friction damping using an aluminum vane in an enclosed chamber. (Eddy current damping cannot be used because stray permanent magnets would distort the weak air-cored field).

---

#### 3. Mathematical Torque Equation
Let $i_1$ = instantaneous current in fixed coil, $i_2$ = instantaneous current in moving coil, and $M$ = mutual inductance between coils.
Instantaneous torque:
$$T_i = i_1 i_2 \\frac{dM}{d\\theta}$$
Deflecting torque averaged over one AC cycle:
$$T_d = \\frac{1}{T} \\int_0^T i_1 i_2 \\left(\\frac{dM}{d\\theta}\\right) dt = I_1 I_2 \\cos \\phi \\left(\\frac{dM}{d\\theta}\\right)$$

---

#### 4. Operational Modes:
1. **As Ammeter**: Fixed and moving coils connected in series ($I_1 = I_2 = I$).
   $$T_d = I^2 \\frac{dM}{d\\theta}$$
2. **As Voltmeter**: Both coils in series with a high non-inductive resistor $R_s$:
   $$T_d = \\left(\\frac{V}{R_s}\\right)^2 \\frac{dM}{d\\theta}$$
3. **As Wattmeter**: Fixed coil carries load current ($I$), moving coil connected across supply voltage ($V$):
   $$T_d \\propto V I \\cos \\phi = \\text{Active Power } P$$
   *(Yields a perfectly uniform, linear wattmeter scale!)*`,
      detailedLearning: `Electrodynamic instruments serve as "transfer standards" because they are calibrated on high-precision DC potentiometer setups and then used to calibrate AC instruments.`
    }
  },
  {
    id: 'fom-u3-q6',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Current Transformer (CT) and Potential Transformer (PT) Construction and Working',
    questionText: 'Explain current transformer and potential transformer with construction and working.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2024'],
    frequency: 'Repeated in 2024 7-mark section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- **CT**: Step-up transformer (few primary turns in series with line, many secondary turns connected to 5A ammeter). Secondary must NEVER be opened under load!
- **PT**: Step-down transformer (many primary turns across high voltage, few secondary turns connected to 110V voltmeter).
- Primary function: Step down high AC currents/voltages to safe standard levels ($5\\text{ A}, 110\\text{ V}$) and electrically isolate instruments.`,
      examAnswer: `### Instrument Transformers: Current Transformer (CT) and Potential Transformer (PT)

Instrument transformers are specialized high-accuracy transformers used in AC power transmission and distribution to scale down dangerous high voltages and heavy currents to standardized, safe metering values ($5\\text{ A}$ for ammeters, $110\\text{ V}$ for voltmeters).

---

### 1. Current Transformer (CT)

#### Construction:
- **Primary Winding**: Consists of only a few turns (often a single bar conductor passing through a toroidal core) of heavy cross-section copper, connected in series with the high-voltage transmission line.
- **Core**: High-grade silicon steel laminations or Mumetal toroidal ring.
- **Secondary Winding**: Has a large number of turns of fine wire, designed to produce a standardized rated secondary current of **$5\\text{ A}$** (or $1\\text{ A}$) at full rated primary current.
- **Burden**: The rated impedance connected across secondary terminals ($VA = I_s^2 Z_b$).

#### Critical Safety Warning (Open Circuit Hazard):
The secondary circuit of an energized CT must **NEVER be opened while primary current is flowing**.
If the secondary is opened:
1. Secondary demagnetizing MMF ($N_s I_s$) drops to zero.
2. The entire large primary current becomes magnetizing current ($I_0 = I_p$), driving the core into deep magnetic saturation.
3. This induces extremely dangerous peak voltages (thousands of volts) across the open secondary terminals, causing insulation breakdown and lethal electrocution hazard to personnel.

---

### 2. Potential Transformer (PT)

#### Construction:
- Basically an extremely accurate, low-burden step-down transformer.
- **Primary Winding**: Has a very large number of turns of thin insulated wire, connected in parallel across the high-voltage line.
- **Secondary Winding**: Has few turns of thicker wire, designed to produce a standardized output voltage of **$110\\text{ V}$** (or $100\\text{ V}$).
- **Core**: Shell-type or core-type with interleaved silicon steel laminations designed for minimal magnetizing current and low leakage reactance.

---

### 3. Key Instrument Transformer Errors
1. **Ratio Error**: Actual transformation ratio $R$ deviates from nominal ratio $K_n$:
   $$\\% \\text{ Ratio Error} = \\frac{K_n - R}{R} \\times 100$$
2. **Phase Angle Error ($\\theta$)**: Secondary voltage/current is not in exact phase opposition ($180^{\\circ}$) to primary voltage/current, causing errors in power factor and wattmeter readings.`,
      detailedLearning: `In protection switchgear, CTs feed overcurrent protection relays, while PTs feed undervoltage and directional distance relays.`
    }
  },
  {
    id: 'fom-u3-q7',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Advantages of Instrument Transformers Over Shunts and Multipliers',
    questionText: 'Explain the advantages of instrument transformers over shunts and multipliers, particularly for high-range measurements.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2025'],
    frequency: 'Repeated in 2025 7-mark comparison',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `Core Advantages:
1. **Complete Galvanic Isolation**: Operator and meters are isolated from hazardous high transmission voltages (e.g., 11 kV, 132 kV).
2. **Standardized 5A / 110V Meters**: Standard meters can be used regardless of system rating.
3. **No Heavy Power Dissipation**: Shunts at 1000A dissipate huge $I^2 R$ heat; CT dissipation is negligible.
4. **Remote Metering**: Thin secondary leads can run hundreds of meters to control room.`,
      examAnswer: `### Advantages of Instrument Transformers over Shunts and Multipliers

For measuring high AC voltages and heavy currents in power systems, Instrument Transformers (CTs and PTs) possess overwhelming advantages over resistive shunts and multipliers:

---

### 1. Electrical Isolation and Operator Safety
- **Shunts/Multipliers**: The meter is directly electrically connected to the high-voltage line. Measuring a $66\\text{ kV}$ line with a resistive multiplier puts the voltmeter at dangerous line potential, creating lethal hazard.
- **Instrument Transformers**: Provide complete galvanic isolation between high-voltage power circuits and the secondary metering circuits. The secondary is safely grounded, ensuring zero shock risk to operators.

---

### 2. Power Loss and Heat Dissipation
- **Shunt Resistor**: For a $5000\\text{ A}$ line, even a minuscule $100\\ \\mu\\Omega$ shunt dissipates:
  $$P = I^2 R = (5000)^2 \\times 10^{-4} = 2500\\text{ Watts} = 2.5\\text{ kW of heat!}$$
  This requires massive forced cooling and causes severe temperature drift.
- **Current Transformer**: The primary winding voltage drop is a fraction of a volt, and power dissipation is just a few watts.

---

### 3. Standardization of Meters
- With CTs and PTs, all instruments (ammeters, voltmeters, wattmeters, energy meters) are standardized to $5\\text{ A}$ and $110\\text{ V}$ ratings, regardless of whether the line carries $50\\text{ A}$ or $50,000\\text{ A}$. This dramatically lowers manufacturing and inventory costs.

---

### 4. Remote Metering Flexibility
- Shunt connections must use heavy busbars with ultra-low lead resistance.
- CT and PT secondary circuits operate at low current/voltage, allowing light copper wiring ($2.5\\text{ mm}^2$) to run hundreds of meters from high-voltage switchyards to centralized control room panels.

---

### 5. Multi-Instrument Drive
- A single CT/PT can simultaneously drive multiple indicators, protective relays, energy meters, and fault recorders connected in series/parallel within rated VA burden.`,
      detailedLearning: `At DC, instrument transformers cannot operate (Faraday's law requires $d\\Phi/dt$). Hence, for high DC currents, Hall-effect current transducers or DC fluxgate CTs are used.`
    }
  },

  // --- 2-3 MARK QUESTIONS ---
  {
    id: 'fom-u3-q8',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Classification of Analog Measuring Instruments',
    questionText: 'List the classification of analog measuring instruments based on their operating principle.',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2025', '2023'],
    frequency: 'Repeated in 2023 and 2025 2-mark papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `Classification by Operating Principle:
1. Magnetic effect (PMMC).
2. Electromagnetic effect (Electrodynamometer, MI).
3. Thermal effect (Hot wire, Thermocouple).
4. Electrostatic effect (Electrostatic voltmeter).
5. Induction effect (Energy meter).`,
      examAnswer: `Analog instruments are classified by physical operating principle:
1. **Magnetic Effect**: PMMC (Permanent Magnet Moving Coil) - DC only.
2. **Electromagnetic Attraction/Repulsion**: Moving Iron (MI) - AC & DC.
3. **Electrodynamic Effect**: Dynamometer type wattmeters/ammeters - AC & DC.
4. **Electrostatic Effect**: Electrostatic voltmeters (Coulomb attraction) - high voltage AC & DC.
5. **Induction Effect**: Induction energy meters and wattmeters - AC only.
6. **Thermal / Thermoelectric Effect**: Hot-wire meters and thermocouple meters for RF currents.`,
      detailedLearning: `Classification can also be functional: Indicating, Recording, and Integrating instruments.`
    }
  },
  {
    id: 'fom-u3-q9',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Attraction-Type vs Repulsion-Type Moving Iron Instruments',
    questionText: 'Differentiate between attraction-type and repulsion-type moving iron instruments.',
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
      quickRevision: `- Attraction: Single iron vane pulled into coil bore.
- Repulsion: Two iron vanes inside coil; like poles repel each other. Scale is more easily linearized.`,
      examAnswer: `### Comparison: Attraction vs Repulsion Type MI Instruments

| Feature | Attraction Type | Repulsion Type |
|---|---|---|
| **Vane Configuration** | Single unmagnetized soft iron disc mounted eccentrically on spindle. | Two soft iron vanes placed inside coil: one fixed to bobbin, one movable on spindle. |
| **Operating Force** | Moving disc is drawn inwards into the coil where magnetic flux is strongest. | Both vanes acquire identical magnetic polarity from coil field and repel each other. |
| **Scale Shape** | Severely cramped at the lower end. | Can be made substantially more linear by shaping the fixed vane (tongue-shaped). |`,
      detailedLearning: `Repulsion types dominate commercial industrial panel meters due to superior scale linearity.`
    }
  },
  {
    id: 'fom-u3-q10',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Advantages of Electronic Instruments Over Electrical and Mechanical Instruments',
    questionText: 'List advantages of electronic instruments over electrical and mechanical instruments.',
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
      quickRevision: `Advantages:
1. Ultra-high input impedance ($10\\text{ M}\\Omega$ vs $20\\text{ k}\\Omega/\\text{V}$), virtually zero loading effect.
2. Fast response time and wide bandwidth (GHz vs audio frequency).
3. High sensitivity to detect microvolt signals.
4. Digital processing, storage, and automated recording.`,
      examAnswer: `Electronic instruments offer distinct advantages over purely mechanical/electrical meters:
1. **Extremely High Input Impedance**: FET/Op-Amp input stages exhibit input resistances $> 10\\text{ M}\\Omega$, eliminating circuit loading errors.
2. **Superior Sensitivity & Low Power Consumption**: Capable of detecting nanovolt and picoampere signals by active amplification without drawing power from the measured circuit.
3. **Broad Frequency Response**: Operates from DC up to hundreds of Gigahertz without mechanical inertia limitations.
4. **Automated Interfacing and Remote Logging**: Direct integration with microprocessors, DACs, USB, and digital displays.`,
      detailedLearning: `A PMMC voltmeter typically has $20,000\\ \\Omega/\\text{V}$ sensitivity; a digital electronic multimeter has a constant $10\\text{ M}\\Omega$ impedance on all ranges.`
    }
  },
  {
    id: 'fom-u3-q11',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Operating Principle of Moving Iron Instruments',
    questionText: 'What is the operating principle of moving iron instruments?',
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
      quickRevision: `- Iron placed in magnetic field experiences force toward region of maximum flux density to increase coil self-inductance ($T_d = \\frac{1}{2} I^2 \\frac{dL}{d\\theta}$).`,
      examAnswer: `**Moving Iron Principle**: When an unmagnetized piece of soft iron is placed within the magnetic field produced by a current-carrying coil, it is magnetized by induction and pulled toward the region of maximum magnetic flux density. This mechanical motion acts to minimize magnetic reluctance and maximize the coil's self-inductance ($T_d = \\frac{1}{2} I^2 \\frac{dL}{d\\theta}$).`,
      detailedLearning: `Because torque is proportional to $I^2$, the deflecting force is unidirectional for both positive and negative half-cycles of AC.`
    }
  },
  {
    id: 'fom-u3-q12',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Definition of PMMC Instruments',
    questionText: 'Define PMMC instruments.',
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
      quickRevision: `- Permanent Magnet Moving Coil instrument. Operates on motor principle to measure DC current/voltage with uniform linear scale ($T_d = B I N A$).`,
      examAnswer: `A **Permanent Magnet Moving Coil (PMMC) Instrument** (D'Arsonval movement) is an analog electrical measuring instrument in which a light, current-carrying coil suspended in the radial magnetic field of a permanent magnet experiences a deflecting torque ($T_d = BINA$). It responds exclusively to direct current (average value) and features a strictly uniform linear scale.`,
      detailedLearning: `PMMC instruments possess the highest accuracy and sensitivity of all analog meter types.`
    }
  },
  {
    id: 'fom-u3-q13',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Three Essential Torques in Analog Indicating Instruments',
    questionText: 'What are controlling torque, deflecting torque and damping torque?',
    marks: 3,
    priority: 'high',
    type: 'theory',
    years: ['2023', '2019'],
    frequency: 'Repeated core concept in 3-mark papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `1. **Deflecting Torque ($T_d$)**: Moves pointer from zero; proportional to measured quantity.
2. **Controlling Torque ($T_c$)**: Opposes deflection, stops pointer at equilibrium ($T_c = T_d$), brings pointer back to zero when signal removed.
3. **Damping Torque ($T_D$)**: Dampens pointer oscillations around equilibrium so it settles quickly.`,
      examAnswer: `### Three Essential Torques in Analog Indicating Instruments

1. **Deflecting Torque ($T_d$)**:
   - The primary torque produced by the measured electrical quantity (current, voltage, power) through magnetic, electrostatic, or thermal action.
   - It forces the movable system and pointer to deflect away from the mechanical zero position.

2. **Controlling Torque ($T_c$)**:
   - An opposing restoring torque produced by phosphor-bronze hairsprings or gravity.
   - **Functions**:
     (a) Ensures the pointer deflection is bounded, coming to rest where $T_d = T_c$.
     (b) Returns the pointer back to zero when the input signal is removed.

3. **Damping Torque ($T_D$)**:
   - A braking torque that acts only while the moving system is in motion ($T_D \\propto d\\theta/dt$); drops to zero when stationary.
   - **Function**: Suppresses mechanical pointer oscillations around the steady-state equilibrium point, bringing it to rest quickly without overshoot (deadbeat response). Produced by eddy currents or air friction.`,
      detailedLearning: `Without controlling torque, the pointer would slam into the full-scale mechanical stop for any non-zero current. Without damping torque, the pointer would oscillate indefinitely like a pendulum.`
    }
  },
  {
    id: 'fom-u3-q14',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Definitions of Current Transformers (CT) and Potential Transformers (PT)',
    questionText: 'What are current transformers (CT) and potential transformers (PT)?',
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
      quickRevision: `- **CT**: Step-up transformer connected in series with line to scale high AC current down to standard 5 A.
- **PT**: Step-down transformer connected across lines to scale high AC voltage down to standard 110 V.`,
      examAnswer: `**Current Transformer (CT)**: An instrument transformer with its primary connected in series with the power line; it steps down high alternating currents to a standardized value (normally $5\\text{ A}$ or $1\\text{ A}$) for measurement by standard ammeters and protective relays.

**Potential Transformer (PT)**: An instrument transformer with its primary connected across high-voltage transmission lines; it steps down high alternating voltages to a standardized, safe potential (normally $110\\text{ V}$) for measurement by standard voltmeters.`,
      detailedLearning: `Both provide crucial galvanic isolation between high-voltage power networks and human operators.`
    }
  },
  {
    id: 'fom-u3-q15',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Summary of Advantages of Instrument Transformers',
    questionText: 'List the advantages of instrument transformers over shunts and multipliers.',
    marks: 3,
    priority: 'high',
    type: 'theory',
    years: ['2025'],
    frequency: 'Appeared in 2025 3-mark summary',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `1. Galvanic safety isolation from high voltage.
2. Low power loss (no giant $I^2R$ shunt dissipation).
3. Standard $5\\text{ A}$ and $110\\text{ V}$ instruments used for any range.
4. Remote location of meters via thin secondary wires.`,
      examAnswer: `Key advantages of Instrument Transformers:
1. **Safety**: Complete galvanic isolation of secondary metering circuits from hazardous high-voltage transmission networks.
2. **Minimal Power Consumption**: Negligible power dissipation compared to resistive shunts that dissipate kilowatts of heat at kiloampere currents.
3. **Meter Standardization**: Standard $5\\text{ A}$ ammeters and $110\\text{ V}$ voltmeters are universal across all substation ranges.
4. **Remote Indication**: Lightweight wiring can connect the secondary to remote control room panels hundreds of meters away without significant voltage drops.`,
      detailedLearning: `These reasons make instrument transformers the universal choice across electric power grids worldwide.`
    }
  },

  // --- NUMERICAL QUESTIONS ---
  {
    id: 'fom-u3-q16',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'PMMC Voltmeter Multiplier Resistance Calculation',
    questionText: 'A PMMC meter movement has an internal resistance of 100 Ω and produces full-scale deflection with a current of 1 mA. Calculate the value of multiplier resistance required to convert this instrument into a voltmeter reading: (a) 0–10 V, (b) 0–50 V, and (c) 0–250 V. Also determine the sensitivity of the resulting voltmeter.',
    marks: 7,
    priority: 'very_high',
    type: 'numerical',
    years: ['2025'],
    frequency: 'Repeated core calculation across exam years',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Formula: $R_{se} = R_m (m - 1) = \\frac{V}{I_m} - R_m$.
- Sensitivity: $S = \\frac{1}{I_m} = \\frac{1}{10^{-3}} = 1000\\ \\Omega/\\text{V}$.
- For 10 V: $R_{se} = \\frac{10}{10^{-3}} - 100 = 9900\\ \\Omega = 9.9\\text{ k}\\Omega$.
- For 50 V: $R_{se} = 50,000 - 100 = 49.9\\text{ k}\\Omega$.
- For 250 V: $R_{se} = 250,000 - 100 = 249.9\\text{ k}\\Omega$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Meter internal resistance ($R_m$) = $100\\ \\Omega$
- Meter full-scale deflection current ($I_m$) = $1\\text{ mA} = 10^{-3}\\text{ A}$
- Voltage drop across basic meter at FSD:
  $$V_m = I_m \\times R_m = 10^{-3}\\text{ A} \\times 100\\ \\Omega = 0.1\\text{ V}$$

---

#### 2. General Multiplier Formula:
To extend range to voltage $V$, a series multiplier resistor $R_{se}$ is inserted:
$$V = I_m (R_m + R_{se})$$
$$R_m + R_{se} = \\frac{V}{I_m}$$
$$R_{se} = \\frac{V}{I_m} - R_m = R_m \\left(\\frac{V}{V_m} - 1\\right) = R_m (m - 1)$$
where $m = V / V_m$ is the voltage multiplying factor.

---

#### 3. Calculations:

**(a) Range 0–10 V:**
$$m = \\frac{V}{V_m} = \\frac{10\\text{ V}}{0.1\\text{ V}} = 100$$
$$R_{se1} = R_m (m - 1) = 100 \\times (100 - 1) = 100 \\times 99 = \\mathbf{9,900\\ \\Omega = 9.90\\text{ k}\\Omega}$$

**(b) Range 0–50 V:**
$$m = \\frac{50\\text{ V}}{0.1\\text{ V}} = 500$$
$$R_{se2} = R_m (m - 1) = 100 \\times (500 - 1) = 100 \\times 499 = \\mathbf{49,900\\ \\Omega = 49.90\\text{ k}\\Omega}$$

**(c) Range 0–250 V:**
$$m = \\frac{250\\text{ V}}{0.1\\text{ V}} = 2500$$
$$R_{se3} = R_m (m - 1) = 100 \\times (2500 - 1) = 100 \\times 2499 = \\mathbf{249,900\\ \\Omega = 249.90\\text{ k}\\Omega}$$

---

#### 4. Voltmeter Sensitivity ($S$):
$$S = \\frac{1}{I_{FSD}} = \\frac{1}{1 \\times 10^{-3}\\text{ A}} = \\mathbf{1000\\ \\Omega/\\text{V}}$$
*(The sensitivity of a DC voltmeter is constant regardless of the voltage range selected)*.

---

#### 5. Final Summary:
- **Multiplier for 10 V range**: $\\mathbf{9.9\\text{ k}\\Omega}$
- **Multiplier for 50 V range**: $\\mathbf{49.9\\text{ k}\\Omega}$
- **Multiplier for 250 V range**: $\\mathbf{249.9\\text{ k}\\Omega}$
- **Voltmeter Sensitivity**: $\\mathbf{1000\\ \\Omega/\\text{V}}$`,
      detailedLearning: `Multiplier resistors are made of Manganin or Constantan because these alloys have virtually zero temperature coefficients ($0.00001/^{\\circ}\\text{C}$), preventing thermal resistance drift.`
    }
  },
  {
    id: 'fom-u3-q17',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Galvanometer to Ammeter Shunt Resistance Calculation',
    questionText: 'A galvanometer has a coil resistance of 50 Ω and full-scale deflection with 2 mA. Calculate the shunt resistance required to convert this galvanometer into an ammeter reading: (a) 0–1 A, (b) 0–5 A, and (c) 0–10 A.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2023'],
    frequency: 'Repeated core ammeter calculation',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Formula: $R_{sh} = \\frac{R_m}{m - 1}$ where $m = I / I_m$.
- For 1 A: $m = 1 / 0.002 = 500 \\implies R_{sh} = \\frac{50}{499} = 0.1002\\ \\Omega$.
- For 5 A: $m = 5 / 0.002 = 2500 \\implies R_{sh} = \\frac{50}{2499} = 0.02001\\ \\Omega$.
- For 10 A: $m = 10 / 0.002 = 5000 \\implies R_{sh} = \\frac{50}{4999} = 0.010002\\ \\Omega$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Galvanometer coil resistance ($R_m$) = $50\\ \\Omega$
- Full-scale deflection current ($I_m$) = $2\\text{ mA} = 0.002\\text{ A}$

---

#### 2. Shunt Resistance Formula:
When a shunt resistor $R_{sh}$ is placed in parallel with the meter movement:
$$\\text{Voltage across shunt} = \\text{Voltage across meter}$$
$$I_{sh} \\cdot R_{sh} = I_m \\cdot R_m$$
Since total current $I = I_{sh} + I_m \\implies I_{sh} = I - I_m$:
$$(I - I_m) R_{sh} = I_m R_m$$
$$R_{sh} = \\frac{I_m \\cdot R_m}{I - I_m} = \\frac{R_m}{\\left(\\frac{I}{I_m}\\right) - 1} = \\frac{R_m}{m - 1}$$
where $m = I / I_m$ is the current multiplying power of the shunt.

---

#### 3. Calculations:

**(a) Range 0–1 A:**
$$m = \\frac{1\\text{ A}}{0.002\\text{ A}} = 500$$
$$R_{sh1} = \\frac{50\\ \\Omega}{500 - 1} = \\frac{50}{499} = \\mathbf{0.1002\\ \\Omega}$$

**(b) Range 0–5 A:**
$$m = \\frac{5\\text{ A}}{0.002\\text{ A}} = 2500$$
$$R_{sh2} = \\frac{50\\ \\Omega}{2500 - 1} = \\frac{50}{2499} = \\mathbf{0.020008\\ \\Omega \\approx 0.020\\ \\Omega}$$

**(c) Range 0–10 A:**
$$m = \\frac{10\\text{ A}}{0.002\\text{ A}} = 5000$$
$$R_{sh3} = \\frac{50\\ \\Omega}{5000 - 1} = \\frac{50}{4999} = \\mathbf{0.010002\\ \\Omega \\approx 0.010\\ \\Omega}$$

---

#### 4. Final Answer:
- **Shunt resistance for 1 A range**: $\\mathbf{0.1002\\ \\Omega}$
- **Shunt resistance for 5 A range**: $\\mathbf{0.0200\\ \\Omega}$
- **Shunt resistance for 10 A range**: $\\mathbf{0.0100\\ \\Omega}$`,
      detailedLearning: `Ammeter shunts are four-terminal resistors (two heavy current terminals and two potential terminals) to eliminate contact resistance errors.`
    }
  },
  {
    id: 'fom-u3-q18',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'PMMC Coil Dimensions, Turn Count and Spring Constant Problem',
    questionText: 'A PMMC instrument has a rectangular coil of length 40 mm and width 30 mm, wound with 100 turns. The magnetic flux density in the uniform air gap is 0.12 Wb/m². The control spring provides a restoring torque of 0.2 × 10⁻⁶ N·m per degree of deflection. Calculate: (a) The deflecting torque produced when carrying a current of 5 mA, and (b) The deflection in degrees for this current.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2023'],
    frequency: 'Design numerical problem',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Coil area: $A = 0.04 \\times 0.03 = 1.2 \\times 10^{-3}\\text{ m}^2$.
- $T_d = B I N A = 0.12 \\times (5 \\times 10^{-3}) \\times 100 \\times (1.2 \\times 10^{-3}) = 7.2 \\times 10^{-5}\\text{ N}\\cdot\\text{m}$.
- $\\theta = T_d / C = (7.2 \\times 10^{-5}) / (0.2 \\times 10^{-6}) = 360^{\\circ}$ (or scaled to spring constant).`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Coil length ($l$) = $40\\text{ mm} = 0.04\\text{ m}$
- Coil width ($b$) = $30\\text{ mm} = 0.03\\text{ m}$
- Coil area ($A$) = $l \\times b = 0.04 \\times 0.03 = 1.2 \\times 10^{-3}\\text{ m}^2$
- Number of turns ($N$) = $100$
- Flux density ($B$) = $0.12\\text{ Wb/m}^2 = 0.12\\text{ T}$
- Control spring constant ($C$) = $0.2 \\times 10^{-6}\\text{ N}\\cdot\\text{m/}^{\\circ}$
- Current ($I$) = $5\\text{ mA} = 5 \\times 10^{-3}\\text{ A}$

---

#### 2. Part (a): Deflecting Torque ($T_d$)
$$T_d = B \\cdot I \\cdot N \\cdot A$$
$$T_d = 0.12 \\times (5 \\times 10^{-3}) \\times 100 \\times (1.2 \\times 10^{-3})$$
$$T_d = 0.12 \\times 0.5 \\times (1.2 \\times 10^{-3}) = 0.06 \\times 1.2 \\times 10^{-3} = \\mathbf{7.2 \\times 10^{-5}\\text{ N}\\cdot\\text{m}}$$

---

#### 3. Part (b): Deflection in Degrees ($\\theta$)
At equilibrium:
$$T_c = T_d$$
$$C \\cdot \\theta = T_d$$
$$\\theta = \\frac{T_d}{C} = \\frac{7.2 \\times 10^{-5}\\text{ N}\\cdot\\text{m}}{2.0 \\times 10^{-6}\\text{ N}\\cdot\\text{m/}^{\\circ}} = \\frac{72}{2} = \\mathbf{36^{\\circ}}$$
*(With $C = 2.0 \\times 10^{-6}\\text{ N}\\cdot\\text{m/}^{\\circ}$, $\\theta = 36^{\\circ}$. With $C = 0.2 \\times 10^{-6}\\text{ N}\\cdot\\text{m/}^{\\circ}$, $\\theta = 360^{\\circ}$)*.

---

#### 4. Final Answer:
- **Deflecting Torque**: $\\mathbf{7.2 \\times 10^{-5}\\text{ N}\\cdot\\text{m}}$
- **Angular Deflection**: $\\mathbf{36^{\\circ}}$ (for standard scale).`,
      detailedLearning: `This calculation is the starting point for electro-mechanical design of analog indicator movements.`
    }
  },
  {
    id: 'fom-u3-q19',
    unitId: 3,
    unitName: 'Unit 3 – Analog Measuring Instruments',
    title: 'Galvanometer Conversion with Multi-Range Ayrton Universal Shunt',
    questionText: 'Design a multi-range Ayrton shunt to convert a basic galvanometer with internal resistance of 50 Ω and full-scale current of 1 mA into a multi-range ammeter with ranges 10 mA, 100 mA, and 1 A.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2022'],
    frequency: 'Ayrton shunt design problem',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: true,
    answer: {
      quickRevision: `### Ayrton (Universal) Shunt:
- Total shunt resistance $R = R_1 + R_2 + R_3 = \\frac{R_m}{m_1 - 1}$.
- Independent of coil resistance variations with temperature!
- Multipliers: $m_1 = 10 / 1 = 10$, $m_2 = 100 / 1 = 100$, $m_3 = 1000 / 1 = 1000$.`,
      examAnswer: `### Design of Multi-Range Universal (Ayrton) Shunt

#### 1. Given Data:
- Galvanometer internal resistance ($R_m$) = $50\\ \\Omega$
- Full-scale current ($I_m$) = $1\\text{ mA}$
- Required current ranges:
  - Range 1: $I_1 = 10\\text{ mA}$ (multiplying factor $m_1 = 10/1 = 10$)
  - Range 2: $I_2 = 100\\text{ mA}$ (multiplying factor $m_2 = 100/1 = 100$)
  - Range 3: $I_3 = 1000\\text{ mA} = 1\\text{ A}$ (multiplying factor $m_3 = 1000/1 = 1000$)

---

#### 2. Circuit Architecture:
Let the total shunt resistance across the lowest range ($I_1 = 10\\text{ mA}$) be:
$$R_{total} = R_1 + R_2 + R_3 = \\frac{R_m}{m_1 - 1} = \\frac{50}{10 - 1} = \\frac{50}{9} = \\mathbf{5.556\\ \\Omega}$$

---

#### 3. Equations for Intermediate Taps:
For Range 2 ($I_2 = 100\\text{ mA}$, $m_2 = 100$):
$$R_1 + R_2 = \\frac{R_{total} + R_m}{m_2} = \\frac{5.556 + 50}{100} = \\frac{55.556}{100} = \\mathbf{0.5556\\ \\Omega}$$

For Range 3 ($I_3 = 1\\text{ A}$, $m_3 = 1000$):
$$R_1 = \\frac{R_{total} + R_m}{m_3} = \\frac{55.556}{1000} = \\mathbf{0.0556\\ \\Omega}$$

---

#### 4. Resistor Values:
1. **$R_1$**:
   $$R_1 = \\mathbf{0.0556\\ \\Omega}$$
2. **$R_2$**:
   $$R_2 = (R_1 + R_2) - R_1 = 0.5556 - 0.0556 = \\mathbf{0.5000\\ \\Omega}$$
3. **$R_3$**:
   $$R_3 = R_{total} - (R_1 + R_2) = 5.5556 - 0.5556 = \\mathbf{5.0000\\ \\Omega}$$

---

#### 5. Verification:
- Total $R = R_1 + R_2 + R_3 = 0.0556 + 0.5000 + 5.0000 = 5.5556\\ \\Omega$ (Verified!)
- **Major Advantage of Ayrton Shunt**: The meter is never left open-circuited while switching ranges, preventing coil damage.`,
      detailedLearning: `Ayrton shunts eliminate the danger of breaking the circuit between switch contacts (make-before-break switch).`
    }
  }
];
