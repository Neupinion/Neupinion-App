import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import useFetch from '../../../shared/hooks/useFetch';
import { getReprocessedIssueTopOpinion } from '../remotes/topOpinion';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';
import OpinionPaper from '../../../shared/components/Opinion/OpinionPaper';
import EmptyScreen from '../../../shared/components/Opinion/EmptyScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../rootStackParamList';

interface TopOpinionSliderProps {
  navigation: StackNavigationProp<RootStackParamList>;
  id: number;
}
const TopOpinionSlider = ({ navigation, id }: TopOpinionSliderProps) => {
  const fetchReprocessedIssueTopOpinion = () => getReprocessedIssueTopOpinion(id);
  const {
    data: TopOpinions,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchReprocessedIssueTopOpinion, false);

  useEffect(() => {
    void fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={GlobalTextStyles.NormalText17}>ERROR</Text>
      </View>
    );
  }

  if (!TopOpinions || TopOpinions.length === 0) {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 60 }}></View>
        <EmptyScreen text={'등록된 의견이 없습니다.'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
        data={TopOpinions}
        renderItem={({ item }) => (
          <OpinionPaper navigation={navigation} issueId={id} opinion={item} />
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    paddingHorizontal: 26,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    color: theme.color.white,
    width: '100%',
  },
  cardContainer: {
    paddingHorizontal: 26,
    marginTop: 16,
    gap: 16,
  },
  opinionContainer: {
    height: 206,
    display: 'flex',
    gap: 16,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
  card: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme.color.gray7,
    width: 160,
    height: 165,
    paddingVertical: 18,
    borderRadius: 5,
  },
  cardTop: {
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  pin: {
    marginTop: 4,
  },
  titleTextOpinion: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22.5,
    letterSpacing: -0.45,
  },
  dotLine: {
    width: 128,
    marginHorizontal: 16,
    marginTop: 11,
    marginBottom: 14,
    flexShrink: 0,
    backgroundColor: '#D1D3D8',
    borderWidth: 0.6,
    borderStyle: 'dashed',
  },
  opinionText: {
    display: 'flex',
    color: theme.color.white,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginHorizontal: 16,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 18,
    borderBottomWidth: 18,
    borderLeftColor: 'transparent',
    borderBottomColor: '#11111A',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
export default TopOpinionSlider;
