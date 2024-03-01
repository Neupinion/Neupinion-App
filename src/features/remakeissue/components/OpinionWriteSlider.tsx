import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';
import theme from '../../../shared/styles/theme';
import PaperSvg from '../../../assets/icon/paper.svg';
import PencilSvg from '../../../assets/icon/pencil.svg';
import { WithLocalSvg } from 'react-native-svg';

const OpinionWriteSlider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={GlobalTextStyles.NormalText17}>의견 쓰기</Text>
      </View>
      <WithLocalSvg width={88.242} height={91} asset={PaperSvg as ImageSourcePropType} />
      <WithLocalSvg
        width={79}
        height={30}
        asset={PencilSvg as ImageSourcePropType}
        style={[styles.pencil]}
      />
      <Text style={styles.textStyle}>아직 의견이 없어요!</Text>
      <View style={styles.opinionButton}>
        <Text style={styles.buttonText}>의견 남기기</Text>
      </View>
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
  },
  textStyle: {
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  opinionButton: {
    width: 131,
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
  pencil: {
    top: -40,
    left: -50,
  },
});

export default OpinionWriteSlider;
