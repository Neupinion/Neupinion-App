import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          'pretendard-bold': require('./assets/fonts/Pretendard-Bold.ttf'),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          'pretendard-extrabold': require('./assets/fonts/Pretendard-ExtraBold.ttf'),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          'pretendard-extralight': require('./assets/fonts/Pretendard-ExtraLight.ttf'),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          'pretendard-light': require('./assets/fonts/Pretendard-Light.ttf'),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          'pretendard-medium': require('./assets/fonts/Pretendard-Medium.ttf'),
        });
        setIsLoadingComplete(true);
      } catch (e) {
        console.warn(e);
      }
    }

    void loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    async function hideSplashScreen() {
      if (isLoadingComplete) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await SplashScreen.hideAsync();
      }
    }

    void hideSplashScreen();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
