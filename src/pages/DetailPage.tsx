import React from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import { WithLocalSvg } from 'react-native-svg';
import MainArrowLeftSVg from '../assets/icon/mainarrowLeft.svg';
import BookMarkSvg from '../assets/icon/bookmark.svg';
import ShareSvg from '../assets/icon/share.svg';
import MainSearch from '../assets/icon/mainsearch.svg';
import MainUser from '../assets/icon/mainuser.svg';

const TestPage = () => {
  const onClickButton = () => {
    console.log('해당 버튼은, 이전 페이지로 이동합니다.');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity style={styles.svgStyle} onPress={onClickButton}>
            <WithLocalSvg height={30} asset={MainArrowLeftSVg as ImageSourcePropType} />
          </TouchableOpacity>
          <Text style={styles.headerText}>진짜일까, 가짜일까</Text>
        </View>
        <View style={styles.headerRightContainer}>
          <TouchableOpacity style={styles.headerSvg} onPress={onClickButton}>
            <WithLocalSvg width={23} height={23} asset={BookMarkSvg as ImageSourcePropType} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerSvg} onPress={onClickButton}>
            <WithLocalSvg width={24} height={23} asset={ShareSvg as ImageSourcePropType} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerUnderLine} />
      <ScrollView style={{ width: Dimensions.get('window').width, flex: 1 }}></ScrollView>
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
  headerContainer: {
    width: Dimensions.get('window').width,
    height: 64,
    marginTop: 45.76,
    paddingLeft: 18,
    paddingRight: 23,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeftContainer: {
    flexDirection: 'row',
  },
  headerRightContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  headerText: {
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
    marginLeft: 70,
  },
  headerSvg: {
    width: 19,
    height: 19,
    marginLeft: 14,
    alignSelf: 'center',
  },
  titleContainer: {
    width: Dimensions.get('window').width,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  svgStyle: {
    height: 30,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
  },
  headerUnderLine: {
    width: Dimensions.get('window').width,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
});

export default TestPage;
