import React from 'react';
import { Animated } from 'react-native';

export interface ModalContent {
  component: React.ReactNode;
  openAnimation?: Animated.CompositeAnimation;
  closeAnimation?: Animated.CompositeAnimation;
}

export interface ModalState {
  isOpen: boolean;
  content: ModalContent[];
}
