import { BubbleGradient } from '../types/bubbleGradient';

export const FullTrustBubbleGradient: BubbleGradient = {
  id: 'FullTrust',
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

export const LittleTrustBubbleGradient: BubbleGradient = {
  id: 'LittleTrust',
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

export const FullDoubtBubbleGradient: BubbleGradient = {
  id: 'FullDoubt',
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

export const LittleDoubtBubbleGradient: BubbleGradient = {
  id: 'LittleDoubt',
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
