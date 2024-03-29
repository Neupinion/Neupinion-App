import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../recoil/modalState';
import { ModalContent } from '../types/modal';
import { Animated } from 'react-native';

export const useModal = () => {
  const [{ content }, setModalState] = useRecoilState(modalState);

  const openModal = useCallback(
    (
      component: React.ReactNode,
      openAnimation?: Animated.CompositeAnimation,
      closeAnimation?: Animated.CompositeAnimation,
    ) => {
      const newContent: ModalContent = { component, openAnimation, closeAnimation };
      setModalState((prevState) => ({
        isOpen: true,
        content: [...prevState.content, newContent],
      }));
      openAnimation?.start();
    },
    [setModalState],
  );

  const closeModal = useCallback(() => {
    const lastModal = content[content.length - 1];
    lastModal?.closeAnimation?.start(() => {
      setModalState((prevState) => ({
        isOpen: prevState.content.length > 1,
        content: prevState.content.slice(0, -1),
      }));
    });
  }, [content, setModalState]);

  return { openModal, closeModal };
};
