import { useEffect, useState } from 'react';
import { getMainCategoryName, MainCategory } from '../functions/getMainCategoryName';
import {
  getSubCategoryName,
  getSubCategoryNameApi,
  SubCategory,
} from '../functions/getSubCategoryName';
import { Dimensions, StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import React from 'react';
import theme from '../../../shared/styles/theme';
import useFetch from '../../../shared/hooks/useFetch';
import { getFollowUpIssues } from '../remotes/followupissue';

const FollowUpIssueContainer = () => {
  const [topTab, setTopTab] = useState<MainCategory>(MainCategory.All);
  const [subTab, setSubTab] = useState<SubCategory>(SubCategory.Entertainment);
  const [date, setDate] = useState('20240212');
  const [viewMode, setViewMode] = useState('All');

  const { data } = useFetch(() => getFollowUpIssues(getSubCategoryNameApi(subTab), date, viewMode));

  const changeTopTab = (newTab: MainCategory) => {
    console.log('메인 카테고리 변경:', MainCategory[newTab]);
    setTopTab(newTab);
  };

  const changeSubTab = (newSubTab: SubCategory) => {
    console.log('부 카테고리 변경:', SubCategory[newSubTab]);
    setSubTab(newSubTab);
  };

  const renderMainCategoryButtons = () => {
    return Object.keys(MainCategory)
      .filter((key) => !isNaN(Number(key)))
      .map((key) => {
        const category = MainCategory[key as keyof typeof MainCategory];
        const isSelected = category === topTab;
        return (
          <TouchableOpacity
            key={category}
            onPress={() => changeTopTab(category)}
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
        const isSelected = category === subTab;
        const buttonStyle = isSelected ? styles.subCategoryButtonOn : styles.subCategoryButtonOff;
        const textStyle = isSelected ? styles.subCategoryTextOn : styles.subCategoryTextOff;
        return (
          <TouchableOpacity key={category} onPress={() => changeSubTab(category)}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    marginHorizontal: 10,
    marginTop: 16,
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
