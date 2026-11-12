import { FOMQuestion, FOMNumericalProblem } from '@/types/fom';
import { UNIT_1_QUESTIONS } from './unit1';
import { UNIT_2_QUESTIONS } from './unit2';
import { UNIT_3_QUESTIONS } from './unit3';
import { UNIT_4_QUESTIONS } from './unit4';
import { UNIT_5_QUESTIONS } from './unit5';
import { FOM_NUMERICAL_PROBLEMS } from './numericals';

export { UNIT_1_QUESTIONS } from './unit1';
export { UNIT_2_QUESTIONS } from './unit2';
export { UNIT_3_QUESTIONS } from './unit3';
export { UNIT_4_QUESTIONS } from './unit4';
export { UNIT_5_QUESTIONS } from './unit5';
export { FOM_NUMERICAL_PROBLEMS } from './numericals';

export const FOM_QUESTIONS: FOMQuestion[] = [
  ...UNIT_1_QUESTIONS,
  ...UNIT_2_QUESTIONS,
  ...UNIT_3_QUESTIONS,
  ...UNIT_4_QUESTIONS,
  ...UNIT_5_QUESTIONS
];

export interface UnitInfo {
  id: number;
  name: string;
  shortName: string;
  questionCount: number;
  sevenMarkCount: number;
  threeMarkCount: number;
  twoMarkCount: number;
  numericalCount: number;
  veryHighPriorityCount: number;
}

export const FOM_UNITS_METADATA: UnitInfo[] = [
  {
    id: 1,
    name: 'Unit 1 – Fundamentals of Measurement',
    shortName: 'Unit 1: Fundamentals',
    questionCount: UNIT_1_QUESTIONS.length,
    sevenMarkCount: UNIT_1_QUESTIONS.filter(q => q.marks === 7).length,
    threeMarkCount: UNIT_1_QUESTIONS.filter(q => q.marks === 3).length,
    twoMarkCount: UNIT_1_QUESTIONS.filter(q => q.marks === 2).length,
    numericalCount: UNIT_1_QUESTIONS.filter(q => q.type === 'numerical').length,
    veryHighPriorityCount: UNIT_1_QUESTIONS.filter(q => q.priority === 'very_high').length
  },
  {
    id: 2,
    name: 'Unit 2 – CRO, CRT and Oscilloscopes',
    shortName: 'Unit 2: CRO & Oscilloscopes',
    questionCount: UNIT_2_QUESTIONS.length,
    sevenMarkCount: UNIT_2_QUESTIONS.filter(q => q.marks === 7).length,
    threeMarkCount: UNIT_2_QUESTIONS.filter(q => q.marks === 3).length,
    twoMarkCount: UNIT_2_QUESTIONS.filter(q => q.marks === 2).length,
    numericalCount: UNIT_2_QUESTIONS.filter(q => q.type === 'numerical').length,
    veryHighPriorityCount: UNIT_2_QUESTIONS.filter(q => q.priority === 'very_high').length
  },
  {
    id: 3,
    name: 'Unit 3 – Analog Measuring Instruments',
    shortName: 'Unit 3: Analog Instruments',
    questionCount: UNIT_3_QUESTIONS.length,
    sevenMarkCount: UNIT_3_QUESTIONS.filter(q => q.marks === 7).length,
    threeMarkCount: UNIT_3_QUESTIONS.filter(q => q.marks === 3).length,
    twoMarkCount: UNIT_3_QUESTIONS.filter(q => q.marks === 2).length,
    numericalCount: UNIT_3_QUESTIONS.filter(q => q.type === 'numerical').length,
    veryHighPriorityCount: UNIT_3_QUESTIONS.filter(q => q.priority === 'very_high').length
  },
  {
    id: 4,
    name: 'Unit 4 – Electrical Measurements',
    shortName: 'Unit 4: Power & Resistance',
    questionCount: UNIT_4_QUESTIONS.length,
    sevenMarkCount: UNIT_4_QUESTIONS.filter(q => q.marks === 7).length,
    threeMarkCount: UNIT_4_QUESTIONS.filter(q => q.marks === 3).length,
    twoMarkCount: UNIT_4_QUESTIONS.filter(q => q.marks === 2).length,
    numericalCount: UNIT_4_QUESTIONS.filter(q => q.type === 'numerical').length,
    veryHighPriorityCount: UNIT_4_QUESTIONS.filter(q => q.priority === 'very_high').length
  },
  {
    id: 5,
    name: 'Unit 5 – AC Bridges',
    shortName: 'Unit 5: AC Bridges',
    questionCount: UNIT_5_QUESTIONS.length,
    sevenMarkCount: UNIT_5_QUESTIONS.filter(q => q.marks === 7).length,
    threeMarkCount: UNIT_5_QUESTIONS.filter(q => q.marks === 3).length,
    twoMarkCount: UNIT_5_QUESTIONS.filter(q => q.marks === 2).length,
    numericalCount: UNIT_5_QUESTIONS.filter(q => q.type === 'numerical').length,
    veryHighPriorityCount: UNIT_5_QUESTIONS.filter(q => q.priority === 'very_high').length
  }
];
