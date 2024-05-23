import React from 'react';
import { Defs, Stop } from 'react-native-svg';
import { Keyword } from '../type/keyword';

interface GradientBubbleProps {
  data: Keyword[];
}

const colors: string[] = ['#1C64ED', '#868BE8', '#FF75AB', '#9682A3', '#E6E2FD'];

const ColorBubble = ({ data }: GradientBubbleProps) => {
  const renderColor = (color: string, key: string) => (
    <Stop key={key} offset="0%" stopColor={color} />
  );

  return (
    <Defs>
      {data
        .slice(0, 2)
        .map((item, index) => renderColor(colors[index % colors.length], `color-${index}`))}
    </Defs>
  );
};

export default ColorBubble;
