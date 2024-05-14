import React from 'react';
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import theme from '../../../shared/styles/theme';
import { ReProcessedIssue } from '../../../shared/types/news';
import { WithLocalSvg } from 'react-native-svg/css';
import MessageIcon from '../../../assets/icon/message.svg';
import UserIcon from '../../../assets/icon/user.svg';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
import fontFamily from '../../../shared/styles/fontFamily';
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
      <Text style={styles.iconText}>{item.views.toLocaleString()}명</Text>
      <View style={{ width: 10 }}></View>
      <WithLocalSvg width={17} height={17} asset={MessageIcon as ImageSourcePropType} />
      <Text style={styles.iconText}>{item.opinionCount.toLocaleString()}개</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    marginTop: 14,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    marginLeft: 6,
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontSize: 14,
    color: theme.color.gray5,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.5,
  },
});

export default FakeIssueIcon;
