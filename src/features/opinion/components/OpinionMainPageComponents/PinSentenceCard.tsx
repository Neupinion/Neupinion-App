import React from 'react';
import { Dimensions, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import theme from '../../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg/css';
import OpinionPin from '../../../../assets/icon/opinionpin.svg';
import fontFamily from '../../../../shared/styles/fontFamily';

interface PinSentenceCardProps {
  color: string;
  paragraphContent: string;
}
const PinSentenceCard = ({ color, paragraphContent }: PinSentenceCardProps) => {
  return (
    <View style={[styles.pinSentenceCard, { backgroundColor: color }]}>
      <View style={styles.pinContainer}>
        <WithLocalSvg width={20} height={20} asset={OpinionPin as ImageSourcePropType} />
      </View>
      <View style={styles.sentenceContainer}>
        <Text style={styles.sentenceText}>{paragraphContent}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pinSentenceCard: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  pinContainer: {
    marginRight: 6,
  },
  sentenceContainer: {
    width: Dimensions.get('window').width - 110,
  },
  sentenceText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.gray6,
    textAlign: 'justify',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
});

export default PinSentenceCard;
