import React, { useRef } from 'react';
import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';
import theme from '../shared/styles/theme';
import { WINDOW_WIDTH } from '../shared/constants/display';
import NeupTextIcon from '../assets/icon/neuplogin.svg';
import { WithLocalSvg } from 'react-native-svg/css';
import {
  APP_TEXT_ICON_HEIGHT,
  APP_TEXT_ICON_WIDTH,
} from '../features/auth/constants/appTextIconSize';
import fontFamily from '../shared/styles/fontFamily';
import { LinearGradient } from 'expo-linear-gradient';
import { userAgent } from '../features/auth/constants/userAgent';
import { googleOAuthUri } from '../features/auth/constants/googleOAuthUri';
import { useRecoilState } from 'recoil';
import { webViewState } from '../recoil/webViewState';
import { socialAuthIcons, socialAuthTexts } from '../features/auth/constants/socialAuth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TokenResponse } from '../shared/types/tokenResponse';
import axios from 'axios';
import { API_URL } from '@env';

const LoginPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [webView, setWebView] = useRecoilState(webViewState);
  const webviewRef = useRef<WebView>(null);

  const closeWebView = () => {
    setWebView({ isOpen: false, isVisible: false });
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainPage' }],
    });
  };

  const hideWebView = () => {
    setWebView({ isOpen: true, isVisible: false });
  };

  const onNavigationStateChange = async (navState: WebViewNavigation) => {
    const { url } = navState;
    if (url.includes('accounts.google.com/signin/oauth/consent?authuser')) {
      hideWebView();
    }

    // const [storedAccessToken, storedRefreshToken] = await Promise.all([
    //   AsyncStorage.getItem('accessToken'),
    //   AsyncStorage.getItem('refreshToken'),
    // ]);
    // if (storedAccessToken && storedRefreshToken) {
    //   closeWebView();
    //   return { accessToken: storedAccessToken, refreshToken: storedRefreshToken };
    // }
  };
  const handleShouldStartLoadWithRequest = (request: WebViewNavigation) => {
    const url = request.url;

    if (url.startsWith(`${API_URL}/login/google?code`)) {
      closeWebView();
      axios
        .get(url)
        .then(async (response) => {
          const setCookie = response.headers['set-cookie'];
          if (setCookie) {
            const refreshToken = setCookie.find((cookie) => cookie.startsWith('refreshToken='));
            if (refreshToken) {
              const tokenValue = refreshToken.split(';')[0].split('=')[1];
              console.log('Refresh Token:', tokenValue);
              await AsyncStorage.setItem('refreshToken', tokenValue);
            } else {
              console.log('Refresh Token not found');
            }
          } else {
            console.log('Set-Cookie header not found');
          }

          const responseData = response.data as TokenResponse;
          if (responseData && responseData.accessToken) {
            const accessToken = responseData.accessToken;
            console.log('Access Token:', accessToken);
            await AsyncStorage.setItem('accessToken', accessToken);
          } else {
            console.log('Access Token not found in response');
          }

          console.log('Token URL', url);
        })
        .catch((error) => {
          console.error('Axios Error:', error);
          console.log('Error URL', url);
        });
      return false;
    }
    return true;
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
          {socialAuthTexts.map((text, index) => (
            <LinearGradient
              key={index}
              start={{ x: 2, y: 1 }}
              end={{ x: -1, y: 1 }}
              colors={theme.gradient.gradient1}
              style={styles.gradientBorder}
            >
              <TouchableOpacity
                onPress={() => setWebView({ isOpen: true, isVisible: true })}
                style={styles.socialButton}
              >
                <WithLocalSvg
                  width={21}
                  height={21}
                  asset={socialAuthIcons[index] as ImageSourcePropType}
                />
                <Text style={styles.socialText}>{text}</Text>
              </TouchableOpacity>
            </LinearGradient>
          ))}
        </View>
      </View>

      {webView.isOpen && (
        <Modal visible={webView.isOpen} animationType="slide">
          <WebView
            ref={webviewRef}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            cacheEnabled={false}
            userAgent={userAgent}
            incognito={true}
            style={webView.isVisible ? { marginTop: 30 } : { flex: 1, alignSelf: 'center' }}
            source={{ uri: googleOAuthUri }}
            onNavigationStateChange={onNavigationStateChange}
            onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
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
