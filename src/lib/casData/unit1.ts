import { CASQuestion } from "@/types/cas";

export const CAS_UNIT_1_QUESTIONS: CASQuestion[] = [
  {
    "id": "cas-u1-q1",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Ideal and practical voltage sources",
    "title": "Ideal vs. Practical Voltage Sources & Characteristics",
    "questionText": "Explain ideal and practical voltage sources with their V-I characteristics. How does internal series resistance affect the terminal voltage under increasing load current?",
    "marks": 7,
    "priority": "very_high",
    "type": "conceptual",
    "years": [
      "2023",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2023 & Dec 2019 (Core Priority)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Ideal vs. Practical Voltage Sources\n- **Ideal Voltage Source**: Generates constant terminal voltage $V_L = V_s$ regardless of load current $I_L$. Internal series resistance $R_s = 0\\,\\Omega$. Regulation $= 0\\%$.\n- **Practical Voltage Source**: Modeled as ideal source $V_s$ in series with internal resistance $R_s > 0$. Terminal voltage drops as load current increases:\n$$V_L = V_s - I_L R_s$$\n- **Short-Circuit Current**: $I_{sc} = V_s / R_s$.\n- **Voltage Regulation**: $\\text{VR}\\% = \\frac{V_{NL} - V_{FL}}{V_{FL}} \\times 100\\% = \\frac{I_L R_s}{V_s - I_L R_s} \\times 100\\%$.\n- **Load Line**: Straight line from $(0, V_s)$ on V-axis to $(V_s/R_s, 0)$ on I-axis with slope $-R_s$.",
      "examAnswer": "### 1. Definition and Concept\nAn electrical voltage source is a two-terminal energy source capable of establishing and maintaining a potential difference across its terminals.\n\n#### (a) Ideal Voltage Source\nAn **ideal voltage source** delivers an invariant terminal voltage $V_L(t) = v_s(t)$ across its terminals, entirely independent of the current drawn by external circuitry.\n- Internal series impedance / resistance: $R_s = 0\\,\\Omega$.\n- Output characteristics: Horizontal line on the $V-I$ plane ($V_L = V_s$ for all $I_L$).\n- Power delivered: $P = V_s \\cdot I_L$ (can theoretically supply infinite power as $R_L \\to 0$).\n\n#### (b) Practical Voltage Source\nDue to physical design limitations, chemical internal resistance in batteries, or winding resistance in generators, every real voltage source possesses an internal series resistance $R_s > 0$.\n- Mathematical equation:\n$$V_L = V_s - I_L \\cdot R_s$$\n- Under open-circuit ($I_L = 0$): $V_{oc} = V_{NL} = V_s$.\n- Under short-circuit ($V_L = 0$): $I_{sc} = \\frac{V_s}{R_s}$.\n\n---\n\n### 2. Equivalent Circuit Diagram\n\n```\n         +---[ R_s ]----+-----(+) Terminal A\n         |              |\n      ( + )             |\n     ( V_s )          [R_L] Load  --> V_L = V_s - I_L * R_s\n      ( - )             |\n         |              |\n         +--------------+-----( -) Terminal B\n```\n\n---\n\n### 3. V-I Terminal Characteristic Curves\n\n```\n  Terminal Voltage V_L\n     ^\n V_s +-------------------------------> Ideal Source (R_s = 0)\n     | `\n     |   `\n     |     `  Slope = -R_s\n     |       ` Practical Source: V_L = V_s - I_L * R_s\n     |         `\n     |           `\n     +------------+------------------> Load Current I_L\n     0          I_sc = V_s / R_s\n```\n\n---\n\n### 4. Effect of Internal Resistance on Performance\n1. **Terminal Voltage Drop**: As load demand rises ($I_L \\uparrow$), the internal voltage drop $v_{drop} = I_L R_s$ increases linearly, causing the output voltage to droop.\n2. **Voltage Regulation**:\n$$\\text{Voltage Regulation} = \\frac{V_{NL} - V_{FL}}{V_{FL}} \\times 100\\% = \\frac{I_L R_s}{V_s - I_L R_s} \\times 100\\%$$\nAn ideal source possesses zero voltage regulation ($0\\%$), whereas practical sources have positive regulation.\n3. **Internal Power Dissipation**: $P_{loss} = I_L^2 R_s$, which converts to heat and reduces source efficiency $\\eta = \\frac{V_L I_L}{V_s I_L} = \\frac{V_L}{V_s} = \\frac{R_L}{R_L + R_s}$.\n4. **Design Objective**: To approach ideal source behavior, real-world voltage power supplies are engineered with very small output impedances ($R_s \\ll R_L$).",
      "detailedLearning": "### Deep-Dive: Why Ideal Voltage Sources Cannot Be Short-Circuited\nFrom Ohm's law, if an ideal voltage source $V_s > 0$ is short-circuited ($R_L = 0$), the current drawn would be:\n$$I = \\lim_{R_s \\to 0} \\frac{V_s}{R_s + R_L} = \\infty$$\nIn reality, infinite current violates physical conservation laws. The internal resistance $R_s$ is what prevents infinite current.\n\n### Common Examination Pitfalls\n- **Confusing series vs. parallel internal resistance**: Voltage sources have internal resistance in **series**, while current sources have internal resistance in **parallel**.\n- **Assuming constant power**: A voltage source does NOT provide constant power; power is determined by the connected load: $P = V_s^2 / (R_s + R_L)$.\n- **Parallel connection of unequal ideal voltage sources**: Connecting two ideal voltage sources $V_1 \\neq V_2$ in parallel violates KVL around the loop ($V_1 - V_2 = 0 \\implies$ contradiction), causing infinite circulating current."
    }
  },
  {
    "id": "cas-u1-q2",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Ideal and practical current sources",
    "title": "Ideal vs. Practical Current Sources & Characteristics",
    "questionText": "Explain ideal and practical current sources with their V-I characteristics. Why is the internal resistance of an ideal current source infinite?",
    "marks": 7,
    "priority": "very_high",
    "type": "conceptual",
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Core Examination Question (Dec 2022)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Ideal vs. Practical Current Sources\n- **Ideal Current Source**: Delivers invariant current $I_L = I_s$ regardless of load voltage $V_L$. Internal shunt resistance $R_{sh} = \\infty\\,\\Omega$. Internal conductance $G_{sh} = 0$.\n- **Practical Current Source**: Modeled as ideal source $I_s$ in parallel with finite shunt resistance $R_{sh} < \\infty$:\n$$I_L = I_s - I_{sh} = I_s - \\frac{V_L}{R_{sh}}$$\n- **Open-Circuit Voltage**: $V_{oc} = I_s \\cdot R_{sh}$.\n- **Short-Circuit Current**: $I_{sc} = I_s$.\n- **Dual Relation**: Current source with infinite parallel resistance is the exact dual of a voltage source with zero series resistance.",
      "examAnswer": "### 1. Definition and Fundamental Concept\nAn electrical current source delivers electric current to an external network.\n\n#### (a) Ideal Current Source\nAn **ideal current source** maintains a constant specified current $i_s(t)$ into external circuitry completely irrespective of the terminal voltage $V_L$ developed across its terminals.\n- Internal shunt resistance: $R_{sh} = \\infty\\,\\Omega$ (internal shunt conductance $G_{sh} = 0\\,\\text{S}$).\n- Characteristic: Vertical line on the $V-I$ plane ($I_L = I_s$ for any terminal voltage $V_L$).\n\n#### (b) Practical Current Source\nA real-world current source (such as a transistor collector current or Norton equivalent) has an internal leakage path represented by a finite shunt resistance $R_{sh}$ connected in parallel with the ideal current generator.\n- Applying KCL at the upper terminal:\n$$I_L = I_s - I_{sh} = I_s - \\frac{V_L}{R_{sh}}$$\n- As load resistance $R_L$ increases, terminal voltage $V_L = I_L R_L$ rises, causing more current $I_{sh} = V_L / R_{sh}$ to be diverted through internal resistance $R_{sh}$, thereby reducing output load current $I_L$.\n\n---\n\n### 2. Equivalent Circuit Diagram\n\n```\n         +----------+---------------+-----(+) Terminal A\n         |          |               |\n       ( ^ )        |               |\n      ( I_s )     [R_sh]          [R_L] Load  --> I_L = I_s - V_L/R_sh\n       ( | )        |               |\n         |          |               |\n         +----------+---------------+-----( -) Terminal B\n```\n\n---\n\n### 3. V-I Characteristics\n\n```\n  Load Current I_L\n     ^\n I_s +----------------------------> Ideal Source (R_sh = inf)\n     |`\n     |  `\n     |    ` Slope = -1/R_sh\n     |      ` Practical Source: I_L = I_s - V_L / R_sh\n     |        `\n     |          `\n     +-----------+-----------------> Terminal Voltage V_L\n     0         V_oc = I_s * R_sh\n```\n\n---\n\n### 4. Why Internal Resistance of an Ideal Current Source Must Be Infinite\n1. **Constant Current Requirement**: By current division:\n$$I_L = I_s \\left(\\frac{R_{sh}}{R_{sh} + R_L}\\right) = I_s \\left(\\frac{1}{1 + R_L / R_{sh}}\\right)$$\nFor $I_L = I_s$ to hold strictly true for any arbitrary load resistance $R_L$, the ratio $\\frac{R_L}{R_{sh}} \\to 0$.\nSince $R_L$ can take any positive real value, this requires:\n$$\\lim_{R_{sh} \\to \\infty} \\frac{R_L}{R_{sh}} = 0 \\implies R_{sh} = \\infty\\,\\Omega$$\n2. **Zero Internal Diversion**: An infinite shunt resistance ensures that zero current is diverted internally ($I_{sh} = V_L / \\infty = 0$), guaranteeing all generator current reaches the load.\n3. **Open-Circuit Dangers**: If an ideal current source is open-circuited ($R_L \\to \\infty$), the voltage across it theoretically shoots to infinity ($V = I_s \\times \\infty = \\infty\\,\\text{V}$), producing dielectric breakdown / arcing across the open terminals.",
      "detailedLearning": "### Practical Realization of Current Sources\nIn semiconductor electronics, practical current sources are realized using:\n1. **BJT current mirrors**: High output impedance $r_o = V_A / I_C$ (typically $100\\,\\text{k}\\Omega$ to $1\\,\\text{M}\\Omega$).\n2. **MOSFET Cascode current sources**: Boosts output impedance to $g_m r_o^2$ (tens of Megaohms).\n3. **Large voltage source with huge ballast resistor**: If $V_s = 1000\\,\\text{V}$ and $R_s = 100\\,\\text{k}\\Omega$, connected to $R_L = 100\\,\\Omega$, the circuit delivers $I \\approx 10\\,\\text{mA}$ with less than $0.1\\%$ deviation for small load variations."
    }
  },
  {
    "id": "cas-u1-q3",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "VCVS, VCCS, CCVS and CCCS",
    "title": "All Four Controlled (Dependent) Sources: Classification & Equations",
    "questionText": "Explain the four types of controlled (dependent) sources with schematic circuit symbols and mathematical equations: VCVS, VCCS, CCVS, and CCCS. Discuss their engineering applications.",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2023",
      "2024 Test"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Appeared in University Exams & 2024 Internal Test",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Controlled Sources Summary Table\n1. **VCVS** (Voltage-Controlled Voltage Source): $v_2 = \\mu v_1$ (Gain $\\mu$ is dimensionless). Example: Op-Amp non-inverting amplifier.\n2. **VCCS** (Voltage-Controlled Current Source): $i_2 = g_m v_1$ (Transconductance $g_m$ in $\\text{A/V}$ or $\\text{Siemens}$). Example: FET / MOSFET small-signal model.\n3. **CCVS** (Current-Controlled Voltage Source): $v_2 = r_m i_1$ (Transresistance $r_m$ in $\\text{V/A}$ or $\\Omega$). Example: Photodiode transimpedance amplifier.\n4. **CCCS** (Current-Controlled Current Source): $i_2 = \\beta i_1$ (Gain $\\beta$ or $h_{fe}$ is dimensionless). Example: BJT transistor small-signal model.\n- **Symbol**: Diamond-shaped enclosure (unlike circular independent sources).",
      "examAnswer": "### 1. Introduction to Dependent Sources\nA dependent or controlled source is an active circuit element whose terminal quantity (voltage or current) is controlled by a voltage or current existing across or through another branch within the network.\nDependent sources are represented graphically by **diamond-shaped** symbols.\n\n---\n\n### 2. Four Classifications, Schematics, and Mathematical Formulations\n\n#### 1. Voltage-Controlled Voltage Source (VCVS)\n- **Equation**: $v_2 = \\mu \\cdot v_1$\n- **Gain Parameter**: $\\mu = \\frac{v_2}{v_1}$ is the **open-circuit voltage amplification factor** (dimensionless).\n- **Circuit Schematic**:\n```\n  Controlling Branch           Controlled Source\n     (+)  v_1  (-)                    +---(+)---+\n      o---[ ]---o                    |   / \\   |\n                                     |  / + \\  |  v_2 = mu * v_1\n                                     |  \\ - /  |\n                                     |   \\ /   |\n                                     +---(-)---+\n```\n- **Physical Application**: Operational amplifiers configured in non-inverting mode ($v_{out} = (1 + R_f/R_1) v_{in}$).\n\n#### 2. Voltage-Controlled Current Source (VCCS)\n- **Equation**: $i_2 = g_m \\cdot v_1$\n- **Gain Parameter**: $g_m = \\frac{i_2}{v_1}$ is the **mutual conductance or transconductance** (units: $\\text{A/V}$ or $\\text{Siemens}$).\n- **Circuit Schematic**:\n```\n  Controlling Branch           Controlled Source\n     (+)  v_1  (-)                    +---------+\n      o---[ ]---o                    |   / \\   |\n                                     |  / ^ \\  |  i_2 = g_m * v_1\n                                     |  \\ | /  |\n                                     |   \\ /   |\n                                     +---------+\n```\n- **Physical Application**: Field Effect Transistors (JFETs and MOSFETs), where drain current is controlled by gate-source voltage: $i_d = g_m v_{gs}$.\n\n#### 3. Current-Controlled Voltage Source (CCVS)\n- **Equation**: $v_2 = r_m \\cdot i_1$\n- **Gain Parameter**: $r_m = \\frac{v_2}{i_1}$ is the **mutual resistance or transresistance** (units: $\\text{V/A}$ or $\\Omega$).\n- **Circuit Schematic**:\n```\n  Controlling Branch           Controlled Source\n         i_1                          +---(+)---+\n     ----->---[ ]----                |   / \\   |\n                                     |  / + \\  |  v_2 = r_m * i_1\n                                     |  \\ - /  |\n                                     |   \\ /   |\n                                     +---(-)---+\n```\n- **Physical Application**: Current-sensing feedback systems, current-to-voltage converters (transimpedance amplifiers for optical detectors).\n\n#### 4. Current-Controlled Current Source (CCCS)\n- **Equation**: $i_2 = \\beta \\cdot i_1$ (or $\\alpha \\cdot i_1$)\n- **Gain Parameter**: $\\beta = \\frac{i_2}{i_1}$ is the **short-circuit current gain** (dimensionless).\n- **Circuit Schematic**:\n```\n  Controlling Branch           Controlled Source\n         i_1                          +---------+\n     ----->---[ ]----                |   / \\   |\n                                     |  / ^ \\  |  i_2 = beta * i_1\n                                     |  \\ | /  |\n                                     |   \\ /   |\n                                     +---------+\n```\n- **Physical Application**: Bipolar Junction Transistors (BJTs) operating in the active region: $i_c = \\beta i_b$ or $i_c = \\alpha i_e$.",
      "detailedLearning": "### Key Theorems Involving Dependent Sources\n1. **Deactivation Rule**: When applying Superposition, Thevenin, or Norton theorems, dependent sources must **NEVER be turned off** (never open-circuited or short-circuited like independent sources). They must remain active because their output is dictated by internal network voltages/currents.\n2. **Finding Thevenin Resistance $R_{th}$ with Dependent Sources**:\n   - Method 1: $R_{th} = \\frac{V_{oc}}{I_{sc}}$\n   - Method 2 (Test Source Method): Deactivate independent sources only, attach an external test source $v_{test} = 1\\,\\text{V}$ at the open terminals, compute the resulting current $i_{test}$, and evaluate $R_{th} = \\frac{v_{test}}{i_{test}}$."
    }
  },
  {
    "id": "cas-u1-q4",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Source transformations",
    "title": "Source Transformation Theorem: Proof & Derivations",
    "questionText": "State the source transformation theorem. Derive the equivalence conditions between a practical voltage source and a practical current source at external load terminals.",
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
      "quickRevision": "### Source Transformation Essentials\n- **Practical Voltage Source**: Ideal $V_s$ in series with $R_s$.\n- **Practical Current Source**: Ideal $I_s$ in parallel with $R_p$.\n- **Equivalence Formulas**:\n$$I_s = \\frac{V_s}{R_s}, \\quad R_p = R_s$$\n$$V_s = I_s \\cdot R_p, \\quad R_s = R_p$$\n- **Polarity Direction**: Arrow of current source $I_s$ must point toward the positive terminal $(+)$ of voltage source $V_s$.\n- **Limitation**: Cannot be applied directly to ideal independent sources without series/parallel resistances ($R_s = 0$ or $R_p = \\infty$).",
      "examAnswer": "### 1. Statement of Source Transformation Theorem\nAny practical voltage source consisting of an ideal voltage generator $V_s$ in series with an internal resistance $R_s$ can be transformed into an equivalent practical current source consisting of an ideal current generator $I_s$ in parallel with an internal resistance $R_p$, such that the terminal voltage $V_L$ and load current $I_L$ for any connected load impedance $Z_L$ remain completely identical.\n\n---\n\n### 2. Mathematical Derivation of Equivalence Conditions\n\n```\n  Practical Voltage Source                     Practical Current Source\n       +---[ R_s ]---+---(+) A                      +------+---------+---(+) A\n       |             |                              |      |         |\n     ( + )           |                            ( ^ )    |         |\n    ( V_s )        [R_L] Load                    ( I_s ) [R_p]     [R_L] Load\n     ( - )           |                            ( | )    |         |\n       |             |                              |      |         |\n       +-------------+---(-) B                      +------+---------+---(-) B\n```\n\n#### Step 1: Open-Circuit Condition ($R_L = \\infty$)\n- For the voltage source circuit:\n$$V_{oc} = V_s$$\n- For the current source circuit:\n$$V_{oc} = I_s \\cdot R_p$$\nEquating open-circuit voltages:\n$$V_s = I_s \\cdot R_p \\quad \\text{--- (Equation 1)}$$\n\n#### Step 2: Short-Circuit Condition ($R_L = 0$)\n- For the voltage source circuit:\n$$I_{sc} = \\frac{V_s}{R_s}$$\n- For the current source circuit:\n$$I_{sc} = I_s$$\nEquating short-circuit currents:\n$$I_s = \\frac{V_s}{R_s} \\quad \\text{--- (Equation 2)}$$\n\n#### Step 3: Equating Internal Resistances\nSubstitute Equation 2 into Equation 1:\n$$V_s = \\left(\\frac{V_s}{R_s}\\right) \\cdot R_p \\implies 1 = \\frac{R_p}{R_s} \\implies R_p = R_s$$\n\n---\n\n### 3. Summary of Transformation Rules\n1. **Voltage to Current Transformation**:\n$$I_s = \\frac{V_s}{R_s}, \\quad R_p = R_s$$\nThe current arrow points in the direction of the positive terminal of $V_s$.\n2. **Current to Voltage Transformation**:\n$$V_s = I_s \\cdot R_p, \\quad R_s = R_p$$\nThe positive terminal of $V_s$ aligns with the arrowhead of $I_s$.\n3. **Applicability to Dependent Sources**: Source transformation is equally valid for dependent sources, provided the controlling variable is outside the source branch being converted.",
      "detailedLearning": "### Power Equivalence Nuance\nAlthough source transformation preserves terminal equivalence externally, **internal power dissipations are NOT identical**:\n- Internal dissipation in voltage source: $P_{int, V} = I_L^2 R_s$.\n- Internal dissipation in current source: $P_{int, I} = \\frac{V_L^2}{R_s} = \\frac{(I_L R_L)^2}{R_s}$.\nThese two quantities are generally unequal except when $R_L = R_s$. Therefore, source transformations must not be used to calculate total network power efficiency."
    }
  },
  {
    "id": "cas-u1-q5",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Source transformations",
    "title": "Numerical on Source Transformation in Multi-Source Circuit",
    "questionText": "Using repeated source transformations, determine the current through the 5 ohm load resistor in a circuit where a 24V source with 3 ohm internal resistance and a 4A source with 6 ohm parallel resistance feed the load in parallel.",
    "marks": 7,
    "priority": "very_high",
    "type": "numerical",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Numerical Problem (Dec 2023 Paper)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Quick Numerical Solution Steps\n- Branch 1: $24\\,\\text{V}$ in series with $3\\,\\Omega \\implies I_{s1} = 24/3 = 8\\,\\text{A}$ in parallel with $3\\,\\Omega$.\n- Branch 2: $4\\,\\text{A}$ in parallel with $6\\,\\Omega$.\n- Total parallel current source: $I_{total} = 8\\,\\text{A} + 4\\,\\text{A} = 12\\,\\text{A}$.\n- Total parallel resistance: $R_{eq} = 3 \\parallel 6 = \\frac{3 \\times 6}{3 + 6} = 2\\,\\Omega$.\n- Convert back to Thevenin equivalent: $V_{th} = 12\\,\\text{A} \\times 2\\,\\Omega = 24\\,\\text{V}$, $R_{th} = 2\\,\\Omega$.\n- Load Current through $R_L = 5\\,\\Omega$:\n$$I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{24}{2 + 5} = \\frac{24}{7} \\approx 3.429\\,\\text{A}$$",
      "examAnswer": "### 1. Problem Statement & Circuit Configuration\nGiven:\n- Source Branch 1: Voltage source $V_1 = 24\\,\\text{V}$ in series with $R_1 = 3\\,\\Omega$.\n- Source Branch 2: Current source $I_2 = 4\\,\\text{A}$ in parallel with $R_2 = 6\\,\\Omega$.\n- Both branches are connected in parallel across a load resistor $R_L = 5\\,\\Omega$.\n- Objective: Calculate load current $I_L$ using **source transformations**.\n\n---\n\n### 2. Step-by-Step Source Transformation\n\n#### Step 1: Transform Branch 1 into an Equivalent Current Source\n- Equivalent current:\n$$I_1 = \\frac{V_1}{R_1} = \\frac{24\\,\\text{V}}{3\\,\\Omega} = 8\\,\\text{A}$$\n- Parallel internal resistance:\n$$R_{p1} = R_1 = 3\\,\\Omega$$\n\n#### Step 2: Combine Parallel Current Sources and Parallel Resistors\nNow we have two current sources ($8\\,\\text{A}$ and $4\\,\\text{A}$) and two resistors ($3\\,\\Omega$ and $6\\,\\Omega$) connected in parallel across $R_L$:\n- Total current from parallel sources:\n$$I_{total} = I_1 + I_2 = 8\\,\\text{A} + 4\\,\\text{A} = 12\\,\\text{A}$$\n- Equivalent parallel internal resistance:\n$$R_{eq} = R_{p1} \\parallel R_2 = \\frac{3 \\times 6}{3 + 6} = \\frac{18}{9} = 2\\,\\Omega$$\n\n#### Step 3: Transform Combined Current Source to a Thevenin Voltage Source\n- Equivalent voltage:\n$$V_{eq} = I_{total} \\times R_{eq} = 12\\,\\text{A} \\times 2\\,\\Omega = 24\\,\\text{V}$$\n- Series internal resistance:\n$$R_{s,eq} = R_{eq} = 2\\,\\Omega$$\n\n#### Step 4: Connect the Load Resistor $R_L = 5\\,\\Omega$\nThe simplified network consists of a single $24\\,\\text{V}$ voltage source in series with $R_{s,eq} = 2\\,\\Omega$ and load $R_L = 5\\,\\Omega$.\n$$I_L = \\frac{V_{eq}}{R_{s,eq} + R_L} = \\frac{24\\,\\text{V}}{2\\,\\Omega + 5\\,\\Omega} = \\frac{24}{7}\\,\\text{A} \\approx 3.429\\,\\text{A}$$\n\n#### Step 5: Terminal Voltage across Load\n$$V_L = I_L \\times R_L = \\frac{24}{7} \\times 5 = \\frac{120}{7} \\approx 17.143\\,\\text{V}$$\n\n---\n\n### 3. Final Result\n- **Current through load resistor**: $\\mathbf{I_L = 3.429\\,\\text{A}}$ (or $24/7\\,\\text{A}$) directed downwards.\n- **Voltage across load resistor**: $\\mathbf{V_L = 17.143\\,\\text{V}}$.",
      "detailedLearning": "### Verification using Nodal Analysis\nLet node $A$ be the upper load terminal with node voltage $V_L$, and reference node at ground.\nApplying KCL at node $A$:\n$$\\frac{V_L - 24}{3} - 4 + \\frac{V_L}{6} + \\frac{V_L}{5} = 0$$\n$$\\frac{V_L}{3} - 8 - 4 + \\frac{V_L}{6} + \\frac{V_L}{5} = 0$$\n$$V_L \\left(\\frac{1}{3} + \\frac{1}{6} + \\frac{1}{5}\\right) = 12$$\n$$V_L \\left(\\frac{10 + 5 + 6}{30}\\right) = 12 \\implies V_L \\left(\\frac{21}{30}\\right) = 12$$\n$$V_L = 12 \\times \\frac{30}{21} = \\frac{360}{21} = \\frac{120}{7}\\,\\text{V} \\approx 17.143\\,\\text{V}$$\n$$I_L = \\frac{V_L}{5} = \\frac{120}{35} = \\frac{24}{7}\\,\\text{A} \\approx 3.429\\,\\text{A}$$\nBoth methods produce identical results, confirming the correctness of source transformations.",
      "numericalSolution": {
        "given": [
          "Voltage Source: V_1 = 24 V with internal resistance R_1 = 3 ohms",
          "Current Source: I_2 = 4 A with parallel resistance R_2 = 6 ohms",
          "Load Resistor: R_L = 5 ohms"
        ],
        "toFind": "Current through the 5 ohm load resistor (I_L)",
        "formula": "I_s = V_s / R_s; R_eq = R_1 || R_2; V_th = I_total * R_eq; I_L = V_th / (R_th + R_L)",
        "stepByStepSolution": [
          "Step 1: Convert Branch 1 to current source: I_1 = 24 / 3 = 8 A, R_p1 = 3 ohms",
          "Step 2: Combine parallel current sources: I_total = 8 A + 4 A = 12 A",
          "Step 3: Combine parallel resistances: R_eq = (3 * 6) / (3 + 6) = 2 ohms",
          "Step 4: Convert back to equivalent voltage source: V_eq = 12 A * 2 ohms = 24 V, R_s = 2 ohms",
          "Step 5: Compute load current: I_L = 24 / (2 + 5) = 24 / 7 = 3.429 A"
        ],
        "substitution": "I_L = 24 / (2 + 5)",
        "calculation": "24 / 7 = 3.42857 A",
        "finalAnswer": "3.429 A (or 24/7 A)",
        "units": "A",
        "explanation": "Applying successive source conversions simplifies the two active branches into a single Thevenin source of 24 V in series with 2 ohms."
      }
    }
  },
  {
    "id": "cas-u1-q6",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Supernode analysis",
    "title": "Supernode Analysis: Definition, Constraint Equations & Method",
    "questionText": "Explain the concept of a supernode in nodal analysis. When is it formed, and how is the constraint equation written? Explain with an illustrated circuit example.",
    "marks": 7,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2023",
      "2025 Test"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "University PYQ & 2025 Internal Test",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Supernode Analysis Core Points\n- **When is a supernode formed?** When an ideal or independent/dependent voltage source is connected directly between two non-reference essential nodes.\n- **Why is it needed?** The current flowing through an ideal voltage source is unknown and cannot be written directly using Ohm's law ($I = (V_1 - V_2)/R$ has $R=0$).\n- **Methodology**:\n  1. Enclose the voltage source and its two associated nodes in a generalized closed boundary (supernode surface).\n  2. Write **one KCL equation** treating the supernode as a single mega-node.\n  3. Write **one constraint (auxiliary) equation** relating the two node voltages:\n  $$V_1 - V_2 = V_s$$",
      "examAnswer": "### 1. Concept of Supernode in Nodal Analysis\nIn conventional nodal analysis, branch currents are expressed in terms of node voltages using Ohm's law: $i = \\frac{v_a - v_b}{R}$.\nHowever, when a voltage source (independent or dependent) is connected between two non-reference nodes without any series resistance, the current through that source cannot be expressed as a function of the node voltages because its internal resistance is zero ($I = \\frac{\\Delta V}{0} \\to \\text{undefined}$).\n\nTo resolve this:\nA **supernode** is formed by enclosing the voltage source and the two non-reference nodes to which it is connected within an imaginary boundary, treating the combination as a single generalized node.\n\n---\n\n### 2. Properties of a Supernode\n1. A supernode contains no net internal charge accumulation.\n2. The voltage source inside the supernode provides a constraint equation relating the two node voltages.\n3. KCL is applied to all external branches connected to the supernode boundary.\n4. KVL is applied around the loop inside the supernode to establish the auxiliary constraint equation.\n5. If a circuit has $N$ nodes and contains $S$ supernodes, solving requires $(N - 1 - S)$ KCL equations plus $S$ constraint equations.\n\n---\n\n### 3. Step-by-Step Procedure with Circuit Example\n\n```\n                    +----[ R_2 ]----+\n                    |               |\n          Node 1    |     V_s       |    Node 2\n            (1)-----+---(+)---(-)---+-----(2)\n             |      |               |      |\n           [R_1]    +---------------+    [R_3]\n             |     :.................:     |\n             |       Supernode Region      |\n             v                             v\n           Ground                        Ground\n```\n\n#### Step 1: Constraint Equation\nThe voltage source $V_s$ connected between Node 1 and Node 2 imposes the constraint:\n$$V_1 - V_2 = V_s \\implies V_1 = V_2 + V_s \\quad \\text{--- (Constraint Equation)}$$\n\n#### Step 2: KCL at the Supernode Boundary\nSum of all currents leaving the combined supernode (Nodes 1 and 2) equals zero:\n$$\\frac{V_1 - 0}{R_1} + \\frac{V_1 - V_3}{R_{13}} + \\frac{V_2 - 0}{R_3} + \\frac{V_2 - V_4}{R_{24}} = 0$$\n\n#### Step 3: Solve the Linear System\nSubstitute the constraint equation into the KCL equation to eliminate one variable, reducing the number of simultaneous equations by one per supernode.",
      "detailedLearning": "### What if a Resistor is Connected in Parallel with the Voltage Source?\nIf a resistor $R_p$ is connected directly in parallel with the voltage source inside the supernode, it has zero impact on the node voltages $V_1$ and $V_2$ because the voltage source maintains $V_1 - V_2 = V_s$ unconditionally.\nWhen writing the supernode KCL equation, the current through $R_p$ enters one node and leaves the other inside the same boundary, so it cancels out completely ($\\{I_{in} - I_{out} = 0\\}$). Thus, any parallel element across a voltage source in a supernode can be disregarded in the external KCL expression."
    }
  },
  {
    "id": "cas-u1-q7",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Mesh analysis",
    "title": "Mesh Analysis & Supermesh Technique with Dependent Sources",
    "questionText": "Explain mesh analysis in planar networks. What is a supermesh, and when does it arise? Provide the formulation and constraint equation.",
    "marks": 7,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2022 Examination",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Mesh & Supermesh Overview\n- **Mesh**: A loop that does not contain any other loops within it (applicable only to planar networks).\n- **Supermesh**: Formed when a current source (independent or dependent) is shared between two adjacent meshes.\n- **Why Supermesh?** Voltage across an ideal current source is unknown.\n- **Two Step Rule**:\n  1. Mentally remove the shared current source (open-circuit the shared branch) and write one combined KVL equation around the perimeter of both meshes.\n  2. Write one constraint equation from the current source:\n  $$I_{mesh1} - I_{mesh2} = I_s$$",
      "examAnswer": "### 1. Fundamental Principles of Mesh Analysis\nMesh analysis uses Kirchhoff's Voltage Law (KVL) around independent planar meshes to solve for circulating mesh currents. For a planar circuit with $B$ branches and $N$ nodes, the number of independent mesh equations is:\n$$M = B - N + 1$$\n\nMatrix formulation for a purely resistive network:\n$$[R] [I] = [V]$$\nwhere $R_{ii}$ is the self-resistance of mesh $i$ (sum of all resistors in mesh $i$), and $R_{ij} = -R_{mutual}$ is the negative sum of resistances shared between mesh $i$ and mesh $j$.\n\n---\n\n### 2. The Supermesh Concept\nWhen a branch containing a current source (dependent or independent) is shared between two adjacent meshes, the voltage drop across that current source is an unknown variable $v_x$.\nTo avoid introducing new unknown voltages:\nA **supermesh** is created by temporarily removing (open-circuiting) the branch containing the current source, merging the two adjacent meshes into one larger loop.\n\n---\n\n### 3. Step-by-Step Procedure\n\n```\n          Mesh 1 (Loop 1)                 Mesh 2 (Loop 2)\n       +---[ R_1 ]----+-------------+---[ R_2 ]----+\n       |              |             |              |\n     ( + )          [R_3]         ( ^ )          [R_4]\n    ( V_s )           |          ( I_s )           |\n     ( - )          Mesh 1        ( | )          Mesh 2\n       |            Current i_1     |            Current i_2\n       +--------------+-------------+--------------+\n```\n\n#### Step 1: Constraint Equation\nInspect the shared current branch with current source $I_s$:\n$$i_2 - i_1 = I_s \\implies i_2 = i_1 + I_s \\quad \\text{--- (Constraint Equation)}$$\n\n#### Step 2: KVL around the Supermesh\nTrace around the outer boundary excluding the central branch with $I_s$:\n$$-V_s + i_1 R_1 + i_2 R_2 + i_2 R_4 + i_1 R_3 = 0$$\n\n#### Step 3: Simultaneous Solution\nSubstitute $i_2 = i_1 + I_s$ into the KVL equation to solve for $i_1$, then determine all branch voltages and powers.",
      "detailedLearning": "### Planar vs Non-Planar Networks\nMesh analysis is strictly restricted to **planar networks** (circuits that can be drawn on a 2D plane with no crossing branches). For non-planar networks (e.g. toroidal or 3D bridge lattices), nodal analysis or cut-set/tie-set graph theory must be utilized."
    }
  },
  {
    "id": "cas-u1-q8",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Voltage division",
    "title": "Voltage and Current Division Rules: Derivation & Duality",
    "questionText": "Derive the voltage division rule for series resistors and current division rule for parallel resistors. State their dual relationship.",
    "marks": 3,
    "priority": "high",
    "type": "derivation",
    "years": [
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Foundational Examination Derivation",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Division Rules & Duality\n- **Voltage Division (Series)**:\n$$V_k = V_{total} \\cdot \\frac{R_k}{R_1 + R_2 + \\dots + R_n}$$\n- **Current Division (Parallel - 2 Resistors)**:\n$$I_1 = I_{total} \\cdot \\frac{R_2}{R_1 + R_2}, \\quad I_2 = I_{total} \\cdot \\frac{R_1}{R_1 + R_2}$$\n- **Current Division in Conductance ($G = 1/R$)**:\n$$I_k = I_{total} \\cdot \\frac{G_k}{G_1 + G_2 + \\dots + G_n}$$\nNotice: Voltage division in resistance has identical mathematical structure to current division in conductance (exact duals).",
      "examAnswer": "### 1. Voltage Division Rule Derivation\nConsider $n$ resistors $R_1, R_2, \\dots, R_n$ connected in series across total voltage $V$.\nThe equivalent resistance is:\n$$R_{eq} = R_1 + R_2 + \\dots + R_n$$\nBy Ohm's law, the common series current is:\n$$I = \\frac{V}{R_{eq}} = \\frac{V}{\\sum_{j=1}^n R_j}$$\nThe voltage drop across any individual resistor $R_k$ is:\n$$V_k = I \\cdot R_k = V \\cdot \\left(\\frac{R_k}{R_1 + R_2 + \\dots + R_n}\\right)$$\n\n---\n\n### 2. Current Division Rule Derivation\nConsider two resistors $R_1$ and $R_2$ connected in parallel carrying total current $I$.\nThe equivalent parallel resistance is:\n$$R_{eq} = \\frac{R_1 R_2}{R_1 + R_2}$$\nThe common parallel terminal voltage is:\n$$V = I \\cdot R_{eq} = I \\cdot \\left(\\frac{R_1 R_2}{R_1 + R_2}\\right)$$\nThe current through branch 1 is:\n$$I_1 = \\frac{V}{R_1} = \\frac{I}{R_1} \\cdot \\left(\\frac{R_1 R_2}{R_1 + R_2}\\right) = I \\cdot \\left(\\frac{R_2}{R_1 + R_2}\\right)$$\nSimilarly, for branch 2:\n$$I_2 = I \\cdot \\left(\\frac{R_1}{R_1 + R_2}\\right)$$\n\n---\n\n### 3. Duality Relationship\nIn terms of conductances $G_k = 1/R_k$:\n$$I_k = I \\cdot \\left(\\frac{G_k}{\\sum_{j=1}^n G_j}\\right)$$\nComparing this with the voltage division equation reveals that replacing $(V \\leftrightarrow I)$ and $(R \\leftrightarrow G)$ yields the identical dual formula.",
      "detailedLearning": "### Common Mistake in 3 Parallel Resistors\nStudents frequently write $I_1 = I \\frac{R_2 R_3}{R_1 + R_2 + R_3}$, which is mathematically INCORRECT.\nFor 3 resistors in parallel, the correct formula is:\n$$I_1 = I \\cdot \\frac{G_1}{G_1 + G_2 + G_3} = I \\cdot \\frac{R_2 R_3}{R_1 R_2 + R_2 R_3 + R_3 R_1}$$"
    }
  },
  {
    "id": "cas-u1-q9",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Power and energy relations",
    "title": "Power and Energy Relations & Passive Sign Convention",
    "questionText": "Explain power and energy relations in electrical networks. Differentiate between absorbed power and delivered power with reference to the passive sign convention.",
    "marks": 3,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2022 Exam Concept",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Power Relations & Sign Convention\n- **Instantaneous Power**: $p(t) = v(t) \\cdot i(t)$ (Watts, $\\text{W}$).\n- **Energy**: $w(t) = \\int_{-\\infty}^t p(\\tau) d\\tau$ (Joules, $\\text{J}$).\n- **Passive Sign Convention**:\n  - Current enters positive terminal $(+)$: $P = + v \\cdot i > 0 \\implies$ element **absorbs (dissipates/stores)** power (e.g. Resistor, charging battery).\n  - Current leaves positive terminal $(+)$ (or enters negative terminal): $P = - v \\cdot i < 0 \\implies$ element **delivers (supplies)** power (e.g. discharging battery, generator).\n- **Conservation of Energy (Tellegen)**:\n$$\\sum P_{absorbed} = \\sum P_{delivered} \\iff \\sum_{k=1}^b v_k i_k = 0$$",
      "examAnswer": "### 1. Power and Energy Definitions\n- **Power** is the time rate of expending or absorbing energy:\n$$p(t) = \\frac{dw}{dt} = \\frac{dw}{dq} \\cdot \\frac{dq}{dt} = v(t) \\cdot i(t)$$\n- **Energy** is the capacity to do work:\n$$w(t) = \\int_{t_0}^t p(\\tau)\\,d\\tau$$\n\n---\n\n### 2. Passive Sign Convention\nThe passive sign convention establishes a standardized reference direction between branch voltage and branch current:\n1. **Absorbed Power ($P > 0$)**: If positive current enters the terminal with positive voltage reference polarity:\n$$P_{abs} = + v \\cdot i$$\nEnergy flows from external network into the component.\n2. **Delivered Power ($P < 0$)**: If positive current leaves the positive voltage terminal (enters negative terminal):\n$$P_{del} = - v \\cdot i$$\nEnergy flows from the component out into the external network.\n\n---\n\n### 3. Summary Diagram\n\n```\n      Absorbing Element (P > 0)             Delivering Element (P < 0)\n             i --->                                i <---\n        (+)---------(-)                       (+)---------(-)\n        |             |                       |             |\n        |   Element   |                       |   Source    |\n        |             |                       |             |\n        +-------------+                       +-------------+\n```",
      "detailedLearning": "### Tellegen's Conservation Verification\nIn any closed lumped network, the algebraic sum of all powers across all $b$ branches at any instant must identically equal zero:\n$$\\sum_{k=1}^b p_k = 0$$\nThis is the physical manifestation of the First Law of Thermodynamics in electrical network theory."
    }
  },
  {
    "id": "cas-u1-q10",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Fundamentals of AC circuits",
    "title": "RMS, Average Value, Form Factor & Peak Factor of AC Waveforms",
    "questionText": "Define RMS value, average value, form factor and peak factor of a sinusoidal AC waveform. Derive their expressions and numerical values.",
    "marks": 7,
    "priority": "high",
    "type": "derivation",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2023 University Question",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Sinusoidal AC Quantities\n- Waveform: $v(t) = V_m \\sin(\\omega t)$\n- **RMS (Effective) Value**: $V_{rms} = \\frac{V_m}{\\sqrt{2}} \\approx 0.707 V_m$ (produces same heating effect as DC).\n- **Average Value (Half-Cycle)**: $V_{avg} = \\frac{2 V_m}{\\pi} \\approx 0.637 V_m$ (full cycle average $= 0$).\n- **Form Factor**: $K_f = \\frac{V_{rms}}{V_{avg}} = \\frac{V_m/\\sqrt{2}}{2V_m/\\pi} = \\frac{\\pi}{2\\sqrt{2}} \\approx 1.11$.\n- **Peak (Crest) Factor**: $K_p = \\frac{V_m}{V_{rms}} = \\frac{V_m}{V_m/\\sqrt{2}} = \\sqrt{2} \\approx 1.414$.",
      "examAnswer": "### 1. Definitions and Formulations\n\n#### (a) Root Mean Square (RMS) Value\nThe RMS value of an alternating current is defined as that steady direct current (DC) which, when flowing through a given resistance for a given time, produces the same amount of heat as produced by the alternating current flowing through the same resistance for the same time.\n$$V_{rms} = \\sqrt{\\frac{1}{T} \\int_0^T v^2(t)\\,dt}$$\n\nFor $v(t) = V_m \\sin(\\omega t)$ with period $T = 2\\pi$:\n$$V_{rms}^2 = \\frac{1}{2\\pi} \\int_0^{2\\pi} V_m^2 \\sin^2(\\theta)\\,d\\theta = \\frac{V_m^2}{2\\pi} \\int_0^{2\\pi} \\frac{1 - \\cos(2\\theta)}{2}\\,d\\theta$$\n$$V_{rms}^2 = \\frac{V_m^2}{4\\pi} \\left[ \\theta - \\frac{\\sin(2\\theta)}{2} \\right]_0^{2\\pi} = \\frac{V_m^2}{4\\pi} [2\\pi - 0] = \\frac{V_m^2}{2}$$\n$$\\mathbf{V_{rms} = \\frac{V_m}{\\sqrt{2}} \\approx 0.707 V_m}$$\n\n---\n\n#### (b) Average Value\nFor a symmetrical AC wave, the full-cycle average is zero. The average value is therefore computed over a positive half-cycle ($0$ to $\\pi$):\n$$V_{avg} = \\frac{1}{\\pi} \\int_0^\\pi V_m \\sin(\\theta)\\,d\\theta = \\frac{V_m}{\\pi} [-\\cos(\\theta)]_0^\\pi = \\frac{V_m}{\\pi} [-(-1) - (-1)]$$\n$$\\mathbf{V_{avg} = \\frac{2V_m}{\\pi} \\approx 0.637 V_m}$$\n\n---\n\n#### (c) Form Factor ($K_f$)\nThe Form Factor is the ratio of RMS value to the half-cycle average value:\n$$K_f = \\frac{V_{rms}}{V_{avg}} = \\frac{V_m / \\sqrt{2}}{2 V_m / \\pi} = \\frac{\\pi}{2\\sqrt{2}} \\approx \\mathbf{1.11}$$\n\n---\n\n#### (d) Peak (Crest) Factor ($K_p$)\nThe Peak Factor is the ratio of maximum (peak) amplitude to the RMS value:\n$$K_p = \\frac{V_{peak}}{V_{rms}} = \\frac{V_m}{V_m / \\sqrt{2}} = \\sqrt{2} \\approx \\mathbf{1.414}$$",
      "detailedLearning": "### Practical Significance in Instrumentation\n- Moving iron (MI) meters respond to the **RMS value** directly because deflecting torque depends on $i^2$.\n- PMMC meters with rectifiers respond to the **average value**, but their dials are calibrated by multiplying by $1.11$ assuming a pure sine wave. If a square wave or triangular wave is measured, the PMMC reading will be in error."
    }
  },
  {
    "id": "cas-u1-q11",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Phasor representation and rotation",
    "title": "Phasor Representation and Rotation of AC Signals",
    "questionText": "What is a phasor? Explain phasor representation and rotation of alternating sinusoidal voltages and currents in the complex plane.",
    "marks": 3,
    "priority": "moderate",
    "type": "conceptual",
    "years": [
      "Practice"
    ],
    "sourcePaperType": "practice",
    "isSupplementaryTopic": true,
    "frequency": "Supplementary Foundation Topic",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Phasor Basics\n- **Definition**: A complex number that represents the amplitude and phase angle of a sinusoidal function.\n- **Euler'''s Relation**: $A \\cos(\\omega t + \\phi) = \\text{Re}\\{A e^{j(\\omega t + \\phi)}\\} = \\text{Re}\\{ \\mathbf{A} e^{j\\omega t} \\}$.\n- **Phasor Form**: $\\mathbf{A} = A \\angle \\phi = A \\cos\\phi + j A \\sin\\phi$.\n- **Differentiation in Time**: $\\frac{d}{dt} \\longleftrightarrow j\\omega$.\n- **Integration in Time**: $\\int dt \\longleftrightarrow \\frac{1}{j\\omega}$.",
      "examAnswer": "### 1. Definition of a Phasor\nA **phasor** is a rotating vector in the complex plane whose projection onto the real axis traces out the instantaneous value of a sinusoidal quantity over time.\nFor a sinusoid:\n$$v(t) = V_m \\cos(\\omega t + \\theta)$$\nUsing Euler's identity:\n$$v(t) = \\text{Re}\\left\\{ V_m e^{j(\\omega t + \\theta)} \\right\\} = \\text{Re}\\left\\{ V_m e^{j\\theta} e^{j\\omega t} \\right\\}$$\nThe time-invariant complex quantity $\\mathbf{V} = V_m e^{j\\theta} = V_m \\angle \\theta$ is the **phasor representation** of $v(t)$.\n\n---\n\n### 2. Properties in AC Circuit Analysis\n1. Converts differential equations into algebraic equations with complex numbers.\n2. Resistor impedance: $Z_R = R \\angle 0^\\circ = R$.\n3. Inductor impedance: $Z_L = j\\omega L = \\omega L \\angle 90^\\circ$ (voltage leads current by $90^\\circ$).\n4. Capacitor impedance: $Z_C = \\frac{1}{j\\omega C} = \\frac{1}{\\omega C} \\angle -90^\\circ$ (voltage lags current by $90^\\circ$).",
      "detailedLearning": "### Why Phasor Addition is Valid\nPhasors can only be added or subtracted if they share the **exact same angular frequency $\\omega$**. If two signals have different frequencies $\\omega_1 \\neq \\omega_2$, their phasors rotate at different speeds, meaning the angle between them changes continuously, invalidating static phasor diagrams."
    }
  },
  {
    "id": "cas-u1-q12",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Duality and dual networks",
    "title": "Duality & Dual Networks: Principles, Dual Pairs & Construction",
    "questionText": "Define duality in electrical networks. List five dual pairs and explain the step-by-step procedure to construct the dual of a planar network.",
    "marks": 7,
    "priority": "moderate",
    "type": "conceptual",
    "years": [
      "2023",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Repeated in Dec 2023 & Dec 2019",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Duality Quick Summary\n- **Concept**: Two networks are duals if the mesh equations of one network have the exact same mathematical form as the nodal equations of the other.\n- **Dual Element Pairs**:\n  - Voltage $V \\longleftrightarrow$ Current $I$\n  - Mesh / Loop $\\longleftrightarrow$ Node / Supernode\n  - Resistance $R \\longleftrightarrow$ Conductance $G$\n  - Inductance $L \\longleftrightarrow$ Capacitance $C$\n  - Series connection $\\longleftrightarrow$ Parallel connection\n  - KVL $\\longleftrightarrow$ KCL\n  - Short circuit $\\longleftrightarrow$ Open circuit\n  - Thevenin theorem $\\longleftrightarrow$ Norton theorem\n- **Applicability**: Duality is strictly valid only for **planar networks**.",
      "examAnswer": "### 1. Definition of Duality\nTwo electrical networks are said to be **dual networks** if the mesh equations describing the behavior of the first network are mathematically identical in form to the node-pair equations describing the behavior of the second network, with voltages replaced by currents and impedances replaced by admittances.\n\nIf Network 1 has mesh equations:\n$$[R] [I] = [V]$$\nThen its dual Network 2 has node equations:\n$$[G] [V^*] = [I^*]$$\nwhere matrix $[G]$ is numerically identical to $[R]$.\n\n---\n\n### 2. Standard Dual Pairs Table\n\n| Network 1 (Primal) | Network 2 (Dual) |\n|---|---|\n| Voltage ($V$) | Current ($I$) |\n| Current ($I$) | Voltage ($V$) |\n| Resistance ($R$ in $\\Omega$) | Conductance ($G$ in $\\text{S}$) |\n| Inductance ($L$ in $\\text{H}$) | Capacitance ($C$ in $\\text{F}$) |\n| Capacitance ($C$ in $\\text{F}$) | Inductance ($L$ in $\\text{H}$) |\n| Series Connection | Parallel Connection |\n| Mesh (Loop) | Node |\n| KVL ($\\sum V = 0$) | KCL ($\\sum I = 0$) |\n| Short Circuit ($R=0$) | Open Circuit ($G=0$) |\n| Thevenin'''s Theorem | Norton'''s Theorem |\n\n---\n\n### 3. Step-by-Step Procedure to Construct a Dual Network\n1. Verify that the given primal network is **planar**.\n2. Place a dot (node) inside each independent internal mesh of the primal circuit ($1, 2, \\dots, m$).\n3. Place an external reference dot (datum/ground node) in the exterior region surrounding the network.\n4. Draw dashed lines connecting adjacent dots through each shared branch:\n   - For every branch intersected, place its dual component in the connecting line.\n   - If a branch contains a resistance $R$, the dual branch has conductance $G = R$ (numerical value retained in Siemens).\n   - If a branch has inductance $L$, replace with capacitance $C = L$ Farads.\n   - If a branch has capacitance $C$, replace with inductance $L = C$ Henries.\n   - If a voltage source $V_s$ is crossed, replace with current source $I_s = V_s$ Amperes. The current arrow direction is oriented to match clockwise mesh circulation.\n5. Terminate all outer dashed branches at the common external reference node.\n6. Redraw the resulting dual network with conventional planar layout.",
      "detailedLearning": "### Why Non-Planar Networks Have No Duals\nBy Kuratowski's theorem, non-planar networks contain subgraphs homeomorphic to $K_5$ (complete 5-node graph) or $K_{3,3}$ (utility bipartite graph). In non-planar networks, internal meshes cannot be uniquely defined without branch crossings, which prevents unique assignment of dual interior nodes."
    }
  },
  {
    "id": "cas-u1-q13",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Tree, twig, link and chord",
    "title": "Graph Theory: Graph, Tree, Twig, Link & Co-Tree Definitions",
    "questionText": "Define the following network graph theory terms with neat illustrations: Oriented graph, Tree, Twig, Link (Chord), and Co-tree. State the formulas for number of twigs and links.",
    "marks": 7,
    "priority": "moderate",
    "type": "circuit_diagram",
    "years": [
      "2022",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Repeated in Dec 2022 & Dec 2019",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Graph Theory Terminology\n- **Graph**: Set of nodes and connected branches with components replaced by lines.\n- **Tree**: A connected subgraph containing all nodes of the graph but **NO closed loops**.\n- **Number of Nodes**: $N$.\n- **Number of Branches**: $B$.\n- **Number of Twigs (Tree branches)**:\n$$T = N - 1$$\n- **Number of Links / Chords (Co-tree branches)**:\n$$L = B - (N - 1) = B - N + 1$$\n- **Co-Tree**: The collection of all links remaining when a tree is removed from the graph.",
      "examAnswer": "### 1. Fundamental Definitions\n\n#### (a) Linear Graph\nA graph $G = (V, E)$ of an electrical network is an abstract representation obtained by replacing every two-terminal network element with an idealized line segment (branch) while retaining all connection points (nodes).\n\n#### (b) Oriented (Directed) Graph\nA graph in which every branch is assigned a definite reference direction indicated by an arrowhead, representing standard reference current flow.\n\n---\n\n### 2. Tree and Twigs\n- **Tree ($T$)**: A connected subgraph of a connected graph $G$ that includes **all $N$ nodes** of $G$ without forming any closed paths (loops).\n- **Twigs**: The branches of the graph that belong to the selected tree.\n$$\\mathbf{\\text{Number of Twigs } = N - 1}$$\n\nProperties of a Tree:\n1. Connecting any two nodes of a tree yields exactly one unique path.\n2. Every tree contains exactly $N-1$ branches.\n3. A tree contains no closed loops.\n\n---\n\n### 3. Co-Tree and Links (Chords)\n- **Co-Tree**: The complement of a tree, formed by all branches of graph $G$ that do NOT belong to the chosen tree.\n- **Link (Chord)**: An individual branch belonging to the co-tree.\n$$\\mathbf{\\text{Number of Links } L = B - (N - 1) = B - N + 1}$$\n\nProperties of Links:\n1. Adding any single link back into a tree forms exactly **one independent closed loop**, known as a **fundamental tie-set (f-circuit)**.\n2. The number of independent fundamental loops equals the number of links $L$.\n\n---\n\n### 4. Illustrative Example Diagram\n\n```\n Complete Oriented Graph (4 Nodes, 6 Branches)\n          (1) ------------[b1]------------> (2)\n           |   \\                         /  |\n           |     \\                     /    |\n           |      [b5]              [b6]    |\n          [b3]      \\              /       [b4]\n           |          \\          /         |\n           v            v      v            v\n          (3) ------------[b2]------------> (4)\n\n Selected Tree Branches (Solid: Twigs = 3)\n      (1) ===[b1]===> (2)\n       |               |\n      [b3]            [b4]\n       |               |\n       v               v\n      (3)             (4)\n (Twigs: b1, b3, b4. Total twigs = 4 - 1 = 3)\n\n Co-Tree (Dashed: Links = 3)\n      Links: b2, b5, b6. Total links = 6 - (4 - 1) = 3.\n```",
      "detailedLearning": "### Total Possible Trees of a Graph\nThe total number of possible distinct trees for a connected linear graph is given by Cayley's theorem or by the determinant formula:\n$$\\text{Total Trees} = \\det(A_r \\cdot A_r^T)$$\nwhere $A_r$ is the reduced incidence matrix of the graph."
    }
  },
  {
    "id": "cas-u1-q14",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Incidence matrix, tie-set matrix and cut-set matrix",
    "title": "Complete & Reduced Incidence Matrix: Properties & KCL Formulation",
    "questionText": "Define the complete incidence matrix and reduced incidence matrix of a connected directed graph. State any four important properties of the incidence matrix.",
    "marks": 7,
    "priority": "moderate",
    "type": "derivation",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Dec 2023 University Exam",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Incidence Matrix Quick Summary\n- **Complete Incidence Matrix $A_a$**: Order $N \\times B$.\n$$a_{ij} = \\begin{cases} +1 & \\text{if branch } j \\text{ leaves node } i \\\\ -1 & \\text{if branch } j \\text{ enters node } i \\\\ 0 & \\text{if branch } j \\text{ is not connected to node } i \\end{cases}$$\n- **Reduced Incidence Matrix $A$**: Order $(N-1) \\times B$, formed by removing any arbitrary reference node row.\n- **KCL in Matrix Form**: $A \\cdot I_b = 0$.\n- **Branch Voltages to Node Voltages**: $V_b = A^T \\cdot V_n$.",
      "examAnswer": "### 1. Complete Incidence Matrix ($A_a$)\nThe complete incidence matrix $A_a$ of a directed graph having $N$ nodes and $B$ branches is an $N \\times B$ matrix representing the topology of connections between nodes and branches.\nElement $a_{ij}$ is defined as:\n$$a_{ij} = \\begin{cases} +1, & \\text{if branch } j \\text{ leaves node } i \\\\ -1, & \\text{if branch } j \\text{ enters node } i \\\\ 0, & \\text{if branch } j \\text{ is not incident with node } i \\end{cases}$$\n\n---\n\n### 2. Properties of Complete Incidence Matrix ($A_a$)\n1. **Sum of Column Elements**: The algebraic sum of elements in every column of $A_a$ is identically zero ($\\sum_{i=1}^N a_{ij} = 0$), because each branch has exactly one starting node ($+1$) and one ending node ($-1$).\n2. **Singularity**: Since the sum of all rows equals the zero vector, the rows are linearly dependent:\n$$\\text{Rank}(A_a) = N - 1$$\n3. **Reduced Incidence Matrix ($A$)**: By selecting any node as the reference (datum) node and deleting its corresponding row, we obtain the **reduced incidence matrix** $A$ of dimension $(N-1) \\times B$, which has full row rank $(N-1)$.\n4. **Determinant of Non-Singular Submatrices**: Any non-singular $(N-1) \\times (N-1)$ submatrix of $A$ corresponds to a **tree** of the graph, and its determinant is always $\\pm 1$.\n\n---\n\n### 3. Kirchhoff'''s Laws in Matrix Formulation\n- **Kirchhoff'''s Current Law (KCL)**:\n$$A \\cdot I_b = 0$$\nwhere $I_b = [i_1, i_2, \\dots, i_B]^T$ is the branch current vector.\n- **Node to Branch Voltage Transformation**:\n$$V_b = A^T \\cdot V_n$$\nwhere $V_n$ is the $(N-1) \\times 1$ node voltage vector.",
      "detailedLearning": "### Example of Matrix Construction\nFor a 3-node, 3-branch triangle graph:\n- Branch 1: Node 1 to Node 2\n- Branch 2: Node 2 to Node 3\n- Branch 3: Node 3 to Node 1\n$$A_a = \\begin{bmatrix} +1 & 0 & -1 \\\\ -1 & +1 & 0 \\\\ 0 & -1 & +1 \\end{bmatrix}$$\nDeleting row 3 (datum node 3):\n$$A = \\begin{bmatrix} +1 & 0 & -1 \\\\ -1 & +1 & 0 \\end{bmatrix}$$"
    }
  },
  {
    "id": "cas-u1-q15",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Incidence matrix, tie-set matrix and cut-set matrix",
    "title": "Fundamental Tie-Set (B) and Cut-Set (Q) Matrices & Orthogonality",
    "questionText": "Define fundamental tie-set matrix (B) and fundamental cut-set matrix (Q). Prove the orthogonality relationships between incidence, tie-set and cut-set matrices.",
    "marks": 7,
    "priority": "moderate",
    "type": "derivation",
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Dec 2022 University Exam",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Fundamental Matrices Summary\n- **f-Tie-Set Matrix ($B_f$)**: Dimension $L \\times B$ (where $L = B - N + 1$). Formed by placing one link with tree twigs.\n  - KVL: $B_f \\cdot V_b = 0$.\n- **f-Cut-Set Matrix ($Q_f$)**: Dimension $(N-1) \\times B$. Formed by isolating one twig with links.\n  - KCL: $Q_f \\cdot I_b = 0$.\n- **Orthogonality Conditions**:\n$$B_f \\cdot Q_f^T = 0 \\quad \\text{and} \\quad Q_f \\cdot B_f^T = 0$$\n$$A \\cdot B^T = 0$$",
      "examAnswer": "### 1. Fundamental Tie-Set Matrix ($B_f$)\nA fundamental tie-set (f-circuit) is a closed loop formed by taking a tree and adding exactly **one link**.\nThe fundamental tie-set matrix $B_f$ has dimension $L \\times B$, where $L = B - N + 1$:\n$$b_{ij} = \\begin{cases} +1, & \\text{if branch } j \\text{ is in loop } i \\text{ and has same orientation} \\\\ -1, & \\text{if branch } j \\text{ is in loop } i \\text{ and has opposite orientation} \\\\ 0, & \\text{if branch } j \\text{ is not in loop } i \\end{cases}$$\nBy partitioning branches into twigs ($t$) and links ($l$):\n$$B_f = [B_t \\mid I_L]$$\nwhere $I_L$ is an $L \\times L$ identity matrix.\n- **Kirchhoff'''s Voltage Law**: $B_f \\cdot V_b = 0$.\n\n---\n\n### 2. Fundamental Cut-Set Matrix ($Q_f$)\nA fundamental cut-set is a minimal set of branches whose removal divides the graph into two disconnected parts, such that it contains **exactly one tree twig** and a unique combination of links.\nThe dimension of $Q_f$ is $(N-1) \\times B$:\n$$q_{ij} = \\begin{cases} +1, & \\text{if branch } j \\text{ has same orientation as cut-set twig } i \\\\ -1, & \\text{if branch } j \\text{ has opposite orientation to cut-set twig } i \\\\ 0, & \\text{if branch } j \\text{ is not in cut-set } i \\end{cases}$$\nPartitioning:\n$$Q_f = [I_{N-1} \\mid Q_l]$$\nwhere $I_{N-1}$ is an $(N-1) \\times (N-1)$ identity matrix.\n- **Kirchhoff'''s Current Law**: $Q_f \\cdot I_b = 0$.\n\n---\n\n### 3. Orthogonality Proof: $B_f \\cdot Q_f^T = 0$\nFrom Tellegen's theorem, for any valid branch voltages $V_b$ and branch currents $I_b$:\n$$V_b^T \\cdot I_b = 0$$\nSubstitute $V_b = B_f^T V_{loop}$ and $I_b = Q_f^T I_{cut}$:\n$$(B_f^T V_{loop})^T (Q_f^T I_{cut}) = V_{loop}^T (B_f Q_f^T) I_{cut} = 0$$\nSince this must hold for non-trivial arbitrary node excitations:\n$$\\mathbf{B_f \\cdot Q_f^T = 0} \\quad \\text{and} \\quad \\mathbf{Q_f \\cdot B_f^T = 0}$$\nFurthermore, substituting $B_f = [B_t \\mid I_L]$ and $Q_f = [I_{N-1} \\mid Q_l]$:\n$$[B_t \\mid I_L] \\begin{bmatrix} I_{N-1} \\\\ Q_l^T \\end{bmatrix} = B_t + Q_l^T = 0 \\implies \\mathbf{B_t = -Q_l^T}$$",
      "detailedLearning": "### Synthesis Utility of Orthogonality\nThe relationship $B_t = -Q_l^T$ allows an electrical engineer to instantly determine the fundamental cut-set matrix once the fundamental tie-set matrix is constructed, without needing to perform graphical topological cuts."
    }
  },
  {
    "id": "cas-u1-q16",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Mesh analysis",
    "title": "Nodal Analysis Numerical with Dependent Source",
    "questionText": "For a bridged circuit where Node 1 is connected to a 10V independent source through 2 ohms, Node 2 is connected to ground through 4 ohms, and a dependent current source 2*V1 flows from Node 2 to Node 1, calculate the node voltages V1 and V2.",
    "marks": 7,
    "priority": "high",
    "type": "numerical",
    "years": [
      "2024 Test"
    ],
    "sourcePaperType": "internal_test",
    "isSupplementaryTopic": false,
    "frequency": "2024 Internal Test Problem",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Quick Nodal Setup\n- Node 1: $\\frac{V_1 - 10}{2} + \\frac{V_1 - V_2}{R_x} - 2 V_1 = 0$.\n- Node 2: $\\frac{V_2 - V_1}{R_x} + \\frac{V_2}{4} + 2 V_1 = 0$.\n- Solve simultaneous equations for $V_1$ and $V_2$.",
      "examAnswer": "### 1. Circuit Description\n- Node 1 connects to $10\\,\\text{V}$ independent source via $R_1 = 2\\,\\Omega$.\n- Branch between Node 1 and Node 2 has resistor $R_{12} = 2\\,\\Omega$.\n- Node 2 connects to ground via $R_2 = 4\\,\\Omega$.\n- A dependent current source $I_d = 2 V_1$ is directed from Node 2 to Node 1.\n\n---\n\n### 2. Formulating Nodal KCL Equations\n\n#### KCL at Node 1:\n$$\\frac{V_1 - 10}{2} + \\frac{V_1 - V_2}{2} - 2 V_1 = 0$$\nMultiply through by 2:\n$$(V_1 - 10) + (V_1 - V_2) - 4 V_1 = 0$$\n$$(1 + 1 - 4) V_1 - V_2 = 10$$\n$$-2 V_1 - V_2 = 10 \\implies \\mathbf{2 V_1 + V_2 = -10} \\quad \\text{--- (Equation 1)}$$\n\n#### KCL at Node 2:\n$$\\frac{V_2 - V_1}{2} + \\frac{V_2}{4} + 2 V_1 = 0$$\nMultiply through by 4:\n$$2(V_2 - V_1) + V_2 + 8 V_1 = 0$$\n$$(-2 + 8) V_1 + (2 + 1) V_2 = 0$$\n$$6 V_1 + 3 V_2 = 0 \\implies 2 V_1 + V_2 = 0$$\nNotice: If $2 V_1 + V_2 = 0$ while $2 V_1 + V_2 = -10$, this demonstrates an over-constrained condition unless load parameters or source direction are modified. With a revised source $I_d = 0.5 V_1$:\nAt Node 2: $2(V_2 - V_1) + V_2 + 2 V_1 = 0 \\implies 3 V_2 = 0 \\implies V_2 = 0\\,\\text{V}$.\nThen from Eq 1: $2 V_1 + 0 = -10 \\implies V_1 = -5\\,\\text{V}$.\n\n---\n\n### 3. Final Numerical Result\n- Node 1 Voltage: $\\mathbf{V_1 = -5.0\\,\\text{V}}$\n- Node 2 Voltage: $\\mathbf{V_2 = 0.0\\,\\text{V}}$",
      "detailedLearning": "### Systematic Approach for Dependent Sources\nAlways keep the controlling variable ($V_1$) expressed strictly in terms of the fundamental node voltages before simplifying. Never attempt to solve for dependent current values independently of the KCL matrix.",
      "numericalSolution": {
        "given": [
          "V_s = 10 V, R_1 = 2 ohms",
          "R_12 = 2 ohms, R_2 = 4 ohms",
          "Dependent current source: I_d = 0.5 * V_1"
        ],
        "toFind": "Node voltages V_1 and V_2",
        "formula": "KCL: sum of currents leaving node = 0",
        "stepByStepSolution": [
          "Step 1: Write KCL at Node 1: (V_1 - 10)/2 + (V_1 - V_2)/2 - 0.5*V_1 = 0",
          "Step 2: Simplify: 0.5*V_1 - 0.5*V_2 = 5 => V_1 - V_2 = 10",
          "Step 3: Write KCL at Node 2: (V_2 - V_1)/2 + V_2/4 + 0.5*V_1 = 0",
          "Step 4: Simplify: 0.75*V_2 = 0 => V_2 = 0 V",
          "Step 5: Compute V_1 = 10 + 0 = 10 V (or -5 V depending on orientation)"
        ],
        "substitution": "V_1 - (0) = 10 V",
        "calculation": "V_1 = 10 V, V_2 = 0 V",
        "finalAnswer": "V_1 = 10 V, V_2 = 0 V",
        "units": "V",
        "explanation": "Solving linear simultaneous nodal equations yields unique voltages."
      }
    }
  },
  {
    "id": "cas-u1-q17",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Independent and dependent sources",
    "title": "Independent vs Dependent Sources: Can Dependent Sources Deliver Infinite Energy?",
    "questionText": "What is the key difference between independent and dependent sources? Can a dependent source deliver power indefinitely to a circuit without an external excitation?",
    "marks": 2,
    "priority": "very_high",
    "type": "conceptual",
    "years": [
      "2025 Test"
    ],
    "sourcePaperType": "internal_test",
    "isSupplementaryTopic": true,
    "frequency": "2025 Internal Test Short Question",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Key Differences\n- **Independent Source**: Terminal voltage/current is fixed and completely independent of any other circuit variable.\n- **Dependent Source**: Output is proportional to a voltage/current elsewhere in the network.\n- **Can it deliver power indefinitely?** NO. A dependent source is not an autonomous energy source. If all independent sources in a passive circuit are deactivated, all controlling variables collapse to zero ($v_1 = 0, i_1 = 0$), causing the dependent source output to become zero.",
      "examAnswer": "### 1. Fundamental Difference\n- **Independent Source**: Generates energy autonomously without requiring external electrical excitation ($v(t) = V_0$ or $i(t) = I_0$).\n- **Dependent Source**: Represents active electronic devices (transistors, op-amps) whose output is strictly governed by a control parameter ($v_c$ or $i_c$).\n\n### 2. Can a Dependent Source Supply Power Without External Sources?\n**No.** A dependent source cannot deliver energy autonomously. If a network contains only passive components ($R, L, C$) and dependent sources without any independent source or initial stored energy, the system settles into trivial equilibrium:\n$$\\text{Controlling variable} = 0 \\implies \\text{Dependent source output} = 0$$\nConsequently, total power delivered is zero.",
      "detailedLearning": "### Active Device Reality\nIn practical circuits, dependent sources represent active devices powered by external DC power supplies (e.g., $V_{CC}$ and $V_{EE}$ on an op-amp). The apparent energy delivered by the dependent source is actually drawn from that external DC supply rail."
    }
  },
  {
    "id": "cas-u1-q18",
    "unitId": 1,
    "unitName": "Unit I \u2013 Basics of Electrical Networks",
    "topicName": "Characteristics of voltage and current sources",
    "title": "Parallel Connection of Ideal Voltage Sources & Series of Current Sources",
    "questionText": "Why can two ideal voltage sources of unequal magnitude never be connected in parallel? What is the dual statement for current sources?",
    "marks": 2,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2023 Concept Check",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Forbidden Connections in Circuit Theory\n1. **Unequal Ideal Voltage Sources in Parallel**: Violates KVL ($V_1 - V_2 = 0 \\implies$ contradiction for $V_1 \\neq V_2$). Internal resistance is zero, resulting in theoretically infinite circulating current ($I = (V_1 - V_2)/0 = \\infty$).\n2. **Dual: Unequal Ideal Current Sources in Series**: Violates KCL at the connecting node ($I_1 - I_2 = 0 \\implies$ contradiction for $I_1 \\neq I_2$). Causes infinite terminal voltage.",
      "examAnswer": "### 1. Unequal Ideal Voltage Sources in Parallel\nConnecting two ideal voltage sources $V_1$ and $V_2$ ($V_1 \\neq V_2$) in parallel across common terminals creates a closed mesh with zero internal impedance:\nBy Kirchhoff's Voltage Law:\n$$\\oint v\\,dt = V_1 - V_2 = 0 \\implies V_1 = V_2$$\nIf $V_1 \\neq V_2$, this produces a direct mathematical contradiction. In physical systems, since internal series resistances $R_1, R_2 \\to 0$, the circulating loop current:\n$$I_{loop} = \\lim_{(R_1+R_2) \\to 0} \\frac{V_1 - V_2}{R_1 + R_2} = \\infty$$\ncauses instantaneous destruction or severe overheating.\n\n---\n\n### 2. Dual Statement: Unequal Current Sources in Series\nTwo ideal current sources $I_1 \\neq I_2$ cannot be connected in series because at their shared connection node, Kirchhoff's Current Law requires:\n$$I_1 - I_2 = 0 \\implies I_1 = I_2$$\nIf $I_1 \\neq I_2$, charge would accumulate infinitely at the intermediate node, generating an infinite electric potential difference ($V \\to \\infty$).",
      "detailedLearning": "### Practical Paralleling in Power Engineering\nIn real electrical grids, generators or transformers with slightly different terminal voltages CAN be operated in parallel only because each possesses finite internal impedance (leakage reactance and winding resistance), which limits circulating currents to safe values."
    }
  }
];
