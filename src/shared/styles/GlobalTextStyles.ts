import theme from './theme';
import { TextStyle } from 'react-native';
import fontFamily from './fontFamily';

interface GlobalTextStyles {
  NormalText17: TextStyle;
}

const GlobalTextStyles: GlobalTextStyles = {
  NormalText17: {
    flex: 1,
    fontSize: 17,
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    marginLeft: 26,
  },
};

export default GlobalTextStyles;
