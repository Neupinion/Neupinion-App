import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../../../shared/styles/theme';
import fontFamily from '../../../../shared/styles/fontFamily';
import { subCategories } from '../../../../shared/constants/opinionCategory';
import { Dropdown } from 'react-native-element-dropdown';
interface OpinionPageCategoryProps {
  changeLeftCategory: (newData: string) => void;
  changeRightCategory: (newData: string) => void;
}

const OpinionSubCategory = ({
  changeLeftCategory,
  changeRightCategory,
}: OpinionPageCategoryProps) => {
  const [activeSubCategory, setActiveSubCategory] = useState('전체');
  const handleButtonPress = (category: string) => {
    setActiveSubCategory(category);
    changeLeftCategory(category);
  };
  const handleDropDownChange = (value: string) => {
    setValue(value);
    changeRightCategory(value);
  };
  const data = [
    { label: '최신순', value: '최신순' },
    { label: '인기순', value: '인기순' },
  ];
  const [value, setValue] = useState('최신순');

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {subCategories.map((category, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={activeSubCategory === category ? styles.activeButton : styles.positionButton}
            onPress={() => handleButtonPress(category)}
          >
            <Text style={activeSubCategory === category ? styles.activeText : styles.positionText}>
              {category}
            </Text>
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
          placeholder="최신순"
          value={value}
          onChange={(item) => {
            handleDropDownChange(item.value);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default OpinionSubCategory;
