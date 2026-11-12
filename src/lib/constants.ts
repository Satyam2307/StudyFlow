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

export const INITIAL_STUDYFLOW_DATA: StudyFlowData = {
  version: 1,
  user: {
    name: 'Satyam',
    targetExam: 'Semester Examination'
  },
  subjects: [INITIAL_FOM_SUBJECT],
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

