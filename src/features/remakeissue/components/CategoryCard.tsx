import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";

const CategoryCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>카테고리</Text>
      </View>

      <ScrollView>
        <View>
          <Text>
            "펜타곤 대형 폭발"...증시 출
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  card: {
    height: 240,
    width: 249.
  },
});
export default CategoryCard;