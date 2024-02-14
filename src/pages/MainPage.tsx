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
import FakeIssueSlider from '../features/remakeissue/components/FakeIssueSlider';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import ReProcessedIssueDummy from '../dummy/ReProcessedIssueDummy';
import FollowUpIssueDummy from '../dummy/FollowUpIssueDummy';
import { WithLocalSvg } from 'react-native-svg';
import MainArrowSvg from '../assets/icon/mainarrow.svg';

const MainPage = () => {
  const reprocessedIssue = ReProcessedIssueDummy;
  const followUpIssue = FollowUpIssueDummy;

  const pressArrow = () => {
    console.log('화살표 누름');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}></View>
      <View style={styles.headerUnderLine} />
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={GlobalTextStyles.NormalText17}>새로운 후속보도가 있어요!</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={GlobalTextStyles.NormalText17}>가짜뉴스 이슈(타이틀 변경 예정)</Text>
        </View>
        <FakeIssueSlider fakeNews={reprocessedIssue} />
        <View style={styles.titleContainer}>
          <Text style={GlobalTextStyles.NormalText17}>카테고리1</Text>
          <TouchableOpacity onPress={pressArrow}>
            <WithLocalSvg
              style={styles.svgStyle}
              width={14}
              height={14}
              asset={MainArrowSvg as ImageSourcePropType}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={GlobalTextStyles.NormalText17}>카테고리2</Text>
          <TouchableOpacity onPress={pressArrow}>
            <WithLocalSvg
              style={styles.svgStyle}
              width={14}
              height={14}
              asset={MainArrowSvg as ImageSourcePropType}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.titleContainer}>
          <Text style={GlobalTextStyles.NormalText17}>후속이슈</Text>
          <TouchableOpacity onPress={pressArrow}>
            <WithLocalSvg
              style={styles.svgStyle}
              width={14}
              height={14}
              asset={MainArrowSvg as ImageSourcePropType}
            />
          </TouchableOpacity>
        </View>
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
  headerContainer: {
    width: Dimensions.get('window').width,
    height: 30,
    marginTop: 26,
    marginBottom: 14,
    marginHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerUnderLine: {
    width: Dimensions.get('window').width,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
  titleContainer: {
    width: Dimensions.get('window').width,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  svgStyle: {
    width: 24,
    height: 24,
    marginRight: 21,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  divideLine: {
    width: Dimensions.get('window').width,
    height: 10,
    marginVertical: 12,
    flexShrink: 0,
    backgroundColor: '#21202F',
  },
});

export default MainPage;
