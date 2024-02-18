import { FollowUpIssue } from '../../../shared/types/news';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import theme from '../../../shared/styles/theme';
import { formatDate } from '../../remakeissue/constants/formatDate';

interface FollowUpIssueItemProps {
  item: FollowUpIssue;
}

const CARD_ITEM_SIZE = Dimensions.get('window').width * 0.9;
const CARD_SPACER_ITEM_SIZE = (Dimensions.get('window').width - CARD_ITEM_SIZE) / 2;
const FollowUpIssueItem = ({ item }: FollowUpIssueItemProps) => {
  if (!item.title) {
    return <View style={{ width: CARD_SPACER_ITEM_SIZE }}></View>;
  }

  return (
    <View style={{ width: CARD_ITEM_SIZE, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <View style={styles.tagContainer}>
            <View style={styles.tagOne}>
              <Text style={styles.tagText}>재편 결과</Text>
            </View>
            <View style={styles.tagTwo}>
              <Text style={styles.tagText}>이슈 투표 완료</Text>
            </View>
          </View>
          <Text style={styles.titleText}>[속보] {item.title}</Text>
          <Text style={styles.context}>
            후속 이슈 상세페이지 콘텐츠에서 내용 가져와서, 그냥 2줄 정도 자르면 되는 걸로. 그러면
            대충 글자수 한 음...
          </Text>
          <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
          <View style={styles.firstContainer}>
            <Text style={styles.firstTitle}>최초 재가공 이슈 제목</Text>
            <Text style={styles.firstContext}>최초 재가공 이슈 제목 한 줄 요약</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
