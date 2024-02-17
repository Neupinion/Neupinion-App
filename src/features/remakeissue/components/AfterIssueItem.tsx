import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GlobalTextStyles from "../../../shared/styles/GlobalTextStyles";

const AfterIssueItem = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={GlobalTextStyles.NormalText16}>전소연, 마약 루머 부인 "사실무근, 강력 법적 대응"</Text>
        <Text style={GlobalTextStyles.NormalText14}>"전소연 마약 연루설"에 대한 정정보도가 나왔어요</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 338,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 7,
    borderRadius: 10,
    backgroundColor: '#7E58E9',
  },
});

export default AfterIssueItem;
