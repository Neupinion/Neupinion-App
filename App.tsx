import React from 'react';
import Navigation from './src/Navigation';
import { DateProvider } from './src/features/date/provider/DateProvider';

export default function App(): JSX.Element {
  return (
    <DateProvider>
      <Navigation />
    </DateProvider>
  );
}
