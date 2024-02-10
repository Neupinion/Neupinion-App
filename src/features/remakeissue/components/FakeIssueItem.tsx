import React from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ReWriteNews } from '../../../shared/types/news';
import theme from '../../../shared/styles/theme';
import { ITEM_SIZE, SPACER_ITEM_SIZE } from '../constants/cardAniSize';
import { LinearGradient } from 'expo-linear-gradient';
import { formatDate } from "../constants/formatDate";

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
    <View style={{ width: ITEM_SIZE, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View
        style={[
          styles.animatedCard,
          {
            transform: [{ rotate }, { translateY }, { scale }],
          },
        ]}
      >
        <TouchableOpacity onPress={() => {}}>
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={theme.gradient.gradient1}
            style={styles.cardLine}
          >
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              colors={theme.gradient.gradient2}
              style={styles.card}
            >
              <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
              <View style={styles.cardUnderContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <View style={styles.titleUnderContainer}>
                  <View style={styles.tagBox}>
                    <Text style={styles.tagText}>{item.category}</Text>
                  </View>
                  <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
                </View>
              </View>
            </LinearGradient>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLine: {
    width: 268,
    height: 276,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  card: {
    width: 266,
    height: 275,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
  },
  animatedCard: {
    marginHorizontal: 50,
    alignItems: 'center',
  },
  cardImage: {
    width: 266,
    height: 189,
    backgroundColor: theme.color.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardUnderContainer: {
    width: 266,
    height: 86,
    paddingHorizontal: 22,
    gap: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    width: 222,
    color: theme.color.white,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  titleUnderContainer: {
    width: 222,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tagBox: {
    display: 'flex',
    height: 22,
    paddingVertical: 2,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: theme.color.gray1,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    color: theme.color.white,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  dateText: {
    color: theme.color.gray2,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginTop: 2,
  },
});

export default FakeIssueItem;
