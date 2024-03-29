import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpinionPostPage from './pages/OpinionPostPage';
import OpinionPinPage from './pages/OpinionPinPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import Modal from './shared/components/Modal';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="DetailPage" component={DetailPage}></Stack.Screen>
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="OpinionPost" component={OpinionPostPage}></Stack.Screen>
          <Stack.Screen name="OpinionPin" component={OpinionPinPage}></Stack.Screen>
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="MainPage" component={MainPage}></Stack.Screen>
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="Modal"
            component={Modal}
            options={{
              presentation: 'transparentModal',
              animation: 'fade',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
