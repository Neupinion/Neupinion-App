import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';
import theme from '../../../shared/styles/theme';
import OpinionWriterSvg from '../../../assets/icon/opinionwrite.svg';
import { WithLocalSvg } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../rootStackParamList';

const OpinionWriteSlider = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onClickOpinionButton = () => {
    navigation.navigate('OpinionPost', { sentenceNumber: undefined });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={GlobalTextStyles.NormalText17}>의견 쓰기</Text>
      </View>
      <View style={{ justifyContent: 'flex-start', marginLeft: -30 }}>
        <WithLocalSvg
          width={125.5}
          height={99.08478}
          asset={OpinionWriterSvg as ImageSourcePropType}
        />
      </View>
      <Text style={styles.textStyle}>아직 의견이 없어요!</Text>
      <TouchableOpacity style={styles.opinionButton} onPress={onClickOpinionButton}>
        <View>
          <Text style={styles.buttonText}>의견 남기기</Text>
        </View>
      </TouchableOpacity>
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
    marginTop: 30,
  },
  opinionWriterContainer: {
    position: 'relative',
    backgroundColor: 'tomato',
  },
  opinionWriterSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  textStyle: {
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
    marginTop: 19.92,
  },
  opinionButton: {
    width: 131,
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.color.gray5,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
});

export default OpinionWriteSlider;
