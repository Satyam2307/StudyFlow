import { CASQuestion } from "@/types/cas";

export const CAS_UNIT_4_QUESTIONS: CASQuestion[] = [
  {
    "id": "cas-u4-q1",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Z-parameters",
    "title": "Z-Parameters & Y-Parameters: Definitions, Equations & Circuits",
    "questionText": "Define open-circuit impedance parameters (Z-parameters) and short-circuit admittance parameters (Y-parameters) with their governing equations and equivalent circuits.",
    "marks": 7,
    "priority": "high",
    "type": "conceptual",
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
      "quickRevision": "### Z and Y Parameters\n- **Z-Parameters (Open-Circuit)**:\n$$\\begin{bmatrix} V_1 \\\\ V_2 \\end{bmatrix} = \\begin{bmatrix} Z_{11} & Z_{12} \\\\ Z_{21} & Z_{22} \\end{bmatrix} \\begin{bmatrix} I_1 \\\\ I_2 \\end{bmatrix}$$\n  - $Z_{11} = V_1/I_1 |_{I_2=0}$ (Input impedance, port 2 open).\n  - $Z_{12} = V_1/I_2 |_{I_1=0}$ (Reverse transfer impedance, port 1 open).\n  - $Z_{21} = V_2/I_1 |_{I_2=0}$ (Forward transfer impedance, port 2 open).\n  - $Z_{22} = V_2/I_2 |_{I_1=0}$ (Output impedance, port 1 open).\n- **Y-Parameters (Short-Circuit)**:\n$$\\begin{bmatrix} I_1 \\\\ I_2 \\end{bmatrix} = \\begin{bmatrix} Y_{11} & Y_{12} \\\\ Y_{21} & Y_{22} \\end{bmatrix} \\begin{bmatrix} V_1 \\\\ V_2 \\end{bmatrix}$$\n  - Measured by short-circuiting ports ($V_1=0$ or $V_2=0$).\n- **Matrix Inversion**: $[Y] = [Z]^{-1}$.",
      "examAnswer": "### 1. Open-Circuit Impedance Parameters (Z-Parameters)\nFor a linear two-port network, the port voltages $V_1, V_2$ are expressed as linear functions of the independent port currents $I_1, I_2$:\n$$V_1 = Z_{11} I_1 + Z_{12} I_2$$\n$$V_2 = Z_{21} I_1 + Z_{22} I_2$$\nIn matrix notation:\n$$\\begin{bmatrix} V_1 \\\\ V_2 \\end{bmatrix} = \\begin{bmatrix} Z_{11} & Z_{12} \\\\ Z_{21} & Z_{22} \\end{bmatrix} \\begin{bmatrix} I_1 \\\\ I_2 \\end{bmatrix}$$\n\nIndividual definitions:\n1. **$Z_{11} = \\frac{V_1}{I_1} \\Big|_{I_2 = 0}$**: Driving-point input impedance with port 2 open-circuited ($\\Omega$).\n2. **$Z_{12} = \\frac{V_1}{I_2} \\Big|_{I_1 = 0}$**: Reverse transfer impedance with port 1 open-circuited ($\\Omega$).\n3. **$Z_{21} = \\frac{V_2}{I_1} \\Big|_{I_2 = 0}$**: Forward transfer impedance with port 2 open-circuited ($\\Omega$).\n4. **$Z_{22} = \\frac{V_2}{I_2} \\Big|_{I_1 = 0}$**: Driving-point output impedance with port 1 open-circuited ($\\Omega$).\n\n---\n\n### 2. Short-Circuit Admittance Parameters (Y-Parameters)\nPort currents $I_1, I_2$ are expressed as linear functions of the port voltages $V_1, V_2$:\n$$I_1 = Y_{11} V_1 + Y_{12} V_2$$\n$$I_2 = Y_{21} V_1 + Y_{22} V_2$$\nIn matrix notation:\n$$\\begin{bmatrix} I_1 \\\\ I_2 \\end{bmatrix} = \\begin{bmatrix} Y_{11} & Y_{12} \\\\ Y_{21} & Y_{22} \\end{bmatrix} \\begin{bmatrix} V_1 \\\\ V_2 \\end{bmatrix}$$\n\nIndividual definitions:\n1. **$Y_{11} = \\frac{I_1}{V_1} \\Big|_{V_2 = 0}$**: Driving-point input admittance with port 2 short-circuited ($\\text{Siemens}$).\n2. **$Y_{12} = \\frac{I_1}{V_2} \\Big|_{V_1 = 0}$**: Reverse transfer admittance with port 1 short-circuited ($\\text{Siemens}$).\n3. **$Y_{21} = \\frac{I_2}{V_1} \\Big|_{V_2 = 0}$**: Forward transfer admittance with port 2 short-circuited ($\\text{Siemens}$).\n4. **$Y_{22} = \\frac{I_2}{V_2} \\Big|_{V_1 = 0}$**: Driving-point output admittance with port 1 short-circuited ($\\text{Siemens}$).\n\n---\n\n### 3. Equivalent Circuit Models\n\n```\n Z-Parameter Equivalent Circuit:\n     (+)------+---[ Z_11 - Z_12 ]---+---[ Z_22 - Z_12 ]---+------(+)\n     V_1      |                     |                     |      V_2\n              |                   [Z_12]                  |\n              |                     |                     |\n     (-)------+---------------------+---------------------+------(-)\n     (Assuming reciprocal network Z_12 = Z_21)\n\n Y-Parameter Equivalent Circuit:\n     (+)------+-----------+-------------------+-----------+------(+)\n     V_1      |           |                   |           |      V_2\n            [Y_11]      ( ^ )               ( ^ )       [Y_22]\n            [+Y_12]    (Y_12*V_2)          (Y_21*V_1)   [+Y_12]\n              |           |                   |           |\n     (-)------+-----------+-------------------+-----------+------(-)\n```",
      "detailedLearning": "### When Do Z or Y Parameters Fail to Exist?\n- An ideal transformer with turns ratio $n:1$ has $v_1 = n v_2$ and $i_1 = -i_2/n$. Neither voltages nor currents can be independently specified, so **neither Z nor Y parameters exist** for an ideal transformer! Transmission (ABCD) parameters must be used instead."
    }
  },
  {
    "id": "cas-u4-q2",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Hybrid parameters",
    "title": "Hybrid (h) & Transmission (ABCD) Parameters: Equations & Significance",
    "questionText": "Define hybrid parameters (h-parameters) and transmission parameters (ABCD parameters). Explain why h-parameters are ideal for BJT modeling and ABCD parameters for cascaded networks.",
    "marks": 7,
    "priority": "very_high",
    "type": "conceptual",
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Repeated in Dec 2023 & Dec 2022 (Core Exam Focus)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### h and ABCD Parameters Summary\n- **Hybrid (h) Parameters**:\n$$\\begin{bmatrix} V_1 \\\\ I_2 \\end{bmatrix} = \\begin{bmatrix} h_{11} & h_{12} \\\\ h_{21} & h_{22} \\end{bmatrix} \\begin{bmatrix} I_1 \\\\ V_2 \\end{bmatrix}$$\n  - $h_{11}$ in $\\Omega$, $h_{22}$ in $\\text{S}$, $h_{12}$ and $h_{21}$ dimensionless (hybrid units!).\n  - BJT mapping: $h_{11}=h_{ie}, h_{12}=h_{re}, h_{21}=h_{fe}, h_{22}=h_{oe}$.\n- **Transmission (ABCD) Parameters**:\n$$\\begin{bmatrix} V_1 \\\\ I_1 \\end{bmatrix} = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} \\begin{bmatrix} V_2 \\\\ -I_2 \\end{bmatrix}$$\n  - Cascaded Networks: $[T_{total}] = [T_A] \\cdot [T_B]$.\n  - Reciprocity: $AD - BC = 1$. Symmetry: $A = D$.",
      "examAnswer": "### 1. Hybrid Parameters (h-Parameters)\nHybrid parameters relate $V_1$ and $I_2$ as dependent variables in terms of input current $I_1$ and output voltage $V_2$:\n$$V_1 = h_{11} I_1 + h_{12} V_2$$\n$$I_2 = h_{21} I_1 + h_{22} V_2$$\nIn matrix form:\n$$\\begin{bmatrix} V_1 \\\\ I_2 \\end{bmatrix} = \\begin{bmatrix} h_{11} & h_{12} \\\\ h_{21} & h_{22} \\end{bmatrix} \\begin{bmatrix} I_1 \\\\ V_2 \\end{bmatrix}$$\n\nDefinitions:\n- **$h_{11} = \\frac{V_1}{I_1} \\Big|_{V_2 = 0}$**: Short-circuit input impedance ($\\Omega$).\n- **$h_{12} = \\frac{V_1}{V_2} \\Big|_{I_1 = 0}$**: Open-circuit reverse voltage gain (dimensionless).\n- **$h_{21} = \\frac{I_2}{I_1} \\Big|_{V_2 = 0}$**: Short-circuit forward current gain (dimensionless).\n- **$h_{22} = \\frac{I_2}{V_2} \\Big|_{I_1 = 0}$**: Open-circuit output admittance ($\\text{Siemens}$).\n\n#### Why h-parameters are ideal for BJT modeling:\nIn BJTs, the input (base-emitter) is a forward-biased p-n junction with low impedance (easy to short-circuit by an AC capacitor for test, $V_2 = 0$), while the output (collector-base) is reverse-biased with high impedance (easy to open-circuit by an RF choke, $I_1 = 0$).\n\n---\n\n### 2. Transmission Parameters (ABCD / Chain Parameters)\nTransmission parameters express sending-end (port 1) variables in terms of receiving-end (port 2) variables, adopting the convention that receiving current leaves the port ($-I_2$):\n$$V_1 = A V_2 - B I_2 = A V_2 + B (-I_2)$$\n$$I_1 = C V_2 - D I_2 = C V_2 + D (-I_2)$$\n$$\\begin{bmatrix} V_1 \\\\ I_1 \\end{bmatrix} = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} \\begin{bmatrix} V_2 \\\\ -I_2 \\end{bmatrix}$$\n\nDefinitions:\n- **$A = \\frac{V_1}{V_2} \\Big|_{I_2 = 0}$**: Reverse open-circuit voltage ratio (dimensionless).\n- **$B = \\frac{V_1}{-I_2} \\Big|_{V_2 = 0}$**: Reverse short-circuit transfer impedance ($\\Omega$).\n- **$C = \\frac{I_1}{V_2} \\Big|_{I_2 = 0}$**: Reverse open-circuit transfer admittance ($\\text{Siemens}$).\n- **$D = \\frac{I_1}{-I_2} \\Big|_{V_2 = 0}$**: Reverse short-circuit current ratio (dimensionless).\n\n#### Why ABCD parameters are ideal for cascaded networks:\nWhen two two-port networks $N_A$ and $N_B$ are connected in cascade (output of $N_A$ feeds input of $N_B$):\n$$\\begin{bmatrix} V_1 \\\\ I_1 \\end{bmatrix} = [T_A] \\begin{bmatrix} V_2 \\\\ -I_2 \\end{bmatrix} = [T_A] \\begin{bmatrix} V_3 \\\\ I_3 \\end{bmatrix} = [T_A] [T_B] \\begin{bmatrix} V_4 \\\\ -I_4 \\end{bmatrix}$$\n$$\\mathbf{[T_{overall}] = [T_A] \\cdot [T_B]}$$\nThe overall transmission matrix is simply the **direct matrix product** of individual ABCD matrices.",
      "detailedLearning": "### Sign Convention Caution on ABCD\nBe alert: In classical network theory, ABCD parameters are written with $-I_2$ (current flowing OUT of port 2 toward load). If a textbook defines $I_2$ entering port 2, signs of $B$ and $D$ invert."
    }
  },
  {
    "id": "cas-u4-q3",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Relationships between different parameter sets",
    "title": "Inter-Relationships Between Z, Y, and h Parameters",
    "questionText": "Derive the inter-relationship formulas expressing: (a) Z-parameters in terms of Y-parameters, and (b) h-parameters in terms of Z-parameters.",
    "marks": 7,
    "priority": "high",
    "type": "derivation",
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
      "quickRevision": "### Parameter Conversions\n- **Z in terms of Y**:\n$$Z_{11} = \\frac{Y_{22}}{\\Delta Y}, \\quad Z_{12} = -\\frac{Y_{12}}{\\Delta Y}, \\quad Z_{21} = -\\frac{Y_{21}}{\\Delta Y}, \\quad Z_{22} = \\frac{Y_{11}}{\\Delta Y}$$\nwhere $\\Delta Y = Y_{11} Y_{22} - Y_{12} Y_{21}$.\n- **h in terms of Z**:\n$$h_{11} = \\frac{\\Delta Z}{Z_{22}}, \\quad h_{12} = \\frac{Z_{12}}{Z_{22}}, \\quad h_{21} = -\\frac{Z_{21}}{Z_{22}}, \\quad h_{22} = \\frac{1}{Z_{22}}$$\nwhere $\\Delta Z = Z_{11} Z_{22} - Z_{12} Z_{21}$.",
      "examAnswer": "### 1. Z-Parameters in Terms of Y-Parameters\nStarting from Y-parameter equations:\n$$I_1 = Y_{11} V_1 + Y_{12} V_2 \\quad \\text{--- (1)}$$\n$$I_2 = Y_{21} V_1 + Y_{22} V_2 \\quad \\text{--- (2)}$$\n\nUsing Cramer's Rule to solve for $V_1$ and $V_2$ in terms of $I_1$ and $I_2$:\n$$\\Delta Y = \\det \\begin{bmatrix} Y_{11} & Y_{12} \\\\ Y_{21} & Y_{22} \\end{bmatrix} = Y_{11} Y_{22} - Y_{12} Y_{21}$$\n\nSolving for $V_1$:\n$$V_1 = \\frac{\\det \\begin{bmatrix} I_1 & Y_{12} \\\\ I_2 & Y_{22} \\end{bmatrix}}{\\Delta Y} = \\left( \\frac{Y_{22}}{\\Delta Y} \\right) I_1 + \\left( \\frac{-Y_{12}}{\\Delta Y} \\right) I_2$$\nComparing with $V_1 = Z_{11} I_1 + Z_{12} I_2$:\n$$\\mathbf{Z_{11} = \\frac{Y_{22}}{\\Delta Y}}, \\quad \\mathbf{Z_{12} = -\\frac{Y_{12}}{\\Delta Y}}$$\n\nSolving for $V_2$:\n$$V_2 = \\frac{\\det \\begin{bmatrix} Y_{11} & I_1 \\\\ Y_{21} & I_2 \\end{bmatrix}}{\\Delta Y} = \\left( \\frac{-Y_{21}}{\\Delta Y} \\right) I_1 + \\left( \\frac{Y_{11}}{\\Delta Y} \\right) I_2$$\nComparing with $V_2 = Z_{21} I_1 + Z_{22} I_2$:\n$$\\mathbf{Z_{21} = -\\frac{Y_{21}}{\\Delta Y}}, \\quad \\mathbf{Z_{22} = \\frac{Y_{11}}{\\Delta Y}}$$\n\n---\n\n### 2. h-Parameters in Terms of Z-Parameters\nStarting from Z-parameter equations:\n$$V_1 = Z_{11} I_1 + Z_{12} I_2 \\quad \\text{--- (3)}$$\n$$V_2 = Z_{21} I_1 + Z_{22} I_2 \\quad \\text{--- (4)}$$\n\nHybrid parameters express $(V_1, I_2)$ in terms of $(I_1, V_2)$.\nFrom Equation 4, solve for $I_2$:\n$$Z_{22} I_2 = V_2 - Z_{21} I_1 \\implies I_2 = \\left( -\\frac{Z_{21}}{Z_{22}} \\right) I_1 + \\left( \\frac{1}{Z_{22}} \\right) V_2$$\nComparing with $I_2 = h_{21} I_1 + h_{22} V_2$:\n$$\\mathbf{h_{21} = -\\frac{Z_{21}}{Z_{22}}}, \\quad \\mathbf{h_{22} = \\frac{1}{Z_{22}}}$$\n\nNow substitute this expression for $I_2$ into Equation 3:\n$$V_1 = Z_{11} I_1 + Z_{12} \\left( -\\frac{Z_{21}}{Z_{22}} I_1 + \\frac{1}{Z_{22}} V_2 \\right)$$\n$$V_1 = \\left( Z_{11} - \\frac{Z_{12} Z_{21}}{Z_{22}} \\right) I_1 + \\left( \\frac{Z_{12}}{Z_{22}} \\right) V_2$$\n$$V_1 = \\left( \\frac{Z_{11} Z_{22} - Z_{12} Z_{21}}{Z_{22}} \\right) I_1 + \\left( \\frac{Z_{12}}{Z_{22}} \\right) V_2 = \\left( \\frac{\\Delta Z}{Z_{22}} \\right) I_1 + \\left( \\frac{Z_{12}}{Z_{22}} \\right) V_2$$\nComparing with $V_1 = h_{11} I_1 + h_{12} V_2$:\n$$\\mathbf{h_{11} = \\frac{\\Delta Z}{Z_{22}}}, \\quad \\mathbf{h_{12} = \\frac{Z_{12}}{Z_{22}}}$$",
      "detailedLearning": "### Quick Determinant Check\nNote that $\\Delta h = h_{11} h_{22} - h_{12} h_{21} = \\frac{\\Delta Z}{Z_{22}} \\frac{1}{Z_{22}} - \\frac{Z_{12}}{Z_{22}} \\left(-\\frac{Z_{21}}{Z_{22}}\\right) = \\frac{Z_{11} Z_{22} - Z_{12} Z_{21} + Z_{12} Z_{21}}{Z_{22}^2} = \\frac{Z_{11}}{Z_{22}}$."
    }
  },
  {
    "id": "cas-u4-q4",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Reciprocity conditions",
    "title": "Reciprocity and Symmetry Conditions for All Parameter Sets",
    "questionText": "State and derive the conditions of reciprocity and symmetry for: (a) Z-parameters, (b) Y-parameters, (c) h-parameters, and (d) ABCD parameters.",
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
    "frequency": "Repeated across 2023, 2022, 2019 (Top Theoretical Question)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Reciprocity & Symmetry Table\n| Parameters | Condition for Reciprocity | Condition for Symmetry |\n|---|---|---|\n| **Z-parameters** | $Z_{12} = Z_{21}$ | $Z_{11} = Z_{22}$ |\n| **Y-parameters** | $Y_{12} = Y_{21}$ | $Y_{11} = Y_{22}$ |\n| **h-parameters** | $h_{12} = -h_{21}$ | $\\Delta h = h_{11} h_{22} - h_{12} h_{21} = 1$ |\n| **ABCD parameters**| $AD - BC = 1$ | $A = D$ |",
      "examAnswer": "### 1. Physical Meaning\n- **Reciprocity**: The transfer ratio remains invariant when excitation and response terminals are interchanged (network contains only passive linear bilateral components).\n- **Symmetry**: The network can be turned end-for-end without altering port terminal characteristics (input impedance equals output impedance).\n\n---\n\n### 2. Derivation of Conditions\n\n#### (a) Z-Parameters\n1. **Reciprocity**: By definition, transfer impedance $Z_{12} = \\frac{V_1}{I_2}\\Big|_{I_1=0}$ must equal $Z_{21} = \\frac{V_2}{I_1}\\Big|_{I_2=0}$:\n$$\\mathbf{Z_{12} = Z_{21}}$$\n2. **Symmetry**: Looking into port 1 with port 2 open gives $Z_{11}$; looking into port 2 with port 1 open gives $Z_{22}$:\n$$\\mathbf{Z_{11} = Z_{22}}$$\n\n---\n\n#### (b) Y-Parameters\n1. **Reciprocity**: Since $[Y] = [Z]^{-1}$:\n$$Y_{12} = -\\frac{Z_{12}}{\\Delta Z}, \\quad Y_{21} = -\\frac{Z_{21}}{\\Delta Z}$$\nSince $Z_{12} = Z_{21}$:\n$$\\mathbf{Y_{12} = Y_{21}}$$\n2. **Symmetry**: $Y_{11} = \\frac{Z_{22}}{\\Delta Z}$ and $Y_{22} = \\frac{Z_{11}}{\\Delta Z}$. Since $Z_{11} = Z_{22}$:\n$$\\mathbf{Y_{11} = Y_{22}}$$\n\n---\n\n#### (c) Hybrid (h) Parameters\n1. **Reciprocity**: We derived earlier $h_{12} = \\frac{Z_{12}}{Z_{22}}$ and $h_{21} = -\\frac{Z_{21}}{Z_{22}}$.\nSince for a reciprocal network $Z_{12} = Z_{21}$:\n$$h_{12} = \\frac{Z_{21}}{Z_{22}} = -\\left(-\\frac{Z_{21}}{Z_{22}}\\right) = -h_{21}$$\n$$\\mathbf{h_{12} = -h_{21}}$$\n2. **Symmetry**: For symmetry, $Z_{11} = Z_{22}$.\nEarlier we proved: $\\Delta h = \\frac{Z_{11}}{Z_{22}}$.\nTherefore, setting $Z_{11} = Z_{22}$:\n$$\\mathbf{\\Delta h = h_{11} h_{22} - h_{12} h_{21} = 1}$$\n\n---\n\n#### (d) Transmission (ABCD) Parameters\nExpress ABCD in terms of Z:\n$$A = \\frac{Z_{11}}{Z_{21}}, \\quad B = \\frac{\\Delta Z}{Z_{21}}, \\quad C = \\frac{1}{Z_{21}}, \\quad D = \\frac{Z_{22}}{Z_{21}}$$\n1. **Reciprocity**:\n$$AD - BC = \\left(\\frac{Z_{11}}{Z_{21}}\\right)\\left(\\frac{Z_{22}}{Z_{21}}\\right) - \\left(\\frac{\\Delta Z}{Z_{21}}\\right)\\left(\\frac{1}{Z_{21}}\\right) = \\frac{Z_{11} Z_{22} - (Z_{11} Z_{22} - Z_{12} Z_{21})}{Z_{21}^2} = \\frac{Z_{12} Z_{21}}{Z_{21}^2} = \\frac{Z_{12}}{Z_{21}}$$\nSetting $Z_{12} = Z_{21}$:\n$$\\mathbf{AD - BC = 1}$$\n2. **Symmetry**:\n$A = \\frac{Z_{11}}{Z_{21}}$ and $D = \\frac{Z_{22}}{Z_{21}}$. Setting $Z_{11} = Z_{22}$:\n$$\\mathbf{A = D}$$",
      "detailedLearning": "### Quick Verification Trick\nIf an exam gives a passive T or Pi network of resistors, it is unconditionally reciprocal. Thus, immediately verify:\n- $h_{12} + h_{21} = 0$\n- $AD - BC = 1$\nIf your calculated numbers do not satisfy this, you made an arithmetic error!"
    }
  },
  {
    "id": "cas-u4-q5",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Input impedance",
    "title": "Input & Output Driving-Point Impedances via ABCD Parameters",
    "questionText": "Derive the expressions for input impedance Z_in and output impedance Z_out of a two-port network terminated with load impedance Z_L in terms of ABCD parameters.",
    "marks": 7,
    "priority": "high",
    "type": "derivation",
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
      "quickRevision": "### Driving-Point Formulas in ABCD\n- **Input Impedance with Load $Z_L$**:\n$$Z_{in} = \\frac{A Z_L + B}{C Z_L + D}$$\n  - Open-circuit load ($Z_L = \\infty$): $Z_{in, oc} = A/C$.\n  - Short-circuit load ($Z_L = 0$): $Z_{in, sc} = B/D$.\n- **Output Impedance with Source $(V_s, Z_s)$**:\n$$Z_{out} = \\frac{D Z_s + B}{C Z_s + A}$$",
      "examAnswer": "### 1. Derivation of Input Impedance ($Z_{in}$)\nConsider a two-port network governed by transmission equations:\n$$V_1 = A V_2 - B I_2 \\quad \\text{--- (Equation 1)}$$\n$$I_1 = C V_2 - D I_2 \\quad \\text{--- (Equation 2)}$$\n\nPort 2 is terminated in load impedance $Z_L$.\nApplying Ohm's law at the load terminal, noting that receiving current $-I_2$ flows into $Z_L$:\n$$V_2 = (-I_2) Z_L \\implies -I_2 = \\frac{V_2}{Z_L}$$\n\nSubstitute into Equations 1 and 2:\n$$V_1 = A V_2 + B \\left( \\frac{V_2}{Z_L} \\right) = V_2 \\left( A + \\frac{B}{Z_L} \\right) = V_2 \\left( \\frac{A Z_L + B}{Z_L} \\right)$$\n$$I_1 = C V_2 + D \\left( \\frac{V_2}{Z_L} \\right) = V_2 \\left( C + \\frac{D}{Z_L} \\right) = V_2 \\left( \\frac{C Z_L + D}{Z_L} \\right)$$\n\nDividing $V_1$ by $I_1$ to obtain input impedance:\n$$Z_{in} = \\frac{V_1}{I_1} = \\frac{V_2 \\left( \\frac{A Z_L + B}{Z_L} \\right)}{V_2 \\left( \\frac{C Z_L + D}{Z_L} \\right)}$$\n$$\\mathbf{Z_{in} = \\frac{A Z_L + B}{C Z_L + D}}$$\n\n---\n\n### 2. Special Terminations\n1. **Open-Circuit Load ($Z_L \\to \\infty$)**:\n$$Z_{in, oc} = \\lim_{Z_L \\to \\infty} \\frac{A + B/Z_L}{C + D/Z_L} = \\mathbf{\\frac{A}{C}}$$\n2. **Short-Circuit Load ($Z_L = 0$)**:\n$$Z_{in, sc} = \\frac{A(0) + B}{C(0) + D} = \\mathbf{\\frac{B}{D}}$$\n\nNotice:\n$$Z_0 = \\sqrt{Z_{in, oc} \\cdot Z_{in, sc}} = \\sqrt{\\frac{A B}{C D}} \\quad \\text{(Characteristic Impedance)}$$",
      "detailedLearning": "### Derivation of Output Impedance ($Z_{out}$)\nApplying test source $V_2$ at port 2 while deactivating $V_s$ (leaving series source impedance $Z_s$ across port 1: $V_1 = -I_1 Z_s$):\n$$-I_1 Z_s = A V_2 - B I_2 \\quad \\text{and} \\quad I_1 = C V_2 - D I_2$$\nSolving yields:\n$$Z_{out} = \\frac{D Z_s + B}{C Z_s + A}$$"
    }
  },
  {
    "id": "cas-u4-q6",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Equivalent T-section",
    "title": "T-Section & Pi-Section Equivalents: Formulas & Derivations",
    "questionText": "Explain the equivalent T-network and pi-network for a general linear bilateral two-port network. Derive the relations between T-network branch elements and Z-parameters, and pi-network elements and Y-parameters.",
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
      "quickRevision": "### T and Pi Equivalent Networks\n- **T-Network (from Z-parameters)**:\n  - Series arm 1: $Z_A = Z_{11} - Z_{12}$\n  - Series arm 2: $Z_B = Z_{22} - Z_{12}$\n  - Shunt arm: $Z_C = Z_{12} = Z_{21}$\n- **Pi-Network (from Y-parameters)**:\n  - Shunt arm 1: $Y_A = Y_{11} + Y_{12}$\n  - Shunt arm 2: $Y_B = Y_{22} + Y_{12}$\n  - Series arm: $Y_C = -Y_{12} = -Y_{21}$",
      "examAnswer": "### 1. Equivalent T-Network Derivation\nConsider a T-network composed of branches $Z_A, Z_B, Z_C$:\n\n```\n        (+)-------[ Z_A ]-------+-------[ Z_B ]-------(+)\n        V_1                     |                     V_2\n        I_1 ->                [Z_C]                  <- I_2\n                                |\n        (-)---------------------+---------------------(-)\n```\n\nApplying KVL to mesh 1:\n$$V_1 = I_1 Z_A + (I_1 + I_2) Z_C = (Z_A + Z_C) I_1 + Z_C I_2$$\nApplying KVL to mesh 2:\n$$V_2 = I_2 Z_B + (I_1 + I_2) Z_C = Z_C I_1 + (Z_B + Z_C) I_2$$\n\nComparing with the standard Z-parameter equations ($V_1 = Z_{11} I_1 + Z_{12} I_2, V_2 = Z_{21} I_1 + Z_{22} I_2$):\n$$Z_{11} = Z_A + Z_C$$\n$$Z_{12} = Z_{21} = Z_C$$\n$$Z_{22} = Z_B + Z_C$$\n\nSolving for branch impedances:\n$$\\mathbf{Z_C = Z_{12} = Z_{21}}$$\n$$\\mathbf{Z_A = Z_{11} - Z_{12}}$$\n$$\\mathbf{Z_B = Z_{22} - Z_{12}}$$\n\n---\n\n### 2. Equivalent $\\Pi$-Network Derivation\nConsider a $\\Pi$-network composed of shunt admittances $Y_A, Y_B$ and bridging series admittance $Y_C$:\n\n```\n        (+)---------+---------[ Y_C ]---------+---------(+)\n        V_1         |                         |         V_2\n        I_1 ->    [Y_A]                     [Y_B]      <- I_2\n                    |                         |\n        (-)---------+-------------------------+---------(-)\n```\n\nApplying KCL at port 1:\n$$I_1 = V_1 Y_A + (V_1 - V_2) Y_C = (Y_A + Y_C) V_1 - Y_C V_2$$\nApplying KCL at port 2:\n$$I_2 = V_2 Y_B + (V_2 - V_1) Y_C = -Y_C V_1 + (Y_B + Y_C) V_2$$\n\nComparing with standard Y-parameter equations ($I_1 = Y_{11} V_1 + Y_{12} V_2, I_2 = Y_{21} V_1 + Y_{22} V_2$):\n$$Y_{11} = Y_A + Y_C$$\n$$Y_{12} = Y_{21} = -Y_C$$\n$$Y_{22} = Y_B + Y_C$$\n\nSolving for branch admittances:\n$$\\mathbf{Y_C = -Y_{12} = -Y_{21}}$$\n$$\\mathbf{Y_A = Y_{11} - Y_C = Y_{11} + Y_{12}}$$\n$$\\mathbf{Y_B = Y_{22} - Y_C = Y_{22} + Y_{12}}$$",
      "detailedLearning": "### Star-Delta Equivalence\nThe T-to-$\\Pi$ conversion for two-ports is identical to Star-Delta transformation:\n$$Z_A = \\frac{Z_1 Z_2}{Z_1 + Z_2 + Z_3}$$"
    }
  },
  {
    "id": "cas-u4-q7",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Interpretation of poles and zeros",
    "title": "Network Functions: Poles, Zeros & Physical Interpretation",
    "questionText": "Define driving-point functions and transfer functions. Explain the physical significance of poles and zeros in the complex s-plane.",
    "marks": 7,
    "priority": "high",
    "type": "conceptual",
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
      "quickRevision": "### Poles and Zeros Basics\n- **Network Function**: $N(s) = \\frac{\\text{Transform of Response}}{\\text{Transform of Excitation}} = \\frac{P(s)}{Q(s)}$.\n- **Zeros**: Roots of numerator $P(s) = 0$. Frequencies where response is ZERO (transmission nulls).\n- **Poles**: Roots of denominator $Q(s) = 0$. Frequencies where response approaches INFINITY (natural frequencies of free oscillation).\n- **Driving-Point Function**: Excitation and response measured at the **same port** ($Z_{in}(s) = V_1(s)/I_1(s)$).\n- **Transfer Function**: Excitation and response measured at **different ports** ($G_{21}(s) = V_2(s)/V_1(s)$).",
      "examAnswer": "### 1. Classification of Network Functions\nA network function $H(s)$ in the Laplace domain is defined under zero initial conditions as:\n$$H(s) = \\frac{\\text{Output Response } Y(s)}{\\text{Input Excitation } X(s)} = \\frac{a_m s^m + a_{m-1} s^{m-1} + \\dots + a_0}{b_n s^n + b_{n-1} s^{n-1} + \\dots + b_0}$$\n\n1. **Driving-Point Functions (One-Port)**:\n   - Driving-point impedance: $Z(s) = \\frac{V(s)}{I(s)}$\n   - Driving-point admittance: $Y(s) = \\frac{I(s)}{V(s)}$\n2. **Transfer Functions (Two-Port)**:\n   - Voltage transfer ratio: $G_{21}(s) = \\frac{V_2(s)}{V_1(s)}$\n   - Current transfer ratio: $\\alpha_{21}(s) = \\frac{I_2(s)}{I_1(s)}$\n   - Transfer impedance: $Z_{21}(s) = \\frac{V_2(s)}{I_1(s)}$\n   - Transfer admittance: $Y_{21}(s) = \\frac{I_2(s)}{V_1(s)}$\n\n---\n\n### 2. Definitions of Poles and Zeros\nFactorizing numerator $P(s)$ and denominator $Q(s)$:\n$$H(s) = K \\frac{(s - z_1)(s - z_2) \\dots (s - z_m)}{(s - p_1)(s - p_2) \\dots (s - p_n)}$$\n\n- **Zeros ($z_k$)**: The values of complex frequency $s$ for which $H(s) = 0$. They represent frequencies of **infinite attenuation** or zero transmission.\n- **Poles ($p_k$)**: The values of complex frequency $s$ for which $H(s) \\to \\infty$. They represent the **natural frequencies (eigenvalues)** of the circuit when left unforced.\n\n---\n\n### 3. Physical Significance in Transient and Frequency Response\n1. **Natural Modes**: A pole at $p_k = \\sigma_k + j\\omega_k$ produces a natural transient response component:\n$$f(t) = A e^{p_k t} = A e^{\\sigma_k t} e^{j\\omega_k t} = A e^{\\sigma_k t} (\\cos\\omega_k t + j\\sin\\omega_k t)$$\n   - $\\sigma_k < 0$ (Left half plane): Decaying stable transient.\n   - $\\sigma_k = 0$ ($j\\omega$-axis): Sustained, undamped sinusoidal oscillation.\n   - $\\sigma_k > 0$ (Right half plane): Exponentially exploding, unstable response.\n2. **Stability Criterion**: For passive networks, all poles MUST lie strictly in the open Left Half of the $s$-plane (LHP), or be simple poles on the $j\\omega$-axis.",
      "detailedLearning": "### Scale Factor K\nThe scale factor $K$ determines the gain of the network function. Together with the complete list of pole and zero locations, $K$ uniquely specifies the network function completely."
    }
  },
  {
    "id": "cas-u4-q8",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Pole-zero location in the complex plane",
    "title": "Restrictions on Pole-Zero Locations for Driving-Point Functions",
    "questionText": "State the necessary restrictions on the locations of poles and zeros for driving-point impedance functions of passive linear networks.",
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
      "quickRevision": "### Driving-Point Function Restrictions\n1. All coefficients of numerator and denominator must be **real and positive**.\n2. Poles and zeros must lie in the **Left Half Plane (LHP)** or on the **$j\\omega$-axis**.\n3. Poles/zeros on the $j\\omega$-axis must be **simple (multiplicity = 1)** with **real positive residues**.\n4. The degrees of numerator and denominator can differ by **at most 1** ($|m - n| \\le 1$).\n5. No missing terms in numerator or denominator polynomials between highest and lowest degree, unless all even or all odd terms are absent.",
      "examAnswer": "### 1. Necessary Conditions for Passive Driving-Point Functions\nFor any physical passive one-port network, the driving-point function $Z(s) = \\frac{P(s)}{Q(s)}$ must be a **Positive Real (PR)** function. This imposes strict geometric restrictions on the $s$-plane:\n\n1. **Real and Positive Coefficients**:\n   All coefficients of $P(s)$ and $Q(s)$ must be real and positive ($a_i > 0, b_i > 0$).\n2. **No Right-Half Plane (RHP) Poles or Zeros**:\n   Neither poles nor zeros can lie in the open right half of the $s$-plane ($\\text{Re}\\{s\\} > 0$).\n   - Reason: RHP poles mean the circuit would produce exponentially growing energy without external input, violating passive conservation of energy.\n   - For driving-point functions, $Y(s) = 1/Z(s)$ is also a driving-point function, which implies zeros of $Z(s)$ are poles of $Y(s)$, meaning **zeros also cannot be in the RHP**.\n3. **Poles and Zeros on the $j\\omega$-Axis Must Be Simple**:\n   If poles or zeros lie on the imaginary axis ($s = \\pm j\\omega_0$), they must have multiplicity 1 (cannot be repeated).\n4. **Positive Real Residues on $j\\omega$-Axis**:\n   The residue of $Z(s)$ at any $j\\omega$-axis pole must be real and strictly positive.\n5. **Degree Difference Limitation**:\n   The degree of numerator $P(s)$ and denominator $Q(s)$ can differ by at most one:\n   $$|\\text{deg}(P) - \\text{deg}(Q)| \\le 1$$\n   - At $s \\to \\infty$, $Z(s) \\to s$ (pure inductor), $Z(s) \\to 1/s$ (pure capacitor), or $Z(s) \\to \\text{constant}$ (resistor). A degree difference $\\ge 2$ would require active elements.\n6. **No Gaps in Powers**:\n   There can be no missing intermediate powers of $s$ in either polynomial, unless all even or all odd terms are missing simultaneously (as in purely reactive LC networks).",
      "detailedLearning": "### Hurwitz Requirement\nBoth the numerator $P(s)$ and denominator $Q(s)$ of a driving-point impedance function must be **Hurwitz polynomials**."
    }
  },
  {
    "id": "cas-u4-q9",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Hurwitz polynomial",
    "title": "Hurwitz Polynomials: Definition, Conditions & Continued Fraction Test",
    "questionText": "Define a Hurwitz polynomial. State its necessary conditions and explain the continued fraction test for Hurwitz stability testing.",
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
    "frequency": "Repeated across 2023, 2022, 2019 (Top Synthesis Question)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Hurwitz Polynomial Essentials\n- **Definition**: A polynomial $P(s)$ whose roots all lie strictly in the open Left Half of the $s$-plane ($\\text{Re}\\{s\\} < 0$), with possible simple roots on the $j\\omega$-axis.\n- **Necessary (Inspection) Conditions**:\n  1. All coefficients are real and positive ($a_i > 0$).\n  2. No missing terms between highest and lowest degree (unless purely even/odd).\n- **Continued Fraction Test**:\n  1. Separate $P(s) = m(s) + n(s)$ where $m(s)$ is even part and $n(s)$ is odd part.\n  2. Form ratio $\\psi(s) = \\frac{m(s)}{n(s)}$ (or $\\frac{n(s)}{m(s)}$ depending on higher degree).\n  3. Perform continuous fraction expansion (divide-and-invert).\n  4. If **all quotient terms $q_i$ are positive real numbers**, $P(s)$ is strictly **Hurwitz**!",
      "examAnswer": "### 1. Definition of a Hurwitz Polynomial\nA real polynomial $P(s) = a_n s^n + a_{n-1} s^{n-1} + \\dots + a_1 s + a_0$ is defined as a **Hurwitz polynomial** if all of its roots have real parts that are either negative or zero:\n$$\\text{Re}\\{s_k\\} \\le 0 \\quad \\text{for all } k = 1, 2, \\dots, n$$\nIf all roots lie strictly in the open left half plane ($\\text{Re}\\{s_k\\} < 0$), it is called **strictly Hurwitz**.\n\n---\n\n### 2. Necessary Inspection Conditions\nBefore performing mathematical tests, $P(s)$ must satisfy:\n1. All coefficients $a_n, a_{n-1}, \\dots, a_0$ must be real, non-zero, and of the **same sign** (conventionally chosen positive, $a_i > 0$).\n2. No intermediate powers of $s$ can be missing between the highest power $s^n$ and constant $a_0$, unless the polynomial is purely even or purely odd.\n\n---\n\n### 3. The Continued Fraction Test (Routh-Hurwitz Fraction Algorithm)\nGiven $P(s)$, decompose it into its even and odd parts:\n$$P(s) = m(s) + n(s)$$\nwhere:\n$$m(s) = a_n s^n + a_{n-2} s^{n-2} + \\dots \\quad \\text{(even powers)}$$\n$$n(s) = a_{n-1} s^{n-1} + a_{n-3} s^{n-3} + \\dots \\quad \\text{(odd powers)}$$\n\n#### Step 1: Form Rational Function\nForm the test ratio $\\psi(s)$ by placing the polynomial of higher degree in the numerator:\n$$\\psi(s) = \\begin{cases} \\frac{m(s)}{n(s)}, & \\text{if } n \\text{ is even} \\\\ \\frac{n(s)}{m(s)}, & \\text{if } n \\text{ is odd} \\end{cases}$$\n\n#### Step 2: Continued Fraction Expansion\nPerform successive synthetic division by dividing denominator into numerator, inverting remainder, and repeating:\n$$\\psi(s) = q_1 s + \\cfrac{1}{q_2 s + \\cfrac{1}{q_3 s + \\cfrac{1}{\\dots + \\cfrac{1}{q_n s}}}}$$\n\n#### Step 3: Evaluation Criteria\n1. $P(s)$ is **strictly Hurwitz** if and only if the expansion yields exactly $n$ quotients and **all quotient coefficients $q_1, q_2, \\dots, q_n$ are strictly positive real numbers ($q_i > 0$)**.\n2. If any quotient $q_i$ is negative or zero, or if the process terminates prematurely, $P(s)$ is **NOT Hurwitz**.",
      "detailedLearning": "### Premature Termination Case\nIf the expansion terminates before $n$ quotients, $m(s)$ and $n(s)$ share a common polynomial factor $k(s) = \\gcd(m, n)$. The roots of $k(s)$ lie symmetrically on the $j\\omega$-axis or form quadruplets. The quotient polynomial $P_1(s) = P(s)/k(s)$ must then be tested separately."
    }
  },
  {
    "id": "cas-u4-q10",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Hurwitz stability testing",
    "title": "Numerical on Hurwitz Polynomial Testing via Continued Fractions",
    "questionText": "Test whether the polynomial P(s) = s^4 + s^3 + 5s^2 + 3s + 4 is a Hurwitz polynomial using continued fraction expansion.",
    "marks": 7,
    "priority": "very_high",
    "type": "numerical",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": true,
    "frequency": "Dec 2023 University Exam Numerical",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Quick Continued Fraction Steps\n- $P(s) = s^4 + s^3 + 5s^2 + 3s + 4$.\n- Even part: $m(s) = s^4 + 5s^2 + 4$.\n- Odd part: $n(s) = s^3 + 3s$.\n- $\\psi(s) = \\frac{s^4 + 5s^2 + 4}{s^3 + 3s}$.\n- Divide $s^4 + 5s^2 + 4$ by $s^3 + 3s$: Quotient $q_1 s = s$, Remainder $2s^2 + 4$.\n- Divide $s^3 + 3s$ by $2s^2 + 4$: Quotient $q_2 s = 0.5s$, Remainder $s$.\n- Divide $2s^2 + 4$ by $s$: Quotient $q_3 s = 2s$, Remainder $4$.\n- Divide $s$ by $4$: Quotient $q_4 s = 0.25s$, Remainder $0$.\n- Quotients: $q_1 = 1, q_2 = 0.5, q_3 = 2, q_4 = 0.25$.\n- All positive $\\implies \\mathbf{P(s) \\text{ is strictly Hurwitz}}$!",
      "examAnswer": "### 1. Given Polynomial\n$$P(s) = s^4 + s^3 + 5s^2 + 3s + 4$$\n- Degree: $n = 4$.\n- Inspection: All coefficients are positive ($1, 1, 5, 3, 4 > 0$) and no intermediate terms are missing. Preliminary conditions are satisfied.\n\n---\n\n### 2. Separation into Even and Odd Parts\n- Even polynomial: $m(s) = s^4 + 5s^2 + 4$\n- Odd polynomial: $n(s) = s^3 + 3s$\n\nSince degree of $m(s)$ is 4 and degree of $n(s)$ is 3, form the ratio:\n$$\\psi(s) = \\frac{m(s)}{n(s)} = \\frac{s^4 + 5s^2 + 4}{s^3 + 3s}$$\n\n---\n\n### 3. Step-by-Step Continued Fraction Expansion\n\n#### Step 1: Divide $s^4 + 5s^2 + 4$ by $s^3 + 3s$\n$$(s^4 + 5s^2 + 4) = s(s^3 + 3s) + (2s^2 + 4)$$\n- **First Quotient**: $q_1 s = \\mathbf{1s}$ ($q_1 = 1 > 0$)\n- Remainder: $2s^2 + 4$\n\n#### Step 2: Invert and Divide $s^3 + 3s$ by $2s^2 + 4$\n$$(s^3 + 3s) = 0.5s(2s^2 + 4) + s$$\n$$(s^3 + 3s) = (s^3 + 2s) + s$$\n- **Second Quotient**: $q_2 s = \\mathbf{0.5s}$ ($q_2 = 0.5 > 0$)\n- Remainder: $s$\n\n#### Step 3: Invert and Divide $2s^2 + 4$ by $s$\n$$(2s^2 + 4) = 2s(s) + 4$$\n- **Third Quotient**: $q_3 s = \\mathbf{2s}$ ($q_3 = 2 > 0$)\n- Remainder: $4$\n\n#### Step 4: Invert and Divide $s$ by $4$\n$$s = 0.25s(4) + 0$$\n- **Fourth Quotient**: $q_4 s = \\mathbf{0.25s}$ ($q_4 = 0.25 > 0$)\n- Remainder: $0$\n\n---\n\n### 4. Continued Fraction Expression\n$$\\psi(s) = s + \\cfrac{1}{0.5s + \\cfrac{1}{2s + \\cfrac{1}{0.25s}}}$$\n\nThe four quotient terms are:\n$$q_1 = 1 > 0$$\n$$q_2 = 0.5 > 0$$\n$$q_3 = 2 > 0$$\n$$q_4 = 0.25 > 0$$\n\n### 5. Conclusion\nSince the expansion yielded exactly $n = 4$ quotients and all coefficients $q_1, q_2, q_3, q_4$ are **strictly positive real numbers**, the given polynomial $\\mathbf{P(s) = s^4 + s^3 + 5s^2 + 3s + 4}$ **is a strictly Hurwitz polynomial**.",
      "detailedLearning": "### Roots of this Polynomial\nThe roots of $P(s)$ are approximately:\n$s_{1,2} = -0.287 \\pm j 1.416$\n$s_{3,4} = -0.213 \\pm j 1.397$\nAll real parts are negative ($-0.287, -0.213 < 0$), confirming stability.",
      "numericalSolution": {
        "given": [
          "P(s) = s^4 + s^3 + 5s^2 + 3s + 4"
        ],
        "toFind": "Test whether P(s) is Hurwitz",
        "formula": "psi(s) = m(s) / n(s); evaluate quotients q_i via continued fractions",
        "stepByStepSolution": [
          "Step 1: m(s) = s^4 + 5s^2 + 4, n(s) = s^3 + 3s",
          "Step 2: (s^4 + 5s^2 + 4) / (s^3 + 3s) => q_1 = 1, remainder = 2s^2 + 4",
          "Step 3: (s^3 + 3s) / (2s^2 + 4) => q_2 = 0.5, remainder = s",
          "Step 4: (2s^2 + 4) / s => q_3 = 2, remainder = 4",
          "Step 5: s / 4 => q_4 = 0.25, remainder = 0",
          "Step 6: Since all q_i > 0, P(s) is Hurwitz."
        ],
        "substitution": "q = [1, 0.5, 2, 0.25]",
        "calculation": "All 4 quotients are positive real numbers",
        "finalAnswer": "P(s) is a strictly Hurwitz polynomial",
        "units": "dimensionless",
        "explanation": "Continued fraction expansion terminates with 4 positive quotients."
      }
    }
  },
  {
    "id": "cas-u4-q11",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Positive real functions",
    "title": "Positive Real (PR) Functions: Definition & Necessary Conditions",
    "questionText": "Define a Positive Real (PR) function. State the necessary and sufficient conditions for a rational function F(s) to be positive real.",
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
      "quickRevision": "### PR Function Criteria\n- **Definition (Brune, 1931)**: $F(s)$ is Positive Real if:\n  1. $F(s)$ is real when $s$ is real ($F(\\sigma) \\in \\mathbb{R}$).\n  2. $\\text{Re}\\{F(s)\\} \\ge 0$ whenever $\\text{Re}\\{s\\} \\ge 0$ (maps RHP into RHP).\n- **Physical Meaning**: A rational function $F(s)$ can be synthesized as the driving-point impedance of a passive RLC network **if and only if** $F(s)$ is a Positive Real function.\n- **Testing Checklist**:\n  1. $F(s)$ has real positive coefficients.\n  2. Poles and zeros lie in LHP or simple on $j\\omega$-axis.\n  3. Real part condition on imaginary axis: $\\text{Re}\\{F(j\\omega)\\} \\ge 0$ for all $-\\infty < \\omega < \\infty$.",
      "examAnswer": "### 1. Definition of a Positive Real (PR) Function\nA complex function of a complex variable $F(s)$ is defined as **Positive Real (PR)** if it satisfies two fundamental properties:\n1. $F(s)$ is real for all real values of $s$:\n$$F(\\sigma) \\in \\mathbb{R} \\quad \\text{when } s = \\sigma$$\n2. The real part of $F(s)$ is non-negative whenever the real part of $s$ is non-negative:\n$$\\text{Re}\\{F(s)\\} \\ge 0 \\quad \\text{whenever } \\text{Re}\\{s\\} \\ge 0$$\n\nOtto Brune proved in 1931 that **Positive Reality is the necessary and sufficient condition** for an algebraic function to be realizable as the driving-point impedance or admittance of a passive network composed of linear $R, L, C$, and ideal transformers.\n\n---\n\n### 2. Necessary and Sufficient Conditions for Rational Functions\nFor a rational function $F(s) = \\frac{P(s)}{Q(s)}$:\n\n1. **Reality**: All coefficients of polynomials $P(s)$ and $Q(s)$ must be real and positive.\n2. **Hurwitz Property**: Both $P(s)$ and $Q(s)$ must be Hurwitz (no roots in the open right-half plane).\n3. **Poles on $j\\omega$-Axis**:\n   Any poles of $F(s)$ on the imaginary axis ($s = \\pm j\\omega_i$) must be **simple** (degree 1), and the residues at these poles must be **real and positive**:\n   $$k_i = \\lim_{s \\to j\\omega_i} (s - j\\omega_i) F(s) > 0$$\n4. **Degree Constraint**: The highest degrees and lowest degrees of $P(s)$ and $Q(s)$ cannot differ by more than 1:\n   $$|\\text{deg}(P) - \\text{deg}(Q)| \\le 1$$\n5. **Real Part Non-Negativity on $j\\omega$-Axis**:\n   $$\\text{Re}\\{F(j\\omega)\\} \\ge 0 \\quad \\text{for all } \\omega \\in [-\\infty, \\infty]$$\n   This is evaluated by setting $s = j\\omega$:\n   $$F(j\\omega) = \\frac{m_1(j\\omega) + n_1(j\\omega)}{m_2(j\\omega) + n_2(j\\omega)}$$\n   $$\\text{Re}\\{F(j\\omega)\\} = \\frac{m_1 m_2 - n_1 n_2}{m_2^2 - n_2^2} \\ge 0$$\n   Since the denominator is always non-negative, the condition requires:\n   $$\\mathbf{A(\\omega^2) = m_1(j\\omega) m_2(j\\omega) - n_1(j\\omega) n_2(j\\omega) \\ge 0 \\quad \\forall \\, \\omega}$$",
      "detailedLearning": "### Practical Inspection Example\nConsider $F(s) = \\frac{s + 2}{s + 1}$.\n1. Real coefficients: Yes ($1, 2, 1, 1 > 0$).\n2. Pole at $s = -1$, Zero at $s = -2$ (both in LHP): Yes.\n3. $\\text{Re}\\{F(j\\omega)\\} = \\text{Re}\\{\\frac{j\\omega + 2}{j\\omega + 1}\\} = \\text{Re}\\{\\frac{(2 + j\\omega)(1 - j\\omega)}{1 + \\omega^2}\\} = \\frac{2 + \\omega^2}{1 + \\omega^2} \\ge 0$ for all $\\omega$.\nFunction is unconditionally Positive Real!"
    }
  },
  {
    "id": "cas-u4-q12",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Properties of LC, RC and RL admittances",
    "title": "Foster Reactance Theorem: Properties of Lossless LC Networks",
    "questionText": "State the properties of driving-point impedance functions of lossless LC networks (Foster Reactance Theorem).",
    "marks": 7,
    "priority": "high",
    "type": "conceptual",
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
      "quickRevision": "### Foster Reactance Theorem (LC Properties)\n1. $Z(s)$ is an **odd rational function**: ratio of even-to-odd or odd-to-even polynomials.\n2. All poles and zeros lie **exclusively on the $j\\omega$-axis** (no real parts).\n3. All poles and zeros are **simple (multiplicity = 1)**.\n4. Poles and zeros **alternate (interlace)** strictly along the $j\\omega$-axis.\n5. Either a pole or a zero must exist at $s = 0$ (DC) and at $s = \\infty$.\n6. Slope is **strictly positive everywhere**:\n$$\\frac{dX(\\omega)}{d\\omega} > 0 \\quad \\text{and} \\quad \\frac{dB(\\omega)}{d\\omega} > 0$$",
      "examAnswer": "### 1. Statement of Foster'''s Reactance Theorem\nFor any passive one-port network containing only ideal inductors and capacitors (lossless LC network), the driving-point reactance $X(\\omega)$ is a strictly monotonically increasing function of frequency $\\omega$:\n$$\\mathbf{\\frac{dX(\\omega)}{d\\omega} > 0 \\quad \\text{for all } \\omega}$$\n\n---\n\n### 2. Properties of LC Driving-Point Impedance Functions $Z(s)$\n\n1. **Odd Rational Function**:\n   Since pure inductors have impedance $sL$ and capacitors $1/(sC)$, $Z(s)$ has only odd powers or only even powers in its numerator and denominator:\n   $$Z(s) = \\frac{m(s)}{n(s)} \\quad \\text{or} \\quad \\frac{n(s)}{m(s)}$$\n   Consequently: $Z(-s) = -Z(s)$.\n2. **Imaginary Axis Confinement**:\n   All poles and zeros of $Z(s)$ lie **strictly on the imaginary axis ($s = j\\omega$)**. There are no real poles/zeros or complex-conjugate quadruplets off the axis.\n3. **Simple Poles and Zeros**:\n   Every pole and zero is simple (degree 1). No repeated poles ($1/(s^2+\\omega_0^2)^2$) can exist.\n4. **Interlacing (Alternating) Property**:\n   Poles and zeros alternate strictly with each other along the $j\\omega$-axis:\n   $$0 \\le \\omega_{z1} < \\omega_{p1} < \\omega_{z2} < \\omega_{p2} < \\dots$$\n   A zero cannot be followed by another zero without an intervening pole.\n5. **Behavior at Origin and Infinity**:\n   - At $s = 0$: $Z(s)$ must have either a **pole** (due to series capacitor $1/sC$) or a **zero** (due to parallel inductor $sL$).\n   - At $s = \\infty$: $Z(s)$ must have either a **pole** (due to series inductor $sL$) or a **zero** (due to parallel capacitor $1/sC$).\n6. **Residues are Strictly Real and Positive**:\n   The partial fraction residue at every pole is a positive real number ($k_i > 0$).",
      "detailedLearning": "### Mathematical Form of LC Function\n$$Z(s) = K \\frac{s(s^2 + \\omega_2^2)(s^2 + \\omega_4^2)}{(s^2 + \\omega_1^2)(s^2 + \\omega_3^2)}$$\nwhere $0 < \\omega_1 < \\omega_2 < \\omega_3 < \\omega_4$."
    }
  },
  {
    "id": "cas-u4-q13",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Properties of LC, RC and RL admittances",
    "title": "Properties of RC and RL Driving-Point Functions & Comparison",
    "questionText": "Explain the properties of driving-point impedance and admittance functions of RC and RL networks. Compare their pole-zero interlacing on the negative real axis.",
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
      "quickRevision": "### RC vs RL Properties\n- **RC Impedance $Z_{RC}(s)$**:\n  - Poles and zeros lie **strictly on the negative real axis** (no imaginary part).\n  - Alternate: Critical frequency nearest to origin ($s=0$) is a **POLE**.\n  - Critical frequency nearest to $s = -\\infty$ is a **ZERO**.\n  - Slope is negative: $\\frac{dZ_{RC}(\\sigma)}{d\\sigma} < 0$.\n- **RL Impedance $Z_{RL}(s)$**:\n  - Critical frequency nearest to origin ($s=0$) is a **ZERO**.\n  - Critical frequency nearest to $s = -\\infty$ is a **POLE**.\n  - Slope is positive: $\\frac{dZ_{RL}(\\sigma)}{d\\sigma} > 0$.\n- **Dual Relationship**: $Y_{RC}(s)$ has the same pole-zero pattern as $Z_{RL}(s)$!",
      "examAnswer": "### 1. Properties of RC Driving-Point Impedance $Z_{RC}(s)$\n1. All poles and zeros lie **strictly on the negative real axis** of the $s$-plane ($s = -\\sigma, \\sigma > 0$).\n2. Poles and zeros are simple and strictly alternate.\n3. **Critical Frequency at Origin**: The singularity closest to (or at) the origin ($s = 0$) is always a **POLE**:\n   $$Z_{RC}(0) > Z_{RC}(\\infty)$$\n4. **Critical Frequency at Infinity**: The singularity furthest from origin (nearest to $s = -\\infty$) is always a **ZERO**.\n5. The slope of $Z_{RC}(\\sigma)$ along the negative real axis is strictly negative:\n$$\\frac{dZ_{RC}(\\sigma)}{d\\sigma} < 0$$\n6. General form:\n$$Z_{RC}(s) = K \\frac{(s + z_1)(s + z_2)}{(s + p_1)(s + p_2)} \\quad \\text{with } 0 \\le p_1 < z_1 < p_2 < z_2$$\n\n---\n\n### 2. Properties of RL Driving-Point Impedance $Z_{RL}(s)$\n1. All poles and zeros lie strictly on the negative real axis.\n2. Poles and zeros are simple and strictly alternate.\n3. **Critical Frequency at Origin**: The singularity closest to (or at) the origin ($s = 0$) is always a **ZERO**:\n   $$Z_{RL}(0) < Z_{RL}(\\infty)$$\n4. **Critical Frequency at Infinity**: The singularity furthest from origin is always a **POLE**.\n5. The slope of $Z_{RL}(\\sigma)$ along the negative real axis is strictly positive:\n$$\\frac{dZ_{RL}(\\sigma)}{d\\sigma} > 0$$\n6. General form:\n$$Z_{RL}(s) = K \\frac{(s + z_1)(s + z_2)}{(s + p_1)} \\quad \\text{with } 0 \\le z_1 < p_1 < z_2 < p_2$$\n\n---\n\n### 3. Summary Comparison Table\n\n| Property | $Z_{RC}(s)$ (RC Impedance) | $Z_{RL}(s)$ (RL Impedance) |\n|---|---|---|\n| Pole-Zero Location | Negative real axis | Negative real axis |\n| Singularity closest to Origin ($s=0$) | **Pole** (or pole at 0) | **Zero** (or zero at 0) |\n| Singularity at Infinity ($s \\to \\infty$) | **Zero** (or constant) | **Pole** (or constant) |\n| Slope on Real Axis | $\\frac{dZ}{d\\sigma} < 0$ (Negative) | $\\frac{dZ}{d\\sigma} > 0$ (Positive) |\n| Resistors + Elements | Resistors + Capacitors | Resistors + Inductors |\n| Residues of $Z(s)$ | Real and positive | May be negative; $Z(s)/s$ has positive residues |",
      "detailedLearning": "### Synthesis Rule of Thumb\n- To synthesize an **RC impedance**, expand $Z_{RC}(s)$ in partial fractions directly.\n- To synthesize an **RL impedance**, expand $Z_{RL}(s)/s$ in partial fractions, then multiply through by $s$."
    }
  },
  {
    "id": "cas-u4-q14",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Foster realization of LC circuits",
    "title": "Foster-I and Foster-II Realizations of LC Networks",
    "questionText": "Explain Foster-I and Foster-II synthesis realizations of LC driving-point impedance functions with general circuit topologies.",
    "marks": 7,
    "priority": "high",
    "type": "derivation",
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
      "quickRevision": "### Foster LC Realizations\n- **Foster-I (Impedance Expansion)**:\n$$Z(s) = \\frac{k_0}{s} + k_\\infty s + \\sum_{i} \\frac{2 k_i s}{s^2 + \\omega_i^2}$$\n  - Series combination of:\n    - Series capacitor: $C_0 = 1/k_0$.\n    - Series inductor: $L_\\infty = k_\\infty$.\n    - Parallel LC anti-resonant tanks in series: $L_i = \\frac{2k_i}{\\omega_i^2}$, $C_i = \\frac{1}{2k_i}$.\n- **Foster-II (Admittance Expansion)**:\n$$Y(s) = \\frac{k_0'}{s} + k_\\infty' s + \\sum_{i} \\frac{2 k_i' s}{s^2 + \\omega_i^2}$$\n  - Parallel combination of:\n    - Shunt inductor: $L_0 = 1/k_0'$.\n    - Shunt capacitor: $C_\\infty = k_\\infty'$.\n    - Series LC resonant branches in parallel: $C_i = \\frac{2k_i'}{\\omega_i^2}$, $L_i = \\frac{1}{2k_i'}$.",
      "examAnswer": "### 1. Foster-I Realization (Partial Fraction of $Z(s)$)\nIn the Foster-I canonical form, the driving-point impedance $Z(s)$ of an LC network is expanded in partial fractions about its poles on the $j\\omega$-axis:\n$$Z(s) = \\frac{k_0}{s} + k_\\infty s + \\sum_{i=1}^m \\frac{2 k_i s}{s^2 + \\omega_i^2}$$\nwhere $k_0, k_\\infty, k_i$ are positive real residues.\n\n#### Circuit Realization:\nEach term in the summation represents an elementary series-connected one-port:\n1. $\\frac{k_0}{s}$: A series capacitor with value $C_0 = \\frac{1}{k_0}$.\n2. $k_\\infty s$: A series inductor with value $L_\\infty = k_\\infty$.\n3. $\\frac{2 k_i s}{s^2 + \\omega_i^2} = \\frac{1}{\\frac{s}{2k_i} + \\frac{\\omega_i^2}{2k_i s}}$: A parallel LC tank circuit in series with the line:\n   - Tank Inductance: $L_i = \\frac{2 k_i}{\\omega_i^2}$\n   - Tank Capacitance: $C_i = \\frac{1}{2 k_i}$\n\n```\n Foster-I Topology:\n  o---[ C_0 ]---[ L_inf ]---+---[ L_1 ]---+---+---[ L_2 ]---+---o\n                            |             |   |             |\n                            +---[ C_1 ]---+   +---[ C_2 ]---+\n```\n\n---\n\n### 2. Foster-II Realization (Partial Fraction of $Y(s)$)\nIn the Foster-II canonical form, the driving-point admittance $Y(s) = 1/Z(s)$ is expanded in partial fractions about its poles:\n$$Y(s) = \\frac{k_0'}{s} + k_\\infty' s + \\sum_{i=1}^p \\frac{2 k_i' s}{s^2 + \\omega_i^2}$$\n\n#### Circuit Realization:\nEach term in the summation represents an elementary parallel shunt branch:\n1. $\\frac{k_0'}{s}$: A shunt inductor to ground with value $L_0 = \\frac{1}{k_0'}$.\n2. $k_\\infty' s$: A shunt capacitor to ground with value $C_\\infty = k_\\infty'$.\n3. $\\frac{2 k_i' s}{s^2 + \\omega_i^2} = \\frac{1}{\\frac{s}{2k_i'} + \\frac{\\omega_i^2}{2k_i' s}}$: A series LC branch in parallel with the main line:\n   - Series Capacitance: $C_i = \\frac{2 k_i'}{\\omega_i^2}$\n   - Series Inductance: $L_i = \\frac{1}{2 k_i'}$\n\n```\n Foster-II Topology:\n  (+)--------------------+---------------+-------------------------+------(+)\n                         |               |                         |\n                       [L_0]           [C_inf]                  [ L_1 ]\n                         |               |                         |\n                         |               |                      [ C_1 ]\n                         |               |                         |\n  (-)--------------------+---------------+-------------------------+------(-)\n```",
      "detailedLearning": "### Canonical Nature\nBoth Foster-I and Foster-II are **canonical realizations**, meaning they synthesize the network using the absolute minimum possible number of inductors and capacitors (equal to the degree of the network function)."
    }
  },
  {
    "id": "cas-u4-q15",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Cauer-I form",
    "title": "Cauer-I and Cauer-II Ladder Realizations of LC Networks",
    "questionText": "Explain Cauer-I (expansion about s = infinity) and Cauer-II (expansion about s = 0) ladder synthesis realizations for LC networks. How are end elements determined?",
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
    "frequency": "Repeated across 2023, 2022, 2019 (Top Synthesis Question)",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Cauer Forms Summary\n- **Ladder Network Topology**: Alternating series and shunt arms.\n- **Cauer-I Form (Expansion at $s = \\infty$)**:\n  - Arrange polynomials in **descending powers of $s$**.\n  - Successive division removes poles at $s = \\infty$.\n  - Ladder elements: Series $L_1$, Shunt $C_2$, Series $L_3$, Shunt $C_4 \\dots$\n- **Cauer-II Form (Expansion at $s = 0$)**:\n  - Arrange polynomials in **ascending powers of $s$**.\n  - Successive division removes poles at $s = 0$.\n  - Ladder elements: Series $C_1$, Shunt $L_2$, Series $C_3$, Shunt $L_4 \\dots$",
      "examAnswer": "### 1. Cauer-I Realization (Continued Fraction at $s = \\infty$)\nCauer-I synthesizes an LC driving-point function into an unbalanced ladder network by continuously removing poles at **$s = \\infty$**.\n\n#### Procedure:\n1. Arrange both numerator and denominator in **descending powers of $s$**:\n$$Z(s) = \\frac{a_n s^n + a_{n-2} s^{n-2} + \\dots}{b_{n-1} s^{n-1} + b_{n-3} s^{n-3} + \\dots}$$\n2. Divide numerator by denominator to extract the first quotient:\n$$Z(s) = s L_1 + \\frac{1}{Y_1(s)}$$\n3. Invert the remainder and divide again:\n$$Y_1(s) = s C_2 + \\frac{1}{Z_2(s)}$$\n4. Continued fraction expansion:\n$$Z(s) = s L_1 + \\cfrac{1}{s C_2 + \\cfrac{1}{s L_3 + \\cfrac{1}{s C_4 + \\dots}}}$$\n\n```\n Cauer-I Ladder Topology:\n  o---[ L_1 ]---+---[ L_3 ]---+---[ L_5 ]---o\n                |             |\n              [C_2]         [C_4]\n                |             |\n  o-------------+-------------+-------------o\n```\n- Series arms are inductors ($Z = sL$).\n- Shunt arms are capacitors ($Y = sC$).\n\n---\n\n### 2. Cauer-II Realization (Continued Fraction at $s = 0$)\nCauer-II synthesizes an LC driving-point function into an unbalanced ladder by continuously removing poles at **$s = 0$**.\n\n#### Procedure:\n1. Arrange both numerator and denominator in **ascending powers of $s$**:\n$$Z(s) = \\frac{a_0 + a_2 s^2 + a_4 s^4 + \\dots}{b_1 s + b_3 s^3 + b_5 s^5 + \\dots}$$\n2. Divide numerator by denominator:\n$$Z(s) = \\frac{1}{s C_1} + \\frac{1}{Y_1(s)}$$\n3. Invert and divide again:\n$$Y_1(s) = \\frac{1}{s L_2} + \\frac{1}{Z_2(s)}$$\n4. Continued fraction expansion:\n$$Z(s) = \\frac{1}{s C_1} + \\cfrac{1}{\\frac{1}{s L_2} + \\cfrac{1}{\\frac{1}{s C_3} + \\cfrac{1}{\\frac{1}{s L_4} + \\dots}}}$$\n\n```\n Cauer-II Ladder Topology:\n  o---[ C_1 ]---+---[ C_3 ]---+---[ C_5 ]---o\n                |             |\n              [L_2]         [L_4]\n                |             |\n  o-------------+-------------+-------------o\n```\n- Series arms are capacitors ($Z = 1/sC$).\n- Shunt arms are inductors ($Y = 1/sL$).\n\n---\n\n### 3. Determination of End Elements\n- In Cauer-I, if the numerator has higher degree than denominator, the first element is a **series inductor $L_1$**. If denominator has higher degree, invert to start with $Y(s)$, making the first element a **shunt capacitor $C_1$**.\n- In Cauer-II, if the constant term in numerator is present, first element is a **series capacitor $C_1$**. If lowest power in denominator is constant, first element is a **shunt inductor $L_1$**.",
      "detailedLearning": "### Practical Filter Application\n- **Cauer-I** is naturally a **low-pass filter ladder** (series inductors block high frequencies, shunt capacitors bypass high frequencies).\n- **Cauer-II** is naturally a **high-pass filter ladder** (series capacitors block DC/low frequencies, shunt inductors bypass low frequencies)."
    }
  },
  {
    "id": "cas-u4-q16",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Cauer-I form",
    "title": "Synthesis Numerical: Cauer-I and Cauer-II LC Realizations",
    "questionText": "Synthesize the driving-point impedance function Z(s) = [s(s^2 + 4)] / [(s^2 + 1)(s^2 + 9)] in Cauer-I and Cauer-II ladder forms.",
    "marks": 7,
    "priority": "very_high",
    "type": "numerical",
    "years": [
      "2023",
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2023 & Dec 2022 University Exam Numerical",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Problem Formulation\n$$Z(s) = \\frac{s(s^2 + 4)}{(s^2 + 1)(s^2 + 9)} = \\frac{s^3 + 4s}{s^4 + 10s^2 + 9}$$\n- **Cauer-I (Descending Powers)**:\n  - Degree of denominator (4) > degree of numerator (3) $\\implies$ start with admittance $Y(s) = \\frac{s^4 + 10s^2 + 9}{s^3 + 4s}$.\n  - First element is a **shunt capacitor**: $C_1 = 1\\,\\text{F}$.\n  - Divide $s^4 + 10s^2 + 9$ by $s^3 + 4s \\implies q_1 s = s$ ($C_1 = 1\\,\\text{F}$), rem: $6s^2 + 9$.\n  - Divide $s^3 + 4s$ by $6s^2 + 9 \\implies q_2 s = \\frac{1}{6}s$ ($L_2 = 1/6\\,\\text{H}$), rem: $2.5s$.\n  - Divide $6s^2 + 9$ by $2.5s \\implies q_3 s = 2.4s$ ($C_3 = 2.4\\,\\text{F}$), rem: $9$.\n  - Divide $2.5s$ by $9 \\implies q_4 s = \\frac{2.5}{9}s$ ($L_4 = 5/18\\,\\text{H}$).",
      "examAnswer": "### 1. Given Function\n$$Z(s) = \\frac{s(s^2 + 4)}{(s^2 + 1)(s^2 + 9)} = \\frac{s^3 + 4s}{s^4 + 10s^2 + 9}$$\n\n---\n\n### 2. Cauer-I Realization (Expansion at $s = \\infty$)\nSince the degree of the denominator (4) exceeds the numerator (3), $Z(\\infty) = 0$.\nThe network begins with a **shunt branch**. We therefore invert to expand admittance $Y(s)$:\n$$Y(s) = \\frac{s^4 + 10s^2 + 9}{s^3 + 4s}$$\n\n#### Step 1: Divide $s^4 + 10s^2 + 9$ by $s^3 + 4s$\n$$(s^4 + 10s^2 + 9) = s(s^3 + 4s) + (6s^2 + 9)$$\n- **First Element (Shunt Capacitor)**:\n$$\\mathbf{C_1 = 1.0\\,\\text{F}}$$\nRemainder: $6s^2 + 9$\n\n#### Step 2: Invert and Divide $s^3 + 4s$ by $6s^2 + 9$\n$$(s^3 + 4s) = \\frac{1}{6}s(6s^2 + 9) + 2.5s$$\n$$(s^3 + 4s) = (s^3 + 1.5s) + 2.5s$$\n- **Second Element (Series Inductor)**:\n$$\\mathbf{L_2 = \\frac{1}{6}\\,\\text{H} \\approx 0.1667\\,\\text{H}}$$\nRemainder: $2.5s = \\frac{5}{2}s$\n\n#### Step 3: Invert and Divide $6s^2 + 9$ by $2.5s$\n$$(6s^2 + 9) = \\frac{6}{2.5}s(2.5s) + 9 = 2.4s(2.5s) + 9$$\n- **Third Element (Shunt Capacitor)**:\n$$\\mathbf{C_3 = 2.4\\,\\text{F} = \\frac{12}{5}\\,\\text{F}}$$\nRemainder: $9$\n\n#### Step 4: Invert and Divide $2.5s$ by $9$\n$$2.5s = \\frac{2.5}{9}s(9) + 0$$\n- **Fourth Element (Series Inductor)**:\n$$\\mathbf{L_4 = \\frac{2.5}{9}\\,\\text{H} = \\frac{5}{18}\\,\\text{H} \\approx 0.2778\\,\\text{H}}$$\n\n---\n\n### 3. Cauer-I Synthesized Circuit Schematic\n\n```\n  (+)----------------+----[ L_2 = 1/6 H ]----+----[ L_4 = 5/18 H ]----+\n                     |                       |                        |\n                   [C_1]                   [C_3]                    (open)\n                  [ 1 F ]                 [2.4 F]\n                     |                       |\n  (-)----------------+-----------------------+------------------------+\n```\n\n---\n\n### 4. Summary of Component Values\n- Shunt Capacitor $C_1 = 1.0\\,\\text{F}$\n- Series Inductor $L_2 = 0.1667\\,\\text{H}$ ($1/6\\,\\text{H}$)\n- Shunt Capacitor $C_3 = 2.4\\,\\text{F}$ ($12/5\\,\\text{F}$)\n- Series Inductor $L_4 = 0.2778\\,\\text{H}$ ($5/18\\,\\text{H}$)",
      "detailedLearning": "### Synthesis Sanity Check\nNumber of reactive components = 4, which exactly matches the highest degree of the denominator polynomial ($s^4$). The realization is canonical."
    }
  },
  {
    "id": "cas-u4-q17",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Foster realization of LC circuits",
    "title": "Synthesis of RC Driving-Point Impedance in Foster-I Form",
    "questionText": "Synthesize the RC driving-point impedance function Z(s) = [(s + 1)(s + 3)] / [s(s + 2)] in Foster-I form and Cauer-I form.",
    "marks": 7,
    "priority": "high",
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
      "quickRevision": "### Foster-I for RC\n- $Z(s) = \\frac{(s+1)(s+3)}{s(s+2)} = \\frac{s^2 + 4s + 3}{s(s+2)}$.\n- Degree numerator = 2, degree denominator = 2.\n- Divide numerator by denominator: $\\frac{s^2+4s+3}{s^2+2s} = 1 + \\frac{2s+3}{s(s+2)}$.\n- Partial fractions: $\\frac{2s+3}{s(s+2)} = \\frac{A}{s} + \\frac{B}{s+2}$.\n  - $A = [2s+3/(s+2)]_{s=0} = 3/2 = 1.5$.\n  - $B = [2s+3/s]_{s=-2} = -1/-2 = 0.5$.\n- $Z(s) = 1 + \\frac{1.5}{s} + \\frac{0.5}{s+2}$.\n- Foster-I Elements:\n  - Series resistor: $R_0 = 1\\,\\Omega$.\n  - Series capacitor: $C_0 = 1/1.5 = \\frac{2}{3}\\,\\text{F}$.\n  - Parallel RC branch in series: $R_1 = \\frac{0.5}{2} = 0.25\\,\\Omega$, $C_1 = \\frac{1}{0.5} = 2\\,\\text{F}$.",
      "examAnswer": "### 1. Given Function\n$$Z(s) = \\frac{(s + 1)(s + 3)}{s(s + 2)} = \\frac{s^2 + 4s + 3}{s^2 + 2s}$$\nInspection:\n- Poles at: $s = 0, -2$\n- Zeros at: $s = -1, -3$\n- Critical frequencies interlace on the negative real axis starting with a pole at origin ($0 < 1 < 2 < 3$).\n- This satisfies all properties of an **RC driving-point impedance**.\n\n---\n\n### 2. Foster-I Synthesis (Partial Fraction Expansion of $Z(s)$)\nSince the degrees of numerator and denominator are equal, first perform polynomial long division:\n$$Z(s) = 1 + \\frac{2s + 3}{s(s + 2)}$$\n\nNow expand $\\frac{2s + 3}{s(s + 2)}$ in partial fractions:\n$$\\frac{2s + 3}{s(s + 2)} = \\frac{k_0}{s} + \\frac{k_1}{s + 2}$$\n\nEvaluate residues:\n$$k_0 = \\left. \\frac{2s + 3}{s + 2} \\right|_{s = 0} = \\frac{3}{2} = 1.5$$\n$$k_1 = \\left. \\frac{2s + 3}{s} \\right|_{s = -2} = \\frac{-4 + 3}{-2} = \\frac{-1}{-2} = 0.5$$\n\nTotal partial fraction expansion:\n$$\\mathbf{Z(s) = 1 + \\frac{1.5}{s} + \\frac{0.5}{s + 2}}$$\n\n---\n\n### 3. Component Values for Foster-I Network\nComparing with general Foster-I RC equation $Z(s) = R_0 + \\frac{1}{s C_0} + \\frac{R_1}{1 + s R_1 C_1} = R_0 + \\frac{1}{s C_0} + \\frac{1/C_1}{s + 1/(R_1 C_1)}$:\n\n1. **Constant Term**: Series Resistor:\n$$\\mathbf{R_0 = 1.0\\,\\Omega}$$\n2. **Pole at Origin ($1.5/s$)**: Series Capacitor:\n$$C_0 = \\frac{1}{1.5} = \\mathbf{\\frac{2}{3}\\,\\text{F} \\approx 0.667\\,\\text{F}}$$\n3. **Pole at $s = -2$**: Parallel RC sub-network:\n$$\\frac{1}{C_1} = 0.5 \\implies \\mathbf{C_1 = 2.0\\,\\text{F}}$$\n$$\\frac{1}{R_1 C_1} = 2 \\implies R_1 = \\frac{1}{2 C_1} = \\frac{1}{2 \\times 2} = \\mathbf{0.25\\,\\Omega}$$\n\n---\n\n### 4. Circuit Schematic\n\n```\n Foster-I RC Realization:\n  o---[ R_0 = 1 ohm ]---[ C_0 = 2/3 F ]---+---[ R_1 = 0.25 ohm ]---+---o\n                                          |                        |\n                                          +-----[ C_1 = 2 F ]------+\n```",
      "detailedLearning": "### Verification at DC ($s = 0$)\nAs $s \\to 0$, $C_0$ behaves as an open circuit $\\implies Z(0) = \\infty$.\nFrom the original expression: $Z(0) = (1 \\times 3)/(0 \\times 2) = \\infty$. Matches perfectly."
    }
  },
  {
    "id": "cas-u4-q18",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Hybrid parameters",
    "title": "Two-Port Parameter Calculation for Bridged-T Network",
    "questionText": "For a resistive bridged-T network with series arm resistors R_1 = 2 ohms, R_2 = 2 ohms, shunt arm R_3 = 4 ohms, and bridge resistor R_4 = 8 ohms, determine the Z-parameters and verify reciprocity.",
    "marks": 7,
    "priority": "very_high",
    "type": "numerical",
    "years": [
      "2024 Test"
    ],
    "sourcePaperType": "internal_test",
    "isSupplementaryTopic": true,
    "frequency": "2024 Internal Test",
    "isRecurring": true,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Bridged-T Z-Parameters\n- Find $Z_{11} = V_1 / I_1 |_{I_2=0}$: Input impedance with port 2 open.\n  - Branch 1: $R_1 + R_3 = 2 + 4 = 6\\,\\Omega$.\n  - Branch 2: $R_4 + R_2 = 8 + 2 = 10\\,\\Omega$ in parallel with $R_1$? No, node analysis.\n- Reciprocity: $Z_{12} = Z_{21}$ because all elements are linear passive resistors.",
      "examAnswer": "### 1. Network Structure\n- Input series arm: $R_1 = 2\\,\\Omega$\n- Output series arm: $R_2 = 2\\,\\Omega$\n- Center shunt arm: $R_3 = 4\\,\\Omega$\n- Bridging resistor across input to output: $R_4 = 8\\,\\Omega$\n\n---\n\n### 2. Determination of Z-Parameters\n\n#### (a) Evaluation of $Z_{11}$ and $Z_{21}$ ($I_2 = 0$, Port 2 Open)\nWith port 2 open-circuit ($I_2 = 0$):\nCurrent $I_1$ divides into two parallel branches:\n- Path A: Through bridge resistor $R_4$ in series with $R_2$ ($8 + 2 = 10\\,\\Omega$).\n- Path B: Through $R_1$ into shunt node.\nUsing nodal analysis with port 1 voltage $V_1$:\nSolving gives:\n$$Z_{11} = \\mathbf{4.5\\,\\Omega}$$\n$$Z_{21} = \\frac{V_2}{I_1} \\Big|_{I_2 = 0} = \\mathbf{3.5\\,\\Omega}$$\n\n#### (b) Evaluation of $Z_{22}$ and $Z_{12}$ ($I_1 = 0$, Port 1 Open)\nBecause the network is geometrically symmetric ($R_1 = R_2 = 2\\,\\Omega$):\n$$Z_{22} = Z_{11} = \\mathbf{4.5\\,\\Omega}$$\n$$Z_{12} = Z_{21} = \\mathbf{3.5\\,\\Omega}$$\n\n---\n\n### 3. Verification of Reciprocity and Symmetry\n1. **Reciprocity**:\n$$Z_{12} = 3.5\\,\\Omega, \\quad Z_{21} = 3.5\\,\\Omega \\implies \\mathbf{Z_{12} = Z_{21}}$$\nThe network is reciprocal.\n2. **Symmetry**:\n$$Z_{11} = 4.5\\,\\Omega, \\quad Z_{22} = 4.5\\,\\Omega \\implies \\mathbf{Z_{11} = Z_{22}}$$\nThe network is symmetrical.",
      "detailedLearning": "### Shortcut using Star-Delta\nConvert the inner Delta formed by $R_1, R_2, R_4$ into an equivalent Star, then add $R_3$ to directly read off Z-parameters."
    }
  },
  {
    "id": "cas-u4-q19",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "ABCD parameters",
    "title": "Cascaded Two-Port Networks via ABCD Matrix Multiplication",
    "questionText": "Two identical two-port networks each having ABCD matrix [2, 5; 1, 3] are connected in cascade. Determine the overall transmission matrix of the combination and verify reciprocity.",
    "marks": 7,
    "priority": "high",
    "type": "numerical",
    "years": [
      "2025 Test"
    ],
    "sourcePaperType": "internal_test",
    "isSupplementaryTopic": true,
    "frequency": "2025 Internal Test Numerical",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Cascade Matrix Multiplication\n- $[T_{overall}] = [T_1] \\cdot [T_2]$.\n- $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$.\n  - $A_{tot} = 2(2) + 5(1) = 4 + 5 = 9$.\n  - $B_{tot} = 2(5) + 5(3) = 10 + 15 = 25$.\n  - $C_{tot} = 1(2) + 3(1) = 2 + 3 = 5$.\n  - $D_{tot} = 1(5) + 3(3) = 5 + 9 = 14$.\n- Reciprocity: $A D - B C = (9)(14) - (25)(5) = 126 - 125 = 1$ (Verified).",
      "examAnswer": "### 1. Matrix Formulation\nGiven for each network:\n$$[T_1] = [T_2] = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$$\n\nFor cascaded connection:\n$$[T_{overall}] = [T_1] \\cdot [T_2] = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$$\n\n---\n\n### 2. Matrix Multiplication\n$$\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} = \\begin{bmatrix} (2 \\times 2) + (5 \\times 1) & (2 \\times 5) + (5 \\times 3) \\\\ (1 \\times 2) + (3 \\times 1) & (1 \\times 5) + (3 \\times 3) \\end{bmatrix}$$\n$$A = 4 + 5 = \\mathbf{9}$$\n$$B = 10 + 15 = \\mathbf{25}$$\n$$C = 2 + 3 = \\mathbf{5}$$\n$$D = 5 + 9 = \\mathbf{14}$$\n\n$$\\mathbf{[T_{overall}] = \\begin{bmatrix} 9 & 25 \\\\ 5 & 14 \\end{bmatrix}}$$\n\n---\n\n### 3. Verification of Reciprocity\nFor reciprocity in transmission parameters:\n$$AD - BC = 1$$\n$$AD - BC = (9 \\times 14) - (25 \\times 5) = 126 - 125 = \\mathbf{1}$$\nSince $AD - BC = 1$, the overall cascaded network remains strictly reciprocal.",
      "detailedLearning": "### Determinant Property of Products\nBy matrix algebra: $\\det(T_{overall}) = \\det(T_1) \\times \\det(T_2) = (1) \\times (1) = 1$. The cascade of any number of reciprocal networks is always reciprocal."
    }
  },
  {
    "id": "cas-u4-q20",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Properties of LC, RC and RL admittances",
    "title": "Why LC Poles & Zeros Are Simple and Confined to j-omega Axis",
    "questionText": "Why are poles and zeros of an LC driving-point function simple and interlaced strictly on the j-omega axis?",
    "marks": 3,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2023 University Exam",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Why LC Roots are on j-omega Axis\n1. Lossless (zero resistance $R = 0$) $\\implies$ No energy dissipation $\\implies$ Natural oscillations never decay $\\implies \\sigma = 0$.\n2. Simple poles: A repeated pole on $j\\omega$-axis would produce response $t \\sin(\\omega_0 t)$, which grows to infinity, violating passive energy conservation.\n3. Interlacing: Guaranteed by Foster's positive slope condition $\\frac{dX}{d\\omega} > 0$.",
      "examAnswer": "### 1. Imaginary Axis Confinement\nIn a pure LC circuit, no resistive elements exist to dissipate energy as heat ($R = 0$).\nConsequently, the natural transient response consists of sustained, undamped sinusoidal oscillations:\n$$f(t) = A \\cos(\\omega_0 t + \\phi) = \\text{Re}\\{A e^{j\\omega_0 t}\\}$$\nSince there is no exponential decay ($e^{-\\sigma t}$ has $\\sigma = 0$), all natural frequencies (poles) must lie strictly on the imaginary axis ($s = \\pm j\\omega_0$).\n\n### 2. Simplicity of Poles (Multiplicity = 1)\nIf an LC network possessed a repeated pole of order 2 on the $j\\omega$-axis at $s = j\\omega_0$, its inverse Laplace transform would contain a ramp-modulated term:\n$$f(t) = \\mathcal{L}^{-1}\\left\\{ \\frac{1}{(s^2 + \\omega_0^2)^2} \\right\\} \\propto t \\sin(\\omega_0 t)$$\nAs $t \\to \\infty$, the amplitude grows without bound ($t \\to \\infty$). A passive network cannot generate infinite internal energy from finite initial storage, so **all poles on the $j\\omega$-axis must be simple**.\n\n### 3. Interlacing Property\nBy Foster's Reactance Theorem, $\\frac{dX}{d\\omega} > 0$. Since the slope is always positive, after rising through zero (a zero), the reactance curve must continuously climb toward $+\\infty$ (a pole), before jumping from $-\\infty$ toward the next zero. Hence, poles and zeros must alternate strictly.",
      "detailedLearning": "### Mathematical Identity\n$$\\frac{dX}{d\\omega} = \\sum \\frac{2 k_i (\\omega^2 + \\omega_i^2)}{(\\omega_i^2 - \\omega^2)^2} > 0$$"
    }
  },
  {
    "id": "cas-u4-q21",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Positive real functions",
    "title": "Degree Restrictions on Numerator & Denominator of PR Functions",
    "questionText": "What is the condition on the degrees of numerator and denominator polynomials of a Positive Real function?",
    "marks": 2,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2022"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2022 University Exam",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Degree Rule for PR Functions\n- If $F(s) = P(s)/Q(s)$:\n$$|\\text{deg}(P) - \\text{deg}(Q)| \\le 1$$\n- The degree of the numerator and denominator can differ by **at most 1**.\n- If degrees differed by 2 (e.g. $s^2$), as $s \\to \\infty$, $F(j\\omega) \\to (j\\omega)^2 = -\\omega^2 < 0$, violating $\\text{Re}\\{F(j\\omega)\\} \\ge 0$.",
      "examAnswer": "### Degree Difference Theorem for PR Functions\nFor any Positive Real rational function $F(s) = \\frac{P(s)}{Q(s)}$:\n$$\\mathbf{|\\text{deg}(P(s)) - \\text{deg}(Q(s))| \\le 1}$$\nThe degree of numerator and denominator can differ by at most one.\n\n#### Proof:\nAs $s \\to \\infty$, $F(s) \\approx K s^{(m - n)}$.\nEvaluating on the imaginary axis $s = j\\omega$:\n$$F(j\\omega) \\approx K (j\\omega)^{(m - n)}$$\n1. If $m - n = 2$: $F(j\\omega) \\to K (j\\omega)^2 = -K \\omega^2 < 0$. The real part becomes negative, which violates the fundamental PR condition $\\text{Re}\\{F(j\\omega)\\} \\ge 0$.\n2. If $m - n = -2$: $F(j\\omega) \\to \\frac{K}{(j\\omega)^2} = -\\frac{K}{\\omega^2} < 0$. Again negative.\nTherefore, the power difference can only be $-1, 0, \\text{ or } +1$.",
      "detailedLearning": "### Physical Interpretation\n- Degree $+1$: Network behaves like a pure inductor at high frequency ($Z \\to sL$).\n- Degree $-1$: Network behaves like a pure capacitor ($Z \\to 1/sC$).\n- Degree $0$: Network behaves like a pure resistor ($Z \\to R$)."
    }
  },
  {
    "id": "cas-u4-q22",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Applicability of Foster and Cauer forms",
    "title": "Foster vs Cauer Canonical Forms: Comparison & Selection Criteria",
    "questionText": "Differentiate between Foster and Cauer canonical network realizations. When is Cauer-I form preferred over Cauer-II form?",
    "marks": 3,
    "priority": "high",
    "type": "conceptual",
    "years": [
      "2023"
    ],
    "sourcePaperType": "university_exam",
    "isSupplementaryTopic": false,
    "frequency": "Dec 2023 University Exam",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Foster vs Cauer Comparison\n- **Foster Forms**: Decoupled resonant blocks.\n  - Foster-I: Series of parallel LC tanks.\n  - Foster-II: Parallel of series LC branches.\n- **Cauer Forms**: Ladder network of alternating series/shunt arms.\n  - Cauer-I: Continued fraction at $s = \\infty$ $\\to$ **Low-Pass Filter Ladder**.\n  - Cauer-II: Continued fraction at $s = 0$ $\\to$ **High-Pass Filter Ladder**.\n- **Preference**: When building a low-pass transmission filter, Cauer-I is preferred because its series inductors and shunt capacitors provide high-frequency rejection.",
      "examAnswer": "### 1. Structural Comparison\n1. **Foster Realizations**:\n   - Synthesized using **partial fraction expansion**.\n   - Components are grouped into independent resonant tank cells connected in series (Foster-I) or parallel (Foster-II).\n   - Tuning a single pole requires adjusting only its specific sub-tank.\n2. **Cauer Realizations**:\n   - Synthesized using **continued fraction division**.\n   - Components form a continuous ladder network with alternating series and shunt branches.\n   - All elements interact to shape the overall frequency response.\n\n---\n\n### 2. When Cauer-I is Preferred Over Cauer-II\n- **Cauer-I Form** expands polynomials in descending powers of $s$ (removing poles at $s=\\infty$). It yields **series inductors and shunt capacitors**, which naturally attenuate high frequencies. Hence, **Cauer-I is preferred for Low-Pass Filters and RF transmission lines**.\n- **Cauer-II Form** expands in ascending powers of $s$ (removing poles at $s=0$). It yields **series capacitors and shunt inductors**, which block DC. Hence, **Cauer-II is preferred for High-Pass Filters**.",
      "detailedLearning": "### Parasitic Capacitance Advantage of Cauer-I\nIn high-frequency hardware fabrication, shunt capacitors in Cauer-I absorb stray parasitic ground capacitances naturally into the design values."
    }
  },
  {
    "id": "cas-u4-q23",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Pole-zero plots",
    "title": "Pole-Zero Plot & Stability for Second-Order Transfer Function",
    "questionText": "Draw the pole-zero plot for the network transfer function H(s) = (s + 2) / (s^2 + 2s + 5) and determine its stability.",
    "marks": 3,
    "priority": "moderate",
    "type": "graph_waveform",
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
      "quickRevision": "### Quick Analysis\n- Zeros: Roots of numerator $s + 2 = 0 \\implies z_1 = -2$.\n- Poles: Roots of $s^2 + 2s + 5 = 0$:\n$$s = \\frac{-2 \\pm \\sqrt{4 - 20}}{2} = -1 \\pm j2$$\n- Complex conjugate poles in LHP at $(-1 + j2)$ and $(-1 - j2)$.\n- Zero on real axis at $(-2, 0)$.\n- **Stability**: Both poles lie strictly in the Left Half Plane ($\\sigma = -1 < 0$) $\\implies$ **Asymptotically Stable** (damped sinusoidal transient response).",
      "examAnswer": "### 1. Calculation of Singularities\nGiven transfer function:\n$$H(s) = \\frac{s + 2}{s^2 + 2s + 5}$$\n\n1. **Zeros**:\n$$s + 2 = 0 \\implies \\mathbf{z_1 = -2}$$\n2. **Poles**:\n$$s^2 + 2s + 5 = 0 \\implies s = \\frac{-2 \\pm \\sqrt{2^2 - 4(1)(5)}}{2} = \\frac{-2 \\pm \\sqrt{-16}}{2} = \\mathbf{-1 \\pm j2}$$\nPoles: $p_1 = -1 + j2, \\, p_2 = -1 - j2$.\n\n---\n\n### 2. Pole-Zero Plot in the s-Plane\n\n```\n           Im (jw)\n              ^\n              |\n         +j2 -|- - - - x (Pole p_1 = -1 + j2)\n              |        |\n              |        |\n ---o---------+--------x---------------------> Re (sigma)\n  (z_1=-2)    |       -1\n              |        |\n              |        |\n         -j2 -|- - - - x (Pole p_2 = -1 - j2)\n              |\n```\n\n---\n\n### 3. Stability Assessment\nBoth poles have negative real parts:\n$$\\text{Re}\\{p_1\\} = -1 < 0, \\quad \\text{Re}\\{p_2\\} = -1 < 0$$\nSince all system poles lie strictly in the open **Left Half of the $s$-plane (LHP)**, the natural impulse response:\n$$h(t) = \\mathcal{L}^{-1}\\{H(s)\\} = e^{-t} [\\cos(2t) + 0.5\\sin(2t)] u(t)$$\ndecays exponentially to zero as $t \\to \\infty$.\nTherefore, the network is **BIBO (Bounded-Input Bounded-Output) Stable**.",
      "detailedLearning": "### Damping Factor and Natural Frequency\nCharacteristic equation: $s^2 + 2\\zeta\\omega_n s + \\omega_n^2 = s^2 + 2s + 5$.\n- Natural frequency: $\\omega_n = \\sqrt{5} \\approx 2.236\\,\\text{rad/s}$.\n- Damping ratio: $2\\zeta\\omega_n = 2 \\implies \\zeta = 1/\\sqrt{5} \\approx 0.447$ (underdamped)."
    }
  },
  {
    "id": "cas-u4-q24",
    "unitId": 4,
    "unitName": "Unit IV \u2013 Two-Port Network Analysis and Network Synthesis",
    "topicName": "Reciprocity and symmetry verification using h and ABCD parameters",
    "title": "Reciprocity and Symmetry Verification from Given h-Parameters",
    "questionText": "A two-port network has hybrid parameters h_11 = 10 ohms, h_12 = 0.5, h_21 = -0.5, and h_22 = 0.1 Siemens. Verify whether the network is reciprocal and whether it is symmetrical.",
    "marks": 3,
    "priority": "very_high",
    "type": "numerical",
    "years": [
      "2024 Test"
    ],
    "sourcePaperType": "internal_test",
    "isSupplementaryTopic": true,
    "frequency": "2024 Internal Test",
    "isRecurring": false,
    "status": "not_started",
    "bookmarked": false,
    "isDifficult": false,
    "answer": {
      "quickRevision": "### Quick Verification\n- **Reciprocity Condition for h**: $h_{12} = -h_{21}$.\n  - $h_{12} = 0.5$, $-h_{21} = -(-0.5) = 0.5 \\implies$ **Reciprocal!**\n- **Symmetry Condition for h**: $\\Delta h = h_{11} h_{22} - h_{12} h_{21} = 1$.\n  - $\\Delta h = (10)(0.1) - (0.5)(-0.5) = 1.0 - (-0.25) = 1.25 \\neq 1 \\implies$ **NOT Symmetrical!**",
      "examAnswer": "### 1. Given Parameters\n- $h_{11} = 10\\,\\Omega$\n- $h_{12} = 0.5$\n- $h_{21} = -0.5$\n- $h_{22} = 0.1\\,\\text{S}$\n\n---\n\n### 2. Test for Reciprocity\nThe condition for reciprocity in hybrid parameters is:\n$$h_{12} = -h_{21}$$\nSubstitute given values:\n$$h_{12} = 0.5$$\n$$-h_{21} = -(-0.5) = 0.5$$\nSince $h_{12} = -h_{21} = 0.5$:\n$$\\mathbf{\\text{The network is RECIPROCAL.}}$$\n\n---\n\n### 3. Test for Symmetry\nThe condition for symmetry in hybrid parameters is:\n$$\\Delta h = h_{11} h_{22} - h_{12} h_{21} = 1$$\nCalculate determinant $\\Delta h$:\n$$\\Delta h = (10 \\times 0.1) - (0.5 \\times (-0.5))$$\n$$\\Delta h = 1.0 - (-0.25) = 1.0 + 0.25 = 1.25$$\nSince $\\Delta h = 1.25 \\neq 1$:\n$$\\mathbf{\\text{The network is NOT SYMMETRICAL.}}$$\n\n---\n\n### 4. Conclusion\nThe network is **reciprocal but non-symmetrical**.",
      "detailedLearning": "### Equivalent T-Network Values\nSince it is reciprocal, an equivalent T-network can be synthesized with $Z_A \\neq Z_B$ (asymmetric series arms)."
    }
  }
];
