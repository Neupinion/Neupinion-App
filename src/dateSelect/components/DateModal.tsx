import React, { useEffect, useState } from 'react';
import {
  Animated,
  Modal,
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { koreaLocales } from '../constants/locales';

LocaleConfig.locales['kr'] = koreaLocales;
LocaleConfig.defaultLocale = 'kr';

interface DateObject {
  year: number;
  month: number;
}

const renderCustomHeader = (date: DateObject) => {
  const headerDate = `${date.year}년 ${LocaleConfig.locales['kr'].monthNames[date.month - 1]}`;
  return (
    <View>
      <Text>{headerDate}</Text>
    </View>
  );
};

interface DateModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const DateModal: React.FC<DateModalProps> = ({ isOpen, onClose }) => {
  const [modalY] = useState(new Animated.Value(Dimensions.get('window').height));

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
      <TouchableWithoutFeedback onPress={onClose}>
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
                theme={{
                  selectedDayBackgroundColor: '#7E58E9',
                  arrowColor: 'rgba(255, 255, 255, 0.8)',
                  todayTextColor: '#ffffff',
                  calendarBackground: 'rgba(0, 0, 0, 0)',
                  monthTextColor: '#ffffff',
                  textDisabledColor: 'rgba(0, 0, 0, 0.3)',
                  textInactiveColor: 'rgba(0, 0, 0, 0.3)',
                  textDayFontSize: 18,
                  textMonthFontSize: 18,
                  textDayHeaderFontSize: 12,
                }}
                renderHeader={renderCustomHeader({})}
              />
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 520,
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
    width: Dimensions.get('window').width - 72,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

export default DateModal;
