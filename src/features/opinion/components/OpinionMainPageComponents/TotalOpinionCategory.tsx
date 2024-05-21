import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import TotalOpinionCard from './TotalOpinionCard';
import { getOpinionTotal } from '../../remotes/individualVote';
import useFetch from '../../../../shared/hooks/useFetch';
import GlobalTextStyles from '../../../../shared/styles/GlobalTextStyles';
import OpinionSubCategory from './OpinionSubCategory';
import { getSortType, getCategoryType } from '../../../../shared/constants/opinionCategory';
interface TotalOpinionCategoryProps {
  id: number;
}

const TotalOpinionCategory = ({ id }: TotalOpinionCategoryProps) => {
  const [leftSubCategory, setLeftSubCategory] = useState('전체');
  const [rightSubCategory, setRightSubCategory] = useState('최신순');
  const changeLeftCategory = (leftCategory: string) => {
    setLeftSubCategory(leftCategory);
  };
  const changeRightCategory = (rightCategory: string) => {
    setRightSubCategory(rightCategory);
  };
  const fetchOpinionTotal = () =>
    getOpinionTotal(id, getCategoryType(leftSubCategory), getSortType(rightSubCategory), 0);
  const { data: opinionTotal, isLoading, error, fetchData } = useFetch(fetchOpinionTotal, false);

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
      <OpinionSubCategory
        changeLeftCategory={changeLeftCategory}
        changeRightCategory={changeRightCategory}
      />
      {opinionTotal &&
        opinionTotal.map((item) => <TotalOpinionCard key={item.opinionId} item={item} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default TotalOpinionCategory;
