import React, { useEffect, useRef, useState } from 'react';
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
import { WithLocalSvg } from 'react-native-svg';
import OpinionBackButton from '../assets/icon/opinionbackbutton.svg';
import OpinionCheckButton from '../assets/icon/opinionpurplecheck.svg';
import PinButton from '../features/opinion/components/PinButton';
import PinTextNumberContainer from '../features/opinion/components/PinTextNumberContainer';
import OpinionWriteContainer from '../features/opinion/components/OpinionWriteContainer';
import SentenceBox from '../features/opinion/components/SentenceBox';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../rootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import OpinionEvaluateReliability from '../features/opinion/components/OpinionEvaluateCredibility';
import { postReprocessedIssueOpinion } from '../features/opinion/remotes/opinion';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import useFetch from '../shared/hooks/useFetch';
import {
  extractIsReliable,
  extractSentenceIndex,
  extractText,
} from '../features/opinion/functions/opinionElementExtractFunction';

const OpinionPostPage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  type ScreenRouteProp = RouteProp<RootStackParamList, 'OpinionPost'>;
  const route = useRoute<ScreenRouteProp>();

  const [isEditMode, setIsEditMode] = useState<boolean>(!!route.params.opinionWrite);

  const [issueId] = useState<number>(route.params.issueId);
  const [text, setText] = useState<string>(extractText(route));
  const [sentenceIndex, setSentenceIndex] = useState<number>(extractSentenceIndex(route));
  const [isReliable, setIsReliable] = useState<boolean>(extractIsReliable(route));

  useEffect(() => {
    setText(extractText(route));
    setSentenceIndex(extractSentenceIndex(route));
    setIsReliable(extractIsReliable(route));
  }, [route.params]);

  const [sentenceNumberDefined, setSentenceNumberDefined] = useState<boolean>(isEditMode);
  const [isReliableDefined, setIsReliableDefined] = useState<boolean>(isEditMode);

  useEffect(() => {
    setIsEditMode(!!route.params.opinionWrite);
    setSentenceNumberDefined(isEditMode || route.params.sentenceNumber !== undefined);
    setIsReliableDefined(isEditMode || isReliable);
  }, [route.params, isEditMode, isReliable]);

  const { isLoading, error, fetchData } = useFetch(
    () => postReprocessedIssueOpinion(sentenceIndex, issueId, text, isReliable),
    false,
  );

  const onClickConfirmButton = async () => {
    if (sentenceNumberDefined && isReliableDefined && text.length) {
      await fetchData().then(() => {
        navigation.goBack();
      });
    }
  };

  const [isTextInputFocused, setIsTextInputFocused] = useState(false);
  const [targetY, setTargetY] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (isTextInputFocused) scrollViewRef.current?.scrollTo({ y: targetY, animated: true });
    else scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }, [isTextInputFocused]);

  const onClickShowNewsButton = () => {
    navigation.navigate('OpinionPin');
  };

  const onClickBackButton = () => {
    navigation.goBack();
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
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.topSvgStyle} onPress={onClickBackButton}>
          <WithLocalSvg width={10} height={20} asset={OpinionBackButton as ImageSourcePropType} />
        </TouchableOpacity>
        <Text style={styles.topTextStyle}>의견쓰기</Text>
        <TouchableOpacity style={styles.topSvgStyle} onPress={onClickConfirmButton}>
          <WithLocalSvg width={17} height={12} asset={OpinionCheckButton as ImageSourcePropType} />
        </TouchableOpacity>
      </View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={[
          styles.scrollViewContainer,
          { paddingBottom: isTextInputFocused ? 200 : 0 },
        ]}
      >
        <View
          onLayout={(event) => {
            const { y } = event.nativeEvent.layout;
            setTargetY(y + 30); // 디자인에서 정의한 크기로 이동
          }}
          style={styles.choosePinContainer}
        >
          <View style={styles.pinFirstTextContainer}>
            <PinTextNumberContainer
              circleNumber={1}
              circleText={'의견을 남길 부분을 선택해주세요'}
              isActivated={true}
            />
            {sentenceNumberDefined && (
              <TouchableOpacity style={styles.showNewsButton} onPress={onClickShowNewsButton}>
                <Text style={styles.showNewsText}>뉴스보기</Text>
              </TouchableOpacity>
            )}
          </View>
          {!sentenceNumberDefined && <PinButton />}
          {sentenceNumberDefined && <SentenceBox sentenceNumber={sentenceIndex} />}
        </View>
        <View style={styles.choosePinContainer}>
          <PinTextNumberContainer
            circleNumber={2}
            circleText={'생각쓰기'}
            isActivated={sentenceNumberDefined}
          />
          <OpinionWriteContainer
            isActivated={sentenceNumberDefined}
            setIsTextInputFocused={setIsTextInputFocused}
            text={text}
            setText={setText}
          />
        </View>
        <View style={styles.choosePinContainer}>
          <PinTextNumberContainer
            circleNumber={3}
            circleText={'신뢰도 평가하기'}
            isActivated={sentenceNumberDefined}
          />
          <OpinionEvaluateReliability
            isActivated={sentenceNumberDefined}
            isReliable={isReliable}
            setIsReliable={setIsReliable}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollViewContainer: {
    display: 'flex',
    minHeight: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    alignItems: 'center',
  },
  topContainer: {
    width: Dimensions.get('window').width,
    height: 30,
    marginTop: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSvgStyle: {
    width: 30,
    height: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  topTextStyle: {
    width: 234,
    color: theme.color.white,
    marginHorizontal: 30,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
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
});

export default OpinionPostPage;
