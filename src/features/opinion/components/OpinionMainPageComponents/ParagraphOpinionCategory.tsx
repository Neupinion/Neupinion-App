import React from 'react';
import { StyleSheet, View } from 'react-native';
import ParagraphOpinionBigCard from './ParagraphOpinionBigCard';

const ParagraphOpinionCategory = () => {
  return (
    <View style={styles.container}>
      <ParagraphOpinionBigCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ParagraphOpinionCategory;
