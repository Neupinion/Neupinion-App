import React, { useMemo, useState } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text, ImageSourcePropType } from 'react-native';
import { FollowUpIssue } from '../../../shared/types/news';
import AfterIssueItem from './AfterIssueItem';
import Indicator from './Indicator';
import theme from '../../../shared/styles/theme';
import RightArrowSvg from '../../../assets/icon/rightarrow.svg';
import { WithLocalSvg } from 'react-native-svg';
import { invisibleLeftCardData, invisibleRightCardData } from "../constants/invisibleCardData";

interface AfterIssueProps {
  afterNews: FollowUpIssue[] | null;
}
const AfterIssueSlider = ({ afterNews }: AfterIssueProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const preparedafterNews = useMemo(() => {
    if (!afterNews) return;
    const newItem = {
      id: 9,
      title: '내가 투표한 기사의 새소식을 알려드려요!',
      reprocessedIssueTitle: '내가 투표한 기사의 새소식을 알려드려요!',
    };

    return [...afterNews, newItem];
  }, [afterNews]);

  return (
    <View style={styles.container}>
      {!afterNews || afterNews.length === 0 ? (
        <View style={styles.boxContainer}>
          <View style={styles.card}>
            <Text style={styles.titleText}> 더 많은 후속보도 확인하기 </Text>
            <View style={styles.circle}>
              <WithLocalSvg width={15} height={13} asset={RightArrowSvg as ImageSourcePropType} />
            </View>
          </View>
        </View>
      ) : (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={Dimensions.get('window').width}
          data={preparedafterNews}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <AfterIssueItem item={item} />}
          onScroll={(event) => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
            );
            setSlideIndex(newIndex);
          }}
          decelerationRate="fast"
          bounces={false}
        />
      )}
      {/*<Indicator data={afterNews} slideIndex={slideIndex} />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    width: Dimensions.get('window').width,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  card: {
    width: 338,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: theme.color.main,
  },
  titleText: {
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  circle: {
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: theme.color.main,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.color.white,
  },
});

export default AfterIssueSlider;
