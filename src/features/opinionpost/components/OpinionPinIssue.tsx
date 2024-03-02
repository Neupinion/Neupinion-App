import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
const OpinionPinIssue = () => {
  return (
    <View style={styles.issueContainer}>
      <View style={styles.issueImage} />
      <View style={styles.issueTitleContainer}>
        <Text style={styles.issueTitleText}>펜타곤 대형 폭발...美증시 출렁</Text>
        <View style={styles.issueTagContainer}>
          <View style={styles.tagBox}>
            <Text style={styles.tagText}>국제</Text>
          </View>
          <Text style={styles.dateText}>2023.11.03</Text>
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
    backgroundColor: 'white',
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
