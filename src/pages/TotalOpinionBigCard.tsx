import React from 'react';
import { Dimensions, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from '../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import BookMarkSvg from '../assets/icon/bookmark.svg';
import OpinionPin from '../assets/icon/opinionpin.svg';
import FavoriteSvg from '../assets/icon/favorite.svg';
import fontFamily from '../shared/styles/fontFamily';

const TotalOpinionBigCard = () => {
  const UpdateFavorite = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.bigOpinionCardTop}>
        <WithLocalSvg width={44} height={44} asset={BookMarkSvg as ImageSourcePropType} />
        <View style={{ flexDirection: 'column', marginLeft: 10, gap: 4 }}>
          <Text style={styles.userNameText}>미니앤슈</Text>
          <Text style={styles.dateText}>2024년 3월 5일 21:00</Text>
        </View>
      </View>
      <View style={styles.positionIndicator}>
        <Text style={styles.positionText}>신뢰</Text>
      </View>
      <Text style={styles.userOpinionText}>
        최초로 게시된 곳이 공신력 있는 매체가 아니고 트위터라서 신뢰도가 떨어지는 듯.
      </Text>
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
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <TouchableOpacity style={{ marginRight: 4 }} onPress={() => UpdateFavorite()}>
          {/*<WithLocalSvg width={18} height={18} asset={FavoriteSvg as ImageSourcePropType} />*/}
        </TouchableOpacity>
        <Text style={styles.sentenceText}>2,000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.color.gray4,
    width: Dimensions.get('window').width - 52,
  },
  bigOpinionCardTop: {
    flexDirection: 'row',
    marginTop: 3,
  },
  userNameText: {
    fontSize: 15,
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22.5,
    letterSpacing: -0.45,
  },
  dateText: {
    fontSize: 12,
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.gray6,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  positionIndicator: {
    width: 40,
    height: 22,
    borderRadius: 85,
    backgroundColor: '#224A24',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 13,
    //paddingVertical: 1,
    //paddingHorizontal: 9,
  },
  positionText: {
    fontFamily: fontFamily.pretendard.bold,
    color: '#E0FFE5',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: -0.36,
  },
  userOpinionText: {
    fontSize: 14,
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  pinSentenceContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 20,
    alignItems: 'flex-start',
    marginTop: 4,
    backgroundColor: '#212A3C',
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
});

export default TotalOpinionBigCard;
