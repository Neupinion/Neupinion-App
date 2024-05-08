import React from 'react';
import { StyleSheet, View } from 'react-native';
import ParagraphOpinionBigCard from './ParagraphOpinionBigCard';

const ParagraphOpinionPage = () => {
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

export default ParagraphOpinionPage;
