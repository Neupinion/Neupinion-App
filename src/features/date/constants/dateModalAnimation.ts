import { Animated } from 'react-native';
import {
  dateModalAfterOpacity,
  dateModalAfterScale,
  dateModalAfterY,
  dateModalAnimationDuration,
  dateModalInitialOpacity,
  dateModalInitialScale,
  dateModalInitialY,
} from './modalAnimationNumber';

const createOpenDateModalAnimation = (
  modalY: Animated.Value,
  modalOpacity: Animated.Value,
  modalScale: Animated.Value,
) => {
  return Animated.parallel([
    Animated.timing(modalY, {
      toValue: dateModalAfterY,
      duration: dateModalAnimationDuration,
      useNativeDriver: true,
    }),
    Animated.timing(modalOpacity, {
      toValue: dateModalAfterOpacity,
      duration: dateModalAnimationDuration,
      useNativeDriver: true,
    }),
    Animated.timing(modalScale, {
      toValue: dateModalAfterScale,
      duration: dateModalAnimationDuration,
      useNativeDriver: true,
    }),
  ]);
};

const createCloseDateModalAnimation = (
  modalY: Animated.Value,
  modalOpacity: Animated.Value,
  modalScale: Animated.Value,
) => {
  return Animated.parallel([
    Animated.timing(modalY, {
      toValue: dateModalInitialY,
      duration: dateModalAnimationDuration,
      useNativeDriver: true,
    }),
    Animated.timing(modalOpacity, {
      toValue: dateModalInitialOpacity,
      duration: dateModalAnimationDuration,
      useNativeDriver: true,
    }),
    Animated.timing(modalScale, {
      toValue: dateModalInitialScale,
      duration: dateModalAnimationDuration,
      useNativeDriver: true,
    }),
  ]);
};

export { createOpenDateModalAnimation, createCloseDateModalAnimation };
