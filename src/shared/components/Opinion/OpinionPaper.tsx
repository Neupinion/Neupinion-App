import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import theme from '../../styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import Pin from '../../../assets/icon/pin.svg';
import fontFamily from '../../styles/fontFamily';
import { Opinion } from '../../../features/vote/types/opinion';

interface OpinionPaperProps {
  opinion: Opinion;
}

const OpinionPaper = ({ opinion }: OpinionPaperProps) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.card}>
      <View style={styles.triangle} />
      <View style={styles.cardTop}>
        <View style={styles.pin}>
          <WithLocalSvg width={20} height={20} asset={Pin as ImageSourcePropType} />
        </View>
        <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
          {opinion.paragraphContent}
        </Text>
      </View>
      <View style={styles.dotLine} />
      <View>
        <Text style={styles.opinionText} numberOfLines={4} ellipsizeMode="tail">
          {opinion.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme.color.gray2,
    width: 160,
    height: 165,
    paddingVertical: 18,
    borderRadius: 5,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 18,
    borderBottomWidth: 18,
    borderLeftColor: 'transparent',
    borderBottomColor: theme.color.BG,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  cardTop: {
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  pin: {
    marginTop: 4,
  },
  titleText: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22.5,
    letterSpacing: -0.45,
  },
  dotLine: {
    width: 128,
    marginHorizontal: 16,
    marginTop: 11,
    marginBottom: 14,
    flexShrink: 0,
    backgroundColor: '#D1D3D8',
    borderWidth: 0.6,
    borderStyle: 'dashed',
  },
  opinionText: {
    display: 'flex',
    color: theme.color.white,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginHorizontal: 16,
  },
});

export default OpinionPaper;
