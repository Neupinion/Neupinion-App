import theme from './theme';
import { TextStyle } from 'react-native';

interface GlobalTextStyles {
  NormalText17: TextStyle;
  NormalText16: TextStyle;
}

const GlobalTextStyles: GlobalTextStyles = {
  NormalText17: {
    flex: 1,
    fontSize: 17,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    marginLeft: 26,
  },
  NormalText16: {
    flex: 1,
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
};

export default GlobalTextStyles;
