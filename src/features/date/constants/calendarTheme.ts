import { Theme } from 'react-native-calendars/src/types';
import theme from '../../../shared/styles/theme';
import { colorWithOpacity } from '../../../shared/functions/colorWithOpacity';

const calendarTheme: Theme = {
  selectedDayBackgroundColor: theme.color.main,
  arrowColor: colorWithOpacity(theme.color.white, 0.8),
  todayTextColor: theme.color.white,
  dayTextColor: theme.color.white,
  calendarBackground: colorWithOpacity(theme.color.black, 0),
  monthTextColor: theme.color.white,
  textMonthFontWeight: '500',
  textDayFontWeight: '500',
  textDisabledColor: colorWithOpacity(theme.color.white, 0.3),
  textInactiveColor: colorWithOpacity(theme.color.black, 0.3),
  textDayFontSize: 18,
  textMonthFontSize: 18,
  textDayHeaderFontSize: 12,
};

export default calendarTheme;
