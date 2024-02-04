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
    outputRange: [10, 0, 10],
  });

  const rotate = scrollX.interpolate({
    inputRange,
    outputRange: ['4deg', '0deg', '-4deg'],
  });

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.86, 1, 0.86],
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
    width: 266,
    height: 275,
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
