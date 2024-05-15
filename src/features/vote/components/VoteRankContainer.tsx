import React from 'react';
import { StyleSheet, View, Text, ImageSourcePropType } from 'react-native';
import { WithLocalSvg } from 'react-native-svg/css';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import { VoteData } from '../types/bubbleChartData';
import { getRankColor, getRankIcon } from '../constants/rankConstants';

interface VoteRankContainerProps {
  data: VoteData[];
}

const VoteRankContainer = ({ data }: VoteRankContainerProps) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.leftContainer}>
            <Text style={styles.rank}>{index + 1}</Text>
            <WithLocalSvg
              width={36}
              height={36}
              asset={getRankIcon(index, item.status) as ImageSourcePropType}
            />
            <Text style={styles.name}>{item.status}</Text>
          </View>
          <View style={styles.valueContainer}>
            <View
              style={[styles.colorBox, { backgroundColor: getRankColor(index, item.status) }]}
            />
            <Text style={styles.value}>{item.votePercentage}%</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.gray1,
    width: '100%',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rank: {
    color: theme.color.gray7,
    textAlign: 'center',
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  name: {
    color: theme.color.gray7,
    textAlign: 'center',
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  value: {
    color: theme.color.white,
    textAlign: 'right',
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  colorBox: {
    width: 8,
    height: 8,
    justifyContent: 'center',
  },
  valueContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VoteRankContainer;
