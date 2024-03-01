import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          "pretendard-bold": require('./assets/fonts/Pretendard-Bold.ttf'),
          "pretendard-extrabold": require('./assets/fonts/Pretendard-ExtraBold.ttf'),
          "pretendard-extralight": require('./assets/fonts/Pretendard-ExtraLight.ttf'),
          "pretendard-light": require('./assets/fonts/Pretendard-Light.ttf'),
          "pretendard-medium": require('./assets/fonts/Pretendard-Medium.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
