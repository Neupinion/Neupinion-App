import React from 'react';
import { Dimensions, ImageSourcePropType, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import theme from '../shared/styles/theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../rootStackParamList';
import PageHeader from '../shared/components/PageHeader';
import { WithLocalSvg } from 'react-native-svg';
import MainArrowLeftSvg from '../assets/icon/mainarrowLeft.svg';
import toggleBookmark from '../features/remakeissue/remotes/toggleBookmark';
import AnotherBookMarkSvg from '../assets/icon/anotherbookmark.svg';
import BookMarkSvg from '../assets/icon/bookmark.svg';
import ShareSvg from '../assets/icon/share.svg';

const VoteResultPage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <PageHeader
        leftIcons={
          <TouchableOpacity style={styles.svgStyle} onPress={navigation.goBack}>
            <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
          </TouchableOpacity>
        }
        centerText={'진짜일까,가짜일까?'}
        RightIcons={
          <>
            <TouchableOpacity style={styles.svgStyle} onPress={() => {}}>
              {true ? (
                <WithLocalSvg
                  width={23}
                  height={23}
                  asset={AnotherBookMarkSvg as ImageSourcePropType}
                />
              ) : (
                <WithLocalSvg width={23} height={23} asset={BookMarkSvg as ImageSourcePropType} />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.svgStyle} onPress={() => {}}>
              <WithLocalSvg width={24} height={23} asset={ShareSvg as ImageSourcePropType} />
            </TouchableOpacity>
          </>
        }
      />
      <ScrollView style={styles.scrollViewStyle}>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  svgStyle: {
    height: 30,
    width: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewStyle: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
});

export default VoteResultPage;
