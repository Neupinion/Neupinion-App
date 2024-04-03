import React from 'react';
import { DateProvider } from './src/features/date/provider/DateProvider';
import Navigation from './src/Navigation';
export default function App(): JSX.Element {
  return (
    <DateProvider>
      <Navigation />
    </DateProvider>
  );
}
