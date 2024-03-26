import React from 'react';

export interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
}
