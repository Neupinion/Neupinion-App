import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, Line, Text as SvgText } from 'react-native-svg';
import { TotalTrustVoteData } from '../../../dummy/TotalVotedDataDummy';
import fontFamily from '../../../shared/styles/fontFamily';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
import theme from '../../../shared/styles/theme';

interface BarGraphProps {
  data: TotalTrustVoteData;
}

const BarGraph = ({ data }: BarGraphProps) => {
  const barWidth = 24;
  const barHeight = 153;
  const chartHeight = 190;
  const xOffset = 38;
  const yOffset = 12;
  const chartWidth = WINDOW_WIDTH - 52;
  const numberOfBars = data.voteRankings.length;

  const totalBarsWidth = numberOfBars * barWidth;
  const totalAvailableWidth = chartWidth - totalBarsWidth;
  const spaceBetweenBars = totalAvailableWidth / (numberOfBars + 1);

  return (
    <View style={styles.container}>
      <Svg height={chartHeight} width={WINDOW_WIDTH - 52}>
        {[0, 25, 50, 75, 100].map((percent, index) => (
          <React.Fragment key={index}>
            <Line
              x1={xOffset}
              x2={chartWidth - 10}
              y1={chartHeight - (chartHeight - 37) * (percent / 100) - 10 - yOffset}
              y2={chartHeight - (chartHeight - 37) * (percent / 100) - 10 - yOffset}
              stroke={theme.color.gray3}
              strokeWidth={1}
            />
            <SvgText
              x={0}
              y={chartHeight - (chartHeight - 37) * (percent / 100) - 5 - yOffset}
              fontFamily={fontFamily.pretendard.medium}
              fontSize="12"
              fontStyle="normal"
              fontWeight="500"
              fill={theme.color.gray5}
            >
              {`${percent}%`}
            </SvgText>
          </React.Fragment>
        ))}
        {data.voteRankings.map((item, index) => {
          const trustHeight = (item.trust / 100) * barHeight;
          const doubtHeight = (item.doubt / 100) * barHeight;

          return (
            <React.Fragment key={index}>
              <Rect
                x={
                  xOffset - spaceBetweenBars / 2 + (index + 1) * spaceBetweenBars + index * barWidth
                }
                y={chartHeight - trustHeight - 10 - yOffset}
                width={barWidth}
                height={trustHeight}
                fill={theme.trustColor.fullyTrust}
              />
              <Rect
                x={
                  xOffset - spaceBetweenBars / 2 + (index + 1) * spaceBetweenBars + index * barWidth
                }
                y={chartHeight - barHeight - 10 - yOffset}
                width={barWidth}
                height={doubtHeight}
                fill={theme.trustColor.fullyDoubt}
              />
              <SvgText
                x={
                  xOffset -
                  spaceBetweenBars / 2 +
                  (index + 1) * spaceBetweenBars +
                  index * barWidth +
                  barWidth / 2
                }
                y={chartHeight - 2}
                fontSize="12"
                fontFamily={fontFamily.pretendard.medium}
                fontStyle="normal"
                fontWeight="500"
                fill={theme.color.gray6}
                textAnchor="middle"
              >
                {item.issueOrder}
              </SvgText>
            </React.Fragment>
          );
        })}
      </Svg>
      <View style={styles.bottomContainer}>
        <View style={styles.doubtCircle} />
        <Text style={styles.textStyle}>의심</Text>
        <View style={{ marginLeft: 18 }}></View>
        <View style={styles.trustCircle} />
        <Text style={styles.textStyle}>신뢰</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 233,
    marginTop: 12,
  },
  bottomContainer: {
    width: WINDOW_WIDTH - 52,
    height: 18,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  doubtCircle: {
    width: 8,
    height: 8,
    backgroundColor: theme.trustColor.fullyDoubt,
    borderRadius: 8,
  },
  textStyle: {
    marginLeft: 6,
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.48,
    color: theme.color.gray5,
  },
  trustCircle: {
    width: 8,
    height: 8,
    backgroundColor: theme.trustColor.fullyTrust,
    borderRadius: 8,
  },
});

export default BarGraph;
