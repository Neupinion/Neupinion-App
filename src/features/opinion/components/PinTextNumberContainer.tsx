import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../shared/styles/theme';

interface PinTextNumberContainerProps {
  circleNumber: number;
  circleText: string;
  isActivate: boolean;
}
const PinTextNumberContainer = ({
  circleNumber,
  circleText,
  isActivate,
}: PinTextNumberContainerProps) => {
  const circleStyle = [
    styles.circle,
    { backgroundColor: isActivate ? theme.color.main : '#394358' },
  ];
  const circleTextStyle = [
    styles.circleText,
    { color: isActivate ? theme.color.white : '#71788F' },
  ];
  const choosePinTextStyle = [
    styles.choosePinText,
    { color: isActivate ? theme.color.white : '#4E5867' },
  ];

  return (
    <View style={styles.choosePinTextContainer}>
      <View style={circleStyle}>
        <Text style={circleTextStyle}>{circleNumber}</Text>
      </View>
      <Text style={choosePinTextStyle}>{circleText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  choosePinTextContainer: {
    height: 26,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  choosePinText: {
    marginLeft: 10,
    color: theme.color.white,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
  circle: {
    display: 'flex',
    width: 20,
    height: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 300,
    marginVertical: 3,
  },
  circleText: {
    textAlign: 'center',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: -0.45,
  },
});

export default PinTextNumberContainer;
