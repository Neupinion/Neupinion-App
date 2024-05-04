import React from 'react';
import { Defs, RadialGradient, Stop } from 'react-native-svg';
import {
  FullTrustBubbleGradient,
  FullDoubtBubbleGradient,
  LittleTrustBubbleGradient,
  LittleDoubtBubbleGradient,
} from '../constants/bubbleGradient';
import { VoteData } from '../types/bubbleChartData';
import { BubbleGradient } from '../types/bubbleGradient';

interface GradientBubbleProps {
  data: VoteData[];
}

const GradientBubble = ({ data }: GradientBubbleProps) => {
  const renderGradient = (gradient: BubbleGradient, key: string) => (
    <RadialGradient key={key} id={gradient.id} cx={gradient.cx} cy={gradient.cy} r={gradient.r}>
      <Stop offset={gradient.stop1.offset} stopColor={gradient.stop1.stopColor} />
      <Stop offset={gradient.stop2.offset} stopColor={gradient.stop2.stopColor} />
    </RadialGradient>
  );

  const getGradientFromStatus = (status: string) => {
    switch (status) {
      case '매우 의심':
        return FullDoubtBubbleGradient;
      case '약간 의심':
        return LittleDoubtBubbleGradient;
      case '약간 신뢰':
        return LittleTrustBubbleGradient;
      case '매우 신뢰':
        return FullTrustBubbleGradient;
      default:
        return FullDoubtBubbleGradient;
    }
  };

  return (
    <Defs>
      {data
        .slice(0, 2)
        .map((item, index) =>
          renderGradient(getGradientFromStatus(item.status), `gradient-${item.status}-${index}`),
        )}
    </Defs>
  );
};

export default GradientBubble;
