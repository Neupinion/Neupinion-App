import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import theme from '../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import SeeOriginalSvg from '../../../assets/icon/seeOriginal.svg';
import { formatDate } from '../constants/formatDate';
import { ReprocessedIssueContent } from '../../../shared/types/news';
import Markdown from 'react-native-markdown-display';

interface ReprocessedIssueContentsProps {
  reprocessedIssue: ReprocessedIssueContent | null;
}
const ReprocessedIssueContentsSlider = ({ reprocessedIssue }: ReprocessedIssueContentsProps) => {
  const onClickButton = () => {
    console.log('해당 버튼은, 이전 페이지로 이동합니다.');
  };
  return (
    <View style={styles.container}>
      {reprocessedIssue && (
        <>
          <Text style={styles.contentsTitle}>{reprocessedIssue.title}</Text>
          <View style={styles.titleUnderContainer}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.tagBox}>
                <Text style={styles.tagText}>{reprocessedIssue.category}</Text>
              </View>
              <Text style={styles.dateText}>{formatDate(reprocessedIssue.createdAt)}</Text>
            </View>
            <TouchableOpacity style={styles.headerSvg} onPress={onClickButton}>
              <WithLocalSvg width={79} height={30} asset={SeeOriginalSvg as ImageSourcePropType} />
            </TouchableOpacity>
          </View>
          <Image source={{ uri: reprocessedIssue.imageUrl }} style={styles.cardImage} />
          <View style={styles.contentsBody}>
            {reprocessedIssue.content &&
              reprocessedIssue.content.map((contentItem, index) => (
                <Markdown style={markdownStyles} key={index}>
                  {/*<Text style={styles.contentsBodyText}>{contentItem.paragraph}</Text>*/}
                  {contentItem.paragraph}
                </Markdown>
              ))}
          </View>
        </>
      )}
    </View>
  );
};
const markdownStyles = StyleSheet.create({
  body: {
    textAlign: 'justify',
    color: theme.color.white,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentsTitle: {
    fontSize: 20,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.6,
    marginLeft: 26,
    marginTop: 8,
  },
  titleUnderContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    marginTop: 12,
    marginBottom: 25,
  },
  tagBox: {
    display: 'flex',
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(126, 88, 233, 0.20)',
    marginRight: 8,
  },
  tagText: {
    color: theme.color.main,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  dateText: {
    color: theme.color.gray2,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginTop: 2,
  },
  headerSvg: {
    justifyContent: 'flex-end',
  },
  cardImage: {
    width: Dimensions.get('window').width,
    height: 200,
    resizeMode: 'cover',
    backgroundColor: theme.color.white,
  },
  contentsBody: {
    paddingHorizontal: 26,
    marginTop: 32,
  },
  contentsBodyText: {
    textAlign: 'justify',
    color: theme.color.white,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  item: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  hashTagBox: {
    display: 'flex',
    height: 20,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: theme.color.gray5,
  },
  hashTagText: {
    color: theme.color.white,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  TagScrollViewStyle: {
    paddingHorizontal: 26,
    marginTop: 32,
  },
});

export default ReprocessedIssueContentsSlider;
