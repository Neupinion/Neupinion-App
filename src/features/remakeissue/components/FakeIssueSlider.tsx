import React, { useEffect, useMemo, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import { ReProcessedIssue } from '../../../shared/types/news';
import FakeIssueItem from './FakeIssueItem';
import { ITEM_SIZE } from '../constants/cardAniSize';
import Indicator from './Indicator';
import FakeIssueIcon from './FakeIssueIcon';
import { invisibleLeftCardData, invisibleRightCardData } from '../constants/invisibleCardData';

interface FakeIssueProps {
  fakeNews: ReProcessedIssue[] | null;
  onClickIssue: () => void;
}
const FakeIssueSlider = ({ fakeNews, onClickIssue }: FakeIssueProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onScrollX = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: true,
  });

  const preparedFakeNews = useMemo(() => {
    if (!fakeNews) return null;

    return [invisibleLeftCardData, ...fakeNews, invisibleRightCardData];
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
      {!fakeNews ||
        (fakeNews.length === 0 && (
          <View testID={'EmptyData'} style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Data</Text>
          </View>
        ))}
      {fakeNews && (
        <>
          <Animated.FlatList
            testID={'FlatList'}
            showsHorizontalScrollIndicator={false}
            data={preparedFakeNews}
            keyExtractor={(item) => String(item.id)}
            style={styles.flatListStyle}
            snapToInterval={ITEM_SIZE}
            horizontal={true}
            renderItem={({ item, index }) => (
              <FakeIssueItem item={item} index={index} scrollX={scrollX} onClick={onClickIssue} />
            )}
            decelerationRate={0}
            bounces={false}
            scrollEventThrottle={16}
            onScroll={onScrollX}
          />
          <FakeIssueIcon data={fakeNews} slideIndex={slideIndex} />
          <Indicator data={fakeNews} slideIndex={slideIndex} />
        </>
      )}
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
  emptyContainer: {
    width: Dimensions.get('window').width,
    height: 340,
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

export default FakeIssueSlider;
