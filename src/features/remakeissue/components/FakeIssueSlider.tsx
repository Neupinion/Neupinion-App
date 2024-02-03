import React, { ReactElement } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

interface FakeIssueProps {
  children: ReactElement | ReactElement[];
}

const FakeIssueSlider = ({ children }: FakeIssueProps) => {
  return (
    <View style={styles.container}>
      <View>{children}</View>
      <View>인디케이터</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FakeIssueSlider;
