import React, { ReactElement, useEffect } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { ReWriteNews } from '../../../shared/types/news';
import FakeIssueItem from './FakeIssueItem';

interface FakeIssueProps {
  fakeNews: ReWriteNews[] | null;
}
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
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={fakeNews}
        keyExtractor={(item) => item.id}
        snapToInterval={ITEM_SIZE}
        renderItem={FakeIssueItem}
      />
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
