import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../shared/styles/theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../rootStackParamList';

const VoteResultPage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default VoteResultPage;
