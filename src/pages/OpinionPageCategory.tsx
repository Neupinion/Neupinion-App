import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../shared/styles/theme';
import fontFamily from '../shared/styles/fontFamily';
import DropDownPicker from 'react-native-dropdown-picker';

const OpinionPageCategory = () => {
  const categories = ['전체', '신뢰', '의심'];
  const [activeButton, setActiveButton] = useState('전체');
  const handleButtonPress = (category: string) => {
    setActiveButton(category);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '최신순', value: '최신순' },
    { label: '인기순', value: '인기순' },
  ]);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[styles.positionButton, activeButton === category && styles.activeButton]}
            onPress={() => handleButtonPress(category)}
          >
            <Text style={[styles.positionText, activeButton === category && styles.activeText]}>
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
          setValue={setValue}
          setItems={setItems}
          style={{
            width: 100,
            //height: 22,
            // backgroundColor: theme.color.black,
            backgroundColor: theme.color.main,
          }}
          textStyle={styles.listText}
          arrowIconStyle={{
            width: 24,
            height: 24,
            tintColor: theme.color.white,
          }}
          dropDownContainerStyle={{
            backgroundColor: theme.color.black,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 26,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  positionButton: {
    height: 30,
    borderRadius: 30,
    borderColor: theme.color.gray5,
    borderWidth: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 10,
    paddingHorizontal: 14,
    marginRight: 10, //왜 gap이 안되는가
  },
  positionText: {
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.gray5,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  activeButton: {
    height: 30,
    borderRadius: 30,
    backgroundColor: theme.color.gray4,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 10,
    paddingHorizontal: 14,
    marginRight: 10, //왜 gap이 안되는가
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
});

export default OpinionPageCategory;
