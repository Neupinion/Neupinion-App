import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
} from 'react-native';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import { WithLocalSvg } from 'react-native-svg';
import OpinionPin from '../../../assets/icon/opinionpin.svg';
import { useModal } from '../../../shared/hooks/useModal';
import {
  createCloseBottomSheetAnimation,
  createOpenBottomSheetAnimation,
} from '../../../shared/constants/bottomSheetAnimation';
import WarningModal from '../../../shared/components/WarningModal';
import { GESTURE_SPEED_THRESHOLD } from '../../../shared/constants/bottomSheetGestureConstants';
import { deleteReprocessedIssueOpinion } from '../remotes/opinion';
import { OpinionWrite } from '../../../shared/types/news';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../rootStackParamList';
import useFetch from '../../../shared/hooks/useFetch';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../shared/constants/display';

interface OpinionWriteBottomSheetProps {
  navigation: StackNavigationProp<RootStackParamList>;
  issueId: number;
  opinionWrite: OpinionWrite;
  onClose: () => void;
}

const OpinionWriteBottomSheet = ({
  navigation,
  issueId,
  opinionWrite,
  onClose,
}: OpinionWriteBottomSheetProps) => {
  const { openModal, closeModal } = useModal();

  const panY = useRef(new Animated.Value(WINDOW_HEIGHT)).current;

  const openBottomSheet = () => createOpenBottomSheetAnimation(panY).start();

  useEffect(() => {
    openBottomSheet();
  }, []);

  const closeBottomSheet = () => createCloseBottomSheetAnimation(panY).start(onClose);

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > GESTURE_SPEED_THRESHOLD) {
          closeBottomSheet();
        } else {
          openBottomSheet();
        }
      },
    }),
  ).current;

  const onClickModifyButton = () => {
    closeBottomSheet();
    navigation.navigate('OpinionPost', { issueId: issueId, opinionWrite: opinionWrite });
  };

  const { fetchData } = useFetch(() => deleteReprocessedIssueOpinion(opinionWrite.id), false);
  const onClickConfirmWarningModal = () =>
    fetchData().then(() => {
      closeModal();
      closeBottomSheet();
    });

  const onClickDeleteButton = () => {
    openModal(
      <WarningModal
        title={'작성한 의견을 삭제하시겠습니까?'}
        onClose={closeModal}
        onConfirm={onClickConfirmWarningModal}
      />,
    );
  };

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={styles.overlay}>
      <TouchableWithoutFeedback onPress={closeBottomSheet}>
        <View style={styles.background} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={{ ...styles.bottomSheetContainer, transform: [{ translateY }] }}
        {...panResponders.panHandlers}
      >
        <View style={styles.panResponderContainer}>
          <View style={styles.panResponder} />
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.pinContainer}>
            <TouchableOpacity style={styles.pin}>
              <WithLocalSvg width={20} height={20} asset={OpinionPin as ImageSourcePropType} />
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>{opinionWrite.paragraphContent}</Text>
        </View>
        <View style={styles.dotLine} />
        <Text style={styles.contentText}>{opinionWrite.content}</Text>
        <TouchableOpacity style={styles.modifyButton} onPress={onClickModifyButton}>
          <Text style={styles.modifyButtonText}>수정하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={onClickDeleteButton}>
          <Text style={styles.deleteButtonText}>삭제하기</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomSheetContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212A3C',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  panResponderContainer: {
    height: 24,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panResponder: {
    width: 44,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  titleContainer: {
    display: 'flex',
    marginTop: 24,
    marginHorizontal: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleText: {
    color: theme.color.white,
    textAlign: 'justify',
    fontFamily: fontFamily.pretendard.bold,
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22.5,
    letterSpacing: -0.45,
  },
  pinContainer: {
    display: 'flex',
    width: 20,
    flexDirection: 'column',
    position: 'absolute',
    left: -5,
    top: 2,
  },
  pin: {
    width: 20,
    height: 20,
  },
  dotLine: {
    width: 340,
    marginVertical: 16,
    flexShrink: 0,
    height: 0,
    backgroundColor: '#D1D3D8',
    borderWidth: 0.6,
    borderStyle: 'dashed',
  },
  contentText: {
    color: '#EBECF1',
    height: 190,
    textAlign: 'justify',
    fontFamily: fontFamily.pretendard.bold,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
    marginHorizontal: 25,
  },
  modifyButton: {
    width: WINDOW_WIDTH - 50,
    backgroundColor: theme.color.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 28,
    height: 50,
  },
  modifyButtonText: {
    color: theme.color.white,
    textAlign: 'justify',
    fontFamily: fontFamily.pretendard.bold,
    fontStyle: 'normal',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
  deleteButton: {
    width: WINDOW_WIDTH - 50,
    backgroundColor: '#212A3C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    height: 50,
  },
  deleteButtonText: {
    color: '#71788F',
    textAlign: 'justify',
    fontFamily: fontFamily.pretendard.bold,
    fontStyle: 'normal',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
});

export default OpinionWriteBottomSheet;
