import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../shared/styles/theme';
import fakeNewsDummy from '../dummy/FakeNewsDummy';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import { ReWriteNews } from '../shared/types/news';
import CategorySlider from '../features/remakeissue/components/CategorySlider';
import CategoryTop from '../features/remakeissue/components/CategoryTop';
import { Colors } from "react-native/Libraries/NewAppScreen";

const TestPage = () => {
  const fakeNewsList = fakeNewsDummy;

  return (
    <View style={styles.container}>
      <CategoryTop />
      <CategorySlider fakeNews={fakeNewsList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    // backgroundColor: theme.color.black,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default TestPage;
