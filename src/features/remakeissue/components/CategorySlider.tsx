import React, { useMemo } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ReProcessedIssue } from '../../../shared/types/news';
import CategoryItem from './CategoryItem';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
import EmptyScreen from '../../../shared/components/Opinion/EmptyScreen';

interface CategorySliderProps {
  categoryIssues: ReProcessedIssue[] | null;
}

const CategorySlider = ({ categoryIssues }: CategorySliderProps) => {
  const preparedFakeNews = useMemo(() => {
    if (!categoryIssues) return null;
    return [...categoryIssues];
  }, [categoryIssues]);

  return (
    <View style={styles.categoryContainer}>
      {(!categoryIssues || categoryIssues.length === 0) && (
        <View style={styles.emptyContainer}>
          <EmptyScreen text={'등록된 이슈가 없습니다.'} />
        </View>
      )}
      {categoryIssues && (
        <>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
            data={preparedFakeNews}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <CategoryItem item={item} />}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    width: WINDOW_WIDTH,
    height: 270,
    marginBottom: 20,
  },
  flatListContainer: {
    paddingHorizontal: 26,
    marginVertical: 20,
    gap: 16,
  },
  emptyContainer: {
    width: WINDOW_WIDTH,
    height: 270,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
export default CategorySlider;
