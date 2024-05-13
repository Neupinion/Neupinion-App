import React, { useEffect, useState } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { koreaLocales } from '../constants/locales';
import { cvtParamDate } from '../constants/cvtParamDate';
import { useDate } from '../provider/DateProvider';
import { WithLocalSvg } from 'react-native-svg/css';
import DateModalClose from '../../../assets/icon/datemodalclose.svg';
import {
  dateModalInitialOpacity,
  dateModalInitialScale,
  dateModalInitialY,
} from '../constants/modalAnimationNumber';
import { toDashDate } from '../constants/toDashDate';
import {
  createCloseDateModalAnimation,
  createOpenDateModalAnimation,
} from '../constants/dateModalAnimation';
import calendarTheme from '../constants/calendarTheme';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../shared/constants/display';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
LocaleConfig.locales['kr'] = koreaLocales;
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
LocaleConfig.defaultLocale = 'kr';

interface DateModalProps {
  onClose: () => void;
}

const DateModal: React.FC<DateModalProps> = ({ onClose }) => {
  const [modalY] = useState(new Animated.Value(dateModalInitialY));
  const [modalOpacity] = useState(new Animated.Value(dateModalInitialOpacity));
  const [modalScale] = useState(new Animated.Value(dateModalInitialScale));

  const animationOpen = () =>
    createOpenDateModalAnimation(modalY, modalOpacity, modalScale).start();

  useEffect(() => {
    animationOpen();
  }, []);

  const animationClose = () =>
    createCloseDateModalAnimation(modalY, modalOpacity, modalScale).start(onClose);

  const { date, setDate } = useDate();
  const [selectedDate, setSelectedDate] = useState(toDashDate(date));

  const onCloseModal = () => {
    setDate(selectedDate.replace(/-/g, ''));
    animationClose();
  };

  const onDaySelect = (day: DateData) => {
    const newDate = day.dateString;
    setDate(newDate.replace(/-/g, ''));
    setSelectedDate(newDate);
    animationClose();
  };

  const markedDates = {
    [selectedDate]: { selected: true, selectedColor: '#7E58E9' },
  };

  return (
    <Animated.View
      style={[
        styles.overlay,
        {
          opacity: modalOpacity,
        },
      ]}
    >
      <TouchableOpacity
        testID={'dim-button'}
        onPress={onCloseModal}
        style={styles.dimButton}
      ></TouchableOpacity>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY: modalY }, { scale: modalScale }],
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>날짜 선택</Text>
          <Text style={styles.subtitleText}>KST(GMT+9)기준</Text>
        </View>
        <View style={styles.calendarContainer}>
          <Calendar
            style={styles.calendar}
            firstDay={1}
            monthFormat={'yyyy년 MM월'}
            onDayPress={onDaySelect}
            markedDates={markedDates}
            hideExtraDays={true}
            disableMonthChange={true}
            minDate={'2024-01-01'}
            maxDate={cvtParamDate(new Date())}
            current={toDashDate(date)}
            disableAllTouchEventsForDisabledDays={true}
            theme={calendarTheme}
          />
        </View>
        <TouchableOpacity onPress={onCloseModal} style={styles.closeButton}>
          <WithLocalSvg width={14} height={14} asset={DateModalClose as ImageSourcePropType} />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: 450,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#21202F',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  overlay: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  dimButton: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT - 450,
  },
  titleContainer: {
    marginTop: 22,
    height: 60,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 18,
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    marginLeft: 22,
  },
  subtitleText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    marginLeft: 22,
  },
  calendarContainer: {
    width: WINDOW_WIDTH,
    height: 460,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendar: {
    flex: 1,
    width: WINDOW_WIDTH - 32,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  closeButton: {
    position: 'absolute',
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    marginTop: 22,
    right: 13,
  },
});

export default DateModal;
