import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import fontFamily from '../../../shared/styles/fontFamily';
import theme from '../../../shared/styles/theme';
import { formatDate } from '../../remakeissue/constants/formatDate';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
import { getRelatedIssuesById } from '../remotes/getRecommendIssuesByCategory';
import useFetch from '../../../shared/hooks/useFetch';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';
import EmptyScreen from '../../../shared/components/Opinion/EmptyScreen';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../rootStackParamList";

interface RecommendIssuesProps {
  id: number;
}

const RelatedIssues = ({ id }: RecommendIssuesProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onClickReprocessedIssue = (itemId: number) => {
    const issue_id = Number(itemId);
    navigation.reset({
      index: 1,
      routes: [
        { name: 'MainPage' },
        { name: 'ReprocessedIssueDetailPage', params: { id: issue_id } },
      ],
    });
  };

  const fetchRecommendIssueByCategory = () => getRelatedIssuesById(id);
  const {
    data: followUpIssues,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchRecommendIssueByCategory, false);

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

  if (!followUpIssues || followUpIssues.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>이 뉴스도 한번 봐보세요</Text>
        <EmptyScreen text={'등록된 추천 이슈가 없습니다.'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>이 뉴스도 한번 봐보세요</Text>
      {followUpIssues.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => onClickReprocessedIssue(item.id)}
        >
          <View style={styles.leftContainer}>
            <Text style={styles.cardTitleText}>{item.title}</Text>
            <View style={styles.titleUnderContainer}>
              <View style={styles.tagBox}>
                <Text style={styles.tagText}>{item.category}</Text>
              </View>
              <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
            </View>
          </View>
          <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  leftContainer: {
    flex: 1,
  },
  titleText: {
    paddingHorizontal: 26,
    marginBottom: 20,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    color: theme.color.white,
    width: '100%',
  },
  card: {
    width: WINDOW_WIDTH - 52,
    height: 88,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.color.gray,
    borderRadius: 6,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  cardTitleText: {
    fontSize: 16,
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  titleUnderContainer: {
    width: 222,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 9,
  },
  tagBox: {
    display: 'flex',
    fontFamily: fontFamily.pretendard.medium,
    height: 22,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: theme.color.gray3,
    gap: 10,
  },
  tagText: {
    color: theme.color.white,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  dateText: {
    color: theme.color.gray5,
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginLeft: 7,
  },
  cardImage: {
    width: 49,
    height: 49,
    borderRadius: 5,
    backgroundColor: theme.color.white,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
});
export default RelatedIssues;
