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
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonNumber) => {
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
        <TouchableOpacity
          style={[styles.svgBaseStyle, selectedButton === 1 && styles.svgSelectedStyle]}
          onPress={() => handleButtonPress(1)}
        >
          <WithLocalSvg height={66.94156} asset={Moon1Svg as ImageSourcePropType} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.svgBaseStyle, selectedButton === 2 && styles.svgSelectedStyle]}
          onPress={() => handleButtonPress(2)}
        >
          <WithLocalSvg height={66.94156} asset={Moon2Svg as ImageSourcePropType} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.svgBaseStyle, selectedButton === 3 && styles.svgSelectedStyle]}
          onPress={() => handleButtonPress(3)}
        >
          <WithLocalSvg height={66.94156} asset={Moon3Svg as ImageSourcePropType} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.svgBaseStyle, selectedButton === 4 && styles.svgSelectedStyle]}
          onPress={() => handleButtonPress(4)}
        >
          <WithLocalSvg height={66.94156} asset={Moon4Svg as ImageSourcePropType} />
        </TouchableOpacity>
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
    gap: 16.06,
    position: 'absolute',
    height: 58.8,
  },
});

export default ReliabilitySLider;
