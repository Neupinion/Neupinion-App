import React, { useMemo } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ReWriteNews } from '../../../shared/types/news';
import CategoryItem from './CategoryItem';

interface CategorySliderProps {
  fakeNews: ReWriteNews[] | null;
}

const CategorySlider = ({ fakeNews }: CategorySliderProps) => {
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
        renderItem={({ item }) => <CategoryItem item={item} />}
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
