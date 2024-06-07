import React, { useEffect, useState } from 'react';
import { Animated, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import theme from '../../styles/theme';
import { WINDOW_WIDTH } from '../../constants/display';
import fontFamily from '../../styles/fontFamily';
import { WithLocalSvg } from 'react-native-svg/css';
import ToastIcon from '../../../assets/icon/warntoast.svg';

interface ToastProps {
  message: string;
  onHide: () => void;
}

const Toast = ({ message, onHide }: ToastProps) => {
  const [show, setShow] = useState(false);
  const [translateY] = useState(new Animated.Value(-100));

  useEffect(() => {
    if (message) {
      setShow(true);
      Animated.timing(translateY, {
        toValue: 70,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(translateY, {
            toValue: -100,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            setShow(false);
            onHide();
          });
        }, 2000);
      });
    }
  }, [message]);

  if (!show) return null;

  return (
    <Animated.View style={[styles.toast, { transform: [{ translateY }] }]}>
      <WithLocalSvg height={22} asset={ToastIcon as ImageSourcePropType} />
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.color.gray3,
    width: WINDOW_WIDTH - 52,
    marginHorizontal: 26,
    paddingHorizontal: 16,
    height: 50,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 40,
    zIndex: 1000,
  },
  message: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 21,
    letterSpacing: -0.42,
  },
});

export default Toast;
