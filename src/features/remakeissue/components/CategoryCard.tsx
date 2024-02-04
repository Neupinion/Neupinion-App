import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, ImageBackground } from "react-native";
import Theme from "../../../shared/styles/theme";

const CategoryCard = () => {
  const [Items, setItems] = useState([
    {name: '펜타곤 대형 폭발...미증시 출렁', img: 'https://reactnative.dev/img/tiny_logo.png' },
    {name: '세계적인 기업이 환경 지속 가능성을 강조하는 새로운 이니셔티브 출범',},
    {name: 'Item 3',},
  ]);

  return (
    <View style={styles.categorycontainer}>
      <View>
        <Text style={styles.firsttext}>카테고리</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        data={Items}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <ImageBackground source={item.img || undefined} style={styles.CardImage} resizeMode="cover"/>
            <View style={styles.cardbottomContainer}>
              <Text style={styles.firsttext} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <View style={{flexDirection:'row',marginTop:12,}}>
                <View style={styles.secondtextbox}>
                  <Text style={styles.secondtext}> 국제 </Text>
                </View>
                <Text style={styles.datetext}> 2023.11.03 </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categorycontainer: {
    //backgroundColor: 'tomato',
    marginLeft: 25,
    marginTop: 40,
  },
  firsttext:{
    fontSize: 16,
    fontWeight: '700',
    color: Theme.color.white,
  },
  flatListContainer: {
    gap: 20,
    paddingVertical: 20,
    //paddingHorizontal: 30,
    //backgroundColor: 'red',
  },
  cardContainer: {
    width: 240,
    height: 249,
    backgroundColor: Theme.color.gray,
    justifyContent: 'center',
    borderRadius: 25,
  },
  CardImage: {
    width: 240,
    height: 160,
    borderRadiusTop: 25,
  },
  cardbottomContainer: {
    marginHorizontal: 22,
  },
  secondtext: {
    fontSize: 12,
    color: Theme.color.white,
  },
  secondtextbox: {
    padding: 1,
    backgroundColor: Theme.color.gray1,
    borderRadius: 5,
    marginRight: 5,
  },
  datetext:{
    color: Theme.color.gray2,
  },
});
export default CategoryCard;