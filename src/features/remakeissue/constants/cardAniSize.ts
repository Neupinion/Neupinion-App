import { Dimensions } from 'react-native';

export const ITEM_SIZE = Dimensions.get('window').width * 0.76;
export const SPACER_ITEM_SIZE = (Dimensions.get('window').width - ITEM_SIZE) / 2;
