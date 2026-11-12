import { FOMQuestion } from '@/types/fom';

export const UNIT_2_QUESTIONS: FOMQuestion[] = [
  // --- 7-MARK QUESTIONS ---
  {
    id: 'fom-u2-q1',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Construction and Working of a Single-Trace CRO',
    questionText: 'Explain the construction and working of a single-trace CRO with a neat block diagram.',
    marks: 7,
    priority: 'high',
    type: 'diagram',
    years: ['2022', '2019'],
    frequency: 'Repeated 2 times in 7-mark papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Single-Trace CRO Summary:
- **Core Components**:
  1. CRT (Cathode Ray Tube): Display device with electron gun, deflection plates, and phosphor screen.
  2. Vertical Amplifier: Amplifies small input signals to provide adequate deflection voltage.
  3. Delay Line: Delays vertical signal by ~200 ns so the time base generator has time to start sweep.
  4. Trigger Circuit: Derives synchronizing pulses from vertical signal to initiate sweep at exact same phase.
  5. Time-Base (Sweep) Generator: Generates linear sawtooth voltage for horizontal deflection ($x \propto t$).
  6. Horizontal Amplifier: Amplifies sawtooth wave for horizontal deflection plates.
  7. Power Supplies: High Voltage (EHT: -1 kV to -2 kV) for CRT electron gun; Low Voltage (+15V, -15V, +5V) for amplifiers.`,
      examAnswer: `### 1. Introduction
The Cathode Ray Oscilloscope (CRO) is an extremely versatile electronic test instrument capable of providing a visual two-dimensional graphic representation of electrical signals (amplitude versus time or parameter versus parameter).

---

### 2. Functional Block Diagram Description

The functional blocks of a standard single-trace CRO are:

#### (a) Cathode Ray Tube (CRT)
The heart of the oscilloscope. It generates a focused, accelerated beam of electrons, deflects it along X and Y axes, and displays the impact as a bright spot on a phosphor-coated fluorescent screen.

#### (b) Vertical Attenuator and Vertical Amplifier
- The input signal under observation is fed to the vertical input.
- The calibrated attenuator (VOLTS/DIV switch) scales down high-amplitude signals.
- The wideband vertical amplifier amplifies the signal to the required potential (several tens of volts) needed to drive the vertical deflection plates ($Y$-plates).

#### (c) Delay Line
- A delay line providing approximately $200\\text{ ns}$ delay is inserted between the vertical amplifier and the $Y$-plates.
- **Function**: The time-base generator requires finite time (a few tens of nanoseconds) to trigger and initiate its sweep ramp. Without the delay line, the very beginning (leading edge) of the input waveform would be missed on the screen.

#### (d) Trigger Circuit
Extracts a small sample of the vertical input and generates sharp trigger pulses at a precise, repeatable voltage threshold and slope (+ or -). This guarantees that every horizontal sweep starts at the identical point on the signal waveform, preventing waveform drift or jitter.

#### (e) Time-Base Generator (Sweep Generator)
Generates a highly linear sawtooth voltage ($V_{sawtooth}$). During the trace (sweep) period, the voltage increases linearly with time, driving the electron spot at a constant speed from left to right. During the retrace (flyback) period, the voltage drops rapidly, returning the spot to the left side.

#### (f) Blanking Circuit
Supplies a negative unblanking gate pulse to the control grid of the CRT during flyback, turning off the electron beam so the retrace line is invisible.

#### (g) Horizontal Amplifier
Amplifies the sawtooth sweep voltage to drive the horizontal deflection plates ($X$-plates).

#### (h) Power Supplies
- **High Voltage (EHT)**: Negative supply ($-1000\\text{ V}$ to $-2500\\text{ V}$) for cathode, grid, and accelerating anodes.
- **Low Voltage (LV)**: Regulated DC supplies for solid-state operational amplifiers, logic triggers, and sweep timers.`,
      detailedLearning: `### Why the Sawtooth Waveform is Crucial:
Horizontal displacement is $x(t) \propto V_x(t)$.
If $V_x(t) = m \cdot t$ (linear ramp), then:
$$x(t) \propto t$$
The horizontal axis becomes a true, uniform linear representation of time! The vertical displacement is $y(t) \propto V_{in}(t)$.
Thus, the screen plots $y(t)$ versus $t$, rendering the actual waveform shape directly.`
    }
  },
  {
    id: 'fom-u2-q2',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Working Principle of a Dual-Trace CRO',
    questionText: 'Explain the working principle of a dual-trace CRO with a proper block diagram.',
    marks: 7,
    priority: 'very_high',
    type: 'diagram',
    years: ['2025', '2024', '2022', '2019'],
    frequency: 'Repeated 4 times (Top Priority recurring 7M question)',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Dual-Trace CRO Core Concepts:
- **Concept**: Uses a SINGLE electron gun CRT, but displays TWO independent signals (Channel A and Channel B) by time-sharing via an electronic switch.
- **Modes of Operation**:
  1. **ALT (Alternate) Mode**: Channel A swept for full trace, then Channel B swept for next full trace. Used for HIGH frequency signals ($f > 1\\text{ kHz}$).
  2. **CHOP Mode**: Electronic switch rapidly toggles between Channel A and B at high frequency (~100 kHz - 1 MHz) during a single sweep. Used for LOW frequency signals ($f < 1\\text{ kHz}$).
- **Key Advantage**: Enables phase shift comparison, input/output waveform timing, and transfer function analysis.`,
      examAnswer: `### 1. Principle of Dual-Trace CRO
A Dual-Trace Oscilloscope displays two independent input signals simultaneously on a single CRT screen using a single electron gun. It achieves this by rapidly switching the single electron beam between Channel A and Channel B using a high-speed electronic switch (FET/BJT multiplexer).

---

### 2. Block Diagram and Subsystems
1. **Preamplifiers (Channel A and Channel B)**: Two identical, independent vertical input channels with separate VOLTS/DIV attenuators and vertical position controls.
2. **Electronic Switch (Multiplexer)**: Controlled by a mode selector logic block (ALT, CHOP, Channel A only, Channel B only, ADD).
3. **Delay Line**: Placed after the electronic switch to delay the combined signal before reaching the vertical deflection plates.
4. **Common Horizontal Section**: Single time-base generator, trigger generator, horizontal amplifier, and horizontal deflection plates.

---

### 3. Detailed Modes of Operation

#### (a) Alternate (ALT) Mode
- **Operation**: The electronic switch alternates channels after every complete horizontal sweep.
  - Sweep 1: Channel A is displayed across the screen.
  - Retrace: Switch toggles during flyback.
  - Sweep 2: Channel B is displayed across the screen.
- **Frequency Suitability**: Strictly used for **high-frequency signals** ($> 1\\text{ kHz}$). At high frequencies, the repetition rate is fast enough that persistence of vision blends the two traces into a stable, continuous simultaneous display.
- **Limitation at Low Frequencies**: Below $1\\text{ kHz}$, the alternate sweeps become visible as disturbing alternate flickers.

#### (b) Chopped (CHOP) Mode
- **Operation**: The electronic switch free-runs at a fixed high frequency (typically $100\\text{ kHz}$ to $1\\text{ MHz}$), sampling small slices of Channel A and Channel B alternately during a single horizontal sweep.
- **Frequency Suitability**: Ideal for **low-frequency signals** ($< 1\\text{ kHz}$).
- **Blanking**: During channel transitions, blanking pulses are applied to suppress the switching transients, ensuring clean traces.

---

### 4. Comparison: Dual-Trace vs Dual-Beam CRO
- **Dual-Trace**: 1 electron gun, 1 set of deflection plates, electronic switch, cheaper, lighter.
- **Dual-Beam**: 2 separate electron guns, 2 sets of vertical plates, simultaneous real-time display, expensive, bulkier.`,
      detailedLearning: `### Trigger Source Selection in Dual Trace:
The operator can select trigger source as:
- **Channel A**: Sweep locks to signal A; signal B displays phase relative to A.
- **Channel B**: Sweep locks to signal B.
- **External**: Locks to an external synchronization clock.
If ALT trigger is mistakenly selected on two non-harmonically related signals, the oscilloscope triggers on each independently, showing both as stable even if they are unsynchronized in reality.`
    }
  },
  {
    id: 'fom-u2-q3',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Functional Block Diagram of Dual-Trace Oscilloscope',
    questionText: 'Draw the functional block diagram of a dual-trace oscilloscope and explain its operation in detail.',
    marks: 7,
    priority: 'very_high',
    type: 'diagram',
    years: ['2024', '2022'],
    frequency: 'Repeated 2 times in 7-mark category',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Dual vertical preamps $\\to$ Electronic switch $\\to$ Delay line $\\to$ Main vertical amp $\\to$ Y-plates.
- Trigger pickoff $\\to$ Sweep generator $\\to$ Horizontal amp $\\to$ X-plates.
- ALT mode: sweep-by-sweep switching (high freq).
- CHOP mode: 100 kHz - 500 kHz slice switching (low freq).`,
      examAnswer: `### Detailed Operation of Dual-Trace Oscilloscope

#### 1. Architecture Overview
A Dual-Trace Oscilloscope allows simultaneous comparison of two waveforms (such as amplifier input and output) using a single CRT.

#### 2. Functional Building Blocks
1. **Dual Vertical Channels (Ch A & Ch B)**:
   - Each channel contains an AC-GND-DC input coupling switch.
   - Stepped attenuator for calibrated voltage scaling (e.g., $5\\text{ mV/div}$ to $20\\text{ V/div}$).
   - Low-noise FET differential preamplifier.
2. **Electronic Switch**:
   - High-speed bi-directional solid-state switch.
   - Operated in ALT, CHOP, DUAL, or ADD mode.
3. **Delay Line**:
   - Lumped-constant LC delay line providing $150 - 250\\text{ ns}$ delay.
   - Ensures trigger circuit fires sweep before signal reaches vertical plates.
4. **Main Vertical Output Amplifier**:
   - Push-pull driver amplifier providing balanced differential drive to $Y$-plates.
5. **Trigger Pickoff Circuit**:
   - Selects trigger signal from Channel A, Channel B, or external terminal.
6. **Time-Base Generator & Horizontal Drive**:
   - Produces linear ramp $V_x(t) = K \\cdot t$ for linear horizontal time axis.
   - Synchronized by Schmitt trigger output.

#### 3. Mathematical Basis of Time-Base Linear Sweep:
$$\\text{Current through charging capacitor: } I_c = C \\frac{dV}{dt} = \\text{const}$$
$$V(t) = \\frac{I_c}{C} t$$
Linear charging of capacitor $C$ by a constant current source produces an ideal sawtooth ramp. Rapid discharge through a transistor switch creates flyback.`,
      detailedLearning: `In modern mixed-signal circuits, comparing phase shift between input and output directly reveals transfer function characteristics, phase margin, and group delay.`
    }
  },
  {
    id: 'fom-u2-q4',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Functionality and Subsystems of a Single-Trace CRO',
    questionText: 'Describe the functionality of a single-trace CRO.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2022', '2019'],
    frequency: 'Repeated across earlier PYQ papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `Subsystems & Functionality:
1. Electron Gun: Generates focused high-speed electron beam.
2. Vertical Deflection System: Faithful amplification and calibration of input signal ($y$-axis).
3. Delay Line: Preserves leading edge of waveform.
4. Time-Base Generator: Provides time-linear horizontal deflection ($x$-axis).
5. Trigger Circuit: Stabilizes waveform by starting sweep at fixed phase.
6. Horizontal Amplifier: Drives $X$-deflection plates.
7. CRT Screen: Phosphor luminescent target displaying optical image.`,
      examAnswer: `### Comprehensive Functionality of Single-Trace CRO

#### 1. Signal Path (Vertical Axis)
- **Input Coupling (AC/GND/DC)**: DC coupling passes both AC and DC components; AC coupling inserts a blocking capacitor ($C \\approx 0.1\\mu\\text{F}$) to block DC bias and display only ripple or AC signals; GND grounds the amplifier input to establish the zero-volt reference line.
- **Vertical Attenuator**: High-impedance compensated divider (frequency-independent voltage divider using RC parallel combinations) that scales input voltages without loading high-frequency signals.
- **Vertical Amplifier**: High-gain, wide-bandwidth differential amplifier establishing the sensitivity ($V/\\text{div}$) of the oscilloscope.
- **Delay Line**: Introduces $200\\text{ ns}$ delay to allow trigger logic to open sweep gate before signal arrives at deflection plates.

#### 2. Time-Base Path (Horizontal Axis)
- **Sweep Generator**: Uses a Miller integrator or constant-current ramp generator to generate a linear sawtooth waveform.
- **Trigger Level and Slope Controls**: User selects threshold voltage ($V_{th}$) and slope ($+dV/dt$ or $-dV/dt$) at which sweep initiates.
- **Horizontal Amplifier**: Provides push-pull output voltages to horizontal plates.

#### 3. CRT Display Subsystem
- **Electron Gun**: Triode/tetrode structure (Cathode, Control Grid, Accelerating Anode).
- **Focusing System**: Electrostatic lens focusing beam to a sharp pinpoint focal spot.
- **Aquadag Coating**: Conductive carbon coating on CRT inner glass walls that collects secondary electrons knocked off the phosphor screen, returning them to ground and preventing charge buildup.`,
      detailedLearning: `Without the conductive Aquadag coating, accumulated negative charge on the glass faceplate would repel incoming beam electrons, causing severe defocusing and distorted deflection.`
    }
  },
  {
    id: 'fom-u2-q5',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Working and Block Diagram of Digital Storage Oscilloscope (DSO)',
    questionText: 'Explain the working of a Digital Storage Oscilloscope (DSO). Draw its block diagram and explain each function.',
    marks: 7,
    priority: 'high',
    type: 'diagram',
    years: ['2024', '2019'],
    frequency: 'Repeated 2 times in 7-mark category',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### DSO Architecture:
Input $\\to$ Attenuator $\\to$ Preamplifier $\\to$ ADC (Flash Converter) $\\to$ Acquisition Memory (RAM) $\\to$ Microprocessor/DSP $\\to$ Display Memory $\\to$ LCD/OLED Display.
- **Key Features**: Pre-trigger capture, infinite storage time, automated parameter calculation (Vpp, Vrms, Freq), FFT spectrum analysis, waveform recall.`,
      examAnswer: `### 1. Introduction to Digital Storage Oscilloscope (DSO)
A Digital Storage Oscilloscope (DSO) digitizes the input analog signal, stores the resulting binary samples in digital semiconductor memory (RAM), and reconstructs the waveform on a digital display (LCD/TFT) or conventional CRT.

---

### 2. Functional Block Diagram

\`\`\`
Analog In ---> [Attenuator] ---> [Preamplifier] ---> [A/D Converter (ADC)]
                                                             |
                                                             v
[Trigger System] ------------------------------------> [Acquisition Memory (SRAM)]
                                                             |
                                                             v
[Display Control/LCD] <--- [D/A or Digital Video Engine] <--- [Microprocessor / DSP]
\`\`\`

---

### 3. Detailed Functions of Subsystems

#### (a) Analog Signal Conditioning
- Contains attenuators and wideband amplifiers to scale the input signal to match the dynamic range of the internal Flash ADC (typically $1\\text{ V}$ peak-to-peak).

#### (b) Analog-to-Digital Converter (ADC)
- High-speed Flash ADC that converts the analog input into $8$-bit or $12$-bit digital words at sampling rates from $100\\text{ MS/s}$ to several Giga-samples/second ($GS/s$).
- **Nyquist Criterion**: Sampling rate $f_s$ must be at least $2\\times$ the highest signal frequency component ($f_s \\ge 2 f_{max}$) to avoid aliasing. In practice, $4\\times$ to $10\\times$ oversampling is used.

#### (c) Acquisition Memory (Buffer RAM)
- High-speed Static RAM that continuously stores incoming digitized samples in a circular FIFO buffer.
- When a valid trigger event occurs, the memory controller freezes the buffer after a predetermined number of post-trigger samples.

#### (d) Microprocessor and DSP Core
- Reads waveform samples from memory.
- Performs digital filtering, interpolation (Linear or $(\\sin x)/x$ interpolation), waveform math ($A + B, A - B$, FFT), and automated measurements ($V_{pp}, V_{rms}$, rise time, frequency).

#### (e) Display Controller
- Formats pixel data and displays the synthesized waveform on modern color LCD screens along with alphanumeric on-screen readouts.

---

### 4. Key Advantages of DSO:
1. **Pre-Trigger Viewing**: Can display events that occurred *before* the trigger event occurred (impossible with analog CRO).
2. **Infinite Storage Time**: Captured transients remain stored indefinitely without fading.
3. **Signal Processing**: Directly computes Fast Fourier Transforms (FFT), harmonic distortion, and integration.
4. **Digital Export**: USB/Ethernet/GPIB connectivity for export to PC.`,
      detailedLearning: `### Sampling Modes in DSO:
1. **Real-Time Sampling**: The ADC acquires all points of the waveform in a single trigger pass. Essential for single-shot transients.
2. **Equivalent-Time Sampling (ETS)**: For repetitive signals only. The DSO acquires samples over multiple successive cycles, shifting the sample clock slightly each cycle to reconstruct ultra-high-frequency waveforms beyond the single-shot ADC bandwidth.`
    }
  },
  {
    id: 'fom-u2-q6',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Difference Between Analog CRO and DSO',
    questionText: 'Differentiate between CRO and DSO.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2024', '2019'],
    frequency: 'Repeated 2 times in 7-mark category',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `| Feature | Analog CRO | Digital Storage Oscilloscope (DSO) |
|---|---|---|
| Signal Storage | Phosphor persistence (seconds) | Digital RAM memory (permanent) |
| Pre-trigger | Impossible | Fully supported |
| Transients | Hard to capture | Easily captures single-shot pulses |
| Cost | Low | Moderate to high |
| Automated Math | None | Full (FFT, RMS, Frequency, Peak) |`,
      examAnswer: `### Comprehensive Comparison: Analog CRO vs DSO

| Parameter | Analog CRO (Conventional) | Digital Storage Oscilloscope (DSO) |
|---|---|---|
| **Operating Principle** | Voltage directly deflects an electron beam across a phosphor CRT in real time. | Analog signal is sampled by an ADC, stored in digital memory, and processed digitally. |
| **Storage Capability** | No memory; relies on phosphor persistence or specialized storage mesh tube. | Infinite storage duration in RAM/Flash memory without any degradation. |
| **Pre-Trigger Capture** | **Cannot** display events prior to the trigger event. | **Can** display pre-trigger information because memory constantly records in a circular buffer. |
| **Transient / Single-shot Capture** | Very poor; single fast transients produce an invisible faint trace. | Excellent; captures single-shot transients effortlessly via single-sequence mode. |
| **Display Technology** | Cathode Ray Tube (CRT) only. | Modern Color LCD / TFT / OLED displays. |
| **Bandwidth & Cost** | Cost-effective for modest bandwidths ($20 - 50\\text{ MHz}$). | Available from $50\\text{ MHz}$ to over $100\\text{ GHz}$ (high-end models are expensive). |
| **Measurement Automation** | Manual reading from graticule divisions; prone to human error. | Automated cursors and on-screen readouts of $V_{pp}, V_{rms}$, frequency, duty cycle, jitter. |
| **Advanced Processing** | None. | Fast Fourier Transform (FFT), digital filtering, pass/fail mask testing, math operations. |
| **Size & Weight** | Bulky, heavy due to CRT glass envelope and high-voltage transformer. | Compact, lightweight, portable, often battery-operated. |
| **Data Export** | Photographic capture of screen. | Direct USB flash drive saving (CSV, BMP), LAN/GPIB PC interfacing. |`,
      detailedLearning: `Analog scopes had zero latency and infinite vertical resolution (continuous analog beam). DSO resolution is governed by ADC quantization ($8\\text{-bit} = 256$ levels, $12\\text{-bit} = 4096$ levels).`
    }
  },
  {
    id: 'fom-u2-q7',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Derivation of CRT Deflection Sensitivity and Deflection Factor',
    questionText: 'Derive the expression for deflection sensitivity of CRT and comment on its linearity.',
    marks: 7,
    priority: 'high',
    type: 'derivation',
    years: ['2023'],
    frequency: 'Derivation repeated in 2023 7M paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: true,
    answer: {
      quickRevision: `### Key Formulas:
- Axial velocity: $v_{ox} = \\sqrt{\\frac{2 e V_a}{m}}$
- Vertical deflection on screen:
  $$D = \\frac{L \\cdot l \\cdot V_d}{2 \\cdot d \\cdot V_a}$$
- **Deflection Sensitivity**:
  $$S = \\frac{D}{V_d} = \\frac{L \\cdot l}{2 \\cdot d \\cdot V_a} \\quad (\\text{mm/V or cm/V})$$
- **Deflection Factor**:
  $$G = \\frac{1}{S} = \\frac{2 \\cdot d \\cdot V_a}{L \\cdot l} \\quad (\\text{V/mm})$$
- **Linearity**: Since $D \\propto V_d$, the deflection is strictly linear.`,
      examAnswer: `### Derivation of Deflection Sensitivity in an Electrostatic CRT

#### 1. Schematic Diagram and Nomenclature:
Consider an electron beam entering the space between two parallel deflection plates:
- $V_a$ = Accelerating anode voltage (V)
- $V_d$ = Deflecting potential between plates (V)
- $l$ = Length of deflection plates (m)
- $d$ = Separation distance between plates (m)
- $L$ = Distance from the center of deflection plates to the fluorescent screen (m)
- $e$ = Charge of an electron ($1.602 \\times 10^{-19}\\text{ C}$)
- $m$ = Mass of an electron ($9.109 \\times 10^{-31}\\text{ kg}$)
- $D$ = Total deflection on the screen along the Y-axis (m)

---

#### 2. Axial Velocity of Electron Beam ($v_{ox}$):
Electrons are accelerated by anode voltage $V_a$. Loss of potential energy equals gain in kinetic energy:
$$e \\cdot V_a = \\frac{1}{2} m v_{ox}^2$$
$$v_{ox} = \\sqrt{\\frac{2 e V_a}{m}} \\quad \\text{--- (Equation 1)}$$

---

#### 3. Motion Inside the Deflecting Plates:
The electric field between the plates is uniform:
$$E_y = \\frac{V_d}{d}$$
The upward electrostatic force on the electron:
$$F_y = e \\cdot E_y = e \\frac{V_d}{d}$$
By Newton's second law, vertical acceleration:
$$a_y = \\frac{F_y}{m} = \\frac{e V_d}{m d} \\quad \\text{--- (Equation 2)}$$
The time taken by an electron to traverse the length $l$ of the plates:
$$t = \\frac{l}{v_{ox}} \\quad \\text{--- (Equation 3)}$$

Upon exiting the plates, the vertical velocity acquired is:
$$v_y = a_y \\cdot t = \\left(\\frac{e V_d}{m d}\\right) \\left(\\frac{l}{v_{ox}}\right) \\quad \\text{--- (Equation 4)}$$

The deflection angle $\\theta$ of the beam upon emerging from the plates is:
$$\\tan \\theta = \\frac{v_y}{v_{ox}} = \\frac{e V_d l}{m d v_{ox}^2} \\quad \\text{--- (Equation 5)}$$

Substitute $v_{ox}^2 = \\frac{2 e V_a}{m}$ into Equation 5:
$$\\tan \\theta = \\frac{e V_d l}{m d \\left(\\frac{2 e V_a}{m}\\right)} = \\frac{l \\cdot V_d}{2 d \\cdot V_a} \\quad \\text{--- (Equation 6)}$$

---

#### 4. Total Deflection on Screen ($D$):
Electrons travel from the plate center to the screen along a straight-line path of length $L$. From geometry:
$$D = L \\tan \\theta$$
Substitute Equation 6 into this relation:
$$D = \\frac{L \\cdot l \\cdot V_d}{2 \\cdot d \\cdot V_a} \\quad \\text{--- (Equation 7)}$$

---

#### 5. Deflection Sensitivity ($S$) and Deflection Factor ($G$):
- **Deflection Sensitivity ($S$)**: Deflection produced on screen per unit deflecting voltage:
  $$S = \\frac{D}{V_d} = \\frac{L \\cdot l}{2 \\cdot d \\cdot V_a} \\quad (\\text{m/V or mm/V})$$
- **Deflection Factor ($G$)**: Reciprocal of deflection sensitivity:
  $$G = \\frac{1}{S} = \\frac{2 \\cdot d \\cdot V_a}{L \\cdot l} \\quad (\\text{V/m or V/mm})$$

---

#### 6. Commentary on Linearity:
From Equation 7, $D = \\left(\\frac{L l}{2 d V_a}\\right) V_d$.
Since $L, l, d,$ and $V_a$ are constants for a given CRT geometry and operating supply:
$$D \\propto V_d$$
**Conclusion**: The spot deflection on the screen is strictly directly proportional to the deflecting voltage $V_d$. This perfect linearity ensures that the display accurately reproduces the voltage waveform without geometrical distortion.`,
      detailedLearning: `### Sensitivity Trade-offs in CRT Design:
To maximize sensitivity $S = \\frac{L l}{2 d V_a}$:
- Increase $L$: Makes the tube excessively long and fragile.
- Increase $l$: Limited because at high deflections the beam will hit the plate edge.
- Decrease $d$: Increases risk of beam striking plates (flared plates are used to counteract this).
- Decrease $V_a$: Increases sensitivity, but reduces beam kinetic energy, resulting in a dim, faint trace.`
    }
  },
  {
    id: 'fom-u2-q8',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Electrostatic Focusing and Deflection in CRT',
    questionText: 'Explain electrostatic focusing, electron beam focusing and deflection in a cathode ray tube with equations.',
    marks: 7,
    priority: 'high',
    type: 'derivation',
    years: ['2025'],
    frequency: 'Repeated in 2025 7M paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: true,
    answer: {
      quickRevision: `### Electrostatic Lens & Focusing:
- Formed by coaxial cylindrical anodes ($A_1$ and $A_2$) at different potentials ($V_{a1} < V_{a2}$).
- Equipotential curved surfaces act like an optical convex lens for electrons.
- **Electron Snell's Law**:
  $$v_1 \\sin \\theta_1 = v_2 \\sin \\theta_2 \\implies \\sqrt{V_1} \\sin \\theta_1 = \\sqrt{V_2} \\sin \\theta_2$$
- Beam is focused to a tiny focal point on phosphor screen by adjusting focus voltage on $A_2$.`,
      examAnswer: `### Electrostatic Focusing and Electron Beam Deflection in CRT

#### 1. Operating Principle of Electrostatic Lens
In an electrostatic CRT, focusing is achieved using an electrostatic electron lens consisting of two or more coaxial cylindrical anodes held at different potentials:
- **Pre-accelerating Anode ($A_1$)**: Held at potential $V_1$ (e.g., $+600\\text{ V}$).
- **Focusing Anode ($A_2$)**: Held at adjustable potential $V_2$ (e.g., $0$ to $+400\\text{ V}$).
- **Accelerating Anode ($A_3$)**: Held at high positive potential $V_3$ (e.g., $+2000\\text{ V}$).

The electric field created between these adjacent cylinders produces curved equipotential surfaces bulging into the lower-potential cylinder.

---

#### 2. Electron Refraction (Bethe's Law / Electron Snell's Law)
Consider an electron crossing an equipotential boundary separating region 1 (potential $V_1$, velocity $v_1$) and region 2 (potential $V_2$, velocity $v_2$):
- Electric field acts only normal to the boundary, accelerating the electron along the normal direction.
- The tangential component of velocity remains unchanged:
  $$v_1 \\sin \\theta_1 = v_2 \\sin \\theta_2$$
where $\\theta_1$ and $\\theta_2$ are angles made with the normal.

Since kinetic energy is related to electrostatic potential:
$$\\frac{1}{2} m v_1^2 = e V_1 \\implies v_1 = \\sqrt{\\frac{2 e V_1}{m}}$$
$$\\frac{1}{2} m v_2^2 = e V_2 \\implies v_2 = \\sqrt{\\frac{2 e V_2}{m}}$$

Substituting into the tangential conservation equation gives:
$$\\sqrt{V_1} \\sin \\theta_1 = \\sqrt{V_2} \\sin \\theta_2$$
$$\\frac{\\sin \\theta_1}{\\sin \\theta_2} = \\sqrt{\\frac{V_2}{V_1}} = \\mu_{12}$$
where $\\mu_{12}$ is the electrostatic refractive index.

---

#### 3. Beam Convergence Mechanism
When diverging electrons from the cathode pass through the first half of the lens (where field lines decelerate tangential motion and curve inward), they bend toward the axis. In the second half, the diverging action is weaker because the electron has gained higher axial speed and spends less time in the field.
The net effect is a **converging lens**, focusing the electron beam onto the phosphor screen.

---

#### 4. Beam Deflection Equation
Once focused, the beam passes through horizontal and vertical deflection plates:
$$D_y = \\frac{L \\cdot l \\cdot V_y}{2 d V_a}, \\quad D_x = \\frac{L \\cdot l \\cdot V_x}{2 d V_a}$$
By simultaneously applying signal voltage $V_y(t)$ and sweep ramp $V_x(t)$, the focused spot traces the complete 2D waveform.`,
      detailedLearning: `Adjusting the "FOCUS" front panel knob on a CRO directly changes the DC bias voltage on focusing anode $A_2$, altering lens curvature until the focal plane coincides with the phosphor screen surface.`
    }
  },

  // --- 2-3 MARK QUESTIONS ---
  {
    id: 'fom-u2-q9',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Circuit Diagram and Structure of CRT',
    questionText: 'Draw the circuit diagram of CRT.',
    marks: 2,
    priority: 'moderate',
    type: 'diagram',
    years: ['2022'],
    frequency: 'Appeared in 2022 2-mark section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `Cathode Ray Tube Sections:
1. Electron Gun (Heater, Indirectly heated Cathode, Control Grid, Pre-accelerating, Focusing, Accelerating Anodes).
2. Deflection System (Y-plates, X-plates).
3. Fluorescent Screen (Phosphor layer, Aquadag coating).`,
      examAnswer: `### Cathode Ray Tube (CRT) Structural Layout
A CRT consists of three main structural sections inside an evacuated glass envelope:
1. **Electron Gun Assembly**:
   - Filament Heater: $6.3\\text{ V}$ AC supply.
   - Barium/Strontium-oxide coated Cathode (emits electrons thermionically).
   - Control Grid: Biased negatively ($-10\\text{ V}$ to $-50\\text{ V}$) to regulate beam intensity (brightness).
   - Pre-accelerating and Accelerating Anodes: Held at high positive potentials ($+1\\text{ kV}$ to $+2\\text{ kV}$).
   - Focusing Anode: Variable potential to focus beam into a narrow pencil.
2. **Deflection Plate System**:
   - Vertical Plates ($Y_1, Y_2$): Deflect beam up/down.
   - Horizontal Plates ($X_1, X_2$): Deflect beam left/right.
3. **Fluorescent Screen**:
   - Coated with phosphor (e.g., P31 green phosphor).
   - Conductive graphite Aquadag coating connected to anode potential.`,
      detailedLearning: `The vacuum inside CRT is exceptionally high ($10^{-6}$ to $10^{-8}\\text{ Torr}$) to prevent electron scattering against gas molecules.`
    }
  },
  {
    id: 'fom-u2-q10',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Why is CRT Called the Heart of CRO?',
    questionText: 'Why is CRT called the heart of CRO?',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2022'],
    frequency: 'Appeared in 2022 2-mark section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- CRT performs the actual conversion of electrical signals into visible optical waveforms.
- All other circuits (amplifiers, time base, power supplies) exist solely to feed, control, and position the CRT electron beam.`,
      examAnswer: `The **Cathode Ray Tube (CRT)** is termed the "heart of the CRO" because:
1. It is the primary transducer that converts invisible time-varying electrical signals into a visual optical trace on its phosphor screen.
2. Every other auxiliary subsystem in the CRO (vertical amplifier, attenuator, trigger generator, horizontal time-base sweep generator, high-voltage supply) functions solely to condition signals to control and deflect the CRT's electron beam.`,
      detailedLearning: `Without the CRT, an analog oscilloscope would possess no visual rendering mechanism.`
    }
  },
  {
    id: 'fom-u2-q11',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Function of Time-Base Generator in CRO',
    questionText: 'What is the function of the time-base generator in CRO?',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2024'],
    frequency: 'Appeared in 2024 2-mark section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Generates a linear sawtooth voltage wave ($V_x \\propto t$).
- Moves the electron beam horizontally at a constant speed from left to right across the screen, establishing a linear time axis.`,
      examAnswer: `The **Time-Base Generator** in an oscilloscope produces a precise linear sawtooth voltage waveform:
1. **Trace (Sweep) Period**: Sweeps the electron spot across the screen horizontally from left to right at a strictly uniform velocity ($v_x = \\text{constant}$), making horizontal displacement proportional to elapsed time ($x \\propto t$).
2. **Retrace (Flyback) Period**: Rapidly returns the electron beam from right to left back to the starting point, while triggering a blanking pulse to hide the retrace path.`,
      detailedLearning: `The rate of voltage rise ($dV/dt$) determines the sweep speed, calibrated in time per division (e.g., $1\\text{ ms/div}, 10\\mu\\text{s/div}$).`
    }
  },
  {
    id: 'fom-u2-q12',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Role of Synchronization in Obtaining a Stable Waveform',
    questionText: 'How does synchronization help in obtaining a stable waveform?',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2025'],
    frequency: 'Appeared in 2025 2-mark section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Synchronizes sweep start with signal frequency ($T_{sweep} = n \\cdot T_{signal}$).
- Ensures every horizontal sweep begins at the exact same phase/amplitude point of the input waveform, locking it stationary on screen without drift.`,
      examAnswer: `**Synchronization** forces the horizontal time-base sweep frequency ($f_{sweep}$) to be an exact sub-multiple or harmonic of the vertical input signal frequency ($f_{signal}$):
$$f_{signal} = n \\cdot f_{sweep} \\quad (n = 1, 2, 3, \\dots)$$
By locking the initiation of each sweep to an identical reference voltage point and slope on the input signal, successive traces retrace exactly over the preceding ones. This prevents waveform drift, rolling, or multiple overlapping phase patterns.`,
      detailedLearning: `If an oscilloscope is un-synchronized (free-running mode), each sweep starts at a random phase angle of the input, making the waveform appear as a moving blur across the screen.`
    }
  },
  {
    id: 'fom-u2-q13',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Electromagnetic Interference (EMI) Effect in Electronic Systems',
    questionText: 'Explain the effect of EMI in electronic circuits and systems.',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2024', '2023'],
    frequency: 'Repeated in 2023 and 2024 2-mark sections',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- **EMI**: Unwanted electromagnetic disturbance generated by external sources that degrades circuit performance.
- **Effects**: Signal distortion, false triggering in digital circuits, measurement errors, reduced SNR.`,
      examAnswer: `**Electromagnetic Interference (EMI)** is the degradation of circuit performance caused by unwanted radiated electromagnetic fields or conducted electrical transients from external or internal sources.
- **Effects on Electronic Circuits**:
  1. Superimposes high-frequency spikes and ripple onto sensitive analog measurement signals (poor signal-to-noise ratio).
  2. Causes false clock triggering and data corruption in digital logic and microcontrollers.
  3. Induces parasitic hum ($50\\text{ Hz}$ power line pickup) in high-impedance oscilloscope probe inputs.`,
      detailedLearning: `Coupling occurs via conduction (common impedance ground loops), radiation (antenna effect), capacitive coupling ($dV/dt$), or inductive coupling ($di/dt$).`
    }
  },
  {
    id: 'fom-u2-q14',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Definition of Noise and Noise Reduction Techniques',
    questionText: 'What is noise? List various noise-reduction techniques.',
    marks: 3,
    priority: 'high',
    type: 'theory',
    years: ['2025', '2024'],
    frequency: 'Repeated in 2024 and 2025 3-mark sections',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- **Noise**: Unwanted electrical signals that obscure or corrupt the desired information signal.
- **Techniques**:
  1. Shielding (Faraday cages, Mu-metal).
  2. Grounding (single-point star grounds).
  3. Differential amplification (high CMRR).
  4. Filtering (low-pass, notch filters).
  5. Twisted pair cabling.`,
      examAnswer: `### 1. Definition of Noise
**Noise** is defined as any unwanted, extraneous electrical energy that superimposes itself on the desired signal, degrading measurement fidelity and limiting the ultimate detection sensitivity of an instrument.

---

### 2. Major Noise Reduction Techniques
1. **Electrostatic and Magnetic Shielding**:
   - Enclosing sensitive circuits in copper/aluminum boxes (Faraday shield) to block capacitive coupling.
   - Enclosing CRT and power transformers in high-permeability Mu-metal to divert stray magnetic fields.
2. **Proper Grounding (Star Grounding)**:
   - Implementing single-point star grounding to avoid ground loops that generate circulating ground-current voltages.
3. **Twisted Pair and Coaxial Cabling**:
   - Twisting signal leads ensures electromagnetic pickup induces equal and opposite noise voltages in adjacent loops, canceling the net induced EMI.
4. **Differential Measurement and High CMRR**:
   - Using instrumentation amplifiers with high Common Mode Rejection Ratio ($CMRR > 100\\text{ dB}$) to reject common-mode noise.
5. **Bandwidth Limiting and Filtering**:
   - Inserting low-pass filters or $50\\text{ Hz}$ notch filters to restrict bandwidth strictly to the spectrum of the signal of interest.`,
      detailedLearning: `Thermal Johnson-Nyquist noise is generated by thermal motion of charge carriers inside resistors: $V_n = \\sqrt{4 k_B T R \\Delta f}$. Restricting bandwidth $\\Delta f$ directly reduces noise power.`
    }
  },
  {
    id: 'fom-u2-q15',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Difference Between CRO and CRT',
    questionText: 'What is the difference between CRO and CRT?',
    marks: 2,
    priority: 'moderate',
    type: 'theory',
    years: ['2023'],
    frequency: 'Appeared in 2023 2-mark section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- **CRT**: The vacuum tube display component.
- **CRO**: The complete electronic test instrument containing CRT plus all driving amplifiers, sweep circuits, and power supplies.`,
      examAnswer: `### Comparison: CRT vs CRO

| Parameter | Cathode Ray Tube (CRT) | Cathode Ray Oscilloscope (CRO) |
|---|---|---|
| **Nature** | A vacuum electron tube component. | A complete, standalone electronic measuring instrument. |
| **Function** | Generates an electron beam and converts beam deflection into a visual light spot on phosphor. | Measures, amplifies, processes, synchronizes, and displays complex electrical waveforms. |
| **Composition** | Envelope, electron gun, deflection plates, and phosphor screen. | Contains a CRT plus power supplies, vertical amplifiers, attenuators, delay lines, and time-base sweep generators. |`,
      detailedLearning: `Think of CRT as the picture tube, and CRO as the entire television set.`
    }
  },
  {
    id: 'fom-u2-q16',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Operating Principle of a Spectrum Analyser',
    questionText: 'Explain the principle of a spectrum analyser.',
    marks: 3,
    priority: 'moderate',
    type: 'theory',
    years: ['2023', '2019'],
    frequency: 'Repeated across exam papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Displays signal amplitude (Y-axis) versus frequency (X-axis) (Frequency Domain).
- **Principle**: Superheterodyne receiver that sweeps a local oscillator (LO) across a frequency band, mixing it with the input signal to downconvert to a fixed Intermediate Frequency (IF) filter and detector.`,
      examAnswer: `### Principle of a Spectrum Analyser
A **Spectrum Analyser** displays the electrical energy distribution of a signal across its frequency components (Amplitude on Y-axis vs Frequency on X-axis), providing a frequency-domain view.

---

### Working Principle (Swept-Tuned Superheterodyne Type):
1. **RF Input Attenuator**: Scales input signal power.
2. **Mixer**: Combines input signal ($f_{in}$) with a swept Local Oscillator ($f_{LO}$).
3. **Swept Local Oscillator**: Driven by a ramp generator to sweep smoothly across the desired frequency span.
4. **Intermediate Frequency (IF) Filter**: A narrow bandpass filter (Resolution Bandwidth - RBW) that passes only mixer products matching $f_{IF} = |f_{LO} - f_{in}|$.
5. **Envelope Detector & Display**: Converts IF signal amplitude to a DC level, driving the vertical axis of the display while the ramp generator drives the horizontal axis.`,
      detailedLearning: `While an oscilloscope operates in the time domain ($V$ vs $t$), the spectrum analyzer reveals harmonics, spurious radiation, intermodulation distortion, and noise floor.`
    }
  },
  {
    id: 'fom-u2-q17',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Operating Principle of a Network Analyser',
    questionText: 'Explain the principle of a network analyser.',
    marks: 3,
    priority: 'moderate',
    type: 'theory',
    years: ['2023', '2019'],
    frequency: 'Repeated across exam papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Measures scattering parameters ($S$-parameters: $S_{11}, S_{21}, S_{12}, S_{22}$) of high-frequency networks.
- Measures both magnitude and phase of reflected and transmitted signals over a frequency sweep.`,
      examAnswer: `### Principle of a Network Analyser
A **Network Analyser** (Vector Network Analyser - VNA) characterizes the transmission and reflection electrical behavior of multi-port networks and components (filters, amplifiers, antennas) at high RF and microwave frequencies.

---

### Key Operational Features:
1. **Stimulus-Response System**: Employs an internal swept RF synthesized source to stimulate the Device Under Test (DUT).
2. **Dual Directional Couplers**: Separate the incident wave ($a_1$), reflected wave ($b_1$), and transmitted wave ($b_2$).
3. **Vector Measurement**: Compares both amplitude and phase of reflected/transmitted signals against the incident reference wave.
4. **S-Parameter Outputs**:
   - $S_{11}$: Input reflection coefficient (Return Loss, VSWR, input impedance).
   - $S_{21}$: Forward transmission coefficient (Gain, insertion loss, phase shift).
   - $S_{12}$: Reverse isolation.
   - $S_{22}$: Output reflection coefficient.`,
      detailedLearning: `VNAs display data on rectangular plots, polar plots, and Smith Charts for RF impedance matching.`
    }
  },

  // --- CRO-BASED MEASUREMENT QUESTIONS ---
  {
    id: 'fom-u2-q18',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Measurement of Amplitude and Frequency Using CRO',
    questionText: 'How do you measure amplitude and frequency using CRO?',
    marks: 7,
    priority: 'very_high',
    type: 'theory',
    years: ['2025', '2022', '2019'],
    frequency: 'Repeated 3 times in comprehensive measurement questions',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Amplitude & Frequency via CRO:
1. **Amplitude**:
   - Measure vertical peak-to-peak divisions ($N_{div}$).
   - $V_{p-p} = N_{div} \\times (\\text{VOLTS/DIV})$.
   - Peak voltage $V_m = V_{p-p} / 2$; RMS voltage $V_{rms} = V_m / \\sqrt{2}$.
2. **Frequency**:
   - Measure horizontal divisions for 1 complete cycle ($L_{div}$).
   - Time period $T = L_{div} \\times (\\text{TIME/DIV})$.
   - Frequency $f = 1 / T$.`,
      examAnswer: `### 1. Amplitude Measurement Using CRO

#### Procedure:
1. Connect the test signal to the vertical input (Channel 1) using a calibrated $1\\times$ or $10\\times$ coaxial probe.
2. Set the vertical coupling switch to AC (to block DC offset) or DC.
3. Adjust the VOLTS/DIV selector switch until the waveform occupies roughly $60\\%$ to $80\\%$ of the vertical graticule screen height for maximum resolution. Ensure the variable sensitivity fine-knob is locked in its **CAL** (calibrated) detent position.
4. Count the vertical peak-to-peak divisions ($N_v$) occupied by the waveform on the graticule.

#### Calculation Formulas:
- Peak-to-Peak Voltage:
  $$V_{p-p} = N_v \\times (\\text{VOLTS/DIV Setting}) \\times (\\text{Probe Attenuation Factor})$$
- Peak Voltage ($V_m$):
  $$V_m = \\frac{V_{p-p}}{2}$$
- RMS Voltage (for sinusoidal waveform):
  $$V_{rms} = \\frac{V_m}{\\sqrt{2}} = 0.707 \\cdot V_m = \\frac{V_{p-p}}{2\\sqrt{2}}$$

---

### 2. Frequency Measurement Using Time-Base Method

#### Procedure:
1. Adjust the TIME/DIV (time-base) calibrated control knob until one or two complete signal cycles are clearly displayed across the horizontal graticule.
2. Verify that the variable time-base vernier knob is locked in its **CAL** detent.
3. Align one zero-crossing point with a major vertical graticule line using the horizontal position knob.
4. Count the horizontal distance in divisions ($N_h$) occupied by exactly **one full cycle** (period $T$).

#### Calculation Formulas:
- Time Period ($T$):
  $$T = N_h \\times (\\text{TIME/DIV Setting})$$
- Frequency ($f$):
  $$f = \\frac{1}{T} = \\frac{1}{N_h \\times \\text{TIME/DIV Setting}}$$

#### Example:
If one cycle occupies $4.0\\text{ divisions}$ with TIME/DIV set to $0.5\\text{ ms/div}$:
$$T = 4.0 \\times 0.5\\text{ ms} = 2.0\\text{ ms} = 2.0 \\times 10^{-3}\\text{ s}$$
$$f = \\frac{1}{2.0 \\times 10^{-3}\\text{ s}} = 500\\text{ Hz}$$`,
      detailedLearning: `Always remember to account for probe attenuation! If a $10\\times$ probe is used without entering probe setting in the scope menu, all voltage readings must be multiplied by $10$.`
    }
  },
  {
    id: 'fom-u2-q19',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Amplitude Measurement Using CRO',
    questionText: 'Explain amplitude measurement using CRO.',
    marks: 3,
    priority: 'high',
    type: 'theory',
    years: ['2022', '2019'],
    frequency: 'Repeated across exam years',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Count vertical divisions between positive and negative peaks ($N_v$).
- $V_{p-p} = N_v \\times \\text{Volts/Div}$.
- $V_m = V_{p-p}/2$; $V_{rms} = V_m / \\sqrt{2}$.`,
      examAnswer: `### Amplitude Measurement on CRO
1. Feed signal to vertical input with vertical variable knob set to **CAL**.
2. Measure peak-to-peak vertical height in scale divisions ($N_v$).
3. Multiply division count by the VOLTS/DIV selector setting:
   $$V_{p-p} = N_v \\times (\\text{VOLTS/DIV}) \\times \\text{Probe Factor}$$
4. Peak amplitude: $V_{m} = V_{p-p} / 2$.
5. RMS value for sine wave: $V_{rms} = V_{p-p} / (2\\sqrt{2}) \\approx 0.3535 \\times V_{p-p}$.
6. Advantage: Unlike multimeters, CRO directly measures complex non-sinusoidal peak voltages regardless of waveform shape.`,
      detailedLearning: `Direct amplitude measurement on CRO is immune to waveform crest factor errors that plague ordinary rectifier-type analog multimeters.`
    }
  },
  {
    id: 'fom-u2-q20',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Frequency Measurement Using CRO',
    questionText: 'Explain frequency measurement using CRO.',
    marks: 3,
    priority: 'high',
    type: 'theory',
    years: ['2022', '2019'],
    frequency: 'Repeated across exam years',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Measure horizontal divisions ($N_h$) for one full cycle.
- $T = N_h \\times \\text{Time/Div}$.
- $f = 1 / T$.`,
      examAnswer: `### Frequency Measurement on CRO
1. Adjust the TIME/DIV knob (in calibrated detent) so that a complete cycle spans multiple graticule divisions.
2. Measure the horizontal length ($N_h$ in divisions) spanning one complete positive-to-negative cycle.
3. Compute the time period ($T$):
   $$T = N_h \\times (\\text{TIME/DIV})$$
4. Compute the frequency ($f$):
   $$f = \\frac{1}{T} \\quad (\\text{Hz})$$
5. High measurement accuracy requires spreading one cycle across as many divisions as possible (e.g., 8 to 10 divisions).`,
      detailedLearning: `Measurement error is minimized by measuring across 5 to 10 cycles and dividing the total time by the cycle count.`
    }
  },
  {
    id: 'fom-u2-q21',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Phase Difference Measurement Between Two Waveforms Using CRO',
    questionText: 'Explain phase difference measurement between two waveforms using CRO.',
    marks: 7,
    priority: 'very_high',
    type: 'theory',
    years: ['2025', '2019'],
    frequency: 'Repeated in 2025 and 2019 7M papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `Two Methods for Phase Measurement:
1. **Dual-Trace Time Base Method**:
   - Measure time shift $\\Delta t$ between zero-crossings and period $T$.
   - $\\phi = \\frac{\\Delta t}{T} \\times 360^{\\circ} = \\frac{d}{D} \\times 360^{\\circ}$.
2. **Lissajous Pattern (X-Y Mode)**:
   - Feed Wave 1 to X, Wave 2 to Y (ellipse centered at origin).
   - $\\sin \\phi = \\frac{Y_1}{Y_2}$ where $Y_1$ = Y-intercept, $Y_2$ = maximum Y-deflection.
   - $\\phi = \\sin^{-1}(Y_1 / Y_2)$.`,
      examAnswer: `### Phase Difference Measurement Using CRO

Phase difference $\\phi$ between two sinusoidal waveforms of identical frequency can be measured using two distinct methods:

---

### Method 1: Dual-Trace Method (Time Domain)
1. Apply the reference signal to Channel A and the phase-shifted signal to Channel B.
2. Set the oscilloscope to **DUAL** or **ALT** mode and select Channel A as the internal trigger source.
3. Align both waveforms symmetrically about the central horizontal axis.
4. Measure:
   - $D$ = Horizontal divisions corresponding to one complete cycle ($360^{\\circ}$).
   - $d$ = Horizontal divisions between the corresponding positive-going zero-crossing points of the two waveforms.
5. Compute phase angle:
   $$\\phi = \\left(\\frac{d}{D}\\right) \\times 360^{\\circ}$$

---

### Method 2: Lissajous Pattern Method (X-Y Mode)
1. Disconnect the internal time-base by switching the oscilloscope to **X-Y Mode**.
2. Connect Signal 1 ($v_x = V_{mx} \\sin \\omega t$) to the Horizontal (X) input.
3. Connect Signal 2 ($v_y = V_{my} \\sin(\\omega t + \\phi)$) to the Vertical (Y) input.
4. When both signals have the same frequency, the resulting pattern on screen is an **ellipse** centered at the origin.
5. Measure on the vertical axis:
   - $Y_1$ = Distance between the Y-intercepts where the ellipse crosses the Y-axis.
   - $Y_2$ = Maximum overall vertical height of the ellipse.
6. The phase difference is given by:
   $$\\sin \\phi = \\frac{Y_1}{Y_2} \\implies \\phi = \\sin^{-1}\\left(\\frac{Y_1}{Y_2}\\right)$$
   *(Alternatively, using X-axis intercepts: $\\sin \\phi = X_1 / X_2$)*.

#### Special Patterns:
- $\\phi = 0^{\\circ}$: Straight line with positive slope ($m = +1$).
- $\\phi = 90^{\\circ}$ or $270^{\\circ}$: Symmetrical circle (if $V_{mx} = V_{my}$) or vertical/horizontal ellipse.
- $\\phi = 180^{\\circ}$: Straight line with negative slope ($m = -1$).`,
      detailedLearning: `Quadrant determination: If the major axis of the ellipse lies in the 1st and 3rd quadrants, $\\phi$ is between $0^{\\circ}$ and $90^{\\circ}$ (or $270^{\\circ}-360^{\\circ}$). If it lies in the 2nd and 4th quadrants, $\\phi$ is between $90^{\\circ}$ and $180^{\\circ}$ (or $180^{\\circ}-270^{\\circ}$).`
    }
  },
  {
    id: 'fom-u2-q22',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Frequency Measurement Using Lissajous Patterns',
    questionText: 'Explain frequency measurement using Lissajous patterns with suitable diagrams.',
    marks: 7,
    priority: 'high',
    type: 'diagram',
    years: ['2023'],
    frequency: 'Repeated in 2023 7M paper',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Tangency Method for Frequency Ratio:
$$\\frac{f_y}{f_x} = \\frac{\\text{Number of Horizontal Tangencies}}{\\text{Number of Vertical Tangencies}} = \\frac{N_H}{N_V}$$
- $f_y$: Frequency applied to vertical (Y) plates.
- $f_x$: Known frequency applied to horizontal (X) plates.
- Count points where the pattern touches imaginary horizontal and vertical tangent lines.`,
      examAnswer: `### Frequency Measurement Using Lissajous Patterns

When two sinusoidal signals of different frequencies are applied simultaneously to the horizontal and vertical deflection plates of an oscilloscope in X-Y mode, the resulting closed stationary geometric loops are called **Lissajous Patterns**.

---

### 1. Condition for Stationary Closed Patterns
Lissajous figures remain stationary on the screen only when the ratio of the two frequencies is a rational fraction:
$$\\frac{f_y}{f_x} = \\frac{m}{n} \\quad (m, n \\text{ are integers})$$

---

### 2. Tangency Method (Rule of Tangencies)
To determine an unknown frequency $f_y$ using a known reference frequency $f_x$:
1. Apply the known standard frequency source ($f_x$) to the X-input.
2. Apply the unknown frequency source ($f_y$) to the Y-input.
3. Draw an imaginary horizontal line tangent to the topmost peaks of the loop.
4. Draw an imaginary vertical line tangent to the side extremities of the loop.
5. Count the number of tangency (contact) points:
   - $N_H$ = Number of horizontal tangencies (tangent line at top).
   - $N_V$ = Number of vertical tangencies (tangent line at side).

#### Mathematical Ratio Formula:
$$\\frac{f_y}{f_x} = \\frac{\\text{Number of intersections with horizontal line } (N_H)}{\\text{Number of intersections with vertical line } (N_V)}$$
$$f_y = f_x \\times \\left(\\frac{N_H}{N_V}\\right)$$

---

### 3. Standard Patterns for Common Frequency Ratios:
- **Ratio 1:1** ($f_y = f_x$): Circle or ellipse (1 loop).
- **Ratio 2:1** ($f_y = 2 f_x$): Figure of eight ($\infty$ shape lying on side or standing; $N_H = 2, N_V = 1$).
- **Ratio 3:1** ($f_y = 3 f_x$): Pattern with 3 vertical loops ($N_H = 3, N_V = 1$).
- **Ratio 1:2** ($f_y = 0.5 f_x$): Figure with $N_H = 1, N_V = 2$.
- **Ratio 3:2** ($f_y = 1.5 f_x$): Pattern with 3 peaks at top and 2 loops at side ($N_H = 3, N_V = 2$).`,
      detailedLearning: `If the pattern is open at the ends (instead of closed), an open end counts as $1/2$ of a tangency point.`
    }
  },

  // --- NUMERICAL QUESTIONS ---
  {
    id: 'fom-u2-q23',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Calculation of Electron Beam Velocity Given Accelerating Voltage',
    questionText: 'In a cathode ray tube, the accelerating anode voltage is 2000 V. Calculate: (a) The velocity of the electron beam as it enters the deflecting plates, and (b) The time taken by an electron to travel through deflecting plates of length 2.5 cm.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2022'],
    frequency: 'Appeared in 2022 7M numerical section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- $v = \\sqrt{\\frac{2 e V_a}{m}} = \\sqrt{2 \\times 1.759 \\times 10^{11} \\times 2000} \\approx 2.65 \\times 10^7\\text{ m/s}$.
- $t = l / v = 0.025 / (2.65 \\times 10^7) = 0.943\\text{ ns}$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Accelerating anode voltage ($V_a$) = $2000\\text{ V}$
- Length of deflecting plates ($l$) = $2.5\\text{ cm} = 0.025\\text{ m}$
- Electron charge ($e$) = $1.602 \\times 10^{-19}\\text{ C}$
- Electron rest mass ($m$) = $9.109 \\times 10^{-31}\\text{ kg}$
- Charge-to-mass ratio ($e/m$) = $1.7588 \\times 10^{11}\\text{ C/kg}$

---

#### 2. Part (a): Velocity of Electron Beam ($v_{ox}$)
Equating kinetic energy to electrostatic potential energy:
$$e \\cdot V_a = \\frac{1}{2} m v_{ox}^2$$
$$v_{ox} = \\sqrt{\\frac{2 e V_a}{m}} = \\sqrt{2 \\times \\left(\\frac{e}{m}\\right) \\times V_a}$$

Substitute the values:
$$v_{ox} = \\sqrt{2 \\times (1.7588 \\times 10^{11}\\text{ C/kg}) \\times 2000\\text{ V}}$$
$$v_{ox} = \\sqrt{7.0352 \\times 10^{14}} = \\mathbf{2.6524 \\times 10^7\\text{ m/s}}$$
*(Roughly $8.8\\%$ of the speed of light, so non-relativistic mechanics is fully valid)*.

---

#### 3. Part (b): Transit Time Through Deflecting Plates ($t$)
Since there is no axial acceleration along the X-direction:
$$t = \\frac{l}{v_{ox}} = \\frac{0.025\\text{ m}}{2.6524 \\times 10^7\\text{ m/s}}$$
$$t = 9.425 \\times 10^{-10}\\text{ s} = \\mathbf{0.9425\\text{ ns}}$$

---

#### 4. Final Answer:
- **Velocity of electron beam**: $\\mathbf{2.652 \\times 10^7\\text{ m/s}}$
- **Transit time through plates**: $\\mathbf{0.943\\text{ ns}}$`,
      detailedLearning: `At very high frequencies ($> 100\\text{ MHz}$), if signal period approaches plate transit time $t$, transit-time distortion occurs because the deflecting voltage changes while the electron is still between the plates.`
    }
  },
  {
    id: 'fom-u2-q24',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Cutoff Frequency Calculation from Time Constant',
    questionText: 'An oscilloscope vertical amplifier has an input circuit consisting of a parallel combination of 1 MΩ resistance and 25 pF capacitance. (a) Determine the cutoff frequency (-3 dB frequency) of this input circuit. (b) If a signal with a rise time of 10 ns is to be measured, determine the bandwidth required for the oscilloscope.',
    marks: 7,
    priority: 'moderate',
    type: 'numerical',
    years: ['2023'],
    frequency: 'Appeared in 2023 numerical section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Time constant $\\tau = R C = 10^6 \\times 25 \\times 10^{-12} = 25\\mu\\text{s}$.
- Cutoff frequency: $f_c = \\frac{1}{2\\pi R C} = 6.366\\text{ kHz}$.
- Bandwidth from rise time: $BW = \\frac{0.35}{t_r} = \\frac{0.35}{10 \\times 10^{-9}} = 35\\text{ MHz}$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Input resistance ($R_{in}$) = $1\\text{ M}\\Omega = 10^6\\ \\Omega$
- Input capacitance ($C_{in}$) = $25\\text{ pF} = 25 \\times 10^{-12}\\text{ F}$
- Signal rise time ($t_r$) = $10\\text{ ns} = 10 \\times 10^{-9}\\text{ s}$

---

#### 2. Part (a): Cutoff Frequency of Input Circuit ($f_c$)
The time constant of the parallel RC network is:
$$\\tau = R_{in} \\times C_{in} = (10^6\\ \\Omega) \\times (25 \\times 10^{-12}\\text{ F}) = 25 \\times 10^{-6}\\text{ s} = 25\\ \\mu\\text{s}$$

The upper $-3\\text{ dB}$ cutoff frequency is given by:
$$f_c = \\frac{1}{2 \\pi \\tau} = \\frac{1}{2 \\pi R_{in} C_{in}}$$
$$f_c = \\frac{1}{2 \\times 3.1416 \\times 25 \\times 10^{-6}\\text{ s}} = \\frac{1}{1.5708 \\times 10^{-4}} = \\mathbf{6366.2\\text{ Hz} = 6.366\\text{ kHz}}$$

---

#### 3. Part (b): Bandwidth Required for 10 ns Rise Time
For an oscilloscope vertical amplifier modeled as a first-order low-pass system, the universal relationship between rise time ($10\\%$ to $90\\%$) and bandwidth is:
$$t_r \\times BW = 0.35$$
$$BW = \\frac{0.35}{t_r}$$

Substitute $t_r = 10\\text{ ns}$:
$$BW = \\frac{0.35}{10 \\times 10^{-9}\\text{ s}} = 3.5 \\times 10^7\\text{ Hz} = \\mathbf{35\\text{ MHz}}$$

---

#### 4. Final Answer:
- **Cutoff frequency of input circuit**: $\\mathbf{6.366\\text{ kHz}}$
- **Bandwidth required**: $\\mathbf{35\\text{ MHz}}$`,
      detailedLearning: `To faithfully measure a pulse with less than $3\\%$ rise time error, the oscilloscope rise time should be at least $3\\times$ to $5\\times$ faster than the signal rise time ($BW \\ge 100 - 150\\text{ MHz}$).`
    }
  },
  {
    id: 'fom-u2-q25',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Peak and RMS Voltage Calculation from Vertical Sensitivity',
    questionText: 'A sinusoidal voltage trace displayed on a CRO screen occupies a total vertical height of 4.8 divisions. The vertical sensitivity control is set at 50 mV/div. A 10:1 attenuator probe is used. Calculate: (a) Peak-to-peak voltage, (b) Peak voltage, (c) RMS voltage, and (d) If the TIME/DIV is 0.2 ms/div and 1 cycle spans 5 divisions, find the frequency.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2025', '2022'],
    frequency: 'Repeated practical calculation across exam papers',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- $V_{p-p} = 4.8 \\times 50\\text{ mV} \\times 10 = 2400\\text{ mV} = 2.4\\text{ V}$.
- $V_m = 2.4 / 2 = 1.2\\text{ V}$.
- $V_{rms} = 1.2 / \\sqrt{2} = 0.8485\\text{ V}$.
- $T = 5 \\times 0.2\\text{ ms} = 1.0\\text{ ms} \\implies f = 1 / 1\\text{ ms} = 1000\\text{ Hz} = 1\\text{ kHz}$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Vertical deflection ($N_v$) = $4.8\\text{ divisions}$
- Vertical sensitivity setting = $50\\text{ mV/division} = 0.05\\text{ V/div}$
- Probe attenuation factor ($K_{probe}$) = $10$
- Horizontal cycle length ($N_h$) = $5.0\\text{ divisions}$
- Horizontal time-base setting = $0.2\\text{ ms/division} = 0.2 \\times 10^{-3}\\text{ s/div}$

---

#### 2. Calculations:

**(a) Peak-to-Peak Voltage ($V_{p-p}$):**
$$V_{p-p} = N_v \\times \\text{Sensitivity} \\times K_{probe}$$
$$V_{p-p} = 4.8\\text{ div} \\times (50\\text{ mV/div}) \\times 10 = 2400\\text{ mV} = \\mathbf{2.40\\text{ V}}$$

**(b) Peak Voltage ($V_m$):**
$$V_m = \\frac{V_{p-p}}{2} = \\frac{2.40\\text{ V}}{2} = \\mathbf{1.20\\text{ V}}$$

**(c) RMS Voltage ($V_{rms}$):**
For a sine wave:
$$V_{rms} = \\frac{V_m}{\\sqrt{2}} = \\frac{1.20\\text{ V}}{1.4142} = \\mathbf{0.8485\\text{ V} \\approx 848.5\\text{ mV}}$$

**(d) Signal Period ($T$) and Frequency ($f$):**
$$T = N_h \\times \\text{TIME/DIV} = 5.0\\text{ div} \\times 0.2 \\times 10^{-3}\\text{ s/div} = 1.0 \\times 10^{-3}\\text{ s} = 1.0\\text{ ms}$$
$$f = \\frac{1}{T} = \\frac{1}{1.0 \\times 10^{-3}\\text{ s}} = \\mathbf{1000\\text{ Hz} = 1.0\\text{ kHz}}$$

---

#### 3. Summary of Results:
- Peak-to-peak voltage: $\\mathbf{2.40\\text{ V}}$
- Peak voltage: $\\mathbf{1.20\\text{ V}}$
- RMS voltage: $\\mathbf{0.849\\text{ V}}$
- Frequency: $\\mathbf{1.0\\text{ kHz}}$`,
      detailedLearning: `Always note the probe attenuation factor ($10\\times$). Forgetting this leads to a $10$-fold calculation error in university exams!`
    }
  },
  {
    id: 'fom-u2-q26',
    unitId: 2,
    unitName: 'Unit 2 – CRO, CRT and Oscilloscopes',
    title: 'Loading Effect Calculation on Voltage Measurement with Probe',
    questionText: 'A circuit has an open-circuit output voltage of 10 V at 100 kHz with an output resistance of 100 kΩ. An oscilloscope with an input impedance of 1 MΩ in parallel with 30 pF is connected across the circuit terminals. Calculate: (a) The actual voltage indicated by the oscilloscope, and (b) The percentage loading error.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2023'],
    frequency: 'Appeared in 2023 7M loading effect numerical',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: true,
    answer: {
      quickRevision: `- Source: $V_{th} = 10\\text{ V}$, $R_{th} = 100\\text{ k}\\Omega$.
- Meter: $R_{in} = 1\\text{ M}\\Omega$, $X_c = \\frac{1}{2\\pi f C} = 53.05\\text{ k}\\Omega$.
- Meter total impedance $Z_m = R_{in} \\parallel (-j X_c) \\approx 52.9\\text{ k}\\Omega$.
- Loaded voltage $V_L = V_{th} \\left|\\frac{Z_m}{R_{th} + Z_m}\\right| \\approx 4.41\\text{ V}$.
- Loading Error: $\\frac{10 - 4.41}{10} \\times 100 = 55.9\\%$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Thevenin equivalent voltage ($V_{th}$) = $10\\text{ V}$
- Source output resistance ($R_s$) = $100\\text{ k}\\Omega = 10^5\\ \\Omega$
- Signal frequency ($f$) = $100\\text{ kHz} = 10^5\\text{ Hz}$
- Oscilloscope input resistance ($R_{in}$) = $1\\text{ M}\\Omega = 10^6\\ \\Omega$
- Oscilloscope input capacitance ($C_{in}$) = $30\\text{ pF} = 30 \\times 10^{-12}\\text{ F}$

---

#### 2. Step 1: Compute Capacitive Reactance of Scope ($X_c$)
$$X_c = \\frac{1}{2 \\pi f C_{in}} = \\frac{1}{2 \\pi \\times 10^5\\text{ Hz} \\times 30 \\times 10^{-12}\\text{ F}}$$
$$X_c = \\frac{1}{1.88496 \\times 10^{-5}} = 53051.6\\ \\Omega = 53.05\\text{ k}\\Omega$$

---

#### 3. Step 2: Compute Total Oscilloscope Input Admittance ($Y_m$) and Impedance ($Z_m$)
$$Y_m = \\frac{1}{R_{in}} + j \\omega C_{in} = \\frac{1}{10^6} + j \\frac{1}{53052} = 10^{-6} + j 1.885 \\times 10^{-5}\\ \\text{S}$$
$$Z_m = \\frac{1}{Y_m} = \\frac{R_{in} (-j X_c)}{R_{in} - j X_c} = \\frac{1000\\text{ k}\\Omega \\times (-j 53.05\\text{ k}\\Omega)}{1000 - j 53.05}$$
$$|Z_m| \\approx \\frac{1000 \\times 53.05}{\\sqrt{1000^2 + 53.05^2}} = \\frac{53050}{1001.4} = \\mathbf{52.98\\text{ k}\\Omega}$$

---

#### 4. Step 3: Compute Indicated Loaded Voltage ($V_L$)
Using the voltage divider rule:
$$V_L = V_{th} \\left|\\frac{Z_m}{R_s + Z_m}\\right|$$
Since $Z_m \\approx -j 53\\text{ k}\\Omega$ (capacitive dominance):
$$R_s + Z_m = 100\\text{ k}\\Omega - j 53\\text{ k}\\Omega$$
$$|R_s + Z_m| = \\sqrt{100^2 + 53^2} = \\sqrt{10000 + 2809} = \\sqrt{12809} = 113.18\\text{ k}\\Omega$$

$$V_L = 10\\text{ V} \\times \\left(\\frac{52.98\\text{ k}\\Omega}{113.18\\text{ k}\\Omega}\\right) = \\mathbf{4.68\\text{ V}}$$

---

#### 5. Step 4: Percentage Loading Error
$$\\% \\text{ Loading Error} = \\frac{V_{unloaded} - V_{loaded}}{V_{unloaded}} \\times 100$$
$$\\% \\text{ Error} = \\frac{10\\text{ V} - 4.68\\text{ V}}{10\\text{ V}} \\times 100 = \\mathbf{53.2\\%}$$

---

#### 6. Engineering Significance:
At high frequencies, probe capacitance completely shunts the $1\\text{ M}\\Omega$ input resistance, dropping the effective scope impedance from $1\\text{ M}\\Omega$ down to barely $53\\text{ k}\\Omega$! This produces a staggering $53\\%$ measurement error.
**Remedy**: Use a $10\\times$ compensated passive probe, which lowers input capacitance from $30\\text{ pF}$ to $\\sim 3\\text{ pF}$, increasing impedance ten-fold.`,
      detailedLearning: `This classic problem illustrates why bare coaxial cables or $1\\times$ probes cannot be used for high-frequency measurements above $50\\text{ kHz}$.`
    }
  }
];
