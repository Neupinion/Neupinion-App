import React from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import BookMarkSvg from '../../../../assets/icon/bookmark.svg';
import FavoriteSvg from '../../../../assets/icon/favorite.svg';
import fontFamily from '../../../../shared/styles/fontFamily';
import PinSentenceCard from './PinSentenceCard';

const TotalOpinionCard = () => {
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
      <View style={styles.bigOpinionCardMiddle}>
        <View style={styles.positionIndicator}>
          <Text style={styles.positionText}>신뢰</Text>
        </View>
        <Text style={styles.userOpinionText}>
          최초로 게시된 곳이 공신력 있는 매체가 아니고 트위터라서 신뢰도가 떨어지는 듯.
        </Text>
      </View>
      <PinSentenceCard color="#212A3C" />
      <View style={{ flexDirection: 'row', marginVertical: 21 }}>
        <TouchableOpacity style={{ marginRight: 4 }} onPress={() => UpdateFavorite()}>
          <WithLocalSvg width={18} height={18} asset={FavoriteSvg as ImageSourcePropType} />
        </TouchableOpacity>
        <Text style={styles.favoriteText}>2,000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    color: '#71788F',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  bigOpinionCardMiddle: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 20,
  },
  positionIndicator: {
    width: 40,
    height: 22,
    borderRadius: 85,
    backgroundColor: '#1C64ED', // #FF75AB = 의심일 떄
    alignItems: 'center',
    justifyContent: 'center',
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
    flexShrink: 1,
  },
  favoriteText: {
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

export default TotalOpinionCard;
