import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ReprocessedIssueId } from '../../../shared/types/news';
import { formatDate } from '../../remakeissue/constants/formatDate';

interface OpinionPinIssueProps {
  reprocessedIssue: ReprocessedIssueId;
}
const OpinionPinIssue = ({ reprocessedIssue }: OpinionPinIssueProps) => {
  return (
    <View style={styles.issueContainer}>
      <View style={styles.issueImage}>
        <Image source={{ uri: reprocessedIssue.imageUrl }} style={styles.issueImage} />
      </View>
      <View style={styles.issueTitleContainer}>
        <Text style={styles.issueTitleText}>{reprocessedIssue.title}</Text>
        <View style={styles.issueTagContainer}>
          {reprocessedIssue.tags?.map((item: string, index: number) => (
            <View key={index} style={styles.tagBox}>
              <Text style={styles.tagText}>{item}</Text>
            </View>
          ))}
          <Text style={styles.dateText}>{formatDate(reprocessedIssue.createdAt)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  issueContainer: {
    marginTop: 24,
    width: Dimensions.get('window').width,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  issueImage: {
    width: '100%',
    height: 210,
  },
  imageStyle: {
    flex: 1,
  },
  issueTitleContainer: {
    marginTop: 26,
    width: 338,
    height: 61,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
  },
  issueTitleText: {
    color: '#EBECF1',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
  issueTagContainer: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 8,
    gap: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(126, 88, 233, 0.20)',
  },
  tagText: {
    color: '#7E58E9',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  dateText: {
    marginLeft: 8,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    color: '#71788F',
  },
});

export default OpinionPinIssue;
