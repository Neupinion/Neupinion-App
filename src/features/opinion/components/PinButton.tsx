import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../../shared/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../rootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';

const PinButton = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onClickButton = () => {
    navigation.navigate('OpinionPin');
  };

  return (
    <TouchableOpacity onPress={onClickButton} style={styles.pinButton}>
      <Text style={styles.pinButtonText}>핀찍기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pinButton: {
    display: 'flex',
    width: 338,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#394358',
  },
  pinButtonText: {
    color: theme.color.white,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
});

export default PinButton;
