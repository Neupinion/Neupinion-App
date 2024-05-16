import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import PageHeader from '../shared/components/PageHeader';
import { WithLocalSvg } from 'react-native-svg/css';
import MainArrowLeftSvg from '../assets/icon/mainarrowLeft.svg';
import { WINDOW_WIDTH } from '../shared/constants/display';
import PinSentenceCard from '../features/opinion/components/OpinionMainPageComponents/PinSentenceCard';
import fontFamily from '../shared/styles/fontFamily';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';
import { formatYMD } from '../features/date/functions/formatDate';

const OpinionByParagraphPage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  type ScreenRouteProp = RouteProp<RootStackParamList, 'OpinionParagraphPage'>;
  const route = useRoute<ScreenRouteProp>();
  const { item } = route.params;
  const gotoOpinionMainPage = () => {
    navigation.navigate('OpinionMainPage');
  };
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
      <View style={styles.headerUnderLine} />
      <View style={styles.pinSentenceContainer}>
        <PinSentenceCard color={theme.color.gray2} paragraphContent={item.content} />
      </View>
      {item.opinions.map((opinion, index) => (
        <View key={index} style={styles.opinionContainer}>
          <View style={styles.opinionTopContainer}>
            <Image source={{ uri: opinion.profileImageUrl }} style={styles.cardImage} />
            <Text style={styles.nicknameText}>{opinion.nickname}</Text>
            <Text style={styles.dateText}>{formatYMD(opinion.createdAt)}</Text>
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
    color: theme.color.gray5,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  dateText: {
    fontSize: 12,
    fontFamily: fontFamily.pretendard.bold,
    color: 'theme.color.gray5',
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
  pinSentenceContainer: {
    width: Dimensions.get('window').width - 52,
    marginTop: 26,
    marginLeft: 26,
  },
  opinionContainer: {
    marginTop: 26,
    marginLeft: 68,
  },
  opinionTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
});

export default OpinionByParagraphPage;
