import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../rootStackParamList';
import VoteChartContainer from '../features/vote/components/VoteChartContainer';
import { WINDOW_WIDTH } from '../shared/constants/display';
import fontFamily from '../shared/styles/fontFamily';
import useFetch from '../shared/hooks/useFetch';
import { getReprocessedIssueVote } from '../features/vote/remotes/reprocessedIssueVote';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import TopOpinionSlider from '../features/vote/components/TopOpinionSlider';
import FollowUpIssueSlider from '../features/vote/components/FollowUpIssueSlider';
import RelatedIssues from '../features/vote/components/RelatedIssues';

const VoteResultPage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  type ScreenRouteProp = RouteProp<RootStackParamList, 'VoteResultPage'>;
  const route = useRoute<ScreenRouteProp>();
  const id: number = route.params.id;

  const fetchReprocessedIssueVote = () => getReprocessedIssueVote(id);
  const {
    data: voteData,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchReprocessedIssueVote, false);

  useEffect(() => {
    void fetchData();
  }, []);

  const onClickViewTotalVoteButton = () => {
    navigation.navigate('TotalVoteResultPage', { id: id });
  };

  const onClickShowOpinionButton = () => {
    navigation.navigate('OpinionMainPage', { id: id });
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

  if (!voteData) {
    return (
      <View style={styles.container}>
        <Text style={GlobalTextStyles.NormalText17}>No Data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewStyle}>
        <VoteChartContainer data={voteData} />
        <View style={styles.underChartContainer}>
          <TouchableOpacity style={styles.totalVotedButton} onPress={onClickViewTotalVoteButton}>
            <Text style={styles.totalVotedButtonText}>통합 투표 결과 보기</Text>
          </TouchableOpacity>
          <View style={styles.rankContainer}>
            <Text style={styles.rankTitleText}>전체 투표 순위</Text>
          </View>
        </View>
        <View style={styles.divideLine} />
        <TopOpinionSlider navigation={navigation} id={id} />
        <TouchableOpacity style={styles.opinionPageButton} onPress={onClickShowOpinionButton}>
          <Text style={styles.totalVotedButtonText}>의견 보기</Text>
        </TouchableOpacity>
        <View style={styles.divideLine} />
        <FollowUpIssueSlider id={id} />
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
  svgStyle: {
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
    marginBottom: 20,
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
    marginTop: 32,
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
});

export default VoteResultPage;
