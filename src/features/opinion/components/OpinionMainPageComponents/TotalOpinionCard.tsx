import React, { useState } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg/css';
import FavoriteSvg from '../../../../assets/icon/favorite.svg';
import fontFamily from '../../../../shared/styles/fontFamily';
import PinSentenceCard from './PinSentenceCard';
import { formatDate } from '../../../remakeissue/constants/formatDate';
import { OpinionTotalId } from '../../../../shared/types/news';
import { WINDOW_WIDTH } from '../../../../shared/constants/display';
import updateFavorite from '../../remotes/opinion';

interface TotalOpinionCardProps {
  item: OpinionTotalId;
}
const TotalOpinionCard = ({ item }: TotalOpinionCardProps) => {
  const [favoriteClicked, setFavoriteClicked] = useState(false);
  const UpdateFavorite = async () => {
    try {
      await updateFavorite(1, item.opinionId, favoriteClicked, setFavoriteClicked);
    } catch (error) {
      console.error('좋아요 업데이트 실패:', error);
    }
  };
  // console.log(item.opinionId);
  return (
    <View style={styles.container}>
      <View style={styles.bigOpinionCard}>
        <View style={styles.bigOpinionCardTop}>
          <Image source={{ uri: item.profileImageUrl }} style={styles.cardImage} />
          <View style={{ flexDirection: 'column', marginLeft: 10, gap: 4 }}>
            <Text style={styles.userNameText}>{item.nickname}</Text>
            <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
          </View>
        </View>
        <View style={styles.bigOpinionCardMiddle}>
          {item.isReliable ? (
            <View style={styles.positivePosition}>
              <Text style={styles.positionText}>신뢰</Text>
            </View>
          ) : (
            <View style={styles.negativePosition}>
              <Text style={styles.positionText}>의심</Text>
            </View>
          )}

          <Text style={styles.userOpinionText}>{item.content}</Text>
        </View>
        <PinSentenceCard color={theme.color.gray2} paragraphContent={item.paragraphContent} />
        <View style={styles.bigOpinionCardBottom}>
          <TouchableOpacity style={{ marginRight: 4 }} onPress={() => UpdateFavorite()}>
            <WithLocalSvg width={18} height={18} asset={FavoriteSvg as ImageSourcePropType} />
          </TouchableOpacity>
          <Text style={styles.favoriteText}>{item.likeCount}</Text>
        </View>
      </View>
      <View style={styles.headerUnderLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
  },
  bigOpinionCard: {
    width: WINDOW_WIDTH - 52,
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
    color: theme.color.gray5,
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
  positivePosition: {
    width: 40,
    height: 22,
    borderRadius: 85,
    backgroundColor: theme.color.reliable,
    alignItems: 'center',
    justifyContent: 'center',
  },
  negativePosition: {
    width: 40,
    height: 22,
    borderRadius: 85,
    backgroundColor: theme.color.unReliable,
    alignItems: 'center',
    justifyContent: 'center',
  },
  positionText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.green1,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  userOpinionText: {
    fontSize: 14,
    fontFamily: fontFamily.pretendard.medium,
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
  cardImage: {
    width: 44,
    height: 44,
    borderRadius: 50,
  },
  bigOpinionCardBottom: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 24,
  },
  headerUnderLine: {
    width: WINDOW_WIDTH,
    height: 1,
    backgroundColor: theme.color.gray6,
    opacity: 0.1,
  },
});

export default TotalOpinionCard;
