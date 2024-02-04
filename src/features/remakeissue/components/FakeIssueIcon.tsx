import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { MessageIcon, UserIcon } from '../../../assets/icon';
interface FakeIssueIconProps {
  views: number | null;
  posts: number | null;
}

const FakeIssueIcon = ({ views, posts }: FakeIssueIconProps) => {
  return (
    <View style={styles.container}>
      <MessageIcon />
      <Text>{views}</Text>
      <UserIcon />
      <Text>{posts}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FakeIssueIcon;
