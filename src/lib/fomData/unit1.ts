import { FOMQuestion } from '@/types/fom';

export const UNIT_1_QUESTIONS: FOMQuestion[] = [
  // --- 7-MARK QUESTIONS ---
  {
    id: 'fom-u1-q1',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Static and Dynamic Characteristics of Measuring Instruments',
    questionText: 'Explain static and dynamic characteristics of measuring instruments in detail with suitable diagrams.',
    marks: 7,
    priority: 'very_high',
    type: 'theory',
    years: ['2025', '2024', '2023', '2022', '2019'],
    frequency: 'Repeated 5 times (Top Priority across all PYQs)',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Quick Revision: Static & Dynamic Characteristics
- **Static Characteristics** (Measured when input is constant or varies very slowly):
  1. **Accuracy**: Closeness of reading to true value ($A = 1 - |(Y_n - X_n)/X_n|$).
  2. **Precision**: Measure of consistency/repeatability among independent readings.
  3. **Sensitivity**: Ratio of infinitesimal change in output to change in input ($S = \Delta q_o / \Delta q_i$).
  4. **Linearity**: Maximum deviation of actual calibration curve from ideal straight line.
  5. **Hysteresis**: Different output values for the same input depending on whether input was increasing or decreasing.
  6. **Threshold & Resolution**: Minimum input to cause any detectable output (threshold); minimum change in input that produces observable change (resolution).
  7. **Drift**: Unwanted change in output over time (zero, span, or zonal drift).
- **Dynamic Characteristics** (Measured when input changes rapidly with time):
  1. **Speed of Response**: Rapidity with which instrument responds to changes in measured quantity.
  2. **Measuring Lag**: Delay in instrument response to input variation (retardation lag vs time delay).
  3. **Fidelity**: Degree to which instrument indicates output wave shape without dynamic distortion.
  4. **Dynamic Error**: Difference between true value at that instant and indicated value ($e_d(t) = q_o(t) - q_i(t)$).`,
      examAnswer: `### 1. Introduction
The performance criteria of any measuring instrument or measurement system are classified into two major categories:
- **Static Characteristics**: Pertain to measurements of quantities that are constant or vary extremely slowly with time.
- **Dynamic Characteristics**: Pertain to measurements of time-varying quantities (transients, periodic signals, random fluctuations).

---

### 2. Static Characteristics in Detail

#### (a) Accuracy and Precision
- **Accuracy**: The degree of closeness with which the instrument reading approaches the true value of the quantity being measured. Expressed as percentage of true value or percentage of full-scale deflection (FSD).
- **Precision**: A measure of repeatability or reproducibility among successive readings taken under identical conditions. It indicates closeness of agreement among independent test results. *Precision does not guarantee accuracy.*

#### (b) Sensitivity ($S$)
Defined as the ratio of infinitesimal change in output signal (response) to the corresponding infinitesimal change in input quantity:
$$S = \frac{dq_o}{dq_i} = \frac{\text{Change in Output}}{\text{Change in Input}}$$
For a linear instrument, sensitivity is constant (slope of calibration curve). High sensitivity is desirable for detecting minute variations.

#### (c) Linearity
The ability of an instrument to maintain a constant sensitivity over its entire operational range. Linearity is quantified as maximum deviation $\Delta q_o$ from the best-fit ideal straight line:
$$\% \text{ Non-linearity} = \frac{\text{Maximum Deviation from Ideal Line}}{\text{Full Scale Deflection}} \times 100$$

#### (d) Reproducibility and Repeatability
- **Repeatability**: Closeness of agreement between successive readings under identical conditions (same operator, instrument, location, short time interval).
- **Reproducibility**: Closeness of agreement under altered conditions (different operators, laboratories, calibration standards, prolonged time).

#### (e) Threshold and Resolution
- **Threshold**: The minimum value of input below which no output deflection can be detected from zero.
- **Resolution (Discrimination)**: The smallest increment in input that produces a perceptible change in output reading.

#### (f) Dead Zone and Dead Time
- **Dead Zone**: The total range of input values over which no deflection is produced.
- **Dead Time**: The time delay between application of input step and the commencement of instrument response.

#### (g) Hysteresis
The phenomenon whereby the instrument output differs for the same input value depending on whether the input was approached from a lower value (increasing) or higher value (decreasing). Caused by magnetic saturation, mechanical friction, or internal molecular friction.

---

### 3. Dynamic Characteristics in Detail

When input variables change rapidly, the dynamic response is governed by differential equations (0th, 1st, or 2nd order systems).

#### (a) Speed of Response
The rapidity with which an instrument responds to changes in the measured quantity. A high speed of response is critical for measuring high-frequency transients.

#### (b) Measuring Lag
The retardation or delay in instrument output response to changes in input:
- **Retardation Lag**: Response begins immediately upon input change, but lags due to energy storage elements (e.g., thermal capacity of thermometer).
- **Time Delay (Dead Time)**: Output does not change at all until a finite time interval has elapsed.

#### (c) Fidelity
The ability of the measurement system to reproduce the exact waveform shape of the input signal without introducing amplitude distortion or phase distortion across its frequency spectrum.

#### (d) Dynamic Error ($E_d$)
The difference between the true value of the quantity changing with time and the value indicated by the instrument at that exact instant, assuming zero static error:
$$E_d(t) = q_o(t) - q_i(t)$$

---

### 4. Summary Table

| Characteristic | Category | Importance in EI Engineering |
|---|---|---|
| Accuracy | Static | Quantifies measurement correctness |
| Linearity | Static | Simplifies calibration & signal conditioning |
| Resolution | Static | Dictates smallest detectable change |
| Fidelity | Dynamic | Essential for oscilloscope/sensor fidelity |
| Measuring Lag | Dynamic | Governs response bandwidth in control loops |`,
      detailedLearning: `### Detailed Conceptual Deep Dive: Static vs Dynamic

#### Why the Distinction Exists
Measuring systems contain mass, damping, capacitance, and thermal capacity. When an input is applied:
1. **Steady-state**: All derivatives $dq/dt = 0$. The relationship between input and output is purely algebraic ($q_o = f(q_i)$). This is governed by static characteristics.
2. **Transient/Dynamic**: Derivatives $dq/dt \neq 0$. Energy is stored in inertial (mass/inductance) and potential (spring/capacitance) elements. This requires solving differential equations:
$$a_n \frac{d^n q_o}{dt^n} + \dots + a_1 \frac{dq_o}{dt} + a_0 q_o = b_m \frac{d^m q_i}{dt^m} + \dots + b_0 q_i$$

#### System Order Classification:
- **Zero-Order System**: Output is instantaneously proportional to input ($q_o = K q_i$). Example: Potentiometer.
- **First-Order System**: Contains one storage element ($a_1 dq_o/dt + a_0 q_o = b_0 q_i$). Example: Thermocouple in fluid, RC circuit. Time constant $\tau = a_1/a_0$.
- **Second-Order System**: Contains two storage elements ($a_2 d^2q_o/dt^2 + a_1 dq_o/dt + a_0 q_o = b_0 q_i$). Example: PMMC meter, accelerometer, U-tube manometer. Shows natural frequency $\omega_n$ and damping ratio $\zeta$.`
    }
  },
  {
    id: 'fom-u1-q2',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Static Characteristics of Measuring Instruments (Five Detailed with Plots)',
    questionText: 'Discuss static characteristics of measuring instruments. Explain any five characteristics with mathematical expressions and plots wherever applicable.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2024', '2019'],
    frequency: 'Repeated 2 times in 7-mark section',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### 5 Core Static Characteristics to Remember:
1. **Accuracy**: $A = 1 - |(Y_n - X_n)/X_n|$; relative accuracy $\% = A \times 100$.
2. **Sensitivity**: $S = \frac{\Delta q_o}{\Delta q_i}$ (slope of calibration curve).
3. **Linearity**: Deviation from straight line $\% = \frac{\Delta q_{max}}{FSD} \times 100$.
4. **Resolution**: Smallest detectable change in input.
5. **Hysteresis**: Loop between increasing and decreasing input curves ($\% Hysteresis = \frac{E_{max}}{FSD} \times 100$).`,
      examAnswer: `### Detailed Discussion of Five Static Characteristics

#### 1. Sensitivity
- **Definition**: The ratio of change in output of an instrument to the corresponding change in the input parameter being measured.
- **Mathematical Expression**:
  $$S = \lim_{\Delta q_i \to 0} \frac{\Delta q_o}{\Delta q_i} = \frac{dq_o}{dq_i}$$
  If the calibration curve is linear:
  $$S = \frac{q_o}{q_i} = \text{constant}$$
- **Inverse Sensitivity (Deflection Factor)**:
  $$K = \frac{1}{S} = \frac{dq_i}{dq_o}$$
- **Significance**: Higher sensitivity means larger output deflection for small input variations, which is desirable in sensor design.

#### 2. Linearity
- **Definition**: The measure of the extent to which the response curve departs from an ideal straight line calibration curve.
- **Mathematical Expression**:
  $$\% \text{ Non-linearity} = \frac{\text{Maximum Deviation } (\Delta q_o)_{max}}{\text{Full Scale Deflection (FSD)}} \times 100$$
- **Types of Reference Lines**: Independent linearity, zero-base linearity, and terminal-based linearity. Linear instruments eliminate the need for non-linear scale printing or complex look-up calibration tables.

#### 3. Accuracy and Relative Error
- **Definition**: Closeness of indicated value ($Y_n$) to the actual reference true value ($X_n$).
- **Mathematical Formulations**:
  - Absolute Error: $\epsilon_0 = Y_n - X_n$
  - Relative Error: $\epsilon_r = \frac{Y_n - X_n}{X_n}$
  - Percentage Accuracy:
    $$\% A = (1 - |\epsilon_r|) \times 100 = \left(1 - \left|\frac{Y_n - X_n}{X_n}\right|\right) \times 100$$

#### 4. Hysteresis
- **Definition**: The maximum difference in output readings for the same input value when approached from minimum to maximum (upscale) versus from maximum to minimum (downscale).
- **Mathematical Form**:
  $$\% \text{ Hysteresis} = \frac{\text{Maximum Output Difference at Any Input}}{\text{Full Scale Deflection}} \times 100$$
- **Causes**: Internal molecular friction in spring materials, magnetic core retentivity in PMMC/transformer cores, and mechanical backlash in gear trains.

#### 5. Resolution and Threshold
- **Resolution**: When an instrument is displaying a non-zero reading, the smallest incremental change in input that produces an observable change in output is called resolution.
  $$\text{Resolution} = \Delta q_{i, min}$$
- **Threshold**: The smallest input required to initiate any deflection from the zero state. It represents the starting deadband due to static friction (stiction).`,
      detailedLearning: `### Graphical Representation & Physical Mechanisms
- **Linearity vs Non-linearity**: In thermocouple or thermistor applications, the resistance-temperature characteristic is non-linear ($R(T) = R_0 e^{\beta(1/T - 1/T_0)}$). Signal conditioning circuits like linearization bridges or software LUTs are applied.
- **Hysteresis Loop**: Similar to $B-H$ hysteresis loops in ferromagnetic materials, the mechanical stress-strain curve of Bourdon tubes or diaphragms exhibits an enclosed area proportional to internal mechanical energy loss per cycle.`
    }
  },
  {
    id: 'fom-u1-q3',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Classification and Analysis of Measurement Errors',
    questionText: 'Explain different types of errors in measurement systems.',
    marks: 7,
    priority: 'very_high',
    type: 'theory',
    years: ['2024', '2023', '2019'],
    frequency: 'Repeated 3 times in 7-mark category',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Error Classification Tree:
1. **Gross Errors**: Caused by human mistakes (misreading, wrong wiring, calculation errors). Reduced by taking multiple readings independently.
2. **Systematic Errors**: Reproducible inaccuracies with identifiable sources:
   - *Instrumental*: Calibration drift, friction, spring aging.
   - *Environmental*: Temperature, humidity, pressure, stray magnetic/electric fields.
   - *Observational*: Parallax error, wrong scale interpolation.
3. **Random (Residual) Errors**: Unpredictable small fluctuations remaining after systematic errors are eliminated. Analyzed statistically using Gaussian (normal) distribution.`,
      examAnswer: `### Classification of Errors in Measurement Systems

Measurement errors are broadly categorized into three principal classes:
1. **Gross Errors**
2. **Systematic Errors**
3. **Random Errors**

---

### 1. Gross Errors
- **Origin**: Primarily human mistakes in selecting, setting up, operating, or reading instruments, and recording experimental data.
- **Examples**:
  - Reading a voltmeter as 31.5 V instead of 21.5 V due to carelessness.
  - Using an improper scale multiplier (e.g., $10\times$ instead of $1\times$).
  - Failing to set the mechanical zero of an analog pointer before testing.
- **Minimization**:
  - Taking at least three independent readings by different observers.
  - Proper experimental care and automated data logging.

---

### 2. Systematic Errors
These errors tend to be constant or follow a definite mathematical law upon repeated measurements under identical conditions. They are classified into:

#### (a) Instrumental Errors
Inherent flaws in the measuring instrument:
- **Inherent Shortcomings**: Frictional resistance at bearing jewels, weakening of control springs over time, non-linear magnetic flux distribution in air gaps.
- **Improper Use / Loading Effect**: Connecting a low-resistance voltmeter across a high-resistance circuit, causing circuit loading and erroneous readings.
- **Calibration Drift**: Drift of component values due to component aging.

#### (b) Environmental Errors
Caused by external conditions affecting instrument characteristics:
- Temperature changes altering coil resistance (PMMC copper temp coefficient $\approx 0.004/^{\circ}\text{C}$) or elasticity of control springs.
- Stray electromagnetic fields (EMI) inducing parasitic voltages in bridge wiring.
- Humidity altering dielectric properties of capacitive sensors.
- **Minimization**: Magnetic shielding, temperature compensation resistors (swamping resistors of Manganin), environmental control chambers.

#### (c) Observational Errors
- **Parallax Error**: Arises when the observer's line of sight is not strictly perpendicular to the pointer scale. Minimized by mirrored scales and knife-edge pointers.
- Incorrect interpolation between scale markings.

---

### 3. Random (Residual) Errors
- **Definition**: Errors that persist even after gross errors are eliminated and systematic errors are corrected for.
- **Nature**: Caused by numerous small, uncontrollable, independent disturbances (thermal agitation, microscopic vibrations, supply voltage jitter).
- **Statistical Treatment**: Analyzed using Gaussian (Normal) Distribution:
  - Arithmetic Mean: $\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$
  - Deviation: $d_i = x_i - \bar{x}$
  - Standard Deviation (for sample):
    $$\sigma = \sqrt{\frac{\sum_{i=1}^n (x_i - \bar{x})^2}{n - 1}}$$
  - Probable Error ($r$):
    $$r = 0.6745 \, \sigma$$`,
      detailedLearning: `### Error Propagation Mathematics (Combination of Errors)
If $Z = f(X_1, X_2, \dots, X_n)$ where $X_i$ have limiting errors $\pm \delta X_i$:
- **Sum**: $Z = X_1 + X_2 \implies \delta Z = \pm (\delta X_1 + \delta X_2)$
- **Difference**: $Z = X_1 - X_2 \implies \delta Z = \pm (\delta X_1 + \delta X_2)$ (Absolute errors always add in worst case!)
- **Product**: $Z = X_1 X_2 \implies \frac{\delta Z}{Z} = \pm \left(\frac{\delta X_1}{X_1} + \frac{\delta X_2}{X_2}\right)$
- **Quotient**: $Z = \frac{X_1}{X_2} \implies \frac{\delta Z}{Z} = \pm \left(\frac{\delta X_1}{X_1} + \frac{\delta X_2}{X_2}\right)$
- **Power**: $Z = X^n \implies \frac{\delta Z}{Z} = \pm n \left(\frac{\delta X}{X}\right)$`
    }
  },
  {
    id: 'fom-u1-q4',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Dynamic Characteristics of Measuring Instruments',
    questionText: 'Discuss dynamic characteristics of measuring instruments in detail.',
    marks: 7,
    priority: 'high',
    type: 'theory',
    years: ['2022'],
    frequency: 'Repeated in 2022 7-mark section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Dynamic Characteristics Key Points:
1. **Speed of Response**: Rapidity of response to input variation.
2. **Measuring Lag**: Time delay in responding. Types: Retardation lag vs Time delay (Dead time).
3. **Fidelity**: Ability to reproduce input wave shape without amplitude/phase distortion.
4. **Dynamic Error**: $E_d(t) = q_o(t) - q_i(t)$.
5. **System Mathematical Models**:
   - Zero-order: Instantaneous response ($q_o = K q_i$).
   - First-order: Response governed by time constant $\tau$. $q_o(t) = K(1 - e^{-t/\tau})$.
   - Second-order: Response depends on damping ratio $\zeta$ and natural frequency $\omega_n$.`,
      examAnswer: `### Dynamic Characteristics of Measuring Instruments

When the measured physical quantity is not steady but changes dynamically with time (such as pressure pulses, AC voltages, audio waveforms), the dynamic characteristics dictate the performance.

---

### 1. Key Dynamic Parameters

#### (a) Speed of Response
The rapidity with which an instrument responds to changes in the measured quantity. High speed of response indicates low dynamic lag and wide bandwidth.

#### (b) Measuring Lag
The delay in the response of an instrument to a change in the input signal:
1. **Retardation Lag**: Response begins immediately upon application of the input, but the output lags behind the input due to inertial or energy-storage effects (e.g., thermal capacity in thermometers).
2. **Time Delay (Dead Time)**: A finite duration of time during which the instrument exhibits zero response after the input has changed.

#### (c) Fidelity
The degree of closeness with which an instrument system indicates the exact waveform shape of the measured signal without introducing:
- Frequency/Amplitude distortion (gain varying with frequency).
- Phase distortion (non-linear phase shift across harmonics).

#### (d) Dynamic Error ($E_d$)
Defined as the algebraic difference between the true value of the quantity changing with time and the value indicated by the instrument at that same instant, assuming zero static calibration error:
$$E_d(t) = q_o(t) - q_i(t)$$

---

### 2. Mathematical Modeling by System Order

#### (a) Zero-Order Systems
- **Equation**: $q_o(t) = K \cdot q_i(t)$ where $K$ is static sensitivity.
- **Behavior**: Responds instantaneously with no lag, zero dynamic error, infinite bandwidth.
- **Example**: Linear potentiometer voltage divider.

#### (b) First-Order Systems
- **Equation**: $\tau \frac{dq_o}{dt} + q_o = K q_i(t)$ where $\tau$ is time constant.
- **Step Response**: For unit step $q_i(t) = u(t)$:
  $$q_o(t) = K (1 - e^{-t/\tau})$$
  - At $t = \tau$, $q_o = 63.2\%$ of final value.
  - At $t = 5\tau$, $q_o \approx 99.3\%$ (reaches steady state).
- **Example**: Bare thermocouple in gas stream.

#### (c) Second-Order Systems
- **Equation**: $\frac{d^2 q_o}{dt^2} + 2\zeta \omega_n \frac{dq_o}{dt} + \omega_n^2 q_o = K \omega_n^2 q_i(t)$
- **Response Depends on Damping Ratio $\zeta$**:
  - $\zeta < 1$: Underdamped (oscillatory response with overshoot).
  - $\zeta = 1$: Critically damped (fastest response without overshoot).
  - $\zeta > 1$: Overdamped (sluggish, non-oscillatory).
  - $\zeta \approx 0.6$ to $0.7$: Optimum trade-off for measuring instruments (fast rise time, minimal overshoot $\le 5\%$).
- **Example**: PMMC galvanometer, piezoelectric accelerometer.`,
      detailedLearning: `### Frequency Response of Dynamic Systems
- **Bandwidth**: Range of frequencies over which the amplitude response remains within $\pm 3\text{ dB}$ ($70.7\%$) of the mid-band value.
- **Phase Shift**: In first-order systems, phase lag is $\phi = -\tan^{-1}(\omega \tau)$. At corner frequency $\omega_c = 1/\tau$, phase lag is exactly $-45^{\circ}$.`
    }
  },

  // --- 2-3 MARK QUESTIONS ---
  {
    id: 'fom-u1-q5',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Accuracy vs Precision',
    questionText: 'Define accuracy and precision.',
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
      quickRevision: `- **Accuracy**: Closeness of measured value to true value.
- **Precision**: Closeness of agreement between repeated measurements under identical conditions.
- High precision does NOT imply high accuracy (systematic error may exist).`,
      examAnswer: `**Accuracy**: The degree of closeness with which the indicated reading of an instrument approaches the true or accepted reference value of the quantity being measured. Expressed in terms of absolute or relative error.

**Precision**: The degree of repeatability or mutual agreement among independent measurements of the same quantity obtained under identical conditions. It indicates consistency, not correctness. An instrument can be highly precise while being inaccurate due to calibration bias.`,
      detailedLearning: `**Target Analogy**:
- High Accuracy, High Precision: All darts tightly clustered in the bullseye.
- Low Accuracy, High Precision: All darts tightly clustered together, but in the outer ring (consistent calibration error).
- High Accuracy, Low Precision: Darts scattered symmetrically around the bullseye (average is true, high dispersion).
- Low Accuracy, Low Precision: Darts scattered randomly everywhere.`
    }
  },
  {
    id: 'fom-u1-q6',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Fidelity and Measuring Lag',
    questionText: 'Define fidelity and measuring lag.',
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
      quickRevision: `- **Fidelity**: Ability to faithfully reproduce input waveform without dynamic distortion.
- **Measuring Lag**: Delay in instrument response to changes in measured input.`,
      examAnswer: `**Fidelity**: The degree of capability of a measurement system to reproduce the shape of the input signal without introducing amplitude distortion or phase distortion across its frequency spectrum.

**Measuring Lag**: The retardation or delay exhibited by an instrument in responding to a change in the measured quantity. It is divided into retardation lag (due to system inertia/capacitance) and time delay (dead time).`,
      detailedLearning: `In high-speed communication systems or oscilloscope amplifiers, poor fidelity causes ringing, overshoot, or rounding of square pulse edges.`
    }
  },
  {
    id: 'fom-u1-q7',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Definition of Measurement',
    questionText: 'What is measurement?',
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
      quickRevision: `- **Measurement**: Act of quantitative comparison between an unknown parameter and a predefined standard unit ($M = N \times U$).`,
      examAnswer: `**Measurement**: The experimental process of quantitatively comparing an unknown physical parameter (measurand) with a predefined, universally accepted standard of the same nature:
$$\text{Measurement Result } (M) = N \times U$$
where:
- $N$ = Numerical value (magnitude)
- $U$ = Recognized unit of measurement (e.g., Volts, Amperes, Ohms).`,
      detailedLearning: `Without a predefined calibration standard traceable to national/international standards (NIST, NPL), any comparison is arbitrary and lacks metrological validity.`
    }
  },
  {
    id: 'fom-u1-q8',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Direct vs Indirect Methods of Measurement',
    questionText: 'Differentiate between direct and indirect methods of measurement with examples.',
    marks: 3,
    priority: 'high',
    type: 'theory',
    years: ['2025', '2024', '2022', '2019'],
    frequency: 'Repeated 4 times across exam years',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `| Aspect | Direct Measurement | Indirect Measurement |
|---|---|---|
| Method | Directly compared against standard | Measured via functional mathematical relation |
| Speed | Usually faster for simple quantities | Required for inaccessible/complex variables |
| Examples | Steel rule, potentiometer, balance | Measuring temperature via thermocouple mV, power via $V \times I$ |`,
      examAnswer: `### Comparison Between Direct and Indirect Measurement

| Parameter | Direct Measurement | Indirect Measurement |
|---|---|---|
| **Principle** | The unknown measurand is directly compared with a physical primary/secondary standard of the same physical quantity. | The unknown quantity is determined by measuring other related physical parameters and applying a known mathematical relation ($Y = f(X_1, X_2)$). |
| **Accuracy** | Generally high as no conversion steps are involved. | Subject to cumulative errors propagated from each measured intermediate variable. |
| **Complexity** | Simple, manual, or direct scale-reading. | Requires transducer, signal conditioning, and computational stage. |
| **Suitability** | Limited to basic quantities (length, mass, DC voltage balance). | Essential for complex, dynamic, or inaccessible engineering variables. |
| **Examples** | 1. Measuring length using a Vernier caliper.<br>2. Measuring DC potential using a slide-wire potentiometer.<br>3. Weighing mass on an equal-arm balance. | 1. Calculating electric power by measuring $V$ and $I$ ($P = V \cdot I$).<br>2. Measuring temperature via thermocouple voltage output.<br>3. Determining flow rate from differential pressure using an orifice meter. |`,
      detailedLearning: `Most modern electronic and instrumentation systems are indirect because primary variables (force, pressure, flow) are converted into intermediate electrical variables (voltage, frequency, resistance) for transmission and processing.`
    }
  },
  {
    id: 'fom-u1-q9',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Systematic vs Random Errors',
    questionText: 'Differentiate between systematic and random errors.',
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
      quickRevision: `- **Systematic**: Deterministic, constant or predictable direction, can be eliminated/calibrated.
- **Random**: Non-deterministic, fluctuating signs and magnitudes, treated statistically with Gaussian distribution.`,
      examAnswer: `### Difference Between Systematic and Random Errors

| Feature | Systematic Errors | Random Errors |
|---|---|---|
| **Cause** | Definite, identifiable causes (instrument flaw, environment, calibration bias). | Unknown, microscopic, uncontrollable environmental and internal fluctuations. |
| **Behavior** | Tends to be constant or follow a predictable functional trend; always biased in one direction. | Deviations are random in both sign ($+$ or $-$) and magnitude; symmetrically distributed about the mean. |
| **Elimination** | Can be eliminated or corrected through calibration and compensation methods. | Cannot be eliminated completely; reduced only by averaging a large number of independent readings ($1/\sqrt{n}$ law). |`,
      detailedLearning: `Averaging $n$ readings reduces the standard error of the mean by a factor of $\sqrt{n}$, which applies strictly to random errors, never systematic errors.`
    }
  },
  {
    id: 'fom-u1-q10',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Common Types of Errors in Measurement',
    questionText: 'State the different types of common errors in measurement.',
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
      quickRevision: `Common errors include:
1. Gross errors (human slips).
2. Instrumental errors (friction, calibration drift).
3. Environmental errors (temperature, magnetic fields).
4. Observational errors (parallax).
5. Limiting errors (manufacturer tolerance).
6. Random noise errors.`,
      examAnswer: `The common types of errors encountered in measurement systems are:
1. **Gross Errors**: Operator mistakes such as incorrect reading, improper wiring connections, or transcription errors.
2. **Instrumental Errors**: Inherent flaws like mechanical friction in bearings, weak control springs, or zero-offset drift.
3. **Environmental Errors**: Errors caused by changes in ambient temperature, atmospheric pressure, humidity, or external electromagnetic fields (EMI).
4. **Observational Errors**: Parallax errors when reading pointer needles against graduated scales.
5. **Random Errors**: Unpredictable small fluctuations due to thermal noise, supply voltage variations, and microscopic vibrations.`,
      detailedLearning: `Good engineering practice mandates eliminating gross errors by verification, compensating systematic errors by calibration, and quantifying random errors by confidence intervals.`
    }
  },
  {
    id: 'fom-u1-q11',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Primary and Secondary Standards',
    questionText: 'Differentiate between primary and secondary standards.',
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
      quickRevision: `- **Primary Standards**: Absolute national standards (maintained at national metrology labs, highest accuracy, never used outside).
- **Secondary Standards**: Calibrated directly against primary standards, used by industrial calibration labs.`,
      examAnswer: `### Primary vs Secondary Standards

| Feature | Primary Standards | Secondary Standards |
|---|---|---|
| **Definition** | Absolute reference standards maintained by national metrology institutes (e.g., NPL India, NIST USA) with the highest attainable physical accuracy. | Standards whose values are established by direct comparison against primary standards at periodic intervals. |
| **Usage** | Strictly preserved under controlled conditions; never used for direct industrial measurements. | Distributed to industrial calibration laboratories and universities for calibrating working instruments. |
| **Calibration** | Verified against fundamental atomic or quantum physical constants (e.g., Cesium clock, Josephson effect). | Calibrated periodically against primary national standards. |`,
      detailedLearning: `The measurement hierarchy runs: International Standards $\to$ Primary Standards $\to$ Secondary Standards $\to$ Working Standards (used daily in engineering shops).`
    }
  },
  {
    id: 'fom-u1-q12',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Definition and Necessity of Calibration',
    questionText: 'Define calibration. Give two reasons why calibration of measuring instruments is necessary.',
    marks: 3,
    priority: 'moderate',
    type: 'theory',
    years: ['2024', '2022'],
    frequency: 'Repeated in 2024 and 2022 short question sections',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- **Calibration**: Comparison of instrument reading with a reference standard of known, higher accuracy.
- **Why necessary**:
  1. Corrects component aging, drift, and wear over time.
  2. Ensures metrological traceability and legal quality compliance.`,
      examAnswer: `### Definition of Calibration
**Calibration** is the formal operational procedure of comparing the indicated values of an instrument under test with the corresponding values provided by a reference standard of known, certified higher accuracy (typically at least $4\times$ to $10\times$ more accurate), across its operational range.

### Two Major Reasons Why Calibration is Necessary
1. **Compensating for Component Aging and Wear**: Electrical components (resistors, reference zener diodes) and mechanical parts (springs, pivots) drift in value over time due to thermal stress, mechanical fatigue, and environmental exposure. Periodic calibration resets accuracy.
2. **Ensuring Traceability and Quality Assurance**: In manufacturing and safety-critical sectors, measurements must maintain traceable validity linked to national standards (ISO 9001/17025 compliance) to ensure product interchangeability and process safety.`,
      detailedLearning: `If an uncalibrated pressure gauge in a chemical reactor drifts by $10\%$, it could lead to catastrophic overpressure without triggering safety alarms.`
    }
  },
  {
    id: 'fom-u1-q13',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Zero Drift, Span Drift and Zonal Drift',
    questionText: 'What are zero drift, span drift and zonal drift? Explain with input-output characteristics.',
    marks: 3,
    priority: 'moderate',
    type: 'diagram',
    years: ['2023'],
    frequency: 'Appeared in 2023 3-mark section with diagram requirement',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- **Zero Drift**: Whole calibration line shifts parallel up or down (constant offset).
- **Span Drift (Sensitivity Drift)**: Slope of the calibration line changes proportionally with input.
- **Zonal Drift**: Drift occurs only over a specific portion of the input range.`,
      examAnswer: `### Drift in Measuring Instruments
Drift is defined as an undesirable gradual change in instrument output over a period of time, unrelated to any change in the measurand input.

---

### 1. Zero Drift
- **Characteristics**: The entire calibration curve shifts parallel to the original ideal curve by a constant offset $\Delta y$.
- **Mathematical Form**:
  $$q_o = K q_i \pm c$$
  where $c$ is the constant zero shift.
- **Cause**: Thermal expansion of pointer pivot, permanent set in control spring, mechanical zero misadjustment.

---

### 2. Span Drift (Sensitivity Drift)
- **Characteristics**: The calibration line rotates about the origin, altering the slope (sensitivity) proportionally across the range. The drift is zero at zero input and maximum at full scale.
- **Mathematical Form**:
  $$q_o = (K \pm \Delta K) q_i$$
- **Cause**: Temperature coefficient changes in spring stiffness modulus ($G$) or changes in magnetic flux density ($B$).

---

### 3. Zonal Drift
- **Characteristics**: The drift occurs only over a particular localized zone or segment of the instrument scale, while other segments remain unaffected.
- **Cause**: Non-uniform magnetic field distribution, non-linear thermal expansion of specific sensor regions, or localized mechanical wear.`,
      detailedLearning: `In operational amplifiers, input offset voltage drift ($dV_{os}/dT$) causes zero drift, whereas gain bandwidth temperature coefficient causes span drift.`
    }
  },
  {
    id: 'fom-u1-q14',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Test and Calibration in a Measurement System',
    questionText: 'Explain test and calibration in a measurement system.',
    marks: 3,
    priority: 'moderate',
    type: 'theory',
    years: ['2023', '2022'],
    frequency: 'Repeated in 2022 and 2023 short question sections',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- **Testing**: Operational validation to verify whether an instrument conforms to specified operational criteria.
- **Calibration**: Quantitative alignment against a certified reference standard to determine and correct measurement errors.`,
      examAnswer: `### Test vs Calibration in Measurement Systems

#### 1. Testing
- **Objective**: The process of subjecting an instrument or subsystem to specified operational, electrical, environmental, and mechanical conditions to verify whether it meets published manufacturer specifications.
- **Scope**: Includes insulation resistance testing, dielectric breakdown tests, frequency response tests, vibration endurance, and temperature cycling. It gives a binary pass/fail result regarding conformity.

#### 2. Calibration
- **Objective**: The quantitative comparison of the unit under test (UUT) against a certified reference standard of known higher metrological accuracy.
- **Process**:
  1. Record readings across several ascending and descending test points ($0\%, 25\%, 50\%, 75\%, 100\%$ FSD).
  2. Compute deviations and determine limiting errors.
  3. Adjust zero and span potentiometers/trimmers to bring performance within tolerance limits.
  4. Issue an official calibration certificate with stated uncertainty.`,
      detailedLearning: `Testing proves functionality; calibration proves accuracy and establishes legal metrological traceability.`
    }
  },

  // --- NUMERICAL QUESTIONS ---
  {
    id: 'fom-u1-q15',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Limiting Error of a Voltmeter with Specified Full-Scale Accuracy',
    questionText: 'A 0–150 V voltmeter has a guaranteed accuracy of 1% of full-scale reading. The voltage measured by the instrument is 75 V. Calculate the limiting error in percentage for this reading. Comment on the result.',
    marks: 7,
    priority: 'very_high',
    type: 'numerical',
    years: ['2025', '2024'],
    frequency: 'Repeated in 2024 and 2025 examinations',
    isRecurring: true,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `### Formula:
- Absolute Limiting Error: $\delta A = \% \text{ FSD Accuracy} \times V_{FSD} = 0.01 \times 150 = 1.5\text{ V}$.
- Relative Limiting Error at 75 V: $\frac{\delta A}{A} \times 100 = \frac{1.5}{75} \times 100 = 2.0\%$.
- **Key Takeaway**: Percentage limiting error increases as measured voltage decreases toward lower scale.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Full scale range of voltmeter ($V_{FSD}$) = $150\text{ V}$
- Guaranteed accuracy = $\pm 1\%$ of full scale
- Voltage measured by the meter ($V_m$) = $75\text{ V}$

#### 2. To Find:
- Absolute limiting error ($\delta V$)
- Percentage limiting error at the measured reading of $75\text{ V}$

#### 3. Formula:
$$\text{Magnitude of Absolute Limiting Error } (\delta V) = \pm \left(\frac{\% \text{ Accuracy}}{100}\right) \times V_{FSD}$$
$$\text{Percentage Limiting Error at Reading } V_m = \pm \left(\frac{\delta V}{V_m}\right) \times 100$$

#### 4. Substitution and Step-by-Step Calculation:
1. Calculate magnitude of limiting error:
   $$\delta V = \pm \left(\frac{1}{100}\right) \times 150\text{ V} = \pm 1.5\text{ V}$$
   *(This magnitude of error is constant across the entire meter scale!)*

2. Calculate percentage limiting error at $V_m = 75\text{ V}$:
   $$\% \text{ Limiting Error} = \pm \left(\frac{1.5\text{ V}}{75\text{ V}}\right) \times 100 = \pm 2.0\%$$

#### 5. Final Answer:
- **Absolute Limiting Error**: $\pm 1.5\text{ V}$
- **Percentage Limiting Error at 75 V**: $\mathbf{\pm 2.0\%}$

#### 6. Engineering Comments:
1. Although the voltmeter is rated as a $1\%$ instrument, this rating applies strictly at full-scale deflection ($150\text{ V}$).
2. When measuring half-scale ($75\text{ V}$), the percentage error doubles to $2\%$. If measuring $15\text{ V}$ ($10\%$ scale), the error jumps to $\frac{1.5}{15} \times 100 = 10\%$.
3. **Rule of Practice**: For maximum precision, always select an instrument range such that the measured quantity lies in the upper third ($> 66\%$) of the scale.`,
      detailedLearning: `### Why Limiting Error Behaves This Way
Analog meter manufacturers specify accuracy as a percentage of Full Scale Deflection because mechanical friction, spring torque variations, and scale division tolerances are fixed absolute quantities ($\, \pm \delta V$).
When expressing this fixed absolute uncertainty $\delta V$ relative to a small measured quantity $V_m$, the ratio $\delta V / V_m$ naturally escalates.`,
      numericalSolution: {
        given: [
          'Full-scale voltage: V_FSD = 150 V',
          'Guaranteed accuracy: 1% of full scale',
          'Measured voltage: V_m = 75 V'
        ],
        toFind: 'Percentage limiting error at measured value of 75 V',
        formula: 'delta V = (Acc% / 100) * V_FSD; % Limiting Error = (delta V / V_m) * 100',
        substitution: 'delta V = 0.01 * 150 = 1.5 V; % Error = (1.5 / 75) * 100',
        calculation: 'delta V = 1.5 V; % Error = 2.0%',
        answer: '±2.0%',
        units: '%'
      }
    }
  },
  {
    id: 'fom-u1-q16',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Limiting Values of Current and Percentage Error of an Ammeter',
    questionText: 'A 0–25 A ammeter has a guaranteed accuracy of 1.5% of full-scale reading. The current measured by this instrument is 10 A. Determine: (a) The limiting error in amperes, (b) The percentage limiting error at 10 A, and (c) The range of true current.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2023'],
    frequency: 'Appeared in 2023 numerical section',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Absolute Error: $\delta I = 0.015 \times 25 = 0.375\text{ A}$.
- % Limiting Error at 10 A: $\frac{0.375}{10} \times 100 = 3.75\%$.
- Range of true current: $10 \pm 0.375\text{ A} = [9.625\text{ A}, 10.375\text{ A}]$.`,
      examAnswer: `### Step-by-Step Solution

#### 1. Given Data:
- Full-scale current ($I_{FSD}$) = $25\text{ A}$
- Accuracy specification = $\pm 1.5\%$ of full scale
- Measured current ($I_m$) = $10\text{ A}$

#### 2. Calculations:

**(a) Limiting Error in Amperes ($\delta I$):**
$$\delta I = \pm \left(\frac{1.5}{100}\right) \times 25\text{ A} = \pm 0.375\text{ A}$$

**(b) Percentage Limiting Error at 10 A:**
$$\% \text{ Error} = \pm \left(\frac{\delta I}{I_m}\right) \times 100 = \pm \left(\frac{0.375}{10}\right) \times 100 = \pm 3.75\%$$

**(c) Range of True Current ($I_{true}$):**
$$I_{true} = I_m \pm \delta I = 10 \pm 0.375\text{ A}$$
$$\text{Lower Limit} = 10 - 0.375 = 9.625\text{ A}$$
$$\text{Upper Limit} = 10 + 0.375 = 10.375\text{ A}$$

#### 3. Summary of Results:
- Limiting error in amperes: $\mathbf{\pm 0.375\text{ A}}$
- Percentage limiting error at 10 A: $\mathbf{\pm 3.75\%}$
- Range of true current: $\mathbf{9.625\text{ A to } 10.375\text{ A}}$`,
      detailedLearning: `Notice how an instrument with $1.5\%$ full-scale accuracy yields an effective measurement uncertainty of nearly $4\%$ ($3.75\%$) when utilized at $40\%$ of its scale capacity.`,
      numericalSolution: {
        given: [
          'Full-scale current: I_FSD = 25 A',
          'Guaranteed accuracy: 1.5% of FSD',
          'Measured current: I_m = 10 A'
        ],
        toFind: '(a) Limiting error in A, (b) % limiting error at 10 A, (c) Range of true current',
        formula: 'delta I = (1.5/100) * I_FSD; % Error = (delta I / I_m) * 100; Range = I_m ± delta I',
        substitution: 'delta I = 0.015 * 25 = 0.375 A; % Error = (0.375/10) * 100; Range = 10 ± 0.375',
        calculation: 'delta I = 0.375 A; % Error = 3.75%; Range = 9.625 A to 10.375 A',
        answer: '0.375 A; ±3.75%; 9.625 A to 10.375 A',
        units: 'A, %'
      }
    }
  },
  {
    id: 'fom-u1-q17',
    unitId: 1,
    unitName: 'Unit 1 – Fundamentals of Measurement',
    title: 'Average Current and Range of Error from Independent Measurements',
    questionText: 'A set of independent current measurements taken by six different observers was recorded as: 12.8 mA, 12.2 mA, 12.5 mA, 13.1 mA, 12.9 mA, and 12.4 mA. Calculate: (a) The arithmetic mean, (b) The range of error, (c) Average deviation, and (d) Standard deviation.',
    marks: 7,
    priority: 'high',
    type: 'numerical',
    years: ['2022'],
    frequency: 'Appeared in 2022 7-mark numerical problem',
    isRecurring: false,
    status: 'not_studied',
    bookmarked: false,
    isDifficult: false,
    answer: {
      quickRevision: `- Mean: $\bar{I} = \frac{\sum I_i}{6} = 12.65\text{ mA}$.
- Range: $13.1 - 12.2 = 0.9\text{ mA}$.
- Average Deviation: $D = \frac{\sum |d_i|}{6} = 0.30\text{ mA}$.
- Standard Deviation: $s = \sqrt{\frac{\sum d_i^2}{n-1}} = 0.345\text{ mA}$.`,
      examAnswer: `### Step-by-Step Statistical Analysis

#### 1. Given Data:
$N = 6$ observations:
$x_1 = 12.8\text{ mA}$, $x_2 = 12.2\text{ mA}$, $x_3 = 12.5\text{ mA}$, $x_4 = 13.1\text{ mA}$, $x_5 = 12.9\text{ mA}$, $x_6 = 12.4\text{ mA}$.

---

#### 2. Arithmetic Mean ($\bar{x}$):
$$\bar{x} = \frac{\sum_{i=1}^n x_i}{n} = \frac{12.8 + 12.2 + 12.5 + 13.1 + 12.9 + 12.4}{6} = \frac{75.9}{6} = \mathbf{12.65\text{ mA}}$$

---

#### 3. Range of Error:
$$\text{Range} = x_{max} - x_{min} = 13.1\text{ mA} - 12.2\text{ mA} = \mathbf{0.9\text{ mA}}$$

---

#### 4. Computation of Deviations ($d_i = x_i - \bar{x}$):
| Observation ($x_i$) | Deviation $d_i = x_i - 12.65$ | Absolute Deviation $|d_i|$ | $d_i^2$ |
|---|---|---|---|
| 12.8 | $+0.15$ | $0.15$ | $0.0225$ |
| 12.2 | $-0.45$ | $0.45$ | $0.2025$ |
| 12.5 | $-0.15$ | $0.15$ | $0.0225$ |
| 13.1 | $+0.45$ | $0.45$ | $0.2025$ |
| 12.9 | $+0.25$ | $0.25$ | $0.0625$ |
| 12.4 | $-0.25$ | $0.25$ | $0.0625$ |
| **Sum** | $\sum d_i = 0$ | $\sum |d_i| = 1.70$ | $\sum d_i^2 = 0.5750$ |

---

#### 5. Average Deviation ($D$):
$$D = \frac{\sum |d_i|}{n} = \frac{1.70}{6} = \mathbf{0.2833\text{ mA}}$$

---

#### 6. Standard Deviation ($s$):
For a finite sample size ($n < 30$), use $(n - 1)$:
$$s = \sqrt{\frac{\sum d_i^2}{n - 1}} = \sqrt{\frac{0.5750}{6 - 1}} = \sqrt{\frac{0.5750}{5}} = \sqrt{0.1150} = \mathbf{0.3391\text{ mA}}$$

---

#### 7. Final Summary:
- **Mean Current**: $12.65\text{ mA}$
- **Range of Error**: $0.9\text{ mA}$
- **Average Deviation**: $0.283\text{ mA}$
- **Standard Deviation**: $0.339\text{ mA}$`,
      detailedLearning: `The standard deviation measures data dispersion around the mean. In Gaussian statistics, $68.3\%$ of future readings are expected to fall within $\bar{x} \pm s$ ($12.31\text{ mA to } 12.99\text{ mA}$).`,
      numericalSolution: {
        given: [
          'Observations: 12.8, 12.2, 12.5, 13.1, 12.9, 12.4 mA',
          'Sample size: n = 6'
        ],
        toFind: 'Mean, Range, Average Deviation, Standard Deviation',
        formula: 'Mean = sum(x)/n; Range = max - min; D = sum(|d|)/n; s = sqrt(sum(d^2)/(n-1))',
        substitution: 'Mean = 75.9/6 = 12.65 mA; Range = 13.1 - 12.2 = 0.9 mA; sum(|d|) = 1.70; sum(d^2) = 0.575',
        calculation: 'Mean = 12.65 mA; Range = 0.9 mA; D = 0.283 mA; s = sqrt(0.575/5) = 0.339 mA',
        answer: 'Mean: 12.65 mA; Range: 0.9 mA; s: 0.339 mA',
        units: 'mA'
      }
    }
  }
];
