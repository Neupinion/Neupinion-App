import { FollowUpIssue } from '../../../shared/types/news';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import theme from '../../../shared/styles/theme';
import { formatDate } from '../../remakeissue/constants/formatDate';
import { LinearGradient } from 'expo-linear-gradient';

interface FollowUpIssueItemProps {
  item: FollowUpIssue;
}

const CARD_ITEM_SIZE = Dimensions.get('window').width * 0.915;
const CARD_SPACER_ITEM_SIZE = (Dimensions.get('window').width - CARD_ITEM_SIZE) / 2;
const FollowUpIssueItem = ({ item }: FollowUpIssueItemProps) => {
  if (!item.title) {
    return <View style={{ width: CARD_SPACER_ITEM_SIZE }}></View>;
  }

  return (
    <View style={{ width: CARD_ITEM_SIZE, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {}}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={theme.gradient.gradient2}
          style={styles.card}
        >
          <View style={styles.tagContainer}>
            <View style={styles.tagOne}>
              <Text style={styles.tagText}>재편 결과</Text>
            </View>
            <View style={styles.tagTwo}>
              <Text style={styles.tagText}>이슈 투표 완료</Text>
            </View>
          </View>
          <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
            [속보] {item.title}
          </Text>
          <Text style={styles.context} numberOfLines={2} ellipsizeMode="tail">
            후속 이슈 상세페이지 콘텐츠에서 내용 가져와서, 그냥 2줄 정도 자르면 되는 걸로. 그러면
            대충 글자수 한 음...
          </Text>
          <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
          <View style={styles.firstContainer}>
            <Text style={styles.firstTitle} numberOfLines={1} ellipsizeMode="tail">
              최초 재가공 이슈 제목
            </Text>
            <Text style={styles.firstContext} numberOfLines={1} ellipsizeMode="tail">
              최초 재가공 이슈 제목 한 줄 요약
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    width: 332,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
    gap: 11,
    backgroundColor: theme.color.gray,
  },
  tagContainer: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleText: {
    color: theme.color.white,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  context: {
    color: theme.color.white,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  dateText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  firstContainer: {
    display: 'flex',
    width: 292,
    marginTop: 8,
    height: 80,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 7,
    borderRadius: 10,
    backgroundColor: '#212A3C',
  },
  firstTitle: {
    color: theme.color.white,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  firstContext: {
    color: theme.color.white,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  tagOne: {
    display: 'flex',
    backgroundColor: theme.color.main,
    height: 20,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    gap: 10,
  },
  tagTwo: {
    display: 'flex',
    marginLeft: 8,
    height: 20,
    backgroundColor: theme.color.sub,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    gap: 10,
  },
  tagText: {
    color: theme.color.white,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
});
export default FollowUpIssueItem;
