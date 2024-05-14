import React from 'react';
import { StyleSheet, View } from 'react-native';
import ParagraphOpinionCard from './ParagraphOpinionCard';

const ParagraphOpinionCategory = () => {
  return (
    <View style={styles.container}>
      <ParagraphOpinionCard />
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
