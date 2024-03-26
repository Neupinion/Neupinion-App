import React from 'react';

export interface BottomSheetState {
  isOpen: boolean;
  content: React.ReactNode | null;
}
