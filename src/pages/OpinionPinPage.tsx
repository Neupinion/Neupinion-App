import React, { useState } from 'react';
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
import OpinionBackButton from '../assets/icon/opinionbackbutton.svg';
import OpinionCheckButton from '../assets/icon/opinionpurplecheck.svg';
import OpinionPinIssue from '../features/opinionpost/components/OpinionPinIssue';
import opinionPinSentenceDummy from '../dummy/OpinionPinSentenceDummy';
import OpinionPin from '../assets/icon/opinionpin.svg';
import { useNavigation } from '@react-navigation/native';

const OpinionPinPage = () => {
  const navigation = useNavigation();
  const [selectedPinIndex, setSelectedPinIndex] = useState(0);
  const onClickBackButton = () => {
    console.log('뒤로가기');
    navigation.goBack();
  };

  const onClickCheckButton = () => {
    console.log('내용이 없다면 알럿을...');
  };

  const onSelectPin = (index: number) => {
    setSelectedPinIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.topSvgStyle} onPress={onClickBackButton}>
          <WithLocalSvg width={10} height={20} asset={OpinionBackButton as ImageSourcePropType} />
        </TouchableOpacity>
        <Text style={styles.topTextStyle}></Text>
        <TouchableOpacity style={styles.topSvgStyle} onPress={onClickCheckButton}>
          <WithLocalSvg width={17} height={12} asset={OpinionCheckButton as ImageSourcePropType} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.pinTextContainer}>
          <Text style={styles.pinTextTitle}>의견을 남길 부분을 선택해주세요.</Text>
        </View>
        <OpinionPinIssue />
        <View style={styles.pinSentenceContainer}>
          {opinionPinSentenceDummy.map((item: string, index: number) => (
            <TouchableOpacity
              key={index}
              style={[styles.pinSentence, { opacity: selectedPinIndex === index ? 1 : 0.3 }]}
              onPress={() => onSelectPin(index)}
            >
              <View style={styles.pinContainer}>
                <TouchableOpacity style={styles.pin} onPress={onClickCheckButton}>
                  <WithLocalSvg width={20} height={20} asset={OpinionPin as ImageSourcePropType} />
                </TouchableOpacity>
              </View>
              <View style={styles.sentenceContainer}>
                <Text style={styles.sentenceText}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
  topContainer: {
    width: Dimensions.get('window').width,
    height: 30,
    marginTop: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewStyle: {
    width: Dimensions.get('window').width,
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
  pinTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
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
    gap: 8,
  },
  pinContainer: {
    display: 'flex',
    width: 20,
    flexDirection: 'column',
  },
  sentenceContainer: {
    display: 'flex',
    width: 314,
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
    width: 20,
    height: 20,
  },
});

export default OpinionPinPage;
