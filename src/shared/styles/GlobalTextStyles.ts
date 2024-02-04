import theme from './theme';
import { TextStyle } from 'react-native';

interface GlobalTextStyles {
  NormalText17: TextStyle;
}

const GlobalTextStyles: GlobalTextStyles = {
  NormalText17: {
    fontSize: 17,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 150,
    letterSpacing: -0.51,
    marginLeft: 26,
  },
};

export default GlobalTextStyles;
