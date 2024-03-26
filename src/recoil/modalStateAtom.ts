import { atom } from 'recoil';
import React from 'react';

export const modalStateAtom = atom<{ id: string; element: React.FC }[]>({
  key: 'modalState',
  default: [],
});
