import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import { TrustVoteData } from '../types/bubbleChartData';
import BubbleChart from './BubbleChart';
import { WINDOW_WIDTH } from '../../../shared/constants/display';

interface VoteBubbleChartProps {
  data: TrustVoteData;
}
const VoteChartContainer = ({ data }: VoteBubbleChartProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.voteResultText}>투표 결과</Text>
        <Text style={styles.mostVotedText}>
          {data.mostVotedStatus} {data.mostVotedCount.toLocaleString('ko-KR')}표
        </Text>
        <Text style={styles.totalVotedText}>
          총 투표 수: {data.totalVoteCount.toLocaleString('ko-KR')}표
        </Text>
      </View>
      <View style={styles.chartContainer}>
        <BubbleChart height={340} width={WINDOW_WIDTH - 52} data={data.voteRankings} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    height: 400,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  topContainer: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  chartContainer: {
    width: '100%',
    alignItems: 'center',
  },
  rankContainer: {
    marginTop: 32,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
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
  totalVotedButton: {
    display: 'flex',
    borderRadius: 10,
    width: 160,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: theme.color.gray3,
  },
  totalVotedButtonText: {
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    color: theme.color.white,
    textAlign: 'center',
  },
  rankTitleText: {
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    color: theme.color.white,
  },
});
export default VoteChartContainer;
