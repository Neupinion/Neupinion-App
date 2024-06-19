import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ImageSourcePropType } from 'react-native';
import { WithLocalSvg } from 'react-native-svg/css';
import MainArrowSvg from '../../../assets/icon/mainarrow.svg';
import { getFormatDate } from '../functions/formatDate';
import fontFamily from '../../../shared/styles/fontFamily';
import { useDate } from '../provider/DateProvider';
import { useModal } from '../../../shared/hooks/useModal';
import DateModal from './DateModal';
import theme from '../../../shared/styles/theme';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../rootStackParamList';

interface MainPageHeaderProps {
  navigation: StackNavigationProp<RootStackParamList>;
  title: string;
}

const MainPageHeader = ({ title }: MainPageHeaderProps) => {
  const { date } = useDate();
  const { openModal, closeModal } = useModal();

  const openDateModal = () => {
    openModal(<DateModal onClose={closeModal} />);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerSubContainer}>
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity onPress={openDateModal}>
            <Text style={styles.headerDateText}>{getFormatDate(date)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerArrow} onPress={openDateModal}>
            <WithLocalSvg width={12} height={12} asset={MainArrowSvg as ImageSourcePropType} />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.headerRightContainer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.color.background,
    width: WINDOW_WIDTH,
    paddingHorizontal: 22,
    paddingVertical: 18,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: 104,
  },
  headerSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerRightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerDateText: {
    fontSize: 16,
    fontFamily: fontFamily.pretendard.bold,
    color: 'rgba(255,255,255,0.98)',
  },
  appText: {
    fontSize: 16,
    fontFamily: fontFamily.pretendard.medium,
    color: 'rgba(255,255,255,0.98)',
  },
  headerArrow: {
    marginLeft: 2,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontWeight: '700',
  },
  headerSvg: {
    marginLeft: 14,
  },
});

export default MainPageHeader;
