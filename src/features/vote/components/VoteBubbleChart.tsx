import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import { VoteData } from '../types/bubbleChartData';

interface BubbleChartProps {
  data: VoteData[];
}

const VoteBubbleChart = ({ data }: BubbleChartProps) => {
  const calculateAdjustedRadius = (votePercentage: number) => {
    const maxRadius = 125;
    const minRadius = 30;
    return minRadius + (maxRadius - minRadius) * (votePercentage / 100);
  };

  return (
    <View style={styles.container}>
      {data.slice(0, 2).map((item, index) => (
        <View
          key={index}
          style={[
            styles.bubble,
            {
              width: calculateAdjustedRadius(item.relatedPercentage) * 2,
              height: calculateAdjustedRadius(item.relatedPercentage) * 2,
              backgroundColor: index % 2 === 0 ? '#FFD700' : '#FF4500',
            },
          ]}
        >
          <Text style={[styles.bubbleFontStyle, { fontSize: 16 }]}>{item.stand}</Text>
          <Text style={[styles.bubbleFontStyle, { fontSize: 14 }]}>
            {item.relatedPercentage + '%'}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  bubble: {
    borderRadius: 1000, // Large number to ensure it's a perfect circle
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10, // Space between bubbles
  },
  bubbleFontStyle: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default VoteBubbleChart;
