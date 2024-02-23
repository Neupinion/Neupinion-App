import React, { useEffect, useState } from 'react';
import {
  Animated,
  Modal,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { koreaLocales } from '../constants/locales';
import { cvtParamDate } from '../constants/cvtParamDate';
import { useDate } from '../provider/DateProvider';
import { WithLocalSvg } from 'react-native-svg';
import DateModalClose from '../../../assets/icon/datemodalclose.svg';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
LocaleConfig.locales['kr'] = koreaLocales;
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
LocaleConfig.defaultLocale = 'kr';

interface DateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DateModal: React.FC<DateModalProps> = ({ isOpen, onClose }) => {
  const [modalY] = useState(new Animated.Value(Dimensions.get('window').height));
  const [selectedDate, setSelectedDate] = useState(cvtParamDate(new Date()));
  const { setDate } = useDate();

  const onCloseModal = () => {
    setDate(selectedDate.replace(/-/g, ''));
    onClose();
  };

  const onDaySelect = (day: DateData) => {
    const newDate = day.dateString;
    setSelectedDate(newDate);
  };

  const markedDates = {
    [selectedDate]: { selected: true, selectedColor: '#7E58E9' },
  };

  useEffect(() => {
    if (isOpen) {
      Animated.timing(modalY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(modalY, {
        toValue: Dimensions.get('window').height,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen, modalY]);

  return (
    <Modal visible={isOpen} transparent animationType="none">
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{ translateY: modalY }],
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
              maxDate={cvtParamDate(new Date())}
              disableAllTouchEventsForDisabledDays={true}
              theme={{
                selectedDayBackgroundColor: '#7E58E9',
                arrowColor: 'rgba(255, 255, 255, 0.8)',
                todayTextColor: '#ffffff',
                dayTextColor: '#ffffff',
                calendarBackground: 'rgba(0, 0, 0, 0)',
                monthTextColor: '#ffffff',
                textMonthFontWeight: '500',
                textDayFontWeight: '500',
                textDisabledColor: 'rgba(255, 255, 255, 0.3)',
                textInactiveColor: 'rgba(0, 0, 0, 0.3)',
                textDayFontSize: 18,
                textMonthFontSize: 18,
                textDayHeaderFontSize: 12,
              }}
            />
          </View>
          <TouchableOpacity onPress={onCloseModal} style={styles.closeButton}>
            <WithLocalSvg width={14} height={14} asset={DateModalClose as ImageSourcePropType} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 480,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#21202F',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.8)',
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
    width: Dimensions.get('window').width,
    height: 460,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendar: {
    flex: 1,
    width: Dimensions.get('window').width - 32,
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
