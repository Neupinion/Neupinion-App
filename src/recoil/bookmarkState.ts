import { atom } from 'recoil';
import { bookmarkInfo } from '../features/remakeissue/types/bookmark';

export const bookmarkState = atom<bookmarkInfo>({
  key: 'bookmarkState',
  default: {
    id: 0,
    isBookmarkClicked: false,
  },
});
