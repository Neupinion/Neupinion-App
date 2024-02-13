import React, { useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Text, FlatList, ImageBackground } from 'react-native';
import Theme from '../../../shared/styles/theme';
import { ReWriteNews } from '../../../shared/types/news';
import CategoryItem from './CategoryItem';

interface FakeIssueProps {
  fakeNews: ReWriteNews[] | null;
}

const CategorySlider = ({ fakeNews }: FakeIssueProps) => {
  const preparedFakeNews: ReWriteNews[][] | null = useMemo(() => {
    if (!fakeNews) return null;

    return [...fakeNews];
  }, [fakeNews]);

  if (!preparedFakeNews) {
    return null;
  }
  return (
    <View style={styles.categoryContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        data={preparedFakeNews}
        keyExtractor={(item:ReWriteNews[][]) => String(item.id)}
        renderItem={({item, index}) => (
          <CategoryItem item={item} index={index} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginLeft: 25,
  },
  firstText:{
    fontSize: 16,
    fontWeight: '700',
    color: Theme.color.white,
  },
  flatListContainer: {
    gap: 20,
    paddingVertical: 20,
  },
  cardContainer: {
    width: 240,
    height: 249,
    backgroundColor: Theme.color.gray,
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardImage: {
    width: 240,
    height: 160,
  },
  cardUnderContainer: {
    marginHorizontal: 22,
    marginVertical: 16,
  },
  tagText: {
    fontSize: 12,
    color: Theme.color.white,
  },
  tagBox: {
    padding: 1,
    backgroundColor: Theme.color.gray1,
    borderRadius: 5,
    marginRight: 5,
  },
  dateText:{
    color: Theme.color.gray2,
  },
});
export default CategorySlider;
