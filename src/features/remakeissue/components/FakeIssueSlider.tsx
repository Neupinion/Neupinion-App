import React, { useEffect, useMemo, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { ReWriteNews } from '../../../shared/types/news';
import FakeIssueItem from './FakeIssueItem';
import { ITEM_SIZE } from '../constants/cardAniSize';
import Indicator from './Indicator';
interface FakeIssueProps {
  fakeNews: ReWriteNews[] | null;
}
const FakeIssueSlider = ({ fakeNews }: FakeIssueProps) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onScrollX = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: true,
  });

  const preparedFakeNews = useMemo(() => {
    if (!fakeNews) return null;

    const modifiedData = [
      { id: 'left-spacer', title: '', tags: [''], date: '', imageUrl: '', views: 0, posts: 0 },
      ...fakeNews,
      { id: 'right-spacer', title: '', tags: [''], date: '', imageUrl: '', views: 0, posts: 0 },
    ];
    return modifiedData;
  }, [fakeNews]);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const newIndex = Math.round(value / ITEM_SIZE);
      setSlideIndex(newIndex);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, [scrollX]);

  if (!preparedFakeNews) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={preparedFakeNews}
        keyExtractor={(item) => item.id}
        style={styles.flatListStyle}
        snapToInterval={ITEM_SIZE}
        horizontal={true}
        renderItem={({ item, index }) => (
          <FakeIssueItem item={item} index={index} scrollX={scrollX} />
        )}
        decelerationRate={0}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={onScrollX}
      />
      <Indicator data={fakeNews} slideIndex={slideIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    marginTop: 20,
    height: 300,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flatListStyle: {
    height: 280,
  },
});

export default FakeIssueSlider;
