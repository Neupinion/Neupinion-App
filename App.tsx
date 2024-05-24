import React, { useCallback } from "react";
import { DateProvider } from './src/features/date/provider/DateProvider';
import { useCachedResources } from './src/useCachedResources';
import Navigation from './src/Navigation';
import { RecoilRoot } from 'recoil';

export default function App(): JSX.Element | null {
  const isLoaded = useCachedResources();

  if (!isLoaded) {
    return null;
  }

  return (
    <RecoilRoot>
      <DateProvider>
        <Navigation />
      </DateProvider>
    </RecoilRoot>
  );
}
