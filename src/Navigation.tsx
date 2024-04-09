import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpinionPostPage from './pages/OpinionPostPage';
import OpinionPinPage from './pages/OpinionPinPage';
import MainPage from './pages/MainPage';
import ModalContainer from './shared/components/ModalContainer';
import ReprocessedIssueDetailPage from './pages/ReprocessedIssueDetailPage';
import VoteResultPage from './pages/VoteResultPage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
      <ModalContainer />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Group>
            <Stack.Screen name="MainPage" component={MainPage} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              name="ReprocessedIssueDetailPage"
              component={ReprocessedIssueDetailPage}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name="OpinionPost" component={OpinionPostPage} />
            <Stack.Screen name="OpinionPin" component={OpinionPinPage} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name="VoteResultPage" component={VoteResultPage} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default Navigation;
