import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { modalState } from '../../recoil/modalState';
import { Animated } from 'react-native';

export const useModal = () => {
  const setModalState = useSetRecoilState(modalState);

  const openModal = useCallback(
    (content: React.ReactNode, openAnimation?: Animated.CompositeAnimation) => {
      if (openAnimation) {
        openAnimation.start(() => {
          setModalState({ isOpen: true, content });
        });
      } else {
        setModalState({ isOpen: true, content });
      }
    },
    [setModalState],
  );

  const closeModal = useCallback(
    (closeAnimation?: Animated.CompositeAnimation) => {
      if (closeAnimation) {
        closeAnimation.start(() => {
          setModalState({ isOpen: false, content: null });
        });
      } else {
        setModalState({ isOpen: false, content: null });
      }
    },
    [setModalState],
  );

  return { openModal, closeModal };
};
