import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import TotalOpinionCard from './TotalOpinionCard';
import { WINDOW_WIDTH } from '../../../../shared/constants/display';
import { getOpinionTotal } from '../../remotes/individualVote';
import useFetch from '../../../../shared/hooks/useFetch';
import GlobalTextStyles from '../../../../shared/styles/GlobalTextStyles';

interface TotalOpinionCategoryProps {
  id: number;
  leftMainCategory: string;
}

const TotalOpinionCategory = ({ id, leftMainCategory }: TotalOpinionCategoryProps) => {
  // const fetchOpinionTotal = () => getOpinionTotal(id, 'ALL', 'RECENT', 0);
  // const { data: opinionTotal, isLoading, error, fetchData } = useFetch(fetchOpinionTotal, false);
  //
  // useEffect(() => {
  //   void fetchData();
  // }, []);
  // if (isLoading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size="large" style={styles.activityIndicator} />
  //     </View>
  //   );
  // }
  //
  // if (error) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={GlobalTextStyles.NormalText17}>ERROR</Text>
  //     </View>
  //   );
  // }
  const opinionTotal = [
    {
      issueType: 'REPROCESSED',
      issueId: 1,
      opinionId: 1,
      memberId: 1,
      nickname: '김철수',
      profileImageUrl: 'https://www.neupinion.com/profile/1',
      paragraphId: 20,
      paragraphContent: '이 부분이 문제가 되는 이유는...',
      isReliable: true,
      content: '이런 부분은 문제가 있어요!',
      likeCount: 10,
      isLiked: true,
      createdAt: '2024-05-20T05:37:59.251Z',
    },
    {
      issueType: 'REPROCESSED',
      issueId: 1,
      opinionId: 2,
      memberId: 1,
      nickname: '김철수',
      profileImageUrl: 'https://www.neupinion.com/profile/1',
      paragraphId: 20,
      paragraphContent: '이 부분이 문제가 되는 이유는...',
      isReliable: true,
      content: '이런 부분은 문제가 있어요!',
      likeCount: 10,
      isLiked: true,
      createdAt: '2024-05-20T05:37:59.251Z',
    },
    {
      issueType: 'REPROCESSED',
      issueId: 1,
      opinionId: 3,
      memberId: 3,
      nickname: '김철수',
      profileImageUrl: 'https://www.neupinion.com/profile/1',
      paragraphId: 20,
      paragraphContent: '이 부분이 문제가 되는 이유는...',
      isReliable: true,
      content: '이런 부분은 문제가 있어요!',
      likeCount: 10,
      isLiked: true,
      createdAt: '2024-05-20T05:37:59.251Z',
    },
  ];
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
