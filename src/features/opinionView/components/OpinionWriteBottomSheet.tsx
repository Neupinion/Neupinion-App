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
} from 'react-native';

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
            <View style={styles.panResponder}/>
          </View>
          <Text>{title}</Text>
          <Text>{content}</Text>
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
});

export default OpinionWriteBottomSheet;
