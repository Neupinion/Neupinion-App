import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import theme from '../../../shared/styles/theme';
import { FollowUpIssue } from '../../../shared/types/news';

interface AfterIssueItemProps {
  item: FollowUpIssue;
}

const AfterIssueItem = ({ item }: AfterIssueItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => {}}>
        <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <View style={{ marginBottom: 7 }} />
        <Text style={styles.titleUnderText}>
          "{item.reprocessedIssueTitle}"에 대한 정정보도가 나왔어요"
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  titleText: {
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  titleUnderText: {
    fontSize: 14,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  card: {
    width: 338,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    gap: 7,
    borderRadius: 10,
    backgroundColor: '#7E58E9',
  },
});

export default AfterIssueItem;
