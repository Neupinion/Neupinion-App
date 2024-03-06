import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';
import ReliabiltyBackGroundSvg from '../../../assets/icon/reliabiltybackground2.svg';
import { WithLocalSvg } from 'react-native-svg';
import theme from '../../../shared/styles/theme';
import Moon1Svg from '../../../assets/icon/moon1.svg';
import Moon2Svg from '../../../assets/icon/moon2.svg';
import Moon3Svg from '../../../assets/icon/moon3.svg';
import Moon4Svg from '../../../assets/icon/moon4.svg';
const ReliabilitySLider = () => {
  const moons = [
    { id: 1, SvgComponent: Moon1Svg },
    { id: 2, SvgComponent: Moon2Svg },
    { id: 3, SvgComponent: Moon3Svg },
    { id: 4, SvgComponent: Moon4Svg },
  ];
  const reliabilityTexts = [
    { id: 1, text: '완전 신뢰' },
    { id: 2, text: '조금 신뢰' },
    { id: 3, text: '조금 의심' },
    { id: 4, text: '완전 의심' },
  ];

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonPress = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={GlobalTextStyles.NormalText17}>신뢰도 평가하기</Text>
      </View>
      <View style={styles.ReliabiltyBackGroundSvg}>
        <WithLocalSvg asset={ReliabiltyBackGroundSvg as ImageSourcePropType} />
      </View>
      <View style={styles.moonContainer}>
        {moons.map((moon) => (
          <TouchableOpacity
            key={moon.id}
            style={[styles.svgBaseStyle, selectedButton === moon.id && styles.svgSelectedStyle]}
            onPress={() => handleButtonPress(moon.id)}
          >
            <WithLocalSvg height={66.94156} asset={moon.SvgComponent as ImageSourcePropType} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.reliabiltContainer}>
        {reliabilityTexts.map((textData) => (
          <Text
            key={textData.id}
            style={[
              styles.reliabiltyTextBase,
              selectedButton === textData.id && styles.reliabiltyText,
            ]}
          >
            {textData.text}
          </Text>
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
        <Text style={styles.buttonText}>투표하고 결과보기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: Dimensions.get('window').width,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ReliabiltyBackGroundSvg: {
    width: Dimensions.get('window').width - 52,
    marginTop: 30,
    alignItems: 'center',
    opacity: 1,
  },
  submitButton: {
    width: 174,
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.color.gray5,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
  svgBaseStyle: {
    opacity: 0,
  },
  svgSelectedStyle: {
    opacity: 1,
  },
  moonContainer: {
    flexDirection: 'row',
    gap: 15.06,
    position: 'absolute',
    height: 95.8,
  },
  reliabiltyText: {
    fontSize: 14,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  reliabiltyTextBase: {
    fontSize: 14,
    color: theme.color.gray6,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  reliabiltContainer: {
    flexDirection: 'row',
    marginHorizontal: 47,
    marginTop: 19.99,
    // backgroundColor: 'tomato',
    gap: 32,
  },
});

export default ReliabilitySLider;
