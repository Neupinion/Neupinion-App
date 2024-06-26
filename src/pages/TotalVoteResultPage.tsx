import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import theme from '../shared/styles/theme';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../rootStackParamList';
import { WINDOW_WIDTH } from '../shared/constants/display';
import fontFamily from '../shared/styles/fontFamily';
import TotalVoteChartContainer from '../features/totalvote/components/TotalVoteChartContainer';
import RelatedIssues from '../features/vote/components/RelatedIssues';
import TimeLine from '../features/totalvote/components/TimeLine';
import useFetch from '../shared/hooks/useFetch';
import { getIntegratedResult } from '../features/totalvote/remotes/getIntegratedResult';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import EmptyScreen from '../shared/components/Opinion/EmptyScreen';
const TotalVoteResultPage = () => {
  type ScreenRouteProp = RouteProp<RootStackParamList, 'TotalVoteResultPage'>;
  const route = useRoute<ScreenRouteProp>();
  const id: number = route.params.id;

  const fetchReprocessedIssueIntegratedVote = () => getIntegratedResult(id);
  const {
    data: integratedVoteData,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchReprocessedIssueIntegratedVote, false);

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

  if (!integratedVoteData) {
    return (
      <View style={styles.container}>
        <EmptyScreen text={'통합 투표 화면이 없습니다.'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewStyle}>
        <TotalVoteChartContainer data={integratedVoteData} />
        <View style={styles.underChartContainer} />
        <View style={styles.divideLine} />
        <View style={styles.timeLineContainer}>
          <Text style={styles.rankTitleText}>타임라인 살펴보기</Text>
        </View>
        <TimeLine id={id} />
        <View style={styles.divideLine} />
        <RelatedIssues id={id} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iconButton: {
    height: 30,
    width: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewStyle: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
  topContainer: {
    paddingHorizontal: 26,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  underChartContainer: {
    paddingHorizontal: 26,
    marginBottom: 40,
    alignItems: 'center',
  },
  divideLine: {
    width: WINDOW_WIDTH,
    height: 10,
    marginVertical: 20,
    flexShrink: 0,
    backgroundColor: '#21202F',
  },
  rankContainer: {
    marginTop: 52,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  totalVotedButton: {
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
  totalVotedButtonText: {
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    color: theme.color.white,
    textAlign: 'center',
  },
  rankTitleText: {
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    color: theme.color.white,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
  topFiveOpinionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  opinionPageButton: {
    display: 'flex',
    borderRadius: 10,
    width: 160,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: theme.color.gray3,
    marginTop: 28,
    marginBottom: 20,
  },
  timeLineContainer: {
    paddingHorizontal: 26,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default TotalVoteResultPage;
