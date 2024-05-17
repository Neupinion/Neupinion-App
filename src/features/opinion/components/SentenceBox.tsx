import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WithLocalSvg } from 'react-native-svg/css';
import OpinionPin from '../../../assets/icon/opinionpin.svg';
import theme from '../../../shared/styles/theme';
import { getReprocessedIssueById } from '../../remakeissue/remotes/reprocessedissue';
import useFetch from '../../../shared/hooks/useFetch';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';

interface SentenceBoxProps {
  sentenceNumber: number;
}
const SentenceBox = ({ sentenceNumber }: SentenceBoxProps) => {
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

  if (isLoading) {
    return (
      <View style={styles.sentenceContainer}>
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      </View>
    );
  }

  if (error || reprocessedIssue === null) {
    return (
      <View style={styles.sentenceContainer}>
        <Text style={GlobalTextStyles.NormalText17}>ERROR</Text>
      </View>
    );
  }

  return (
    <View style={styles.sentenceContainer}>
      <View style={styles.pinContainer}>
        <TouchableOpacity style={styles.pin}>
          <WithLocalSvg width={20} height={20} asset={OpinionPin as ImageSourcePropType} />
        </TouchableOpacity>
      </View>
      <View style={styles.sentenceContainerSmall}>
        <Text style={styles.sentenceText}>
          {reprocessedIssue.content[sentenceNumber - 1].paragraph}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sentenceContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    gap: 11,
    width: 338,
    backgroundColor: '#191926',
    borderRadius: 10,
  },
  pinContainer: {
    display: 'flex',
    width: 20,
    flexDirection: 'column',
  },
  pin: {
    width: 20,
    height: 20,
  },
  sentenceContainerSmall: {
    display: 'flex',
    width: 270,
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
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default SentenceBox;
