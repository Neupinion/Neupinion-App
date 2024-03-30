import React from 'react';
import { DateProvider } from './src/features/date/provider/DateProvider';
import { useCachedResources } from './src/useCachedResources';
import Navigation from './src/Navigation';
import { RecoilRoot } from 'recoil';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import ModalContainer from './src/shared/components/ModalContainer';
export default function App(): JSX.Element | null {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <RecoilRoot>
        <GestureHandlerRootView>
          <DateProvider>
            <ModalContainer />
            <Navigation />
          </DateProvider>
        </GestureHandlerRootView>
      </RecoilRoot>
    );
  } else {
    return null;
  }
}
