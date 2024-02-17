import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AfterIssueItem = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AfterIssueItem;
