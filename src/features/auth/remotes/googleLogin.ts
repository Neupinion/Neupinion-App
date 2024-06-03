import { WebViewNavigation } from 'react-native-webview';
import { API_URL } from '@env';
import { client } from '../../../shared/remotes/axios';

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const getAccessTokenGoogle = async (
  event: WebViewNavigation,
): Promise<TokenResponse | null> => {
  const url = event.url;
  if (url.includes(`${API_URL}/login/google`)) {
    const code = new URL(url).searchParams.get('code');
    if (code) {
      try {
        const response = await client.get(url);
        const cookies = response.headers['set-cookie'];

        if (cookies) {
          const refreshTokenCookie = cookies.find((cookie) => cookie.startsWith('refreshToken='));
          const refreshToken = refreshTokenCookie
            ? refreshTokenCookie.split(';')[0].split('=')[1]
            : null;

          if (refreshToken) {
            const data = response.data as TokenResponse;
            const { accessToken } = data;
            return { accessToken, refreshToken };
          }
        }
      } catch (e) {
        console.error('Failed to get access token:', e);
        return null;
      }
    }
  }
  return null;
};
