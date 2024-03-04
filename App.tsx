import React from 'react';
import MainPage from './src/pages/MainPage';
import { DateProvider } from './src/features/date/provider/DateProvider';
import OpinionPostPage from './src/pages/OpinionPostPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OpinionPinPage from './src/pages/OpinionPinPage';

const Stack = createStackNavigator();
export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OpinionPost" component={OpinionPostPage} />
        <Stack.Screen name="OpinionPin" component={OpinionPinPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
