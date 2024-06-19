import React, { useEffect } from 'react';
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
import { WithLocalSvg } from 'react-native-svg/css';
import OpinionPinIssue from '../features/opinion/components/OpinionPinIssue';
import OpinionPin from '../assets/icon/opinionpin.svg';
import { getReprocessedIssueById } from '../features/remakeissue/remotes/reprocessedissue';
import useFetch from '../shared/hooks/useFetch';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import { WINDOW_WIDTH } from '../shared/constants/display';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { opinionPostActivityState, opinionPostState } from '../recoil/opinionPostState';
import Markdown from 'react-native-markdown-display';
import fontFamily from '../shared/styles/fontFamily';
import { issueNumberState } from '../recoil/issueState';

const OpinionPinPage = () => {
  const issueId = useRecoilValue(issueNumberState);
  const [opinionState, setOpinionPostState] = useRecoilState(opinionPostState);
  const setOpinionPostActivity = useSetRecoilState(opinionPostActivityState);

  const fetchReprocessedIssueById = () => getReprocessedIssueById(issueId);
  const {
    data: reprocessedIssue,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchReprocessedIssueById, false);

  useEffect(() => {
    void fetchData();
  }, []);

  const onSelectPin = (index: number) => {
    setOpinionPostState((prevState) => ({
      ...prevState,
      sentenceIndex: index,
    }));
    setOpinionPostActivity((prevState) => ({
      ...prevState,
      sentenceDefined: true,
    }));
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      </View>
    );
  }

  if (error || reprocessedIssue === null) {
    return (
      <View style={styles.container}>
        <Text style={GlobalTextStyles.NormalText17}>ERROR</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.pinTextContainer}>
          <Text style={styles.pinTextTitle}>의견을 남길 부분을 선택해주세요.</Text>
        </View>
        <OpinionPinIssue reprocessedIssue={reprocessedIssue} />
        <View style={styles.pinSentenceContainer}>
          {reprocessedIssue?.content
            .filter((item) => item.selected)
            .map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.pinSentence,
                  { opacity: opinionState.sentenceIndex === item.id ? 1 : 0.3 },
                ]}
                onPress={() => onSelectPin(item.id)}
              >
                <View style={styles.pinContainer}>
                  <View style={styles.pin}>
                    <WithLocalSvg
                      width={20}
                      height={20}
                      asset={OpinionPin as ImageSourcePropType}
                    />
                  </View>
                </View>
                <View style={styles.sentenceContainer}>
                  <Markdown style={markdownStyles} key={item.id}>
                    {item.paragraph}
                  </Markdown>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const markdownStyles = StyleSheet.create({
  body: {
    color: theme.color.white,
    textAlign: 'justify',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.42,
    fontFamily: fontFamily.pretendard.medium,
  },
  strong: {
    fontFamily: fontFamily.pretendard.bold,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
  topContainer: {
    width: WINDOW_WIDTH,
    height: 30,
    marginTop: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewStyle: {
    width: WINDOW_WIDTH,
  },
  topSvgStyle: {
    height: 30,
    width: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: WINDOW_WIDTH,
  },
  pinTextTitle: {
    marginTop: 20,
    color: theme.color.white,
    width: 338,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.6,
  },
  pinSentenceContainer: {
    marginTop: 20,
    marginBottom: 40,
    display: 'flex',
    paddingHorizontal: 26,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 21,
  },
  pinSentence: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 18,
    gap: 8,
  },
  pinContainer: {
    display: 'flex',
    width: 20,
    flexDirection: 'column',
  },
  sentenceContainer: {
    display: 'flex',
    width: '100%',
  },
  sentenceText: {
    color: theme.color.white,
    textAlign: 'justify',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  pin: {
    marginTop: 12,
    width: 20,
    height: 20,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default OpinionPinPage;
