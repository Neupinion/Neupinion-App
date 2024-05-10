import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import MainArrowLeft from '../assets/icon/mainarrowLeft.svg';
import OpinionCheckButton from '../assets/icon/opinionpurplecheck.svg';
import OpinionPinIssue from '../features/opinion/components/OpinionPinIssue';
import OpinionPin from '../assets/icon/opinionpin.svg';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';
import { getReprocessedIssueById } from '../features/remakeissue/remotes/reprocessedissue';
import useFetch from '../shared/hooks/useFetch';
import GlobalTextStyles from '../shared/styles/GlobalTextStyles';
import { ReprocessedIssueContent } from '../shared/types/news';
import PageHeader from '../shared/components/PageHeader';
import { WINDOW_WIDTH } from '../shared/constants/display';

const OpinionPinPage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [selectedPinIndex, setSelectedPinIndex] = useState(0);

  const fetchReprocessedIssueById = () => getReprocessedIssueById(1);
  const {
    data: reprocessedIssue,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchReprocessedIssueById, false);

  useEffect(() => {
    void fetchData();
  }, []);

  const onClickBackButton = () => {
    navigation.goBack();
  };

  const onClickCheckButton = () => {
    navigation.navigate('OpinionPost', { issueId: 1, sentenceNumber: selectedPinIndex });
  };

  const onSelectPin = (index: number) => {
    setSelectedPinIndex(index);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      </View>
    );
  }

  if (error || reprocessedIssue === null) {
    return (
      <View style={styles.container}>
        <Text style={GlobalTextStyles.NormalText17}>ERROR</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PageHeader
        leftIcons={
          <TouchableOpacity style={styles.topSvgStyle} onPress={onClickBackButton}>
            <WithLocalSvg height={28} asset={MainArrowLeft as ImageSourcePropType} />
          </TouchableOpacity>
        }
        RightIcons={
          <TouchableOpacity style={styles.topSvgStyle} onPress={onClickCheckButton}>
            <WithLocalSvg height={16} asset={OpinionCheckButton as ImageSourcePropType} />
          </TouchableOpacity>
        }
      />
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.pinTextContainer}>
          <Text style={styles.pinTextTitle}>의견을 남길 부분을 선택해주세요.</Text>
        </View>
        <OpinionPinIssue reprocessedIssue={reprocessedIssue} />
        <View style={styles.pinSentenceContainer}>
          {reprocessedIssue?.content.map((item: ReprocessedIssueContent) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.pinSentence, { opacity: selectedPinIndex === item.id ? 1 : 0.3 }]}
              onPress={() => onSelectPin(item.id)}
            >
              <View style={styles.pinContainer}>
                <View style={styles.pin}>
                  <WithLocalSvg width={20} height={20} asset={OpinionPin as ImageSourcePropType} />
                </View>
              </View>
              <View style={styles.sentenceContainer}>
                <Text style={styles.sentenceText}>{item.paragraph}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
  topContainer: {
    width: WINDOW_WIDTH,
    height: 30,
    marginTop: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewStyle: {
    width: WINDOW_WIDTH,
  },
  topSvgStyle: {
    height: 30,
    width: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: WINDOW_WIDTH,
  },
  pinTextTitle: {
    marginTop: 20,
    color: theme.color.white,
    width: 338,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.6,
  },
  pinSentenceContainer: {
    marginTop: 20,
    marginBottom: 40,
    display: 'flex',
    paddingHorizontal: 26,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 21,
  },
  pinSentence: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  pinContainer: {
    display: 'flex',
    width: 20,
    flexDirection: 'column',
  },
  sentenceContainer: {
    display: 'flex',
    width: 314,
  },
  sentenceText: {
    color: theme.color.white,
    textAlign: 'justify',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  pin: {
    width: 20,
    height: 20,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default OpinionPinPage;
