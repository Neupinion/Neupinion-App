import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageSourcePropType } from 'react-native';
import theme from '../shared/styles/theme';
import TotalOpinionPage from './TotalOpinionPage';
import fontFamily from '../shared/styles/fontFamily';
import ParagraphOpinionPage from './ParagraphOpinionPage';
import OpinionPageCategory from './OpinionPageCategory';
import PageHeader from '../shared/components/PageHeader';
import { WithLocalSvg } from 'react-native-svg';
import MainArrowLeftSvg from '../assets/icon/mainarrowLeft.svg';
import { WINDOW_WIDTH } from '../shared/constants/display';

const OpinionMainPage = () => {
  const mainOpinionCategories = ['전체', '문단별 보기'];
  const [activeButton, setActiveButton] = useState('전체');
  const handleButtonPress = (category: string) => {
    setActiveButton(category);
  };

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
      <View style={styles.topMainOpinionPage}>
        {mainOpinionCategories.map((category, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={styles.mainCategory}
            onPress={() => handleButtonPress(category)}
          >
            <Text style={[styles.baseText, activeButton === category && styles.activeText]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <OpinionPageCategory />
      {activeButton === '전체' ? <TotalOpinionPage /> : <ParagraphOpinionPage />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
  },
  topMainOpinionPage: {
    flexDirection: 'row',
    height: 24,
    marginBottom: 12,
    marginLeft: 26,
    marginTop: 18,
    // backgroundColor: theme.color.gray5,
  },
  mainCategory: {
    marginRight: 18,
  },
  activeText: {
    fontSize: 16,
    fontFamily: fontFamily.pretendard.bold,
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
  headerUnderLine: {
    width: WINDOW_WIDTH,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
});

export default OpinionMainPage;
