import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
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
import { WithLocalSvg } from 'react-native-svg';
import MainArrowSvg from '../assets/icon/mainarrow.svg';
import MainUser from '../assets/icon/mainuser.svg';
import MainSearch from '../assets/icon/mainsearch.svg';
import useFetch from '../shared/hooks/useFetch';
import { getReprocessedIssues } from '../features/remakeissue/remotes/reprocessedissue';
import { useDate } from '../features/date/provider/DateProvider';
import DateModal from '../features/date/components/DateModal';
import FollowUpIssueContainer from '../features/followupissue/components/FollowUpIssueContainer';
import CategorySlider from '../features/remakeissue/components/CategorySlider';
import { getFormatDate } from '../features/date/functions/formatDate';
import AfterIssueSlider from '../features/remakeissue/components/AfterIssueSlider';

import FollowUpIssueDummy from '../dummy/FollowUpIssueDummy';
import fontFamily from '../shared/styles/fontFamily';

const MainPage = () => {
  const { date } = useDate();
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const onCloseModal = () => {
    setIsDateModalOpen(!isDateModalOpen);
  };

  const onClickButton = () => {
    console.log('해당 버튼은, 페이지 이동이나 ui의 임시 이벤트를 다룹니다.');
  };
  const fetchReprocessedIssue = () => getReprocessedIssues(date);

  const {
    data: reprocessedIssue,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchReprocessedIssue, false);

  useEffect(() => {
    fetchData()
      .then(() => {
        console.log('데이터를 성공적으로 가져왔습니다.');
      })
      .catch((error) => {
        console.error('데이터 가져오기 실패:', error);
      });
  }, [date]);

  const pressDateArrow = () => {
    setIsDateModalOpen(!isDateModalOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity onPress={pressDateArrow}>
            <Text style={styles.headerDateText}>{getFormatDate(date)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerArrow} onPress={pressDateArrow}>
            <WithLocalSvg width={12} height={12} asset={MainArrowSvg as ImageSourcePropType} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerRightContainer}>
          <TouchableOpacity style={styles.headerSvg} onPress={onClickButton}>
            <WithLocalSvg width={20} height={20} asset={MainSearch as ImageSourcePropType} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerSvg} onPress={onClickButton}>
            <WithLocalSvg width={20} height={20} asset={MainUser as ImageSourcePropType} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerUnderLine} />
      {isLoading && <ActivityIndicator size="large" style={styles.activityIndicator} />}
      {error && <Text style={GlobalTextStyles.NormalText17}>ERROR</Text>}
      {!isLoading && !error && (
        <>
          <ScrollView style={{ width: Dimensions.get('window').width, flex: 1 }}>
            <View style={styles.titleContainer}>
              <Text style={GlobalTextStyles.NormalText17}>새로운 후속보도가 있어요!</Text>
            </View>
            <AfterIssueSlider afterNews={FollowUpIssueDummy} />
            <View style={styles.titleContainer}>
              <Text style={GlobalTextStyles.NormalText17}>가짜뉴스 이슈(타이틀 변경 예정)</Text>
            </View>
            <FakeIssueSlider fakeNews={reprocessedIssue} />
            <View style={styles.titleContainer}>
              <Text style={GlobalTextStyles.NormalText17}>카테고리1</Text>
              <TouchableOpacity style={styles.svgStyle} onPress={onClickButton}>
                <WithLocalSvg width={14} height={14} asset={MainArrowSvg as ImageSourcePropType} />
              </TouchableOpacity>
            </View>
            <CategorySlider categoryIssues={reprocessedIssue} />
            <View style={styles.titleContainer}>
              <Text style={GlobalTextStyles.NormalText17}>카테고리2</Text>
              <TouchableOpacity style={styles.svgStyle} onPress={onClickButton}>
                <WithLocalSvg width={14} height={14} asset={MainArrowSvg as ImageSourcePropType} />
              </TouchableOpacity>
            </View>
            <CategorySlider categoryIssues={reprocessedIssue} />
            <View style={styles.divideLine}></View>
            <View style={styles.titleContainer}>
              <Text style={GlobalTextStyles.NormalText17}>후속이슈</Text>
              <TouchableOpacity style={styles.svgStyle} onPress={onClickButton}>
                <WithLocalSvg width={14} height={14} asset={MainArrowSvg as ImageSourcePropType} />
              </TouchableOpacity>
            </View>
            <FollowUpIssueContainer />
          </ScrollView>
        </>
      )}
      {isDateModalOpen && <DateModal closeModal={onCloseModal} />}
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
    width: Dimensions.get('window').width - 44,
    height: 30,
    marginTop: 66,
    marginBottom: 14,
    marginHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerRightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerUnderLine: {
    width: Dimensions.get('window').width,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
  headerDateText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: fontFamily.pretendard.bold,
    lineHeight: 24,
    letterSpacing: -0.48,
    color: 'rgba(255,255,255,0.98)',
  },
  headerArrow: {
    width: 24,
    height: 24,
    marginLeft: 2,
    alignSelf: 'center',
    justifyContent: 'center',
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
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default MainPage;
