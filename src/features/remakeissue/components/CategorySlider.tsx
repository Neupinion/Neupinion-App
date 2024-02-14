import React, { useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Text, FlatList, ImageBackground } from 'react-native';
import Theme from '../../../shared/styles/theme';
import { ReWriteNews } from '../../../shared/types/news';
import CategoryItem from './CategoryItem';

interface FakeIssueProps {
  fakeNews: ReWriteNews[] | null;
}

const CategorySlider = ({ fakeNews }: FakeIssueProps) => {
  const preparedFakeNews = useMemo(() => {
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
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <CategoryItem item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginLeft: 25,
    marginTop: 20,
  },
  flatListContainer: {
    gap: 20,
    paddingVertical: 20,
  },
});
export default CategorySlider;
