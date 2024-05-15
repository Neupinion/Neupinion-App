import React from 'react';
import { StyleSheet, View } from 'react-native';
import TotalOpinionCard from './TotalOpinionCard';
import { WINDOW_WIDTH } from '../../../../shared/constants/display';
import { OpinionParagraphId } from '../../../../shared/types/news';

interface TotalOpinionCategoryProps {
  opinionParagraph: OpinionParagraphId;
}

const TotalOpinionCategory = ({ opinionParagraph }: TotalOpinionCategoryProps) => {
  return (
    <View style={styles.container}>
      <TotalOpinionCard opinionParagraph={opinionParagraph} />
      <View style={styles.headerUnderLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerUnderLine: {
    width: WINDOW_WIDTH,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
});

export default TotalOpinionCategory;
