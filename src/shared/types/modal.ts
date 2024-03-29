import React from 'react';

export interface ModalContent {
  component: React.ReactNode;
}

export interface ModalState {
  isOpen: boolean;
  content: ModalContent[];
}
