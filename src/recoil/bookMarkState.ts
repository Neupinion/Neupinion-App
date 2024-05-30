import { atom } from 'recoil';
import { bookMarkInfo } from '../features/remakeissue/types/bookMark';

export const bookMarkState = atom<bookMarkInfo>({
  key: 'bookMarkState',
  default: {
    id: 0,
    isBookMarkClicked: false,
  },
});
