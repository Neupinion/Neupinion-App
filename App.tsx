import React, { useEffect, useState } from 'react';
import MainPage from './src/pages/MainPage';
import { DateProvider } from './src/features/date/provider/DateProvider';
import { useCachedResources } from './src/useCachedResources';

export default function App(): JSX.Element | null {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <DateProvider>
        <MainPage />
      </DateProvider>
    );
  } else {
    return null;
  }
}
