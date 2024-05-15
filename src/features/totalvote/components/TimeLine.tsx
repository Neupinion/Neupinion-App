import useFetch from '../../../shared/hooks/useFetch';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { WithLocalSvg } from 'react-native-svg/css';
import SeeOriginalSvg from '../../../assets/icon/seeOriginal.svg';
import { getTimeLineIssues } from '../remotes/getTimeLineIssues';
import { formatDate, formatMMDD, formatMonthDay } from "../../remakeissue/constants/formatDate";
import { getNewsReportOrdinalInKorean } from "../../../shared/functions/getNewsReportOrdinalInKorean";

interface TimeLineProps {
  id: number;
}
const TimeLine = ({ id }: TimeLineProps) => {
  const fetchIssueTimeLine = () => getTimeLineIssues(id);
  const { data: timeLineIssues, isLoading, error, fetchData } = useFetch(fetchIssueTimeLine, false);

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

  if (!timeLineIssues) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      {timeLineIssues.map((issue) => (
        <View key={issue.id} style={styles.issueContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.dateText}>{formatMMDD(issue.createdAt)}</Text>
            <View style={styles.dotLine}></View>
          </View>
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={theme.gradient.gradient1}
            style={styles.boxLine}
          >
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              colors={theme.gradient.gradient2}
              style={styles.issueBox}
            >
              <View style={styles.issueContextContainer}>
                <View style={styles.tagContainer}>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>{getNewsReportOrdinalInKorean(issue.id)}</Text>
                  </View>
                  <TouchableOpacity onPress={() => {}}>
                    <WithLocalSvg
                      width={79}
                      height={30}
                      asset={SeeOriginalSvg as ImageSourcePropType}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.boxTitle}>{issue.title}</Text>
                  <Text style={styles.boxContext}>작업이 필요합니다.</Text>
                </View>
              </View>
            </LinearGradient>
          </LinearGradient>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    gap: 20,
  },
  issueContainer: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 26,
    gap: 15,
    flexDirection: 'row',
  },
  issueContextContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    gap: 11,
  },
  timeContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 35,
    gap: 7,
  },
  issueBox: {
    width: '99.6%',
    height: 115,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 16,
  },
  boxLine: {
    flex: 1,
    height: 116,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  dateText: {
    color: theme.color.gray6,
    fontSize: 14,
    fontFamily: fontFamily.pretendard.bold,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
  dotLine: {
    width: 1,
    height: 92,
    alignSelf: 'center',
    flexShrink: 0,
    backgroundColor: theme.color.gray4,
    borderWidth: 0.8,
    borderStyle: 'dashed',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
    display: 'flex',
  },
  tag: {
    display: 'flex',
    height: 22,
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor: theme.color.main,
  },
  tagText: {
    color: theme.color.gray7,
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  boxTitle: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  boxContext: {
    color: theme.color.gray6,
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
});

export default TimeLine;
