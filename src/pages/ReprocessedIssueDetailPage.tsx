import React, { useEffect, useState } from 'react';
import {
  Dimensions,
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
const ReprocessedIssueDetailPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  type ScreenRouteProp = RouteProp<RootStackParamList, 'ReprocessedIssueDetailPage'>;
  const route = useRoute<ScreenRouteProp>();
  const id: number = route.params.id;

  const [bookMarkClicked, setBookMarkClicked] = useState(false);

  const fetchReprocessedIssue = () => getReprocessedIssueContent(id);
  const { data: reprocessedIssue, fetchData } = useFetch(fetchReprocessedIssue, false);

  useEffect(() => {
    void fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity style={styles.svgStyle} onPress={() => {}}>
            <WithLocalSvg height={30} asset={MainArrowLeftSvg as ImageSourcePropType} />
          </TouchableOpacity>
          <Text style={styles.headerText}>진짜일까, 가짜일까?</Text>
        </View>
        <View style={styles.headerRightContainer}>
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
        </View>
      </View>
      <View style={styles.headerUnderLine} />
      <ScrollView style={{ width: Dimensions.get('window').width, flex: 1 }}>
        <ReprocessedIssueContentsSlider reprocessedIssue={reprocessedIssue} />
        <View style={styles.divideLine} />
        <OpinionWriteSlider navigation={navigation} issueId={id} />
        <View style={styles.divideLine} />
        <ReliabilityEvaluation issueId={id} />
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
    backgroundColor: theme.color.black,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerContainer: {
    width: Dimensions.get('window').width,
    height: 64,
    marginTop: 45.76,
    paddingLeft: 18,
    paddingRight: 23,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeftContainer: {
    flexDirection: 'row',
  },
  headerRightContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  headerText: {
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
    marginLeft: 70,
  },
  headerSvg: {
    alignSelf: 'center',
  },
  titleContainer: {
    width: Dimensions.get('window').width,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  svgStyle: {
    height: 30,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  headerUnderLine: {
    width: Dimensions.get('window').width,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
  divideLine: {
    width: Dimensions.get('window').width,
    height: 10,
    marginVertical: 12,
    marginTop: 40,
    flexShrink: 0,
    backgroundColor: '#21202F',
  },
});

export default ReprocessedIssueDetailPage;
