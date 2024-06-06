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
import { WithLocalSvg } from 'react-native-svg/css';
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
import { useSetRecoilState } from 'recoil';
import { opinionPostState } from '../../../recoil/opinionPostState';

interface OpinionWriteBottomSheetProps {
  navigation: StackNavigationProp<RootStackParamList>;
  issueId: number;
  opinionWrite: OpinionWrite;
  onClose: () => void;
  isOwner: boolean;
}

const OpinionWriteBottomSheet = ({
  navigation,
  issueId,
  opinionWrite,
  onClose,
  isOwner,
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

  const setOpinionPostState = useSetRecoilState(opinionPostState);
  const onClickModifyButton = () => {
    closeBottomSheet();
    setOpinionPostState({
      issueId: issueId,
      opinionId: opinionWrite.id,
      sentenceIndex: opinionWrite.paragraphId,
      text: opinionWrite.paragraphContent,
      isReliable: opinionWrite.isReliable,
      editMode: true,
    });
    navigation.navigate('OpinionPost');
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

  const onClickReportButton = () => {
    // 신고하기 버튼 동작
    // closeModal();
    closeBottomSheet();
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
        {isOwner ? (
          <>
            <TouchableOpacity
              style={[styles.button, styles.modifyButton]}
              onPress={onClickModifyButton}
            >
              <Text style={[styles.buttonText, styles.modifyButtonText]}>수정하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={onClickDeleteButton}
            >
              <Text style={[styles.buttonText, styles.deleteButtonText]}>삭제하기</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.reportButton]}
            onPress={onClickReportButton}
          >
            <Text style={[styles.buttonText, styles.reportButtonText]}>신고하기</Text>
          </TouchableOpacity>
        )}
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
    paddingHorizontal: 26,
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
    width: '100%',
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleText: {
    display: 'flex',
    marginLeft: 26,
    color: theme.color.white,
    textAlign: 'left',
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22.5,
    letterSpacing: -0.45,
  },
  pinContainer: {
    width: 20,
    position: 'absolute',
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
    width: '100%',
    height: 190,
    textAlign: 'left',
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  button: {
    width: WINDOW_WIDTH - 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    height: 50,
  },
  buttonText: {
    textAlign: 'justify',
    fontFamily: fontFamily.pretendard.bold,
    fontStyle: 'normal',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
  modifyButton: {
    backgroundColor: theme.color.main,
    marginTop: 28,
  },
  modifyButtonText: {
    color: theme.color.white,
  },
  deleteButton: {
    backgroundColor: '#212A3C',
    marginBottom: 20,
  },
  deleteButtonText: {
    color: '#71788F',
  },
  reportButton: {
    backgroundColor: theme.color.main,
    marginTop: 28,
    marginBottom: 20,
  },
  reportButtonText: {
    color: theme.color.white,
  },
});

export default OpinionWriteBottomSheet;
