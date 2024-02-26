import { FollowUpIssue } from '../../../shared/types/news';
import React, { useEffect, useMemo, useState } from 'react';
import { Animated, Dimensions, View, StyleSheet } from 'react-native';
import FollowUpIssueItem from './FollowUpIssueItem';
import {
  invisibleFollowUpLeftCardData,
  invisibleFollowUpRightCardData,
} from '../constants/invisibleFollowUpData';
import Indicator from '../../remakeissue/components/Indicator';

const CARD_ITEM_SIZE = Dimensions.get('window').width * 0.915;

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

  const preparedFollowUpIssue = useMemo(() => {
    if (!followUpIssue) return null;

    return [invisibleFollowUpLeftCardData, ...followUpIssue, invisibleFollowUpRightCardData];
  }, [followUpIssue]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={preparedFollowUpIssue}
        keyExtractor={(item) => String(item.id)}
        style={styles.flatListStyle}
        snapToInterval={CARD_ITEM_SIZE}
        horizontal={true}
        renderItem={({ item }) => <FollowUpIssueItem item={item} />}
        decelerationRate={0}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={onScrollX}
      />
      <Indicator data={followUpIssue} slideIndex={slideIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flatListStyle: {
    width: Dimensions.get('window').width,
    height: 280,
  },
});

export default FollowUpIssueSlider;
