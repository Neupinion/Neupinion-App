import React from 'react';
import { StyleSheet, View } from 'react-native';
import TotalOpinionBigCard from "./TotalOpinionBigCard";

const TotalOpinionPage = () => {
  return (
    <View style={styles.container}>
      <TotalOpinionBigCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default TotalOpinionPage;
