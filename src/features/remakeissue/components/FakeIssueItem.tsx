import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ReWriteNews } from '../../../shared/types/news';
import theme from '../../../shared/styles/theme';

interface FakeIssueItemProps {
  fakeNews: ReWriteNews;
}

const FakeIssueItem = ({ fakeNews }: FakeIssueItemProps) => {
  const { id, title, tags, date, imageUrl } = fakeNews;
  return (
    <View style={styles.card}>
      <View>{id}</View>
      <View>{imageUrl}</View>
      <View>{title}</View>
      <View>{tags}</View>
      <View>{date}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 226,
    height: 189,
    backgroundColor: theme.color.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FakeIssueItem;
