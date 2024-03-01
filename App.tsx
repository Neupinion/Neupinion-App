import React from 'react';
import MainPage from './src/pages/MainPage';
import { DateProvider } from './src/features/date/provider/DateProvider';
import DetailPage from "./src/pages/DetailPage";

export default function App(): JSX.Element {
  return (
    // <DateProvider>
    //   <MainPage />
    // </DateProvider>
    <DetailPage />
  );
}
