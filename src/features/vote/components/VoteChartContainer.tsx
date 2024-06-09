import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import { TrustVoteData } from '../types/bubbleChartData';
import { formatNumber } from '../../../shared/utils/formatNumber';
import {
  HighlyTrustedBubbleGradient,
  SomewhatTrustedBubbleGradient,
  SomewhatDistrustedBubbleGradient,
  HighlyDistrustedEDBubbleGradient,
} from '../constants/bubbleGradient';

interface VoteBubbleChartProps {
  data: TrustVoteData;
}

const getGradient = (relatedPercentage: number) => {
  if (relatedPercentage > 75) {
    return HighlyTrustedBubbleGradient;
  } else if (relatedPercentage > 50) {
    return SomewhatTrustedBubbleGradient;
  } else if (relatedPercentage > 25) {
    return SomewhatDistrustedBubbleGradient;
  } else {
    return HighlyDistrustedEDBubbleGradient;
  }
};

const VoteChartContainer = ({ data }: VoteBubbleChartProps) => {
  const visibleVotes = data.voteRankings.filter((voteData) => voteData.relatedPercentage > 0);
  const isFirstLarger =
    visibleVotes.length > 1 &&
    visibleVotes[0].relatedPercentage > visibleVotes[1].relatedPercentage;

  if (visibleVotes.length === 1) {
    const voteData = visibleVotes[0];
    const gradient = getGradient(voteData.relatedPercentage);

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.voteResultText}>투표 결과</Text>
          <Text style={styles.mostVotedText}>
            {data.mostVotedStand} {formatNumber(data.mostVotedCount)}명 공감
          </Text>
          <Text style={styles.totalVotedText}>
            총 투표 수: {formatNumber(data.totalVoteCount)}표
          </Text>
        </View>
        <View style={styles.chartContainer}>
          <Svg height={200} width={200}>
            <Defs>
              <RadialGradient id={gradient.id} cx={gradient.cx} cy={gradient.cy} r={gradient.r}>
                <Stop offset={gradient.stop1.offset} stopColor={gradient.stop1.stopColor} />
                <Stop offset={gradient.stop2.offset} stopColor={gradient.stop2.stopColor} />
              </RadialGradient>
            </Defs>
            <Circle cx="50%" cy="50%" r="50%" fill={`url(#${gradient.id})`} />
          </Svg>
          <View style={[styles.bubbleTextContainer, { width: 200, height: 200 }]}>
            <Text style={styles.bubbleText}>{voteData.stand}</Text>
            <Text style={styles.bubblePercentage}>{voteData.relatedPercentage}%</Text>
          </View>
        </View>
      </View>
    );
  }

  const renderVoteBubbles = () => {
    return data.voteRankings.map((voteData, index) => {
      if (voteData.relatedPercentage === 0) return null;

      const bubbleSize = index === 0 ? (isFirstLarger ? 150 : 100) : isFirstLarger ? 100 : 150;

      const gradient = getGradient(voteData.relatedPercentage);

      return (
        <View key={index} style={{ margin: 14 }}>
          <Svg height={bubbleSize} width={bubbleSize}>
            <Defs>
              <RadialGradient id={gradient.id} cx={gradient.cx} cy={gradient.cy} r={gradient.r}>
                <Stop offset={gradient.stop1.offset} stopColor={gradient.stop1.stopColor} />
                <Stop offset={gradient.stop2.offset} stopColor={gradient.stop2.stopColor} />
              </RadialGradient>
            </Defs>
            <Circle cx="50%" cy="50%" r="50%" fill={`url(#${gradient.id})`} />
          </Svg>
          <View style={[styles.bubbleTextContainer, { width: bubbleSize, height: bubbleSize }]}>
            <Text style={styles.bubbleText}>{voteData.stand}</Text>
            <Text style={styles.bubblePercentage}>{voteData.relatedPercentage}%</Text>
          </View>
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
  bubbleTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bubbleText: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  bubblePercentage: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default VoteChartContainer;
