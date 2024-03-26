import { atom } from 'recoil';
import { BottomSheetState } from '../shared/types/bottomSheet';

export const bottomSheetState = atom<BottomSheetState>({
  key: 'bottomSheetState',
  default: {
    isOpen: false,
    content: null,
  },
});
