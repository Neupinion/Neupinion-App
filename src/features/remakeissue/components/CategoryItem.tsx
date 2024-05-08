import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { ReProcessedIssue } from '../../../shared/types/news';
import { formatDate } from '../constants/formatDate';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';

interface CategoryItemProps {
  item: ReProcessedIssue;
}

const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      <View style={styles.cardUnderContainer}>
        <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <View style={styles.titleUnderContainer}>
          <View style={styles.tagBox}>
            <Text style={styles.tagText}>{item.category}</Text>
          </View>
          <Text style={styles.dateText}> {formatDate(item.createdAt)} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 249,
    backgroundColor: theme.color.gray1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 0,
    justifyContent: 'center',
    borderRadius: 10,
  },
  cardImage: {
    width: '100%',
    height: 163,
    backgroundColor: 'white',
    resizeMode: 'cover',
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardUnderContainer: {
    display: 'flex',
    height: 86,
    paddingHorizontal: 22,
    gap: 12,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleText: {
    width: 196,
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  titleUnderContainer: {
    width: 222,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tagBox: {
    display: 'flex',
    height: 22,
    paddingVertical: 2,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: theme.color.gray3,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  dateText: {
    color: theme.color.gray5,
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginTop: 2,
  },
});
export default CategoryItem;
