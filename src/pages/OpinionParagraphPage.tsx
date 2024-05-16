import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../shared/styles/theme';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import PageHeader from '../shared/components/PageHeader';
import { WithLocalSvg } from 'react-native-svg/css';
import MainArrowLeftSvg from '../assets/icon/mainarrowLeft.svg';
import { WINDOW_WIDTH } from '../shared/constants/display';
import PinSentenceCard from '../features/opinion/components/OpinionMainPageComponents/PinSentenceCard';
import { OpinionParagraphId } from '../shared/types/news';
import { forSlideLeft } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import fontFamily from '../shared/styles/fontFamily';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';

interface OpinionParagraphProps {
  item: OpinionParagraphId;
}
const OpinionParagraphPage = ({ item }: OpinionParagraphProps) => {
  // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  // type ScreenRouteProp = RouteProp<RootStackParamList, 'OpinionParagraphPage'>;
  // const route = useRoute<ScreenRouteProp>();
  // const { item } = route.params;
  const gotoOpinionMainPage = () => {};
  return (
    <View style={styles.container}>
      <PageHeader
        leftIcons={
          <TouchableOpacity onPress={gotoOpinionMainPage}>
            <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
          </TouchableOpacity>
        }
        centerText={'의견보기'}
        RightIcons={null}
      />
      {/*<View style={styles.headerUnderLine} />*/}
      <PinSentenceCard color="#212A3C" paragraphContent={item.content} />
      {item.opinions.map((opinion, index) => (
        <View key={index} style={{ flexDirection: 'column', marginVertical: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: opinion.profileImageUrl }} style={styles.cardImage} />
            <Text style={styles.nicknameText}>{opinion.nickname}</Text>
            <Text style={styles.dateText}>{opinion.createdAt}</Text>
          </View>
          <Text style={styles.userOpinionText}>{opinion.content}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
  },
  headerUnderLine: {
    width: WINDOW_WIDTH,
    height: 1,
    backgroundColor: 'rgba(226, 226, 226, 0.1)',
  },
  cardImage: {
    width: 26,
    height: 26,
    borderRadius: 50,
  },
  nicknameText: {
    fontSize: 14,
    fontFamily: fontFamily.pretendard.medium,
    color: '#71788F',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  dateText: {
    fontSize: 12,
    fontFamily: fontFamily.pretendard.bold,
    color: '#71788F',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  userOpinionText: {
    fontSize: 14,
    fontFamily: fontFamily.pretendard.medium,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
    flexShrink: 1,
  },
});

export default OpinionParagraphPage;
