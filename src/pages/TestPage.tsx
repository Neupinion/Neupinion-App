import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import theme from '../shared/styles/theme';
import FakeIssueSlider from '../features/remakeissue/components/FakeIssueSlider';
import fakeNewsDummy from '../dummy/FakeNewsDummy';
import GlobalTextStyles from "../shared/styles/GlobalTextStyles";

const TestPage = () => {
  const fakeNewsList = fakeNewsDummy;

  return (
    <View style={styles.container}>
      <Text style={GlobalTextStyles.NormalText17}>가짜뉴스 이슈(타이틀 변경 예정)</Text>
      <FakeIssueSlider fakeNews={fakeNewsList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default TestPage;
