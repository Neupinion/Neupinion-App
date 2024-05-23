import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../shared/styles/theme';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
import fontFamily from '../../../shared/styles/fontFamily';
import { KeyWordDummyOne } from '../../../dummy/KeyWordDummy';
import ReportBubbleChart from './ReportBubbleChart';

const ReportBubbleChartContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <ReportBubbleChart height={320} width={WINDOW_WIDTH - 68} data={KeyWordDummyOne} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>하이브 입장 유의키워드</Text>
        <Text style={styles.contentText}>
          뉴피니언의 컨텐츠는, 특정 입장에 유리하게 작성된 컨텐츠들을 모아 에디터가 각각 쉽고
          친근하게 작성해주고 있어요.
        </Text>
        <Text style={styles.contentText}>
          하이브의 입장에서 작성된 글을 읽을 때에는, 다음과 같은 키워드를 유심히 생각하면서
          읽으시는걸 추천드려요.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartContainer: {
    width: '100%',
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: theme.color.main,
    padding: 21,
  },
  titleText: {
    color: theme.color.white,
    fontWeight: '700',
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 16,
  },
  contentText: {
    color: theme.color.white,
    width: '100%',
    fontWeight: '500',
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 12,
    marginTop: 8,
  },
});
export default ReportBubbleChartContainer;
