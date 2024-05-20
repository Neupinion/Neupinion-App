import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ParagraphOpinionCard from './ParagraphOpinionCard';
import { getOpinionParagraph } from '../../remotes/individualVote';
import useFetch from '../../../../shared/hooks/useFetch';
import GlobalTextStyles from '../../../../shared/styles/GlobalTextStyles';

interface ParagraphOpinionCategoryProps {
  id: number;
  leftMainCategory: string;
}

const ParagraphOpinionCategory = ({ id, leftMainCategory }: ParagraphOpinionCategoryProps) => {
  const fetchOpinionParagraph = () =>
    getOpinionParagraph(id, getCategoryType(leftMainCategory), 'RECENT', 0);
  const {
    data: opinionParagraph,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchOpinionParagraph, false);

  useEffect(() => {
    void fetchData();
  }, []);

  const getCategoryType = (category: string) => {
    switch (category) {
      case '전체':
        return 'ALL';
      case '신뢰':
        return 'TRUST';
      case '의심':
        return 'DOUBT';
      default:
        return 'ALL';
    }
  };
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={GlobalTextStyles.NormalText17}>ERROR</Text>
      </View>
    );
  }
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
    marginTop: 30,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default ParagraphOpinionCategory;
