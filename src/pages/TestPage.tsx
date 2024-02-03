import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../shared/styles/theme';
import FakeIssueSlider from '../features/remakeissue/components/FakeIssueSlider';
import fakeNewsDummy from '../dummy/FakeNewsDummy';
import FakeIssueItem from '../features/remakeissue/components/FakeIssueItem';

const TestPage = () => {
  const fakeNewsList = fakeNewsDummy;

  return (
    <View style={styles.container}>
      <FakeIssueSlider fakeNews={fakeNewsList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TestPage;
