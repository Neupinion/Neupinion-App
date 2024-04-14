import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as d3 from 'd3';
import Svg, { Circle, G, Text as SVGText } from 'react-native-svg';

interface dataTypeDummy {
  name: string;
  color: string;
  value: number;
}
interface BubbleChartProps {
  height: number;
  width: number;
  data: dataTypeDummy[];
}

const BubbleChart = ({ height, width, data }: BubbleChartProps) => {
  const pack = (data) =>
    d3
      .pack()
      .size([width - 2, height - 2])
      .padding(3)(d3.hierarchy({ children: data }).sum((d) => d.value));

  const root = pack(data);

  const fontSizeGenerator = (value) => {
    let size = 0;
    if (value < 10) {
      size = 12;
    } else if (value >= 10 && value < 50) {
      size = 16;
    } else {
      size = 20;
    }
    return size;
  };

  const leaves = [];
  for (const leaf of root.leaves()) {
    leaves.push(
      <G transform={`translate(${leaf.x + 1},${leaf.y + 1})`}>
        <Circle r={leaf.r} fill={leaf.data.color} />
        <SVGText
          fill="#FFFFFF"
          fontSize={fontSizeGenerator(leaf.data.value)}
          x="0"
          y={leaf.data.value * 0.1}
          textAnchor="middle"
        >
          {leaf.data.name}
        </SVGText>
      </G>,
    );
  }

  return (
    <View style={styles.container}>
      <Svg width={width || 400} height={height || 300}>
        {leaves}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    alignSelf: 'center',
  },
});

export default BubbleChart;
