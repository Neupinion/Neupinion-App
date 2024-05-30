import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import PinButton from '../features/opinion/components/PinButton';
import PinTextNumberContainer from '../features/opinion/components/PinTextNumberContainer';
import OpinionWriteContainer from '../features/opinion/components/OpinionWriteContainer';
import SentenceBox from '../features/opinion/components/SentenceBox';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../rootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import OpinionEvaluateReliability from '../features/opinion/components/OpinionEvaluateCredibility';
import {
  patchReprocessedIssueOpinion,
  postReprocessedIssueOpinion,
} from '../features/opinion/remotes/opinion';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import useFetch from '../shared/hooks/useFetch';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../shared/constants/display';
import { useRecoilState, useRecoilValue } from 'recoil';
import { opinionPostActivityState, opinionPostState } from '../recoil/opinionPostState';

const OpinionPostPage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const opinionState = useRecoilValue(opinionPostState);
  const [opinionActivityState, setOpinionActivityState] = useRecoilState(opinionPostActivityState);

  useEffect(() => {
    setOpinionActivityState({
      sentenceDefined: opinionState.editMode,
      reliableDefined: opinionState.editMode,
    });
  }, []);

  const submitOpinion = () => {
    const { editMode, opinionId, sentenceIndex, text, isReliable, issueId } = opinionState;

    if (editMode) {
      return patchReprocessedIssueOpinion(opinionId, sentenceIndex, text, isReliable);
    } else {
      return postReprocessedIssueOpinion(sentenceIndex, issueId, text, isReliable);
    }
  };

  const { isLoading, error, fetchData } = useFetch(submitOpinion, false);

  const onClickConfirmButton = async () => {
    if (
      opinionActivityState.sentenceDefined &&
      opinionActivityState.reliableDefined &&
      opinionState.text.length
    ) {
      await fetchData().then(() => {
        navigation.goBack();
      });
    }
  };

  const [isTextInputFocused, setIsTextInputFocused] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const onClickShowNewsButton = () => {
    navigation.navigate('OpinionPin');
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

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={[
          styles.scrollViewContainer,
          { paddingBottom: isTextInputFocused ? 200 : 0 },
        ]}
      >
        <View style={styles.choosePinContainer}>
          <View style={styles.pinFirstTextContainer}>
            <PinTextNumberContainer
              circleNumber={1}
              circleText={'의견을 남길 부분을 선택해주세요'}
              isActivated={true}
            />
            {opinionActivityState.sentenceDefined && (
              <TouchableOpacity style={styles.showNewsButton} onPress={onClickShowNewsButton}>
                <Text style={styles.showNewsText}>뉴스보기</Text>
              </TouchableOpacity>
            )}
          </View>
          {!opinionActivityState.sentenceDefined && <PinButton />}
          {opinionActivityState.sentenceDefined && (
            <SentenceBox sentenceNumber={opinionState.sentenceIndex} />
          )}
        </View>
        <View style={styles.choosePinContainer}>
          <PinTextNumberContainer
            circleNumber={2}
            circleText={'생각쓰기'}
            isActivated={opinionActivityState.sentenceDefined}
          />
          <OpinionWriteContainer setIsTextInputFocused={setIsTextInputFocused} />
        </View>
        <View style={styles.choosePinContainer}>
          <PinTextNumberContainer
            circleNumber={3}
            circleText={'신뢰도 평가하기'}
            isActivated={opinionActivityState.sentenceDefined}
          />
          <OpinionEvaluateReliability />
          <TouchableOpacity onPress={onClickConfirmButton} style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>의견 제출</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollViewContainer: {
    display: 'flex',
    minHeight: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
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
  topSvgStyle: {
    height: 30,
    width: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choosePinContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
    gap: 16,
    width: 338,
  },
  pinFirstTextContainer: {
    flexDirection: 'row',
    gap: 14,
  },
  showNewsButton: {
    display: 'flex',
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(126, 88, 233, 0.2)',
  },
  showNewsText: {
    color: theme.color.main,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  avoid: {
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
  confirmButton: {
    display: 'flex',
    width: 338,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: theme.color.main,
    marginTop: 10,
    marginBottom: 25,
  },
  confirmButtonText: {
    color: theme.color.white,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
});

export default OpinionPostPage;
