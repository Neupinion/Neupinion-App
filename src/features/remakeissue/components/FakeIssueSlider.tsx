import React, { ReactElement, useEffect } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { ReWriteNews } from '../../../shared/types/news';
import FakeIssueItem from './FakeIssueItem';
import { ITEM_SIZE } from '../constants/cardAniSize';

interface FakeIssueProps {
  fakeNews: ReWriteNews[] | null;
}
const FakeIssueSlider = ({ fakeNews }: FakeIssueProps) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onScrollX = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: true,
  });

  useEffect(() => {
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
        horizontal={true}
        renderItem={({ item, index }) => (
          <FakeIssueItem item={item} index={index} scrollX={scrollX} />
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default FakeIssueSlider;
