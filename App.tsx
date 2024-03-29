import React from 'react';
import { DateProvider } from './src/features/date/provider/DateProvider';
import { useCachedResources } from './src/useCachedResources';
import Navigation from './src/Navigation';
import { RecoilRoot } from 'recoil';
import GlobalModal from './src/shared/components/Modal';
import GlobalBottomSheet from './src/shared/components/GlobalBottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
export default function App(): JSX.Element | null {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <RecoilRoot>
        <GestureHandlerRootView>
          <DateProvider>
            <Navigation />
            <GlobalModal />
            <GlobalBottomSheet />
          </DateProvider>
        </GestureHandlerRootView>
      </RecoilRoot>
    );
  } else {
    return null;
  }
}
