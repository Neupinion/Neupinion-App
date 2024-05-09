import React from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import next from '../assets/icon/next.svg';
import fontFamily from '../shared/styles/fontFamily';
import PinSentenceCard from './PinSentenceCard';

const ParagraphOpinionBigCard = () => {
  return (
    <View style={styles.container}>
      <PinSentenceCard color="#191926" />
      <View style={{ flexDirection: 'row', marginLeft: 42, marginTop: 10, marginBottom: 30 }}>
        <Text style={styles.opinionCountText}>의견 3개</Text>
        <TouchableOpacity>
          <WithLocalSvg width={24} height={24} asset={next as ImageSourcePropType} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.color.gray4,
    width: Dimensions.get('window').width - 52,
  },
  pinSentenceContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 20,
    alignItems: 'flex-start',
    backgroundColor: theme.color.gray,
    borderRadius: 10,
  },
  pinContainer: {
    marginRight: 6,
  },
  sentenceContainer: {
    width: Dimensions.get('window').width - 110,
    // display: 'flex',
  },
  sentenceText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    textAlign: 'justify',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  opinionCountText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
});

export default ParagraphOpinionBigCard;
