import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { ReWriteNews } from '../../../shared/types/news';
import Theme from '../../../shared/styles/theme';

interface CategoryItemProps {
  item: ReWriteNews;
}

const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={{ uri: item.imageUrl}} style={styles.cardImage} />
      <View style={styles.cardUnderContainer}>
        <Text style={styles.firstText} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
        <View style={{ flexDirection: 'row', marginTop: 12}}>
          <View style={styles.tagBox}>
            <Text style={styles.tagText}>{item.category}</Text>
          </View>
          <Text style={styles.dateText}> {item.createdAt} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginLeft: 25,
  },
  firstText: {
    fontSize: 16,
    fontWeight: '700',
    color: Theme.color.white,
  },
  flatListContainer: {
    gap: 20,
    paddingVertical: 20,
  },
  cardContainer: {
    width: 240,
    height: 249,
    backgroundColor: Theme.color.gray,
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardImage: {
    width: 240,
    height: 160,
    resizeMode: 'cover',
  },
  cardUnderContainer: {
    marginHorizontal: 22,
    marginVertical: 16,
  },
  tagText: {
    fontSize: 12,
    color: Theme.color.white,
  },
  tagBox: {
    padding: 3,
    backgroundColor: Theme.color.gray1,
    borderRadius: 5,
    marginRight: 5,
  },
  dateText: {
    color: Theme.color.gray2,
  },
});
export default CategoryItem;
