import React, { useMemo, useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions, Text } from 'react-native';
import { FollowUpIssue } from '../../../shared/types/news';
import AfterIssueItem from './AfterIssueItem';
import Indicator from './Indicator';
import theme from '../../../shared/styles/theme';

interface AfterIssueProps {
  afterNews: FollowUpIssue[] | null;
}
const AfterIssueSlider = ({ afterNews }: AfterIssueProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const preparedAfterNews = useMemo(() => {
    if (!afterNews) return null;
    const newItem = {
      id: 'right-space',
      title: '',
      voted: false,
      reprocessedIssueTitle: '',
      createdAt: '',
    };

    return [...afterNews, newItem];
  }, [afterNews]);

  return (
    <View style={styles.container}>
      {!afterNews || afterNews.length === 0 ? (
        <View style={styles.card}>
          <Text style={styles.titleText}>내가 투표한 기사의 새소식을 알려드려요!</Text>
          <Text style={styles.titleUnderText}>
            이슈에 투표를 하면, 관련 기사를 빠르게 알려드릴게요
          </Text>
        </View>
      ) : (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={Dimensions.get('window').width}
          data={preparedAfterNews}
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
      <Indicator data={preparedAfterNews} slideIndex={slideIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: 338,
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 7,
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
  titleUnderText: {
    fontSize: 14,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
});

export default AfterIssueSlider;
