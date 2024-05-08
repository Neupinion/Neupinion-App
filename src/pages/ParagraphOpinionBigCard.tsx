import React from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import OpinionPin from '../assets/icon/opinionpin.svg';
import next from '../assets/icon/next.svg';
import fontFamily from '../shared/styles/fontFamily';

const ParagraphOpinionBigCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pinSentenceContainer}>
        <View style={styles.pinContainer}>
          <WithLocalSvg width={20} height={20} asset={OpinionPin as ImageSourcePropType} />
        </View>
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentenceText}>
            블룸버그통신 등에 따르면 22일(현지 시간) 오전 9시를 전후 로 미 워싱턴DC에 있는
            펜타곤으로 보이는 건물에서 검은 연기가 피어오르는 사진이 트위터를 통해 국내외로 빠르게
            확산했다.
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 42, marginTop: 10, marginBottom: 30 }}>
        <Text style={styles.opinionCountText}>의견 3개</Text>
        <TouchableOpacity>
          <WithLocalSvg width={24} height={24} asset={next as ImageSourcePropType} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.color.gray4,
    width: Dimensions.get('window').width - 52,
  },
  pinSentenceContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 20,
    alignItems: 'flex-start',
    backgroundColor: theme.color.gray,
    borderRadius: 10,
  },
  pinContainer: {
    marginRight: 6,
  },
  sentenceContainer: {
    width: Dimensions.get('window').width - 110,
    // display: 'flex',
  },
  sentenceText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    textAlign: 'justify',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  opinionCountText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
});

export default ParagraphOpinionBigCard;
