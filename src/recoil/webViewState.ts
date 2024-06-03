import { atom } from 'recoil';
import { WebViewState } from '../shared/types/webView';
export const webViewState = atom<WebViewState>({
  key: 'webViewState',
  default: {
    isOpen: false,
  },
});
