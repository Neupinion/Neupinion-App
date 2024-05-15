import React from 'react';
import { StyleSheet, View } from 'react-native';
import ParagraphOpinionCard from './ParagraphOpinionCard';
import { OpinionParagraphId } from '../../../../shared/types/news';

interface ParagraphOpinionCategoryProps {
  opinionParagraph: OpinionParagraphId[];
}

const ParagraphOpinionCategory = ({ opinionParagraph }: ParagraphOpinionCategoryProps) => {
  return (
    <View style={styles.container}>
      {opinionParagraph &&
        opinionParagraph.map((item) => <ParagraphOpinionCard key={item.id} item={item} />)}
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
