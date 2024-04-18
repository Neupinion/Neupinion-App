import { BubbleGradient } from '../types/bubbleGradient';

export const largestBubbleGradient: BubbleGradient = {
  id: 'gradient1',
  cx: '50%',
  cy: '0%',
  r: '100%',
  stop1: {
    offset: '17%',
    stopColor: '#F375A6',
  },
  stop2: {
    offset: '100%',
    stopColor: '#F7B5D5',
  },
};

export const secondLargestBubbleGradient: BubbleGradient = {
  id: 'gradient2',
  cx: '50%',
  cy: '0%',
  r: '100%',
  stop1: {
    offset: '0%',
    stopColor: '#4BC8C4',
  },
  stop2: {
    offset: '100%',
    stopColor: '#A8D7E0',
  },
};
