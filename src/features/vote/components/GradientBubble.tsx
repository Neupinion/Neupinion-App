import React from 'react';
import { Defs, RadialGradient, Stop } from 'react-native-svg';
import { largestBubbleGradient, secondLargestBubbleGradient } from '../constants/bubbleGradient';

const GradientBubble = () => {
  return (
    <Defs>
      <RadialGradient
        id={largestBubbleGradient.id}
        cx={largestBubbleGradient.cx}
        cy={largestBubbleGradient.cy}
        r={largestBubbleGradient.r}
      >
        <Stop
          offset={largestBubbleGradient.stop1.offset}
          stopColor={largestBubbleGradient.stop1.stopColor}
        />
        <Stop
          offset={largestBubbleGradient.stop2.offset}
          stopColor={largestBubbleGradient.stop2.stopColor}
        />
      </RadialGradient>
      <RadialGradient
        id={secondLargestBubbleGradient.id}
        cx={secondLargestBubbleGradient.cx}
        cy={secondLargestBubbleGradient.cy}
        r={secondLargestBubbleGradient.r}
      >
        <Stop
          offset={secondLargestBubbleGradient.stop1.offset}
          stopColor={secondLargestBubbleGradient.stop1.stopColor}
        />
        <Stop
          offset={secondLargestBubbleGradient.stop2.offset}
          stopColor={secondLargestBubbleGradient.stop2.stopColor}
        />
      </RadialGradient>
    </Defs>
  );
};

export default GradientBubble;
