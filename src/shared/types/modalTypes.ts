import React from 'react';

export interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
