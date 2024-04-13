import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import { BubbleChartDataSet } from '../types/bubbleChartData';
interface VoteBubbleChartProps {
  data: BubbleChartDataSet;
}

const VoteChartContainer = ({ data }: VoteBubbleChartProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.voteResultText}>투표 결과</Text>
      <Text style={styles.mostVotedText}>
        {data.mostVoted} {data.mostVotedNumber}표
      </Text>
      <Text style={styles.totalVotedText}>총 투표 수: {data.totalVoted}표</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 26,
    height: 400,
    flexDirection: 'column',
  },
  voteResultText: {
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
    color: theme.color.gray6,
  },
  mostVotedText: {
    fontFamily: fontFamily.pretendard.bold,
    marginTop: 6,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.6,
    color: theme.color.white,
  },
  totalVotedText: {
    fontFamily: fontFamily.pretendard.bold,
    marginTop: 2,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    color: theme.color.gray6,
  },
});
export default VoteChartContainer;
