import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../shared/styles/theme';
import fakeNewsDummy from '../dummy/FakeNewsDummy';
import CategorySlider from '../features/remakeissue/components/CategorySlider';

const TestPage = () => {
  const fakeNewsList = fakeNewsDummy;

  return (
    <View style={styles.container}>
      <CategorySlider fakeNews={fakeNewsList} />
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
