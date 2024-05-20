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
  // const opinionTotal = [
  //   {
  //     issueType: 'REPROCESSED',
  //     issueId: 1,
  //     opinionId: 1,
  //     memberId: 1,
  //     nickname: '김철수',
  //     profileImageUrl: 'https://www.neupinion.com/profile/1',
  //     paragraphId: 20,
  //     paragraphContent: '이 부분이 문제가 되는 이유는...',
  //     isReliable: true,
  //     content: '이런 부분은 문제가 있어요!',
  //     likeCount: 10,
  //     isLiked: true,
  //     createdAt: '2024-05-20T05:37:59.251Z',
  //   },
  //   {
  //     issueType: 'REPROCESSED',
  //     issueId: 1,
  //     opinionId: 2,
  //     memberId: 1,
  //     nickname: '김철수',
  //     profileImageUrl: 'https://www.neupinion.com/profile/1',
  //     paragraphId: 20,
  //     paragraphContent: '이 부분이 문제가 되는 이유는...',
  //     isReliable: true,
  //     content: '이런 부분은 문제가 있어요!',
  //     likeCount: 10,
  //     isLiked: true,
  //     createdAt: '2024-05-20T05:37:59.251Z',
  //   },
  //   {
  //     issueType: 'REPROCESSED',
  //     issueId: 1,
  //     opinionId: 3,
  //     memberId: 3,
  //     nickname: '김철수',
  //     profileImageUrl: 'https://www.neupinion.com/profile/1',
  //     paragraphId: 20,
  //     paragraphContent: '이 부분이 문제가 되는 이유는...',
  //     isReliable: true,
  //     content: '이런 부분은 문제가 있어요!',
  //     likeCount: 10,
  //     isLiked: true,
  //     createdAt: '2024-05-20T05:37:59.251Z',
  //   },
  // ];
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
