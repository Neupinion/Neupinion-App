import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg/css';
import FavoriteSvg from '../../../../assets/icon/favorite.svg';
import fontFamily from '../../../../shared/styles/fontFamily';
import PinSentenceCard from './PinSentenceCard';
import { OpinionParagraphId } from '../../../../shared/types/news';
import { formatDate } from '../../../remakeissue/constants/formatDate';

interface TotalOpinionCardProps {
  item: OpinionParagraphId;
}
const TotalOpinionCard = ({ item }: TotalOpinionCardProps) => {
  // console.log('opinionParagraph:', opinionParagraph.opinions[0].nickname);
  const UpdateFavorite = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.bigOpinionCardTop}>
        <Image source={{ uri: item.opinions[0].profileImageUrl }} style={styles.cardImage} />
        <View style={{ flexDirection: 'column', marginLeft: 10, gap: 4 }}>
          <Text style={styles.userNameText}>{item.opinions[0].nickname}</Text>
          <Text style={styles.dateText}>{formatDate(item.opinions[0].createdAt)}</Text>
        </View>
      </View>
      <View style={styles.bigOpinionCardMiddle}>
        <View style={styles.positionIndicator}>
          <Text style={styles.positionText}>{item.opinions[0].isReliable ? '신뢰' : '의심'}</Text>
        </View>
        <Text style={styles.userOpinionText}>{item.opinions[0].content}</Text>
      </View>
      <PinSentenceCard color="#212A3C" paragraphContent={item.opinions[0].paragraphContent} />
      <View style={{ flexDirection: 'row', marginVertical: 21 }}>
        <TouchableOpacity style={{ marginRight: 4 }} onPress={() => UpdateFavorite()}>
          <WithLocalSvg width={18} height={18} asset={FavoriteSvg as ImageSourcePropType} />
        </TouchableOpacity>
        <Text style={styles.favoriteText}>{item.opinions[0].likeCount}</Text>
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
  cardImage: {
    width: 44,
    height: 44,
    borderRadius: 50,
  },
});

export default TotalOpinionCard;
