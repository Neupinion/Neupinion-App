import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageSourcePropType } from "react-native";
import GlobalTextStyles from "../../../shared/styles/GlobalTextStyles";

const ReliabilitySLider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={GlobalTextStyles.NormalText17}>신뢰도 평가하기</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: Dimensions.get('window').width,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default ReliabilitySLider;
