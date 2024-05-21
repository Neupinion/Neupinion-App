import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ParagraphOpinionCard from './ParagraphOpinionCard';
import { getOpinionParagraph } from '../../remotes/individualVote';
import useFetch from '../../../../shared/hooks/useFetch';
import GlobalTextStyles from '../../../../shared/styles/GlobalTextStyles';

interface ParagraphOpinionCategoryProps {
  id: number;
}

const ParagraphOpinionCategory = ({ id }: ParagraphOpinionCategoryProps) => {
  // const fetchOpinionParagraph = () => getOpinionParagraph(id, 'ALL', 'RECENT', 0);
  // const {
  //   data: opinionParagraph,
  //   isLoading,
  //   error,
  //   fetchData,
  // } = useFetch(fetchOpinionParagraph, false);
  //
  // useEffect(() => {
  //   void fetchData();
  // }, []);
  //
  // const getCategoryType = (category: string) => {
  //   switch (category) {
  //     case '전체':
  //       return 'ALL';
  //     case '신뢰':
  //       return 'TRUST';
  //     case '의심':
  //       return 'DOUBT';
  //     default:
  //       return 'ALL';
  //   }
  // };
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

  const opinionParagraph = [
    {
      id: 1,
      content: '펜타곤이 폭발한 사진이 트위터에서 활발하게 공유되었습니다.',
      opinions: [
        {
          id: 1,
          memberId: 1,
          nickname: '김철수',
          profileImageUrl: 'https://www.neupinion.com/profile/1',
          createdAt: '2024-05-20T05:37:59.247Z',
          isReliable: true,
          paragraphId: 20,
          paragraphContent: '이 부분이 문제가 되는 이유는...',
          content: '이런 부분은 문제가 있어요!',
          likeCount: 10,
          isLiked: true,
        },
        {
          id: 1,
          memberId: 1,
          nickname: '김철수',
          profileImageUrl: 'https://www.neupinion.com/profile/1',
          createdAt: '2024-05-20T05:37:59.247Z',
          isReliable: true,
          paragraphId: 20,
          paragraphContent: '이 부분이 문제가 되는 이유는...',
          content: '이런 부분은 문제가 있어요!',
          likeCount: 10,
          isLiked: true,
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      {opinionParagraph &&
        opinionParagraph.map((item) => <ParagraphOpinionCard key={item.id} item={item} id={id} />)}
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
