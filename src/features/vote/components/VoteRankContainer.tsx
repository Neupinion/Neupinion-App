import React from 'react';
import { StyleSheet, View, Text, ImageSourcePropType } from 'react-native';
import FullTrustVoteSvg from '../../../assets/icon/fulltrustvote.svg';
import FullDoubtVoteSvg from '../../../assets/icon/fulldoubtvote.svg';
import LittleTrustVoteSvg from '../../../assets/icon/littletrustvote.svg';
import LittleDoubtVoteSvg from '../../../assets/icon/littledoubtvote.svg';
import { WithLocalSvg } from 'react-native-svg';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';

const VoteRankContainer = () => {
  const data_dummy = [
    { name: '완전 의심', value: 56, icon: FullDoubtVoteSvg },
    { name: '조금 신뢰', value: 26, icon: LittleTrustVoteSvg },
    { name: '조금 의심', value: 10, icon: LittleDoubtVoteSvg },
    { name: '완전 신뢰', value: 9, icon: FullTrustVoteSvg },
  ];

  return (
    <View style={styles.container}>
      {data_dummy.map((item, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.leftContainer}>
            <Text style={styles.rank}>{index + 1}</Text>
            <WithLocalSvg width={36} height={36} asset={item.icon as ImageSourcePropType} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Text style={styles.value}>{item.value}%</Text>
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
});

export default VoteRankContainer;
