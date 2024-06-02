import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import ReprocessedIssueContentsSlider from '../features/remakeissue/components/ReprocessedIssueContentsSlider';
import OpinionWriteSlider from '../features/remakeissue/components/OpinionWriteSlider';
import ReliabilityEvaluation from '../features/remakeissue/components/ReliabilityEvaluation';
import CategoryLatestNews from '../features/remakeissue/components/CategoryLatestNews';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';
import { getReprocessedIssueContent } from '../features/remakeissue/remotes/reprocessedIssueContent';
import useFetch from '../shared/hooks/useFetch';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import { WINDOW_WIDTH } from '../shared/constants/display';
import { useSetRecoilState } from 'recoil';
import { issueNumberState } from '../recoil/issueState';
import { bookmarkState } from '../recoil/bookmarkState';
import { bookmarkInfo } from '../features/remakeissue/types/bookmark';
import TopOpinionSlider from '../features/vote/components/TopOpinionSlider';
import fontFamily from '../shared/styles/fontFamily';
const ReprocessedIssueDetailPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  type ScreenRouteProp = RouteProp<RootStackParamList, 'ReprocessedIssueDetailPage'>;
  const route = useRoute<ScreenRouteProp>();
  const id: number = route.params.id;

  const setIssueState = useSetRecoilState<number>(issueNumberState);
  const setBookmarkState = useSetRecoilState<bookmarkInfo>(bookmarkState);

  const fetchReprocessedIssue = () => getReprocessedIssueContent(id);
  const onClickShowOpinionButton = () => {
    navigation.navigate('OpinionMainPage', { id: id });
  };
  const {
    data: reprocessedIssue,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchReprocessedIssue, false);

  useEffect(() => {
    void fetchData();

    if (reprocessedIssue) {
      setIssueState(id);
      setBookmarkState({
        id: reprocessedIssue.id,
        isBookmarkClicked: reprocessedIssue.isBookmarked,
      });
    }
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
      <View style={styles.headerUnderLine} />
      <ScrollView style={styles.scrollViewStyle}>
        <ReprocessedIssueContentsSlider reprocessedIssue={reprocessedIssue} />
        <View style={styles.divideLine} />
        <OpinionWriteSlider navigation={navigation} issueId={id} />
        <View style={styles.divideLine} />
        <TopOpinionSlider id={id} />
        <TouchableOpacity style={styles.opinionPageButton} onPress={onClickShowOpinionButton}>
          <Text style={styles.totalVotedButtonText}>의견 보기</Text>
        </TouchableOpacity>
        {/*<ReliabilityEvaluation navigation={navigation} issueId={id} />*/}
        <View style={styles.divideLine} />
        {reprocessedIssue !== null && (
          <CategoryLatestNews current={id} category={reprocessedIssue.category} />
        )}
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
  headerSvg: {
    alignSelf: 'center',
  },
  titleContainer: {
    width: WINDOW_WIDTH,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  svgStyle: {
    height: 30,
    width: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewStyle: {
    width: WINDOW_WIDTH,
    flex: 1,
  },
  headerUnderLine: {
    width: WINDOW_WIDTH,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
  divideLine: {
    width: WINDOW_WIDTH,
    height: 10,
    marginVertical: 12,
    marginTop: 40,
    flexShrink: 0,
    backgroundColor: '#21202F',
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
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
});

export default ReprocessedIssueDetailPage;
