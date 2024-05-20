import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  Dimensions,
  ScrollView,
} from 'react-native';
import theme from '../shared/styles/theme';
import TotalOpinionCategory from '../features/opinion/components/OpinionMainPageComponents/TotalOpinionCategory';
import fontFamily from '../shared/styles/fontFamily';
import ParagraphOpinionCategory from '../features/opinion/components/OpinionMainPageComponents/ParagraphOpinionCategory';
import OpinionSubCategory from '../features/opinion/components/OpinionMainPageComponents/OpinionSubCategory';
import PageHeader from '../shared/components/PageHeader';
import { WithLocalSvg } from 'react-native-svg/css';
import MainArrowLeftSvg from '../assets/icon/mainarrowLeft.svg';
import { WINDOW_WIDTH } from '../shared/constants/display';
import { mainCategories } from '../shared/constants/opinionCategory';
import { getOpinionParagraph } from '../features/opinion/remotes/individualVote';
import useFetch from '../shared/hooks/useFetch';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import opinionPinPage from './OpinionPinPage';

const OpinionMainPage = () => {
  const [activeMainCategory, setActiveMainCategory] = useState('전체');
  const SelectMainCategory = (category: string) => {
    setActiveMainCategory(category);
  };
  const [leftMainCategory, setLeftMainCategory] = useState('전체');
  const [rightMainCategory, setRightMainCategory] = useState('최신순');
  const changeLeftCategory = (leftCategory: string) => {
    setLeftMainCategory(leftCategory);
  };
  const changeRightCategory = (rightCategory: string) => {
    setRightMainCategory(rightCategory);
  };
  console.log(leftMainCategory);
  console.log(rightMainCategory);

  // const fetchOpinionParagraph = () => getOpinionParagraph(1, 'ALL', 'RECENT', 0);
  // const {
  //   data: opinionParagraph,
  //   isLoading,
  //   error,
  //   fetchData,
  // } = useFetch(fetchOpinionParagraph, false);

  // useEffect(() => {
  //   void fetchData();
  // }, []);
  // if (isLoading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size="large" style={styles.activityIndicator} />
  //     </View>
  //   );
  // }
  //
  // if (error) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={GlobalTextStyles.NormalText17}>ERROR</Text>
  //     </View>
  //   );
  // }
  //
  // if (!opinionParagraph) {
  //   return null;
  // }

  const opinionParagraph = [
    {
      id: 1,
      content: '펜타곤이 폭발한 사진이 트위터에서 활발하게 공유되었습니다.',
      opinions: [
        {
          id: 1,
          memberId: 1,
          nickname: '김철수',
          profileImageUrl: 'https://www.neupinion.com/profile/1',
          createdAt: '2024-05-20T05:15:09.625Z',
          isReliable: true,
          paragraphId: 20,
          paragraphContent: '이 부분이 문제가 되는 이유는...',
          content: '이런 부분은 문제가 있어요!',
          likeCount: 10,
          isLiked: true,
        },
      ],
    },
  ];
  console.log(opinionParagraph);
  return (
    <View style={styles.container}>
      <PageHeader
        leftIcons={
          <TouchableOpacity>
            <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
          </TouchableOpacity>
        }
        centerText={'의견보기'}
        RightIcons={null}
      />
      <View style={styles.headerUnderLine} />
      <View style={styles.divideLine}></View>
      <View style={styles.mainCategoryTop}>
        {mainCategories.map((category, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={styles.mainCategory}
            onPress={() => SelectMainCategory(category)}
          >
            <Text style={[styles.baseText, activeMainCategory === category && styles.activeText]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <View style={styles.headerUnderLine} />
        {activeMainCategory == mainCategories[0] && <View style={styles.selectedAll} />}
        {activeMainCategory == mainCategories[1] && <View style={styles.selectedParagraph} />}
      </View>
      <OpinionSubCategory
        changeLeftCategory={changeLeftCategory}
        changeRightCategory={changeRightCategory}
      />
      <ScrollView>
        {activeMainCategory === mainCategories[0] ? (
          <TotalOpinionCategory
            opinionParagraph={opinionParagraph}
            leftMainCategory={leftMainCategory}
          />
        ) : (
          <ParagraphOpinionCategory opinionParagraph={opinionParagraph} />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
  },
  mainCategoryTop: {
    flexDirection: 'row',
    height: 36,
    marginBottom: 12,
    marginLeft: 26,
    marginTop: 18,
  },
  mainCategory: {
    marginRight: 18,
  },
  activeText: {
    fontSize: 16,
    fontFamily: fontFamily.pretendard.medium,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  baseText: {
    fontSize: 16,
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.gray4,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  divideLine: {
    width: Dimensions.get('window').width,
    height: 10,
    marginVertical: 12,
    flexShrink: 0,
    backgroundColor: theme.color.gray2,
  },
  headerUnderLine: {
    width: WINDOW_WIDTH,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
  buttonWrapper: {
    position: 'relative',
  },
  selectedAll: {
    position: 'absolute',
    bottom: 1,
    left: 26,
    right: 0,
    width: 30,
    height: 4,
    backgroundColor: theme.color.white,
  },
  selectedParagraph: {
    position: 'absolute',
    bottom: 1,
    left: 75,
    right: 0,
    width: 79,
    height: 4,
    backgroundColor: theme.color.white,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default OpinionMainPage;
