import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

interface IndicatorProps {
  children: ReactElement | ReactElement[];
}

const Indicator = ({ children }: IndicatorProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Indicator;
