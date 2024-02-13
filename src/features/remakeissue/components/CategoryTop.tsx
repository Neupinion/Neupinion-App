import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GlobalTextStyles from "../../../shared/styles/GlobalTextStyles";

const CategoryTop = () => {
  return (
    <View style={styles.container}>
     <View style={{ flexDirection: 'row'}}>
       <Text style={GlobalTextStyles.NormalText17}>카테고리</Text>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
});

export default CategoryTop;
