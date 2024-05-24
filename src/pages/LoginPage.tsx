import React from 'react';
import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import theme from '../shared/styles/theme';
import { WINDOW_WIDTH } from '../shared/constants/display';
import NeupTextIcon from '../assets/icon/neuplogin.svg';
import { WithLocalSvg } from 'react-native-svg/css';
import {
  APP_TEXT_ICON_HEIGHT,
  APP_TEXT_ICON_WIDTH,
} from '../features/auth/constants/appTextIconSize';
import fontFamily from '../shared/styles/fontFamily';
const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.uiContainer}>
        <WithLocalSvg
          width={APP_TEXT_ICON_WIDTH}
          height={APP_TEXT_ICON_HEIGHT}
          asset={NeupTextIcon as ImageSourcePropType}
        />
        <Text style={styles.normalText}>뉴피니언에 오신 것을 환영합니다.</Text>
        <View style={styles.socialButtonContainer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.background,
  },
  uiContainer: {
    width: WINDOW_WIDTH - 52,
    flexDirection: 'column',
  },
  normalText: {
    color: theme.color.gray6,
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
    marginTop: 7,
  },
  socialButtonContainer: {
    display: 'flex',
    width: '100%',
  },
});

export default LoginPage;
