import React, { useEffect, useState } from 'react';
import { getMainCategoryName, MainCategory } from '../functions/getMainCategoryName';
import {
  getSubCategoryName,
  getSubCategoryNameApi,
  SubCategory,
} from '../functions/getSubCategoryName';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../../../shared/styles/theme';
import useFetch from '../../../shared/hooks/useFetch';
import { getFollowUpIssues } from '../remotes/followupissue';
import FollowUpIssueSlider from './FollowUpIssueSlider';
import { useDate } from '../../date/provider/DateProvider';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
import fontFamily from '../../../shared/styles/fontFamily';
import EmptyScreen from '../../../shared/components/Opinion/EmptyScreen';

const FollowUpIssueContainer = () => {
  const firstMainCategory: string | MainCategory =
    Object.keys(MainCategory).find(
      (key) => !isNaN(Number(MainCategory[key as keyof typeof MainCategory])),
    ) || MainCategory.All;

  const firstSubCategory: string | SubCategory =
    Object.keys(SubCategory).find(
      (key) => !isNaN(Number(SubCategory[key as keyof typeof SubCategory])),
    ) || SubCategory.Entertainment;

  const [selectedMainCategory, setSelectedMainCategory] = useState<MainCategory | string>(
    firstMainCategory,
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | string>(
    firstSubCategory,
  );

  const { date } = useDate();
  const [viewMode, setViewMode] = useState('All');

  const fetchFollowUpIssues = () =>
    getFollowUpIssues(
      getSubCategoryNameApi(typeof selectedSubCategory === 'string' ? selectedSubCategory : ''),
      date,
      viewMode,
    );

  const {
    data: followUpIssues,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchFollowUpIssues, false);

  useEffect(() => {
    void fetchData();
  }, [selectedMainCategory, selectedSubCategory, date, viewMode]);

  const changeMainCategory = (newTab: MainCategory) => {
    setSelectedMainCategory(newTab);
    setViewMode(MainCategory[newTab] ? 'VOTED' : 'ALL');
  };

  const changeSubCategory = (newSubTab: SubCategory) => {
    setSelectedSubCategory(newSubTab);
  };

  const renderMainCategoryButtons = (mainCategory: MainCategory | string) => {
    return Object.keys(MainCategory)
      .filter((key) => !isNaN(Number(key)))
      .map((key) => {
        const category = MainCategory[key as keyof typeof MainCategory];
        const isSelected = category === mainCategory;
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

  const renderSubCategoryButtons = (subCategory: SubCategory | string) => {
    return Object.keys(SubCategory)
      .filter((key) => !isNaN(Number(key)))
      .map((key) => {
        const category = SubCategory[key as keyof typeof SubCategory];
        const isSelected = category === subCategory;
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
      <View style={styles.mainCategoryContainer}>
        {renderMainCategoryButtons(selectedMainCategory)}
      </View>
      <View style={styles.mainUnderLine} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.subCategoryContainer}>
          {renderSubCategoryButtons(selectedSubCategory)}
        </View>
      </ScrollView>
      <View style={styles.sliderContainer}>
        {isLoading && (
          <View style={styles.emptyContainer}>
            <ActivityIndicator size="large" style={styles.activityIndicator} />
          </View>
        )}
        {!followUpIssues ||
          (followUpIssues.length === 0 && (
            <View style={styles.emptyContainer}>
              <EmptyScreen text={'등록된 후속 이슈가 없습니다.'} />
            </View>
          ))}
        {!isLoading && !error && <FollowUpIssueSlider followUpIssue={followUpIssues} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    marginTop: 16,
  },
  sliderContainer: {
    width: WINDOW_WIDTH,
    height: 350,
  },
  mainCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 16,
    marginHorizontal: 8,
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
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  mainUnderLine: {
    width: WINDOW_WIDTH,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
  subCategoryContainer: {
    display: 'flex',
    marginTop: 21,
    marginLeft: 18,
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
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#BDBDBD',
  },
  subCategoryTextOff: {
    fontFamily: fontFamily.pretendard.medium,
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
  loadingText: {
    color: 'white',
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 18,
    fontWeight: '600',
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  emptyContainer: {
    width: WINDOW_WIDTH,
    height: 340,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: 'white',
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default FollowUpIssueContainer;
