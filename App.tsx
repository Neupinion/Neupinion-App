import React from 'react';
import { DateProvider } from './src/features/date/provider/DateProvider';
import { useCachedResources } from './src/useCachedResources';
import Navigation from './src/Navigation';
import { RecoilRoot } from 'recoil';
import OpinionMainPage from "./src/pages/OpinionMainPage";
export default function App(): JSX.Element | null {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <OpinionMainPage/>
      // <RecoilRoot>
      //   <DateProvider>
      //     <Navigation />
      //   </DateProvider>
      // </RecoilRoot>
    );
  } else {
    return null;
  }
}
