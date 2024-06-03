import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
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

  return isLoadingComplete;
}
