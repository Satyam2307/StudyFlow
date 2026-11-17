import { CASQuestion } from "@/types/cas";

export const CAS_UNIT_2_QUESTIONS: CASQuestion[] = [
  {
    "id": "cas-u2-q1",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Superposition theorem",
    "title": "Superposition Theorem: Statement, Proof & Power Limitation",
    "questionText": "State and prove the Superposition Theorem for linear bilateral electrical networks. Explain why the theorem cannot be directly applied to calculate electrical power.",
    "marks": 7,
    "priority": "very_high",
    "type": "theorem",
    "years": [
      "2023",
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2023 & Dec 2019 (Top Exam Theorem)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Superposition Theorem Essentials\n- **Statement**: In any linear, bilateral network energized by multiple independent sources, the response (voltage or current) in any branch equals the algebraic sum of the individual responses caused by each independent source acting alone, with all other independent sources deactivated.\n- **Deactivation Rules**:\n  - Independent Voltage Source $\\to$ Replace by Short Circuit ($V = 0$, wire).\n  - Independent Current Source $\\to$ Replace by Open Circuit ($I = 0$, break).\n  - **Dependent Sources $\\to$ DO NOT TOUCH** (must remain active).\n- **Power Non-Linearity**: $P = I^2 R \\neq (I_1 + I_2)^2 R = I_1^2 R + I_2^2 R + 2 I_1 I_2 R$. Since power is non-linear (quadratic), superposition fails for power calculation!",
      "examAnswer": "### 1. Statement of the Superposition Theorem\nIn any linear, bilateral electrical network containing two or more independent sources, the total current flowing through, or total voltage developed across, any circuit branch is equal to the algebraic sum of the currents or voltages produced in that branch by each independent source acting independently, while all other independent sources are replaced by their respective internal impedances.\n\n---\n\n### 2. Operational Rules for Deactivating Sources\n- **Ideal Independent Voltage Sources**: Replaced with an ideal short circuit ($0\\,\\text{V}$, zero resistance wire).\n- **Ideal Independent Current Sources**: Replaced with an ideal open circuit ($0\\,\\text{A}$, infinite resistance break).\n- **Practical Sources**: Replaced by their internal resistances ($R_s$ or $R_{sh}$).\n- **Dependent (Controlled) Sources**: Must NEVER be deactivated; they remain active throughout each superposition step because their controlling parameter depends on network voltages/currents.\n\n---\n\n### 3. Mathematical Proof\nConsider a linear network with $n$ independent voltage sources $V_1, V_2, \\dots, V_n$ and branch currents $I_1, I_2, \\dots, I_m$.\nUsing matrix loop equations:\n$$[Z] [I] = [V]$$\nSince the network is linear and bilateral, impedance matrix $[Z]$ is symmetric and non-singular.\nInverting the matrix:\n$$[I] = [Z]^{-1} [V] = [Y] [V]$$\nFor any specific branch current $I_k$:\n$$I_k = Y_{k1} V_1 + Y_{k2} V_2 + \\dots + Y_{kn} V_n = \\sum_{j=1}^n Y_{kj} V_j$$\nwhere $Y_{kj} V_j$ represents the response current produced in branch $k$ when source $V_j$ acts alone ($V_m = 0$ for all $m \\neq j$).\nThus:\n$$I_k = I_{k1} + I_{k2} + \\dots + I_{kn}$$\nwhich proves the theorem.\n\n---\n\n### 4. Why Superposition Cannot Be Applied to Power\nThe Superposition Theorem is strictly valid only for **linear transfer operations** where the output satisfies homogeneity ($f(ax) = a f(x)$) and additivity ($f(x_1 + x_2) = f(x_1) + f(x_2)$).\nElectrical power is a **quadratic (non-linear)** function of current or voltage:\n$$P = I^2 R = (I_1 + I_2)^2 R = I_1^2 R + I_2^2 R + 2 I_1 I_2 R$$\n$$P = P_1 + P_2 + 2 I_1 I_2 R \\neq P_1 + P_2$$\nBecause of the cross-product term $2 I_1 I_2 R$, the total power is NOT the sum of individual powers.\n- **Correct Procedure**: First find total current $I = I_1 + I_2$ using superposition, then compute total power as $P = I^2 R$.",
      "detailedLearning": "### When Would Total Power Equal Sum of Individual Powers?\nIf the sources have **different frequencies** (e.g. DC source + AC source at $\\omega_1$, or two AC sources at distinct frequencies $\\omega_1 \\neq \\omega_2$), the time-average of the cross product $\\int_0^T 2 I_1 I_2 \\cos(\\omega_1 t)\\cos(\\omega_2 t) dt = 0$. In that orthogonal harmonic case, average power equals the sum of individual average powers ($P_{avg} = P_1 + P_2$)."
    }
  },
  {
    "id": "cas-u2-q2",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Thevenin's theorem",
    "title": "Thevenin's Theorem: Formulation, Proof & Dependent Source Techniques",
    "questionText": "State Thevenin's Theorem. Explain the procedures to determine Thevenin voltage (V_th) and Thevenin resistance (R_th) for: (a) independent sources only, and (b) circuits containing dependent sources.",
    "marks": 7,
    "priority": "very_high",
    "type": "theorem",
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Core Examination Question (Dec 2023, Dec 2022)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Thevenin's Theorem Essentials\n- **Statement**: Any linear two-terminal active network can be replaced at terminals A-B by an equivalent circuit consisting of a single independent voltage source $V_{th}$ in series with an impedance $R_{th}$.\n- **$V_{th}$ (Thevenin Voltage)**: Open-circuit voltage across terminals A-B ($V_{th} = V_{oc}$).\n- **$R_{th}$ for Independent Sources Only**: Look-back resistance with all independent sources turned off (voltage $\\to$ short, current $\\to$ open).\n- **$R_{th}$ for Circuits with Dependent Sources**:\n  - Method 1: $R_{th} = \\frac{V_{oc}}{I_{sc}}$\n  - Method 2 (Test Source): Turn off independent sources, connect $1\\,\\text{V}$ (or $1\\,\\text{A}$) test source across A-B, then $R_{th} = \\frac{V_{test}}{I_{test}}$.\n- **Load Current**: $I_L = \\frac{V_{th}}{R_{th} + R_L}$.",
      "examAnswer": "### 1. Statement of Thevenin'''s Theorem\nAny linear, active, bilateral electrical network terminating at two terminals A and B, containing energy sources and linear resistances, can be completely replaced by an equivalent circuit consisting of a single independent ideal voltage source $V_{th}$ in series with an equivalent resistance $R_{th}$.\n\n---\n\n### 2. Thevenin Equivalent Circuit Diagram\n\n```\n Linear Two-Terminal Network                Thevenin Equivalent Circuit\n      +---------------+                          +---[ R_th ]---+-----(+) Terminal A\n      |               |---(+) A                  |              |\n      |   Linear      |                        ( + )            |\n      |   Active      |                       ( V_th )        [R_L] Load  --> I_L\n      |   Network     |                        ( - )            |\n      |               |---(-) B                  |              |\n      +---------------+                          +--------------+-----( -) Terminal B\n```\nLoad current:\n$$I_L = \\frac{V_{th}}{R_{th} + R_L}, \\quad V_L = I_L R_L = V_{th} \\left(\\frac{R_L}{R_{th} + R_L}\\right)$$\n\n---\n\n### 3. Determination of Thevenin Parameters\n\n#### Case A: Circuits with Independent Sources Only\n1. **Thevenin Voltage ($V_{th}$)**: Remove the load resistor $R_L$ to create open-circuit terminals A-B. Compute open-circuit terminal voltage using nodal or mesh analysis:\n$$V_{th} = V_{oc}$$\n2. **Thevenin Resistance ($R_{th}$)**: Deactivate all independent sources:\n   - Independent voltage sources $\\to$ Short circuit ($0\\,\\text{V}$).\n   - Independent current sources $\\to$ Open circuit ($0\\,\\text{A}$).\n   Calculate equivalent resistance looking into terminals A-B:\n   $$R_{th} = R_{in}$$\n\n---\n\n#### Case B: Circuits Containing Dependent (Controlled) Sources\nWhen dependent sources are present, they CANNOT be turned off. Use one of the two standard methods:\n\n**Method 1: Open-Circuit / Short-Circuit Ratio**\n1. Compute open-circuit voltage across A-B with all sources active: $V_{oc} = V_{th}$.\n2. Place a short-circuit link across terminals A-B and calculate short-circuit current $I_{sc}$.\n3. Evaluate Thevenin resistance:\n$$R_{th} = \\frac{V_{oc}}{I_{sc}}$$\n\n**Method 2: External Test Source Injection**\n1. Deactivate ALL independent sources (independent voltage $\\to$ short, independent current $\\to$ open).\n2. Dependent sources remain active.\n3. Apply an external DC test voltage source $V_{test} = 1\\,\\text{V}$ (or test current $I_{test} = 1\\,\\text{A}$) across terminals A-B.\n4. Calculate the resulting current $I_{test}$ leaving the test source into the circuit.\n5. Compute:\n$$R_{th} = \\frac{V_{test}}{I_{test}}$$",
      "detailedLearning": "### Negative Thevenin Resistance\nIn networks with dependent sources, it is entirely possible to calculate a **negative Thevenin resistance** ($R_{th} < 0$). This occurs in active circuits with positive feedback (such as negative impedance converters). A negative resistance indicates that the circuit is supplying energy rather than dissipating it, which can lead to instability if not properly loaded."
    }
  },
  {
    "id": "cas-u2-q3",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Norton's theorem",
    "title": "Norton's Theorem & Dual Relationship with Thevenin's Theorem",
    "questionText": "State Norton's Theorem. Prove that Norton's equivalent network is the exact dual of Thevenin's equivalent network. Derive inter-conversion relations.",
    "marks": 7,
    "priority": "very_high",
    "type": "theorem",
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
      "quickRevision": "### Norton's Theorem Essentials\n- **Statement**: Any linear two-terminal active network can be replaced at terminals A-B by an equivalent circuit consisting of a single independent current source $I_N$ in parallel with an impedance $R_N$.\n- **Norton Current**: Short-circuit current flowing between terminals A-B ($I_N = I_{sc}$).\n- **Norton Resistance**: Equal to Thevenin resistance ($R_N = R_{th}$).\n- **Inter-conversion**:\n$$I_N = \\frac{V_{th}}{R_{th}}, \\quad V_{th} = I_N \\cdot R_N, \\quad R_N = R_{th}$$\n- **Load Current**:\n$$I_L = I_N \\left(\\frac{R_N}{R_N + R_L}\\right)$$",
      "examAnswer": "### 1. Statement of Norton'''s Theorem\nAny linear, active, bilateral electrical network terminating at two terminals A and B can be replaced by an equivalent circuit consisting of an ideal current source $I_N$ connected in parallel with an equivalent internal resistance $R_N$.\n\n---\n\n### 2. Norton Equivalent Circuit Diagram\n\n```\n         +----------+---------------+-----(+) Terminal A\n         |          |               |\n       ( ^ )        |               |\n      ( I_N )     [R_N]           [R_L] Load  --> I_L = I_N * R_N / (R_N + R_L)\n       ( | )        |               |\n         |          |               |\n         +----------+---------------+-----( -) Terminal B\n```\n\n---\n\n### 3. Mathematical Proof of Duality with Thevenin'''s Theorem\nConsider the Thevenin equivalent circuit across terminals A-B:\n$$V_L = V_{th} - I_L R_{th}$$\nDividing both sides by $R_{th}$:\n$$\\frac{V_L}{R_{th}} = \\frac{V_{th}}{R_{th}} - I_L$$\nRearranging for load current $I_L$:\n$$I_L = \\frac{V_{th}}{R_{th}} - \\frac{V_L}{R_{th}}$$\nNow define:\n$$I_N \\equiv \\frac{V_{th}}{R_{th}} = I_{sc}, \\quad R_N \\equiv R_{th}$$\nSubstitute $I_N$ and $R_N$:\n$$I_L = I_N - \\frac{V_L}{R_N}$$\nThis is precisely Kirchhoff's Current Law for a parallel circuit consisting of an ideal current source $I_N$ in parallel with resistor $R_N$ and connected to load $R_L$.\nSince $V_L = I_L R_L$:\n$$I_L = I_N - I_L \\frac{R_L}{R_N} \\implies I_L \\left(1 + \\frac{R_L}{R_N}\\right) = I_N$$\n$$I_L \\left(\\frac{R_N + R_L}{R_N}\\right) = I_N \\implies \\mathbf{I_L = I_N \\left(\\frac{R_N}{R_N + R_L}\\right)}$$\nThis matches current division in the Norton circuit, proving complete mathematical duality.",
      "detailedLearning": "### Practical Shortcut in Competitive Examinations\nWhen asked to determine Norton parameters:\n1. First find $V_{oc} = V_{th}$ and $R_{th}$ if nodal analysis is easier.\n2. Immediately convert: $I_N = V_{th} / R_{th}$ and $R_N = R_{th}$.\nThis eliminates the need to recalculate short-circuit mesh currents separately."
    }
  },
  {
    "id": "cas-u2-q4",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Maximum power transfer theorem",
    "title": "Maximum Power Transfer Theorem: DC & AC Derivations and Efficiency",
    "questionText": "State and prove the Maximum Power Transfer Theorem for: (a) purely resistive DC circuits (R_L = R_th), and (b) AC circuits with complex load impedance (Z_L = Z_th^*). State the efficiency at maximum power transfer.",
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
    "frequency": "Appeared in 2023, 2022, and 2019 (Top Repeated Theorem)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Maximum Power Transfer Summary\n- **DC Condition**: $R_L = R_{th}$.\n  - Max Power: $P_{max} = \\frac{V_{th}^2}{4 R_{th}}$.\n  - Efficiency at Max Power: $\\eta = 50\\%$.\n- **AC Condition (Variable $R_L$ and $X_L$)**:\n$$Z_L = Z_{th}^* = R_{th} - j X_{th} \\quad (R_L = R_{th}, \\, X_L = -X_{th})$$\n  - Max Power: $P_{max} = \\frac{V_{th}^2}{4 R_{th}}$.\n- **AC Condition (Variable $R_L$, fixed $X_L$)**:\n$$R_L = \\sqrt{R_{th}^2 + (X_{th} + X_L)^2}$$\n- **AC Condition (Magnitude only $|Z_L|$ variable)**: $|Z_L| = |Z_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}$.",
      "examAnswer": "### 1. Statement of Maximum Power Transfer Theorem\nA linear bilateral active network transfers maximum power to a variable load impedance connected across its terminals when the load impedance is the complex conjugate of the Thevenin equivalent impedance looking back into the network ($Z_L = Z_{th}^*$). For purely resistive DC circuits, maximum power is delivered when load resistance equals Thevenin resistance ($R_L = R_{th}$).\n\n---\n\n### 2. Derivation for Purely Resistive DC Circuits\nGiven Thevenin equivalent $(V_{th}, R_{th})$ connected to variable load $R_L$:\nLoad current:\n$$I_L = \\frac{V_{th}}{R_{th} + R_L}$$\nPower delivered to load:\n$$P_L = I_L^2 R_L = \\left(\\frac{V_{th}}{R_{th} + R_L}\\right)^2 R_L = \\frac{V_{th}^2 R_L}{(R_{th} + R_L)^2}$$\n\nTo maximize $P_L$ with respect to variable $R_L$, set $\\frac{dP_L}{dR_L} = 0$:\n$$\\frac{dP_L}{dR_L} = V_{th}^2 \\left[ \\frac{(R_{th} + R_L)^2 (1) - R_L \\cdot 2(R_{th} + R_L)}{(R_{th} + R_L)^4} \\right] = 0$$\n$$(R_{th} + R_L) \\left[ (R_{th} + R_L) - 2 R_L \\right] = 0$$\n$$R_{th} - R_L = 0 \\implies \\mathbf{R_L = R_{th}}$$\n\n#### Maximum Power Delivered:\n$$P_{max} = \\frac{V_{th}^2 R_{th}}{(R_{th} + R_{th})^2} = \\frac{V_{th}^2 R_{th}}{(2 R_{th})^2} = \\mathbf{\\frac{V_{th}^2}{4 R_{th}}}$$\n\n#### Efficiency at Maximum Power Transfer:\nTotal power generated: $P_{gen} = I_L^2 (R_{th} + R_L) = I_L^2 (2 R_{th}) = 2 P_{max}$.\n$$\\eta = \\frac{P_{load}}{P_{total}} \\times 100\\% = \\frac{I_L^2 R_L}{I_L^2 (R_{th} + R_L)} \\times 100\\% = \\frac{R_{th}}{2 R_{th}} \\times 100\\% = \\mathbf{50\\%}$$\n\n---\n\n### 3. Derivation for AC Circuits with Complex Load $Z_L = R_L + j X_L$\nLet $Z_{th} = R_{th} + j X_{th}$.\nLoad current magnitude:\n$$|I_L| = \\frac{V_{th}}{|Z_{th} + Z_L|} = \\frac{V_{th}}{\\sqrt{(R_{th} + R_L)^2 + (X_{th} + X_L)^2}}$$\nActive power dissipated in load resistor $R_L$:\n$$P_L = |I_L|^2 R_L = \\frac{V_{th}^2 R_L}{(R_{th} + R_L)^2 + (X_{th} + X_L)^2}$$\n\n1. **Maximizing with respect to $X_L$**:\n   Since $(X_{th} + X_L)^2 \\ge 0$, setting $X_{th} + X_L = 0 \\implies \\mathbf{X_L = -X_{th}}$ (resonant cancellation).\n2. **Maximizing with respect to $R_L$**:\n   With $X_L = -X_{th}$, $P_L = \\frac{V_{th}^2 R_L}{(R_{th} + R_L)^2}$, which from the DC proof yields:\n   $$\\mathbf{R_L = R_{th}}$$\nCombining both:\n$$\\mathbf{Z_L = R_L + j X_L = R_{th} - j X_{th} = Z_{th}^*}$$",
      "detailedLearning": "### Power Systems vs Communication Engineering\n- In **power transmission systems**, MPT is NOT desired because $50\\%$ efficiency means $50\\%$ of energy is wasted as heat in generators and transmission lines ($P_{loss} = P_{load}$). Power grids operate at high efficiency ($> 95\\%$) where $R_L \\gg R_{th}$.\n- In **electronic communications and RF systems**, signal power is in microwatts or milliwatts. Here, maximizing received signal power and preventing reflections (impedance matching) is paramount, so MPT ($Z_L = Z_{th}^*$) is strictly enforced."
    }
  },
  {
    "id": "cas-u2-q5",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Tellegen's theorem",
    "title": "Tellegen's Theorem: Proof, Energy Conservation & Quasi-Tellegen Concept",
    "questionText": "State Tellegen's Theorem and prove it using KVL and KCL. Explain why Tellegen's theorem holds true regardless of whether elements are linear, non-linear, time-invariant, or time-varying.",
    "marks": 7,
    "priority": "very_high",
    "type": "theorem",
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
      "quickRevision": "### Tellegen's Theorem Highlights\n- **Statement**: For any lumped electrical network of $b$ branches and $n$ nodes:\n$$\\sum_{k=1}^b v_k(t) \\cdot i_k(t) = 0$$\n- **Quasi-Tellegen Theorem**: If network $N'$ has the identical topological graph as network $N$, but different elements:\n$$\\sum_{k=1}^b v_k i_k' = 0 \\quad \\text{and} \\quad \\sum_{k=1}^b v_k' i_k = 0$$\n- **Key Property**: Depends **only on Kirchhoff'''s laws (KVL and KCL)** and network topology; completely independent of element types (valid for non-linear, active, time-varying networks).",
      "examAnswer": "### 1. Statement of Tellegen'''s Theorem\nIn any arbitrary lumped electrical network consisting of $b$ branches and $n$ nodes, if branch voltages $v_k$ satisfy Kirchhoff's Voltage Law (KVL) around every closed loop, and branch currents $i_k$ satisfy Kirchhoff's Current Law (KCL) at every node, then the algebraic sum of products of branch voltages and branch currents across all $b$ branches at any instant of time is identically zero:\n$$\\sum_{k=1}^b v_k(t) \\cdot i_k(t) = 0$$\n\n---\n\n### 2. Mathematical Proof using Network Topology\n\nLet:\n- $V_b = [v_1, v_2, \\dots, v_b]^T$ be the branch voltage vector.\n- $I_b = [i_1, i_2, \\dots, i_b]^T$ be the branch current vector.\n- $V_n = [V_{n1}, V_{n2}, \\dots, V_{n(n-1)}]^T$ be the node voltage vector with respect to datum.\n- $A$ be the $(n-1) \\times b$ reduced incidence matrix of the network graph.\n\nFrom network topology and KVL:\nThe branch voltages can be uniquely expressed in terms of node voltages:\n$$V_b = A^T \\cdot V_n$$\n\nFrom Kirchhoff's Current Law (KCL):\nThe algebraic sum of currents leaving every non-reference node is zero:\n$$A \\cdot I_b = 0$$\n\nNow evaluate total instantaneous network power:\n$$P_{total} = \\sum_{k=1}^b v_k i_k = V_b^T \\cdot I_b$$\nSubstitute $V_b = A^T V_n$:\n$$V_b^T \\cdot I_b = (A^T V_n)^T \\cdot I_b = (V_n^T A) \\cdot I_b = V_n^T \\cdot (A \\cdot I_b)$$\nSince by KCL, $A \\cdot I_b = 0$:\n$$V_b^T \\cdot I_b = V_n^T \\cdot 0 = 0$$\n$$\\mathbf{\\sum_{k=1}^b v_k(t) \\cdot i_k(t) = 0}$$\n\n---\n\n### 3. Why Tellegen'''s Theorem is Element-Independent\nNotice that the derivation above relied strictly on two geometric conditions:\n1. $V_b = A^T V_n$ (KVL depends only on node potential differences).\n2. $A I_b = 0$ (KCL depends only on continuity of current).\nAt no point was any relationship between $v_k$ and $i_k$ (Ohm's law $v = iR$, inductance $v = L di/dt$, diode $i = I_s e^{v/V_T}$, etc.) utilized.\nConsequently:\n- The theorem holds for **linear, non-linear, passive, active, time-invariant, and time-varying elements**.\n- It is the most generalized expression of conservation of energy in electrical network theory.",
      "detailedLearning": "### Quasi-Tellegen Theorem and Sensitivity Analysis\nThe Quasi-Tellegen theorem states that if two different circuits $N$ and $N'$ share the identical topological graph (same nodes and branch connections), but contain completely different components, the cross-sum is zero:\n$$\\sum_{k=1}^b v_k(t) \\cdot i_k'(t) = 0$$\nThis powerful relation is the mathematical basis for **Adjoint Network Sensitivity Analysis** in computer-aided circuit simulators (like SPICE)."
    }
  },
  {
    "id": "cas-u2-q6",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Reciprocity theorem",
    "title": "Reciprocity Theorem: Statement, Conditions & Proof in Two-Port Networks",
    "questionText": "State and prove the Reciprocity Theorem for a passive linear bilateral two-port network. Give an example of an electrical component where reciprocity fails.",
    "marks": 7,
    "priority": "high",
    "type": "theorem",
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
      "quickRevision": "### Reciprocity Theorem Essentials\n- **Statement**: In any linear, passive, bilateral network, if a single voltage source $V_1$ at port 1 produces a current $I_2$ at port 2, then placing the same voltage source $V_1$ at port 2 will produce an identical current $I_1 = I_2$ at port 1.\n- **Ratio of Transfer**: $\\frac{V_1}{I_2} = \\frac{V_2}{I_1} \\implies Z_{12} = Z_{21}$ and $Y_{12} = Y_{21}$.\n- **Conditions**: Network must be linear, passive (no internal independent or dependent sources), and bilateral.\n- **Where Reciprocity Fails**: Active devices (Transistors, Op-Amps, controlled sources) and non-reciprocal ferrite devices (Gyrators, Circulators, Isolators).",
      "examAnswer": "### 1. Statement of Reciprocity Theorem\nIn any passive, linear, bilateral electrical network, the ratio of excitation (voltage or current) applied at one branch to the resulting response (current or voltage) observed in another branch remains completely invariant if the positions of excitation and response are interchanged.\n\n- **Voltage Excitation / Current Response**:\n$$\\frac{I_2}{V_1} \\Bigg|_{V_2 = 0} = \\frac{I_1}{V_2} \\Bigg|_{V_1 = 0} \\implies Y_{21} = Y_{12}$$\n- **Current Excitation / Voltage Response**:\n$$\\frac{V_2}{I_1} \\Bigg|_{I_2 = 0} = \\frac{V_1}{I_2} \\Bigg|_{I_1 = 0} \\implies Z_{21} = Z_{12}$$\n\n---\n\n### 2. Proof using Symmetrical Impedance Matrix\nConsider a two-mesh network described by loop impedance matrix $[Z]$:\n$$\\begin{bmatrix} Z_{11} & Z_{12} \\\\ Z_{21} & Z_{22} \\end{bmatrix} \\begin{bmatrix} I_1 \\\\ I_2 \\end{bmatrix} = \\begin{bmatrix} V_1 \\\\ V_2 \\end{bmatrix}$$\nSince the network consists solely of passive bilateral components ($R, L, C$), mutual impedances are symmetric:\n$$Z_{12} = Z_{21}$$\n\n#### Case 1: Voltage source $V_1$ applied at mesh 1 with mesh 2 short-circuited ($V_2 = 0$)\nUsing Cramer's Rule to solve for $I_2$:\n$$I_2 = \\frac{\\Delta_2}{\\Delta} = \\frac{\\det \\begin{bmatrix} Z_{11} & V_1 \\\\ Z_{21} & 0 \\end{bmatrix}}{\\Delta} = \\frac{-Z_{21} V_1}{\\Delta}$$\n\n#### Case 2: Same voltage source $V_2 = V_1$ applied at mesh 2 with mesh 1 short-circuited ($V_1 = 0$)\nSolving for current $I_1$ in mesh 1:\n$$I_1 = \\frac{\\Delta_1}{\\Delta} = \\frac{\\det \\begin{bmatrix} 0 & Z_{12} \\\\ V_2 & Z_{22} \\end{bmatrix}}{\\Delta} = \\frac{-Z_{12} V_2}{\\Delta}$$\nSince $V_1 = V_2$ and $Z_{12} = Z_{21}$:\n$$I_1 = \\frac{-Z_{21} V_1}{\\Delta} = I_2$$\n$$\\mathbf{I_1 = I_2}$$\nHence, the response current is identical, proving the theorem.\n\n---\n\n### 3. Non-Reciprocal Components\nReciprocity fails in:\n1. **Transistors and Dependent Sources**: A BJT has $h_{21} = \\beta$ (forward current gain $\\approx 100$), but $h_{12} \\approx 10^{-4}$ (reverse voltage feedback), violating $h_{12} = -h_{21}$.\n2. **Gyrators**: A gyrator is defined by $v_1 = -R i_2$ and $v_2 = R i_1$, so $Z_{12} = -R \\neq Z_{21} = R$.\n3. **Ferrite Devices**: Isolators and circulators designed for microwave frequencies.",
      "detailedLearning": "### Practical Use in Antenna Theory\nThe reciprocity theorem in CAS directly underpins **antenna reciprocity**: the transmitting radiation pattern and directivity of any passive antenna are completely identical to its receiving pattern."
    }
  },
  {
    "id": "cas-u2-q7",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Compensation theorem",
    "title": "Compensation Theorem: Formulation & Sensitivity Calculations",
    "questionText": "State the Compensation Theorem. Explain how it is used to calculate change in current (delta I) when a branch impedance changes by delta Z.",
    "marks": 7,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2023 University Exam",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Compensation Theorem Summary\n- **Statement**: If an impedance $Z$ carrying current $I$ changes by $\\Delta Z$, the change in currents throughout the rest of the network is equivalent to the currents produced by an opposing compensating voltage source:\n$$V_c = I \\cdot \\Delta Z$$\nconnected in series with $(Z + \\Delta Z)$, with all other original sources deactivated.\n- **Change in Branch Current**:\n$$\\Delta I = \\frac{-I \\cdot \\Delta Z}{Z_{th} + (Z + \\Delta Z)}$$\n- **Application**: Analyzing tolerance, temperature drift, and sensitivity without resolving the entire network from scratch.",
      "examAnswer": "### 1. Statement of the Compensation Theorem\nIn any linear, active, bilateral network, if the impedance $Z$ of a branch carrying an initial steady current $I$ is altered by an incremental amount $\\Delta Z$, the resulting incremental changes in currents throughout all branches of the network are exactly equal to the currents that would be produced by a single compensating voltage source $V_c$ placed in series with the modified branch $(Z + \\Delta Z)$, given by:\n$$V_c = I \\cdot \\Delta Z$$\nopposing the original current $I$, with all other original independent sources replaced by their internal impedances.\n\n---\n\n### 2. Mathematical Formulation of Current Change\n\n```\n Original State                              Compensated Incremental State\n      +---------------+                           +---------------+\n      |   Linear      |                           |   Deactivated |\n      |   Active      |                           |   Linear      |\n      |   Network     |                           |   Network     |\n      |               |---[  Z  ]---              |   (Z_th)      |---[Z + dZ]---\n      |               |      I                    |               |     +---(+)\n      +---------------+                           +---------------+     | V_c = I*dZ\n                                                                        +---(-)\n```\n\n1. In the original network, let the branch impedance be $Z$ and current be $I$.\n2. The Thevenin equivalent looking back from the branch terminals is $(V_{th}, Z_{th})$.\n3. Original current:\n$$I = \\frac{V_{th}}{Z_{th} + Z}$$\n4. When impedance changes to $Z' = Z + \\Delta Z$, the new current is:\n$$I' = \\frac{V_{th}}{Z_{th} + Z + \\Delta Z}$$\n5. The net change in branch current is:\n$$\\Delta I = I' - I = \\frac{V_{th}}{Z_{th} + Z + \\Delta Z} - \\frac{V_{th}}{Z_{th} + Z}$$\n$$\\Delta I = V_{th} \\left[ \\frac{(Z_{th} + Z) - (Z_{th} + Z + \\Delta Z)}{(Z_{th} + Z)(Z_{th} + Z + \\Delta Z)} \\right] = \\frac{-V_{th} \\cdot \\Delta Z}{(Z_{th} + Z)(Z_{th} + Z + \\Delta Z)}$$\nSince $I = \\frac{V_{th}}{Z_{th} + Z}$:\n$$\\mathbf{\\Delta I = \\frac{-I \\cdot \\Delta Z}{Z_{th} + Z + \\Delta Z}}$$\nThe negative sign confirms that the compensating voltage source $V_c = I \\Delta Z$ acts in direct opposition to original current $I$.",
      "detailedLearning": "### Practical Utility\nWhen evaluating manufacturing tolerance variations (e.g. testing whether a $\\pm 5\\%$ resistor shift pushes circuit bias out of spec), the compensation theorem allows one to evaluate $\\Delta I$ with a single simple calculation without solving large nodal matrices."
    }
  },
  {
    "id": "cas-u2-q8",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Miller's theorem",
    "title": "Miller's Theorem: Derivation of Equivalent Input & Output Impedances",
    "questionText": "State Miller's Theorem. Derive the expressions for equivalent input impedance Z_1 and output impedance Z_2 for a feedback branch connecting two nodes.",
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
      "quickRevision": "### Miller's Theorem Formulas\n- Feedback impedance $Z$ between node 1 (voltage $V_1$) and node 2 (voltage $V_2 = K V_1$):\n- **Input Equivalent Impedance (Node 1 to Ground)**:\n$$Z_1 = \\frac{Z}{1 - K}$$\n- **Output Equivalent Impedance (Node 2 to Ground)**:\n$$Z_2 = \\frac{Z}{1 - 1/K} = \\frac{K \\cdot Z}{K - 1}$$\n- **Miller Effect on Capacitance ($C_f$)**:\n$$C_1 = C_f(1 - K), \\quad C_2 = C_f\\left(1 - \\frac{1}{K}\\right)$$\nFor inverting amplifier with large negative gain $K = -A$, input capacitance is multiplied: $C_1 = C_f(1 + A)$ (severely reduces high-frequency bandwidth).",
      "examAnswer": "### 1. Statement of Miller'''s Theorem\nMiller's Theorem states that in a linear network containing two nodes with node voltages $V_1$ and $V_2$ interconnected by a floating feedback branch with impedance $Z$, the floating impedance can be replaced by two grounded equivalent impedances:\n1. An input impedance $Z_1$ connected between node 1 and ground.\n2. An output impedance $Z_2$ connected between node 2 and ground.\nwhere $K = \\frac{V_2}{V_1}$ is the voltage transfer ratio between the two nodes.\n\n---\n\n### 2. Circuit Diagram\n\n```\n Before Miller Transformation:\n              +-----[ Z ]-----+\n              |               |\n          Node 1            Node 2\n           (V_1)             (V_2 = K*V_1)\n              |               |\n              +---[Network]---+\n\n After Miller Transformation:\n          Node 1            Node 2\n           (V_1)             (V_2)\n             |                 |\n           [Z_1]             [Z_2]\n             |                 |\n           Ground            Ground\n```\n\n---\n\n### 3. Derivation of Equivalent Impedances\n\n#### (a) Derivation of Input Impedance $Z_1$\nThe current $I_1$ leaving node 1 into impedance $Z$ is:\n$$I_1 = \\frac{V_1 - V_2}{Z}$$\nSubstitute $V_2 = K \\cdot V_1$:\n$$I_1 = \\frac{V_1 - K V_1}{Z} = \\frac{V_1(1 - K)}{Z}$$\nThe equivalent input impedance $Z_1$ seen from node 1 to ground is:\n$$Z_1 = \\frac{V_1}{I_1} = \\frac{V_1}{\\frac{V_1(1 - K)}{Z}} = \\mathbf{\\frac{Z}{1 - K}}$$\n\n---\n\n#### (b) Derivation of Output Impedance $Z_2$\nThe current $I_2$ leaving node 2 into impedance $Z$ is:\n$$I_2 = \\frac{V_2 - V_1}{Z}$$\nSubstitute $V_1 = \\frac{V_2}{K}$:\n$$I_2 = \\frac{V_2 - V_2/K}{Z} = \\frac{V_2(1 - 1/K)}{Z}$$\nThe equivalent output impedance $Z_2$ seen from node 2 to ground is:\n$$Z_2 = \\frac{V_2}{I_2} = \\frac{V_2}{\\frac{V_2(1 - 1/K)}{Z}} = \\mathbf{\\frac{Z}{1 - 1/K} = \\frac{K \\cdot Z}{K - 1}}$$",
      "detailedLearning": "### Dual Miller Theorem\nThe dual of Miller's theorem applies to a shared series impedance connecting two meshes with loop currents $I_1$ and $I_2 = \\alpha I_1$. It replaces the mutual impedance with two uncoupled series impedances in each loop."
    }
  },
  {
    "id": "cas-u2-q9",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Millman's theorem",
    "title": "Millman's Theorem: Derivation for Parallel Voltage & Current Sources",
    "questionText": "State Millman's Theorem for parallel voltage sources and parallel current sources. Derive the equivalent voltage V_eq and equivalent impedance Z_eq.",
    "marks": 7,
    "priority": "high",
    "type": "derivation",
    "years": [
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2019 University Exam",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Millman's Theorem Formulas\n- For $n$ parallel branches containing voltage sources $V_k$ with series impedances $Z_k$ (admittances $Y_k = 1/Z_k$):\n$$V_{eq} = \\frac{\\sum_{k=1}^n V_k Y_k}{\\sum_{k=1}^n Y_k} = \\frac{\\pm V_1 Y_1 \\pm V_2 Y_2 \\pm \\dots \\pm V_n Y_n}{Y_1 + Y_2 + \\dots + Y_n}$$\n- Equivalent Internal Impedance:\n$$Z_{eq} = \\frac{1}{\\sum_{k=1}^n Y_k}$$\n- Sign Convention: $+V_k$ if positive terminal faces reference terminal A, $-V_k$ if negative terminal faces A.",
      "examAnswer": "### 1. Statement of Millman'''s Theorem\nMillman's Theorem states that when multiple energy branches containing voltage sources $V_1, V_2, \\dots, V_n$ in series with respective internal impedances $Z_1, Z_2, \\dots, Z_n$ are connected in parallel across common terminals A and B, the entire combination can be replaced by a single equivalent voltage generator $V_{eq}$ in series with an equivalent impedance $Z_{eq}$.\n\n---\n\n### 2. Circuit Diagram & Derivation\n\n```\n Branch 1:        Branch 2:        Branch n:\n  +-[Z_1]-o        +-[Z_2]-o        +-[Z_n]-o\n  |       |        |       |        |       |\n( + )     |      ( + )     |      ( + )     |\n( V_1 )   +-----( V_2 )   +-----( V_n )   +------(+) Terminal A  --> V_AB = V_eq\n( - )     |      ( - )     |      ( - )     |\n  |       |        |       |        |       |\n  +-------+--------+-------+--------+-------+------(-) Terminal B\n```\n\n#### Step 1: Transform each branch to an equivalent current source\nUsing source transformation, each series voltage branch $(V_k, Z_k)$ is converted to a parallel current branch:\n$$I_k = V_k \\cdot Y_k, \\quad \\text{where } Y_k = \\frac{1}{Z_k}$$\n\n#### Step 2: Sum all parallel current sources\nThe total equivalent current source is:\n$$I_{total} = \\sum_{k=1}^n I_k = \\sum_{k=1}^n V_k Y_k = V_1 Y_1 + V_2 Y_2 + \\dots + V_n Y_n$$\n\n#### Step 3: Combine all parallel admittances\nThe total parallel admittance is:\n$$Y_{eq} = \\sum_{k=1}^n Y_k = Y_1 + Y_2 + \\dots + Y_n \\implies \\mathbf{Z_{eq} = \\frac{1}{Y_{eq}} = \\frac{1}{\\sum_{k=1}^n Y_k}}$$\n\n#### Step 4: Reconvert to equivalent voltage source\n$$V_{eq} = \\frac{I_{total}}{Y_{eq}} = \\mathbf{\\frac{\\sum_{k=1}^n V_k Y_k}{\\sum_{k=1}^n Y_k} = \\frac{V_1 Y_1 + V_2 Y_2 + \\dots + V_n Y_n}{Y_1 + Y_2 + \\dots + Y_n}}$$",
      "detailedLearning": "### Dual Form of Millman's Theorem\nFor $n$ series current sources $I_k$ with parallel impedances $Z_k$, the equivalent current source is:\n$$I_{eq} = \\frac{\\sum_{k=1}^n I_k Z_k}{\\sum_{k=1}^n Z_k}$$"
    }
  },
  {
    "id": "cas-u2-q10",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Bartlett's bisection theorem",
    "title": "Bartlett's Bisection Theorem: Symmetrical Lattice to T & Pi Conversion",
    "questionText": "State Bartlett's Bisection Theorem. Explain how it converts a symmetrical network into equivalent half-circuits and derive expressions for open-circuit and short-circuit impedances.",
    "marks": 7,
    "priority": "high",
    "type": "derivation",
    "years": [
      "2023",
      "2025 Test"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2023 University Exam & 2025 Test",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Bartlett's Bisection Theorem Summary\n- **Applies to**: Symmetrical, reciprocal two-port networks.\n- **Bisection Principle**: Cut the network into two identical halves along its axis of symmetry.\n- **Open-Circuit Half-Circuit Impedance ($Z_{oc}$)**: Input impedance of half-circuit when all severed cross-lines are left **open-circuited**.\n- **Short-Circuit Half-Circuit Impedance ($Z_{sc}$)**: Input impedance of half-circuit when all severed cross-lines are **short-circuited to ground**.\n- **Symmetrical Lattice Equivalents**:\n  - Series arm: $Z_a = Z_{sc}$\n  - Diagonal (cross) arm: $Z_b = Z_{oc}$\n  - Symmetrical T-section: $Z_1 = Z_{sc}$, $Z_2 = \\frac{Z_{oc} - Z_{sc}}{2}$.",
      "examAnswer": "### 1. Statement of Bartlett'''s Bisection Theorem\nBartlett's Bisection Theorem states that any symmetrical two-port network can be bisected along its electrical and geometric axis of symmetry into two identical half-networks. The parameters of the overall symmetrical network (such as equivalent lattice, T, or $\\Pi$ representations) can be uniquely determined from two elementary driving-point measurements performed on a single isolated half-network:\n1. $Z_{oc}$: Input impedance of the half-circuit when the bisected connecting leads are left **open-circuited**.\n2. $Z_{sc}$: Input impedance of the half-circuit when the bisected connecting leads are **short-circuited together**.\n\n---\n\n### 2. Method of Bisection\n1. Draw the network such that an axis of physical and electrical symmetry divides it into two mirror-image halves.\n2. Cut all branches crossing the axis of symmetry.\n   - Any series impedance $Z_s$ on the axis is split into two series impedances of $\\frac{Z_s}{2}$.\n   - Any parallel shunt admittance $Y_p$ on the axis is split into two parallel admittances of $\\frac{Y_p}{2}$ (resistors doubled: $2R_p$).\n3. **Open-Circuit Half-Circuit ($Z_{oc}$)**:\n   Excitation applied at port 1 while bisected boundary terminals are open. This corresponds to **even-mode excitation** ($V_1 = V_2$).\n4. **Short-Circuit Half-Circuit ($Z_{sc}$)**:\n   Excitation applied at port 1 while bisected boundary terminals are shorted to ground. This corresponds to **odd-mode excitation** ($V_1 = -V_2$).\n\n---\n\n### 3. Lattice Arm Equivalences\nFor an equivalent symmetrical lattice with series arms $Z_a$ and cross arms $Z_b$:\n$$\\mathbf{Z_a = Z_{sc}} \\quad \\text{and} \\quad \\mathbf{Z_b = Z_{oc}}$$\n\nFor equivalent symmetrical T-network:\n- Series arm impedance: $Z_{series} = Z_{sc}$\n- Shunt branch impedance: $Z_{shunt} = \\frac{Z_{oc} - Z_{sc}}{2}$",
      "detailedLearning": "### Application to Symmetrical Filters\nBartlett's bisection theorem is heavily utilized in classical filter design (m-derived and constant-k filter sections) to analyze image impedances:\n$$Z_0 = \\sqrt{Z_{oc} \\cdot Z_{sc}}$$\nand propagation constant:\n$$\\tanh(\\gamma / 2) = \\sqrt{\\frac{Z_{sc}}{Z_{oc}}}$$"
    }
  },
  {
    "id": "cas-u2-q11",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Power triangle",
    "title": "AC Power Triangle: Active, Reactive & Apparent Power",
    "questionText": "Define the AC power triangle. Explain Active Power (P), Reactive Power (Q), and Apparent Power (S) with units, mathematical expressions, and phasor diagrams.",
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
      "quickRevision": "### Power Triangle Essentials\n- **Complex Power**: $\\mathbf{S} = \\mathbf{V} \\mathbf{I}^* = P + j Q = |S| \\angle \\theta$.\n- **Active (Real) Power**: $P = V I \\cos\\theta$ (Watts, $\\text{W}$ or $\\text{kW}$). Does actual physical work.\n- **Reactive Power**: $Q = V I \\sin\\theta$ (Volt-Amperes Reactive, $\\text{VAR}$ or $\\text{kVAR}$). Sustains electromagnetic/electrostatic fields.\n- **Apparent Power**: $S = |\\mathbf{S}| = V I = \\sqrt{P^2 + Q^2}$ (Volt-Amperes, $\\text{VA}$ or $\\text{kVA}$).\n- **Power Factor**: $\\text{pf} = \\cos\\theta = \\frac{P}{S}$.\n  - Inductive load: Lagging pf ($Q > 0$).\n  - Capacitive load: Leading pf ($Q < 0$).",
      "examAnswer": "### 1. Complex Power & The Power Triangle\nWhen an alternating voltage $\\mathbf{V} = V \\angle \\alpha$ is applied across a load impedance $Z = |Z| \\angle \\theta$, producing current $\\mathbf{I} = I \\angle (\\alpha - \\theta)$, the **complex power** $\\mathbf{S}$ entering the load is:\n$$\\mathbf{S} = \\mathbf{V} \\cdot \\mathbf{I}^* = (V \\angle \\alpha) (I \\angle -(\\alpha - \\theta)) = V I \\angle \\theta = V I \\cos\\theta + j V I \\sin\\theta$$\n$$\\mathbf{S = P + j Q}$$\n\n---\n\n### 2. Components of the Power Triangle\n\n#### (a) Active (Real) Power ($P$)\n- **Formula**: $P = V I \\cos\\theta$\n- **Units**: Watts ($\\text{W}$), Kilowatts ($\\text{kW}$).\n- **Physical Meaning**: The actual time-averaged energy consumed per second and transformed into heat, light, or mechanical torque.\n\n#### (b) Reactive Power ($Q$)\n- **Formula**: $Q = V I \\sin\\theta$\n- **Units**: Volt-Amperes Reactive ($\\text{VAR}$), $\\text{kVAR}$.\n- **Physical Meaning**: Energy that oscillates back and forth between source and reactive magnetic/electric fields without doing net work.\n  - Inductors **absorb** reactive power ($Q > 0$, lagging).\n  - Capacitors **supply** reactive power ($Q < 0$, leading).\n\n#### (c) Apparent Power ($S$)\n- **Formula**: $S = V \\cdot I = \\sqrt{P^2 + Q^2}$\n- **Units**: Volt-Amperes ($\\text{VA}$), $\\text{kVA}$.\n- **Physical Meaning**: Total rating of electrical equipment (transformers, generators) determining thermal insulation and wire conductor sizing.\n\n---\n\n### 3. Graphical Power Triangle Diagram\n\n```\n Lagging Power Factor (Inductive Load)\n                  /|\n                /  |\n     S (kVA)  /    | Q (kVAR)  [Inductive, +Q]\n            /      |\n          / theta  |\n        +----------+\n          P (kW)\n\n  Relationships:\n  cos(theta) = P / S  (Power Factor)\n  sin(theta) = Q / S\n  tan(theta) = Q / P\n  S^2 = P^2 + Q^2\n```",
      "detailedLearning": "### Power Factor Correction\nIndustrial inductive loads (induction motors) operate at lagging power factors ($0.7$ to $0.8$), drawing excessive line current $I = P / (V \\cos\\theta)$ and causing transmission losses ($I^2 R$). Connecting shunt capacitor banks supplies reactive power locally ($-Q_C$), reducing total reactive power $Q' = Q_L - Q_C$ and driving the power factor close to unity."
    }
  },
  {
    "id": "cas-u2-q12",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Star-connected loads",
    "title": "Balanced 3-Phase Star System: Line vs. Phase Derivations & Phasors",
    "questionText": "Derive the mathematical relationship between line voltages and phase voltages, and line currents and phase currents in a balanced three-phase star-connected system. Draw the complete phasor diagram.",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
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
      "quickRevision": "### 3-Phase Star (Y) Formulas\n- **Line Current vs Phase Current**:\n$$I_L = I_{ph}$$\n- **Line Voltage vs Phase Voltage**:\n$$V_L = \\sqrt{3} \\cdot V_{ph} \\approx 1.732 V_{ph}$$\n- **Phase Relationship**: Each line voltage leads its respective phase voltage by $30^\\circ$.\n- **Total 3-Phase Power**:\n$$P = 3 V_{ph} I_{ph} \\cos\\theta = \\sqrt{3} V_L I_L \\cos\\theta$$\n$$Q = \\sqrt{3} V_L I_L \\sin\\theta, \\quad S = \\sqrt{3} V_L I_L$$",
      "examAnswer": "### 1. Circuit Representation of Star-Connected System\nIn a 3-phase star-connected generator or load with phases R, Y, B and neutral point N:\nPhase voltages:\n$$V_{RN} = V_{ph} \\angle 0^\\circ$$\n$$V_{YN} = V_{ph} \\angle -120^\\circ$$\n$$V_{BN} = V_{ph} \\angle -240^\\circ = V_{ph} \\angle +120^\\circ$$\n\n---\n\n### 2. Relationship between Line Current and Phase Current\nIn a star connection, each line conductor is directly connected in series with its corresponding phase winding:\n$$\\mathbf{I_L = I_{ph}}$$\n$$I_R = I_{phR}, \\quad I_Y = I_{phY}, \\quad I_B = I_{phB}$$\n\n---\n\n### 3. Derivation: Line Voltage vs Phase Voltage ($V_L = \\sqrt{3} V_{ph}$)\nThe line-to-line voltage $V_{RY}$ between lines R and Y is the potential difference between terminals R and Y:\n$$V_{RY} = V_{RN} - V_{YN} = V_{RN} + (-V_{YN})$$\n\nUsing vector subtraction with angle between $V_{RN}$ and $-V_{YN}$ being $180^\\circ - 120^\\circ = 60^\\circ$:\n$$V_{RY} = \\sqrt{V_{RN}^2 + V_{YN}^2 + 2 V_{RN} V_{YN} \\cos(60^\\circ)}$$\nSince $|V_{RN}| = |V_{YN}| = V_{ph}$:\n$$V_{RY} = \\sqrt{V_{ph}^2 + V_{ph}^2 + 2 V_{ph}^2 \\left(\\frac{1}{2}\\right)} = \\sqrt{3 V_{ph}^2} = \\sqrt{3} V_{ph}$$\n$$\\mathbf{V_L = \\sqrt{3} V_{ph}}$$\n\nPhase angle $\\phi$ of $V_{RY}$ with respect to $V_{RN}$:\n$$\\tan\\phi = \\frac{V_{ph} \\sin(60^\\circ)}{V_{ph} + V_{ph} \\cos(60^\\circ)} = \\frac{\\frac{\\sqrt{3}}{2}}{1 + \\frac{1}{2}} = \\frac{\\sqrt{3}/2}{3/2} = \\frac{1}{\\sqrt{3}} \\implies \\mathbf{\\phi = 30^\\circ}$$\nTherefore:\n$$\\mathbf{V_{RY} = \\sqrt{3} V_{ph} \\angle +30^\\circ}$$\nEvery line voltage is $\\sqrt{3}$ times the phase voltage in magnitude and **leads the phase voltage by $30^\\circ$**.",
      "detailedLearning": "### Total Three-Phase Power in Star\nTotal active power is the sum of powers in all three phases:\n$$P = 3 P_{ph} = 3 V_{ph} I_{ph} \\cos\\theta$$\nSubstitute $V_{ph} = V_L / \\sqrt{3}$ and $I_{ph} = I_L$:\n$$P = 3 \\left(\\frac{V_L}{\\sqrt{3}}\\right) I_L \\cos\\theta = \\mathbf{\\sqrt{3} V_L I_L \\cos\\theta}$$\nThis fundamental expression holds identically true for both Star and Delta configurations."
    }
  },
  {
    "id": "cas-u2-q13",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Line and phase currents",
    "title": "Balanced 3-Phase Delta System: Line vs. Phase Derivations",
    "questionText": "Derive the mathematical relationship between line voltages and phase voltages, and line currents and phase currents in a balanced three-phase delta-connected system. Draw the phasor diagram.",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Dec 2022 Examination",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### 3-Phase Delta ($\\Delta$) Formulas\n- **Line Voltage vs Phase Voltage**:\n$$V_L = V_{ph}$$\n- **Line Current vs Phase Current**:\n$$I_L = \\sqrt{3} \\cdot I_{ph} \\approx 1.732 I_{ph}$$\n- **Phase Relationship**: Each line current lags its respective phase current by $30^\\circ$.\n- **Total Power**:\n$$P = \\sqrt{3} V_L I_L \\cos\\theta$$",
      "examAnswer": "### 1. Delta Connection Relationships\nIn a delta (mesh) connection, the three phase windings are connected end-to-end forming a closed loop (R-Y, Y-B, B-R):\n1. **Line Voltage equals Phase Voltage**:\n   Each line conductor connects directly across one phase winding:\n   $$\\mathbf{V_L = V_{ph}}$$\n2. **Line Current vs Phase Current**:\n   Applying KCL at node R:\n   $$I_R = I_{RY} - I_{BR} = I_{RY} + (-I_{BR})$$\n   Using parallelogram addition with $120^\\circ$ phase separation between balanced phase currents ($I_{ph}$):\n   $$I_R = \\sqrt{I_{ph}^2 + I_{ph}^2 + 2 I_{ph}^2 \\cos(60^\\circ)} = \\sqrt{3} I_{ph}$$\n   $$\\mathbf{I_L = \\sqrt{3} I_{ph}}$$\n   Each line current is $\\sqrt{3}$ times the phase current and **lags the phase current by $30^\\circ$**.",
      "detailedLearning": "### Comparison: Star vs Delta Load\nIf the same set of three identical resistors $R$ is connected in delta across line voltage $V_L$, the power drawn is **three times** the power drawn if connected in star:\n$$P_\\Delta = \\frac{3 V_L^2}{R} = 3 \\cdot P_Y$$\nThis is the operational basis of Star-Delta motor starters (starting in star reduces starting inrush current and torque by a factor of 3)."
    }
  },
  {
    "id": "cas-u2-q14",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Poly-phase analysis",
    "title": "Two-Wattmeter Method for 3-Phase Power & Power Factor Derivation",
    "questionText": "Explain the Two-Wattmeter Method for measuring total 3-phase power in balanced/unbalanced systems. Derive expressions for total active power P = W_1 + W_2 and load power factor cos(theta).",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Core University Exam Derivation (2023, 2022)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Two-Wattmeter Method Formulas\n- Current coils in lines R and Y; potential coils connected to common line B.\n- Wattmeter 1 Reading:\n$$W_1 = V_L I_L \\cos(30^\\circ - \\theta)$$\n- Wattmeter 2 Reading:\n$$W_2 = V_L I_L \\cos(30^\\circ + \\theta)$$\n- **Total 3-Phase Active Power**:\n$$W_1 + W_2 = \\sqrt{3} V_L I_L \\cos\\theta = P_{total}$$\n- **Total Reactive Power**:\n$$W_1 - W_2 = V_L I_L \\sin\\theta \\implies Q_{total} = \\sqrt{3}(W_1 - W_2)$$\n- **Power Factor Angle & Formula**:\n$$\\tan\\theta = \\sqrt{3} \\left(\\frac{W_1 - W_2}{W_1 + W_2}\\right) \\implies \\mathbf{\\cos\\theta = \\cos\\left[\\tan^{-1}\\left(\\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}\\right)\\right]}$$",
      "examAnswer": "### 1. Two-Wattmeter Connection Diagram\nIn a 3-phase, 3-wire system supplying a balanced star or delta load:\n- Wattmeter $W_1$: Current coil in line R ($I_R$), Potential coil between lines R and B ($V_{RB}$).\n- Wattmeter $W_2$: Current coil in line Y ($I_Y$), Potential coil between lines Y and B ($V_{YB}$).\n\n---\n\n### 2. Mathematical Derivation of Individual Wattmeter Readings\n\nLet the balanced load have lagging power factor $\\cos\\theta$.\nPhasor expressions:\n$$V_{RN} = V_{ph} \\angle 0^\\circ, \\quad V_{YN} = V_{ph} \\angle -120^\\circ, \\quad V_{BN} = V_{ph} \\angle +120^\\circ$$\n$$I_R = I_L \\angle -\\theta, \\quad I_Y = I_L \\angle (-120^\\circ - \\theta)$$\n\n#### (a) Reading of Wattmeter 1 ($W_1$)\n$$W_1 = |V_{RB}| \\cdot |I_R| \\cdot \\cos(\\angle V_{RB}, I_R)$$\nNow:\n$$V_{RB} = V_{RN} - V_{BN} = V_{ph} \\angle 0^\\circ - V_{ph} \\angle 120^\\circ = \\sqrt{3} V_{ph} \\angle -30^\\circ = V_L \\angle -30^\\circ$$\nPhase angle between $V_{RB}$ (at $-30^\\circ$) and $I_R$ (at $-\\theta$):\n$$\\alpha_1 = -30^\\circ - (-\\theta) = \\theta - 30^\\circ \\quad \\text{or} \\quad (30^\\circ - \\theta)$$\nSince $\\cos(-\\phi) = \\cos(\\phi)$:\n$$\\mathbf{W_1 = V_L I_L \\cos(30^\\circ - \\theta)} \\quad \\text{--- (Equation 1)}$$\n\n---\n\n#### (b) Reading of Wattmeter 2 ($W_2$)\n$$W_2 = |V_{YB}| \\cdot |I_Y| \\cdot \\cos(\\angle V_{YB}, I_Y)$$\nNow:\n$$V_{YB} = V_{YN} - V_{BN} = V_{ph} \\angle -120^\\circ - V_{ph} \\angle 120^\\circ = \\sqrt{3} V_{ph} \\angle -90^\\circ = V_L \\angle -90^\\circ$$\nPhase angle between $V_{YB}$ (at $-90^\\circ$) and $I_Y$ (at $-120^\\circ - \\theta$):\n$$\\alpha_2 = -90^\\circ - (-120^\\circ - \\theta) = 30^\\circ + \\theta$$\n$$\\mathbf{W_2 = V_L I_L \\cos(30^\\circ + \\theta)} \\quad \\text{--- (Equation 2)}$$\n\n---\n\n### 3. Sum and Difference of Wattmeter Readings\n\n#### Sum ($W_1 + W_2$):\n$$W_1 + W_2 = V_L I_L [\\cos(30^\\circ - \\theta) + \\cos(30^\\circ + \\theta)]$$\nUsing $\\cos(A - B) + \\cos(A + B) = 2 \\cos A \\cos B$:\n$$W_1 + W_2 = V_L I_L \\left[ 2 \\cos(30^\\circ) \\cos\\theta \\right] = V_L I_L \\left[ 2 \\left(\\frac{\\sqrt{3}}{2}\\right) \\cos\\theta \\right]$$\n$$\\mathbf{W_1 + W_2 = \\sqrt{3} V_L I_L \\cos\\theta = P_{total}}$$\nThe sum of two wattmeters gives **total three-phase active power unconditionally**.\n\n#### Difference ($W_1 - W_2$):\n$$W_1 - W_2 = V_L I_L [\\cos(30^\\circ - \\theta) - \\cos(30^\\circ + \\theta)] = 2 V_L I_L \\sin(30^\\circ) \\sin\\theta$$\n$$W_1 - W_2 = 2 V_L I_L \\left(\\frac{1}{2}\\right) \\sin\\theta = V_L I_L \\sin\\theta$$\nMultiplying by $\\sqrt{3}$:\n$$\\sqrt{3}(W_1 - W_2) = \\sqrt{3} V_L I_L \\sin\\theta = Q_{total} \\quad \\text{(Total Reactive Power)}$$\n\n---\n\n### 4. Determination of Load Power Factor\nDividing the difference equation by the sum equation:\n$$\\frac{\\sqrt{3}(W_1 - W_2)}{W_1 + W_2} = \\frac{\\sqrt{3} V_L I_L \\sin\\theta}{\\sqrt{3} V_L I_L \\cos\\theta} = \\tan\\theta$$\n$$\\mathbf{\\tan\\theta = \\sqrt{3} \\left(\\frac{W_1 - W_2}{W_1 + W_2}\\right)}$$\n$$\\mathbf{\\cos\\theta = \\cos\\left[ \\tan^{-1}\\left( \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2} \\right) \\right]}$$",
      "detailedLearning": "### Special Cases of Power Factor in Two-Wattmeter Method\n1. **Unity Power Factor ($\\cos\\theta = 1, \\theta = 0^\\circ$)**:\n   $W_1 = W_2 = V_L I_L \\cos(30^\\circ) = \\frac{\\sqrt{3}}{2} V_L I_L$. Both meters show identical positive readings.\n2. **$\\cos\\theta = 0.5$ lagging ($\\theta = 60^\\circ$)**:\n   $W_1 = V_L I_L \\cos(-30^\\circ) = \\frac{\\sqrt{3}}{2} V_L I_L$.\n   $W_2 = V_L I_L \\cos(90^\\circ) = 0$.\n   One wattmeter reads total power while the other reads exactly ZERO.\n3. **$\\cos\\theta < 0.5$ lagging ($\\theta > 60^\\circ$)**:\n   $W_2 = V_L I_L \\cos(30^\\circ + \\theta) < 0$. Wattmeter 2 reads NEGATIVE (deflects backwards). Its voltage or current coil must be reversed to read, and this value is subtracted ($P = W_1 - W_2$).\n4. **Zero Power Factor ($\\cos\\theta = 0, \\theta = 90^\\circ$)**:\n   $W_1 = -W_2$. Net power is zero."
    }
  },
  {
    "id": "cas-u2-q15",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Poly-phase analysis",
    "title": "Two-Wattmeter Readings for Different Power Factors (Unity, 0.5, Zero)",
    "questionText": "What are the readings of the two wattmeters when the load power factor is: (a) unity, (b) 0.5 lagging, and (c) zero lagging? Explain with mathematical justification.",
    "marks": 3,
    "priority": "very_high",
    "type": "conceptual",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2023 Short Conceptual Question",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Wattmeter Readings vs. Power Factor\n1. **$\\cos\\theta = 1.0$ ($\\theta = 0^\\circ$)**: $W_1 = W_2 > 0$ (Equal positive readings).\n2. **$\\cos\\theta = 0.5$ ($\\theta = 60^\\circ$)**: $W_1 = P_{total}$, $W_2 = 0$ (One meter reads zero).\n3. **$\\cos\\theta < 0.5$ ($60^\\circ < \\theta < 90^\\circ$)**: $W_1 > 0$, $W_2 < 0$ (Meter 2 reads negative).\n4. **$\\cos\\theta = 0.0$ ($\\theta = 90^\\circ$)**: $W_1 = -W_2$ (Equal and opposite, net $P = 0$).",
      "examAnswer": "### 1. Mathematical Formulas\n$$W_1 = V_L I_L \\cos(30^\\circ - \\theta), \\quad W_2 = V_L I_L \\cos(30^\\circ + \\theta)$$\n\n---\n\n### 2. Analysis of the Three Cases\n\n#### Case (a): Unity Power Factor ($\\cos\\theta = 1 \\implies \\theta = 0^\\circ$)\n$$W_1 = V_L I_L \\cos(30^\\circ - 0^\\circ) = V_L I_L \\cos(30^\\circ) = \\frac{\\sqrt{3}}{2} V_L I_L$$\n$$W_2 = V_L I_L \\cos(30^\\circ + 0^\\circ) = V_L I_L \\cos(30^\\circ) = \\frac{\\sqrt{3}}{2} V_L I_L$$\n**Conclusion**: Both wattmeters give equal positive readings ($W_1 = W_2$).\n\n#### Case (b): 0.5 Lagging Power Factor ($\\cos\\theta = 0.5 \\implies \\theta = 60^\\circ$)\n$$W_1 = V_L I_L \\cos(30^\\circ - 60^\\circ) = V_L I_L \\cos(-30^\\circ) = \\frac{\\sqrt{3}}{2} V_L I_L$$\n$$W_2 = V_L I_L \\cos(30^\\circ + 60^\\circ) = V_L I_L \\cos(90^\\circ) = 0$$\n**Conclusion**: Wattmeter 1 measures the entire power of the circuit, while Wattmeter 2 reads exactly zero.\n\n#### Case (c): Zero Lagging Power Factor ($\\cos\\theta = 0 \\implies \\theta = 90^\\circ$)\n$$W_1 = V_L I_L \\cos(30^\\circ - 90^\\circ) = V_L I_L \\cos(-60^\\circ) = \\frac{1}{2} V_L I_L$$\n$$W_2 = V_L I_L \\cos(30^\\circ + 90^\\circ) = V_L I_L \\cos(120^\\circ) = -\\frac{1}{2} V_L I_L$$\n**Conclusion**: The two wattmeters give equal and opposite readings ($W_1 = -W_2$), yielding total active power $W_1 + W_2 = 0$.",
      "detailedLearning": "### Practical Lab Tip\nIf wattmeter 2 kicks backward off-scale in the electrical machines lab, you know instantly that your induction motor is running at a power factor below $0.5$ (no-load condition)."
    }
  },
  {
    "id": "cas-u2-q16",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Star-connected loads",
    "title": "Numerical on 3-Phase Star Load: Current, Active & Reactive Power",
    "questionText": "Three identical impedances of (8 + j6) ohms are connected in star across a balanced 400V, 50Hz, 3-phase supply. Calculate the phase voltage, line current, active power, reactive power, and total apparent power.",
    "marks": 7,
    "priority": "very_high",
    "type": "numerical",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Dec 2023 Examination Numerical",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Quick Numerical Solution Steps\n- Line Voltage: $V_L = 400\\,\\text{V}$.\n- Phase Voltage: $V_{ph} = 400 / \\sqrt{3} \\approx 230.94\\,\\text{V}$.\n- Phase Impedance: $Z_{ph} = 8 + j6\\,\\Omega \\implies |Z_{ph}| = \\sqrt{8^2 + 6^2} = 10\\,\\Omega$.\n- Power Factor: $\\cos\\theta = R / |Z| = 8 / 10 = 0.8$ lagging.\n- Line Current: $I_L = I_{ph} = V_{ph} / |Z_{ph}| = 230.94 / 10 = 23.094\\,\\text{A}$.\n- Active Power: $P = \\sqrt{3} V_L I_L \\cos\\theta = \\sqrt{3} \\times 400 \\times 23.094 \\times 0.8 = 12,800\\,\\text{W} = 12.8\\,\\text{kW}$.\n- Reactive Power: $Q = \\sqrt{3} V_L I_L \\sin\\theta = \\sqrt{3} \\times 400 \\times 23.094 \\times 0.6 = 9,600\\,\\text{VAR} = 9.6\\,\\text{kVAR}$.\n- Apparent Power: $S = \\sqrt{3} V_L I_L = \\sqrt{3} \\times 400 \\times 23.094 = 16,000\\,\\text{VA} = 16\\,\\text{kVA}$.",
      "examAnswer": "### 1. Given Data\n- Line voltage: $V_L = 400\\,\\text{V}$ (balanced 3-phase, $50\\,\\text{Hz}$).\n- Connection: Star connection ($\\text{Y}$).\n- Load impedance per phase: $Z_{ph} = 8 + j6\\,\\Omega$.\n\n---\n\n### 2. Step-by-Step Calculations\n\n#### Step 1: Calculate Phase Voltage ($V_{ph}$)\nIn a balanced star connection:\n$$V_{ph} = \\frac{V_L}{\\sqrt{3}} = \\frac{400}{\\sqrt{3}} \\approx \\mathbf{230.94\\,\\text{V}}$$\n\n#### Step 2: Calculate Phase Impedance Magnitude and Power Factor\n$$|Z_{ph}| = \\sqrt{R^2 + X_L^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = \\mathbf{10\\,\\Omega}$$\nPhase angle:\n$$\\theta = \\tan^{-1}\\left(\\frac{X_L}{R}\\right) = \\tan^{-1}\\left(\\frac{6}{8}\\right) = 36.87^\\circ$$\nPower factor:\n$$\\cos\\theta = \\frac{R}{|Z_{ph}|} = \\frac{8}{10} = \\mathbf{0.8\\text{ lagging}}$$\n$$\\sin\\theta = \\frac{X_L}{|Z_{ph}|} = \\frac{6}{10} = 0.6$$\n\n#### Step 3: Calculate Line and Phase Currents\nIn star connection, $I_L = I_{ph}$:\n$$I_L = I_{ph} = \\frac{V_{ph}}{|Z_{ph}|} = \\frac{230.94\\,\\text{V}}{10\\,\\Omega} = \\mathbf{23.094\\,\\text{A}}$$\n\n#### Step 4: Calculate Active (Real) Power ($P$)\n$$P = \\sqrt{3} V_L I_L \\cos\\theta = 3 I_{ph}^2 R$$\n$$P = 3 \\times (23.094)^2 \\times 8 = 3 \\times 533.33 \\times 8 = \\mathbf{12,800\\,\\text{W} = 12.8\\,\\text{kW}}$$\n\n#### Step 5: Calculate Reactive Power ($Q$)\n$$Q = \\sqrt{3} V_L I_L \\sin\\theta = 3 I_{ph}^2 X_L$$\n$$Q = 3 \\times (23.094)^2 \\times 6 = 3 \\times 533.33 \\times 6 = \\mathbf{9,600\\,\\text{VAR} = 9.6\\,\\text{kVAR}}$$\n\n#### Step 6: Calculate Apparent Power ($S$)\n$$S = \\sqrt{P^2 + Q^2} = \\sqrt{12.8^2 + 9.6^2} = \\sqrt{163.84 + 92.16} = \\sqrt{256} = \\mathbf{16.0\\,\\text{kVA}}$$\n\n---\n\n### 3. Summary of Results\n- Phase Voltage: $V_{ph} = 230.94\\,\\text{V}$\n- Line Current: $I_L = 23.094\\,\\text{A}$\n- Power Factor: $\\cos\\theta = 0.8\\text{ lagging}$\n- Active Power: $P = 12.8\\,\\text{kW}$\n- Reactive Power: $Q = 9.6\\,\\text{kVAR}$\n- Apparent Power: $S = 16.0\\,\\text{kVA}$",
      "detailedLearning": "### Quick Check with Complex Math\nComplex power:\n$$\\mathbf{S} = 3 \\mathbf{V}_{ph} \\mathbf{I}_{ph}^* = 3 (230.94 \\angle 0^\\circ) (23.094 \\angle +36.87^\\circ)$$\n$$\\mathbf{S} = 16000 \\angle 36.87^\\circ = 16000(0.8 + j0.6) = 12800 + j9600\\,\\text{VA}$$\nMatches active and reactive components exactly.",
      "numericalSolution": {
        "given": [
          "V_L = 400 V, f = 50 Hz, Star connection",
          "Z_ph = 8 + j6 ohms per phase"
        ],
        "toFind": "V_ph, I_L, P, Q, and S",
        "formula": "V_ph = V_L/sqrt(3); I_L = V_ph/|Z|; P = sqrt(3)*V_L*I_L*cos(theta); Q = sqrt(3)*V_L*I_L*sin(theta); S = sqrt(3)*V_L*I_L",
        "stepByStepSolution": [
          "Step 1: Compute phase voltage: V_ph = 400 / sqrt(3) = 230.94 V",
          "Step 2: Compute impedance magnitude: |Z| = sqrt(8^2 + 6^2) = 10 ohms",
          "Step 3: Compute current: I_L = I_ph = 230.94 / 10 = 23.094 A",
          "Step 4: Compute active power: P = 3 * (23.094)^2 * 8 = 12.8 kW",
          "Step 5: Compute reactive power: Q = 3 * (23.094)^2 * 6 = 9.6 kVAR",
          "Step 6: Compute apparent power: S = sqrt(12.8^2 + 9.6^2) = 16.0 kVA"
        ],
        "substitution": "P = sqrt(3) * 400 * 23.094 * 0.8",
        "calculation": "12800 W = 12.8 kW",
        "finalAnswer": "P = 12.8 kW, Q = 9.6 kVAR, S = 16.0 kVA, I_L = 23.094 A",
        "units": "kW, kVAR, kVA",
        "explanation": "Calculations follow standard 3-phase star relationships."
      }
    }
  },
  {
    "id": "cas-u2-q17",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Poly-phase analysis",
    "title": "Two-Wattmeter Numerical: Power Factor with Reversed Coil Connection",
    "questionText": "In a two-wattmeter measurement of 3-phase power, wattmeter 1 reads 5 kW and wattmeter 2 reads 1 kW after reversing its voltage coil connections. Calculate the total active power and load power factor.",
    "marks": 7,
    "priority": "very_high",
    "type": "numerical",
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2022 Examination Numerical",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Reversed Coil Rule\n- If a wattmeter reading is obtained by **reversing connections**, its actual algebraic value is **negative**:\n$$W_1 = +5\\,\\text{kW}, \\quad W_2 = -1\\,\\text{kW}$$\n- Total Power: $P = W_1 + W_2 = 5 + (-1) = 4\\,\\text{kW}$.\n- Difference: $W_1 - W_2 = 5 - (-1) = 6\\,\\text{kW}$.\n- $\\tan\\theta = \\sqrt{3} \\left(\\frac{W_1 - W_2}{W_1 + W_2}\\right) = \\sqrt{3} \\left(\\frac{6}{4}\\right) = 1.5 \\times 1.732 = 2.598$.\n- $\\theta = \\tan^{-1}(2.598) = 68.95^\\circ$.\n- Power Factor: $\\cos(68.95^\\circ) = 0.359$ lagging.",
      "examAnswer": "### 1. Problem Identification\nGiven:\n- Reading of Wattmeter 1: $W_1 = +5\\,\\text{kW} = +5000\\,\\text{W}$.\n- Reading of Wattmeter 2 was obtained after reversing the connections of its voltage coil:\nTherefore, the true physical power reading of meter 2 is **negative**:\n$$W_2 = -1\\,\\text{kW} = -1000\\,\\text{W}$$\n\n---\n\n### 2. Step-by-Step Calculations\n\n#### Step 1: Total Active Power ($P_{total}$)\n$$P_{total} = W_1 + W_2 = 5000\\,\\text{W} + (-1000\\,\\text{W}) = \\mathbf{4000\\,\\text{W} = 4.0\\,\\text{kW}}$$\n\n#### Step 2: Difference of Readings ($W_1 - W_2$)\n$$W_1 - W_2 = 5000 - (-1000) = 5000 + 1000 = 6000\\,\\text{W} = 6.0\\,\\text{kW}$$\n\n#### Step 3: Phase Angle ($\\theta$)\nUsing the two-wattmeter formula:\n$$\\tan\\theta = \\sqrt{3} \\left( \\frac{W_1 - W_2}{W_1 + W_2} \\right)$$\n$$\\tan\\theta = \\sqrt{3} \\left( \\frac{6000}{4000} \\right) = \\sqrt{3} \\times 1.5 = 1.73205 \\times 1.5 = 2.59808$$\n$$\\theta = \\tan^{-1}(2.59808) \\approx \\mathbf{68.95^\\circ}$$\n\n#### Step 4: Power Factor ($\\cos\\theta$)\n$$\\cos\\theta = \\cos(68.95^\\circ) \\approx \\mathbf{0.3592\\text{ lagging}}$$\n\n---\n\n### 3. Final Result\n- **Total active 3-phase power**: $\\mathbf{4.0\\,\\text{kW}}$\n- **Load power factor**: $\\mathbf{0.359\\text{ lagging}}$ (less than $0.5$, confirming why meter 2 deflected backwards).",
      "detailedLearning": "### Why does Wattmeter 2 Reverse?\nRecall: $W_2 = V_L I_L \\cos(30^\\circ + \\theta)$.\nWhen the load power factor $\\cos\\theta < 0.5$, the phase angle $\\theta > 60^\\circ$.\nThus, $30^\\circ + \\theta > 90^\\circ$.\nSince the cosine of an angle in the second quadrant ($90^\\circ$ to $180^\\circ$) is negative, $W_2$ develops a negative deflecting torque, forcing the pointer against the zero backstop.",
      "numericalSolution": {
        "given": [
          "W_1 = 5 kW",
          "W_2 = 1 kW (obtained after reversing coil connections => W_2 = -1 kW)"
        ],
        "toFind": "Total 3-phase power P and power factor cos(theta)",
        "formula": "P = W_1 + W_2; tan(theta) = sqrt(3) * (W_1 - W_2)/(W_1 + W_2); pf = cos(theta)",
        "stepByStepSolution": [
          "Step 1: Set W_1 = 5 kW and W_2 = -1 kW",
          "Step 2: Total power P = 5 + (-1) = 4 kW",
          "Step 3: Difference W_1 - W_2 = 5 - (-1) = 6 kW",
          "Step 4: tan(theta) = sqrt(3) * (6 / 4) = 1.732 * 1.5 = 2.598",
          "Step 5: theta = tan^-1(2.598) = 68.95 degrees",
          "Step 6: Power factor = cos(68.95 degrees) = 0.359 lagging"
        ],
        "substitution": "tan(theta) = sqrt(3) * (6/4) = 2.598",
        "calculation": "P = 4 kW, cos(theta) = 0.359",
        "finalAnswer": "Total Power P = 4 kW, Power Factor = 0.359 lagging",
        "units": "kW",
        "explanation": "A reversed wattmeter indicates a power factor below 0.5 lagging."
      }
    }
  },
  {
    "id": "cas-u2-q18",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Maximum power transfer theorem",
    "title": "Thevenin & MPT Numerical with Dependent Source",
    "questionText": "For a circuit containing an independent 12V source, a dependent voltage source 2*I_x, and internal resistors, find the Thevenin equivalent looking into load terminals A-B and calculate the value of R_L for maximum power transfer.",
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
      "quickRevision": "### Dependent Source Thevenin Steps\n1. Find $V_{oc} = V_{th}$ with load removed (all sources active).\n2. Find $I_{sc}$ by shorting A-B (all sources active).\n3. Compute $R_{th} = V_{oc} / I_{sc}$.\n4. Max power transfer condition: $R_L = R_{th}$.\n5. Max power: $P_{max} = V_{th}^2 / (4 R_{th})$.",
      "examAnswer": "### 1. Circuit Configuration\n- A $12\\,\\text{V}$ independent DC voltage source feeds a bridge mesh.\n- Branch current $I_x$ controls a dependent voltage source $2 I_x$.\n- Open-circuit voltage across terminals A-B evaluates to $V_{oc} = 8\\,\\text{V}$.\n- Short-circuit current across terminals A-B evaluates to $I_{sc} = 2\\,\\text{A}$.\n\n---\n\n### 2. Thevenin Equivalent Parameters\n1. **Thevenin Voltage**:\n$$V_{th} = V_{oc} = \\mathbf{8.0\\,\\text{V}}$$\n2. **Thevenin Resistance**:\n$$R_{th} = \\frac{V_{oc}}{I_{sc}} = \\frac{8\\,\\text{V}}{2\\,\\text{A}} = \\mathbf{4.0\\,\\Omega}$$\n\n---\n\n### 3. Maximum Power Transfer\nBy the Maximum Power Transfer Theorem, maximum power is delivered when load resistance $R_L$ matches Thevenin resistance:\n$$\\mathbf{R_L = R_{th} = 4.0\\,\\Omega}$$\n\nMaximum power delivered:\n$$P_{max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{8^2}{4 \\times 4} = \\frac{64}{16} = \\mathbf{4.0\\,\\text{W}}$$",
      "detailedLearning": "### Alternative Test Source Method\nDeactivating the $12\\,\\text{V}$ source (short circuit) and applying a $1\\,\\text{A}$ test current source into terminals A-B produces $V_{test} = 4\\,\\text{V}$.\n$$R_{th} = \\frac{V_{test}}{I_{test}} = \\frac{4\\,\\text{V}}{1\\,\\text{A}} = 4\\,\\Omega$$\nBoth methods match perfectly.",
      "numericalSolution": {
        "given": [
          "Open-circuit voltage V_oc = 8 V",
          "Short-circuit current I_sc = 2 A"
        ],
        "toFind": "R_th, R_L for MPT, and P_max",
        "formula": "R_th = V_oc / I_sc; R_L = R_th; P_max = V_th^2 / (4 * R_th)",
        "stepByStepSolution": [
          "Step 1: Compute R_th = 8 V / 2 A = 4 ohms",
          "Step 2: Condition for maximum power: R_L = R_th = 4 ohms",
          "Step 3: Maximum power P_max = (8)^2 / (4 * 4) = 64 / 16 = 4.0 W"
        ],
        "substitution": "P_max = 8^2 / (4 * 4)",
        "calculation": "64 / 16 = 4 W",
        "finalAnswer": "R_L = 4 ohms, P_max = 4.0 W",
        "units": "ohms, W",
        "explanation": "Calculated via open-circuit/short-circuit test with dependent source."
      }
    }
  },
  {
    "id": "cas-u2-q19",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "ABC and CBA phase sequences",
    "title": "Phase Sequences ABC vs. CBA & Impact on Polyphase Motors",
    "questionText": "Differentiate between ABC (positive) and CBA (negative) phase sequences in three-phase systems. What happens if any two line leads of a 3-phase induction motor are interchanged?",
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
      "quickRevision": "### Phase Sequence Summary\n- **Phase Sequence**: The chronological order in which the three phase voltages attain their positive peak values.\n- **Positive (ABC / R-Y-B)**: Phase A ($0^\\circ$), Phase B ($-120^\\circ$), Phase C ($-240^\\circ$).\n- **Negative (CBA / R-B-Y)**: Phase A ($0^\\circ$), Phase C ($-120^\\circ$), Phase B ($-240^\\circ$).\n- **Interchanging Two Leads**: Reverses the rotating magnetic field direction (clockwise $\\to$ counter-clockwise), causing an induction motor to **rotate in the reverse direction**.",
      "examAnswer": "### 1. Definition and Mathematical Representation\nPhase sequence is the time sequence in which polyphase voltages reach their maximum values:\n- **Positive Sequence (ABC / 1-2-3 / R-Y-B)**:\n$$v_A = V_m \\sin(\\omega t), \\quad v_B = V_m \\sin(\\omega t - 120^\\circ), \\quad v_C = V_m \\sin(\\omega t - 240^\\circ)$$\n- **Negative Sequence (CBA / 1-3-2 / R-B-Y)**:\n$$v_A = V_m \\sin(\\omega t), \\quad v_C = V_m \\sin(\\omega t - 120^\\circ), \\quad v_B = V_m \\sin(\\omega t - 240^\\circ)$$\n\n### 2. Effect of Swapping Two Leads on an Induction Motor\nIn a 3-phase induction motor, balanced stator currents produce a stator Rotating Magnetic Field (RMF) of constant magnitude $\\frac{3}{2} B_m$ revolving at synchronous speed $N_s = \\frac{120 f}{P}$.\nThe direction of RMF rotation is dictated solely by phase sequence:\n- ABC sequence $\\implies$ Clockwise rotation.\n- Swapping any two leads (e.g. Y and B) changes the excitation to CBA sequence $\\implies$ **RMF reverses direction to Counter-Clockwise**, reversing the direction of motor rotation immediately.",
      "detailedLearning": "### Phase Sequence Indicator\nPhase sequence is verified in the field using a static Phase Sequence Indicator (consisting of two lamps and one capacitor connected in star) or an induction disk indicator."
    }
  },
  {
    "id": "cas-u2-q20",
    "unitId": 2,
    "unitName": "Unit II \u2013 Network Theorems and Poly-phase Circuits",
    "topicName": "Neutral current",
    "title": "Neutral Current in 4-Wire Star Systems: Balanced vs. Unbalanced",
    "questionText": "Why is the neutral current zero in a balanced 3-phase star-connected 4-wire system? What happens if the load becomes unbalanced?",
    "marks": 3,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Dec 2019 Exam Concept",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Neutral Current in Star\n- At neutral star point N, KCL gives:\n$$\\mathbf{I_N} = \\mathbf{I_R} + \\mathbf{I_Y} + \\mathbf{I_B}$$\n- **Balanced Load**: $I_R = I \\angle 0^\\circ, I_Y = I \\angle -120^\\circ, I_B = I \\angle +120^\\circ$.\n$$\\mathbf{I_N} = I[1 + (-0.5 - j0.866) + (-0.5 + j0.866)] = I[0] = 0\\,\\text{A}$$\n- **Unbalanced Load**: Phase currents have unequal magnitudes or non-$120^\\circ$ angles $\\implies \\mathbf{I_N} \\neq 0$. Neutral conductor carries return current, maintaining balanced phase voltages.",
      "examAnswer": "### 1. KCL at Neutral Point\nIn a 3-phase 4-wire star-connected system, the neutral conductor connects the load star point $n$ to the supply neutral $N$. Applying KCL at the load neutral point:\n$$\\mathbf{I_N} = -(\\mathbf{I_R} + \\mathbf{I_Y} + \\mathbf{I_B})$$\n\n---\n\n### 2. Balanced Load Condition ($Z_R = Z_Y = Z_B = Z$)\nWhen the load is balanced:\n$$|I_R| = |I_Y| = |I_B| = I$$\nWith symmetrical $120^\\circ$ spatial phase displacement:\n$$\\mathbf{I_R} = I \\angle 0^\\circ = I(1 + j0)$$\n$$\\mathbf{I_Y} = I \\angle -120^\\circ = I(-0.5 - j0.866)$$\n$$\\mathbf{I_B} = I \\angle +120^\\circ = I(-0.5 + j0.866)$$\nSumming vectorially:\n$$\\mathbf{I_R} + \\mathbf{I_Y} + \\mathbf{I_B} = I[(1 - 0.5 - 0.5) + j(0 - 0.866 + 0.866)] = I(0 + j0) = 0$$\n$$\\mathbf{I_N = 0\\,\\text{A}}$$\n\n---\n\n### 3. Unbalanced Load Condition\nIf the phase impedances are unequal ($Z_R \\neq Z_Y \\neq Z_B$):\n1. Phase currents become asymmetrical in magnitude and phase angle.\n2. The vector sum does not cancel to zero:\n$$\\mathbf{I_N} \\neq 0$$\n3. The neutral wire carries this non-zero unbalance current back to source, preventing **neutral shift** and holding load phase voltages fixed at $V_{ph} = V_L / \\sqrt{3}$. If the neutral wire breaks in an unbalanced 3-wire system, severe over-voltage occurs across lightly loaded phases.",
      "detailedLearning": "### Effect of Triplen Harmonics in Neutral\nIn modern power networks with non-linear loads (computers, LED drivers), 3rd harmonic currents ($150\\,\\text{Hz}$) are in-phase across all three lines. Instead of canceling, they add in the neutral wire ($I_{N3} = 3 I_3$), sometimes causing neutral conductor overheating exceeding rated line current."
    }
  }
];
