import React, { ReactElement, useEffect } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { ReWriteNews } from '../../../shared/types/news';
import FakeIssueItem from './FakeIssueItem';

interface FakeIssueProps {
  fakeNews: ReWriteNews[] | null;
}

const ITEM_SIZE = Dimensions.get('window').width * 0.8;
const SPACER_ITEM_SIZE = (Dimensions.get('window').width - ITEM_SIZE) / 2;

const FakeIssueSlider = ({ fakeNews }: FakeIssueProps) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
      useNativeDriver: true,
    });

    scrollX.addListener(({ value }) => {
      const newIndex = Math.round(value / ITEM_SIZE);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, [scrollX]);

  return (
    <View style={styles.container}>
      <View>{children}</View>
      <Animated.FlatList data={fakeNews} renderItem={FakeIssueItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FakeIssueSlider;
