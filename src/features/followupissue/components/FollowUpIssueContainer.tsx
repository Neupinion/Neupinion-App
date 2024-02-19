import React, { useEffect, useState } from 'react';
import { getMainCategoryName, MainCategory } from '../functions/getMainCategoryName';
import {
  getSubCategoryName,
  getSubCategoryNameApi,
  SubCategory,
} from '../functions/getSubCategoryName';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../../shared/styles/theme';
import useFetch from '../../../shared/hooks/useFetch';
import { getFollowUpIssues } from '../remotes/followupissue';
import FollowUpIssueSlider from './FollowUpIssueSlider';

const FollowUpIssueContainer = () => {
  const firstMainCategoryKey = Object.keys(MainCategory).find(
    (key): key is keyof typeof MainCategory =>
      !isNaN(Number(MainCategory[key as keyof typeof MainCategory])),
  );
  const firstMainCategory: MainCategory =
    firstMainCategoryKey !== undefined ? MainCategory[firstMainCategoryKey] : MainCategory.All;

  const firstSubCategoryKey = Object.keys(SubCategory).find(
    (key): key is keyof typeof SubCategory =>
      !isNaN(Number(SubCategory[key as keyof typeof SubCategory])),
  );
  const firstSubCategory: SubCategory =
    firstSubCategoryKey !== undefined
      ? SubCategory[firstSubCategoryKey]
      : SubCategory.Entertainment;

  const [selectedMainCategory, setSelectedMainCategory] = useState<MainCategory>(firstMainCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory>(firstSubCategory);

  const [date, setDate] = useState('20240212');
  const [viewMode, setViewMode] = useState('All');

  const fetchFollowUpIssues = () =>
    getFollowUpIssues(getSubCategoryNameApi(SubCategory.Society), date, viewMode);

  const {
    data: followUpIssues,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchFollowUpIssues, false);

  useEffect(() => {
    fetchData()
      .then(() => {
        console.log('데이터를 성공적으로 가져왔습니다.');
      })
      .catch((error) => {
        console.error('데이터 가져오기 실패:', error);
      });
  }, [selectedMainCategory, selectedSubCategory, date, viewMode]);

  const changeMainCategory = (newTab: MainCategory) => {
    console.log('메인 카테고리 변경:', MainCategory[newTab]);
    setSelectedMainCategory(newTab);
    setViewMode(MainCategory[newTab] ? 'VOTED' : 'ALL');
  };

  const changeSubCategory = (newSubTab: SubCategory) => {
    console.log('부 카테고리 변경:', SubCategory[newSubTab]);
    setSelectedSubCategory(newSubTab);
  };

  const renderMainCategoryButtons = () => {
    return Object.keys(MainCategory)
      .filter((key) => !isNaN(Number(key)))
      .map((key) => {
        const category = MainCategory[key as keyof typeof MainCategory];
        const isSelected = category === selectedMainCategory;
        return (
          <TouchableOpacity
            key={category}
            onPress={() => changeMainCategory(category)}
            style={styles.buttonWrapper}
          >
            <View style={styles.mainCategoryButton}>
              <Text style={styles.mainCategoryText}>{getMainCategoryName(Number(key))}</Text>
            </View>
            {isSelected && <View style={styles.selectedUnderline}></View>}
          </TouchableOpacity>
        );
      });
  };

  const renderSubCategoryButtons = () => {
    return Object.keys(SubCategory)
      .filter((key) => !isNaN(Number(key)))
      .map((key) => {
        const category = SubCategory[key as keyof typeof SubCategory];
        const isSelected = category === selectedSubCategory;
        const buttonStyle = isSelected ? styles.subCategoryButtonOn : styles.subCategoryButtonOff;
        const textStyle = isSelected ? styles.subCategoryTextOn : styles.subCategoryTextOff;
        return (
          <TouchableOpacity key={category} onPress={() => changeSubCategory(category)}>
            <View style={buttonStyle}>
              <Text style={textStyle}>{getSubCategoryName(Number(key))}</Text>
            </View>
          </TouchableOpacity>
        );
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainCategoryContainer}>{renderMainCategoryButtons()}</View>
      <View style={styles.mainUnderLine} />
      <ScrollView horizontal={true}>
        <View style={styles.subCategoryContainer}>{renderSubCategoryButtons()}</View>
      </ScrollView>
      <View style={styles.sliderContainer}>
        {!isLoading && !error && <FollowUpIssueSlider followUpIssue={followUpIssues} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    marginHorizontal: 10,
    marginTop: 16,
  },
  sliderContainer: {
    width: Dimensions.get('window').width,
    height: 340,
  },
  mainCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  mainCategoryButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 18,
    gap: 12,
  },
  mainCategoryText: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  mainUnderLine: {
    width: Dimensions.get('window').width,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
  subCategoryContainer: {
    display: 'flex',
    marginTop: 21,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  subCategoryButtonOn: {
    display: 'flex',
    marginRight: 10,
    height: 30,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: theme.color.gray4,
    borderWidth: 0.8,
    borderColor: 'rgba(189, 189, 189, 0)',
  },
  subCategoryButtonOff: {
    display: 'flex',
    marginRight: 10,
    height: 30,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 30,
    borderWidth: 0.8,
    borderColor: 'rgba(189, 189, 189, 0.5)',
  },
  subCategoryTextOn: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#BDBDBD',
  },
  subCategoryTextOff: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    color: 'rgba(189, 189, 189, 0.5)',
  },
  selectedUnderline: {
    position: 'absolute',
    bottom: -19,
    left: 18,
    right: 0,
    height: 4,
    backgroundColor: 'white',
  },
  buttonWrapper: {
    position: 'relative',
  },
});

export default FollowUpIssueContainer;
