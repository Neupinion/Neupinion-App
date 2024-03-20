import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import { WithLocalSvg } from 'react-native-svg';
import OpinionPin from '../../../assets/icon/opinionpin.svg';

interface OpinionWriteBottomSheetProps {
  modalVisible: boolean;
  title: string;
  content: string;
}

const OpinionWriteBottomSheet = ({
  modalVisible,
  title,
  content,
}: OpinionWriteBottomSheetProps) => {
  const [isModalVisible, setModalVisible] = useState(modalVisible);
  const animationDuration: number = 300;
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: animationDuration,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: animationDuration,
    useNativeDriver: true,
  });

  useEffect(() => {
    if (isModalVisible) {
      resetBottomSheet.start();
    }
  }, [isModalVisible]);
  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
  };

  const onClickModifyButton = () => {
    console.log('수정버튼 클릭');
  };

  const onClickDeleteButton = () => {
    console.log('삭제버튼 클릭');
  };

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeModal();
        } else {
          resetBottomSheet.start();
        }
      },
    }),
  ).current;

  return (
    <Modal visible={isModalVisible} animationType={'fade'} transparent statusBarTranslucent>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{ ...styles.bottomSheetContainer, transform: [{ translateY: translateY }] }}
        >
          <View style={styles.panResponderContainer} {...panResponders.panHandlers}>
            <View style={styles.panResponder} />
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.pinContainer}>
              <TouchableOpacity style={styles.pin}>
                <WithLocalSvg width={20} height={20} asset={OpinionPin as ImageSourcePropType} />
              </TouchableOpacity>
            </View>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.dotLine} />
          <Text style={styles.contentText}>{content}</Text>
          <TouchableOpacity style={styles.modifyButton} onPress={onClickModifyButton}>
            <Text style={styles.modifyButtonText}>수정하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={onClickDeleteButton}>
            <Text style={styles.deleteButtonText}>삭제하기</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    width: Dimensions.get('window').width - 50,
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
    width: Dimensions.get('window').width - 50,
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
