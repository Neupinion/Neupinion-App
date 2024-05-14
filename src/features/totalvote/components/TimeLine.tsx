import { getFollowUpIssueByIdVotePage } from '../../vote/remotes/getFollowUpIssue';
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
            <Text style={styles.dateText}>10.25</Text>
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
                    <Text style={styles.tagText}>첫 보도</Text>
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
                  <Text style={styles.boxTitle}>빅뱅 지드래곤도 마약 혐의로 입건</Text>
                  <Text style={styles.boxContext}>
                    25일 법조계와 경찰에 따르면 인천경찰청 마약범죄...
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </LinearGradient>
        </View>
        <View style={styles.issueContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.dateText}>10.25</Text>
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
                    <Text style={styles.tagText}>두 번째 보도</Text>
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
                  <Text style={styles.boxTitle}>빅뱅 지드래곤도 마약 혐의로 입건</Text>
                  <Text style={styles.boxContext}>
                    25일 법조계와 경찰에 따르면 인천경찰청 마약범죄...
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </LinearGradient>
        </View>
        <View style={styles.issueContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.dateText}>10.25</Text>
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
                    <Text style={styles.tagText}>세 번째 보도</Text>
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
                  <Text style={styles.boxTitle}>빅뱅 지드래곤도 마약 혐의로 입건</Text>
                  <Text style={styles.boxContext}>
                    25일 법조계와 경찰에 따르면 인천경찰청 마약범죄...
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </LinearGradient>
        </View>
      </View>
    );
  }

  return <View style={styles.container} />;
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
