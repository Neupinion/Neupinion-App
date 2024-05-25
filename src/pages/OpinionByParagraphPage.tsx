import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import PageHeader from '../shared/components/PageHeader';
import { WithLocalSvg } from 'react-native-svg/css';
import MainArrowLeftSvg from '../assets/icon/mainarrowLeft.svg';
import { WINDOW_WIDTH } from '../shared/constants/display';
import PinSentenceCard from '../features/opinion/components/OpinionMainPageComponents/PinSentenceCard';
import fontFamily from '../shared/styles/fontFamily';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';
import { getOpinionParagraph } from '../features/opinion/remotes/individualVote';
import useFetch from '../shared/hooks/useFetch';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import OpinionSubCategory from '../features/opinion/components/OpinionMainPageComponents/OpinionSubCategory';
import { getSortType, getCategoryType } from '../shared/constants/opinionCategory';
import { formatDate } from '../features/remakeissue/constants/formatDate';
import FavoriteSvg from '../assets/icon/favorite.svg';
import compose = StyleSheet.compose;
const OpinionByParagraphPage = () => {
  const [leftSubCategory, setLeftSubCategory] = useState('');
  const [rightSubCategory, setRightSubCategory] = useState('');
  const changeLeftCategory = (leftCategory: string) => {
    setLeftSubCategory(leftCategory);
  };
  const changeRightCategory = (rightCategory: string) => {
    setRightSubCategory(rightCategory);
  };
  const UpdateFavorite = () => {};

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  type ScreenRouteProp = RouteProp<RootStackParamList, 'OpinionParagraphPage'>;
  const route = useRoute<ScreenRouteProp>();
  const { item, id } = route.params;
  const gotoOpinionMainPage = () => {
    navigation.navigate('OpinionMainPage');
  };
  const fetchOpinionParagraph = () =>
    getOpinionParagraph(id, getCategoryType(leftSubCategory), getSortType(rightSubCategory),0);
  const {
    data: opinionParagraph,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchOpinionParagraph, false);

  useEffect(() => {
    void fetchData();
  }, [leftSubCategory, rightSubCategory]);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={GlobalTextStyles.NormalText17}>ERROR</Text>
      </View>
    );
  }
  console.log(item.id);
  console.log(getCategoryType(leftSubCategory));
  console.log(opinionParagraph);
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        leftIcons={
          <TouchableOpacity onPress={gotoOpinionMainPage}>
            <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
          </TouchableOpacity>
        }
        centerText={'의견보기'}
        RightIcons={null}
      />
      <View style={styles.headerUnderLine} />

      <View style={styles.pinSentenceContainer}>
        <PinSentenceCard color={theme.color.gray2} paragraphContent={item.content} />
      </View>
      <OpinionSubCategory
        changeLeftCategory={changeLeftCategory}
        changeRightCategory={changeRightCategory}
      />
      {opinionParagraph &&
        opinionParagraph.map(
          (paragraph) =>
            paragraph.id === item.id &&
            paragraph.opinions.map((opinion) => (
              <View key={opinion.id}>
                <View style={styles.bigOpinionCard}>
                  <View style={styles.bigOpinionCardTop}>
                    <Image source={{ uri: opinion.profileImageUrl }} style={styles.cardImage} />
                    <View style={{ flexDirection: 'column', marginLeft: 10, gap: 4 }}>
                      <Text style={styles.userNameText}>{opinion.nickname}</Text>
                      <Text style={styles.dateText}>{formatDate(opinion.createdAt)}</Text>
                    </View>
                  </View>
                  <View style={styles.bigOpinionCardMiddle}>
                    {opinion.isReliable ? (
                      <View style={styles.positivePosition}>
                        <Text style={styles.positionText}>신뢰</Text>
                      </View>
                    ) : (
                      <View style={styles.negativePosition}>
                        <Text style={styles.positionText}>의심</Text>
                      </View>
                    )}

                    <Text style={styles.userOpinionText}>{opinion.content}</Text>
                  </View>
                  <View style={styles.bigOpinionCardBottom}>
                    <TouchableOpacity style={{ marginRight: 4 }} onPress={() => UpdateFavorite()}>
                      <WithLocalSvg
                        width={18}
                        height={18}
                        asset={FavoriteSvg as ImageSourcePropType}
                      />
                    </TouchableOpacity>
                    <Text style={styles.favoriteText}>{opinion.likeCount}</Text>
                  </View>
                </View>
                <View style={styles.headerUnderLine}></View>
              </View>
            )),
        )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
  },
  cardImage: {
    width: 44,
    height: 44,
    borderRadius: 50,
  },
  nicknameText: {
    fontSize: 14,
    fontFamily: fontFamily.pretendard.medium,
    color: theme.color.gray5,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
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
  pinSentenceContainer: {
    width: WINDOW_WIDTH - 52,
    marginTop: 26,
    marginLeft: 26,
  },
  opinionContainer: {
    marginTop: 26,
    marginLeft: 68,
  },
  opinionTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  dropDownMainStyle: {
    width: 100,
    backgroundColor: theme.color.background,
  },
  arrowStyle: {
    width: 24,
    height: 24,
    tintColor: theme.color.white,
  },
  dropDownContainerStyle: {
    backgroundColor: theme.color.background,
  },
  listText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
  bigOpinionCard: {
    width: WINDOW_WIDTH - 52,
    marginLeft: 26,
    marginBottom: 25,
    marginTop: 24,
    // backgroundColor: theme.color.main,
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

export default OpinionByParagraphPage;
