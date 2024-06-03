import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleSheet,
  View,
  ImageSourcePropType,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import Indicator from '../../remakeissue/components/Indicator';
import theme from '../../../shared/styles/theme';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
import ReportBubbleChartContainer from './ReportBubbleChartContainer';
import { WithLocalSvg } from 'react-native-svg/css';
import PopupCloseButton from '../../../assets/icon/popupclosebutton.svg';
import useFetch from "../../../shared/hooks/useFetch";
import { getIssueKeyword } from "../remotes/getIssueKeyword";
import GlobalTextStyles from "../../../shared/styles/GlobalTextStyles";
import { processApiResponse } from "../function/processApiResponse";
import {KeyWordDummyOne, KeyWordDummyTwo} from "../../../dummy/KeyWordDummy";

interface ReportContainerProps {
  id: number;
  onClose: () => void;
}

const ReportContainer = ({ id, onClose }: ReportContainerProps) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / (WINDOW_WIDTH * 0.8));
    setSlideIndex(newIndex);
  };

  // const fetchIssueKeyword = () => getIssueKeyword(id);
  //
  // const {
  //   data: keyword,
  //   isLoading,
  //   error,
  //   fetchData,
  // } = useFetch(fetchIssueKeyword, false);
  //
  // useEffect(() => {
  //   void fetchData();
  // }, []);

  // if (isLoading) {
  //   return (
  //       <View style={styles.container}>
  //         <ActivityIndicator size="large" style={styles.activityIndicator} />
  //       </View>
  //   );
  // }
  //
  // if (error) {
  //   return (
  //       <View style={styles.container}>
  //         <Text style={GlobalTextStyles.NormalText17}>ERROR</Text>
  //       </View>
  //   );
  // }

  // if (!keyword) {
  //   return null;
  // }

  // const { firstStandKeywords, secondStandKeywords } = processApiResponse(keyword);

  const contents = [
    <ReportBubbleChartContainer keyword={KeyWordDummyOne} position='하이브' key="firstStandChart" />,
    <ReportBubbleChartContainer keyword={KeyWordDummyTwo} position='민희진' key="secondStandChart" />,
  ];

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.svg} onPress={onClose}>
          <WithLocalSvg width={16} height={16} asset={PopupCloseButton as ImageSourcePropType} />
        </TouchableOpacity>
        <View style={styles.contentBox}>
          <FlatList
              ref={flatListRef}
              data={contents}
              renderItem={({ item }) => <View style={styles.content}>{item}</View>}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              onMomentumScrollEnd={handleScrollEnd}
              scrollEventThrottle={16}
          />
        </View>
        <View style={styles.footer}>
          <Indicator data={contents} slideIndex={slideIndex} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBox: {
    display: 'flex',
    width: '80%',
    marginTop: 30,
    marginHorizontal: 34,
    backgroundColor: theme.color.background,
    borderRadius: 10,
    overflow: 'hidden',
  },
  content: {
    width: WINDOW_WIDTH * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    height: 20,
    padding: 10,
  },
  svg: {
    width: 16,
    top: 20,
    alignSelf: 'flex-end',
    marginRight: 46,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default ReportContainer;
