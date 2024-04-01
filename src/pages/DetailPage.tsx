import React, { useState } from 'react';
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
import { WithLocalSvg } from 'react-native-svg';
import MainArrowLeftSvg from '../assets/icon/mainarrowLeft.svg';
import BookMarkSvg from '../assets/icon/bookmark.svg';
import AnotherBookMarkSvg from '../assets/icon/anotherbookmark.svg';
import ShareSvg from '../assets/icon/share.svg';
import RemakeIssueContentsSlider from '../features/remakeissue/components/RemakeIssueContentsSlider';
import OpinionWriteSlider from '../features/remakeissue/components/OpinionWriteSlider';
import ReliabilityEvaluation from '../features/remakeissue/components/ReliabilityEvaluation';
import CategoryLatestNews from '../features/remakeissue/components/CategoryLatestNews';
import ReProcessedIssueDummy from '../dummy/ReProcessedIssueDummy';
import OpinionWriteBottomSheet from '../features/opinion/components/OpinionWriteBottomSheet';
import { useModal } from '../shared/hooks/useModal';

const DetailPage = () => {
  const { openModal, closeModal } = useModal();

  const [bookMarkClicked, setBookMarkClicked] = useState(false);
  const onClickButton = () => {
    openModal(
      <OpinionWriteBottomSheet
        title={
          '    블룸버그통신 등에 따르면 22일(현지 시간) 오전 9시를 전후 로 미 워싱턴DC에 있는 펜타곤으로 보이는 건물에서 검은 연기가 피어오르는 사진이 트위터를 통해 국내외로 빠르게 확산했다.'
        }
        content={
          '최초로 게시된 곳이 공신력 있는 매체가 아니고 트위터라서 신뢰도가 떨어지는 듯. 계정도 그냥 개인 계정인 것 같아서 추가적인 확인이 필요할 것 같다.'
        }
        onClose={closeModal}
      />,
    );
  };
  const toggleBookMark = () => {
    setBookMarkClicked(!bookMarkClicked);
  };
  const reprocessedIssue = ReProcessedIssueDummy;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity style={styles.svgStyle} onPress={onClickButton}>
            <WithLocalSvg height={30} asset={MainArrowLeftSvg as ImageSourcePropType} />
          </TouchableOpacity>
          <Text style={styles.headerText}>진짜일까, 가짜일까?</Text>
        </View>
        <View style={styles.headerRightContainer}>
          <TouchableOpacity style={styles.headerSvg} onPress={toggleBookMark}>
            {bookMarkClicked ? (
              <WithLocalSvg
                width={23}
                height={23}
                asset={AnotherBookMarkSvg as ImageSourcePropType}
              />
            ) : (
              <WithLocalSvg width={23} height={23} asset={BookMarkSvg as ImageSourcePropType} />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerSvg} onPress={onClickButton}>
            <WithLocalSvg width={24} height={23} asset={ShareSvg as ImageSourcePropType} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerUnderLine} />
      <ScrollView style={{ width: Dimensions.get('window').width, flex: 1 }}>
        <RemakeIssueContentsSlider />
        <View style={styles.divideLine}></View>
        <OpinionWriteSlider />
        <View style={styles.divideLine}></View>
        <ReliabilityEvaluation />
        <View style={styles.divideLine}></View>
        <CategoryLatestNews fakeNews={reprocessedIssue} />
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
    flexShrink: 0,
  },
  headerUnderLine: {
    width: Dimensions.get('window').width,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
  divideLine: {
    width: Dimensions.get('window').width,
    height: 10,
    marginVertical: 12,
    marginTop: 40,
    flexShrink: 0,
    backgroundColor: '#21202F',
  },
});

export default DetailPage;
