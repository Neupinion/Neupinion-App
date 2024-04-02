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
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../rootStackParamList';
import { useModal } from '../../../shared/hooks/useModal';
import OpinionWriteBottomSheet from '../../opinion/components/OpinionWriteBottomSheet';
import { OpinionWriteDummy } from '../../../dummy/OpinionWriteDummy';

interface OpinionWriteSliderProps {
  navigation: StackNavigationProp<RootStackParamList>;
  issueId: number;
}
const OpinionWriteSlider = ({ navigation, issueId }: OpinionWriteSliderProps) => {
  const { openModal, closeModal } = useModal();

  const onClickButton = () => {
    openModal(
      <OpinionWriteBottomSheet
        navigation={navigation}
        issueId={issueId}
        opinionWrite={OpinionWriteDummy}
        onClose={closeModal}
      />,
    );
  };
  const onClickOpinionButton = () => {
    navigation.navigate('OpinionPost', { issueId: issueId });
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
      <TouchableOpacity style={styles.opinionButton} onPress={onClickButton}>
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
