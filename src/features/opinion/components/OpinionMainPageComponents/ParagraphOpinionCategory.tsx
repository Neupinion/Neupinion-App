import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ParagraphOpinionCard from './ParagraphOpinionCard';
import { getOpinionParagraph } from '../../remotes/individualVote';
import useFetch from '../../../../shared/hooks/useFetch';
import GlobalTextStyles from '../../../../shared/styles/GlobalTextStyles';
import EmptyScreen from '../../../../shared/components/Opinion/EmptyScreen';
import { WINDOW_WIDTH } from '../../../../shared/constants/display';

interface ParagraphOpinionCategoryProps {
  id: number;
}

const ParagraphOpinionCategory = ({ id }: ParagraphOpinionCategoryProps) => {
  const fetchOpinionParagraph = () => getOpinionParagraph(id, 'ALL', 'RECENT', 0);
  const {
    data: opinionParagraph,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchOpinionParagraph, false);

  useEffect(() => {
    void fetchData();
  }, []);
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
      <View>
        {!opinionParagraph ||
          (opinionParagraph.length === 0 && (
            <View style={styles.emptyContainer}>
              <EmptyScreen text={'등록된 의견이 없습니다.'} />
            </View>
          ))}
        {opinionParagraph &&
          opinionParagraph.map((item) => (
            <ParagraphOpinionCard key={item.id} item={item} id={id} />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
  emptyContainer: {
    width: WINDOW_WIDTH,
    height: 340,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ParagraphOpinionCategory;
