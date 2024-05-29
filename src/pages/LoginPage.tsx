import React, { useState } from 'react';
import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View, Modal, Platform } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';
import theme from '../shared/styles/theme';
import { WINDOW_WIDTH } from '../shared/constants/display';
import NeupTextIcon from '../assets/icon/neuplogin.svg';
import GoogleIcon from '../assets/icon/googleicon.svg';
import KaKaoIcon from '../assets/icon/kakaologo.svg';
import AppleIcon from '../assets/icon/appleicon.svg';
import { WithLocalSvg } from 'react-native-svg/css';
import {
  APP_TEXT_ICON_HEIGHT,
  APP_TEXT_ICON_WIDTH,
} from '../features/auth/constants/appTextIconSize';
import fontFamily from '../shared/styles/fontFamily';
import { LinearGradient } from 'expo-linear-gradient';
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "@env";

const icons = [KaKaoIcon, GoogleIcon, AppleIcon];
const userAgent =
  'Mozilla/5.0 (Linux; Android 10; Android SDK built for x86 Build/LMY48X) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.117 Mobile Safari/608.2.11';

const LoginPage: React.FC = () => {
  const [showWebView, setShowWebView] = useState(false);
  const [authCode, setAuthCode] = useState<string | null>(null);

  const handleNavigationChange = (event: WebViewNavigation) => {
    const url = event.url;
    if (url.includes('https://dev.neupinion.com/login/google')) {
      const code = new URL(url).searchParams.get('code');
      if (code) {
        setAuthCode(code);
        setShowWebView(false);
        console.log('Authentication code:', code);
        // 여기서 원하는 작업을 수행할 수 있습니다.
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.uiContainer}>
        <WithLocalSvg
          width={APP_TEXT_ICON_WIDTH}
          height={APP_TEXT_ICON_HEIGHT}
          asset={NeupTextIcon as ImageSourcePropType}
        />
        <Text style={styles.normalText}>뉴피니언에 오신 것을 환영합니다.</Text>
        <View style={styles.socialButtonContainer}>
          {['카카오톡으로 로그인', '구글로 로그인', 'Apple로 로그인'].map((text, index) => (
            <LinearGradient
              key={index}
              start={{ x: 2, y: 1 }}
              end={{ x: -1, y: 1 }}
              colors={theme.gradient.gradient1}
              style={styles.gradientBorder}
            >
              <TouchableOpacity onPress={() => setShowWebView(true)} style={styles.socialButton}>
                <WithLocalSvg width={21} height={21} asset={icons[index] as ImageSourcePropType} />
                <Text style={styles.socialText}>{text}</Text>
              </TouchableOpacity>
            </LinearGradient>
          ))}
        </View>
      </View>

      {showWebView && (
        <Modal visible={showWebView} animationType="slide">
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            cacheEnabled={false}
            userAgent={
              Platform.OS === 'android'
                ? 'Chrome/18.0.1025.133 Mobile Safari/535.19'
                : 'AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75'
            }
            incognito={true}
            style={{ marginTop: 30 }}
            source={{
              uri: `https://accounts.google.com/o/oauth2/v2/auth?scope=profile&response_type=code&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}`,
            }}
            onNavigationStateChange={handleNavigationChange}
          />
        </Modal>
      )}
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
    marginTop: 60,
    gap: 16,
  },
  socialButton: {
    width: '100%',
    borderRadius: 5,
    height: 48,
    backgroundColor: theme.color.gray2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 13,
  },
  gradientBorder: {
    padding: 1,
    borderRadius: 7,
  },
  socialText: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22.5,
    letterSpacing: -0.45,
    marginLeft: 12,
  },
});

export default LoginPage;
