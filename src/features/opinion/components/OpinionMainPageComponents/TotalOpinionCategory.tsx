import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import TotalOpinionCard from './TotalOpinionCard';
import { getOpinionTotal } from '../../remotes/individualVote';
import useFetch from '../../../../shared/hooks/useFetch';
import GlobalTextStyles from '../../../../shared/styles/GlobalTextStyles';

interface TotalOpinionCategoryProps {
  id: number;
  leftMainCategory: string;
  rightMainCategory: string;
}

const TotalOpinionCategory = ({
  id,
  leftMainCategory,
  rightMainCategory,
}: TotalOpinionCategoryProps) => {
  const fetchOpinionTotal = () =>
    getOpinionTotal(id, getCategoryType(leftMainCategory), getSortType(rightMainCategory), 0);
  const { data: opinionTotal, isLoading, error, fetchData } = useFetch(fetchOpinionTotal, false);

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

  const getSortType = (category: string) => {
    switch (category) {
      case '인기순':
        return 'POPULAR';
      case '최신순':
        return 'RECENT';
      default:
        return 'RECENT';
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
      {opinionTotal &&
        opinionTotal.map((item) => <TotalOpinionCard key={item.opinionId} item={item} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default TotalOpinionCategory;
