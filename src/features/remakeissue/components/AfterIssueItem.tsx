import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import GlobalTextStyles from "../../../shared/styles/GlobalTextStyles";
import theme from "../../../shared/styles/theme";
import { FollowUpIssue, ReProcessedIssue } from "../../../shared/types/news";

interface AfterIssueItemProps {
  item: FollowUpIssue;
}

const AfterIssueItem = ({item}:AfterIssueItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
        <View style={{ marginBottom: 7 }} />
        <Text style={styles.titleUnderText}>"전소연 마약 연루설"에 대한 정정보도가 나왔어요"</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

});

export default AfterIssueItem;
