import React from 'react';
import { DateProvider } from './src/features/date/provider/DateProvider';
import { useCachedResources } from './src/useCachedResources';
import Navigation from './src/Navigation';
import { RecoilRoot } from 'recoil';
import GlobalModal from "./src/shared/components/GlobalModal";
import GlobalBottomSheet from "./src/shared/components/GlobalBottomSheet";

export default function App(): JSX.Element | null {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <RecoilRoot>
        <DateProvider>
          <GlobalModal />
          <GlobalBottomSheet />
          <Navigation />
        </DateProvider>
      </RecoilRoot>
    );
  } else {
    return null;
  }
}
