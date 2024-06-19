import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import theme from '../../styles/theme';
import { WithLocalSvg } from 'react-native-svg/css';
import Pin from '../../../assets/icon/pin.svg';
import fontFamily from '../../styles/fontFamily';
import { Opinion } from '../../../features/vote/types/opinion';
import { useModal } from '../../hooks/useModal';
import OpinionWriteBottomSheet from '../../../features/opinion/components/OpinionWriteBottomSheet';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../rootStackParamList';
import FavoriteFullSvg from '../../../assets/icon/favoritefull.svg';
import FavoriteSvg from '../../../assets/icon/favorite.svg';

interface OpinionPaperProps {
  navigation: StackNavigationProp<RootStackParamList>;
  issueId: number;
  opinion: Opinion;
}

const OpinionPaper = ({ navigation, issueId, opinion }: OpinionPaperProps) => {
  const { openModal, closeModal } = useModal();

  const onClickOpinion = () => {
    openModal(
      <OpinionWriteBottomSheet
        navigation={navigation}
        issueId={issueId}
        opinionWrite={opinion}
        onClose={closeModal}
        isOwner={false}
      />,
    );
  };

  return (
    <TouchableOpacity onPress={onClickOpinion} style={styles.card}>
      <View style={styles.triangle} />
      <View style={styles.contentContainer}>
        <View style={styles.cardTop}>
          <View style={styles.pin}>
            <WithLocalSvg width={20} height={20} asset={Pin as ImageSourcePropType} />
          </View>
          <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
            {opinion.paragraphContent}
          </Text>
        </View>
        <View style={styles.dotLine} />
        <View style={styles.cardBottom}>
          <View
            style={[
              styles.tagContainer,
              {
                backgroundColor: opinion.isReliable
                  ? theme.trustColor.fullyTrust
                  : theme.trustColor.fullyDoubt,
              },
            ]}
          >
            <Text style={styles.tagText}>{opinion.isReliable ? '신뢰' : '의심'}</Text>
          </View>
          <Text style={styles.opinionText} numberOfLines={3}>
            {opinion.content}
          </Text>
        </View>
        <View style={styles.personInfoContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: opinion.profileImageUrl }} style={styles.profileImage}></Image>
            <Text style={styles.profileName} ellipsizeMode="tail">
              {opinion.nickname}
            </Text>
          </View>
          <View style={styles.likeContainer}>
            {opinion.isLiked ? (
              <WithLocalSvg width={20} height={20} asset={FavoriteFullSvg as ImageSourcePropType} />
            ) : (
              <WithLocalSvg width={20} height={20} asset={FavoriteSvg as ImageSourcePropType} />
            )}
            <Text style={styles.likeCount} ellipsizeMode="tail">
              {opinion.likeCount}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.gray2,
    width: 200,
    height: 206,
    borderRadius: 5,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    width: 168,
    marginHorizontal: 16,
    marginVertical: 18,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 18,
    borderBottomWidth: 18,
    borderLeftColor: 'transparent',
    borderBottomColor: theme.color.background,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  cardTop: {
    flexDirection: 'row',
    width: '100%',
  },
  cardBottom: {
    flexDirection: 'column',
    height: 92,
    width: '100%',
  },
  pin: {},
  titleText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
    width: 148,
  },
  dotLine: {
    width: 168,
    marginHorizontal: 16,
    marginTop: 11,
    marginBottom: 12,
    flexShrink: 0,
    backgroundColor: theme.color.gray5,
    borderWidth: 0.6,
    borderStyle: 'dashed',
  },
  opinionText: {
    fontFamily: fontFamily.pretendard.medium,
    color: theme.color.gray7,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginTop: 10,
    width: '100%',
  },
  tagContainer: {
    display: 'flex',
    width: 40,
    borderRadius: 40,
    paddingHorizontal: 8,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  tagText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  personInfoContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 4,
    color: theme.color.gray7,
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 106,
    display: 'flex',
  },
  profileImage: {
    marginVertical: 2,
    borderRadius: 16,
    width: 16,
    height: 16,
    backgroundColor: 'white',
  },
  profileName: {
    width: 50,
    color: theme.color.gray7,
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.48,
    height: 18,
    marginLeft: 4,
  },
  profileSvg: {
    width: 20,
    height: 20,
  },
});

export default OpinionPaper;
