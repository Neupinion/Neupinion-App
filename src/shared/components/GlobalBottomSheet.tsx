import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { bottomSheetState } from '../../recoil/bottomSheetState';
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const animationDuration: number = 500;
const GlobalBottomSheet: React.FC = () => {
  const [{ isOpen, content }, setBottomSheetState] = useRecoilState(bottomSheetState);
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

  const onClickBackGroundBottomSheet = () => {
    closeBottomSheet.start(() => {
      setBottomSheetState({ isOpen: false, content: null });
    });
  };

  useEffect(() => {
    if (isOpen) {
      resetBottomSheet.start();
    }
  }, [isOpen]);

  const handleClose = () => {
    closeBottomSheet.start(() => {
      setBottomSheetState({ isOpen: false, content: null });
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
          handleClose();
        } else {
          resetBottomSheet.start();
        }
      },
    }),
  ).current;

  return isOpen ? (
    <View style={styles.overlay}>
      <TouchableWithoutFeedback onPress={onClickBackGroundBottomSheet}>
        <View style={styles.background} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={{ ...styles.bottomSheetContainer, transform: [{ translateY }] }}
        {...panResponders.panHandlers}
      >
        {content}
      </Animated.View>
    </View>
  ) : null;
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
});

export default GlobalBottomSheet;
