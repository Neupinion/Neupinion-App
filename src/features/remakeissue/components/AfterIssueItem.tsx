import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import theme from '../../../shared/styles/theme';
import { FollowUpIssue } from '../../../shared/types/news';
import RightArrowSvg from '../../../assets/icon/rightarrow.svg';
import { WithLocalSvg } from 'react-native-svg';

interface AfterIssueItemProps {
  item: FollowUpIssue;
}

const AfterIssueItem = ({ item }: AfterIssueItemProps) => {
  return (
    <View style={styles.container}>
      {typeof item.id == 'string' ? (
        <TouchableOpacity style={styles.lastCard} onPress={() => {}}>
          <Text style={styles.titleText}>더 많은 후속보도 확인하기</Text>
          <View style={styles.circle}>
            <WithLocalSvg width={15} height={13} asset={RightArrowSvg as ImageSourcePropType} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text style={styles.titleUnderText}>
            &quot;{item.reprocessedIssueTitle}&quot;에 대한 정정보도가 나왔어요
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  titleText: {
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  titleUnderText: {
    fontSize: 14,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  card: {
    width: 338,
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 7,
    borderRadius: 10,
    backgroundColor: theme.color.main,
  },
  lastCard: {
    width: 338,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: theme.color.main,
  },
  circle: {
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: theme.color.main,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.color.white,
  },
});

export default AfterIssueItem;
