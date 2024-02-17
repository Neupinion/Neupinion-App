import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FollowUpIssue, ReProcessedIssue } from "../../../shared/types/news";
import AfterIssueItem from "./AfterIssueItem";

interface AfterIssueProps{
  afterNews: FollowUpIssue[] | null;
}
const AfterIssueSlider = ({afterNews}: AfterIssueProps) => {
  return (
    <View style={styles.container}>
      <AfterIssueItem/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 26,
  },
});

export default AfterIssueSlider;
