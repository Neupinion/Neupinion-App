import { WebViewNavigation } from 'react-native-webview';

export const getAccessTokenGoogle = (event: WebViewNavigation) => {
  const url = event.url;
  if (url.includes('https://dev.neupinion.com/login/google')) {
    const code = new URL(url).searchParams.get('code');
    if (code) {
      return code;
    }
  }
};
