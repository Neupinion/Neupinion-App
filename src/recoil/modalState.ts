import { atom } from 'recoil';
import { ModalState } from '../shared/types/modal';

export const modalState = atom<ModalState>({
  key: 'modalState',
  default: {
    isOpen: false,
    content: [],
  },
});
