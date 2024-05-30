import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpinionPostPage from './pages/OpinionPostPage';
import OpinionPinPage from './pages/OpinionPinPage';
import MainPage from './pages/MainPage';
import ModalContainer from './shared/components/ModalContainer';
import ReprocessedIssueDetailPage from './pages/ReprocessedIssueDetailPage';
import VoteResultPage from './pages/VoteResultPage';
import TotalVoteResultPage from './pages/TotalVoteResultPage';
import OpinionMainPage from './pages/OpinionMainPage';
import OpinionByParagraphPage from './pages/OpinionByParagraphPage';
import theme from './shared/styles/theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './rootStackParamList';
import MainPageHeader from './features/date/components/MainPageHeader';
import CustomHeader from './shared/components/CustomHeader';
import BookMarkButton from './features/remakeissue/components/BookMarkButton';
import AppShareButton from './shared/components/applink/AppLinkButton';
import OpinionPostCheckButton from './features/opinion/components/OpinionPostCheckButton';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
      <ModalContainer />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              options={({
                navigation,
              }: {
                navigation: StackNavigationProp<RootStackParamList, 'Main'>;
              }) => ({
                headerShown: true,
                headerStyle: {
                  backgroundColor: theme.color.background,
                },
                header: () => <MainPageHeader navigation={navigation} title="" />,
              })}
              name="MainPage"
              component={MainPage}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              options={({
                navigation,
              }: {
                navigation: StackNavigationProp<RootStackParamList, 'OpinionMainPage'>;
              }) => ({
                headerShown: true,
                header: () => (
                  <CustomHeader isBackButton={true} navigation={navigation} title="의견 보기" />
                ),
              })}
              name="OpinionMainPage"
              component={OpinionMainPage}
            />
            <Stack.Screen
              options={({
                navigation,
              }: {
                navigation: StackNavigationProp<RootStackParamList, 'OpinionParagraphPage'>;
              }) => ({
                headerShown: true,
                header: () => (
                  <CustomHeader isBackButton={true} navigation={navigation} title="의견 보기" />
                ),
              })}
              name="OpinionParagraphPage"
              component={OpinionByParagraphPage}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              options={({
                navigation,
              }: {
                navigation: StackNavigationProp<RootStackParamList, 'VoteResultPage'>;
              }) => ({
                headerShown: true,
                header: () => (
                  <CustomHeader
                    isBackButton={true}
                    navigation={navigation}
                    title="진짜일까, 가짜일까?"
                  />
                ),
              })}
              name="VoteResultPage"
              component={VoteResultPage}
            />
            <Stack.Screen
              options={({
                navigation,
              }: {
                navigation: StackNavigationProp<RootStackParamList, 'TotalVoteResultPage'>;
              }) => ({
                headerShown: true,
                header: () => (
                  <CustomHeader
                    isBackButton={true}
                    navigation={navigation}
                    title="진짜일까, 가짜일까?"
                  />
                ),
              })}
              name="TotalVoteResultPage"
              component={TotalVoteResultPage}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              options={({
                navigation,
              }: {
                navigation: StackNavigationProp<RootStackParamList, 'ReprocessedIssueDetailPage'>;
              }) => ({
                headerShown: true,
                header: () => (
                  <CustomHeader
                    isBackButton={true}
                    navigation={navigation}
                    title="진짜일까, 가짜일까?"
                    headerRightEl={[
                      <BookMarkButton key="bookmark" />,
                      <AppShareButton key="appshare" />,
                    ]}
                  />
                ),
              })}
              name="ReprocessedIssueDetailPage"
              component={ReprocessedIssueDetailPage}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              options={({
                navigation,
              }: {
                navigation: StackNavigationProp<RootStackParamList, 'OpinionPost'>;
              }) => ({
                headerShown: true,
                header: () => (
                  <CustomHeader
                    isBackButton={true}
                    navigation={navigation}
                    title="의견 쓰기"
                    headerRightEl={[
                      <OpinionPostCheckButton
                        onPress={() => navigation.goBack()}
                        activity="OpinionPost"
                        key="check"
                      />,
                    ]}
                  />
                ),
              })}
              name="OpinionPost"
              component={OpinionPostPage}
            />
            <Stack.Screen
              options={({
                navigation,
              }: {
                navigation: StackNavigationProp<RootStackParamList, 'OpinionPin'>;
              }) => ({
                headerShown: true,
                title: '핀 찍기',
                header: () => (
                  <CustomHeader
                    isBackButton={true}
                    navigation={navigation}
                    title=""
                    headerRightEl={[
                      <OpinionPostCheckButton
                        onPress={() => navigation.goBack()}
                        activity="OpinionPin"
                        key="check"
                      />,
                    ]}
                  />
                ),
              })}
              name="OpinionPin"
              component={OpinionPinPage}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
