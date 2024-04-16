import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as d3 from 'd3';
import Svg, { Circle, G, Text as SVGText, Defs, RadialGradient, Stop } from 'react-native-svg';

interface DataTypeDummy {
  name: string;
  value: number;
  children?: DataTypeDummy[];
}

interface BubbleChartProps {
  height: number;
  width: number;
  data: DataTypeDummy[];
}

const BubbleChart = ({ height, width, data }: BubbleChartProps) => {
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  const pack = (data: DataTypeDummy[]) =>
    d3.pack<DataTypeDummy>().size([width, height]).padding(3)(
      d3.hierarchy<DataTypeDummy>({ children: data } as DataTypeDummy).sum((d) => d.value),
    );
  const root = pack(sortedData);

  const fontSizeGenerator = (value: number) => {
    if (value < 10) {
      return 12;
    } else if (value >= 10 && value < 50) {
      return 16;
    } else {
      return 20;
    }
  };

  const leaves = root.leaves();
  const rotationAngle = Math.PI / 4;

  const newXs: number[] = [];
  const newYs: number[] = [];

  leaves.forEach((leaf: d3.HierarchyCircularNode<DataTypeDummy>) => {
    const angle = Math.atan2(leaf.y - height / 2, leaf.x - width / 2) + rotationAngle;
    const distance = Math.sqrt((leaf.x - width / 2) ** 2 + (leaf.y - height / 2) ** 2);
    newXs.push(width / 2 + Math.cos(angle) * distance);
    newYs.push(height / 2 + Math.sin(angle) * distance);
  });

  const colors = ['url(#gradient1)', 'url(#gradient2)', '#9682A3', '#1C64ED'];

  const positionedLeaves = leaves.map((leaf, index) => {
    const x = newXs[index];
    const y = newYs[index];

    return (
      <G key={index} transform={`translate(${x},${y})`}>
        <Circle r={leaf.r - 10} fill={colors[index % colors.length]} />
        {index < leaves.length - 2 && (
          <SVGText
            fill="#FFFFFF"
            fontSize={fontSizeGenerator(leaf.data.value)}
            x="0"
            y={leaf.data.value * 0.1}
            textAnchor="middle"
          >
            {leaf.data.name}
          </SVGText>
        )}
      </G>
    );
  });

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        <Defs>
          <RadialGradient id="gradient1" cx="50%" cy="0%" r="100%">
            <Stop offset="17%" stopColor="#F375A6" />
            <Stop offset="100%" stopColor="#F7B5D5" />
          </RadialGradient>
          <RadialGradient id="gradient2" cx="50%" cy="0%" r="100%">
            <Stop offset="0%" stopColor="#4BC8C4" />
            <Stop offset="100%" stopColor="#A8D7E0" />
          </RadialGradient>
        </Defs>
        {positionedLeaves}
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
});

export default BubbleChart;
