import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ReWriteNews } from '../../../shared/types/news';
import theme from '../../../shared/styles/theme';
import { ITEM_SIZE, SPACER_ITEM_SIZE } from '../constants/cardAniSize';

interface FakeIssueItemProps {
  item: ReWriteNews;
  index: number;
  scrollX: Animated.Value;
}

const FakeIssueItem = ({ item, index, scrollX }: FakeIssueItemProps) => {
  if (!item.imageUrl) {
    return <View style={{ width: SPACER_ITEM_SIZE }}></View>;
  }

  const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE];

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [40, 0, 40],
  });

  const rotate = scrollX.interpolate({
    inputRange,
    outputRange: ['3deg', '0deg', '-3deg'],
  });

  return (
    <TouchableOpacity style={{ width: ITEM_SIZE }}>
      <Animated.View
        style={[
          styles.animatedCard,
          {
            transform: [{ rotate }, { translateY }],
          },
        ]}
      >
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.card}></View>
        </TouchableOpacity>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 226,
    height: 189,
    backgroundColor: theme.color.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  animatedCard: {
    marginHorizontal: 50,
    alignItems: 'center',
  },
});

export default FakeIssueItem;
