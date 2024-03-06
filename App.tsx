import React, { useEffect, useState } from 'react';
import MainPage from './src/pages/MainPage';
import { DateProvider } from './src/features/date/provider/DateProvider';
import { useCachedResources } from './src/useCachedResources';
import AppLinkTestPage from "./src/pages/AppLinkTestPage";

export default function App(): JSX.Element | null {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <DateProvider>
        <AppLinkTestPage />
      </DateProvider>
    );
  } else {
    return null;
  }
}
