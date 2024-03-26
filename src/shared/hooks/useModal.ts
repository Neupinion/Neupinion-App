// hooks/useModal.ts
import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { modalState } from '../../recoil/modalState';

type UseModalReturn = {
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
};

export const useModal = (): UseModalReturn => {
  const setModalState = useSetRecoilState(modalState);

  const openModal = useCallback(
    (content: React.ReactNode) => {
      setModalState({ isOpen: true, content });
    },
    [setModalState],
  );

  const closeModal = useCallback(() => {
    setModalState({ isOpen: false, content: null });
  }, [setModalState]);

  return { openModal, closeModal };
};
