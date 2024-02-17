import { FollowUpIssue } from '../../../shared/types/news';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, View, StyleSheet } from 'react-native';
import FollowUpIssueItem from './FollowUpIssueItem';

const CARD_ITEM_SIZE = Dimensions.get('window').width * 0.9;

interface FollowUpIssueSliderProps {
  followUpIssue: FollowUpIssue[] | null;
}
const FollowUpIssueSlider = ({ followUpIssue }: FollowUpIssueSliderProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onScrollX = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: true,
  });

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const newIndex = Math.round(value / CARD_ITEM_SIZE);
      setSlideIndex(newIndex);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, [scrollX]);

  if (!followUpIssue) {
    return null; // 없는 UI 처리
  }

  return (
    <View style={styles.container}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={followUpIssue}
        keyExtractor={(item) => String(item.id)}
        style={styles.flatListStyle}
        snapToInterval={CARD_ITEM_SIZE}
        horizontal={true}
        renderItem={({ item, index }) => (
          <FollowUpIssueItem item={item} index={index} scrollX={scrollX} />
        )}
        decelerationRate={0}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={onScrollX}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    marginTop: 20,
    height: 340,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flatListStyle: {
    height: 280,
  },
});

export default FollowUpIssueSlider;
