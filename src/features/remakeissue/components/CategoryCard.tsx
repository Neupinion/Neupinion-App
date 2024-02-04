import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import Theme from "../../../shared/styles/theme";

const CategoryCard = () => {
  return (
    <View style={styles.categorycontainer}>
      <View>
        <Text style={styles.firsttext}>카테고리</Text>
      </View>
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