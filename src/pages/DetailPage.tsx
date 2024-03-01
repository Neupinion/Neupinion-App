import React from 'react';
import { Dimensions, StyleSheet, Text, View } from "react-native";
import theme from '../shared/styles/theme';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';

const TestPage = () => {
  return (
    <View style={styles.container}>
      <Text style={GlobalTextStyles.NormalText17}>진짜일까, 가짜일까</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerContainer: {
    width: Dimensions.get('window').width - 44,
    height: 30,
    marginTop: 66,
    marginBottom: 14,
    marginHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TestPage;
