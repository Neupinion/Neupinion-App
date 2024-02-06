import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../../../shared/styles/theme';

interface FakeIssueIconProps {
  views: number;
  posts: number;
}

const FakeIssueIcon = ({ views, posts }: FakeIssueIconProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.iconText}>{views}</Text>
      <View style={{ width: 10 }}></View>
      <Text style={styles.iconText}>{posts}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    marginTop: 14,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    marginLeft: 6,
    fontStyle: 'normal',
    fontSize: 14,
    color: theme.color.gray2,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.5,
  },
});

export default FakeIssueIcon;
