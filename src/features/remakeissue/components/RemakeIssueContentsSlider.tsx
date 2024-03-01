import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import theme from '../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import SeeOriginalSvg from '../../../assets/icon/seeOriginal.svg';

const RemakeIssueContentsSlider = () => {
  const onClickButton = () => {
    console.log('해당 버튼은, 이전 페이지로 이동합니다.');
  };
  const data = ['#펜타곤', '#폭발', '#9.11 테러'];
  return (
    <View style={styles.container}>
      <Text style={styles.contentsTitle}>“펜타곤 대형 폭발”…美증시 출렁</Text>
      <View style={styles.titleUnderContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.tagBox}>
            <Text style={styles.tagText}>category</Text>
          </View>
          <Text style={styles.dateText}>createAT</Text>
        </View>
        <TouchableOpacity style={styles.headerSvg} onPress={onClickButton}>
          <WithLocalSvg width={79} height={30} asset={SeeOriginalSvg as ImageSourcePropType} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: 'https://image.com?data=value' }} style={styles.cardImage} />
      <View style={styles.contentsBody}>
        <Text style={styles.contentsBodyText}>
          블룸버그통신 등에 따르면 22일(현지 시간) 오전 9시를 전후로 미 워싱턴DC에 있는 펜타곤으로
          보이는 건물에서 검은 연기가 피어오르는 사진이 트위터를 통해 국내외로 빠르게 확산했다.
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.TagScrollViewStyle}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.hashTagBox}>
            <Text style={styles.hashTagText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contentsTitle: {
    fontSize: 20,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.6,
    marginLeft: 26,
    marginTop:8,
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

export default RemakeIssueContentsSlider;
