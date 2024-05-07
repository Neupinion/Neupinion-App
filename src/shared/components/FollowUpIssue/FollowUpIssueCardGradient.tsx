import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FollowUpIssue } from '../../types/news';
import theme from '../../../shared/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { formatDate } from '../../../features/remakeissue/constants/formatDate';
import fontFamily from '../../styles/fontFamily';

interface FollowUpIssueCardGradientProps {
  item: FollowUpIssue;
}

const FollowUpIssueCardGradient = ({ item }: FollowUpIssueCardGradientProps) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <LinearGradient
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={theme.gradient.gradient1}
        style={styles.cardLine}
      >
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={theme.gradient.gradient2}
          style={styles.card}
        >
          <View style={styles.cardImage} />
          <View style={styles.cardUnderContainer}>
            <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
              {item.title}
            </Text>
            <View style={styles.titleUnderContainer}>
              <View style={styles.tagBox}>
                <Text style={styles.tagText}>첫 보도</Text>
              </View>
              <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
            </View>
          </View>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardLine: {
    width: 240,
    height: 249,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  card: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
  },
  animatedCard: {
    marginHorizontal: 50,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 163,
    resizeMode: 'cover',
    backgroundColor: theme.color.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardUnderContainer: {
    width: 266,
    height: 86,
    paddingHorizontal: 22,
    gap: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    width: 222,
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  titleUnderContainer: {
    width: 222,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tagBox: {
    display: 'flex',
    height: 22,
    paddingVertical: 2,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: theme.color.gray3,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.medium,
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
    marginTop: 2,
  },
});

export default FollowUpIssueCardGradient;
