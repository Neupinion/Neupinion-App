import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as d3 from 'd3';
import Svg, { Circle } from 'react-native-svg';
import fontFamily from '../../../shared/styles/fontFamily';
import theme from '../../../shared/styles/theme';
import GradientBubble from './GradientBubble';
import { bubbleColors } from '../constants/bubbleColor';
import { getBubbleNameSize, getBubbleValueSize } from '../functions/fontSize';
import { BUBBLE_DISTANCE, BUBBLE_SIZE_RATIO } from '../constants/bubbleConstants';
import { DataTypeDummy } from '../types/bubbleGradient';

interface BubbleChartProps {
  height: number;
  width: number;
  data: DataTypeDummy[];
}

const BubbleChart = ({ height, width, data }: BubbleChartProps) => {
  const sortedData = [...data].sort((a, b) => b.value - a.value);
  const pack = (data: DataTypeDummy[]) =>
    d3.pack<DataTypeDummy>().size([width, height]).padding(0)(
      d3.hierarchy<DataTypeDummy>({ children: data } as DataTypeDummy).sum((d) => d.value),
    );
  const root = pack(sortedData);

  const bubbles = root.leaves();
  const rotationAngle = Math.PI / 4;

  const bubbleX: number[] = [];
  const bubbleY: number[] = [];

  bubbles.forEach((leaf: d3.HierarchyCircularNode<DataTypeDummy>) => {
    const angle = Math.atan2(leaf.y - height / 2, leaf.x - width / 2) + rotationAngle;
    const distance = Math.sqrt((leaf.x - width / 2) ** 2 + (leaf.y - height / 2) ** 2);
    bubbleX.push(width / 2 + Math.cos(angle) * distance);
    bubbleY.push(height / 2 + Math.sin(angle) * distance);
  });

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        <GradientBubble />
        {bubbles.map((leaf, index) => (
          <React.Fragment key={index}>
            <Circle
              cx={bubbleX[index]}
              cy={bubbleY[index]}
              r={leaf.r * BUBBLE_SIZE_RATIO - BUBBLE_DISTANCE}
              fill={bubbleColors[index % bubbleColors.length]}
            />
            {index < 2 && (
              <View
                style={[
                  styles.textContainer,
                  {
                    left: bubbleX[index] - leaf.r / 2,
                    top: bubbleY[index] - leaf.r / 4,
                    width: leaf.r,
                    height: leaf.r / 2,
                  },
                ]}
              >
                <Text
                  style={[styles.bubbleFontStyle, { fontSize: getBubbleNameSize(leaf.data.value) }]}
                >
                  {leaf.data.name}
                </Text>
                <Text
                  style={[
                    styles.bubbleFontStyle,
                    { fontSize: getBubbleValueSize(leaf.data.value) },
                  ]}
                >
                  {leaf.data.value + '%'}
                </Text>
              </View>
            )}
          </React.Fragment>
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleFontStyle: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default BubbleChart;
