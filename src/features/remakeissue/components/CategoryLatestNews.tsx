import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';
import theme from '../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import MainArrowSvg from '../../../assets/icon/mainarrow.svg';
import CategoryLatestNewsItem from './CategoryLatestNewsItem';
import { getSameCategoryReprocessedIssues } from '../remotes/sameCategoryReprocessedIssue';
import useFetch from '../../../shared/hooks/useFetch';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
interface CategoryLatestNewsProps {
  current: number;
  category: string;
}
const CategoryLatestNews = ({ current, category }: CategoryLatestNewsProps) => {
  const fetchReprocessedIssue = () => getSameCategoryReprocessedIssues(current, category);
  const { data: reprocessedIssue, fetchData } = useFetch(fetchReprocessedIssue, false);

  useEffect(() => {
    void fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={GlobalTextStyles.NormalText17}>{category} 카테고리의 최신 소식</Text>
        <TouchableOpacity style={styles.svgStyle} onPress={() => {}}>
          <WithLocalSvg width={14} height={14} asset={MainArrowSvg as ImageSourcePropType} />
        </TouchableOpacity>
      </View>
      {reprocessedIssue &&
        reprocessedIssue.map((item) => (
          <CategoryLatestNewsItem key={item.id} item={item} category={category} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: WINDOW_WIDTH,
    marginTop: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textStyle: {
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  svgStyle: {
    width: 24,
    height: 24,
    marginRight: 21,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  flatListStyle: {
    width: WINDOW_WIDTH,
    marginBottom: 50,
  },
});

export default CategoryLatestNews;
