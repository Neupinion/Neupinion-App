import React, { useState } from 'react';
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
import PageHeader from '../shared/components/PageHeader';
import { WithLocalSvg } from 'react-native-svg/css';
import MainArrowLeftSvg from '../assets/icon/mainarrowLeft.svg';
import { WINDOW_WIDTH } from '../shared/constants/display';
import { mainCategories } from '../shared/constants/opinionCategory';

const OpinionMainPage = () => {
  const [activeMainCategory, setActiveMainCategory] = useState('전체');
  const SelectMainCategory = (category: string) => {
    setActiveMainCategory(category);
  };
  return (
    <ScrollView style={styles.container}>
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
});

export default OpinionMainPage;
