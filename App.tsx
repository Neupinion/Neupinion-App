import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryCard from "./src/features/remakeissue/components/CategoryCard";

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <CategoryCard></CategoryCard>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
