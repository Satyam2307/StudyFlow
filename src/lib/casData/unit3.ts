import { CASQuestion } from "@/types/cas";

export const CAS_UNIT_3_QUESTIONS: CASQuestion[] = [
  {
    "id": "cas-u3-q1",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Coefficient of coupling",
    "title": "Magnetic Coupling, Mutual Inductance & Coupling Coefficient k",
    "questionText": "Explain magnetic coupling, mutual inductance (M), and derive the expression for coefficient of coupling k = M / sqrt(L_1 * L_2). Explain the physical significance of k.",
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
      "quickRevision": "### Magnetic Coupling Essentials\n- **Self-Inductance**: $L_1 = N_1 \\frac{d\\phi_{11}}{di_1} = \\frac{N_1^2}{\\mathcal{R}_1}$.\n- **Mutual Inductance**: $M = N_2 \\frac{d\\phi_{12}}{di_1} = N_1 \\frac{d\\phi_{21}}{di_2}$.\n- **Coefficient of Coupling ($k$)**:\n$$k = \\frac{M}{\\sqrt{L_1 L_2}}, \\quad 0 \\le k \\le 1$$\n- **Physical Meaning of $k$**:\n  - $k = 1$: Ideal tight magnetic coupling ($100\\%$ flux linkage, iron core transformer).\n  - $k = 0$: Completely decoupled (zero mutual flux).\n  - $0 < k < 0.5$: Loosely coupled (air-core coils, RF tuning).\n  - $k > 0.5$: Tightly coupled.",
      "examAnswer": "### 1. Self and Mutual Inductance\nWhen two coils 1 and 2 are in proximity, an alternating current $i_1(t)$ in coil 1 sets up a magnetic flux $\\phi_1$.\nThis flux splits into two components:\n$$\\phi_1 = \\phi_{11} + \\phi_{12}$$\n- $\\phi_{11}$: Leakage flux linking coil 1 only.\n- $\\phi_{12}$: Mutual flux linking both coil 1 and coil 2.\n\nSelf-inductance of coil 1:\n$$L_1 = \\frac{N_1 \\phi_1}{i_1} \\quad \\text{--- (Equation 1)}$$\nSelf-inductance of coil 2:\n$$L_2 = \\frac{N_2 \\phi_2}{i_2} \\quad \\text{--- (Equation 2)}$$\nMutual inductance $M$ induced in coil 2 due to $i_1$:\n$$M_{21} = \\frac{N_2 \\phi_{12}}{i_1} \\quad \\text{--- (Equation 3)}$$\nSimilarly, mutual inductance induced in coil 1 due to $i_2$:\n$$M_{12} = \\frac{N_1 \\phi_{21}}{i_2} \\quad \\text{--- (Equation 4)}$$\nBy magnetic reciprocity, in a linear medium:\n$$M_{12} = M_{21} = M$$\n\n---\n\n### 2. Derivation of Coupling Coefficient ($k$)\nLet $k_1$ be the fraction of flux produced by coil 1 that links coil 2:\n$$\\phi_{12} = k_1 \\phi_1 \\quad (0 \\le k_1 \\le 1)$$\nLet $k_2$ be the fraction of flux produced by coil 2 that links coil 1:\n$$\\phi_{21} = k_2 \\phi_2 \\quad (0 \\le k_2 \\le 1)$$\n\nSubstitute into the mutual inductance expressions:\n$$M = \\frac{N_2 (k_1 \\phi_1)}{i_1} = k_1 \\left( \\frac{N_2 \\phi_1}{i_1} \\right)$$\n$$M = \\frac{N_1 (k_2 \\phi_2)}{i_2} = k_2 \\left( \\frac{N_1 \\phi_2}{i_2} \\right)$$\n\nMultiply both expressions together:\n$$M^2 = (k_1 k_2) \\left( \\frac{N_1 \\phi_1}{i_1} \\right) \\left( \\frac{N_2 \\phi_2}{i_2} \\right)$$\nRecognizing $L_1 = \\frac{N_1 \\phi_1}{i_1}$ and $L_2 = \\frac{N_2 \\phi_2}{i_2}$:\n$$M^2 = (k_1 k_2) L_1 L_2$$\nDefining the geometric mean coefficient of coupling $k \\equiv \\sqrt{k_1 k_2}$:\n$$M^2 = k^2 L_1 L_2 \\implies \\mathbf{M = k \\sqrt{L_1 L_2}}$$\n$$\\mathbf{k = \\frac{M}{\\sqrt{L_1 L_2}}}$$\n\n---\n\n### 3. Physical Significance of $k$\n1. **$k = 1$ (Unity / Perfect Coupling)**: No magnetic leakage flux exists ($\\phi_{11} = \\phi_{22} = 0$). All flux lines link both coils completely. Realized in closed laminated iron-core power transformers ($k \\approx 0.98 - 0.999$).\n2. **$k < 0.5$ (Loose Coupling)**: Significant magnetic flux escapes through air. Typical of high-frequency RF tuned circuits where loose coupling provides sharp frequency selectivity.\n3. **Upper Bound**: $M$ can never exceed $\\sqrt{L_1 L_2}$ without violating the conservation of energy in passive magnetic systems.",
      "detailedLearning": "### Energy in Coupled Coils\nThe total magnetic energy stored in two coupled coils carrying currents $i_1$ and $i_2$ is:\n$$W_m = \\frac{1}{2} L_1 i_1^2 + \\frac{1}{2} L_2 i_2^2 \\pm M i_1 i_2$$\nFor the stored energy to remain strictly positive ($W_m > 0$) for all possible non-zero values of $i_1$ and $i_2$, the quadratic form discriminant must satisfy:\n$$L_1 L_2 - M^2 \\ge 0 \\implies M \\le \\sqrt{L_1 L_2} \\implies k \\le 1$$\nThis provides a rigorous thermodynamic proof that $k \\le 1$."
    }
  },
  {
    "id": "cas-u3-q2",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Dot convention",
    "title": "Dot Convention & Equivalent Inductance: Series & Parallel Combinations",
    "questionText": "State and explain the Dot Convention rules for magnetically coupled coils. Deduce equivalent inductance for: (a) series aiding, (b) series opposing, (c) parallel aiding, and (d) parallel opposing.",
    "marks": 7,
    "priority": "very_high",
    "type": "derivation",
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2023 & Dec 2022 (Top Exam Question)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Dot Convention Rules & Formulas\n- **Rule 1**: If current enters the dotted terminal of coil 1, the mutually induced voltage in coil 2 is **positive at its dotted terminal**.\n- **Rule 2**: If current leaves the dotted terminal of coil 1, mutually induced voltage in coil 2 is **negative at its dotted terminal**.\n- **Equivalent Inductances**:\n  - **Series Aiding**: $L_{eq} = L_1 + L_2 + 2M$\n  - **Series Opposing**: $L_{eq} = L_1 + L_2 - 2M$\n  - **Mutual Inductance from measurement**:\n  $$M = \\frac{L_{aid} - L_{opp}}{4}$$\n  - **Parallel Aiding**: $L_{eq} = \\frac{L_1 L_2 - M^2}{L_1 + L_2 - 2M}$\n  - **Parallel Opposing**: $L_{eq} = \\frac{L_1 L_2 - M^2}{L_1 + L_2 + 2M}$",
      "examAnswer": "### 1. The Dot Convention Rule\nThe dot convention is a graphical marking system used to establish the relative winding direction (polarity) of magnetically coupled inductors without drawing three-dimensional physical core coils:\n1. When current enters the dotted terminal of one coil, it produces an induced voltage at the other coil that is **positive at its dotted terminal** (with respect to its unmarked terminal).\n2. Equivalently:\n$$v_2(t) = \\pm M \\frac{di_1}{dt}$$\nwhere the sign is **$+M$** if $i_1$ enters its dot and $v_2$ is referenced positive at its dot, and **$-M$** if $i_1$ enters an unmarked terminal.\n\n---\n\n### 2. Series Connections\n\n```\n (a) Series Aiding:                      (b) Series Opposing:\n     i --->                                  i --->\n     o--[*]--[ L_1 ]--[*]--[ L_2 ]--o        o--[*]--[ L_1 ]------[ L_2 ]--[*]--o\n         v_1 = (L1+M)di/dt + v_2 = (L2+M)di/dt   v_1 = (L1-M)di/dt + v_2 = (L2-M)di/dt\n```\n\n#### (a) Series Aiding Connection\nCurrent $i(t)$ enters the dotted terminal of coil 1 and enters the dotted terminal of coil 2:\nVoltage across coil 1: $v_1 = L_1 \\frac{di}{dt} + M \\frac{di}{dt}$\nVoltage across coil 2: $v_2 = L_2 \\frac{di}{dt} + M \\frac{di}{dt}$\nTotal voltage:\n$$v = v_1 + v_2 = (L_1 + L_2 + 2M) \\frac{di}{dt}$$\n$$\\mathbf{L_{eq, aid} = L_1 + L_2 + 2M}$$\n\n#### (b) Series Opposing Connection\nCurrent enters the dotted terminal of coil 1 but leaves the dotted terminal of coil 2:\nVoltage across coil 1: $v_1 = L_1 \\frac{di}{dt} - M \\frac{di}{dt}$\nVoltage across coil 2: $v_2 = L_2 \\frac{di}{dt} - M \\frac{di}{dt}$\nTotal voltage:\n$$v = v_1 + v_2 = (L_1 + L_2 - 2M) \\frac{di}{dt}$$\n$$\\mathbf{L_{eq, opp} = L_1 + L_2 - 2M}$$\n\n#### Measuring Mutual Inductance in Practice:\n$$L_{aid} - L_{opp} = (L_1 + L_2 + 2M) - (L_1 + L_2 - 2M) = 4M$$\n$$\\mathbf{M = \\frac{L_{aid} - L_{opp}}{4}}$$\n\n---\n\n### 3. Parallel Connections\nWhen two coupled coils are connected in parallel across voltage $v(t)$:\n- **Parallel Aiding (dots connected together)**:\n$$\\mathbf{L_{eq, aid} = \\frac{L_1 L_2 - M^2}{L_1 + L_2 - 2M}}$$\n- **Parallel Opposing (dot of one connected to unmarked terminal of other)**:\n$$\\mathbf{L_{eq, opp} = \\frac{L_1 L_2 - M^2}{L_1 + L_2 + 2M}}$$",
      "detailedLearning": "### Experimental Dot Identification\nTo determine dot markings on an unknown transformer:\n1. Connect a DC galvanometer across secondary terminals.\n2. Connect a battery with push-button switch across primary terminals.\n3. Upon closing the switch (positive $di/dt$), observe the direction of meter deflection. If the needle deflects upscale, the secondary terminal connected to the positive meter terminal shares the same polarity dot as the primary terminal connected to the positive battery terminal."
    }
  },
  {
    "id": "cas-u3-q3",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Electrical equivalent of magnetically coupled circuits",
    "title": "Conductively Coupled Equivalent T-Network of Coupled Inductors",
    "questionText": "Explain the conductive equivalent T-network and pi-network of a magnetically coupled pair of inductors. Derive the T-equivalent branch impedances (L_1 - M, L_2 - M, M).",
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
      "quickRevision": "### T-Equivalent of Coupled Coils\n- Replaces mutual magnetic coupling with an equivalent conductively connected 3-terminal T-network with **no mutual coupling**:\n  - Series arm 1: $Z_{a} = L_1 - M$\n  - Series arm 2: $Z_{b} = L_2 - M$\n  - Shunt arm: $Z_{c} = M$\n- **If dots are opposing**: Replace $M$ with $-M$:\n  - $Z_a = L_1 + M, \\, Z_b = L_2 + M, \\, Z_c = -M$ (negative inductance).\n- **Advantage**: Allows standard mesh, nodal, and SPICE analysis without needing coupled-inductor matrix terms.",
      "examAnswer": "### 1. Mathematical Derivation of Equivalent T-Network\nConsider two magnetically coupled coils with a common return terminal, with dots at the upper terminals.\nThe terminal V-I relations in the frequency domain are:\n$$V_1 = j\\omega L_1 I_1 + j\\omega M I_2 \\quad \\text{--- (Equation 1)}$$\n$$V_2 = j\\omega M I_1 + j\\omega L_2 I_2 \\quad \\text{--- (Equation 2)}$$\n\nNow consider an uncoupled conductive T-network with series arm impedances $Z_a$, $Z_b$ and shunt arm impedance $Z_c$:\n```\n          Port 1            [ Z_a ]         [ Z_b ]           Port 2\n           ( + ) o----------+----[ ]---+---+----[ ]----------o ( + )\n           I_1 ->                      |                     <- I_2\n                                       |\n                                     [Z_c]\n                                       |\n           ( - ) o---------------------+---------------------o ( - )\n                                     Common\n```\nWriting KVL for the T-network:\n$$V_1 = I_1 Z_a + (I_1 + I_2) Z_c = (Z_a + Z_c) I_1 + Z_c I_2 \\quad \\text{--- (Equation 3)}$$\n$$V_2 = I_2 Z_b + (I_1 + I_2) Z_c = Z_c I_1 + (Z_b + Z_c) I_2 \\quad \\text{--- (Equation 4)}$$\n\n---\n\n### 2. Equating Coefficients\nComparing Equation 3 with Equation 1, and Equation 4 with Equation 2:\n1. $Z_c = j\\omega M \\implies \\mathbf{L_c = M}$\n2. $Z_a + Z_c = j\\omega L_1 \\implies Z_a = j\\omega L_1 - j\\omega M \\implies \\mathbf{L_a = L_1 - M}$\n3. $Z_b + Z_c = j\\omega L_2 \\implies Z_b = j\\omega L_2 - j\\omega M \\implies \\mathbf{L_b = L_2 - M}$\n\n---\n\n### 3. Final Equivalent Circuit Values\n- Branch 1 (Series): $L_a = L_1 - M$\n- Branch 2 (Series): $L_b = L_2 - M$\n- Branch 3 (Shunt): $L_c = M$\n\nIf the dot on coil 2 is at the opposite (lower) terminal, substitute $-M$ for $M$:\n- $L_a = L_1 + M$\n- $L_b = L_2 + M$\n- $L_c = -M$",
      "detailedLearning": "### Can an Inductance Be Negative?\nIn the opposing dot T-equivalent, the shunt arm has inductance $-M$. While a physical isolated negative inductor cannot exist, in the context of network math, a negative branch inductance simply represents the subtraction of flux linkage produced by the opposing coil."
    }
  },
  {
    "id": "cas-u3-q4",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "KVL equations for coupled coils",
    "title": "Mesh Equations for Magnetically Coupled Circuits",
    "questionText": "Write the complete KVL loop equations in matrix form for a coupled circuit containing a transformer with dot markings and a load resistor.",
    "marks": 7,
    "priority": "very_high",
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
      "quickRevision": "### Coupled Mesh Analysis\n- Loop 1 (Primary):\n$$(R_1 + j\\omega L_1) I_1 - j\\omega M I_2 = V_s$$\n- Loop 2 (Secondary):\n$$-j\\omega M I_1 + (R_2 + R_L + j\\omega L_2) I_2 = 0$$\n- Reflected Impedance:\n$$Z_{refl} = \\frac{(\\omega M)^2}{Z_{sec}} = \\frac{\\omega^2 M^2}{(R_2 + R_L) + j\\omega L_2}$$\n- Total Input Impedance:\n$$Z_{in} = Z_{pri} + Z_{refl}$$",
      "examAnswer": "### 1. Circuit Description\nConsider a source $V_s$ connected to primary winding $(R_1, L_1)$ coupled with mutual inductance $M$ to a secondary winding $(R_2, L_2)$ terminated in load $Z_L$. Dots are at the top terminals of both coils.\nCirculating currents: $I_1$ (clockwise in primary), $I_2$ (clockwise in secondary).\n\n---\n\n### 2. Formulating KVL Mesh Equations\n\n#### Mesh 1 (Primary Mesh):\nCurrent $I_1$ leaves primary dot, while $I_2$ enters secondary dot:\n$$V_s - I_1 R_1 - I_1 (j\\omega L_1) - (-I_2)(j\\omega M) = 0$$\n$$(R_1 + j\\omega L_1) I_1 - j\\omega M I_2 = V_s \\quad \\text{--- (Equation 1)}$$\n\n#### Mesh 2 (Secondary Mesh):\n$$-I_2 (R_2 + Z_L) - I_2 (j\\omega L_2) - I_1 (-j\\omega M) = 0$$\n$$-j\\omega M I_1 + (R_2 + Z_L + j\\omega L_2) I_2 = 0 \\quad \\text{--- (Equation 2)}$$\n\n---\n\n### 3. Matrix Formulation\n$$\\begin{bmatrix} R_1 + j\\omega L_1 & -j\\omega M \\\\ -j\\omega M & R_2 + Z_L + j\\omega L_2 \\end{bmatrix} \\begin{bmatrix} I_1 \\\\ I_2 \\end{bmatrix} = \\begin{bmatrix} V_s \\\\ 0 \\end{bmatrix}$$\n\n---\n\n### 4. Input Impedance and Reflected Impedance\nFrom Equation 2:\n$$I_2 = \\frac{j\\omega M}{R_2 + Z_L + j\\omega L_2} I_1 = \\frac{j\\omega M}{Z_{22}} I_1$$\nSubstitute into Equation 1:\n$$V_s = Z_{11} I_1 - j\\omega M \\left( \\frac{j\\omega M}{Z_{22}} I_1 \\right) = \\left[ Z_{11} + \\frac{\\omega^2 M^2}{Z_{22}} \\right] I_1$$\nTotal driving point input impedance seen by source:\n$$\\mathbf{Z_{in} = \\frac{V_s}{I_1} = Z_{11} + Z_{refl} = (R_1 + j\\omega L_1) + \\frac{\\omega^2 M^2}{R_2 + Z_L + j\\omega L_2}}$$\nThe term $Z_{refl} = \\frac{\\omega^2 M^2}{Z_{22}}$ is the **reflected impedance** coupled from secondary into primary.",
      "detailedLearning": "### Key Property of Reflected Impedance\nIf the secondary circuit is purely inductive ($Z_{22} = j\\omega L_2$), the reflected impedance is:\n$$Z_{refl} = \\frac{\\omega^2 M^2}{j\\omega L_2} = -j\\frac{\\omega M^2}{L_2}$$\nNotice the negative sign! An inductive secondary reflects back into the primary as a **capacitive** effect, reducing net primary inductance."
    }
  },
  {
    "id": "cas-u3-q5",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Series resonance",
    "title": "Series Resonance: Derivation of Resonant Frequency & Characteristics",
    "questionText": "Explain series resonance in an RLC circuit. Derive the expression for resonant frequency omega_0 = 1 / sqrt(LC). Draw the impedance, current, and phase angle vs frequency curves.",
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
    "frequency": "Appeared in Dec 2023, Dec 2022, and Dec 2019",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Series Resonance Core Facts\n- **Condition**: Total circuit impedance is purely resistive ($X_L = X_C \\implies \\text{Im}\\{Z\\} = 0$).\n- **Resonant Frequency**:\n$$\\omega_0 = \\frac{1}{\\sqrt{LC}}\\,\\text{rad/s}, \\quad f_0 = \\frac{1}{2\\pi\\sqrt{LC}}\\,\\text{Hz}$$\n- **Impedance**: $Z = R$ (Minimum impedance).\n- **Current**: $I_{max} = \\frac{V}{R}$ (Maximum current, in phase with $V$).\n- **Power Factor**: Unity ($\\cos\\theta = 1$).\n- **Known as**: **Voltage Resonance** or **Acceptor Circuit**.",
      "examAnswer": "### 1. Definition of Series Resonance\nA series RLC circuit is said to be in electrical resonance when the reactive component of the total input impedance becomes zero, causing the supply voltage and line current to be exactly in phase with each other.\n\nTotal series impedance:\n$$Z(j\\omega) = R + j\\left( \\omega L - \\frac{1}{\\omega C} \\right)$$\n\n---\n\n### 2. Derivation of Resonant Frequency\nAt resonance ($\\\\omega = \\omega_0$), the net reactance is identically zero:\n$$\\text{Im}\\{Z(j\\omega_0)\\} = 0 \\implies \\omega_0 L - \\frac{1}{\\omega_0 C} = 0$$\n$$\\omega_0 L = \\frac{1}{\\omega_0 C}$$\n$$\\omega_0^2 = \\frac{1}{LC} \\implies \\mathbf{\\omega_0 = \\frac{1}{\\sqrt{LC}}\\,\\text{rad/s}}$$\nSince $\\omega_0 = 2\\pi f_0$:\n$$\\mathbf{f_0 = \\frac{1}{2\\pi \\sqrt{LC}}\\,\\text{Hz}}$$\n\n---\n\n### 3. Characteristics of Series Resonance\n1. **Minimum Impedance**: At $\\omega = \\omega_0$, $Z = R$.\n2. **Maximum Current**: $I_0 = \\frac{V}{R}$.\n3. **Unity Power Factor**: $\\theta = 0^\\circ \\implies \\cos\\theta = 1$.\n4. **Voltage Across Reactive Elements**:\n$$V_L = I_0 (\\omega_0 L) = \\left(\\frac{V}{R}\\right) \\omega_0 L = Q \\cdot V$$\n$$V_C = I_0 \\left(\\frac{1}{\\omega_0 C}\\right) = Q \\cdot V$$\nVoltages across $L$ and $C$ are equal in magnitude, $180^\\circ$ out of phase, and $Q$ times larger than supply voltage $V$.\n\n---\n\n### 4. Frequency Response Curves\n\n```\n  Current I & Impedance Z\n     ^\n     |         Current I_max = V/R\n     |             /\\\n     |            /  \\\n     |           /    \\\n     |   Z      /      \\       Z = sqrt(R^2 + (wL - 1/wC)^2)\n     |    \\    /        \\    /\n     |     \\  /          \\  /\n   R +------\\/------------\\/----------------- (Z_min = R)\n     |      |             |\n     0----+-------+-------------+-------------> Frequency w\n         w_1     w_0           w_2\n       (Leading) (Unity)     (Lagging)\n```\n- Below $\\omega_0$ ($X_C > X_L$): Circuit is **capacitive** (current leads voltage).\n- At $\\omega_0$ ($X_C = X_L$): Circuit is **purely resistive**.\n- Above $\\omega_0$ ($X_L > X_C$): Circuit is **inductive** (current lags voltage).",
      "detailedLearning": "### Why is it Called an Acceptor Circuit?\nBecause series resonance produces minimum impedance ($Z = R$), the circuit willingly \"accepts\" (passes) signals at its resonant frequency $\\omega_0$ while offering high impedance and rejecting signals at all other frequencies. It is the primary building block of radio tuner front-ends."
    }
  },
  {
    "id": "cas-u3-q6",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Quality factor",
    "title": "Quality Factor (Q) of Series Resonant Circuit: Derivations & Meaning",
    "questionText": "Define Quality Factor (Q) of a series resonant circuit. Derive expressions for Q in terms of: (a) omega_0, L, R, and (b) R, L, C. Explain why series resonance is called voltage resonance.",
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
      "quickRevision": "### Q-Factor Formulas\n- **Fundamental Definition**:\n$$Q = 2\\pi \\times \\frac{\\text{Maximum Energy Stored}}{\\text{Energy Dissipated Per Cycle}}$$\n- **Formulas for Series Resonance**:\n$$Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$$\n- **Voltage Magnification**:\n$$Q = \\frac{V_L}{V} = \\frac{V_C}{V} \\implies V_L = V_C = Q \\cdot V$$\nSince reactive voltages are magnified by factor $Q$, it is called **Voltage Resonance**.",
      "examAnswer": "### 1. Fundamental Definition of Quality Factor\nThe Quality Factor ($Q$) is a dimensionless figure of merit that quantifies the energy storage efficiency of a resonant system relative to its resistive dissipation:\n$$Q = 2\\pi \\cdot \\frac{\\text{Maximum energy stored in magnetic and electric fields}}{\\text{Energy dissipated in resistance per cycle of oscillation}}$$\n\n---\n\n### 2. Mathematical Derivation from Energy Relations\nAt resonance, current is:\n$$i(t) = I_m \\sin(\\omega_0 t)$$\nPeak energy stored in the magnetic field:\n$$W_{stored} = \\frac{1}{2} L I_m^2$$\nAverage power dissipated in resistor $R$:\n$$P_{avg} = I_{rms}^2 R = \\frac{1}{2} I_m^2 R$$\nEnergy dissipated during one cycle (time period $T = \\frac{2\\pi}{\\omega_0}$):\n$$W_{dissipated} = P_{avg} \\cdot T = \\left(\\frac{1}{2} I_m^2 R\\right) \\cdot \\left(\\frac{2\\pi}{\\omega_0}\\right) = \\frac{\\pi I_m^2 R}{\\omega_0}$$\n\nEvaluating $Q$:\n$$Q = 2\\pi \\cdot \\frac{\\frac{1}{2} L I_m^2}{\\frac{\\pi I_m^2 R}{\\omega_0}} = 2\\pi \\cdot \\frac{\\omega_0 L}{2\\pi R} = \\mathbf{\\frac{\\omega_0 L}{R}}$$\n\n---\n\n### 3. Alternative Formulations\nSince at resonance $\\omega_0 L = \\frac{1}{\\omega_0 C}$:\n$$\\mathbf{Q = \\frac{1}{\\omega_0 C R}}$$\n\nSubstituting $\\omega_0 = \\frac{1}{\\sqrt{LC}}$:\n$$Q = \\frac{1}{\\left(\\frac{1}{\\sqrt{LC}}\\right) C R} = \\frac{\\sqrt{LC}}{C R} = \\frac{1}{R} \\frac{\\sqrt{L}\\sqrt{C}}{\\sqrt{C}\\sqrt{C}} = \\mathbf{\\frac{1}{R}\\sqrt{\\frac{L}{C}}}$$\n\n---\n\n### 4. Why Series Resonance is Called \"Voltage Resonance\"\nAt resonance, the current is $I_0 = V / R$.\nThe voltage developed across the inductor is:\n$$V_L = I_0 X_L = \\left(\\frac{V}{R}\\right) \\omega_0 L = \\left(\\frac{\\omega_0 L}{R}\\right) V = \\mathbf{Q \\cdot V}$$\nSimilarly, across the capacitor:\n$$V_C = I_0 X_C = \\left(\\frac{V}{R}\\right) \\frac{1}{\\omega_0 C} = \\mathbf{Q \\cdot V}$$\nIf $Q = 50$ and supply voltage $V = 10\\,\\text{V}$, the voltage across the capacitor and inductor is $500\\,\\text{V}$!\nBecause the reactive voltages are magnified by factor $Q$ above the input voltage, series resonance is termed **voltage resonance**.",
      "detailedLearning": "### Circuit Component Rating Danger\nEngineers must select capacitors and inductors whose breakdown dielectric rating is significantly higher than the DC/AC supply voltage ($V_{rating} > Q \\cdot V_{supply}$), otherwise components can catastrophically rupture at resonance."
    }
  },
  {
    "id": "cas-u3-q7",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Bandwidth",
    "title": "Half-Power Frequencies & Bandwidth Derivation: BW = omega_0 / Q",
    "questionText": "Derive the mathematical expressions for half-power frequencies (omega_1 and omega_2) and bandwidth (BW) of a series RLC circuit. Prove that BW = omega_0 / Q = R / L.",
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
      "quickRevision": "### Bandwidth & Half-Power Frequencies\n- **Half-Power Frequencies**: Frequencies where power drops to half of maximum:\n$$P = \\frac{1}{2} P_{max} \\implies I = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 I_0$$\n- **Net Reactance Condition**: $X = \\pm R \\implies |Z| = \\sqrt{R^2 + R^2} = \\sqrt{2} R$.\n- **Expressions**:\n$$\\omega_1 = -\\frac{R}{2L} + \\sqrt{\\left(\\frac{R}{2L}\\right)^2 + \\frac{1}{LC}}, \\quad \\omega_2 = +\\frac{R}{2L} + \\sqrt{\\left(\\frac{R}{2L}\\right)^2 + \\frac{1}{LC}}$$\n- **Bandwidth**:\n$$BW = \\Delta\\omega = \\omega_2 - \\omega_1 = \\frac{R}{L}\\,\\text{rad/s} = \\frac{\\omega_0}{Q}$$\n- **Geometric Symmetry**: $\\omega_0 = \\sqrt{\\omega_1 \\omega_2}$.",
      "examAnswer": "### 1. Definition of Half-Power Frequencies\nThe half-power frequencies $\\omega_1$ (lower cutoff) and $\\omega_2$ (upper cutoff) are the frequencies at which the power dissipated in the load resistor drops to exactly half of its peak resonant value:\n$$P = \\frac{1}{2} P_{max} \\implies I^2 R = \\frac{1}{2} I_0^2 R \\implies \\mathbf{I = \\frac{I_0}{\\sqrt{2}} = 0.707 I_0}$$\nIn terms of decibels, this corresponds to the $-3\\,\\text{dB}$ points ($20 \\log_{10}(1/\\sqrt{2}) = -3.01\\,\\text{dB}$).\n\n---\n\n### 2. Condition for Half-Power Frequencies\nSince $I = \\frac{V}{|Z|}$ and $I_0 = \\frac{V}{R}$:\n$$\\frac{V}{|Z|} = \\frac{V}{\\sqrt{2} R} \\implies |Z| = \\sqrt{2} R$$\n$$|Z|^2 = R^2 + X^2 = 2 R^2 \\implies X^2 = R^2 \\implies \\mathbf{X = \\pm R}$$\n$$\\omega L - \\frac{1}{\\omega C} = \\pm R$$\n\n---\n\n### 3. Derivation of Cutoff Frequencies\n\n#### Case 1: Upper cutoff frequency $\\omega_2$ ($X = +R$):\n$$\\omega_2 L - \\frac{1}{\\omega_2 C} = R \\implies \\omega_2^2 L - R \\omega_2 - \\frac{1}{C} = 0$$\n$$\\omega_2^2 - \\left(\\frac{R}{L}\\right) \\omega_2 - \\frac{1}{LC} = 0$$\nUsing the quadratic formula and retaining positive root:\n$$\\mathbf{\\omega_2 = +\\frac{R}{2L} + \\sqrt{\\left(\\frac{R}{2L}\\right)^2 + \\frac{1}{LC}}}$$\n\n#### Case 2: Lower cutoff frequency $\\omega_1$ ($X = -R$):\n$$\\omega_1 L - \\frac{1}{\\omega_1 C} = -R \\implies \\omega_1^2 + \\left(\\frac{R}{L}\\right) \\omega_1 - \\frac{1}{LC} = 0$$\n$$\\mathbf{\\omega_1 = -\\frac{R}{2L} + \\sqrt{\\left(\\frac{R}{2L}\\right)^2 + \\frac{1}{LC}}}$$\n\n---\n\n### 4. Bandwidth Derivation\nThe bandwidth $BW$ is the difference between upper and lower cutoff frequencies:\n$$BW = \\omega_2 - \\omega_1 = \\left( \\frac{R}{2L} + \\sqrt{\\dots} \\right) - \\left( -\\frac{R}{2L} + \\sqrt{\\dots} \\right)$$\n$$\\mathbf{BW = \\Delta\\omega = \\frac{R}{L}\\,\\text{rad/s}}$$\nIn Hertz:\n$$\\mathbf{\\Delta f = f_2 - f_1 = \\frac{R}{2\\pi L}\\,\\text{Hz}}$$\n\nSince $Q = \\frac{\\omega_0 L}{R} \\implies \\frac{R}{L} = \\frac{\\omega_0}{Q}$:\n$$\\mathbf{BW = \\frac{\\omega_0}{Q}}$$\nThis proves that bandwidth is inversely proportional to Quality Factor.",
      "detailedLearning": "### Geometric Mean Property\nMultiplying $\\omega_1$ and $\\omega_2$:\n$$\\omega_1 \\omega_2 = \\left( \\sqrt{\\dots} - \\frac{R}{2L} \\right) \\left( \\sqrt{\\dots} + \\frac{R}{2L} \\right) = \\left[ \\left(\\frac{R}{2L}\\right)^2 + \\frac{1}{LC} \\right] - \\left(\\frac{R}{2L}\\right)^2 = \\frac{1}{LC} = \\omega_0^2$$\n$$\\mathbf{\\omega_0 = \\sqrt{\\omega_1 \\omega_2}}$$\nThe resonant frequency is the exact **geometric mean** of the half-power frequencies."
    }
  },
  {
    "id": "cas-u3-q8",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Selectivity",
    "title": "Selectivity & Effect of Resistance R on Frequency Response Curves",
    "questionText": "Explain selectivity of a resonant circuit. Discuss the effect of circuit resistance (R) on the sharpness of the frequency response and selectivity curves.",
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
      "quickRevision": "### Selectivity & Resistance Summary\n- **Selectivity**: The ability of a resonant circuit to discriminate between a desired frequency band and unwanted adjacent channels.\n- **Relation to Q and BW**:\n$$\\text{High } Q \\iff \\text{Narrow } BW \\iff \\text{High Selectivity (Sharp Peak)}$$\n$$\\text{Low } Q \\iff \\text{Broad } BW \\iff \\text{Poor Selectivity (Flat Peak)}$$\n- **Effect of Increasing $R$**:\n  1. Peak current decreases ($I_{max} = V/R$).\n  2. Bandwidth widens ($BW = R/L$).\n  3. Quality factor decreases ($Q = \\frac{1}{R}\\sqrt{L/C}$).\n  4. Response curve flattens out, degrading selectivity.",
      "examAnswer": "### 1. Concept of Selectivity\nSelectivity refers to the capability of a tuned electrical circuit to respond strongly to signals within a narrow band centered around the resonant frequency $\\omega_0$ while offering high attenuation to signals at frequencies outside this passband.\nMathematically, selectivity is proportional to Quality Factor:\n$$\\text{Selectivity} \\propto Q = \\frac{\\omega_0}{BW}$$\n\n---\n\n### 2. Influence of Resistance $R$ on Resonance Curves\n\n```\n Response Current I\n     ^\n     |         R_1 (Small R -> High Q, Sharp, Highly Selective)\n     |          /\\\n     |         /  \\\n     |        /    \\      R_2 (Medium R)\n     |       |  /\\  |      /\\\n     |       | /  \\ |     /  \\\n     |       |/    \\|    /    \\     R_3 (Large R -> Low Q, Flat)\n     |       /      \\   /      \\     ------------\n     +------+--------+--+-------+--------------------> Frequency w\n                    w_0\n```\n\n1. **Peak Current Amplitude**:\n   $$I_{max} = \\frac{V}{R}$$\n   Smaller $R$ results in higher peak current.\n2. **Width of Resonance Curve (Bandwidth)**:\n   $$BW = \\frac{R}{L}$$\n   As $R$ increases, bandwidth expands proportionally, spreading out the response over a wide frequency span.\n3. **Quality Factor**:\n   $$Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$$\n   Inversely proportional to $R$.\n4. **Conclusion**:\n   To obtain high selectivity (sharp discrimination), circuit resistance $R$ must be made as small as practically possible.",
      "detailedLearning": "### Practical Trade-Off in AM Radio\nIn AM radio reception, human audio signals require a bandwidth of $10\\,\\text{kHz}$ ($\\pm 5\\,\\text{kHz}$). If $Q$ is made too high, bandwidth becomes narrower than $10\\,\\text{kHz}$, cutting off higher audio frequencies and producing muffled, distorted sound. Hence, designers deliberately damp the circuit to achieve optimal bandwidth."
    }
  },
  {
    "id": "cas-u3-q9",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Parallel resonance",
    "title": "Parallel Resonance in Practical Tank Circuit: Resonant Frequency & Dynamic Resistance",
    "questionText": "Explain parallel resonance (anti-resonance) in a practical tank circuit (inductor with coil resistance R_L in parallel with capacitor C). Derive the resonant frequency omega_r and dynamic resistance R_d.",
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
      "quickRevision": "### Parallel Tank Resonance Formulas\n- Circuit: Inductor branch $(R_L + j\\omega L)$ in parallel with capacitor branch $(1/j\\omega C)$.\n- **Resonant Frequency**:\n$$\\omega_r = \\sqrt{\\frac{1}{LC} - \\frac{R_L^2}{L^2}}\\,\\text{rad/s}, \\quad f_r = \\frac{1}{2\\pi}\\sqrt{\\frac{1}{LC} - \\frac{R_L^2}{L^2}}$$\n- **Condition for Resonance to Occur**: $R_L < \\sqrt{L/C}$.\n- **Dynamic Resistance at Resonance ($R_d$)**:\n$$R_d = \\frac{L}{C R_L}\\,\\Omega \\quad (\\text{Maximum Impedance})$$\n- **Line Current at Resonance**:\n$$I_{min} = \\frac{V}{R_d} = \\frac{V C R_L}{L} \\quad (\\text{Minimum Current})$$\n- Known as: **Current Resonance** or **Rejector Circuit**.",
      "examAnswer": "### 1. Circuit Configuration of Practical Tank Circuit\nA real-world inductor contains winding resistance $R_L$.\nTotal parallel admittance:\n$$Y = Y_L + Y_C = \\frac{1}{R_L + j\\omega L} + j\\omega C$$\nRationalizing the inductor branch:\n$$Y = \\frac{R_L - j\\omega L}{R_L^2 + \\omega^2 L^2} + j\\omega C = \\frac{R_L}{R_L^2 + \\omega^2 L^2} + j\\left( \\omega C - \\frac{\\omega L}{R_L^2 + \\omega^2 L^2} \\right)$$\n\n---\n\n### 2. Condition for Resonance\nAt parallel resonance, the net reactive susceptance is zero ($\\\text{Im}\\{Y\\} = 0$):\n$$\\omega_r C - \\frac{\\omega_r L}{R_L^2 + \\omega_r^2 L^2} = 0$$\nDividing by $\\omega_r \\neq 0$:\n$$C = \\frac{L}{R_L^2 + \\omega_r^2 L^2} \\implies R_L^2 + \\omega_r^2 L^2 = \\frac{L}{C}$$\n$$\\omega_r^2 L^2 = \\frac{L}{C} - R_L^2$$\nDividing both sides by $L^2$:\n$$\\omega_r^2 = \\frac{1}{LC} - \\frac{R_L^2}{L^2}$$\n$$\\mathbf{\\omega_r = \\sqrt{\\frac{1}{LC} - \\frac{R_L^2}{L^2}}\\,\\text{rad/s}}$$\nIn Hertz:\n$$\\mathbf{f_r = \\frac{1}{2\\pi} \\sqrt{\\frac{1}{LC} - \\frac{R_L^2}{L^2}}\\,\\text{Hz}}$$\n\nNotice:\n- If coil resistance is negligible ($R_L \\approx 0$), $\\omega_r = \\frac{1}{\\sqrt{LC}}$ (same as series resonance).\n- Resonance is only physically possible if $\\frac{1}{LC} > \\frac{R_L^2}{L^2} \\implies R_L < \\sqrt{\\frac{L}{C}}$.\n\n---\n\n### 3. Dynamic Resistance ($R_d$)\nAt resonance, since the imaginary part of admittance is zero:\n$$Y_r = \\frac{R_L}{R_L^2 + \\omega_r^2 L^2}$$\nSubstitute $R_L^2 + \\omega_r^2 L^2 = \\frac{L}{C}$:\n$$Y_r = \\frac{R_L}{L/C} = \\frac{C R_L}{L}$$\nThe total input impedance at resonance, termed **dynamic resistance $R_d$**, is:\n$$R_d = \\frac{1}{Y_r} = \\mathbf{\\frac{L}{C R_L}\\,\\Omega}$$\n\n---\n\n### 4. Characteristics of Parallel Resonance\n1. **Maximum Impedance**: $Z_{max} = R_d = \\frac{L}{C R_L}$ (purely resistive).\n2. **Minimum Supply Line Current**: $I_{min} = \\frac{V}{R_d}$.\n3. **Current Magnification**: Internal circulating current between $L$ and $C$ is $Q$ times the line current:\n$$I_C = Q \\cdot I_{line}$$\nHence called **Current Resonance** or **Rejector Circuit**.",
      "detailedLearning": "### Why is it Called a Rejector Circuit?\nBecause at parallel resonance the circuit presents enormous dynamic resistance $R_d$, it effectively blocks (rejects) signals at frequency $\\omega_r$. Parallel resonant circuits are used in wave-traps to eliminate specific interfering transmitter frequencies."
    }
  },
  {
    "id": "cas-u3-q10",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Resonance comparison and applications",
    "title": "Comprehensive Comparison: Series vs Parallel Resonance",
    "questionText": "Compare series resonance and parallel resonance on at least six parameters (impedance, current, resonant frequency, Q-factor, magnification, applications).",
    "marks": 7,
    "priority": "high",
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
      "quickRevision": "### Quick Comparison Table\n| Parameter | Series Resonance | Parallel Resonance |\n|---|---|---|\n| Impedance | Minimum ($Z = R$) | Maximum ($R_d = L/(CR)$) |\n| Current | Maximum ($I = V/R$) | Minimum ($I = V/R_d$) |\n| Resonant Freq | $\\omega_0 = 1/\\sqrt{LC}$ | $\\omega_r = \\sqrt{1/(LC) - R^2/L^2}$ |\n| Magnification | Voltage ($V_L = Q V$) | Current ($I_C = Q I$) |\n| Power Factor | Unity | Unity |\n| Known as | Acceptor Circuit | Rejector Circuit |",
      "examAnswer": "### Detailed Comparison Table: Series vs. Parallel Resonance\n\n| S.No | Parameter | Series Resonance | Parallel Resonance (Tank) |\n|---|---|---|---|\n| 1 | **Circuit Topology** | $R, L, C$ in series | $C$ in parallel with $(R + j\\omega L)$ |\n| 2 | **Impedance at Resonance** | **Minimum**: $Z_{min} = R$ | **Maximum**: $Z_{max} = R_d = \\frac{L}{C R}$ |\n| 3 | **Line Current at Resonance** | **Maximum**: $I_{max} = \\frac{V}{R}$ | **Minimum**: $I_{min} = \\frac{V}{R_d} = \\frac{V C R}{L}$ |\n| 4 | **Resonant Frequency** | $\\omega_0 = \\frac{1}{\\sqrt{LC}}\\,\\text{rad/s}$ | $\\omega_r = \\sqrt{\\frac{1}{LC} - \\frac{R^2}{L^2}}\\,\\text{rad/s}$ |\n| 5 | **Quality Factor ($Q$)** | $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$ | $Q = \\frac{\\omega_r L}{R} \\approx \\frac{1}{R}\\sqrt{\\frac{L}{C}}$ |\n| 6 | **Magnification Effect** | **Voltage Magnification**: $V_L = V_C = Q \\cdot V$ | **Current Magnification**: $I_C = I_L = Q \\cdot I_{line}$ |\n| 7 | **Circuit Nomenclature** | **Acceptor Circuit** | **Rejector Circuit** |\n| 8 | **Phase Angle vs Frequency** | Leading below $\\omega_0$, Lagging above $\\omega_0$ | Lagging below $\\omega_r$, Leading above $\\omega_r$ |\n| 9 | **Primary Engineering Uses** | Radio receiver input tuning, induction heating | RF oscillators (Colpitts, Hartley), wave traps |",
      "detailedLearning": "### Complete Duality\nMathematically, series resonance and parallel resonance are exact topological duals under the mapping: $V \\leftrightarrow I, R \\leftrightarrow G, L \\leftrightarrow C, Z \\leftrightarrow Y$."
    }
  },
  {
    "id": "cas-u3-q11",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Series resonance",
    "title": "Comprehensive Numerical on Series RLC Resonance",
    "questionText": "A series RLC circuit has R = 10 ohms, L = 0.1 H, and C = 10 microfarads connected across a 200V variable frequency source. Calculate: (a) resonant frequency, (b) Q-factor, (c) half-power frequencies, (d) bandwidth, and (e) voltage across inductor at resonance.",
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
      "quickRevision": "### Quick Numerical Solution\n- $\\omega_0 = 1/\\sqrt{LC} = 1/\\sqrt{0.1 \\times 10 \\times 10^{-6}} = 1/\\sqrt{10^{-6}} = 1000\\,\\text{rad/s} \\implies f_0 = 159.15\\,\\text{Hz}$.\n- $Q = \\frac{\\omega_0 L}{R} = \\frac{1000 \\times 0.1}{10} = 10$.\n- $BW = \\frac{\\omega_0}{Q} = \\frac{1000}{10} = 100\\,\\text{rad/s} \\implies \\Delta f = 15.92\\,\\text{Hz}$.\n- $\\omega_1 = \\omega_0 - \\frac{BW}{2} = 1000 - 50 = 950\\,\\text{rad/s}$ (approx) or exact: $951.2\\,\\text{rad/s}$.\n- $\\omega_2 = \\omega_0 + \\frac{BW}{2} = 1000 + 50 = 1050\\,\\text{rad/s}$ (approx) or exact: $1051.2\\,\\text{rad/s}$.\n- $V_L = Q \\cdot V = 10 \\times 200\\,\\text{V} = 2000\\,\\text{V}$.",
      "examAnswer": "### 1. Given Data\n- Resistance: $R = 10\\,\\Omega$\n- Inductance: $L = 0.1\\,\\text{H}$\n- Capacitance: $C = 10\\,\\mu\\text{F} = 10 \\times 10^{-6}\\,\\text{F}$\n- Applied voltage: $V = 200\\,\\text{V}$\n\n---\n\n### 2. Step-by-Step Calculations\n\n#### (a) Resonant Frequency ($\\omega_0$ and $f_0$)\n$$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{0.1 \\times 10 \\times 10^{-6}}} = \\frac{1}{\\sqrt{10^{-6}}} = \\frac{1}{10^{-3}} = \\mathbf{1000\\,\\text{rad/s}}$$\n$$f_0 = \\frac{\\omega_0}{2\\pi} = \\frac{1000}{2 \\times 3.14159} = \\mathbf{159.15\\,\\text{Hz}}$$\n\n#### (b) Quality Factor ($Q$)\n$$Q = \\frac{\\omega_0 L}{R} = \\frac{1000 \\times 0.1}{10} = \\frac{100}{10} = \\mathbf{10}$$\n\n#### (c) Bandwidth ($BW$)\n$$BW = \\Delta\\omega = \\frac{\\omega_0}{Q} = \\frac{1000}{10} = \\mathbf{100\\,\\text{rad/s}}$$\n$$\\Delta f = \\frac{BW}{2\\pi} = \\frac{100}{2\\pi} = \\mathbf{15.92\\,\\text{Hz}}$$\n\n#### (d) Half-Power Frequencies ($\\omega_1$ and $\\omega_2$)\nExact formulas:\n$$\\omega_2 = +\\frac{R}{2L} + \\sqrt{\\left(\\frac{R}{2L}\\right)^2 + \\omega_0^2}$$\nHere $\\frac{R}{2L} = \\frac{10}{2 \\times 0.1} = 50\\,\\text{rad/s}$.\n$$\\omega_2 = 50 + \\sqrt{50^2 + 1000^2} = 50 + \\sqrt{2500 + 1000000} = 50 + \\sqrt{1002500} = 50 + 1001.25 = \\mathbf{1051.25\\,\\text{rad/s}}$$\n$$\\omega_1 = -50 + 1001.25 = \\mathbf{951.25\\,\\text{rad/s}}$$\n\n#### (e) Voltage across Inductor at Resonance ($V_L$)\nCurrent at resonance:\n$$I_0 = \\frac{V}{R} = \\frac{200\\,\\text{V}}{10\\,\\Omega} = 20\\,\\text{A}$$\nInductive reactance:\n$$X_L = \\omega_0 L = 1000 \\times 0.1 = 100\\,\\Omega$$\nVoltage across inductor:\n$$V_L = I_0 \\cdot X_L = 20\\,\\text{A} \\times 100\\,\\Omega = \\mathbf{2000\\,\\text{V}}$$\nAlternatively:\n$$V_L = Q \\cdot V = 10 \\times 200\\,\\text{V} = \\mathbf{2000\\,\\text{V}}$$\n\n---\n\n### 3. Final Summary\n- Resonant frequency: $\\omega_0 = 1000\\,\\text{rad/s}, f_0 = 159.15\\,\\text{Hz}$\n- Quality factor: $Q = 10$\n- Bandwidth: $BW = 100\\,\\text{rad/s}$ ($15.92\\,\\text{Hz}$)\n- Cutoff frequencies: $\\omega_1 = 951.25\\,\\text{rad/s}, \\omega_2 = 1051.25\\,\\text{rad/s}$\n- Inductor voltage: $V_L = 2000\\,\\text{V}$ (10 times supply voltage)",
      "detailedLearning": "### Verification of Geometric Mean\n$$\\sqrt{\\omega_1 \\omega_2} = \\sqrt{951.25 \\times 1051.25} = \\sqrt{1000001.5} \\approx 1000\\,\\text{rad/s} = \\omega_0$$\nConfirms calculations are exact.",
      "numericalSolution": {
        "given": [
          "R = 10 ohms, L = 0.1 H, C = 10 uF",
          "V = 200 V variable frequency supply"
        ],
        "toFind": "omega_0, Q, BW, omega_1, omega_2, V_L",
        "formula": "omega_0 = 1/sqrt(LC); Q = omega_0*L/R; BW = omega_0/Q; V_L = Q * V",
        "stepByStepSolution": [
          "Step 1: omega_0 = 1 / sqrt(0.1 * 10e-6) = 1000 rad/s",
          "Step 2: Q = (1000 * 0.1) / 10 = 10",
          "Step 3: BW = 1000 / 10 = 100 rad/s",
          "Step 4: omega_1 = 951.25 rad/s, omega_2 = 1051.25 rad/s",
          "Step 5: V_L = 10 * 200 = 2000 V"
        ],
        "substitution": "V_L = 10 * 200 V",
        "calculation": "V_L = 2000 V",
        "finalAnswer": "omega_0 = 1000 rad/s, Q = 10, BW = 100 rad/s, V_L = 2000 V",
        "units": "rad/s, V",
        "explanation": "High Q series resonant circuit exhibits tenfold voltage magnification."
      }
    }
  },
  {
    "id": "cas-u3-q12",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Coefficient of coupling",
    "title": "Coupled Coils Numerical: Mutual Inductance & Series Aiding/Opposing",
    "questionText": "Two coupled coils with L_1 = 0.6 H and L_2 = 0.4 H have a coefficient of coupling k = 0.8. Calculate the mutual inductance M and the equivalent inductance when connected in: (a) series aiding, and (b) series opposing.",
    "marks": 7,
    "priority": "very_high",
    "type": "numerical",
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
      "quickRevision": "### Quick Numerical Solution\n- $M = k \\sqrt{L_1 L_2} = 0.8 \\times \\sqrt{0.6 \\times 0.4} = 0.8 \\times \\sqrt{0.24} = 0.8 \\times 0.4899 = 0.3919\\,\\text{H}$.\n- Series Aiding: $L_{aid} = L_1 + L_2 + 2M = 0.6 + 0.4 + 2(0.3919) = 1.0 + 0.7838 = 1.7838\\,\\text{H}$.\n- Series Opposing: $L_{opp} = L_1 + L_2 - 2M = 0.6 + 0.4 - 2(0.3919) = 1.0 - 0.7838 = 0.2162\\,\\text{H}$.",
      "examAnswer": "### 1. Given Parameters\n- Self-inductance of coil 1: $L_1 = 0.6\\,\\text{H}$\n- Self-inductance of coil 2: $L_2 = 0.4\\,\\text{H}$\n- Coupling coefficient: $k = 0.8$\n\n---\n\n### 2. Step-by-Step Calculations\n\n#### Step 1: Calculate Mutual Inductance ($M$)\n$$M = k \\sqrt{L_1 L_2}$$\n$$M = 0.8 \\times \\sqrt{0.6 \\times 0.4} = 0.8 \\times \\sqrt{0.24}$$\nSince $\\sqrt{0.24} \\approx 0.489898\\,\\text{H}$:\n$$M = 0.8 \\times 0.489898 = \\mathbf{0.39192\\,\\text{H} \\approx 391.9\\,\\text{mH}}$$\n\n#### Step 2: Series Aiding Connection ($L_{aid}$)\nWhen connected such that mutual flux reinforces self-flux:\n$$L_{aid} = L_1 + L_2 + 2M$$\n$$L_{aid} = 0.6 + 0.4 + 2(0.39192) = 1.0 + 0.78384 = \\mathbf{1.7838\\,\\text{H}}$$\n\n#### Step 3: Series Opposing Connection ($L_{opp}$)\nWhen connected such that mutual flux opposes self-flux:\n$$L_{opp} = L_1 + L_2 - 2M$$\n$$L_{opp} = 0.6 + 0.4 - 2(0.39192) = 1.0 - 0.78384 = \\mathbf{0.2162\\,\\text{H}}$$\n\n---\n\n### 3. Final Answers\n- **Mutual Inductance**: $\\mathbf{M = 0.3919\\,\\text{H}}$\n- **Series Aiding Inductance**: $\\mathbf{L_{aid} = 1.7838\\,\\text{H}}$\n- **Series Opposing Inductance**: $\\mathbf{L_{opp} = 0.2162\\,\\text{H}}$",
      "detailedLearning": "### Checking Self-Consistency\n$L_{aid} - L_{opp} = 1.7838 - 0.2162 = 1.5676\\,\\text{H}$.\n$4M = 4 \\times 0.39192 = 1.56768\\,\\text{H}$.\nMatches exactly.",
      "numericalSolution": {
        "given": [
          "L_1 = 0.6 H, L_2 = 0.4 H, k = 0.8"
        ],
        "toFind": "M, L_aid, L_opp",
        "formula": "M = k*sqrt(L_1*L_2); L_aid = L_1 + L_2 + 2M; L_opp = L_1 + L_2 - 2M",
        "stepByStepSolution": [
          "Step 1: Compute M = 0.8 * sqrt(0.24) = 0.3919 H",
          "Step 2: Compute L_aid = 0.6 + 0.4 + 2*(0.3919) = 1.7838 H",
          "Step 3: Compute L_opp = 0.6 + 0.4 - 2*(0.3919) = 0.2162 H"
        ],
        "substitution": "L_aid = 1.0 + 0.7838",
        "calculation": "1.7838 H",
        "finalAnswer": "M = 0.3919 H, L_aid = 1.7838 H, L_opp = 0.2162 H",
        "units": "H",
        "explanation": "Formulas apply standard dot convention series coupling relations."
      }
    }
  },
  {
    "id": "cas-u3-q13",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Parallel resonance",
    "title": "Parallel Tank Circuit Numerical: Resonant Frequency & Dynamic Impedance",
    "questionText": "In a parallel tank circuit, an inductor with L = 20 mH and winding resistance R = 5 ohms is connected in parallel with C = 100 nF. Calculate the resonant frequency, dynamic impedance at resonance, and Q-factor.",
    "marks": 7,
    "priority": "high",
    "type": "numerical",
    "years": [
      "2024 Test"
    ],
    "sourcePaperType": "internal_test",
    "isSupplementaryTopic": false,
    "frequency": "2024 Internal Test",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Quick Solution\n- $\\omega_r = \\sqrt{\\frac{1}{LC} - \\frac{R^2}{L^2}}$.\n- $LC = 20 \\times 10^{-3} \\times 100 \\times 10^{-9} = 2 \\times 10^{-9} \\implies 1/LC = 5 \\times 10^8$.\n- $R^2/L^2 = 25 / (20 \\times 10^{-3})^2 = 25 / (4 \\times 10^{-4}) = 62,500$.\n- $\\omega_r = \\sqrt{5 \\times 10^8 - 62500} \\approx \\sqrt{5 \\times 10^8} \\approx 22,360\\,\\text{rad/s}$ ($f_r \\approx 3558.7\\,\\text{Hz}$).\n- $R_d = \\frac{L}{C R} = \\frac{20 \\times 10^{-3}}{100 \\times 10^{-9} \\times 5} = \\frac{0.02}{5 \\times 10^{-7}} = 40,000\\,\\Omega = 40\\,\\text{k}\\Omega$.\n- $Q = \\frac{\\omega_r L}{R} = \\frac{22360 \\times 0.02}{5} = \\frac{447.2}{5} = 89.44$.",
      "examAnswer": "### 1. Given Data\n- Inductance: $L = 20\\,\\text{mH} = 20 \\times 10^{-3}\\,\\text{H}$\n- Coil resistance: $R = 5\\,\\Omega$\n- Capacitance: $C = 100\\,\\text{nF} = 100 \\times 10^{-9}\\,\\text{F}$\n\n---\n\n### 2. Step-by-Step Calculations\n\n#### Step 1: Resonant Frequency ($\\omega_r$)\n$$\\frac{1}{LC} = \\frac{1}{20 \\times 10^{-3} \\times 100 \\times 10^{-9}} = \\frac{1}{2 \\times 10^{-9}} = 5 \\times 10^8\\,\\text{rad}^2/\\text{s}^2$$\n$$\\frac{R^2}{L^2} = \\frac{5^2}{(20 \\times 10^{-3})^2} = \\frac{25}{400 \\times 10^{-6}} = 62,500\\,\\text{rad}^2/\\text{s}^2$$\n$$\\omega_r = \\sqrt{\\frac{1}{LC} - \\frac{R^2}{L^2}} = \\sqrt{500,000,000 - 62,500} = \\sqrt{499,937,500} \\approx \\mathbf{22,359.3\\,\\text{rad/s}}$$\n$$f_r = \\frac{\\omega_r}{2\\pi} = \\frac{22,359.3}{2 \\times 3.14159} = \\mathbf{3,558.6\\,\\text{Hz} = 3.559\\,\\text{kHz}}$$\n\n#### Step 2: Dynamic Impedance ($R_d$)\n$$R_d = \\frac{L}{C R} = \\frac{20 \\times 10^{-3}\\,\\text{H}}{(100 \\times 10^{-9}\\,\\text{F}) \\times 5\\,\\Omega} = \\frac{0.02}{5 \\times 10^{-7}} = \\mathbf{40,000\\,\\Omega = 40.0\\,\\text{k}\\Omega}$$\n\n#### Step 3: Quality Factor ($Q$)\n$$Q = \\frac{\\omega_r L}{R} = \\frac{22,359.3 \\times 20 \\times 10^{-3}}{5} = \\mathbf{89.44}$$\n\n---\n\n### 3. Summary of Results\n- Resonant frequency: $\\mathbf{f_r = 3.559\\,\\text{kHz}}$\n- Dynamic impedance: $\\mathbf{R_d = 40.0\\,\\text{k}\\Omega}$\n- Quality factor: $\\mathbf{Q = 89.44}$",
      "detailedLearning": "### Observations\nNotice that $R_d = 40\\,\\text{k}\\Omega$ is 8,000 times larger than the coil resistance $R = 5\\,\\Omega$. This enormous impedance at resonance is why the parallel tank circuit is ideal as an RF amplifier plate/collector load."
    }
  },
  {
    "id": "cas-u3-q14",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Minimum impedance circuits",
    "title": "Minimum vs Maximum Impedance Circuits: Acceptor vs Rejector",
    "questionText": "What is a minimum impedance circuit vs a maximum impedance circuit? Why is series resonance called an acceptor circuit while parallel resonance is called a rejector circuit?",
    "marks": 3,
    "priority": "high",
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
      "quickRevision": "### Acceptor vs Rejector\n- **Minimum Impedance Circuit (Series Resonance)**:\n  - At $\\omega_0$, $Z = R$ (minimum possible impedance).\n  - Current is maximum ($I = V/R$).\n  - Freely accepts and passes resonant frequency signals $\\to$ **Acceptor Circuit**.\n- **Maximum Impedance Circuit (Parallel Resonance)**:\n  - At $\\omega_r$, $Z = R_d = L/(CR)$ (maximum possible impedance).\n  - Line current is minimum ($I = V/R_d$).\n  - Blocks and rejects resonant frequency signals $\\to$ **Rejector Circuit**.",
      "examAnswer": "### 1. Minimum Impedance Circuit (Series Resonance)\nIn a series RLC circuit, total impedance is $Z = R + j(\\omega L - 1/\\omega C)$. At resonance, reactive parts cancel leaving $Z_{min} = R$.\nBecause it presents the absolute lowest impedance to the supply, it draws maximum current at $\\omega_0$, effectively \"accepting\" signals at that frequency while presenting high impedance to all other frequencies. Hence it is designated an **Acceptor Circuit**.\n\n---\n\n### 2. Maximum Impedance Circuit (Parallel Resonance)\nIn a parallel LC tank circuit, total admittance is minimum at resonance, causing impedance to surge to a peak value:\n$$Z_{max} = R_d = \\frac{L}{C R}$$\nBecause this dynamic impedance is extremely large, the circuit draws minimum line current from the generator at $\\omega_r$, effectively blocking or \"rejecting\" transmission of that frequency. Hence it is designated a **Rejector Circuit**.",
      "detailedLearning": "### Practical Broadcast Example\nIn a radio receiver:\n- A series resonant circuit is placed in **series** with the antenna lead to accept only the tuned station frequency.\n- A parallel resonant circuit is placed as a **wave trap** to ground to reject an interfering powerful local station."
    }
  },
  {
    "id": "cas-u3-q15",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Magnetic coupling",
    "title": "Lenz's Law and Dot Convention Polarity Determination",
    "questionText": "What is Lenz's law and how does it determine dot convention polarity in magnetically coupled coils?",
    "marks": 2,
    "priority": "moderate",
    "type": "conceptual",
    "years": [
      "2019"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2019 Short Question",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Lenz's Law & Dot Convention\n- **Lenz's Law**: The polarity of an induced EMF is always such that it establishes an opposing current whose magnetic field opposes the original change in magnetic flux producing it:\n$$e = -N \\frac{d\\phi}{dt}$$\n- **Dot Marking**: Terminals that simultaneously become positive as flux increases in the core receive dots.",
      "examAnswer": "### 1. Lenz'''s Law\nLenz's law states that an induced electromotive force (EMF) always produces an electric current whose magnetic field opposes the original change in magnetic flux that established the EMF.\n\n### 2. Dot Determination\nBy applying Lenz's law and the right-hand grip rule to the physical core windings:\n1. When current enters terminal A of coil 1, it establishes a core flux $\\phi$ in a given direction.\n2. If this flux increases ($d\\phi/dt > 0$), by Lenz's law coil 2 establishes a counter-flux.\n3. The terminal of coil 2 from which current must leave to create this opposing flux becomes positive.\n4. Dots are placed at terminal A of coil 1 and that corresponding positive terminal of coil 2.",
      "detailedLearning": "### Dot Convention Simplicity\nThe dot convention eliminates the need for engineers to inspect 3D coil winding directions on a transformer core schematic."
    }
  },
  {
    "id": "cas-u3-q16",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Quality factor",
    "title": "Voltage Magnification (Q-Magnification) at Series Resonance",
    "questionText": "Explain why the voltages across L and C at series resonance can be much higher than the applied supply voltage (Q-magnification).",
    "marks": 3,
    "priority": "very_high",
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
      "quickRevision": "### Voltage Magnification\n- At series resonance: $I_0 = V / R$.\n- $V_L = I_0 \\omega_0 L = V \\left(\\frac{\\omega_0 L}{R}\\right) = Q \\cdot V$.\n- $V_C = I_0 \\frac{1}{\\omega_0 C} = V \\left(\\frac{1}{\\omega_0 C R}\\right) = Q \\cdot V$.\n- Since $V_L$ and $V_C$ are $180^\\circ$ out of phase, they cancel vectorially ($V_L + V_C = 0$), so KVL is NOT violated ($V_R = V$).\n- If $Q > 1$, reactive component voltages are $Q$ times higher than supply voltage.",
      "examAnswer": "### 1. Mechanism of Voltage Magnification\nAt series resonance, total reactance $X = X_L - X_C = 0$.\nThe circuit current reaches its maximum possible value governed solely by resistance $R$:\n$$I_0 = \\frac{V}{R}$$\nThe voltage across inductor $L$ is:\n$$V_L = I_0 X_L = \\left(\\frac{V}{R}\\right) \\omega_0 L = \\left(\\frac{\\omega_0 L}{R}\\right) V = \\mathbf{Q \\cdot V}$$\nThe voltage across capacitor $C$ is:\n$$V_C = I_0 X_C = \\left(\\frac{V}{R}\\right) \\frac{1}{\\omega_0 C} = \\mathbf{Q \\cdot V}$$\n\n---\n\n### 2. Why KVL is Not Violated\nAlthough $V_L$ and $V_C$ individually can be hundreds of volts while input $V$ is only $10\\,\\text{V}$, Kirchhoff's Voltage Law is fully satisfied because they are phasors with opposite polarities:\n$$V_L = j Q V, \\quad V_C = -j Q V$$\n$$V_{total} = V_R + V_L + V_C = V + j Q V - j Q V = \\mathbf{V}$$\nThe two huge reactive voltages cancel each other out completely at every instant of time.",
      "detailedLearning": "### Practical Hazard\nHigh-Q series resonant filters must utilize capacitors rated for $Q \\times V_{in}$ peak dielectric breakdown."
    }
  },
  {
    "id": "cas-u3-q17",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Half-power frequencies",
    "title": "Half-Power Current & 45 Degree Phase Shift Derivation",
    "questionText": "Define half-power frequencies and show that at these frequencies, the circuit current is 70.7% of its maximum value and the phase angle is 45 degrees.",
    "marks": 3,
    "priority": "very_high",
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
      "quickRevision": "### Half-Power Proof\n- At half-power: $P = \\frac{1}{2} P_{max} \\implies I^2 R = \\frac{1}{2} I_0^2 R \\implies I = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 I_0$.\n- Net reactance: $X = \\pm R$.\n- Impedance: $Z = R \\pm j R = R(1 \\pm j1) = \\sqrt{2} R \\angle \\pm 45^\\circ$.\n- Phase Angle: $\\theta = \\tan^{-1}(\\pm R / R) = \\pm 45^\\circ$.",
      "examAnswer": "### 1. Current Proof\nPower at resonance is:\n$$P_{max} = I_0^2 R$$\nAt the cutoff frequencies $\\omega_1$ and $\\omega_2$, power is defined as:\n$$P = \\frac{1}{2} P_{max} \\implies I^2 R = \\frac{1}{2} I_0^2 R$$\nDividing by $R$:\n$$I^2 = \\frac{I_0^2}{2} \\implies \\mathbf{I = \\frac{I_0}{\\sqrt{2}} = 0.7071 I_0}$$\n\n---\n\n### 2. Phase Angle Proof\nSince $I = \\frac{V}{|Z|}$ and $I_0 = \\frac{V}{R}$:\n$$\\frac{V}{|Z|} = \\frac{V}{\\sqrt{2} R} \\implies |Z| = \\sqrt{2} R$$\n$$Z = R + jX \\implies |Z|^2 = R^2 + X^2 = 2 R^2 \\implies X = \\pm R$$\nThe impedance angle is:\n$$\\theta = \\tan^{-1}\\left(\\frac{X}{R}\\right) = \\tan^{-1}\\left(\\frac{\\pm R}{R}\\right) = \\tan^{-1}(\\pm 1) = \\mathbf{\\pm 45^\\circ}$$\n- At $\\omega_1$: $\\theta = -45^\\circ$ (capacitive, current leads by $45^\\circ$).\n- At $\\omega_2$: $\\theta = +45^\\circ$ (inductive, current lags by $45^\\circ$).",
      "detailedLearning": "### Power Factor at Half-Power\n$$\\text{Power Factor} = \\cos(\\pm 45^\\circ) = \\frac{1}{\\sqrt{2}} \\approx 0.7071$$"
    }
  },
  {
    "id": "cas-u3-q18",
    "unitId": 3,
    "unitName": "Unit III \u2013 Analysis of Coupled Circuits and Resonance",
    "topicName": "Resonance comparison and applications",
    "title": "Identical Coils with Unity Coupling: Series Aiding & Opposing",
    "questionText": "If two identical coils of self-inductance L each have a coefficient of coupling k = 1, find their equivalent inductance in series aiding and series opposing.",
    "marks": 2,
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
      "quickRevision": "### Identical Coils with k = 1\n- $L_1 = L_2 = L, k = 1 \\implies M = 1 \\times \\sqrt{L \\cdot L} = L$.\n- **Series Aiding**:\n$$L_{aid} = L + L + 2L = 4L$$\n- **Series Opposing**:\n$$L_{opp} = L + L - 2L = 0$$\n(Zero net inductance: non-inductive wirewound resistor).",
      "examAnswer": "### 1. Calculation of Mutual Inductance\nGiven $L_1 = L_2 = L$ and $k = 1$:\n$$M = k \\sqrt{L_1 L_2} = 1 \\cdot \\sqrt{L^2} = L$$\n\n### 2. Series Combinations\n1. **Series Aiding**:\n$$L_{aid} = L_1 + L_2 + 2M = L + L + 2L = \\mathbf{4L}$$\nTotal inductance quadruples.\n2. **Series Opposing**:\n$$L_{opp} = L_1 + L_2 - 2M = L + L - 2L = \\mathbf{0}$$\nTotal inductance drops to zero.",
      "detailedLearning": "### Practical Application: Non-Inductive Resistors\nWirewound precision laboratory resistors use bifilar winding (doubling the wire back on itself so current flows in opposing parallel loops with $k \\approx 1$), producing zero net inductance ($L_{opp} \\approx 0$)."
    }
  }
];
