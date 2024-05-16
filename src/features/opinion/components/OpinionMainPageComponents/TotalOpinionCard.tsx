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
  leftMainCategory: string;
  rightMainCategory: string;
}
interface Opinion {
  profileImageUrl: string;
  nickname: string;
  createdAt: string;
  isReliable: boolean;
  content: string;
  paragraphContent: string;
  likeCount: number;
}
const TotalOpinionCard = ({ item, leftMainCategory,rightMainCategory }: TotalOpinionCardProps) => {
  const UpdateFavorite = () => {};
  const renderOpinions = () => {
    switch (leftMainCategory) {
      case '전체':
        return renderAllOpinions();
      case '신뢰':
        return renderReliableOpinions();
      case '의심':
        return renderDoubtfulOpinions();
      default:
        return null;
    }
  };

  const renderAllOpinions = () => {
    return item.opinions.map((opinion, index) => renderOpinion(opinion, index));
  };

  const renderReliableOpinions = () => {
    return item.opinions
      .filter((opinion) => opinion.isReliable)
      .map((opinion, index) => renderOpinion(opinion, index));
  };

  const renderDoubtfulOpinions = () => {
    return item.opinions
      .filter((opinion) => !opinion.isReliable)
      .map((opinion, index) => renderOpinion(opinion, index));
  };

  const renderOpinion = (opinion: Opinion, index: number) => {
    return (
      <View key={index}>
        <View style={styles.bigOpinionCardTop}>
          <Image source={{ uri: opinion.profileImageUrl }} style={styles.cardImage} />
          <View style={{ flexDirection: 'column', marginLeft: 10, gap: 4 }}>
            <Text style={styles.userNameText}>{opinion.nickname}</Text>
            <Text style={styles.dateText}>{formatDate(opinion.createdAt)}</Text>
          </View>
        </View>
        <View style={styles.bigOpinionCardMiddle}>
          <View style={styles.positionIndicator}>
            <Text style={styles.positionText}>{opinion.isReliable ? '신뢰' : '의심'}</Text>
          </View>
          <Text style={styles.userOpinionText}>{opinion.content}</Text>
        </View>
        <PinSentenceCard color="#212A3C" paragraphContent={opinion.paragraphContent} />
        <View style={{ flexDirection: 'row', marginVertical: 21 }}>
          <TouchableOpacity style={{ marginRight: 4 }} onPress={() => UpdateFavorite()}>
            <WithLocalSvg width={18} height={18} asset={FavoriteSvg as ImageSourcePropType} />
          </TouchableOpacity>
          <Text style={styles.favoriteText}>{opinion.likeCount}</Text>
        </View>
      </View>
    );
  };
  return <View style={styles.container}>{renderOpinions()}</View>;
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
});

export default TotalOpinionCard;
