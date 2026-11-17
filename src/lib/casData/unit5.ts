import { CASQuestion } from "@/types/cas";

export const CAS_UNIT_5_QUESTIONS: CASQuestion[] = [
  {
    "id": "cas-u5-q1",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Transient response of electrical circuits",
    "title": "Electrical Transients: Physical Causes & Energy Storage Elements",
    "questionText": "Explain transient and steady-state responses of electrical circuits. Why do electrical transients occur only in circuits containing inductive or capacitive energy storage elements?",
    "marks": 7,
    "priority": "very_high",
    "type": "conceptual",
    "years": [
      "2023",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2023 & Dec 2019 (Core Theory)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Transients Fundamentals\n- **Total Circuit Response**:\n$$x(t) = x_{tr}(t) + x_{ss}(t) = \\text{Transient Response} + \\text{Steady-State Response}$$\n- **Transient Response**: The temporary, decaying response of a circuit immediately following an abrupt switching event or disturbance.\n- **Steady-State Response**: The permanent response that remains as $t \\to \\infty$.\n- **Why do transients occur?**\n  - Inductors store magnetic energy $W_L = \\frac{1}{2} L i^2$. Instantaneous change in $i$ requires infinite voltage $v = L \\frac{di}{dt} = \\infty$, which violates physical energy conservation.\n  - Capacitors store electric energy $W_C = \\frac{1}{2} C v^2$. Instantaneous change in $v$ requires infinite current $i = C \\frac{dv}{dt} = \\infty$.\n- **Purely Resistive Circuits**: Dissipate energy immediately as heat ($p = i^2 R$). No energy is stored $\\implies$ **Zero transient period** (instantaneous transition).",
      "examAnswer": "### 1. Transient vs. Steady-State Response\nThe complete response $y(t)$ of any dynamic electrical system subjected to a switching operation consists of two additive parts:\n$$y(t) = y_{tr}(t) + y_{ss}(t) = y_h(t) + y_p(t)$$\n1. **Transient Response ($y_{tr}(t)$)**:\n   - Corresponds to the complementary function (homogeneous solution) of the governing differential equation.\n   - Depends solely on internal circuit parameters ($R, L, C$) and initial energy storage.\n   - In stable passive circuits, it decays asymptotically to zero:\n   $$\\lim_{t \\to \\infty} y_{tr}(t) = 0$$\n2. **Steady-State Response ($y_{ss}(t)$)**:\n   - Corresponds to the particular integral.\n   - Represents the forced behavior of the circuit governed entirely by external driving sources (DC level or AC sinusoid) after transients have extinguished.\n\n---\n\n### 2. Physical Reason Why Transients Occur Only in Reactive Circuits\n\n#### (a) Inductive Circuits ($L$)\nAn inductor stores energy in its surrounding magnetic field:\n$$W_L = \\frac{1}{2} L i_L^2$$\nFaraday's Law of Electromagnetic Induction dictates:\n$$v_L(t) = L \\frac{di_L}{dt}$$\nIf the current through an inductor were to change instantaneously from $I_1$ to $I_2$ in $\\Delta t = 0$:\n$$\\frac{di_L}{dt} = \\frac{I_2 - I_1}{0} = \\infty \\implies v_L = \\infty\\,\\text{V}$$\nFurthermore, the instantaneous rate of energy change (power) would be:\n$$P = \\frac{dW_L}{dt} = \\infty\\,\\text{Watts}$$\nSince infinite voltage and infinite power cannot be provided by any real-world source, **the current through an inductor cannot change instantaneously**:\n$$\\mathbf{i_L(0^-) = i_L(0^+)}$$\nThe inductor requires a finite duration of time to absorb or release its stored magnetic energy, which manifests as an electrical transient.\n\n#### (b) Capacitive Circuits ($C$)\nA capacitor stores energy in the electrostatic field between its dielectric plates:\n$$W_C = \\frac{1}{2} C v_C^2$$\nThe terminal current-voltage relationship is:\n$$i_C(t) = C \\frac{dv_C}{dt}$$\nAn instantaneous step change in voltage across a capacitor requires infinite displacement current $i_C = \\infty\\,\\text{A}$, demanding infinite instantaneous power.\nTherefore, **the voltage across a capacitor cannot change instantaneously**:\n$$\\mathbf{v_C(0^-) = v_C(0^+)}$$\n\n#### (c) Purely Resistive Circuits ($R$)\nResistors do not store energy; they instantly dissipate electrical energy into heat:\n$$v(t) = i(t) \\cdot R$$\nWhen a switch is closed in a purely resistive network, current and voltage adjust to their new Ohm's law values instantaneously ($t_{transient} = 0$). Hence, transients can only arise in networks containing inductors and/or capacitors.",
      "detailedLearning": "### Practical Example: Inductive Kick & Flyback Diodes\nWhen opening a relay coil carrying $2\\,\\text{A}$ without a freewheeling diode, $di/dt$ is huge, generating a thousands-of-volts inductive kick ($v = L di/dt$) that arcs across switch contacts or destroys driving transistors."
    }
  },
  {
    "id": "cas-u5-q2",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Initial conditions",
    "title": "Initial Conditions at t = 0+ & Higher-Order Derivatives",
    "questionText": "State the rules for evaluating initial conditions in electrical networks at t = 0+ for resistors, inductors, and capacitors. How do you find higher-order derivatives like di/dt(0+) and d^2i/dt^2(0+)?",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2023 & Dec 2022",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Initial Conditions Summary Table\n| Element | State at $t = 0^-$ | Equivalent Model at $t = 0^+$ |\n|---|---|---|\n| **Resistor ($R$)** | $v_R = i_R R$ | Standard Resistor $R$ (changes instantaneously) |\n| **Uncharged Inductor** ($i_L(0^-)=0$) | $i_L(0^-) = 0$ | **Open Circuit** ($i=0$) |\n| **Precharged Inductor** ($i_L(0^-)=I_0$) | $i_L(0^-) = I_0$ | **Ideal Current Source** $I_0$ |\n| **Uncharged Capacitor** ($v_C(0^-)=0$) | $v_C(0^-) = 0$ | **Short Circuit** ($v=0$) |\n| **Precharged Capacitor** ($v_C(0^-)=V_0$) | $v_C(0^-) = V_0$ | **Ideal Voltage Source** $V_0$ |\n- **Higher Derivatives**: Write differential KVL equation at $t=0^+$ and solve for $\\frac{di}{dt}(0^+) = \\frac{v_L(0^+)}{L}$.",
      "examAnswer": "### 1. Fundamental Continuity Laws at Switching Instant ($t = 0^+$)\nLet $t = 0^-$ denote the instant immediately prior to switching, and $t = 0^+$ denote the instant immediately following switching:\n1. **Inductor Current Continuity**:\n$$i_L(0^+) = i_L(0^-)$$\n2. **Capacitor Voltage Continuity**:\n$$v_C(0^+) = v_C(0^-)$$\n\n---\n\n### 2. Equivalent Circuits at $t = 0^+$\n\n#### (a) Behavior of Inductor at $t = 0^+$:\n- If initially uncharged ($i_L(0^-) = 0$):\n  $$i_L(0^+) = 0 \\implies \\mathbf{\\text{Inductor behaves as an OPEN CIRCUIT}}$$\n- If carrying initial current $i_L(0^-) = I_0$:\n  $$i_L(0^+) = I_0 \\implies \\mathbf{\\text{Inductor behaves as an IDEAL CURRENT SOURCE of } I_0}$$\n\n#### (b) Behavior of Capacitor at $t = 0^+$:\n- If initially uncharged ($v_C(0^-) = 0$):\n  $$v_C(0^+) = 0 \\implies \\mathbf{\\text{Capacitor behaves as a SHORT CIRCUIT}}$$\n- If charged to initial voltage $v_C(0^-) = V_0$:\n  $$v_C(0^+) = V_0 \\implies \\mathbf{\\text{Capacitor behaves as an IDEAL VOLTAGE SOURCE of } V_0}$$\n\n---\n\n### 3. Procedure for Higher-Order Derivatives: $\\frac{di}{dt}(0^+)$ and $\\frac{d^2i}{dt^2}(0^+)$\n\nConsider a series RLC circuit excited by a DC voltage $V$:\n$$R i(t) + L \\frac{di(t)}{dt} + v_C(t) = V \\quad \\text{--- (Equation 1)}$$\n\n#### Step 1: Evaluating $\\frac{di}{dt}(0^+)$\nEvaluate Equation 1 at $t = 0^+$:\n$$R i(0^+) + L \\left.\\frac{di}{dt}\\right|_{t=0^+} + v_C(0^+) = V$$\nSolving for the first derivative:\n$$\\mathbf{\\left.\\frac{di}{dt}\\right|_{t=0^+} = \\frac{V - R i(0^+) - v_C(0^+)}{L} = \\frac{v_L(0^+)}{L}}$$\n\n#### Step 2: Evaluating $\\frac{d^2i}{dt^2}(0^+)$\nDifferentiate Equation 1 with respect to time $t$:\n$$R \\frac{di(t)}{dt} + L \\frac{d^2i(t)}{dt^2} + \\frac{dv_C(t)}{dt} = 0$$\nSince $\\frac{dv_C}{dt} = \\frac{i(t)}{C}$:\n$$R \\frac{di(t)}{dt} + L \\frac{d^2i(t)}{dt^2} + \\frac{i(t)}{C} = 0$$\nNow evaluate at $t = 0^+$:\n$$L \\left.\\frac{d^2i}{dt^2}\\right|_{t=0^+} = -R \\left.\\frac{di}{dt}\\right|_{t=0^+} - \\frac{i(0^+)}{C}$$\n$$\\mathbf{\\left.\\frac{d^2i}{dt^2}\\right|_{t=0^+} = -\\frac{R}{L} \\left.\\frac{di}{dt}\\right|_{t=0^+} - \\frac{i(0^+)}{LC}}$$",
      "detailedLearning": "### Steady-State DC at $t = \\infty$\nAfter transients have completely decayed ($t \\to \\infty$):\n- Inductor acts as a **short circuit** ($di/dt = 0 \\implies v_L = 0$).\n- Capacitor acts as an **open circuit** ($dv/dt = 0 \\implies i_C = 0$)."
    }
  },
  {
    "id": "cas-u5-q3",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Impulse and step responses of RL circuits",
    "title": "Series RL Circuit DC Transient Response & Time Constant",
    "questionText": "Derive the transient current expression i(t) for a series RL circuit connected to a DC voltage source V at t = 0. Define the time constant tau = L / R and sketch current growth and decay curves.",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2023",
      "2022",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated across 2023, 2022, 2019",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### RL Transients Summary\n- **Growth of Current**:\n$$i(t) = \\frac{V}{R} \\left(1 - e^{-t/\\tau}\\right) = I_0(1 - e^{-t/\\tau})$$\n- **Decay of Current**:\n$$i(t) = I_0 e^{-t/\\tau}$$\n- **Time Constant**:\n$$\\tau = \\frac{L}{R}\\,\\text{seconds}$$\n- At $t = \\tau$: Current reaches **$63.2\\%$** of its maximum value during growth ($1 - e^{-1} = 0.632$).\n- At $t = 5\\tau$: Current reaches **$99.3\\%$** (transient considered complete).",
      "examAnswer": "### 1. Differential Equation Formulation\nConsider a series combination of resistor $R$ and inductor $L$ connected across a constant DC voltage source $V$ via a switch closed at $t = 0$.\nThe inductor is initially uncharged: $i(0^-) = 0$.\nApplying KVL for $t \\ge 0$:\n$$R i(t) + L \\frac{di(t)}{dt} = V \\quad \\text{--- (Equation 1)}$$\n\n---\n\n### 2. Analytical Solution of Differential Equation\nRearrange Equation 1 into standard first-order linear form:\n$$\\frac{di}{dt} + \\frac{R}{L} i = \\frac{V}{L}$$\nIntegrating factor:\n$$I.F. = e^{\\int (R/L) dt} = e^{(R/L)t}$$\nMultiplying through:\n$$\\frac{d}{dt} \\left[ i(t) e^{(R/L)t} \\right] = \\frac{V}{L} e^{(R/L)t}$$\nIntegrating both sides with respect to $t$:\n$$i(t) e^{(R/L)t} = \\frac{V}{L} \\left( \\frac{e^{(R/L)t}}{R/L} \\right) + K = \\frac{V}{R} e^{(R/L)t} + K$$\n$$i(t) = \\frac{V}{R} + K e^{-(R/L)t}$$\n\n#### Evaluating Integration Constant $K$ from Initial Conditions:\nAt $t = 0^+$, by inductor current continuity, $i(0^+) = i(0^-) = 0$:\n$$0 = \\frac{V}{R} + K e^0 \\implies K = -\\frac{V}{R}$$\nSubstituting $K$ back into the solution:\n$$i(t) = \\frac{V}{R} - \\frac{V}{R} e^{-(R/L)t}$$\n$$\\mathbf{i(t) = \\frac{V}{R} \\left(1 - e^{-t/\\tau}\\right)} \\quad \\text{where } \\tau = \\frac{L}{R}$$\n\n---\n\n### 3. Voltage Across Inductor $v_L(t)$\n$$v_L(t) = L \\frac{di}{dt} = L \\cdot \\frac{V}{R} \\left( \\frac{R}{L} e^{-t/\\tau} \\right) = \\mathbf{V e^{-t/\\tau}}$$\nAt $t = 0^+$, $v_L = V$ (all voltage drops across inductor).\nAs $t \\to \\infty$, $v_L \\to 0$.\n\n---\n\n### 4. Waveforms of Growth and Decay\n\n```\n  Current i(t)\n    ^\nI_0 + - - - - - - - - - - - - - - - - - - - - - - - (Steady State I_0 = V/R)\n    |                             ....--''''\n    |                     ...--'''\n    |             ...--'''\n0.63|       ..--''               Growth: i(t) = I_0 * (1 - e^(-t/tau))\n    |   .-''\n    |  /\n    | /\n    +--+----+----+----+----+------------------------> Time t\n    0  tau  2tau 3tau 4tau 5tau\n```\n\n---\n\n### 5. Definition of Time Constant ($\\tau = L/R$)\nThe **time constant $\\tau$** is the time required for the current in an RL circuit to rise to $63.2\\%$ of its final steady-state value during growth:\n$$i(\\tau) = I_0(1 - e^{-1}) = I_0(1 - 0.368) = \\mathbf{0.632 I_0}$$\nAlternatively, it is the time that would be required for the current to reach its final steady-state value if it continued to rise at its initial constant rate:\n$$\\left.\\frac{di}{dt}\\right|_{t=0} = \\frac{V}{L} \\implies \\Delta t = \\frac{I_0}{\\text{Initial slope}} = \\frac{V/R}{V/L} = \\frac{L}{R} = \\tau$$",
      "detailedLearning": "### Decay of Current\nIf the switch is opened to disconnect $V$ and simultaneously short-circuits the series RL loop carrying initial current $I_0 = V/R$:\n$$L \\frac{di}{dt} + R i = 0 \\implies i(t) = I_0 e^{-t/\\tau}$$\nAt $t = \\tau$, current decays to $36.8\\%$ of its initial value ($e^{-1} = 0.368$)."
    }
  },
  {
    "id": "cas-u5-q4",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Impulse and step responses of RC circuits",
    "title": "Series RC Circuit DC Transient Response: Charging & Discharging",
    "questionText": "Derive the transient voltage expression v_C(t) and current i(t) for a series RC circuit connected to a DC source V at t = 0. Define time constant tau = RC and sketch charging and discharging waveforms.",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2022",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2022 & Dec 2019",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### RC Transients Summary\n- **Capacitor Voltage (Charging)**:\n$$v_C(t) = V(1 - e^{-t/\\tau})$$\n- **Charging Current**:\n$$i(t) = \\frac{V}{R} e^{-t/\\tau} = I_0 e^{-t/\\tau}$$\n- **Discharging**:\n$$v_C(t) = V_0 e^{-t/\\tau}, \\quad i(t) = -\\frac{V_0}{R} e^{-t/\\tau}$$\n- **Time Constant**:\n$$\\tau = R C\\,\\text{seconds}$$\n- At $t = \\tau$: $v_C$ reaches **$63.2\\%$** of $V$. At $t = 5\\tau$: $v_C$ reaches **$99.3\\%$**.",
      "examAnswer": "### 1. Differential Equation Formulation\nConsider an uncharged capacitor $C$ in series with resistor $R$ connected to DC source $V$ at $t = 0$:\nInitial condition: $v_C(0^-) = 0$.\nApplying KVL:\n$$R i(t) + v_C(t) = V$$\nSince $i(t) = C \\frac{dv_C}{dt}$:\n$$R C \\frac{dv_C}{dt} + v_C(t) = V \\quad \\text{--- (Equation 1)}$$\n\n---\n\n### 2. Analytical Solution\n$$\\frac{dv_C}{dt} + \\frac{1}{RC} v_C = \\frac{V}{RC}$$\nIntegrating factor: $e^{t/RC}$.\n$$v_C(t) e^{t/RC} = \\int \\frac{V}{RC} e^{t/RC} dt + K = V e^{t/RC} + K$$\n$$v_C(t) = V + K e^{-t/RC}$$\n\nApplying initial condition $v_C(0^+) = v_C(0^-) = 0$:\n$$0 = V + K \\implies K = -V$$\n$$\\mathbf{v_C(t) = V\\left(1 - e^{-t/\\tau}\\right)} \\quad \\text{where } \\tau = RC$$\n\n---\n\n### 3. Charging Current Expression\n$$i(t) = C \\frac{dv_C}{dt} = C \\cdot V \\left( \\frac{1}{RC} e^{-t/\\tau} \\right) = \\mathbf{\\frac{V}{R} e^{-t/\\tau} = I_0 e^{-t/\\tau}}$$\n- At $t = 0^+$: $i(0^+) = \\frac{V}{R}$ (capacitor is short circuit, drawing maximum initial surge current).\n- At $t \\to \\infty$: $i(\\infty) = 0$ (capacitor fully charged, blocks DC current).\n\n---\n\n### 4. Waveforms\n\n```\n  Capacitor Voltage v_C(t)                Charging Current i(t)\n    ^                                       ^\n  V + - - - - - - - - - -                 I_0 +\n    |             ...--'''                  | `\n    |       ...-''                          |   `\n    |   ..-''                               |     `   i(t) = I_0 * e^(-t/tau)\n    |  /     v_C(t) = V*(1 - e^(-t/tau))     |       `\n    +--+----+----+----+-----> Time          +--+----+----+----+-----> Time\n    0 tau  2tau 3tau 4tau                   0 tau  2tau 3tau 4tau\n```",
      "detailedLearning": "### Energy Stored vs Energy Dissipated\nTotal energy delivered by the battery during full charging:\n$$W_{battery} = \\int_0^\\infty V i(t) dt = V \\int_0^\\infty C \\frac{dv_C}{dt} dt = C V [V - 0] = C V^2$$\nFinal energy stored in capacitor: $W_C = \\frac{1}{2} C V^2$.\nEnergy dissipated as heat in resistor $R$:\n$$W_R = \\int_0^\\infty i^2(t) R dt = \\frac{1}{2} C V^2$$\nRemarkably, exactly **$50\\%$ of the energy delivered by the battery is dissipated as heat in resistor $R$**, regardless of the value of $R$!"
    }
  },
  {
    "id": "cas-u5-q5",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Impulse and step responses of RLC circuits",
    "title": "Series RLC Circuit Transients: Overdamped, Critical & Underdamped",
    "questionText": "Formulate the second-order differential equation for a series RLC circuit excited by a DC step input. Derive and compare the overdamped, critically damped, and underdamped transient responses.",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2023 & Dec 2022",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Second-Order RLC Formulations\n- **Differential Equation**:\n$$\\frac{d^2i}{dt^2} + \\frac{R}{L}\\frac{di}{dt} + \\frac{1}{LC}i = 0 \\implies s^2 + 2\\alpha s + \\omega_0^2 = 0$$\n- **Neper Frequency**: $\\alpha = \\frac{R}{2L}$.\n- **Resonant Frequency**: $\\omega_0 = \\frac{1}{\\sqrt{LC}}$.\n- **Roots**: $s_{1,2} = -\\alpha \\pm \\sqrt{\\alpha^2 - \\omega_0^2}$.\n- **Three Damping Cases**:\n  1. **Overdamped ($\\alpha > \\omega_0 \\implies R > 2\\sqrt{L/C}$)**: Two distinct negative real roots. Sluggish exponential rise without oscillation.\n  2. **Critically Damped ($\\alpha = \\omega_0 \\implies R = 2\\sqrt{L/C}$)**: Two equal negative real roots ($s_1 = s_2 = -\\alpha$). Fastest non-oscillatory return to equilibrium.\n  3. **Underdamped ($\\alpha < \\omega_0 \\implies R < 2\\sqrt{L/C}$)**: Complex conjugate roots $s = -\\alpha \\pm j\\omega_d$. Oscillatory response decaying at envelope $e^{-\\alpha t}$.",
      "examAnswer": "### 1. Differential Equation Formulation\nApplying KVL to a series RLC circuit with applied DC voltage $V$:\n$$R i(t) + L \\frac{di}{dt} + \\frac{1}{C}\\int i\\,dt = V$$\nDifferentiating with respect to $t$:\n$$L \\frac{d^2i}{dt^2} + R \\frac{di}{dt} + \\frac{1}{C} i = 0$$\nDividing by $L$:\n$$\\mathbf{\\frac{d^2i}{dt^2} + \\left(\\frac{R}{L}\\right) \\frac{di}{dt} + \\left(\\frac{1}{LC}\\right) i = 0}$$\n\nDefining standard parameters:\n- Attenuation factor (Neper frequency): $\\alpha = \\frac{R}{2L}$\n- Undamped natural frequency: $\\omega_0 = \\frac{1}{\\sqrt{LC}}$\n$$s^2 + 2\\alpha s + \\omega_0^2 = 0$$\n\nRoots of the characteristic equation:\n$$\\mathbf{s_{1,2} = -\\alpha \\pm \\sqrt{\\alpha^2 - \\omega_0^2}}$$\n\n---\n\n### 2. Analysis of the Three Damping Cases\n\n#### Case 1: Overdamped ($\\alpha > \\omega_0 \\implies R > 2\\sqrt{L/C}$)\nThe term under the radical is positive: $\\alpha^2 - \\omega_0^2 > 0$.\nThe roots $s_1$ and $s_2$ are real, negative, and unequal:\n$$i(t) = A_1 e^{s_1 t} + A_2 e^{s_2 t}$$\n- Response is purely exponential and non-oscillatory.\n- Circuit is heavily damped and returns slowly to steady state.\n\n#### Case 2: Critically Damped ($\\alpha = \\omega_0 \\implies R = 2\\sqrt{L/C}$)\nThe radical is zero: $\\alpha^2 - \\omega_0^2 = 0$.\nThe roots are real, negative, and repeated: $s_1 = s_2 = -\\alpha$.\n$$i(t) = (A_1 + A_2 t) e^{-\\alpha t}$$\n- This produces the **fastest possible recovery to steady-state equilibrium without any overshoot or oscillation**.\n\n#### Case 3: Underdamped ($\\alpha < \\omega_0 \\implies R < 2\\sqrt{L/C}$)\nThe radical is negative: $\\alpha^2 - \\omega_0^2 < 0$.\nThe roots are complex conjugates:\n$$s_{1,2} = -\\alpha \\pm j\\omega_d$$\nwhere $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$ is the damped natural frequency.\n$$i(t) = e^{-\\alpha t} [B_1 \\cos(\\omega_d t) + B_2 \\sin(\\omega_d t)] = I_m e^{-\\alpha t} \\sin(\\omega_d t + \\theta)$$\n- Response consists of damped sinusoidal oscillations decaying within an exponential envelope $e^{-\\alpha t}$.\n\n---\n\n### 3. Comparison Waveforms\n\n```\n Response Current i(t)\n    ^\n    |          Underdamped (alpha < w_0) [Oscillatory Ringing]\n    |           /\\\n    |          /  \\\n    |         /    \\      Critically Damped (alpha = w_0) [Fastest smooth]\n    |        /      \\       ..---'''\n    |       /        \\..--''\n    |      /   ....---'\n    |     /.-''             Overdamped (alpha > w_0) [Sluggish]\n    +----+---\\-------/---------------------------------> Time t\n    0         \\     /\n               \\___/\n```",
      "detailedLearning": "### Practical Engineering Applications\n- **Critically Damped**: Deadbeat analog meter needles (pointer rapidly settles to correct reading without vibrating back and forth).\n- **Overdamped**: Door closers and shock absorbers.\n- **Underdamped**: Wireless radio transmitters, Tesla coils, ultrasonic transducers."
    }
  },
  {
    "id": "cas-u5-q6",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Solution of differential equations using Laplace transforms",
    "title": "Laplace Transform Circuit Models with Initial Conditions",
    "questionText": "Explain the solution of electrical network differential equations using Laplace transforms. Show the s-domain equivalent models of resistors, inductors, and capacitors including initial conditions.",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2023",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2023 & Dec 2019",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### s-Domain Transformed Models\n- **Resistor ($R$)**: $V(s) = R I(s)$ (No initial energy).\n- **Inductor ($L$) with initial current $I_0 = i_L(0^-)$**:\n  - Series Model: Impedance $sL$ in series with opposing voltage source $L I_0$:\n  $$V(s) = sL I(s) - L I_0$$\n  - Parallel Model: Admittance $\\frac{1}{sL}$ in parallel with shunt current source $\\frac{I_0}{s}$.\n- **Capacitor ($C$) with initial voltage $V_0 = v_C(0^-)$**:\n  - Series Model: Impedance $\\frac{1}{sC}$ in series with aiding voltage source $\\frac{V_0}{s}$:\n  $$V(s) = \\frac{1}{sC} I(s) + \\frac{V_0}{s}$$\n  - Parallel Model: Admittance $sC$ in parallel with shunt current source $C V_0$.",
      "examAnswer": "### 1. Laplace Transform in Circuit Analysis\nThe Laplace transform converts time-domain differential equations into algebraic equations in the complex frequency domain ($s = \\sigma + j\\omega$):\n$$\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty f(t) e^{-st}\\,dt$$\nKey differential property:\n$$\\mathcal{L}\\left\\{ \\frac{df}{dt} \\right\\} = s F(s) - f(0^-)$$\n\n---\n\n### 2. s-Domain Transformed Models of Circuit Elements\n\n#### (a) Resistor: $v(t) = R i(t)$\n$$\\mathcal{L}\\{v(t)\\} = R \\mathcal{L}\\{i(t)\\} \\implies \\mathbf{V(s) = R \\cdot I(s)}$$\nThe $s$-domain impedance is simply the constant $Z_R(s) = R$.\n\n#### (b) Inductor with Initial Current $i_L(0^-) = I_0$: $v_L(t) = L \\frac{di_L}{dt}$\nTaking the Laplace transform:\n$$V(s) = L [s I(s) - I_0] = \\mathbf{sL I(s) - L I_0}$$\n- **Thevenin (Series) Model**: An impedance $sL$ in series with an independent voltage generator of value $L I_0$ having polarity opposing the direction of $I(s)$.\n- **Norton (Parallel) Model**: Solving for $I(s)$:\n$$I(s) = \\frac{V(s)}{sL} + \\frac{I_0}{s}$$\nAn admittance $\\frac{1}{sL}$ in parallel with a DC current source of magnitude $\\frac{I_0}{s}$.\n\n#### (c) Capacitor with Initial Voltage $v_C(0^-) = V_0$: $i_C(t) = C \\frac{dv_C}{dt}$\n$$I(s) = C [s V(s) - V_0] = sC V(s) - C V_0$$\n- **Norton (Parallel) Model**: An admittance $sC$ in parallel with a current source $C V_0$.\n- **Thevenin (Series) Model**: Solving for $V(s)$:\n$$\\mathbf{V(s) = \\frac{1}{sC} I(s) + \\frac{V_0}{s}}$$\nAn impedance $\\frac{1}{sC}$ in series with a voltage source $\\frac{V_0}{s}$ having polarity aiding initial capacitor charge.\n\n---\n\n### 3. Circuit Schematics\n\n```\n Inductor s-Domain Series Model:       Capacitor s-Domain Series Model:\n      +---[ sL ]---(- +)---+                +---[ 1/sC ]---(+ -)---+\n                    L*I_0                                   V_0/s\n```\n\n---\n\n### 4. General Solution Procedure\n1. Replace all circuit components by their $s$-domain transformed models.\n2. Formulate KVL mesh or KCL nodal equations algebraically.\n3. Solve for unknown current $I(s)$ or voltage $V(s)$.\n4. Apply partial fraction expansion and inverse Laplace transform to obtain the exact time-domain response $i(t)$ or $v(t)$.",
      "detailedLearning": "### Superiority over Classical Differential Equations\nClassical calculus requires solving complementary function and particular integral separately, then evaluating integration constants using simultaneous equations. Laplace transforms incorporate initial conditions directly at the algebraic step, eliminating arbitrary constants."
    }
  },
  {
    "id": "cas-u5-q7",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Laplace transforms of singularity functions",
    "title": "Singularity Functions: Definitions, Waveforms & Laplace Transforms",
    "questionText": "Define the singularity functions: unit step u(t), unit impulse delta(t), unit ramp r(t), and gate function. State their mathematical definitions, waveforms, and Laplace transforms.",
    "marks": 7,
    "priority": "very_high",
    "type": "conceptual",
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Repeated in Dec 2023 & Dec 2022",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Singularity Functions Cheat Sheet\n1. **Unit Impulse $\\delta(t)$**: $\\delta(t) = 0$ for $t \\neq 0$, $\\int_{-\\infty}^\\infty \\delta(t)dt = 1$. $\\mathcal{L}\\{\\delta(t)\\} = 1$.\n2. **Unit Step $u(t)$**: $u(t) = 0$ for $t < 0$, $u(t) = 1$ for $t > 0$. $\\mathcal{L}\\{u(t)\\} = 1/s$.\n3. **Unit Ramp $r(t) = t u(t)$**: $\\mathcal{L}\\{r(t)\\} = 1/s^2$.\n4. **Gate (Pulse) Function**: $g(t) = u(t - T_1) - u(t - T_2)$. $\\mathcal{L}\\{g(t)\\} = \\frac{e^{-s T_1} - e^{-s T_2}}{s}$.\n- Calculus Links: $\\delta(t) = \\frac{du(t)}{dt}, \\quad u(t) = \\frac{dr(t)}{dt}$.",
      "examAnswer": "### 1. Unit Impulse Function (Dirac Delta $\\delta(t)$)\n- **Definition**:\n$$\\delta(t) = 0 \\quad \\text{for } t \\neq 0$$\n$$\\int_{-\\infty}^\\infty \\delta(t)\\,dt = 1$$\nIt represents an infinitely tall, zero-width spike enclosing unit area at $t = 0$.\n- **Sifting Property**: $\\int_{-\\infty}^\\infty f(t) \\delta(t - t_0) dt = f(t_0)$.\n- **Laplace Transform**:\n$$\\mathcal{L}\\{\\delta(t)\\} = \\int_0^\\infty \\delta(t) e^{-st} dt = e^{-s(0)} = \\mathbf{1}$$\n\n---\n\n### 2. Unit Step Function ($u(t)$ / Heaviside)\n- **Definition**:\n$$u(t) = \\begin{cases} 0, & t < 0 \\\\ 1, & t > 0 \\end{cases}$$\nRepresents turning on a constant 1-Volt or 1-Ampere source at $t = 0$.\n- **Laplace Transform**:\n$$\\mathcal{L}\\{u(t)\\} = \\int_0^\\infty 1 \\cdot e^{-st} dt = \\left[ -\\frac{e^{-st}}{s} \\right]_0^\\infty = \\mathbf{\\frac{1}{s}}$$\n\n---\n\n### 3. Unit Ramp Function ($r(t)$)\n- **Definition**:\n$$r(t) = t \\cdot u(t) = \\begin{cases} 0, & t < 0 \\\\ t, & t \\ge 0 \\end{cases}$$\n- **Laplace Transform**:\n$$\\mathcal{L}\\{r(t)\\} = \\int_0^\\infty t e^{-st} dt = \\mathbf{\\frac{1}{s^2}}$$\n\n---\n\n### 4. Gate (Rectangular Pulse) Function ($g(t)$)\n- **Definition**:\nA pulse of unit amplitude existing between $t = T_1$ and $t = T_2$:\n$$g(t) = u(t - T_1) - u(t - T_2)$$\n- **Laplace Transform** (using time-shift theorem $\\mathcal{L}\\{u(t - T)\\} = \\frac{e^{-sT}}{s}$):\n$$\\mathcal{L}\\{g(t)\\} = \\mathbf{\\frac{e^{-s T_1} - e^{-s T_2}}{s}}$$\n\n---\n\n### 5. Summary Table\n\n| Function | Time Domain $f(t)$ | Derivative Relation | Laplace Transform $F(s)$ |\n|---|---|---|---|\n| **Unit Impulse** | $\\delta(t)$ | $\\frac{du}{dt}$ | $\\mathbf{1}$ |\n| **Unit Step** | $u(t)$ | $\\frac{dr}{dt}$ | $\\mathbf{1/s}$ |\n| **Unit Ramp** | $r(t) = t u(t)$ | $\\int u(t) dt$ | $\\mathbf{1/s^2}$ |\n| **Parabolic** | $\\frac{1}{2}t^2 u(t)$ | $\\int r(t) dt$ | $\\mathbf{1/s^3}$ |",
      "detailedLearning": "### Time-Shifting Example\nA delayed ramp starting at $t = 3\\,\\text{s}$ with slope $2$:\n$$f(t) = 2(t - 3) u(t - 3) \\implies F(s) = \\frac{2 e^{-3s}}{s^2}$$"
    }
  },
  {
    "id": "cas-u5-q8",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Initial value theorem",
    "title": "Initial and Final Value Theorems: Proof & Validity Restrictions",
    "questionText": "State and prove the Initial Value Theorem and Final Value Theorem for Laplace transforms. State the essential conditions under which the final value theorem is valid.",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2023",
      "2022",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated across 2023, 2022, 2019",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Value Theorems\n- **Initial Value Theorem (IVT)**:\n$$\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to \\infty} s F(s)$$\n  - Valid if degree of denominator > degree of numerator.\n- **Final Value Theorem (FVT)**:\n$$\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s)$$\n  - **CRITICAL CONDITION**: Valid **IF AND ONLY IF** all poles of $s F(s)$ lie strictly in the open Left Half Plane (LHP).\n  - If $F(s)$ has poles on the $j\\omega$-axis or in RHP (e.g. $\\sin\\omega t$), FVT **CANNOT BE APPLIED**!",
      "examAnswer": "### 1. The Initial Value Theorem (IVT)\n#### Statement:\nIf a function $f(t)$ and its first derivative $\\frac{df}{dt}$ are Laplace transformable, then the initial value $f(0^+)$ can be determined directly from its transform $F(s)$:\n$$\\mathbf{\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to \\infty} s F(s)}$$\n\n#### Proof:\nRecall the derivative property of Laplace transform:\n$$\\mathcal{L}\\left\\{ \\frac{df}{dt} \\right\\} = \\int_0^\\infty \\frac{df}{dt} e^{-st} dt = s F(s) - f(0^-)$$\nTaking the limit as $s \\to \\infty$ on both sides:\n$$\\lim_{s \\to \\infty} \\int_0^\\infty \\frac{df}{dt} e^{-st} dt = \\lim_{s \\to \\infty} [s F(s) - f(0^+)]$$\nSince $\\lim_{s \\to \\infty} e^{-st} = 0$, the integral evaluates to zero:\n$$0 = \\lim_{s \\to \\infty} s F(s) - f(0^+) \\implies \\mathbf{f(0^+) = \\lim_{s \\to \\infty} s F(s)}$$\n\n---\n\n### 2. The Final Value Theorem (FVT)\n#### Statement:\nIf $f(t)$ and $\\frac{df}{dt}$ are Laplace transformable, the steady-state final value $f(\\infty)$ is given by:\n$$\\mathbf{\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s)}$$\n\n#### Proof:\nStarting again from the derivative property:\n$$\\int_0^\\infty \\frac{df}{dt} e^{-st} dt = s F(s) - f(0^+)$$\nNow take the limit as $s \\to 0$ on both sides:\n$$\\lim_{s \\to 0} \\int_0^\\infty \\frac{df}{dt} e^{-st} dt = \\lim_{s \\to 0} [s F(s) - f(0^+)]$$\nSince $\\lim_{s \\to 0} e^{-st} = e^0 = 1$:\n$$\\int_0^\\infty \\frac{df}{dt} dt = \\lim_{s \\to 0} s F(s) - f(0^+)$$\n$$[f(t)]_0^\\infty = f(\\infty) - f(0^+) = \\lim_{s \\to 0} s F(s) - f(0^+)$$\nAdding $f(0^+)$ to both sides:\n$$\\mathbf{f(\\infty) = \\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s)}$$\n\n---\n\n### 3. Essential Validity Restrictions for Final Value Theorem\nThe Final Value Theorem is valid **if and only if $f(t)$ actually settles to a finite steady-state value**.\n1. All poles of $s F(s)$ must lie strictly in the **open Left Half of the $s$-plane (LHP)**.\n2. A single pole of $F(s)$ is permitted at the origin ($s = 0$), because it cancels with $s$ in $s F(s)$ (representing a DC step).\n3. **Poles on $j\\omega$-Axis or RHP Void the Theorem**:\n   For example, if $f(t) = \\sin(\\omega t)$, $F(s) = \\frac{\\omega}{s^2 + \\omega^2}$.\n   Applying formula blindly: $\\lim_{s \\to 0} s \\frac{\\omega}{s^2 + \\omega^2} = 0$.\n   However, $\\lim_{t \\to \\infty} \\sin(\\omega t)$ does not exist (oscillates forever between $-1$ and $+1$).\n   Applying FVT here yields a **completely false result** because poles lie on the $j\\omega$-axis.",
      "detailedLearning": "### Quick Checklist\nBefore applying FVT, always check: Are any poles of $s F(s)$ in the right-half plane or on the imaginary axis? If yes, stop; FVT cannot be used."
    }
  },
  {
    "id": "cas-u5-q9",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Convolution",
    "title": "Convolution Theorem: Mathematical Statement & Network Response",
    "questionText": "State the Convolution Theorem in the time and frequency domains. Explain its application in determining the zero-state response of an electrical network to an arbitrary input excitation.",
    "marks": 7,
    "priority": "high",
    "type": "derivation",
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2022 University Exam",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Convolution Theorem\n- **Time-Domain Convolution Integral**:\n$$y(t) = x(t) * h(t) = \\int_0^t x(\\tau) h(t - \\tau) d\\tau = \\int_0^t h(\\tau) x(t - \\tau) d\\tau$$\n- **Frequency-Domain Property**:\n$$\\mathcal{L}\\{x(t) * h(t)\\} = X(s) \\cdot H(s)$$\nConvolution in time domain is equivalent to **simple multiplication** in Laplace frequency domain!\n- **Zero-State Response**: If network impulse response is $h(t)$, response to any arbitrary input $x(t)$ is $y(t) = x(t) * h(t)$.",
      "examAnswer": "### 1. Statement of Convolution Theorem\nThe Convolution Theorem states that the Laplace transform of the convolution of two time-domain signals $f_1(t)$ and $f_2(t)$ is equal to the algebraic product of their individual Laplace transforms:\n$$\\mathbf{\\mathcal{L}\\{f_1(t) * f_2(t)\\} = F_1(s) \\cdot F_2(s)}$$\nConversely, the inverse Laplace transform of the product of two transforms is given by the convolution integral:\n$$\\mathbf{f(t) = \\mathcal{L}^{-1}\\{F_1(s) F_2(s)\\} = \\int_0^t f_1(\\tau) f_2(t - \\tau)\\,d\\tau}$$\n\n---\n\n### 2. Application to Electrical Network Analysis\nConsider a linear time-invariant (LTI) network with transfer function $H(s)$:\n$$H(s) = \\frac{Y(s)}{X(s)}$$\nwhere $X(s)$ is the input excitation and $Y(s)$ is the zero-state response.\n\n1. When the input is a unit impulse $x(t) = \\delta(t)$, since $\\mathcal{L}\\{\\delta(t)\\} = 1$:\n$$Y(s) = H(s) \\cdot 1 = H(s) \\implies y(t) = h(t) = \\mathcal{L}^{-1}\\{H(s)\\}$$\nThe transfer function $H(s)$ is the Laplace transform of the network's **unit impulse response $h(t)$**.\n2. For any arbitrary input signal $x(t)$:\n$$Y(s) = H(s) X(s)$$\nTaking the inverse Laplace transform using the convolution theorem:\n$$\\mathbf{y(t) = \\int_0^t x(\\tau) h(t - \\tau)\\,d\\tau}$$\n\n---\n\n### 3. Physical Interpretation\n1. Any arbitrary input waveform $x(t)$ can be conceptualized as a continuous train of infinitesimally narrow impulses of strength $x(\\tau) d\\tau$.\n2. Each impulse at time $\\tau$ triggers an impulse response $h(t - \\tau)$ delayed by $\\tau$.\n3. By the superposition property of linear networks, the total output at time $t$ is the continuous summation (integral) of all weighted, delayed impulse responses.",
      "detailedLearning": "### Commutative and Associative Properties\n$$f_1(t) * f_2(t) = f_2(t) * f_1(t)$$\n$$f_1 * (f_2 * f_3) = (f_1 * f_2) * f_3$$"
    }
  },
  {
    "id": "cas-u5-q10",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Integrator circuits",
    "title": "RC Integrator Circuit: Condition RC >> T & Square-Wave Response",
    "questionText": "Explain the operation of an RC Integrator circuit. Derive the condition RC >> T and draw the input and output waveforms for a square-wave input.",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2023",
      "2024 Test"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2023 & 2024 Internal Test",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### RC Integrator Essentials\n- Circuit: Input $v_{in}$ applied across series $R$, output $v_{out}$ taken across capacitor $C$.\n- **Condition for True Integration**:\n$$R C \\gg T \\quad (\\tau \\gg T)$$\nwhere $T$ is the period or pulse duration of input.\n- **Output Equation**:\n$$v_{out}(t) \\approx \\frac{1}{R C} \\int_0^t v_{in}(\\tau)\\,d\\tau$$\n- **Response to Square Wave**: Output is a **symmetrical triangular wave**.",
      "examAnswer": "### 1. Circuit Schematic of RC Low-Pass Integrator\n\n```\n             +---[  R  ]---+---(+) Output v_out(t) across C\n             |             |\n     v_in(t) ~           [ C ]\n             |             |\n             +-------------+---(-)\n```\n\nApplying KVL to the loop:\n$$v_{in}(t) = v_R(t) + v_{out}(t) = R i(t) + v_{out}(t)$$\nSince the output is taken across the capacitor:\n$$v_{out}(t) = \\frac{1}{C} \\int i(t)\\,dt \\implies i(t) = C \\frac{dv_{out}}{dt}$$\nSubstitute $i(t)$ into the KVL equation:\n$$v_{in}(t) = R C \\frac{dv_{out}}{dt} + v_{out}(t)$$\n\n---\n\n### 2. Derivation of the Integration Condition ($R C \\gg T$)\nIf the circuit parameters are selected such that the time constant $\\tau = RC$ is very large compared to the input period $T$ ($RC \\gg T$):\nThe capacitor charges very slowly, keeping the output voltage across the capacitor negligibly small compared to the input voltage drop across the resistor:\n$$v_{out}(t) \\ll v_R(t) \\implies v_{out}(t) \\ll R C \\frac{dv_{out}}{dt}$$\nUnder this condition, the $v_{out}(t)$ term can be neglected in the KVL equation:\n$$v_{in}(t) \\approx R C \\frac{dv_{out}}{dt}$$\nIntegrating both sides:\n$$\\mathbf{v_{out}(t) \\approx \\frac{1}{R C} \\int_0^t v_{in}(\\tau)\\,d\\tau}$$\nThe output voltage is strictly proportional to the **mathematical integral** of the input signal.\n\n---\n\n### 3. Response to Square-Wave Input\nWhen a symmetrical square wave of amplitude $\\pm V$ and half-period $T/2$ is applied:\n1. During positive half-cycle ($v_{in} = +V$):\n$$v_{out}(t) = \\frac{V}{RC} t \\quad \\text{(linearly rising ramp)}$$\n2. During negative half-cycle ($v_{in} = -V$):\n$$v_{out}(t) = -\\frac{V}{RC} t \\quad \\text{(linearly falling ramp)}$$\nThe resulting steady-state output waveform is a **continuous triangular wave**.\n\n```\n Input Square Wave:\n     +V +-------+       +-------+\n        |       |       |       |\n     -V +       +-------+       +-------+\n\n Output Waveform (RC >> T): Triangular Wave\n        /\\     /\\     /\\\n       /  \\   /  \\   /  \\\n      /    \\ /    \\ /    \\\n```",
      "detailedLearning": "### What if RC << T?\nIf $RC \\ll T$, the capacitor charges and discharges almost instantaneously, so $v_{out}(t) \\approx v_{in}(t)$ (the output simply reproduces the input square wave with slightly rounded corners)."
    }
  },
  {
    "id": "cas-u5-q11",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Differentiator circuits",
    "title": "RC Differentiator Circuit: Condition RC << T & Spikes Generation",
    "questionText": "Explain the operation of an RC Differentiator circuit. Derive the condition RC << T and draw the input and output waveforms for a square-wave input.",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2023 & Dec 2022",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### RC Differentiator Essentials\n- Circuit: Input $v_{in}$ applied across series $C$, output $v_{out}$ taken across resistor $R$.\n- **Condition for True Differentiation**:\n$$R C \\ll T \\quad (\\tau \\ll T)$$\n- **Output Equation**:\n$$v_{out}(t) \\approx R C \\frac{dv_{in}}{dt}$$\n- **Response to Square Wave**: Output produces sharp **positive and negative spikes (pulses)** at the switching edges.",
      "examAnswer": "### 1. Circuit Schematic of RC High-Pass Differentiator\n\n```\n             +---[  C  ]---+---(+) Output v_out(t) across R\n             |             |\n     v_in(t) ~           [ R ]\n             |             |\n             +-------------+---(-)\n```\n\nApplying KVL:\n$$v_{in}(t) = v_C(t) + v_{out}(t)$$\nSince current through the loop is $i(t) = \\frac{v_{out}(t)}{R}$:\n$$v_C(t) = \\frac{1}{C} \\int i(t) dt = \\frac{1}{R C} \\int v_{out}(t) dt$$\nSubstitute into KVL:\n$$v_{in}(t) = \\frac{1}{R C} \\int v_{out}(t) dt + v_{out}(t)$$\n\n---\n\n### 2. Derivation of Differentiation Condition ($R C \\ll T$)\nIf the time constant $\\tau = RC$ is designed to be extremely small compared to input pulse duration $T$ ($RC \\ll T$):\nThe capacitor charges almost instantaneously to $v_{in}(t)$, meaning $v_C(t) \\gg v_{out}(t)$.\nThus, the term $v_{out}(t)$ in the KVL equation can be neglected:\n$$v_{in}(t) \\approx \\frac{1}{R C} \\int v_{out}(t) dt$$\nDifferentiating both sides with respect to $t$:\n$$\\mathbf{v_{out}(t) \\approx R C \\frac{dv_{in}}{dt}}$$\nThe output voltage is directly proportional to the **mathematical rate of change (derivative)** of the input signal.\n\n---\n\n### 3. Response to Square-Wave Input\n1. At the **rising edge** of the square wave ($t = 0$):\n   $v_{in}$ jumps from $-V$ to $+V$ with a step change of $+2V$ in zero time ($dv/dt \\to +\\infty$).\n   Capacitor acts as a short circuit, delivering a **positive voltage spike of $+2V$** across $R$, which decays to zero with time constant $\\tau = RC$.\n2. During the flat top of the pulse:\n   $v_{in} = +V = \\text{constant} \\implies \\frac{dv_{in}}{dt} = 0 \\implies v_{out} = 0$.\n3. At the **falling edge** ($t = T/2$):\n   $v_{in}$ drops from $+V$ to $-V$ ($\\Delta V = -2V$).\n   A **negative voltage spike of $-2V$** is generated across $R$, decaying to zero with time constant $\\tau = RC$.\n\n```\n Input Square Wave:\n     +V +-------+       +-------+\n        |       |       |       |\n     -V +       +-------+       +-------+\n\n Output Waveform (RC << T): Sharp Pulses/Spikes\n        |               |\n        |               |\n     ---+---+-------+---+---+------------> Time\n            |               |\n            |               |\n```",
      "detailedLearning": "### Practical Use: Trigger Pulse Generation\nRC differentiators are used as **peaking circuits** to generate ultra-sharp triggering pulses for thyristors (SCRs), flip-flops, and digital clock edges from slow square or trapezoidal waves."
    }
  },
  {
    "id": "cas-u5-q12",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Fundamentals of filters",
    "title": "Passive Low-Pass & High-Pass Filters: Transfer Functions & Cutoff",
    "questionText": "Explain the fundamentals of passive RC and RL filters. Derive the voltage transfer functions and cutoff frequencies for low-pass and high-pass filters.",
    "marks": 7,
    "priority": "high",
    "type": "derivation",
    "years": [
      "2023",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2023 & Dec 2019",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Passive Filter Essentials\n- **Low-Pass Filter (LPF - RC)**:\n$$H(s) = \\frac{1}{1 + sRC} = \\frac{1}{1 + j\\omega/\\omega_c}, \\quad \\omega_c = \\frac{1}{RC}$$\n  - Passes DC up to $\\omega_c$; attenuates frequencies above $\\omega_c$ at $-20\\,\\text{dB/decade}$.\n- **High-Pass Filter (HPF - RC)**:\n$$H(s) = \\frac{sRC}{1 + sRC} = \\frac{j\\omega/\\omega_c}{1 + j\\omega/\\omega_c}, \\quad \\omega_c = \\frac{1}{RC}$$\n  - Blocks DC; passes frequencies above $\\omega_c$.\n- **Cutoff Frequency**: Frequency where $|H(j\\omega_c)| = \\frac{1}{\\sqrt{2}} \\approx 0.707$ ($-3\\,\\text{dB}$ point).",
      "examAnswer": "### 1. Passive RC Low-Pass Filter (LPF)\nIn an RC low-pass filter, output is taken across the capacitor:\n$$H(s) = \\frac{V_{out}(s)}{V_{in}(s)} = \\frac{1/sC}{R + 1/sC} = \\mathbf{\\frac{1}{1 + s R C}}$$\nSetting $s = j\\omega$:\n$$H(j\\omega) = \\frac{1}{1 + j\\omega R C}$$\nMagnitude response:\n$$|H(j\\omega)| = \\frac{1}{\\sqrt{1 + (\\omega R C)^2}}$$\n\n#### Cutoff Frequency ($\\omega_c$):\nThe cutoff (half-power) frequency is defined where gain drops to $1/\\sqrt{2}$:\n$$|H(j\\omega_c)| = \\frac{1}{\\sqrt{2}} \\implies \\sqrt{1 + (\\omega_c R C)^2} = \\sqrt{2}$$\n$$1 + (\\omega_c R C)^2 = 2 \\implies \\omega_c R C = 1$$\n$$\\mathbf{\\omega_c = \\frac{1}{R C}\\,\\text{rad/s}} \\implies \\mathbf{f_c = \\frac{1}{2\\pi R C}\\,\\text{Hz}}$$\n\n---\n\n### 2. Passive RC High-Pass Filter (HPF)\nIn an RC high-pass filter, output is taken across the resistor:\n$$H(s) = \\frac{V_{out}(s)}{V_{in}(s)} = \\frac{R}{R + 1/sC} = \\mathbf{\\frac{s R C}{1 + s R C}}$$\nSetting $s = j\\omega$:\n$$H(j\\omega) = \\frac{j\\omega R C}{1 + j\\omega R C}$$\nMagnitude response:\n$$|H(j\\omega)| = \\frac{\\omega R C}{\\sqrt{1 + (\\omega R C)^2}}$$\nAt cutoff frequency $\\omega_c = \\frac{1}{RC}$:\n$$|H(j\\omega_c)| = \\frac{1}{\\sqrt{1 + 1}} = \\frac{1}{\\sqrt{2}} \\approx 0.7071$$\n\n---\n\n### 3. Frequency Response Comparison\n\n```\n  Gain |H(jw)|\n    ^\n1.0 +-------......                    ......-------+ (HPF)\n    |             \\                  /\n0.7 |(LPF)         \\                /\n    |               \\              /\n    |                \\            /\n    +-----------------+----------+-----------------> Frequency w\n    0                w_c (LPF)  w_c (HPF)\n```",
      "detailedLearning": "### Roll-Off Rate\nFor simple single-pole first-order passive filters, the attenuation slope beyond cutoff is $-20\\,\\text{dB/decade}$ (or $-6\\,\\text{dB/octave}$)."
    }
  },
  {
    "id": "cas-u5-q13",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "State-space equations",
    "title": "State-Space Representation of Electrical Networks",
    "questionText": "Explain the state-space representation of electrical networks. Define state variables, state vector, and derive the standard matrix state equation and output equation.",
    "marks": 7,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2022 University Exam",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### State-Space Matrix Form\n- **State Vector $x(t)$**: Minimal set of internal variables that completely describe system memory (typically capacitor voltages $v_C$ and inductor currents $i_L$).\n- **State Differential Equation**:\n$$\\dot{\\mathbf{x}}(t) = \\mathbf{A} \\mathbf{x}(t) + \\mathbf{B} \\mathbf{u}(t)$$\n  - $\\mathbf{A}$: System matrix ($n \\times n$).\n  - $\\mathbf{B}$: Input coupling matrix ($n \\times m$).\n- **Output Equation**:\n$$\\mathbf{y}(t) = \\mathbf{C} \\mathbf{x}(t) + \\mathbf{D} \\mathbf{u}(t)$$\n  - $\\mathbf{C}$: Output matrix ($p \\times n$).\n  - $\\mathbf{D}$: Direct transmission / feedthrough matrix ($p \\times m$).",
      "examAnswer": "### 1. Fundamental Concept\nThe state-space method represents an $n$-th order continuous dynamic electrical network by a system of $n$ coupled first-order differential equations in matrix form, rather than a single cumbersome $n$-th order differential equation.\n\n---\n\n### 2. Selection of State Variables\nIn electrical networks, the natural state variables are chosen as the physical **energy storage variables**:\n1. Inductor currents: $i_L(t)$ (representing magnetic energy storage $\\frac{1}{2} L i^2$).\n2. Capacitor voltages: $v_C(t)$ (representing electrostatic energy storage $\\frac{1}{2} C v^2$).\n\nIf a circuit has $n_L$ independent inductors and $n_C$ independent capacitors, the system order is:\n$$n = n_L + n_C$$\nThe state vector is:\n$$\\mathbf{x}(t) = \\begin{bmatrix} v_{C1}(t) \\\\ \\vdots \\\\ i_{L1}(t) \\\\ \\vdots \\end{bmatrix}_{n \\times 1}$$\n\n---\n\n### 3. The Standard State-Space Equations\n\n#### (a) State Equation (Dynamic Equation):\n$$\\mathbf{\\dot{x}(t) = A x(t) + B u(t)}$$\nwhere:\n- $\\mathbf{x}(t)$ is the $n \\times 1$ state vector.\n- $\\mathbf{\\dot{x}}(t) = \\frac{d\\mathbf{x}}{dt}$ is the time derivative vector.\n- $\\mathbf{u}(t)$ is the $m \\times 1$ input vector (independent voltage/current sources).\n- $\\mathbf{A}$ is the $n \\times n$ system dynamics matrix.\n- $\\mathbf{B}$ is the $n \\times m$ input distribution matrix.\n\n#### (b) Output Equation (Measurement Equation):\n$$\\mathbf{y(t) = C x(t) + D u(t)}$$\nwhere:\n- $\\mathbf{y}(t)$ is the $p \\times 1$ desired output vector (branch voltages/currents).\n- $\\mathbf{C}$ is the $p \\times n$ output selection matrix.\n- $\\mathbf{D}$ is the $p \\times m$ feedforward matrix.\n\n---\n\n### 4. Relation to Transfer Function\nTaking the Laplace transform under zero initial conditions:\n$$s \\mathbf{X}(s) = \\mathbf{A} \\mathbf{X}(s) + \\mathbf{B} \\mathbf{U}(s) \\implies (s \\mathbf{I} - \\mathbf{A}) \\mathbf{X}(s) = \\mathbf{B} \\mathbf{U}(s)$$\n$$\\mathbf{X}(s) = (s \\mathbf{I} - \\mathbf{A})^{-1} \\mathbf{B} \\mathbf{U}(s)$$\nSubstitute into output equation:\n$$\\mathbf{Y}(s) = \\left[ \\mathbf{C} (s \\mathbf{I} - \\mathbf{A})^{-1} \\mathbf{B} + \\mathbf{D} \\right] \\mathbf{U}(s)$$\nTransfer function matrix:\n$$\\mathbf{H}(s) = \\mathbf{C} (s \\mathbf{I} - \\mathbf{A})^{-1} \\mathbf{B} + \\mathbf{D}$$\nThe system poles are the roots of $\\det(s \\mathbf{I} - \\mathbf{A}) = 0$ (eigenvalues of matrix $\\mathbf{A}$).",
      "detailedLearning": "### Modern Simulation Relevance\nEvery circuit simulator (including MATLAB/Simulink and state-variable SPICE models) converts schematic topologies directly into state-space matrix format for numerical Runge-Kutta time-stepping."
    }
  },
  {
    "id": "cas-u5-q14",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Impulse and step responses of RL circuits",
    "title": "Series RL Circuit Numerical: Current at Time t & Rate of Rise",
    "questionText": "In a series RL circuit with R = 20 ohms and L = 0.5 H, a DC voltage V = 100 V is applied at t = 0. Find: (a) the current at t = 0.05 s, (b) the initial rate of rise of current, and (c) the time required for current to reach 90% of its final steady-state value.",
    "marks": 7,
    "priority": "very_high",
    "type": "numerical",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2023 University Exam Numerical",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Quick Numerical Solution\n- $\\tau = L/R = 0.5 / 20 = 0.025\\,\\text{s}$.\n- Steady-state current: $I_0 = V/R = 100 / 20 = 5.0\\,\\text{A}$.\n- (a) At $t = 0.05\\,\\text{s} = 2\\tau$: $i(0.05) = 5(1 - e^{-2}) = 5(1 - 0.1353) = 4.323\\,\\text{A}$.\n- (b) Initial rate of rise: $\\frac{di}{dt}(0^+) = \\frac{V}{L} = \\frac{100}{0.5} = 200\\,\\text{A/s}$.\n- (c) Time for $90\\%$ current: $1 - e^{-t/\\tau} = 0.9 \\implies e^{-t/\\tau} = 0.1 \\implies t = \\tau \\ln(10) = 0.025 \\times 2.3026 = 0.0576\\,\\text{s}$ ($57.6\\,\\text{ms}$).",
      "examAnswer": "### 1. Given Data\n- Resistance: $R = 20\\,\\Omega$\n- Inductance: $L = 0.5\\,\\text{H}$\n- DC Voltage: $V = 100\\,\\text{V}$\n- Initial current: $i(0^-) = 0$\n\n---\n\n### 2. Step-by-Step Calculations\n\n#### Step 1: Calculate Circuit Parameters\n- Steady-state final current:\n$$I_0 = \\frac{V}{R} = \\frac{100\\,\\text{V}}{20\\,\\Omega} = \\mathbf{5.0\\,\\text{A}}$$\n- Time constant:\n$$\\tau = \\frac{L}{R} = \\frac{0.5}{20} = \\mathbf{0.025\\,\\text{s} = 25\\,\\text{ms}}$$\n\n#### Step 2: Current at $t = 0.05\\,\\text{s}$\nGeneral current equation:\n$$i(t) = I_0 \\left(1 - e^{-t/\\tau}\\right) = 5 \\left(1 - e^{-t/0.025}\\right)$$\nAt $t = 0.05\\,\\text{s}$:\n$$\\frac{t}{\\tau} = \\frac{0.05}{0.025} = 2$$\n$$i(0.05) = 5 \\left(1 - e^{-2}\\right) = 5 \\left(1 - 0.135335\\right) = 5 \\times 0.864665 = \\mathbf{4.323\\,\\text{A}}$$\n\n#### Step 3: Initial Rate of Rise of Current at $t = 0^+$\nAt $t = 0^+$, inductor is uncharged, so $i(0^+) = 0$.\nApplying KVL:\n$$V = R i(0^+) + L \\left.\\frac{di}{dt}\\right|_{t=0^+} = 0 + L \\left.\\frac{di}{dt}\\right|_{t=0^+}$$\n$$\\left.\\frac{di}{dt}\\right|_{t=0^+} = \\frac{V}{L} = \\frac{100\\,\\text{V}}{0.5\\,\\text{H}} = \\mathbf{200\\,\\text{A/s}}$$\n\n#### Step 4: Time Required to Reach $90\\%$ of Final Steady-State Value\n$$i(t_1) = 0.90 \\times I_0$$\n$$I_0 \\left(1 - e^{-t_1/\\tau}\\right) = 0.90 I_0$$\n$$1 - e^{-t_1/\\tau} = 0.90 \\implies e^{-t_1/\\tau} = 0.10$$\nTaking natural logarithms:\n$$-\\frac{t_1}{\\tau} = \\ln(0.10) = -2.302585$$\n$$t_1 = 2.302585 \\times \\tau = 2.302585 \\times 0.025\\,\\text{s} \\approx \\mathbf{0.05756\\,\\text{s} = 57.56\\,\\text{ms}}$$\n\n---\n\n### 3. Summary of Results\n- (a) Current at $t = 0.05\\,\\text{s}$: $\\mathbf{4.323\\,\\text{A}}$\n- (b) Initial rate of rise of current: $\\mathbf{200\\,\\text{A/s}}$\n- (c) Time to reach $90\\%$ current: $\\mathbf{57.56\\,\\text{ms}}$",
      "detailedLearning": "### Comparison with RC Time\nReaching $99\\%$ takes $t = \\tau \\ln(100) = 4.6 \\tau \\approx 5\\tau$.",
      "numericalSolution": {
        "given": [
          "R = 20 ohms, L = 0.5 H, V = 100 V",
          "t_a = 0.05 s"
        ],
        "toFind": "i(0.05), di/dt(0+), time to 90% current",
        "formula": "i(t) = (V/R)*(1 - e^(-t/tau)); di/dt(0+) = V/L; t_90 = tau * ln(10)",
        "stepByStepSolution": [
          "Step 1: tau = 0.5 / 20 = 0.025 s, I_0 = 100 / 20 = 5 A",
          "Step 2: i(0.05) = 5 * (1 - e^-2) = 5 * (1 - 0.1353) = 4.323 A",
          "Step 3: di/dt(0+) = 100 / 0.5 = 200 A/s",
          "Step 4: t_90 = 0.025 * ln(10) = 0.025 * 2.3026 = 57.56 ms"
        ],
        "substitution": "i(0.05) = 5 * (1 - 0.1353)",
        "calculation": "4.323 A",
        "finalAnswer": "i = 4.323 A, di/dt = 200 A/s, t_90 = 57.56 ms",
        "units": "A, A/s, ms",
        "explanation": "Evaluated using first-order RL transient equations."
      }
    }
  },
  {
    "id": "cas-u5-q15",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Impulse and step responses of RC circuits",
    "title": "Series RC Circuit Numerical: Capacitor Voltage & Charging Duration",
    "questionText": "A series RC circuit with R = 50 k-ohms and C = 20 microfarads is connected to a 100V DC source at t = 0. Find: (a) initial charging current, (b) voltage across capacitor after 2 seconds, and (c) time required for capacitor voltage to reach 80V.",
    "marks": 7,
    "priority": "very_high",
    "type": "numerical",
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2022 University Exam Numerical",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Quick Numerical Steps\n- $\\tau = RC = 50 \\times 10^3 \\times 20 \\times 10^{-6} = 1.0\\,\\text{s}$.\n- (a) Initial current: $I_0 = V / R = 100 / 50000 = 2\\,\\text{mA}$.\n- (b) Voltage at $t = 2\\,\\text{s} = 2\\tau$: $v_C(2) = 100(1 - e^{-2}) = 100(1 - 0.1353) = 86.47\\,\\text{V}$.\n- (c) Time for $v_C = 80\\,\\text{V}$: $80 = 100(1 - e^{-t/1}) \\implies e^{-t} = 0.20 \\implies t = \\ln(5) = 1.609\\,\\text{s}$.",
      "examAnswer": "### 1. Given Data\n- Resistance: $R = 50\\,\\text{k}\\Omega = 50,000\\,\\Omega$\n- Capacitance: $C = 20\\,\\mu\\text{F} = 20 \\times 10^{-6}\\,\\text{F}$\n- Applied voltage: $V = 100\\,\\text{V}$\n- Initial capacitor charge: $v_C(0^-) = 0$\n\n---\n\n### 2. Step-by-Step Calculations\n\n#### Step 1: Calculate Time Constant ($\\tau$)\n$$\\tau = R C = (50 \\times 10^3\\,\\Omega) \\times (20 \\times 10^{-6}\\,\\text{F}) = \\mathbf{1.0\\,\\text{s}}$$\n\n#### Step 2: Initial Charging Current at $t = 0^+$\nAt the instant of switch closure, the uncharged capacitor behaves as an ideal short circuit ($v_C(0^+) = 0$).\n$$i(0^+) = \\frac{V}{R} = \\frac{100\\,\\text{V}}{50,000\\,\\Omega} = 2 \\times 10^{-3}\\,\\text{A} = \\mathbf{2.0\\,\\text{mA}}$$\n\n#### Step 3: Capacitor Voltage after $t = 2.0\\,\\text{s}$\nGeneral voltage equation:\n$$v_C(t) = V \\left(1 - e^{-t/\\tau}\\right) = 100 \\left(1 - e^{-t/1.0}\\right)$$\nAt $t = 2.0\\,\\text{s}$:\n$$v_C(2) = 100 \\left(1 - e^{-2}\\right) = 100(1 - 0.135335) = 100 \\times 0.864665 = \\mathbf{86.47\\,\\text{V}}$$\n\n#### Step 4: Time Required for Voltage to Reach $80\\,\\text{V}$\nSet $v_C(t_1) = 80\\,\\text{V}$:\n$$80 = 100 \\left(1 - e^{-t_1/1.0}\\right)$$\n$$\\frac{80}{100} = 1 - e^{-t_1} \\implies 0.80 = 1 - e^{-t_1}$$\n$$e^{-t_1} = 0.20$$\nTaking natural logarithms:\n$$-t_1 = \\ln(0.20) = -1.6094$$\n$$\\mathbf{t_1 = 1.609\\,\\text{s}}$$\n\n---\n\n### 3. Summary of Results\n- (a) Initial charging current: $\\mathbf{2.0\\,\\text{mA}}$\n- (b) Capacitor voltage at $t = 2\\,\\text{s}$: $\\mathbf{86.47\\,\\text{V}}$\n- (c) Time to reach $80\\,\\text{V}$: $\\mathbf{1.609\\,\\text{s}}$",
      "detailedLearning": "### Energy Check\nAt $t = 2\\,\\text{s}$, stored energy:\n$$W_C = \\frac{1}{2} C v_C^2 = \\frac{1}{2} (20 \\times 10^{-6}) (86.47)^2 = 0.0748\\,\\text{J}$$",
      "numericalSolution": {
        "given": [
          "R = 50 k-ohms, C = 20 uF, V = 100 V"
        ],
        "toFind": "i(0+), v_C(2 s), time to 80 V",
        "formula": "tau = R*C; i(0+) = V/R; v_C(t) = V*(1 - e^(-t/tau)); t = -tau*ln(1 - v/V)",
        "stepByStepSolution": [
          "Step 1: tau = 50,000 * 20e-6 = 1.0 s",
          "Step 2: i(0+) = 100 / 50000 = 2.0 mA",
          "Step 3: v_C(2) = 100 * (1 - e^-2) = 86.47 V",
          "Step 4: t = -1.0 * ln(1 - 80/100) = -ln(0.2) = 1.609 s"
        ],
        "substitution": "t = -ln(0.2)",
        "calculation": "1.609 s",
        "finalAnswer": "i(0+) = 2.0 mA, v_C(2s) = 86.47 V, t = 1.609 s",
        "units": "mA, V, s",
        "explanation": "Calculated via first-order RC charging transient formulas."
      }
    }
  },
  {
    "id": "cas-u5-q16",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Initial conditions",
    "title": "Higher-Order Derivatives Numerical in Series RLC Circuit",
    "questionText": "In an initially uncharged series RLC circuit with R = 4 ohms, L = 1 H, and C = 0.25 F, a 24V DC battery is connected at t = 0. Find: i(0+), di/dt(0+), and d^2i/dt^2(0+).",
    "marks": 7,
    "priority": "very_high",
    "type": "numerical",
    "years": [
      "2024 Test"
    ],
    "sourcePaperType": "internal_test",
    "isSupplementaryTopic": false,
    "frequency": "2024 Internal Test",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Quick Derivatives Calculation\n- $i(0^+) = i(0^-) = 0\\,\\text{A}$.\n- $v_C(0^+) = v_C(0^-) = 0\\,\\text{V}$.\n- KVL at $t=0^+$: $R i(0^+) + L \\frac{di}{dt}(0^+) + v_C(0^+) = V$.\n  $$4(0) + 1 \\cdot \\frac{di}{dt}(0^+) + 0 = 24 \\implies \\mathbf{\\frac{di}{dt}(0^+) = 24\\,\\text{A/s}}$$.\n- Differentiated KVL: $R \\frac{di}{dt} + L \\frac{d^2i}{dt^2} + \\frac{i}{C} = 0$.\n  $$4(24) + 1 \\cdot \\frac{d^2i}{dt^2}(0^+) + \\frac{0}{0.25} = 0 \\implies \\mathbf{\\frac{d^2i}{dt^2}(0^+) = -96\\,\\text{A/s}^2}$$.",
      "examAnswer": "### 1. Given Circuit Values\n- $R = 4\\,\\Omega$\n- $L = 1\\,\\text{H}$\n- $C = 0.25\\,\\text{F}$\n- Applied DC voltage: $V = 24\\,\\text{V}$\n- Circuit is uncharged before switching: $i(0^-) = 0\\,\\text{A}$ and $v_C(0^-) = 0\\,\\text{V}$.\n\n---\n\n### 2. Step-by-Step Derivations at $t = 0^+$\n\n#### Step 1: Current at $t = 0^+$\nBy inductor current continuity:\n$$\\mathbf{i(0^+) = i(0^-) = 0\\,\\text{A}}$$\n\n#### Step 2: First Derivative $\\frac{di}{dt}(0^+)$\nWrite Kirchhoff's Voltage Law for the series loop for $t \\ge 0$:\n$$R i(t) + L \\frac{di(t)}{dt} + v_C(t) = V$$\nEvaluate this expression at the instant $t = 0^+$:\n$$R i(0^+) + L \\left.\\frac{di}{dt}\\right|_{t=0^+} + v_C(0^+) = V$$\nSubstitute known values ($i(0^+) = 0$, $v_C(0^+) = 0$, $V = 24$, $L = 1$):\n$$4(0) + (1) \\left.\\frac{di}{dt}\\right|_{t=0^+} + 0 = 24$$\n$$\\mathbf{\\left.\\frac{di}{dt}\\right|_{t=0^+} = 24\\,\\text{A/s}}$$\n\n#### Step 3: Second Derivative $\\frac{d^2i}{dt^2}(0^+)$\nDifferentiate the KVL equation with respect to time $t$:\n$$R \\frac{di(t)}{dt} + L \\frac{d^2i(t)}{dt^2} + \\frac{dv_C(t)}{dt} = 0$$\nSince current through capacitor is $i(t) = C \\frac{dv_C}{dt} \\implies \\frac{dv_C}{dt} = \\frac{i(t)}{C}$:\n$$R \\frac{di(t)}{dt} + L \\frac{d^2i(t)}{dt^2} + \\frac{i(t)}{C} = 0$$\nNow evaluate this derivative at $t = 0^+$:\n$$R \\left.\\frac{di}{dt}\\right|_{t=0^+} + L \\left.\\frac{d^2i}{dt^2}\\right|_{t=0^+} + \\frac{i(0^+)}{C} = 0$$\nSubstitute known values:\n$$4(24) + (1) \\left.\\frac{d^2i}{dt^2}\\right|_{t=0^+} + \\frac{0}{0.25} = 0$$\n$$96 + \\left.\\frac{d^2i}{dt^2}\\right|_{t=0^+} = 0$$\n$$\\mathbf{\\left.\\frac{d^2i}{dt^2}\\right|_{t=0^+} = -96\\,\\text{A/s}^2}$$\n\n---\n\n### 3. Summary of Results\n- (a) Initial current: $\\mathbf{i(0^+) = 0\\,\\text{A}}$\n- (b) Initial rate of rise: $\\mathbf{\\frac{di}{dt}(0^+) = 24\\,\\text{A/s}}$\n- (c) Initial curvature: $\\mathbf{\\frac{d^2i}{dt^2}(0^+) = -96\\,\\text{A/s}^2}$",
      "detailedLearning": "### Physical Significance of Negative Second Derivative\nA positive first derivative ($+24$) means current is increasing initially. A negative second derivative ($-96$) means the rate of rise is slowing down (concave downwards), heading toward peak current before damping out."
    }
  },
  {
    "id": "cas-u5-q17",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Time constant",
    "title": "Time Constant Percentages: 1 tau, 2 tau, 3 tau, 4 tau, 5 tau",
    "questionText": "Define the time constant of an RL circuit and an RC circuit. What percentage of the final steady-state value is reached in: 1 tau, 2 tau, 3 tau, 4 tau, and 5 tau?",
    "marks": 3,
    "priority": "very_high",
    "type": "conceptual",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Dec 2023 Short Conceptual Question",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Time Constant Multiples Table\n| Time ($t$) | Growth $(1 - e^{-t/\\tau}) \\times 100\\%$ | Decay $e^{-t/\\tau} \\times 100\\%$ |\n|---|---|---|\n| $1\\tau$ | **$63.21\\%$** | **$36.79\\%$** |\n| $2\\tau$ | **$86.47\\%$** | **$13.53\\%$** |\n| $3\\tau$ | **$95.02\\%$** | **$4.98\\%$** |\n| $4\\tau$ | **$98.17\\%$** | **$1.83\\%$** |\n| $5\\tau$ | **$99.33\\%$** | **$0.67\\%$** |",
      "examAnswer": "### 1. Definitions of Time Constant\n- **RL Circuit Time Constant ($\\tau = L/R$)**: The time taken by the current to reach $63.2\\%$ of its final maximum value during growth, or decay to $36.8\\%$ during decay.\n- **RC Circuit Time Constant ($\\tau = RC$)**: The time taken by the capacitor voltage to charge to $63.2\\%$ of the applied supply voltage.\n\n---\n\n### 2. Percentages Reached at Successive Time Constants\n\n$$y(t) = 1 - e^{-t/\\tau}$$\n\n1. **At $t = 1\\tau$**:\n   $1 - e^{-1} = 1 - 0.3679 = \\mathbf{63.2\\%}$\n2. **At $t = 2\\tau$**:\n   $1 - e^{-2} = 1 - 0.1353 = \\mathbf{86.5\\%}$\n3. **At $t = 3\\tau$**:\n   $1 - e^{-3} = 1 - 0.0498 = \\mathbf{95.0\\%}$\n4. **At $t = 4\\tau$**:\n   $1 - e^{-4} = 1 - 0.0183 = \\mathbf{98.2\\%}$\n5. **At $t = 5\\tau$**:\n   $1 - e^{-5} = 1 - 0.0067 = \\mathbf{99.3\\%}$\n\nBy engineering convention, the transient period is considered completely finished after **$5\\tau$** ($> 99\\%$ settled).",
      "detailedLearning": "### Settling Time Criterion\nIn classical control theory, settling time within $2\\%$ error band is defined as $t_s = 4\\tau$; within $5\\%$ error band it is $t_s = 3\\tau$."
    }
  },
  {
    "id": "cas-u5-q18",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Initial conditions",
    "title": "Why Inductor Current Cannot Change Instantaneously",
    "questionText": "Why can current through an inductor not change instantaneously? Under what special circumstance can it change abruptly?",
    "marks": 3,
    "priority": "very_high",
    "type": "conceptual",
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2022 Examination",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Inductor Continuity Nuance\n- $v_L(t) = L \\frac{di}{dt}$.\n- An instantaneous step in current ($\\Delta i \\neq 0$ at $\\Delta t = 0$) requires **infinite voltage** ($v = \\infty$), which cannot be produced by finite physical energy sources.\n- **Exception**: Current CAN change abruptly if the circuit is driven by an idealized **impulse voltage source $\\delta(t)$**, where $\\int v\\,dt = \\Lambda$ delivers a finite flux quantum in zero time.",
      "examAnswer": "### 1. General Prohibition on Abrupt Current Change\nThe terminal relationship for an inductor is:\n$$v_L(t) = L \\frac{di_L}{dt}$$\nIf the current through the inductor were to change by a finite amount $\\Delta i$ in zero elapsed time ($\\Delta t \\to 0$):\n$$\\frac{di_L}{dt} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta i}{\\Delta t} = \\infty \\implies v_L(t) = \\infty\\,\\text{V}$$\nFurthermore, the energy stored in the magnetic field is:\n$$W_L = \\frac{1}{2} L i_L^2$$\nAn instantaneous change in stored energy requires infinite power:\n$$P = \\frac{dW_L}{dt} = \\infty\\,\\text{W}$$\nSince infinite voltage and infinite power do not exist in physically realizable systems, **inductor current cannot change instantaneously under finite excitations**.\n\n---\n\n### 2. The Theoretical Exception: Impulse Voltage Excitation\nAn inductor current CAN jump discontinuously if the circuit is struck by a **Dirac delta impulse voltage $v(t) = K \\delta(t)$**:\n$$i_L(0^+) - i_L(0^-) = \\frac{1}{L} \\int_{0^-}^{0^+} v_L(t)\\,dt = \\frac{1}{L} \\int_{0^-}^{0^+} K \\delta(t)\\,dt = \\frac{K}{L}$$\nBecause an ideal impulse contains infinite voltage over zero duration, its area (flux linkage $\\lambda$) is finite, forcing an instantaneous jump in current of $\\Delta i = K / L$.",
      "detailedLearning": "### Practical High-Voltage Arcing\nWhen opening a switch on an inductive circuit, the air breaks down and an electric arc forms. The arc provides a conducting plasma path that ensures current continues to flow while gradually decaying, preserving $di/dt$ to finite limits."
    }
  },
  {
    "id": "cas-u5-q19",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Final value theorem",
    "title": "Numerical Verification of Initial and Final Value Theorems",
    "questionText": "Verify the Initial and Final Value Theorems for the transform function F(s) = (2s + 3) / [s(s + 1)(s + 2)].",
    "marks": 3,
    "priority": "very_high",
    "type": "numerical",
    "years": [
      "2025 Test"
    ],
    "sourcePaperType": "internal_test",
    "isSupplementaryTopic": true,
    "frequency": "2025 Internal Test",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Quick Verification\n- $F(s) = \\frac{2s + 3}{s(s + 1)(s + 2)}$.\n- **IVT**: $f(0^+) = \\lim_{s \\to \\infty} s F(s) = \\lim_{s \\to \\infty} \\frac{s(2s + 3)}{s(s + 1)(s + 2)} = \\lim_{s \\to \\infty} \\frac{2s + 3}{s^2 + 3s + 2} = 0$.\n- **FVT**: $f(\\infty) = \\lim_{s \\to 0} s F(s) = \\lim_{s \\to 0} \\frac{s(2s + 3)}{s(s + 1)(s + 2)} = \\frac{0 + 3}{(0 + 1)(0 + 2)} = \\frac{3}{2} = 1.5$.\n- Check via partial fractions: $F(s) = \\frac{1.5}{s} - \\frac{1}{s+1} - \\frac{0.5}{s+2} \\implies f(t) = 1.5 - e^{-t} - 0.5 e^{-2t}$.\n  - $f(0) = 1.5 - 1 - 0.5 = 0$ (IVT Verified).\n  - $f(\\infty) = 1.5 - 0 - 0 = 1.5$ (FVT Verified).",
      "examAnswer": "### 1. Verification of Initial Value Theorem\n$$F(s) = \\frac{2s + 3}{s(s + 1)(s + 2)}$$\nUsing IVT:\n$$f(0^+) = \\lim_{s \\to \\infty} s F(s) = \\lim_{s \\to \\infty} \\frac{s(2s + 3)}{s(s + 1)(s + 2)} = \\lim_{s \\to \\infty} \\frac{2s + 3}{s^2 + 3s + 2}$$\nDivide numerator and denominator by $s^2$:\n$$f(0^+) = \\lim_{s \\to \\infty} \\frac{2/s + 3/s^2}{1 + 3/s + 2/s^2} = \\frac{0 + 0}{1 + 0 + 0} = \\mathbf{0}$$\n\n---\n\n### 2. Verification of Final Value Theorem\nCheck poles of $s F(s) = \\frac{2s + 3}{(s + 1)(s + 2)}$.\nPoles are at $s = -1$ and $s = -2$ (both strictly in LHP). FVT is valid.\n$$f(\\infty) = \\lim_{s \\to 0} s F(s) = \\lim_{s \\to 0} \\frac{s(2s + 3)}{s(s + 1)(s + 2)} = \\lim_{s \\to 0} \\frac{2s + 3}{(s + 1)(s + 2)}$$\n$$f(\\infty) = \\frac{2(0) + 3}{(0 + 1)(0 + 2)} = \\frac{3}{2} = \\mathbf{1.5}$$\n\n---\n\n### 3. Cross-Verification via Time-Domain Solution\nExpanding $F(s)$ into partial fractions:\n$$F(s) = \\frac{A}{s} + \\frac{B}{s + 1} + \\frac{C}{s + 2}$$\n- $A = \\left. \\frac{2s + 3}{(s + 1)(s + 2)} \\right|_{s=0} = \\frac{3}{2} = 1.5$\n- $B = \\left. \\frac{2s + 3}{s(s + 2)} \\right|_{s=-1} = \\frac{-2 + 3}{-1(1)} = \\frac{1}{-1} = -1.0$\n- $C = \\left. \\frac{2s + 3}{s(s + 1)} \\right|_{s=-2} = \\frac{-4 + 3}{-2(-1)} = \\frac{-1}{2} = -0.5$\n\nTaking inverse Laplace transform:\n$$f(t) = 1.5 - e^{-t} - 0.5 e^{-2t} \\quad (t \\ge 0)$$\n- At $t = 0$: $f(0^+) = 1.5 - 1.0 - 0.5 = \\mathbf{0}$ (matches IVT).\n- At $t \\to \\infty$: $f(\\infty) = 1.5 - 0 - 0 = \\mathbf{1.5}$ (matches FVT).\nBoth theorems are rigorously verified.",
      "detailedLearning": "### Speed Benefit\nNotice how IVT and FVT allowed us to determine the initial and final values in 2 lines of math without doing partial fraction decomposition or inverse Laplace transforms."
    }
  },
  {
    "id": "cas-u5-q20",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Shifted-step functions",
    "title": "Shifted-Step Function: Waveform & Laplace Transform",
    "questionText": "Sketch the waveform of the shifted-step function f(t) = 5[u(t - 2) - u(t - 6)] and find its Laplace transform.",
    "marks": 3,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Dec 2019 University Exam",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Shifted Step Summary\n- Function: Rectangular pulse of amplitude $5\\,\\text{V}$ turning on at $t = 2\\,\\text{s}$ and turning off at $t = 6\\,\\text{s}$.\n- Width: $6 - 2 = 4\\,\\text{seconds}$.\n- Laplace Transform:\n$$F(s) = \\frac{5}{s}\\left(e^{-2s} - e^{-6s}\\right)$$",
      "examAnswer": "### 1. Waveform Description\n$$f(t) = 5 [u(t - 2) - u(t - 6)]$$\n- For $t < 2$: $u(t - 2) = 0$ and $u(t - 6) = 0 \\implies f(t) = 0$.\n- For $2 \\le t < 6$: $u(t - 2) = 1$ and $u(t - 6) = 0 \\implies f(t) = 5(1 - 0) = 5$.\n- For $t \\ge 6$: $u(t - 2) = 1$ and $u(t - 6) = 1 \\implies f(t) = 5(1 - 1) = 0$.\n\n```\n Amplitude f(t)\n    ^\n  5 +       +---------------+\n    |       |               |\n    |       |               |\n    +-------+---------------+---------> Time t (seconds)\n    0       2               6\n```\n\n---\n\n### 2. Laplace Transform Derivation\nUsing the linearity property and time-shifting property:\n$$\\mathcal{L}\\{u(t - T)\\} = \\frac{e^{-sT}}{s}$$\nApplying to $f(t)$:\n$$F(s) = 5 \\left[ \\mathcal{L}\\{u(t - 2)\\} - \\mathcal{L}\\{u(t - 6)\\} \\right]$$\n$$\\mathbf{F(s) = 5 \\left[ \\frac{e^{-2s}}{s} - \\frac{e^{-6s}}{s} \\right] = \\frac{5(e^{-2s} - e^{-6s})}{s}}$$",
      "detailedLearning": "### Gate Pulse Representation\nAny arbitrary piecewise-constant pulse train can be decomposed into a linear sum of shifted unit step functions."
    }
  },
  {
    "id": "cas-u5-q21",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Critically damped response",
    "title": "Critical Damping Condition & Significance in Galvanometers",
    "questionText": "What is the condition for a series RLC circuit to be critically damped? What is its physical significance in galvanometer design?",
    "marks": 3,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Dec 2023 University Exam",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Critical Damping\n- Condition: $\\alpha = \\omega_0 \\implies \\frac{R}{2L} = \\frac{1}{\\sqrt{LC}} \\implies \\mathbf{R = 2\\sqrt{\\frac{L}{C}}}$.\n- Critical Resistance: $R_c = 2\\sqrt{L/C}$.\n- **Damping Ratio**: $\\zeta = 1.0$.\n- **Galvanometer Significance**: Deadbeat response. The pointer swings rapidly and comes to rest at its steady deflection in minimum possible time **without oscillating back and forth**.",
      "examAnswer": "### 1. Condition for Critical Damping\nFor a series RLC circuit, the characteristic equation is:\n$$s^2 + \\left(\\frac{R}{L}\\right) s + \\frac{1}{LC} = 0$$\nRoots:\n$$s_{1,2} = -\\frac{R}{2L} \\pm \\sqrt{\\left(\\frac{R}{2L}\\right)^2 - \\frac{1}{LC}}$$\nCritical damping occurs when the discriminant equals zero:\n$$\\left(\\frac{R}{2L}\\right)^2 - \\frac{1}{LC} = 0 \\implies \\frac{R^2}{4L^2} = \\frac{1}{LC}$$\n$$R^2 = \\frac{4L^2}{LC} = \\frac{4L}{C} \\implies \\mathbf{R_c = 2\\sqrt{\\frac{L}{C}}}$$\n\n---\n\n### 2. Physical Significance in Galvanometers\nIn measuring instruments such as D'Arsonval galvanometers and analog pointer meters:\n1. **Underdamped**: Pointer oscillates around the true reading for several seconds, forcing the user to wait before taking a measurement.\n2. **Overdamped**: Pointer creeps sluggishly and takes an excessively long time to indicate the final deflection.\n3. **Critically Damped (Deadbeat)**: The pointer moves to the final deflection in the **fastest possible time without overshooting or oscillating**, allowing instantaneous, accurate visual readings.",
      "detailedLearning": "### Critical Damping Resistance (CDR)\nGalvanometer data sheets specify the \"Critical Damping Resistance (CDR)\" to be connected across its terminals to ensure deadbeat operation."
    }
  },
  {
    "id": "cas-u5-q22",
    "unitId": 5,
    "unitName": "Unit V \u2013 Time-Domain and Frequency-Domain Analysis",
    "topicName": "Passive low-pass, high-pass, band-pass and band-stop filters",
    "title": "Passive Four Filter Types: Comparison, Transfer Functions & Curves",
    "questionText": "Differentiate between passive low-pass, high-pass, band-pass, and band-stop filters based on their cutoff frequencies and frequency response curves.",
    "marks": 3,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2025 Test"
    ],
    "sourcePaperType": "internal_test",
    "isSupplementaryTopic": true,
    "frequency": "2025 Internal Test",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Four Filter Types\n1. **Low-Pass Filter (LPF)**: Passes frequencies $0 \\le \\omega \\le \\omega_c$; blocks $\\omega > \\omega_c$.\n2. **High-Pass Filter (HPF)**: Blocks $0 \\le \\omega < \\omega_c$; passes $\\omega \\ge \\omega_c$.\n3. **Band-Pass Filter (BPF)**: Passes frequencies between $\\omega_1$ and $\\omega_2$; blocks lower and higher frequencies (Series RLC).\n4. **Band-Stop (Notch) Filter**: Blocks frequencies between $\\omega_1$ and $\\omega_2$; passes all others (Parallel LC trap).",
      "examAnswer": "### 1. Classification and Ideal Magnitude Responses\n\n| Filter Type | Passband | Stopband | Typical Passive Topology |\n|---|---|---|---|\n| **Low-Pass (LPF)** | $0$ to $\\omega_c$ | $\\omega > \\omega_c$ | Series $R$, shunt $C$ (or series $L$, shunt $R$) |\n| **High-Pass (HPF)** | $\\omega_c$ to $\\infty$ | $\\omega < \\omega_c$ | Series $C$, shunt $R$ (or series $R$, shunt $L$) |\n| **Band-Pass (BPF)** | $\\omega_1$ to $\\omega_2$ | $\\omega < \\omega_1$ and $\\omega > \\omega_2$ | Series RLC with output across $R$ |\n| **Band-Stop (Notch)** | $0$ to $\\omega_1$ and $\\omega_2$ to $\\infty$ | $\\omega_1$ to $\\omega_2$ | Series RLC with output across $(L+C)$ |\n\n---\n\n### 2. Frequency Response Sketches\n\n```\n  Low-Pass:               High-Pass:              Band-Pass:              Band-Stop:\n   |------\\                /------|                /\\                     |--\\      /--|\n   |       \\              /       |               /  \\                    |   \\    /   |\n   +--------+-->          +-------+-->            +---+--+-->             +----+--+---+-->\n   0       w_c            0      w_c              w_1 w_0 w_2             0   w_1 w_2\n```",
      "detailedLearning": "### Band-Stop Notch Depth\nAt the notch frequency $\\omega_0 = 1/\\sqrt{LC}$ in a band-stop filter, the series $(L+C)$ branch acts as a dead short circuit to ground, driving output voltage to near zero."
    }
  }
];
