import React from 'react';
import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg/css';
import next from '../../../../assets/icon/next.svg';
import fontFamily from '../../../../shared/styles/fontFamily';
import PinSentenceCard from './PinSentenceCard';
import { ParagraphWithOpinions } from '../../../../shared/types/news';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../rootStackParamList';
import { WINDOW_WIDTH } from '../../../../shared/constants/display';

interface ParagraphOpinionCardProps {
  item: ParagraphWithOpinions;
  issueId: number;
}
const ParagraphOpinionCard = ({ item, issueId }: ParagraphOpinionCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const goOpinionParagraphPage = () => {
    navigation.navigate('OpinionParagraphPage', {
      item: item,
      issueId: issueId,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.bigOpinionCard}>
        <PinSentenceCard color={theme.color.gray2} paragraphContent={item.content} />
        <View style={styles.cardBottom}>
          <Text style={styles.opinionCountText}>의견 {item.opinions.length}개</Text>
          <TouchableOpacity onPress={goOpinionParagraphPage}>
            <WithLocalSvg width={24} height={24} asset={next as ImageSourcePropType} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  bigOpinionCard: {
    width: WINDOW_WIDTH - 52,
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
    width: WINDOW_WIDTH - 110,
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
  cardBottom: {
    flexDirection: 'row',
    marginLeft: 42,
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
});

export default ParagraphOpinionCard;
