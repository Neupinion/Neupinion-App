import { WebViewNavigation } from 'react-native-webview';
import { API_URL } from '@env';
import { client } from '../../../shared/remotes/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TokenResponse } from '../../../shared/types/tokenResponse';

export const getAccessTokenGoogle = async (
  event: WebViewNavigation,
  closeWebView: () => void,
): Promise<TokenResponse | null> => {
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
    if (url.includes(`${API_URL}/login/google`)) {
      const code = new URL(url).searchParams.get('code');
      if (code) {
        const response = await client.get('/login/google', {
          params: { code: code },
        });
        const cookies = response.headers['set-cookie'];

        if (cookies) {
          const refreshTokenCookie = cookies.find((cookie) => cookie.startsWith('refreshToken='));
          const refreshToken = refreshTokenCookie
            ? refreshTokenCookie.split(';')[0].split('=')[1]
            : null;

          if (refreshToken) {
            const data = response.data as TokenResponse;
            const { accessToken } = data;
            await Promise.all([
              AsyncStorage.setItem('refreshToken', refreshToken),
              AsyncStorage.setItem('accessToken', accessToken),
            ]);
            closeWebView();
            return { accessToken, refreshToken };
          }
        }
      }
    }
  } catch (e) {
    console.error('Failed to get access token:', e);
  }

  return null;
};
