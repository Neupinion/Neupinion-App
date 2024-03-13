import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageSourcePropType,
  FlatList,
} from 'react-native';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';
import theme from '../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import MainArrowSvg from '../../../assets/icon/mainarrow.svg';
import { ReProcessedIssue } from '../../../shared/types/news';
import CategoryLatestNewsSliderItem from './CategoryLatestNewsSliderItem';
interface CategoryLatestNewsSliderProps {
  fakeNews: ReProcessedIssue[] | null;
}
const CategoryLatestNewsSlider = ({ fakeNews }: CategoryLatestNewsSliderProps) => {
  const onClickButton = () => {
    console.log('해당 버튼은, 이동합니다');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={GlobalTextStyles.NormalText17}>국제 카테고리의 최신 소식</Text>
        <TouchableOpacity style={styles.svgStyle} onPress={onClickButton}>
          <WithLocalSvg width={14} height={14} asset={MainArrowSvg as ImageSourcePropType} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.flatListStyle}
        data={fakeNews}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CategoryLatestNewsSliderItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: Dimensions.get('window').width,
    marginTop: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textStyle: {
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  svgStyle: {
    width: 24,
    height: 24,
    marginRight: 21,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  flatListStyle: {
    width: Dimensions.get('window').width,
    marginBottom: 50,
  },
});

export default CategoryLatestNewsSlider;
