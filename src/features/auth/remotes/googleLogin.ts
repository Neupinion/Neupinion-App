import { WebView, WebViewNavigation } from 'react-native-webview';
import { API_URL } from '@env';
import { client } from '../../../shared/remotes/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TokenResponse, TokenStatus } from '../../../shared/types/tokenResponse';
import React from 'react';

export const getAccessTokenGoogle = async (
  event: WebViewNavigation,
  closeWebView: () => void,
  webviewRef: React.RefObject<WebView>,
): Promise<TokenStatus | null> => {
  try {
    const [storedAccessToken, storedRefreshToken] = await Promise.all([
      AsyncStorage.getItem('accessToken'),
      AsyncStorage.getItem('refreshToken'),
    ]);
    if (storedAccessToken && storedRefreshToken) {
      closeWebView();
      return { accessToken: storedAccessToken, refreshToken: storedRefreshToken };
    }

    const url = event.url;

    const script = `
        (function() {
          const data = document.body.innerText;
          window.ReactNativeWebView.postMessage(data);
        })();
      `;

    if (webviewRef.current) {
      webviewRef.current.injectJavaScript(script);
    }
  } catch (e) {
    console.error('Failed to get access token:', e);
  }

  return null;
};
