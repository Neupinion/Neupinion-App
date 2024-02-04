import React from 'react';
import { Animated, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
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
    outputRange: [20, 0, 20],
  });

  const rotate = scrollX.interpolate({
    inputRange,
    outputRange: ['6deg', '0deg', '-6deg'],
  });

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.9, 1, 0.9],
  });

  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Animated.View
        style={[
          styles.animatedCard,
          {
            transform: [{ rotate }, { translateY }, { scale }],
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
  buttonStyle: {
    width: ITEM_SIZE,
  },
  card: {
    width: 226,
    height: 189,
    backgroundColor: theme.color.gradient,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  animatedCard: {
    marginHorizontal: 50,
    alignItems: 'center',
  },
  cardImage: {
    flex: 1,
  },
});

export default FakeIssueItem;
