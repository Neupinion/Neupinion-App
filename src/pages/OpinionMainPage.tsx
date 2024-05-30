import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import theme from '../shared/styles/theme';
import TotalOpinionCategory from '../features/opinion/components/OpinionMainPageComponents/TotalOpinionCategory';
import fontFamily from '../shared/styles/fontFamily';
import ParagraphOpinionCategory from '../features/opinion/components/OpinionMainPageComponents/ParagraphOpinionCategory';
import { WINDOW_WIDTH } from '../shared/constants/display';
import { mainCategories } from '../shared/constants/opinionCategory';
import TopOpinionSlider from '../features/vote/components/TopOpinionSlider';
import { formatDate } from '../features/remakeissue/constants/formatDate';
import SeeOriginalSvg from '../assets/icon/seeOriginal.svg';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../rootStackParamList';
import useFetch from '../shared/hooks/useFetch';
import { getReprocessedIssueContent } from '../features/remakeissue/remotes/reprocessedIssueContent';

const OpinionMainPage = () => {
  type ScreenRouteProp = RouteProp<RootStackParamList, 'OpinionMainPage'>;
  const route = useRoute<ScreenRouteProp>();
  const id: number = route.params.id;
  const fetchReprocessedIssue = () => getReprocessedIssueContent(id);
  const { data: reprocessedIssue, fetchData } = useFetch(fetchReprocessedIssue, false);

  const [activeMainCategory, setActiveMainCategory] = useState('전체');
  const SelectMainCategory = (category: string) => {
    setActiveMainCategory(category);
  };

  useEffect(() => {
    void fetchData();
  }, []);
  return (

    <ScrollView style={styles.container}>
      <View style={styles.headerUnderLine} />
      <ScrollView>
        {reprocessedIssue && (
          <View style={{ marginTop: 18 }}>
            <Text style={styles.titleText}>{reprocessedIssue.title}</Text>
            <View style={styles.titleUnderContainer}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.tagBox}>
                  <Text style={styles.tagText}>{reprocessedIssue.category}</Text>
                </View>
                <Text style={styles.dateText}>{formatDate(reprocessedIssue.createdAt)}</Text>
              </View>
              <TouchableOpacity style={styles.headerSvg} onPress={() => {}}>
                <WithLocalSvg
                  width={79}
                  height={30}
                  asset={SeeOriginalSvg as ImageSourcePropType}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <TopOpinionSlider id={1} />
        <View style={styles.divideLine}></View>
        <View style={styles.mainCategoryTop}>
          {mainCategories.map((category) => (
            <TouchableOpacity
              key={category}
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

        {activeMainCategory === mainCategories[0] ? (
          <TotalOpinionCategory issueId={1} />
        ) : (
          <ParagraphOpinionCategory issueId={1} />
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
  titleText: {
    paddingHorizontal: 26,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.6,
    color: theme.color.gray7,
    width: '100%',
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
    width: WINDOW_WIDTH,
    height: 10,
    marginVertical: 12,
    flexShrink: 0,
    backgroundColor: theme.color.gray2,
  },
  headerUnderLine: {
    width: WINDOW_WIDTH,
    height: 1,
    backgroundColor: theme.color.gray6,
    opacity: 0.1,
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
  titleUnderContainer: {
    width: WINDOW_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    marginTop: 12,
    marginBottom: 25,
  },
  tagBox: {
    display: 'flex',
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(126, 88, 233, 0.20)',
    marginRight: 8,
  },
  tagText: {
    color: theme.color.main,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  dateText: {
    color: theme.color.gray5,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginTop: 2,
  },
  headerSvg: {
    justifyContent: 'flex-end',
  },
});

export default OpinionMainPage;
