import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  ImageSourcePropType,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import OpinionBackButton from '../assets/icon/opinionbackbutton.svg';
import OpinionCheckButton from '../assets/icon/opinionpurplecheck.svg';
import PinButton from '../features/opinionpost/components/PinButton';
import PinTextNumberContainer from '../features/opinionpost/components/PinTextNumberContainer';
import OpinionWriteContainer from '../features/opinionpost/components/OpinionWriteContainer';
import SentenceBox from '../features/opinionpost/components/SentenceBox';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../rootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';

const OpinionPostPage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  type ScreenRouteProp = RouteProp<RootStackParamList, 'OpinionPost'>;
  const route = useRoute<ScreenRouteProp>();

  const [isTextInputFocused, setIsTextInputFocused] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const sentenceIndex = route.params?.sentenceNumber;
  const onClickBackButton = () => {
    console.log('뒤로가기');
  };

  const onClickCheckButton = () => {
    console.log('내용이 없다면 알럿을...');
  };

  const onClickShowNewsButton = () => {
    navigation.navigate('OpinionPin');
  };

  const keyboardDismiss = () => {
    Keyboard.dismiss;
    setIsTextInputFocused(false);
  };

  useEffect(() => {
    if (isTextInputFocused) {
      const targetYPosition = 1000;
      scrollViewRef.current?.scrollTo({ y: targetYPosition, animated: true });
    } else {
      const targetYPosition = 0;
      scrollViewRef.current?.scrollTo({ y: targetYPosition, animated: true });
    }
  }, [isTextInputFocused]);

  return (
    <TouchableWithoutFeedback onPress={keyboardDismiss}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: 'height' })}
        style={styles.container}
      >
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.topSvgStyle} onPress={onClickBackButton}>
            <WithLocalSvg width={10} height={20} asset={OpinionBackButton as ImageSourcePropType} />
          </TouchableOpacity>
          <Text style={styles.topTextStyle}>의견쓰기</Text>
          <TouchableOpacity style={styles.topSvgStyle} onPress={onClickCheckButton}>
            <WithLocalSvg
              width={17}
              height={12}
              asset={OpinionCheckButton as ImageSourcePropType}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollViewContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.choosePinContainer}>
            <View style={styles.pinFirstTextContainer}>
              <PinTextNumberContainer
                circleNumber={1}
                circleText={'의견을 남길 부분을 선택해주세요'}
                isActivate={true}
              />
              {sentenceIndex !== undefined && (
                <TouchableOpacity style={styles.showNewsButton} onPress={onClickShowNewsButton}>
                  <Text style={styles.showNewsText}>뉴스보기</Text>
                </TouchableOpacity>
              )}
            </View>
            {sentenceIndex === undefined && <PinButton />}
            {sentenceIndex !== undefined && <SentenceBox sentenceNumber={sentenceIndex} />}
          </View>
          <View style={styles.choosePinContainer}>
            <PinTextNumberContainer
              circleNumber={2}
              circleText={'생각쓰기'}
              isActivate={sentenceIndex !== undefined}
            />
            <OpinionWriteContainer
              isActivate={sentenceIndex !== undefined}
              setIsTextInputFocused={setIsTextInputFocused}
            />
          </View>
          <View style={styles.choosePinContainer}>
            <PinTextNumberContainer
              circleNumber={3}
              circleText={'신뢰도 평가하기'}
              isActivate={sentenceIndex !== undefined}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>믿을 수 있어요</Text>
              </View>
              <View style={styles.button}>
                <Text style={styles.buttonText}>의심이 가요</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    flex: 1,
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
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: 338,
  },
  button: {
    display: 'flex',
    borderRadius: 10,
    backgroundColor: '#212A3C',
    width: 164,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#4E5867',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: -0.54,
  },
});

export default OpinionPostPage;