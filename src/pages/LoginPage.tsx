import React, { useEffect } from "react";
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
import { getAccessTokenGoogle } from '../features/auth/remotes/googleLogin';
import { useRecoilState } from 'recoil';
import { webViewState } from '../recoil/webViewState';
import { socialAuthIcons, socialAuthTexts } from '../features/auth/constants/socialAuth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';

const LoginPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [webView, setWebView] = useRecoilState(webViewState);

  const closeWebView = () => {
    setWebView({ isOpen: false });
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainPage' }],
    });
  };

  const handleNavigationChangeGoogle = async (event: WebViewNavigation) => {
    await getAccessTokenGoogle(event, closeWebView);
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
                onPress={() => setWebView({ isOpen: true })}
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
            javaScriptEnabled={true}
            domStorageEnabled={true}
            cacheEnabled={false}
            userAgent={userAgent}
            incognito={true}
            style={{ marginTop: 30 }}
            source={{ uri: googleOAuthUri }}
            onNavigationStateChange={handleNavigationChangeGoogle}
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
