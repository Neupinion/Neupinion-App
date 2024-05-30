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
import { ImageSourcePropType, StyleSheet, TouchableOpacity } from 'react-native';
import fontFamily from './shared/styles/fontFamily';
import theme from './shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg/css';
import MainArrowLeftSvg from './assets/icon/mainarrowLeft.svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './rootStackParamList';
import BookMarkSvg from './assets/icon/bookmark.svg';
import OpinionCheckButton from './assets/icon/opinionpurplecheck.svg';
import MainPageDateButton from './features/date/components/MainPageHeader';
import MainPageHeader from "./features/date/components/MainPageHeader";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
      <ModalContainer />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.color.background,
            },
            headerTitleStyle: styles.headerTitleStyle,
          }}
        >
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
                title: '의견보기',
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
                  </TouchableOpacity>
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
                title: '의견보기',
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
                  </TouchableOpacity>
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
                title: '진짜일까,가짜일까?',
                headerLeft: () => (
                  <TouchableOpacity onPress={navigation.goBack}>
                    <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity onPress={() => {}}>
                    <WithLocalSvg
                      width={23}
                      height={23}
                      asset={BookMarkSvg as ImageSourcePropType}
                    />
                  </TouchableOpacity>
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
                title: '진짜일까,가짜일까?',
                headerLeft: () => (
                  <TouchableOpacity onPress={navigation.goBack}>
                    <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity onPress={() => {}}>
                    <WithLocalSvg
                      width={23}
                      height={23}
                      asset={BookMarkSvg as ImageSourcePropType}
                    />
                  </TouchableOpacity>
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
                title: '진짜일까,가짜일까?',
                headerLeft: () => (
                  <TouchableOpacity onPress={navigation.goBack}>
                    <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity onPress={() => {}}>
                    <WithLocalSvg
                      width={23}
                      height={23}
                      asset={BookMarkSvg as ImageSourcePropType}
                    />
                  </TouchableOpacity>
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
                title: '의견 쓰기',
                headerLeft: () => (
                  <TouchableOpacity onPress={navigation.goBack}>
                    <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity onPress={() => {}}>
                    <WithLocalSvg
                      width={23}
                      height={23}
                      asset={BookMarkSvg as ImageSourcePropType}
                    />
                  </TouchableOpacity>
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
                title: '',
                headerLeft: () => (
                  <TouchableOpacity onPress={navigation.goBack}>
                    <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity onPress={() => {}}>
                    <WithLocalSvg height={16} asset={OpinionCheckButton as ImageSourcePropType} />
                  </TouchableOpacity>
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

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: theme.color.background,
    shadowColor: theme.color.gray6,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
    height: 60,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontWeight: '700',
  },
});

export default Navigation;
