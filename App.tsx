import React, { useEffect, useState } from 'react';
import MainPage from './src/pages/MainPage';
import { DateProvider } from './src/features/date/provider/DateProvider';
import * as Font from 'expo-font';
import { FontSource } from 'expo-font';

interface FontMap {
  [name: string]: FontSource;
}

export default function App(): JSX.Element {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadFontAsync() {
      const fontMap: FontMap = {
        pretendardBlack: require('./assets/fonts/Pretendard-Black.ttf'),
      };
      try {
        await Font.loadAsync(fontMap);
        setIsReady(true);
      } catch (error) {
        console.error('Font loading error:', error);
      }
    }

    loadFontAsync();
  }, []);

  return <DateProvider>{isReady && <MainPage />}</DateProvider>;
}
