import iconA from './ColumnsBlock/icons/two-half-columns.svg';
import iconB from './ColumnsBlock/icons/one-third-left.svg';
import iconC from './ColumnsBlock/icons/one-third-right.svg';
import iconD from './ColumnsBlock/icons/three-third-columns.svg';
import iconE from './ColumnsBlock/icons/three-columns.svg';
import iconF from './ColumnsBlock/icons/four-quarter-columns.svg';
import iconG from './ColumnsBlock/icons/full-column.svg';

export const gridSizes = {
  full: {
    mobile: 12,
    tablet: 12,
    computer: 12,
  },
  halfWidth: {
    mobile: 12,
    tablet: 6,
    computer: 6,
  },
  twoThirds: {
    mobile: 12,
    tablet: 8,
    computer: 8,
  },
  oneThird: {
    mobile: 12,
    tablet: 4,
    computer: 4,
  },
  halfWidthBig: {
    mobile: 12,
    tablet: 8,
    computer: 6,
  },
  oneThirdSmall: {
    mobile: 12,
    tablet: 2,
    computer: 3,
  },
  oneQuarter: {
    mobile: 12,
    tablet: 6,
    computer: 3,
  },
  oneFifth: {
    mobile: 12,
    tablet: 2,
    computer: 3,
  },
  fourFifths: {
    mobile: 12,
    tablet: 10,
    computer: 9,
  },
  twoFifths: {
    mobile: 12,
    tablet: 10,
    computer: 7,
  },
  threeFifths: {
    mobile: 12,
    tablet: 10,
    computer: 5,
  },
};

export const variants = [
  {
    icon: iconA,
    defaultData: {
      gridSize: 12,
      gridCols: ['halfWidth', 'halfWidth'],
    },
    title: '50 / 50',
  },
  {
    icon: iconB,
    defaultData: {
      gridSize: 12,
      gridCols: ['oneFifth', 'fourFifths'],
    },
    title: '20 / 80',
  },
  {
    icon: iconB,
    defaultData: {
      gridSize: 12,
      gridCols: ['oneThird', 'twoThirds'],
    },
    title: '30 / 70',
  },
  {
    icon: iconC,
    defaultData: {
      gridSize: 12,
      gridCols: ['twoThirds', 'oneThird'],
    },
    title: '70 / 30',
  },
  {
    icon: iconC,
    defaultData: {
      gridSize: 12,
      gridCols: ['fourFifths', 'oneFifth'],
    },
    title: '80 / 20',
  },
  {
    icon: iconD,
    defaultData: {
      gridSize: 12,
      gridCols: ['oneThird', 'oneThird', 'oneThird'],
    },
    title: '33 / 33 / 33',
  },
  {
    icon: iconE,
    defaultData: {
      gridSize: 12,
      gridCols: ['oneThirdSmall', 'halfWidthBig', 'oneThirdSmall'],
    },
    title: '25 / 50 / 25',
  },
  {
    icon: iconF,
    defaultData: {
      gridSize: 12,
      gridCols: ['oneQuarter', 'oneQuarter', 'oneQuarter', 'oneQuarter'],
    },
    title: '25 / 25 / 25 / 25',
  },
  {
    icon: iconG,
    defaultData: {
      gridSize: 12,
      gridCols: ['full'],
    },
    title: '100',
  },
  {
    icon: iconC,
    defaultData: {
      gridSize: 12,
      gridCols: ['threeFifths', 'twoFifths'],
    },
    title: '60 / 40',
  },
];
