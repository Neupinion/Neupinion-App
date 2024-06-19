import { BubbleGradient } from '../types/bubbleGradient';

export const HighlyTrustedBubbleGradient: BubbleGradient = {
  id: 'HIGHLY_TRUSTED',
  cx: '50%',
  cy: '0%',
  r: '100%',
  stop1: {
    offset: '0%',
    stopColor: '#1C64ED',
  },
  stop2: {
    offset: '100%',
    stopColor: '#8DB4FF',
  },
};

export const SomewhatTrustedBubbleGradient: BubbleGradient = {
  id: 'SOMEWHAT_TRUSTED',
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

export const SomewhatDistrustedBubbleGradient: BubbleGradient = {
  id: 'SOMEWHAT_DISTRUST',
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

export const HighlyDistrustedEDBubbleGradient: BubbleGradient = {
  id: 'HIGHLY_DISTRUSTED',
  cx: '50%',
  cy: '0%',
  r: '100%',
  stop1: {
    offset: '0%',
    stopColor: '#9682A3',
  },
  stop2: {
    offset: '100%',
    stopColor: '#CCBBCD',
  },
};
