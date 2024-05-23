import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as d3 from 'd3';
import Svg, { Circle } from 'react-native-svg';
import fontFamily from '../../../shared/styles/fontFamily';
import theme from '../../../shared/styles/theme';
import { getFillForBubble } from '../constants/bubbleColor';
import { getBubbleNameSize } from '../function/getBubbleFontSize';
import { Keyword } from '../type/keyword';
import ColorBubble from './ColorBubble';

interface ReportBubbleChartProps {
  height: number;
  width: number;
  data: Keyword[];
}

const ReportBubbleChart = ({ height, width, data }: ReportBubbleChartProps) => {
  const sortedData = [...data].sort((a, b) => b.value - a.value);
  const pack = (data: Keyword[]) =>
    d3.pack<Keyword>().size([width, height]).padding(0)(
      d3.hierarchy<Keyword>({ children: data } as Keyword).sum((d) => d.value),
    );
  const root = pack(sortedData);

  const bubbles = root.leaves().filter((leaf) => leaf.data.value > 0);

  const rotationAngle = Math.PI / 4;

  const bubbleX: number[] = [];
  const bubbleY: number[] = [];

  bubbles.forEach((leaf: d3.HierarchyCircularNode<Keyword>) => {
    const angle = Math.atan2(leaf.y - height / 2, leaf.x - width / 2) + rotationAngle;
    const distance = Math.sqrt((leaf.x - width / 2) ** 2 + (leaf.y - height / 2) ** 2);
    bubbleX.push(width / 2 + Math.cos(angle) * distance);
    bubbleY.push(height / 2 + Math.sin(angle) * distance);
  });

  const calculateAdjustedRadius = (votePercentage: number) => {
    const maxRadius = 125;
    const minRadius = 30;
    return minRadius + (maxRadius - minRadius) * (votePercentage / 100);
  };

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        <ColorBubble data={data} />
        {bubbles.map((leaf, index) => (
          <React.Fragment key={index}>
            <Circle
              cx={bubbleX[index]}
              cy={bubbleY[index]}
              r={calculateAdjustedRadius(leaf.data.value)}
              fill={getFillForBubble(index)}
            />
            <View
              style={[
                styles.textContainer,
                {
                  left: bubbleX[index] - leaf.r,
                  top: bubbleY[index] - leaf.r / 4,
                  width: leaf.r * 2,
                  height: leaf.r / 2,
                },
              ]}
            >
              <Text
                style={[styles.bubbleFontStyle, { fontSize: getBubbleNameSize(leaf.data.value) }]}
              >
                {leaf.data.keyword}
              </Text>
            </View>
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

export default ReportBubbleChart;
