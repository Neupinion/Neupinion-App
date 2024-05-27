import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TotalOpinionCard from './TotalOpinionCard';
import { getOpinionTotal } from '../../remotes/individualVote';
import useFetch from '../../../../shared/hooks/useFetch';
import GlobalTextStyles from '../../../../shared/styles/GlobalTextStyles';
import {
  getSortType,
  getCategoryType,
  subCategories,
} from '../../../../shared/constants/opinionCategory';
import EmptyScreen from '../../../../shared/components/Opinion/EmptyScreen';
import { WINDOW_WIDTH } from '../../../../shared/constants/display';
import { Dropdown } from 'react-native-element-dropdown';
import theme from '../../../../shared/styles/theme';
import fontFamily from '../../../../shared/styles/fontFamily';
interface TotalOpinionCategoryProps {
  issueId: number;
}

const TotalOpinionCategory = ({ issueId }: TotalOpinionCategoryProps) => {
  const [reliabilityCategory, setReliabilityCategory] = useState('전체');
  const [sortType, setSortType] = useState('');
  const data = [
    { label: '최신순', value: '최신순' },
    { label: '인기순', value: '인기순' },
  ];
  const handleDropDownChange = (value: string) => {
    setSortType(value);
  };
  const handleButtonPress = (category: string) => {
    setReliabilityCategory(category);
  };
  const fetchOpinionTotal = () =>
    getOpinionTotal(issueId, getCategoryType(reliabilityCategory), getSortType(sortType), 0);
  const { data: opinionTotal, isLoading, error, fetchData } = useFetch(fetchOpinionTotal, false);

  useEffect(() => {
    void fetchData();
  }, [reliabilityCategory, sortType]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={GlobalTextStyles.NormalText17}>ERROR</Text>
      </View>
    );
  }
  console.log(opinionTotal);

  return (
    <View style={styles.container}>
      <View style={styles.SubCategory}>
        <View style={{ flexDirection: 'row' }}>
          {subCategories.map((category) => (
            <TouchableOpacity key={category} onPress={() => handleButtonPress(category)}>
              <View
                style={[
                  styles.positionButton,
                  reliabilityCategory === category && styles.activeButton,
                ]}
              >
                <Text
                  style={[
                    styles.positionText,
                    reliabilityCategory === category && styles.activeText,
                  ]}
                >
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View>
          <Dropdown
            style={styles.dropdown}
            containerStyle={styles.dropdownList}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemTextStyle={styles.selectedTextStyle}
            activeColor="black"
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={'최신순'}
            onChange={(item) => {
              handleDropDownChange(item.value);
            }}
          />
        </View>
      </View>
      {!opinionTotal ||
        (opinionTotal.length === 0 && (
          <View style={styles.emptyContainer}>
            <EmptyScreen text={'등록된 의견이 없습니다.'} />
          </View>
        ))}
      {opinionTotal &&
        opinionTotal.map((item) => <TotalOpinionCard key={item.opinionId} item={item} />)}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
  emptyContainer: {
    width: WINDOW_WIDTH,
    height: 340,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 26,
    marginBottom: 6,
    marginTop: 20,
  },
  positionButton: {
    height: 30,
    borderRadius: 30,
    borderColor: theme.color.gray3,
    borderWidth: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    marginRight: 10,
  },
  positionText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.gray3,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  activeButton: {
    height: 30,
    borderRadius: 30,
    backgroundColor: '#212A3C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    marginRight: 10,
  },
  activeText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  dropdown: {
    width: 90,
    height: 40,
  },
  dropdownList: {
    backgroundColor: theme.color.black,
    borderColor: theme.color.black,
    marginRight: 40,
  },
  placeholderStyle: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  selectedTextStyle: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
});

export default TotalOpinionCategory;
