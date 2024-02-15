import React from 'react';
import TestPage from './src/pages/TestPage';
import { DateProvider } from './src/features/date/DateProvider';

export default function App(): JSX.Element {
  return (
    <DateProvider>
      <TestPage />
    </DateProvider>
  );
}
