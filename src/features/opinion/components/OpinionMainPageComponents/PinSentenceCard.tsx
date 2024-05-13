import React from 'react';
import { Dimensions, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import theme from '../../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import OpinionPin from '../../../../assets/icon/opinionpin.svg';
import fontFamily from '../../../../shared/styles/fontFamily';

interface PinSentenceCardProps {
  color: string;
}
const PinSentenceCard = ({ color }: PinSentenceCardProps) => {
  return (
    <View style={[styles.pinSentenceCard, { backgroundColor: color }]}>
      <View style={styles.pinContainer}>
        <WithLocalSvg width={20} height={20} asset={OpinionPin as ImageSourcePropType} />
      </View>
      <View style={styles.sentenceContainer}>
        <Text style={styles.sentenceText}>
          블룸버그통신 등에 따르면 22일(현지 시간) 오전 9시를 전후 로 미 워싱턴DC에 있는 펜타곤으로
          보이는 건물에서 검은 연기가 피어오르는 사진이 트위터를 통해 국내외로 빠르게 확산했다.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pinSentenceCard: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  pinContainer: {
    marginRight: 6,
  },
  sentenceContainer: {
    width: Dimensions.get('window').width - 110,
  },
  sentenceText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.gray6,
    textAlign: 'justify',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
});

export default PinSentenceCard;
