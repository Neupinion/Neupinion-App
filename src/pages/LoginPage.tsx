import React, { useEffect, useState } from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
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
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "@env";
import axios from 'axios';
import { AccessToken } from '../features/auth/types/accessToken';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
WebBrowser.maybeCompleteAuthSession();

const icons = [KaKaoIcon, GoogleIcon, AppleIcon];

const LoginPage: React.FC = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
    iosClientId: GOOGLE_CLIENT_ID,
    androidClientId: GOOGLE_CLIENT_ID,
    scopes: ['email'],
    responseType: 'code',
    redirectUri: GOOGLE_REDIRECT_URI,
  });

  const [loading, setLoading] = useState(false);

  const handleSignInWithGoogle = async () => {
    if (response?.type === 'success' && response.authentication) {
      await getUserInfo(response.authentication.accessToken);
    }
  };

  const getUserInfo = async (token: string) => {
    if (!token) return;
    try {
      const userinfo = await axios.get<AccessToken>('https://dev.neupinion.com/login/google', {
        params: { code: response },
      });
      const accessToken = userinfo.data.accessToken;
      console.log(accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleLogout = async () => {
  //   await AsyncStorage.removeItem('user');
  //   setUserInfo(null);
  // };

  useEffect(() => {
    void handleSignInWithGoogle();
  }, [response]);

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
              <TouchableOpacity
                onPress={() => promptAsync({ useProxy: true })}
                style={styles.socialButton}
              >
                <WithLocalSvg width={21} height={21} asset={icons[index] as ImageSourcePropType} />
                <Text style={styles.socialText}>{text}</Text>
              </TouchableOpacity>
            </LinearGradient>
          ))}
        </View>
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
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
