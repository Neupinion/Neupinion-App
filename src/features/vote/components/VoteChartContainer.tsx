import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import { TrustVoteData } from '../types/bubbleChartData';
import { formatNumber } from '../../../shared/utils/formatNumber';

interface VoteBubbleChartProps {
  data: TrustVoteData;
}

const VoteChartContainer = ({ data }: VoteBubbleChartProps) => {
  const isFirstLarger =
    data.voteRankings[0].relatedPercentage > data.voteRankings[1].relatedPercentage;

  const renderVoteBubbles = () => {
    return data.voteRankings.map((voteData, index) => {
      const bubbleStyle =
        index === 0
          ? isFirstLarger
            ? styles.bubbleLarge
            : styles.bubbleSmall
          : isFirstLarger
            ? styles.bubbleSmall
            : styles.bubbleLarge;

      return (
        <View key={index} style={bubbleStyle}>
          <Text style={styles.bubbleText}>{voteData.stand}</Text>
          <Text style={styles.bubblePercentage}>{voteData.relatedPercentage}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.voteResultText}>투표 결과</Text>
        <Text style={styles.mostVotedText}>
          {data.mostVotedStand} {formatNumber(data.mostVotedCount)}명 공감
        </Text>
        <Text style={styles.totalVotedText}>총 투표 수: {formatNumber(data.totalVoteCount)}표</Text>
      </View>
      <View style={styles.chartContainer}>{renderVoteBubbles()}</View>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
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
    color: theme.color.white,
  },
  bubbleSmall: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.color.unReliable,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 14,
  },
  bubbleLarge: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: theme.color.reliable,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 14,
  },
  bubbleText: {
    color: theme.color.white,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  bubblePercentage: {
    color: theme.color.white,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default VoteChartContainer;


