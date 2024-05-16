import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../../../shared/styles/theme';
import fontFamily from '../../../../shared/styles/fontFamily';
import DropDownPicker from 'react-native-dropdown-picker';
import { subCategories } from '../../../../shared/constants/opinionCategory';

interface OpinionPageCategoryProps {
  changeLeftCategory: (newData: string) => void;
  changeRightCategory: (newData: string) => void;
}

const OpinionPageCategory = ({
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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('최신순');
  const [items, setItems] = useState([
    { label: '최신순', value: '최신순' },
    { label: '인기순', value: '인기순' },
  ]);
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
        <DropDownPicker
          placeholder="최신순"
          zIndex={1}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={handleDropDownChange}
          setItems={setItems}
          style={styles.dropDownMainStyle}
          textStyle={styles.listText}
          arrowIconStyle={styles.arrowStyle}
          dropDownContainerStyle={styles.dropDownMainStyle}
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
    marginBottom: 30,
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
  listText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  dropDownMainStyle: {
    width: 100,
    backgroundColor: theme.color.background,
  },
  arrowStyle: {
    width: 24,
    height: 24,
    tintColor: theme.color.white,
  },
  dropDownContainerStyle: {
    backgroundColor: theme.color.background,
  },
});

export default OpinionPageCategory;
