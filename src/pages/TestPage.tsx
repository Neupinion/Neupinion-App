import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../shared/styles/theme';
import fakeNewsDummy from '../dummy/FakeNewsDummy';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import { ReWriteNews } from '../shared/types/news';
import CategorySlider from '../features/remakeissue/components/CategorySlider';

const TestPage = () => {
  const fakeNewsList: ReWriteNews[] = fakeNewsDummy;

  return (
    <View style={styles.container}>
      <Text style={GlobalTextStyles.NormalText17}>카테고리</Text>
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
