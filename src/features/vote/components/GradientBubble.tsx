import React from 'react';
import { Defs, RadialGradient, Stop } from 'react-native-svg';
import {
  FullTrustBubbleGradient,
  FullDoubtBubbleGradient,
  LittleTrustBubbleGradient,
  LittleDoubtBubbleGradient,
} from '../constants/bubbleGradient';
import { BubbleGradient } from '../types/bubbleGradient';

const GradientBubble = () => {
  const renderGradient = (gradient: BubbleGradient) => (
    <RadialGradient id={gradient.id} cx={gradient.cx} cy={gradient.cy} r={gradient.r}>
      <Stop offset={gradient.stop1.offset} stopColor={gradient.stop1.stopColor} />
      <Stop offset={gradient.stop2.offset} stopColor={gradient.stop2.stopColor} />
    </RadialGradient>
  );

  return (
    <Defs>
      {renderGradient(FullTrustBubbleGradient)}
      {renderGradient(FullDoubtBubbleGradient)}
    </Defs>
  );
};

export default GradientBubble;
