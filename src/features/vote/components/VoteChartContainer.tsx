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
} from '../constants/bubbleGradient';

interface VoteBubbleChartProps {
  data: TrustVoteData;
}

const getGradient = (relatablePercentage: number) => {
  if (relatablePercentage > 50) {
    return HighlyTrustedBubbleGradient;
  } else {
    return SomewhatTrustedBubbleGradient;
  }
};

const getBubbleTextStyle = (bubbleSize: number) => {
  const fontSize = bubbleSize / 12;
  return {
    fontSize,
    lineHeight: fontSize * 1.2,
  };
};

const VoteChartContainer = ({ data }: VoteBubbleChartProps) => {
  const visibleVotes = data.voteRankings.filter((voteData) => voteData.relatablePercentage > 0);
  const isFirstLarger =
    visibleVotes.length > 1 &&
    visibleVotes[0].relatablePercentage > visibleVotes[1].relatablePercentage;

  if (visibleVotes.length === 1) {
    const voteData = visibleVotes[0];
    const gradient = getGradient(voteData.relatablePercentage);

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
            <Text style={[styles.bubbleText, getBubbleTextStyle(200)]}>
              {data.voteRankings[0].stand}
            </Text>
            <Text style={[styles.bubblePercentage, getBubbleTextStyle(200)]}>
              {data.voteRankings[0].relatablePercentage}%
            </Text>
          </View>
        </View>
        <View style={styles.votePercentageContainer}>
          {data.voteRankings.map((voteData, index) => (
            <View key={index} style={styles.votePercentageItem}>
              <Text style={styles.votePercentageText}>{voteData.stand}</Text>
              <Text style={styles.votePercentageValue}>{voteData.relatablePercentage}%</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }

  const renderVoteBubbles = () => {
    return data.voteRankings.map((voteData, index) => {
      if (voteData.relatablePercentage === 0) return null;

      const bubbleSize = index === 0 ? (isFirstLarger ? 160 : 120) : isFirstLarger ? 120 : 160;
      const gradient = getGradient(voteData.relatablePercentage);

      return (
        <View key={index} style={{ margin: 14, position: 'relative' }}>
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
            <Text style={[styles.bubbleText, getBubbleTextStyle(bubbleSize)]}>
              {voteData.stand}
            </Text>
            <Text style={[styles.bubblePercentage, getBubbleTextStyle(bubbleSize)]}>
              {voteData.relatablePercentage}%
            </Text>
          </View>
        </View>
      );
    });
  };

  const renderVotePercentages = () => {
    return data.voteRankings.map((voteData, index) => (
      <View key={index} style={styles.votePercentageItem}>
        <Text style={styles.votePercentageText}>{voteData.stand}</Text>
        <Text style={styles.votePercentageValue}>{voteData.relatablePercentage}%</Text>
      </View>
    ));
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
      <View style={styles.votePercentageContainer}>{renderVotePercentages()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
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
    marginTop: 40,
    height: 200,
  },
  votePercentageContainer: {
    width: '100%',
    marginTop: 40,
  },
  votePercentageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.gray1,
    width: '100%',
  },
  votePercentageText: {
    color: theme.color.gray7,
    textAlign: 'left',
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  votePercentageValue: {
    color: theme.color.white,
    textAlign: 'right',
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
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
  },
  bubbleText: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',
  },
  bubblePercentage: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default VoteChartContainer;
