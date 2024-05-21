import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
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
import { formatYMD } from '../features/date/functions/formatDate';
import { getOpinionParagraph } from '../features/opinion/remotes/individualVote';
import useFetch from '../shared/hooks/useFetch';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import OpinionSubCategory from '../features/opinion/components/OpinionMainPageComponents/OpinionSubCategory';

const OpinionByParagraphPage = () => {
  const [leftSubCategory, setLeftSubCategory] = useState('전체');
  const [rightSubCategory, setRightSubCategory] = useState('최신순');
  const changeLeftCategory = (leftCategory: string) => {
    setLeftSubCategory(leftCategory);
  };
  const changeRightCategory = (rightCategory: string) => {
    setRightSubCategory(rightCategory);
  };

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  type ScreenRouteProp = RouteProp<RootStackParamList, 'OpinionParagraphPage'>;
  const route = useRoute<ScreenRouteProp>();
  const { item, id } = route.params;
  const gotoOpinionMainPage = () => {
    navigation.navigate('OpinionMainPage');
  };
  const fetchOpinionParagraph = () =>
    getOpinionParagraph(id, getSortType(leftSubCategory), getCategoryType(rightSubCategory), 0);
  const {
    data: opinionParagraph,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchOpinionParagraph, false);

  useEffect(() => {
    void fetchData();
  }, []);

  const getCategoryType = (category: string) => {
    switch (category) {
      case '전체':
        return 'ALL';
      case '신뢰':
        return 'TRUST';
      case '의심':
        return 'DOUBT';
      default:
        return 'ALL';
    }
  };
  const getSortType = (category: string) => {
    switch (category) {
      case '인기순':
        return 'POPULAR';
      case '최신순':
        return 'RECENT';
      default:
        return 'RECENT';
    }
  };
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
  return (
    <View style={styles.container}>
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
      <OpinionSubCategory
        changeLeftCategory={changeLeftCategory}
        changeRightCategory={changeRightCategory}
      />
      <View style={styles.pinSentenceContainer}>
        <PinSentenceCard color={theme.color.gray2} paragraphContent={item.content} />
      </View>
      {opinionParagraph &&
        opinionParagraph.map(
          (paragraph) =>
            paragraph.id === item.id &&
            paragraph.opinions.map((opinion) => (
              <View key={opinion.id} style={styles.opinionContainer}>
                <View style={styles.opinionTopContainer}>
                  <Image source={{ uri: opinion.profileImageUrl }} style={styles.cardImage} />
                  <Text style={styles.nicknameText}>{opinion.nickname}</Text>
                  <Text style={styles.dateText}>{formatYMD(opinion.createdAt)}</Text>
                </View>
                <Text style={styles.userOpinionText}>{opinion.content}</Text>
              </View>
            )),
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
  },
  headerUnderLine: {
    width: WINDOW_WIDTH,
    height: 1,
    backgroundColor: theme.color.gray6,
  },
  cardImage: {
    width: 26,
    height: 26,
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
    color: 'theme.color.gray5',
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
});

export default OpinionByParagraphPage;
