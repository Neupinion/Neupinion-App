import React, { memo, useMemo, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as d3 from 'd3';
import Svg, { Circle } from 'react-native-svg';
import fontFamily from '../../../shared/styles/fontFamily';
import theme from '../../../shared/styles/theme';
import { colorsBubble, getFillForBubble, shuffleArray } from '../constants/bubbleColor';
import { KeywordNode } from '../type/keyword';
import ColorBubble from './ColorBubble';
import { KEYWORD_BUBBLE_FONT_SIZE } from '../constants/bubbleFontSize';

interface ReportBubbleChartProps {
  height: number;
  width: number;
  data: KeywordNode[];
}

const ReportBubbleChart = ({ height, width, data }: ReportBubbleChartProps) => {
  const colorsRef = useRef(shuffleArray(colorsBubble));

  const { bubbles, bubbleX, bubbleY } = useMemo(() => {
    const sortedData = [...data].sort((a, b) => b.value - a.value);

    const pack = (data: KeywordNode[]) =>
      d3.pack<KeywordNode>().size([width, height]).padding(0)(
        d3.hierarchy<KeywordNode>({ children: data } as KeywordNode).sum((d) => d.value),
      );
    const root = pack(sortedData);

    const bubbles = root.leaves().filter((leaf) => leaf.data.value > 0);

    const rotationAngle = Math.PI / 4;

    const bubbleX: number[] = [];
    const bubbleY: number[] = [];

    bubbles.forEach((leaf: d3.HierarchyCircularNode<KeywordNode>) => {
      const angle = Math.atan2(leaf.y - height / 2, leaf.x - width / 2) + rotationAngle;
      const distance = Math.sqrt((leaf.x - width / 2) ** 2 + (leaf.y - height / 2) ** 2) + 10;
      bubbleX.push(width / 2 + Math.cos(angle) * distance);
      bubbleY.push(height / 2 + Math.sin(angle) * distance);
    });

    return { bubbles, bubbleX, bubbleY };
  }, [data, height, width]);

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
              fill={getFillForBubble(index, colorsRef.current)}
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
              <Text style={[styles.bubbleFontStyle, { fontSize: KEYWORD_BUBBLE_FONT_SIZE }]}>
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
    display: 'flex',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default memo(ReportBubbleChart);
