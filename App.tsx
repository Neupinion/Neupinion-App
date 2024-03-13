import React from 'react';
import { DateProvider } from './src/features/date/provider/DateProvider';
import { useCachedResources } from './src/useCachedResources';
import Navigation from './src/Navigation';

export default function App(): JSX.Element | null {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <DateProvider>
        <Navigation />
      </DateProvider>
    );
  } else {
    return null;
  }
}
