import { Animated, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const animationDuration: number = 300;
const createOpenBottomSheetAnimation = (panY: Animated.Value) => {
  return Animated.timing(panY, {
    toValue: 0,
    duration: animationDuration,
    useNativeDriver: true,
  });
};

const createCloseBottomSheetAnimation = (panY: Animated.Value) => {
  return Animated.timing(panY, {
    toValue: screenHeight,
    duration: animationDuration,
    useNativeDriver: true,
  });
};

export { createOpenBottomSheetAnimation, createCloseBottomSheetAnimation };
