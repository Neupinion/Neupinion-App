import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import theme from '../../../shared/styles/theme';
interface FakeIssueIconProps {
  views: string;
  posts: string;
}

const FakeIssueIcon = ({ views, posts }: FakeIssueIconProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.iconText}>{views}</Text>
      <Text style={styles.iconText}>{posts}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    marginTop: 16,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontStyle: 'normal',
    fontSize: 14,
    color: theme.color.gray2,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.5,
  },
});

export default FakeIssueIcon;
