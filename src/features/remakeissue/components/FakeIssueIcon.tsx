import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native';
import theme from '../../../shared/styles/theme';
import { ReProcessedIssue } from '../../../shared/types/news';
import { WithLocalSvg } from 'react-native-svg';
import MessageIcon from '../../../assets/icon/message.svg';
import UserIcon from '../../../assets/icon/user.svg';
interface FakeIssueIconProps {
  data: ReProcessedIssue[] | null;
  slideIndex: number;
}

const FakeIssueIcon = ({ data, slideIndex }: FakeIssueIconProps) => {
  if (!data || data.length <= slideIndex) {
    return null;
  }

  const item = data[slideIndex];

  return (
    <View style={styles.container}>
      <WithLocalSvg width={17} height={17} asset={UserIcon as ImageSourcePropType} />
      <Text style={styles.iconText}>{item.views.toLocaleString()}</Text>
      <View style={{ width: 10 }}></View>
      <WithLocalSvg width={17} height={17} asset={MessageIcon as ImageSourcePropType} />
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
