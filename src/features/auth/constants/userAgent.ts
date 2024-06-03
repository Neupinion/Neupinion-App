import { Platform } from 'react-native';

export const userAgent =
  Platform.OS === 'android'
    ? 'Chrome/18.0.1025.133 Mobile Safari/535.19'
    : 'AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75';
