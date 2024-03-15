import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../../../shared/styles/theme';

interface OpinionWriteContainerProps {
  isActivate: boolean;
  setIsTextInputFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpinionWriteContainer = ({
  isActivate,
  setIsTextInputFocused,
}: OpinionWriteContainerProps) => {
  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    if (inputText.length <= 300) {
      setText(inputText);
    }
  };

  return (
    <View style={styles.textContainer}>
      <TextInput
        style={styles.input}
        placeholder="내용을 입력해주세요."
        placeholderTextColor="#4E5867"
        multiline
        numberOfLines={4}
        onChangeText={handleTextChange}
        onBlur={() => {
          setIsTextInputFocused(false);
        }}
        onFocus={() => {
          setIsTextInputFocused(true);
        }}
        value={text}
        editable={isActivate}
      />
      <View style={styles.textNumberContainer}>
        <Text style={styles.textNumberText}>{`${text.length}자/300자`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    display: 'flex',
    paddingHorizontal: 22,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 21,
    backgroundColor: '#191926',
    width: 338,
    height: 194,
    borderRadius: 10,
  },
  input: {
    marginTop: 10,
    height: 120,
    width: 298,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 23,
    letterSpacing: -0.45,
    color: theme.color.white,
  },
  textNumberContainer: {
    width: 298,
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
  },
  textNumberText: {
    marginTop: 4,
    color: '#71788F',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
});

export default OpinionWriteContainer;
