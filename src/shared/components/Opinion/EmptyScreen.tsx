import React from 'react';
import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import EmptyOpinion from '../../../assets/icon/emptyopinionui.svg';
import { WithLocalSvg } from 'react-native-svg/css';
import theme from '../../styles/theme';
import fontFamily from '../../styles/fontFamily';

interface EmptyScreenProps {
  text: string;
}
const EmptyScreen = ({ text }: EmptyScreenProps) => {
  return (
    <View style={styles.svgContainer}>
      <WithLocalSvg width={52} height={52} asset={EmptyOpinion as ImageSourcePropType} />
      <Text style={styles.emptyOpinionText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  svgContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  emptyOpinionText: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
});

export default EmptyScreen;
