import React, { ReactElement, useEffect } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

interface FakeIssueProps {
  children: ReactElement | ReactElement[];
}

const ITEM_SIZE = Dimensions.get('window').width * 0.8;
const SPACER_ITEM_SIZE = (Dimensions.get('window').width - ITEM_SIZE) / 2;

const FakeIssueSlider = ({ children }: FakeIssueProps) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <View>{children}</View>
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
