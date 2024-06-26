import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import theme from '../../../shared/styles/theme';
import { SameCategoryReprocessedIssue } from '../../../shared/types/news';
import { formatDate } from '../constants/formatDate';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../rootStackParamList';

interface CategoryLatestNewsSliderItemProps {
  item: SameCategoryReprocessedIssue;
  category: string;
}

const CategoryLatestNewsItem = ({ item, category }: CategoryLatestNewsSliderItemProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onClickReprocessedIssue = () => {
    const issue_id = Number(item.id);
    navigation.reset({
      index: 1,
      routes: [
        { name: 'MainPage' },
        { name: 'ReprocessedIssueDetailPage', params: { id: issue_id } },
      ],
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={onClickReprocessedIssue}>
        <View>
          <Text style={styles.titleText}>{item.title}</Text>
          <View style={styles.titleUnderContainer}>
            <View style={styles.tagBox}>
              <Text style={styles.tagText}>{category}</Text>
            </View>
            <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
          </View>
        </View>
        <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 26,
  },
  card: {
    width: WINDOW_WIDTH - 52,
    height: 93,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.color.gray,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 16,
  },
  titleText: {
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  titleUnderContainer: {
    width: 222,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 9,
  },
  tagBox: {
    display: 'flex',
    height: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: theme.color.gray5,
    gap: 10,
  },
  tagText: {
    color: theme.color.white,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  dateText: {
    color: theme.color.gray2,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginLeft: 7,
  },
  cardImage: {
    width: 49,
    height: 49,
    borderRadius: 5,
    backgroundColor: theme.color.white,
  },
});

export default CategoryLatestNewsItem;
