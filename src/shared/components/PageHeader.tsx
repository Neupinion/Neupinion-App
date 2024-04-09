import React, { ReactNode } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import theme from '../styles/theme';
import fontFamily from '../styles/fontFamily';

interface PageHeaderProps {
  leftIcons: ReactNode;
  centerText?: string;
  RightIcons: ReactNode;
}

const PageHeader = ({ leftIcons, centerText, RightIcons }: PageHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeftContainer}>{leftIcons}</View>
      <Text style={styles.headerText}>{centerText}</Text>
      <View style={styles.headerRightContainer}>{RightIcons}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get('window').width,
    height: 60,
    marginTop: 66,
    paddingLeft: 14,
    paddingRight: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeftContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  headerRightContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  headerText: {
    position: 'absolute',
    fontSize: 16,
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
    left: 0,
    right: 0,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
export default PageHeader;
