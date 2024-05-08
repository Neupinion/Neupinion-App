import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import MainArrowLeftSvg from '../assets/icon/mainarrowLeft.svg';
import BookMarkSvg from '../assets/icon/bookmark.svg';
import AnotherBookMarkSvg from '../assets/icon/anotherbookmark.svg';
import ShareSvg from '../assets/icon/share.svg';
import ReprocessedIssueContentsSlider from '../features/remakeissue/components/ReprocessedIssueContentsSlider';
import OpinionWriteSlider from '../features/remakeissue/components/OpinionWriteSlider';
import ReliabilityEvaluation from '../features/remakeissue/components/ReliabilityEvaluation';
import CategoryLatestNews from '../features/remakeissue/components/CategoryLatestNews';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';
import { getReprocessedIssueContent } from '../features/remakeissue/remotes/reprocessedIssueContent';
import useFetch from '../shared/hooks/useFetch';
import toggleBookmark from '../features/remakeissue/remotes/toggleBookmark';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import PageHeader from '../shared/components/PageHeader';
import { WINDOW_WIDTH } from '../shared/constants/display';
const ReprocessedIssueDetailPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  type ScreenRouteProp = RouteProp<RootStackParamList, 'ReprocessedIssueDetailPage'>;
  const route = useRoute<ScreenRouteProp>();
  const id: number = route.params.id;

  const [bookMarkClicked, setBookMarkClicked] = useState(false);

  const fetchReprocessedIssue = () => getReprocessedIssueContent(id);
  const {
    data: reprocessedIssue,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchReprocessedIssue, false);

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
      <PageHeader
        leftIcons={
          <TouchableOpacity style={styles.svgStyle} onPress={navigation.goBack}>
            <WithLocalSvg width={25} height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
          </TouchableOpacity>
        }
        centerText={'진짜일까, 가짜일까?'}
        RightIcons={
          <>
            <TouchableOpacity
              style={styles.headerSvg}
              onPress={() => toggleBookmark(id, bookMarkClicked, setBookMarkClicked)}
            >
              {bookMarkClicked ? (
                <WithLocalSvg
                  width={23}
                  height={23}
                  asset={AnotherBookMarkSvg as ImageSourcePropType}
                />
              ) : (
                <WithLocalSvg width={23} height={23} asset={BookMarkSvg as ImageSourcePropType} />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerSvg} onPress={() => {}}>
              <WithLocalSvg width={24} height={23} asset={ShareSvg as ImageSourcePropType} />
            </TouchableOpacity>
          </>
        }
      />
      <View style={styles.headerUnderLine} />
      <ScrollView style={styles.scrollViewStyle}>
        <ReprocessedIssueContentsSlider reprocessedIssue={reprocessedIssue} />
        <View style={styles.divideLine} />
        <OpinionWriteSlider navigation={navigation} issueId={id} />
        <View style={styles.divideLine} />
        <ReliabilityEvaluation navigation={navigation} issueId={id} />
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
    backgroundColor: theme.color.BG,
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
});

export default ReprocessedIssueDetailPage;
