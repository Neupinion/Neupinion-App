import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../recoil/modalState';
import { ModalContent } from '../types/modal';

export const useModal = () => {
  const [{ content }, setModalState] = useRecoilState(modalState);

  const openModal = useCallback(
    (component: React.ReactNode) => {
      const newContent: ModalContent = { component };

      setModalState((prevState) => ({
        isOpen: true,
        content: [...prevState.content, newContent],
      }));
    },
    [setModalState],
  );

  const closeModal = useCallback(() => {
    setModalState((prevState) => ({
      isOpen: prevState.content.length > 1,
      content: prevState.content.slice(0, -1),
    }));
  }, [content, setModalState]);

  return { openModal, closeModal };
};
