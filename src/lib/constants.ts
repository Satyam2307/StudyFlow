import { Subject, StudyFlowData } from '@/types/study';

export const MOTIVATIONAL_QUOTES = [
  "Small progress every day adds up to big results.",
  "Deep focus and consistency outperform sporadic bursts.",
  "Mastery is not an accident; it is daily deliberate practice.",
  "Understanding principles makes problem-solving effortless.",
  "One topic thoroughly understood is worth ten memorized.",
  "Clarity follows action. Start with one equation today.",
  "Disciplined preparation eliminates exam anxiety.",
  "The secret to getting ahead is getting started.",
  "Small daily disciplines repeated with consistency lead to great achievements.",
  "Focus on the process, and the outcomes will take care of themselves."
];

export const INITIAL_FOM_SUBJECT: Subject = {
  id: 'subj-fom-27002',
  name: 'Fundamentals of Measurement (FOM)',
  code: 'EI-27002 / EI-27012',
  icon: 'gauge',
  units: [
    {
      id: 'unit-1',
      name: 'Unit 1 – Fundamentals of Measurement',
      order: 1,
      topics: [
        {
          id: 'u1-t1',
          name: 'Static characteristics of measuring instruments',
          completed: false,
          priority: 'high',
          estimatedTime: '45 min'
        },
        {
          id: 'u1-t2',
          name: 'Dynamic characteristics of measuring instruments',
          completed: false,
          priority: 'high',
          estimatedTime: '45 min'
        },
        {
          id: 'u1-t3',
          name: 'Types of measurement errors',
          completed: false,
          priority: 'medium',
          estimatedTime: '30 min'
        },
        {
          id: 'u1-t4',
          name: 'Accuracy and precision',
          completed: false,
          priority: 'medium',
          estimatedTime: '25 min'
        },
        {
          id: 'u1-t5',
          name: 'Direct and indirect measurement',
          completed: false,
          priority: 'low',
          estimatedTime: '20 min'
        },
        {
          id: 'u1-t6',
          name: 'Calibration and standards',
          completed: false,
          priority: 'medium',
          estimatedTime: '30 min'
        },
        {
          id: 'u1-t7',
          name: 'Zero drift, span drift and zonal drift',
          completed: false,
          priority: 'medium',
          estimatedTime: '30 min'
        },
        {
          id: 'u1-t8',
          name: 'Numerical problems on limiting errors',
          completed: false,
          priority: 'high',
          estimatedTime: '60 min'
        }
      ]
    },
    {
      id: 'unit-2',
      name: 'Unit 2 – CRO, CRT and Oscilloscopes',
      order: 2,
      topics: [
        {
          id: 'u2-t1',
          name: 'Construction and working of CRT',
          completed: false,
          priority: 'high',
          estimatedTime: '50 min'
        },
        {
          id: 'u2-t2',
          name: 'Single-trace CRO',
          completed: false,
          priority: 'medium',
          estimatedTime: '30 min'
        },
        {
          id: 'u2-t3',
          name: 'Dual-trace CRO',
          completed: false,
          priority: 'high',
          estimatedTime: '40 min'
        },
        {
          id: 'u2-t4',
          name: 'Digital Storage Oscilloscope (DSO)',
          completed: false,
          priority: 'high',
          estimatedTime: '50 min'
        },
        {
          id: 'u2-t5',
          name: 'Time-base generator and synchronization',
          completed: false,
          priority: 'medium',
          estimatedTime: '45 min'
        },
        {
          id: 'u2-t6',
          name: 'CRT deflection sensitivity',
          completed: false,
          priority: 'high',
          estimatedTime: '40 min'
        },
        {
          id: 'u2-t7',
          name: 'Amplitude measurement using CRO',
          completed: false,
          priority: 'medium',
          estimatedTime: '25 min'
        },
        {
          id: 'u2-t8',
          name: 'Frequency measurement using CRO',
          completed: false,
          priority: 'medium',
          estimatedTime: '30 min'
        },
        {
          id: 'u2-t9',
          name: 'Phase measurement using CRO',
          completed: false,
          priority: 'high',
          estimatedTime: '35 min'
        },
        {
          id: 'u2-t10',
          name: 'Lissajous patterns',
          completed: false,
          priority: 'high',
          estimatedTime: '45 min'
        },
        {
          id: 'u2-t11',
          name: 'Spectrum analyser and network analyser',
          completed: false,
          priority: 'medium',
          estimatedTime: '40 min'
        }
      ]
    },
    {
      id: 'unit-3',
      name: 'Unit 3 – Analog Measuring Instruments',
      order: 3,
      topics: [
        {
          id: 'u3-t1',
          name: 'Classification of analog instruments',
          completed: false,
          priority: 'low',
          estimatedTime: '25 min'
        },
        {
          id: 'u3-t2',
          name: 'PMMC instrument',
          completed: false,
          priority: 'high',
          estimatedTime: '45 min'
        },
        {
          id: 'u3-t3',
          name: 'PMMC torque equation derivation',
          completed: false,
          priority: 'high',
          estimatedTime: '50 min'
        },
        {
          id: 'u3-t4',
          name: 'Moving iron instruments',
          completed: false,
          priority: 'medium',
          estimatedTime: '35 min'
        },
        {
          id: 'u3-t5',
          name: 'Attraction-type moving iron instrument',
          completed: false,
          priority: 'medium',
          estimatedTime: '30 min'
        },
        {
          id: 'u3-t6',
          name: 'Repulsion-type moving iron instrument',
          completed: false,
          priority: 'medium',
          estimatedTime: '30 min'
        },
        {
          id: 'u3-t7',
          name: "D'Arsonval galvanometer",
          completed: false,
          priority: 'medium',
          estimatedTime: '35 min'
        },
        {
          id: 'u3-t8',
          name: 'Current transformer (CT)',
          completed: false,
          priority: 'high',
          estimatedTime: '45 min'
        },
        {
          id: 'u3-t9',
          name: 'Potential transformer (PT)',
          completed: false,
          priority: 'high',
          estimatedTime: '40 min'
        },
        {
          id: 'u3-t10',
          name: 'Shunt and multiplier numericals',
          completed: false,
          priority: 'high',
          estimatedTime: '60 min'
        }
      ]
    },
    {
      id: 'unit-4',
      name: 'Unit 4 – Electrical Measurements',
      order: 4,
      topics: [
        {
          id: 'u4-t1',
          name: 'Measurement of power in AC and DC circuits',
          completed: false,
          priority: 'medium',
          estimatedTime: '35 min'
        },
        {
          id: 'u4-t2',
          name: 'Dynamometer-type wattmeter',
          completed: false,
          priority: 'high',
          estimatedTime: '50 min'
        },
        {
          id: 'u4-t3',
          name: 'Single-phase induction-type energy meter',
          completed: false,
          priority: 'high',
          estimatedTime: '55 min'
        },
        {
          id: 'u4-t4',
          name: 'Two-wattmeter method',
          completed: false,
          priority: 'high',
          estimatedTime: '50 min'
        },
        {
          id: 'u4-t5',
          name: 'Low-power-factor wattmeter',
          completed: false,
          priority: 'medium',
          estimatedTime: '35 min'
        },
        {
          id: 'u4-t6',
          name: 'Low-resistance measurement methods',
          completed: false,
          priority: 'medium',
          estimatedTime: '40 min'
        },
        {
          id: 'u4-t7',
          name: "Kelvin's double bridge",
          completed: false,
          priority: 'high',
          estimatedTime: '45 min'
        },
        {
          id: 'u4-t8',
          name: "Kelvin's double bridge numericals",
          completed: false,
          priority: 'high',
          estimatedTime: '50 min'
        }
      ]
    },
    {
      id: 'unit-5',
      name: 'Unit 5 – AC Bridges',
      order: 5,
      topics: [
        {
          id: 'u5-t1',
          name: 'AC bridge fundamentals',
          completed: false,
          priority: 'medium',
          estimatedTime: '30 min'
        },
        {
          id: 'u5-t2',
          name: "Maxwell's inductance bridge",
          completed: false,
          priority: 'high',
          estimatedTime: '45 min'
        },
        {
          id: 'u5-t3',
          name: "Maxwell's capacitance bridge",
          completed: false,
          priority: 'high',
          estimatedTime: '45 min'
        },
        {
          id: 'u5-t4',
          name: 'Schering bridge',
          completed: false,
          priority: 'high',
          estimatedTime: '50 min'
        },
        {
          id: 'u5-t5',
          name: 'Wien bridge',
          completed: false,
          priority: 'high',
          estimatedTime: '45 min'
        },
        {
          id: 'u5-t6',
          name: "Hay's bridge",
          completed: false,
          priority: 'high',
          estimatedTime: '45 min'
        },
        {
          id: 'u5-t7',
          name: "D'Sauty's bridge",
          completed: false,
          priority: 'medium',
          estimatedTime: '35 min'
        },
        {
          id: 'u5-t8',
          name: "Modified D'Sauty's bridge",
          completed: false,
          priority: 'medium',
          estimatedTime: '40 min'
        },
        {
          id: 'u5-t9',
          name: 'Q-factor and dissipation factor',
          completed: false,
          priority: 'high',
          estimatedTime: '35 min'
        },
        {
          id: 'u5-t10',
          name: 'AC bridge numerical problems',
          completed: false,
          priority: 'high',
          estimatedTime: '60 min'
        }
      ]
    }
  ]
};

export const INITIAL_MATH_SUBJECT: Subject = {
  id: 'subj-math-3-22014',
  name: 'Mathematics-III',
  code: 'MA-22014 / MA-25014 / MA-27014',
  semester: '3rd Semester',
  department: 'Electronics & Instrumentation Engineering',
  icon: 'calculator',
  units: [
    {
      id: 'math-unit-1',
      name: 'Unit 1 – Partial Differential Equations (PDE)',
      order: 1,
      topics: [
        {
          id: 'm-u1-t1',
          name: 'Formation of PDE by eliminating arbitrary constants',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '40 min',
          pyqs: [
            {
              id: 'pyq-m-u1-1',
              question: 'Form the partial differential equation by eliminating arbitrary constants a and b from z = (x + a)(y + b).',
              year: 'Dec 2023',
              marks: 3,
              solved: false,
              solvedWithoutNotes: false,
              notes: 'Differentiate partially w.r.t x and y, then substitute.'
            },
            {
              id: 'pyq-m-u1-2',
              question: 'Eliminate constants a and b from z = ax + by + a^2 + b^2.',
              year: 'May 2022',
              marks: 2,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u1-t2',
          name: 'Formation of PDE by eliminating arbitrary functions',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '45 min',
          pyqs: [
            {
              id: 'pyq-m-u1-3',
              question: 'Form the PDE by eliminating arbitrary function f from z = f(x^2 + y^2).',
              year: 'Dec 2021',
              marks: 3,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u1-t3',
          name: 'Complementary Function (CF) of linear PDE',
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '50 min',
          pyqs: [
            {
              id: 'pyq-m-u1-4',
              question: 'Find the complementary function of (D^2 - 4D D\' + 4D\'^2)z = 0.',
              year: 'Dec 2023',
              marks: 5,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u1-t4',
          name: 'Particular Integral (PI) of linear PDE',
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '60 min',
          pyqs: [
            {
              id: 'pyq-m-u1-5',
              question: 'Solve (D^2 - 2D D\' + D\'^2)z = e^(x + 2y) for particular integral.',
              year: 'May 2023',
              marks: 5,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u1-t5',
          name: 'Linear PDE with constant coefficients',
          completed: false,
          priority: 'moderate',
          studyStatus: 'not_started',
          estimatedTime: '45 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u1-t6',
          name: 'Solution of PDE using operator methods',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '55 min',
          pyqs: [
            {
              id: 'pyq-m-u1-6',
              question: 'Solve (D^2 - 3D D\' + 2D\'^2)z = sin(x + 2y) by operator method.',
              year: 'Dec 2022',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u1-t7',
          name: 'One-dimensional wave equation',
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '65 min',
          pyqs: [
            {
              id: 'pyq-m-u1-7',
              question: 'Derive the general solution of the one-dimensional wave equation d^2u/dt^2 = c^2 (d^2u/dx^2).',
              year: 'Dec 2023',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u1-t8',
          name: 'Vibrating string problems',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '60 min',
          pyqs: [
            {
              id: 'pyq-m-u1-8',
              question: 'A tightly stretched string of length l with fixed ends is initially at rest in its equilibrium position. Find displacement u(x,t).',
              year: 'May 2022',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u1-t9',
          name: 'Heat equation, subject to confirmation in the current syllabus',
          completed: false,
          priority: 'moderate',
          studyStatus: 'not_started',
          estimatedTime: '45 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u1-t10',
          name: 'Separation of variables, subject to confirmation in the current syllabus',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '50 min',
          pyqs: [
            {
              id: 'pyq-m-u1-9',
              question: 'Solve 3 (du/dx) + 2 (du/dy) = 0 with u(x,0) = 4 e^(-x) by method of separation of variables.',
              year: 'Dec 2021',
              marks: 5,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        }
      ]
    },
    {
      id: 'math-unit-2',
      name: 'Unit 2 – Fourier Series and Fourier Transforms',
      order: 2,
      topics: [
        {
          id: 'm-u2-t1',
          name: 'Fourier series and Fourier coefficients',
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '60 min',
          pyqs: [
            {
              id: 'pyq-m-u2-1',
              question: 'Find the Fourier series of f(x) = x^2 in the interval (-pi, pi) and deduce that 1/1^2 + 1/2^2 + 1/3^2 + ... = pi^2 / 6.',
              year: 'Dec 2023',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u2-t2',
          name: "Dirichlet's conditions",
          completed: false,
          priority: 'moderate',
          studyStatus: 'not_started',
          estimatedTime: '30 min',
          pyqs: [
            {
              id: 'pyq-m-u2-2',
              question: "State Dirichlet's conditions for the expansion of a function in Fourier series.",
              year: 'May 2022',
              marks: 2,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u2-t3',
          name: 'Fourier series of even functions',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '45 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u2-t4',
          name: 'Fourier series of odd functions',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '45 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u2-t5',
          name: 'Half-range sine series',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '50 min',
          pyqs: [
            {
              id: 'pyq-m-u2-3',
              question: 'Obtain the half-range sine series for f(x) = x in (0, pi).',
              year: 'Dec 2022',
              marks: 5,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u2-t6',
          name: 'Half-range cosine series',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '50 min',
          pyqs: [
            {
              id: 'pyq-m-u2-4',
              question: 'Obtain the half-range cosine series for f(x) = x (pi - x) in (0, pi).',
              year: 'May 2023',
              marks: 5,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u2-t7',
          name: 'Fourier transform',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '55 min',
          pyqs: [
            {
              id: 'pyq-m-u2-5',
              question: 'Find the Fourier transform of f(x) = 1 for |x| < a and 0 for |x| > a.',
              year: 'Dec 2023',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u2-t8',
          name: 'Fourier sine transform',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '45 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u2-t9',
          name: 'Fourier cosine transform',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '45 min',
          pyqs: [
            {
              id: 'pyq-m-u2-6',
              question: 'Find the Fourier cosine transform of e^(-ax), a > 0.',
              year: 'May 2022',
              marks: 5,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u2-t10',
          name: 'Fourier integral representation',
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '60 min',
          pyqs: [
            {
              id: 'pyq-m-u2-7',
              question: 'Express f(x) = 1 for |x| <= 1 and 0 for |x| > 1 as a Fourier integral.',
              year: 'Dec 2022',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u2-t11',
          name: 'Evaluation of integrals using Fourier integral results',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '50 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        }
      ]
    },
    {
      id: 'math-unit-3',
      name: 'Unit 3 – Laplace Transforms',
      order: 3,
      topics: [
        {
          id: 'm-u3-t1',
          name: 'Laplace transform of elementary functions',
          completed: false,
          priority: 'moderate',
          studyStatus: 'not_started',
          estimatedTime: '40 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u3-t2',
          name: 'Properties of Laplace transforms',
          completed: false,
          priority: 'moderate',
          studyStatus: 'not_started',
          estimatedTime: '45 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u3-t3',
          name: 'Inverse Laplace transforms',
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '60 min',
          pyqs: [
            {
              id: 'pyq-m-u3-1',
              question: 'Find the inverse Laplace transform of (s + 2) / (s^2 + 4s + 13).',
              year: 'May 2023',
              marks: 5,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u3-t4',
          name: 'Partial fraction method',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '50 min',
          pyqs: [
            {
              id: 'pyq-m-u3-2',
              question: 'Evaluate L^-1 { (3s + 1) / ((s - 1)(s^2 + 1)) } using partial fractions.',
              year: 'Dec 2023',
              marks: 5,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u3-t5',
          name: 'Convolution theorem',
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '60 min',
          pyqs: [
            {
              id: 'pyq-m-u3-3',
              question: 'Apply convolution theorem to evaluate L^-1 { 1 / (s * (s^2 + 1)) }.',
              year: 'Dec 2022',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u3-t6',
          name: 'Unit-step functions',
          completed: false,
          priority: 'moderate',
          studyStatus: 'not_started',
          estimatedTime: '40 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u3-t7',
          name: 'Laplace transform of derivatives',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '45 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u3-t8',
          name: 'Solving differential equations using Laplace transforms',
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '65 min',
          pyqs: [
            {
              id: 'pyq-m-u3-4',
              question: 'Solve y\'\' + 4y = 9t with y(0) = 0, y\'(0) = 7 using Laplace transform.',
              year: 'Dec 2023',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u3-t9',
          name: 'Solving simultaneous differential equations using Laplace transforms',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '60 min',
          pyqs: [
            {
              id: 'pyq-m-u3-5',
              question: 'Solve dx/dt + y = 0, dy/dt - x = 0 given x(0) = 1, y(0) = 0 using Laplace transform.',
              year: 'May 2022',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        }
      ]
    },
    {
      id: 'math-unit-4',
      name: 'Unit 4 – Numerical Methods',
      order: 4,
      topics: [
        {
          id: 'm-u4-t1',
          name: 'Interpolation',
          completed: false,
          priority: 'moderate',
          studyStatus: 'not_started',
          estimatedTime: '35 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u4-t2',
          name: 'Forward difference operator',
          completed: false,
          priority: 'moderate',
          studyStatus: 'not_started',
          estimatedTime: '30 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u4-t3',
          name: 'Backward difference operator',
          completed: false,
          priority: 'moderate',
          studyStatus: 'not_started',
          estimatedTime: '30 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u4-t4',
          name: 'Difference tables',
          completed: false,
          priority: 'moderate',
          studyStatus: 'not_started',
          estimatedTime: '35 min',
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u4-t5',
          name: "Newton's forward interpolation formula",
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '55 min',
          pyqs: [
            {
              id: 'pyq-m-u4-1',
              question: "Apply Newton's forward interpolation formula to estimate y(15) from the given data: x=[10, 20, 30, 40], y=[46, 66, 81, 93].",
              year: 'May 2023',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u4-t6',
          name: "Newton's backward interpolation formula",
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '55 min',
          pyqs: [
            {
              id: 'pyq-m-u4-2',
              question: "Using Newton's backward interpolation formula, calculate the population for the year 1928 from census data 1891-1931.",
              year: 'Dec 2022',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u4-t7',
          name: 'Missing values in difference tables',
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '45 min',
          pyqs: [
            {
              id: 'pyq-m-u4-3',
              question: 'Find the missing term in the table: x=[0, 1, 2, 3, 4], y=[1, 3, 9, _, 81].',
              year: 'Dec 2023',
              marks: 5,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u4-t8',
          name: 'Trapezoidal rule',
          completed: false,
          priority: 'high',
          studyStatus: 'not_started',
          estimatedTime: '40 min',
          pyqs: [
            {
              id: 'pyq-m-u4-4',
              question: 'Evaluate integral from 0 to 1 of 1/(1+x) dx using trapezoidal rule with h = 0.25.',
              year: 'May 2022',
              marks: 5,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u4-t9',
          name: "Simpson's 1/3 rule",
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '55 min',
          pyqs: [
            {
              id: 'pyq-m-u4-5',
              question: "Evaluate integral from 0 to 6 of 1/(1+x^2) dx by Simpson's 1/3 rule taking 6 equal subintervals.",
              year: 'Dec 2023',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u4-t10',
          name: "Simpson's 3/8 rule",
          completed: false,
          priority: 'very_high',
          studyStatus: 'not_started',
          estimatedTime: '55 min',
          pyqs: [
            {
              id: 'pyq-m-u4-6',
              question: "Calculate integral from 0 to 3 of 1/(1+x) dx using Simpson's 3/8 rule with step size h = 0.5.",
              year: 'May 2023',
              marks: 7,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        },
        {
          id: 'm-u4-t11',
          name: "Weddle's rule",
          completed: false,
          priority: 'moderate',
          studyStatus: 'not_started',
          estimatedTime: '45 min',
          pyqs: [
            {
              id: 'pyq-m-u4-7',
              question: "Evaluate integral from 0 to 6 of dx/(1+x^2) by Weddle's rule with 6 intervals.",
              year: 'Dec 2021',
              marks: 5,
              solved: false,
              solvedWithoutNotes: false
            }
          ],
          numericalPractice: { attempted: 0, correct: 0, requiresRevision: 0, independentSolved: 0 }
        }
      ]
    }
  ]
};

export const INITIAL_STUDYFLOW_DATA: StudyFlowData = {
  version: 1,
  user: {
    name: 'Satyam',
    targetExam: 'Semester Examination'
  },
  subjects: [INITIAL_FOM_SUBJECT, INITIAL_MATH_SUBJECT],
  todayTasks: [
    {
      id: 'today-1',
      topicId: 'u1-t1',
      subjectId: 'subj-fom-27002',
      unitId: 'unit-1',
      title: 'Static characteristics of measuring instruments',
      subjectName: 'Fundamentals of Measurement (FOM)',
      completed: false,
      priority: 'high',
      estimatedTime: '45 min',
      addedAt: new Date().toISOString()
    },
    {
      id: 'today-2',
      topicId: 'u1-t3',
      subjectId: 'subj-fom-27002',
      unitId: 'unit-1',
      title: 'Types of measurement errors',
      subjectName: 'Fundamentals of Measurement (FOM)',
      completed: false,
      priority: 'medium',
      estimatedTime: '30 min',
      addedAt: new Date().toISOString()
    }
  ],
  activityLogs: {},
  lastUpdated: new Date().toISOString()
};

export const LOCAL_STORAGE_KEY = 'studyflow_data_v1';
export const THEME_STORAGE_KEY = 'studyflow_theme';
export const FOM_STORAGE_KEY = 'studyflow_fom_questions_v1';


