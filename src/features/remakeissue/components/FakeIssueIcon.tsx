import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../../../shared/styles/theme';
import { ReWriteNews } from '../../../shared/types/news';

interface FakeIssueIconProps {
  data: ReWriteNews[] | null;
  slideIndex: number;
}

const FakeIssueIcon = ({ data, slideIndex }: FakeIssueIconProps) => {
  if (!data || data.length <= slideIndex) {
    return null;
  }

  const item = data[slideIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.iconText}>{item.views.toLocaleString()}</Text>
      <View style={{ width: 10 }}></View>
      <Text style={styles.iconText}>{item.opinionCount.toLocaleString()}</Text>
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
