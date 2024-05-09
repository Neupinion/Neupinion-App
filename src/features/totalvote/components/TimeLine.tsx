import { getFollowUpIssueByIdVotePage } from '../../vote/remotes/getFollowUpIssue';
import useFetch from '../../../shared/hooks/useFetch';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { WINDOW_WIDTH } from "../../../shared/constants/display";
import theme from "../../../shared/styles/theme";
import fontFamily from "../../../shared/styles/fontFamily";
import GlobalTextStyles from "../../../shared/styles/GlobalTextStyles";
import EmptyOpinionScreen from "../../../shared/components/Opinion/EmptyOpinionScreen";
import OpinionPaper from "../../../shared/components/Opinion/OpinionPaper";
import { LinearGradient } from "expo-linear-gradient";
import { formatDate } from "../../remakeissue/constants/formatDate";

interface TimeLineProps {
  id: number;
}
const TimeLine = ({ id }: TimeLineProps) => {
  const fetchFollowUpIssueTotalPage = () => getFollowUpIssueByIdVotePage(id);
  const {
    data: followUpIssuesTotalVotePage,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchFollowUpIssueTotalPage, false);

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

  if (!followUpIssuesTotalVotePage || followUpIssuesTotalVotePage.followUpIssues.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.issueContainer}>
          <View style={styles.timeContainer}>

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

            </LinearGradient>
          </LinearGradient>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container} />
  );
}

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
    gap: 15,
    flexDirection: 'row',
  },
  timeContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 35,
    gap: 7,
  },
  issueBox: {
    display: 'flex',
    width: 265,
    height: 84,
    paddingVertical: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 10,
    gap: 11,
  },
  boxLine: {
    width: 266,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 10,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default TimeLine;
