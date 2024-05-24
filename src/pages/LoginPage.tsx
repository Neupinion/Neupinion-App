import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from "../shared/styles/theme";
import { WINDOW_WIDTH } from "../shared/constants/display";
const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.uiContainer}>
        <Text>안녕</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.background,
  },
  uiContainer: {
    width: WINDOW_WIDTH - 52,
    flexDirection: 'column',
    backgroundColor: theme.color.white,
  },
});

export default LoginPage;
