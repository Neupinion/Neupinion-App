import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import fontFamily from '../../../shared/styles/fontFamily';
import theme from '../../../shared/styles/theme';
import followUpIssueDummy from '../../../dummy/FollowUpIssueDummy';
import FollowUpIssueCardGradient from '../../../shared/components/FollowUpIssue/FollowUpIssueCardGradient';
import CategoryLatestNewsItem from "../../remakeissue/components/CategoryLatestNewsItem";
import { formatDate } from "../../remakeissue/constants/formatDate";
import { WINDOW_WIDTH } from "../../../shared/constants/display";

const RecommendIssues = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>이 뉴스도 한번 봐보세요</Text>
      {followUpIssueDummy.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={() => {}}>
          <View style={styles.leftContainer}>
            <Text style={styles.cardTitleText}>{item.title}</Text>
            <View style={styles.titleUnderContainer}>
              <View style={styles.tagBox}>
                <Text style={styles.tagText}>국제</Text>
              </View>
              <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
            </View>
          </View>
          <View style={styles.cardImage} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  leftContainer: {
    flex: 1,
  },
  titleText: {
    paddingHorizontal: 26,
    marginBottom: 20,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    color: theme.color.white,
    width: '100%',
  },
  card: {
    width: WINDOW_WIDTH - 52,
    height: 88,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.color.gray,
    borderRadius: 6,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  cardTitleText: {
    fontSize: 16,
    fontFamily: fontFamily.pretendard.medium,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  titleUnderContainer: {
    width: 222,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 9,
  },
  tagBox: {
    display: 'flex',
    fontFamily: fontFamily.pretendard.medium,
    height: 22,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: theme.color.gray3,
    gap: 10,
  },
  tagText: {
    color: theme.color.white,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  dateText: {
    color: theme.color.gray5,
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginLeft: 7,
  },
  cardImage: {
    width: 49,
    height: 49,
    borderRadius: 5,
    backgroundColor: theme.color.white,
  },
});
export default RecommendIssues;
