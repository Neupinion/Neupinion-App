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
import { WithLocalSvg } from 'react-native-svg/css';
import MainArrowLeftSvg from './assets/icon/mainarrowLeft.svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './rootStackParamList';
import BookMarkSvg from './assets/icon/bookmark.svg';
import OpinionCheckButton from './assets/icon/opinionpurplecheck.svg';
import MainPageHeader from './features/date/components/MainPageHeader';
import CustomHeader from './shared/components/CustomHeader';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import toggleBookmark from './features/remakeissue/remotes/toggleBookmark';
import AnotherBookMarkSvg from './assets/icon/anotherbookmark.svg';
import ShareSvg from './assets/icon/share.svg';
import { useRecoilState } from 'recoil';
import { bookMarkState } from './recoil/bookMarkState';
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
                header: () => {
                  const [issueBookMarkState, setIssueBookMarkState] = useRecoilState(bookMarkState);

                  const onClickBookMark = async () => {
                    await toggleBookmark();
                    setIssueBookMarkState((prevState) => ({
                      ...prevState,
                      isBookMarkClicked: !prevState.isBookMarkClicked,
                    }));
                  };

                  return (
                    <CustomHeader
                      isBackButton={true}
                      navigation={navigation}
                      title="진짜일까, 가짜일까?"
                      headerRightEl={[
                        <TouchableOpacity style={styles.headerSvg} onPress={onClickBookMark}>
                          {issueBookMarkState.isBookMarkClicked ? (
                            <WithLocalSvg
                              width={23}
                              height={23}
                              asset={AnotherBookMarkSvg as ImageSourcePropType}
                            />
                          ) : (
                            <WithLocalSvg
                              width={23}
                              height={23}
                              asset={BookMarkSvg as ImageSourcePropType}
                            />
                          )}
                        </TouchableOpacity>,
                        <TouchableOpacity style={styles.headerSvg} onPress={() => {}}>
                          <WithLocalSvg
                            width={24}
                            height={23}
                            asset={ShareSvg as ImageSourcePropType}
                          />
                        </TouchableOpacity>,
                      ]}
                    />
                  );
                },
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
                  <CustomHeader isBackButton={true} navigation={navigation} title="의견 쓰기" />
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
                header: () => <CustomHeader isBackButton={true} navigation={navigation} title="" />,
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
