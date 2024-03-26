import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { bottomSheetState } from '../../recoil/bottomSheetState';

type UseBottomSheetReturn = {
  openBottomSheet: (content: React.ReactNode) => void;
};

export const useBottomSheet = (): UseBottomSheetReturn => {
  const setBottomSheetState = useSetRecoilState(bottomSheetState);

  const openBottomSheet = useCallback(
    (content: React.ReactNode) => {
      setBottomSheetState({ isOpen: true, content });
    },
    [setBottomSheetState],
  );

  return { openBottomSheet };
};
