import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import { FollowUpIssue } from "../../../shared/types/news";
import AfterIssueItem from "./AfterIssueItem";

interface AfterIssueProps{
  afterNews: FollowUpIssue[] | null;
}
const AfterIssueSlider = ({afterNews}: AfterIssueProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        data={afterNews}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <AfterIssueItem item={item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 26,
  },
  flatListContainer: {
    gap: 20,
    paddingVertical: 20,
  },
});

export default AfterIssueSlider;
