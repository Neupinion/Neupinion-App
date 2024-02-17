import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FollowUpIssue } from '../../../shared/types/news';
import AfterIssueItem from './AfterIssueItem';
import Indicator from './Indicator';
import { ITEM_SIZE } from '../constants/cardAniSize';

interface AfterIssueProps {
  afterNews: FollowUpIssue[] | null;
}
const AfterIssueSlider = ({ afterNews }: AfterIssueProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        data={afterNews}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <AfterIssueItem item={item} />}
        onScroll={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / ITEM_SIZE);
          setSlideIndex(newIndex);
        }}
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
        bounces={false}
      />
      <Indicator data={afterNews} slideIndex={slideIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 26,
  },
  flatListContainer: {
    gap: 20,
    paddingVertical: 20,
  },
});

export default AfterIssueSlider;
