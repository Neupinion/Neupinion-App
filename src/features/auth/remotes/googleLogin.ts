import { WebViewNavigation } from 'react-native-webview';
import { API_URL } from '@env';

export const getAccessTokenGoogle = (event: WebViewNavigation) => {
  const url = event.url;
  if (url.includes(`${API_URL}/login/google`)) {
    const code = new URL(url).searchParams.get('code');
    if (code) {
      return code;
    }
  }
};
