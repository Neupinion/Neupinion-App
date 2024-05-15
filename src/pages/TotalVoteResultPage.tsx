import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageSourcePropType,
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
import PageHeader from '../shared/components/PageHeader';
import { WithLocalSvg } from 'react-native-svg/css';
import MainArrowLeftSvg from '../assets/icon/mainarrowLeft.svg';
import BookMarkSvg from '../assets/icon/bookmark.svg';
import { WINDOW_WIDTH } from '../shared/constants/display';
import fontFamily from '../shared/styles/fontFamily';
import { TotalVotedDataDummy } from '../dummy/TotalVotedDataDummy';
import TotalVoteChartContainer from '../features/totalvote/components/TotalVoteChartContainer';
import VoteRankContainer from '../features/vote/components/VoteRankContainer';
import { VotedDataDummy } from '../dummy/VotedDataDummy';
import RelatedIssues from '../features/vote/components/RelatedIssues';
import TimeLine from '../features/totalvote/components/TimeLine';
import useFetch from '../shared/hooks/useFetch';
import { getIntegratedResult } from '../features/totalvote/remotes/getIntegratedResult';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import EmptyScreen from "../shared/components/Opinion/EmptyScreen";
const TotalVoteResultPage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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
    console.log(integratedVoteData);
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
      <PageHeader
        leftIcons={
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
            <WithLocalSvg width={25} height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
          </TouchableOpacity>
        }
        centerText={'통합 투표 결과보기'}
        RightIcons={
          <>
            <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
              <WithLocalSvg width={23} height={23} asset={BookMarkSvg as ImageSourcePropType} />
            </TouchableOpacity>
          </>
        }
      />
      <ScrollView style={styles.scrollViewStyle}>
        <TotalVoteChartContainer data={integratedVoteData} />
        <View style={styles.underChartContainer}>
          <View style={styles.rankContainer}>
            <Text style={styles.rankTitleText}>전체 투표 순위</Text>
          </View>
          <VoteRankContainer data={integratedVoteData.voteRankings} />
        </View>
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
