import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import fontFamily from '../../../shared/styles/fontFamily';
import theme from '../../../shared/styles/theme';
import followUpIssueDummy from '../../../dummy/FollowUpIssueDummy';
import FollowUpIssueCardGradient from '../../../shared/components/FollowUpIssue/FollowUpIssueCardGradient';

const FollowUpIssueSlider = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>후속 이슈</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
        data={followUpIssueDummy}
        renderItem={({ item }) => <FollowUpIssueCardGradient item={item} />}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
  cardContainer: {
    paddingHorizontal: 26,
    marginTop: 16,
    gap: 16,
  },
  titleText: {
    paddingHorizontal: 26,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    color: theme.color.white,
    width: '100%',
  },
});
export default FollowUpIssueSlider;
