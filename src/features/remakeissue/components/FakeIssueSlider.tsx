import React, { ReactElement } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import theme from "../../../shared/styles/theme";

interface FakeIssueProps {
  children: ReactElement | ReactElement[];
}

const FakeIssueSlider = ({children}: FakeIssueProps) => {
  return (
    <View style={styles.container}>

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
