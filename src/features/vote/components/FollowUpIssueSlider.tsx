import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import fontFamily from '../../../shared/styles/fontFamily';
import theme from '../../../shared/styles/theme';
import FollowUpIssueCardGradient from '../../../shared/components/FollowUpIssue/FollowUpIssueCardGradient';
import { getFollowUpIssueByIdVotePage } from '../remotes/getFollowUpIssue';
import useFetch from '../../../shared/hooks/useFetch';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';
import EmptyScreen from '../../../shared/components/Opinion/EmptyScreen';

interface FollowUpIssueSliderProps {
  id: number;
}
const FollowUpIssueSlider = ({ id }: FollowUpIssueSliderProps) => {
  const fetchFollowUpIssue = () => getFollowUpIssueByIdVotePage(id);
  const {
    data: followUpIssuesVotePageItem,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchFollowUpIssue, false);

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

  if (!followUpIssuesVotePageItem || followUpIssuesVotePageItem.followUpIssues.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>후속 이슈</Text>
        <View style={{ marginTop: 12 }} />
        <EmptyScreen text={'후속 이슈가 존재하지 않습니다.'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>후속 이슈</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
        data={followUpIssuesVotePageItem.followUpIssues}
        renderItem={({ item }) => <FollowUpIssueCardGradient item={item} />}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
  cardContainer: {
    paddingHorizontal: 26,
    marginTop: 16,
    gap: 16,
  },
  titleText: {
    paddingHorizontal: 26,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    color: theme.color.white,
    width: '100%',
  },
  alertButton: {
    display: 'flex',
    borderRadius: 10,
    width: 160,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: theme.color.gray3,
    marginTop: 32,
  },
  alertButtonText: {
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    color: theme.color.white,
    textAlign: 'center',
  },
});
export default FollowUpIssueSlider;
