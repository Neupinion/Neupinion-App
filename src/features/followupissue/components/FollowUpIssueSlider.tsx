import { FollowUpIssue } from '../../../shared/types/news';
import React, { useEffect, useMemo, useState } from 'react';
import { Animated, Dimensions, View, StyleSheet } from 'react-native';
import FollowUpIssueItem from './FollowUpIssueItem';
import {
  invisibleFollowUpLeftCardData,
  invisibleFollowUpRightCardData,
} from '../constants/invisibleFollowUpData';

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

  const preparedFollowUpIssue = useMemo(() => {
    if (!followUpIssue) return null;

    return [invisibleFollowUpLeftCardData, ...followUpIssue, invisibleFollowUpRightCardData];
  }, [followUpIssue]);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const newIndex = Math.round(value / CARD_ITEM_SIZE);
      setSlideIndex(newIndex);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, [scrollX]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={preparedFollowUpIssue}
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
