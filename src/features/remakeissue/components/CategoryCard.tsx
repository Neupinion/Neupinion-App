import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, } from "react-native";
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
        contentContainerStyle={styles.FlatListContainer}
        data={Items}
        renderItem={({item}) => (
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
});
export default CategoryCard;