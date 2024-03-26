import { atom } from 'recoil';
import { ModalState } from '../shared/types/modalTypes';

export const modalState = atom<ModalState>({
  key: 'modalState',
  default: {
    isOpen: false,
    content: null,
  },
});
