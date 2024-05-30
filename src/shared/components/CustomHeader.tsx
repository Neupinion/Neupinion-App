import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ImageSourcePropType } from 'react-native';
import { WithLocalSvg } from 'react-native-svg/css';
import fontFamily from '../styles/fontFamily';
import theme from '../styles/theme';
import { WINDOW_WIDTH } from '../constants/display';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../rootStackParamList';
import MainArrowLeftSvg from '../../assets/icon/mainarrowLeft.svg';

interface CustomHeaderProps {
  navigation: StackNavigationProp<RootStackParamList>;
  title: string;
  isBackButton?: boolean;
  headerLeftEl?: JSX.Element[];
  headerRightEl?: JSX.Element[];
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  navigation,
  title,
  isBackButton,
  headerLeftEl,
  headerRightEl,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerSubContainer}>
        <View style={styles.headerLeftContainer}>
          {isBackButton && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <WithLocalSvg height={25} asset={MainArrowLeftSvg as ImageSourcePropType} />
            </TouchableOpacity>
          )}
          {headerLeftEl &&
            headerLeftEl.map((el, index) => (
              <View key={`left-${index}`} style={styles.headerSvg}>
                {el}
              </View>
            ))}
        </View>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.headerRightContainer}>
          {headerRightEl &&
            headerRightEl.map((el, index) => (
              <View key={`right-${index}`} style={styles.headerSvg}>
                {el}
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.color.background,
    width: WINDOW_WIDTH,
    paddingHorizontal: 18,
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

export default CustomHeader;
