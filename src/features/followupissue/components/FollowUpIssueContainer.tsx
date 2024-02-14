import { useState } from 'react';
import { getMainCategoryName, MainCategory } from '../functions/getMainCategoryName';
import { getSubCategoryName, SubCategory } from '../functions/getSubCategoryName';
import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';

const FollowUpIssueContainer = () => {
  const [topTab, setTopTab] = useState<MainCategory>(MainCategory.All);
  const [subTab, setSubTab] = useState<SubCategory>(SubCategory.Entertainment);

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
        return (
          <TouchableOpacity key={category} onPress={() => changeTopTab(category)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{getMainCategoryName(Number(key))}</Text>
            </View>
          </TouchableOpacity>
        );
      });
  };

  const renderSubCategoryButtons = () => {
    return Object.keys(SubCategory)
      .filter((key) => !isNaN(Number(key)))
      .map((key) => {
        const category = SubCategory[key as keyof typeof SubCategory];
        return (
          <TouchableOpacity key={category} onPress={() => changeSubTab(category)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{getSubCategoryName(Number(key))}</Text>
            </View>
          </TouchableOpacity>
        );
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainCategoryContainer}>{renderMainCategoryButtons()}</View>
      <View style={styles.subCategoryContainer}>{renderSubCategoryButtons()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  mainCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  subCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  button: {
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonText: {
    color: 'white',
  },
});

export default FollowUpIssueContainer;
