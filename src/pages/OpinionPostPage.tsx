import React from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import OpinionBackButton from '../assets/icon/opinionbackbutton.svg';
import OpinionCheckButton from '../assets/icon/opinionpurplecheck.svg';
import PinButton from '../features/opinionpost/components/PinButton';
import PinTextNumberContainer from '../features/opinionpost/components/PinTextNumberContainer';

const OpinionPostPage = () => {
  const onClickBackButton = () => {
    console.log('뒤로가기');
  };

  const onClickCheckButton = () => {
    console.log('내용이 없다면 알럿을...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.topSvgStyle} onPress={onClickBackButton}>
          <WithLocalSvg width={10} height={20} asset={OpinionBackButton as ImageSourcePropType} />
        </TouchableOpacity>
        <Text style={styles.topTextStyle}>의견쓰기</Text>
        <TouchableOpacity style={styles.topSvgStyle} onPress={onClickCheckButton}>
          <WithLocalSvg width={17} height={12} asset={OpinionCheckButton as ImageSourcePropType} />
        </TouchableOpacity>
      </View>
      <View style={styles.choosePinContainer}>
        <PinTextNumberContainer
          circleNumber={1}
          circleText={'의견을 남길 부분을 선택해주세요'}
          isActivate={true}
        />
        <PinButton />
      </View>
      <View style={styles.choosePinContainer}>
        <PinTextNumberContainer
          circleNumber={2}
          circleText={'생각 쓰기'}
          isActivate={false}
        />
        <PinButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
    flexDirection: 'column',
    alignItems: 'center',
  },
  topContainer: {
    width: Dimensions.get('window').width,
    height: 30,
    marginTop: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSvgStyle: {
    width: 30,
    height: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  topTextStyle: {
    width: 234,
    color: theme.color.white,
    marginHorizontal: 30,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  choosePinContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
    gap: 16,
    width: 338,
  },
  choosePinTextContainer: {
    height: 26,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  choosePinText: {
    marginLeft: 10,
    color: theme.color.white,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
  circle: {
    display: 'flex',
    width: 20,
    height: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 300,
    backgroundColor: theme.color.main,
    marginVertical: 3,
  },
  circleText: {
    textAlign: 'center',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: -0.45,
    color: theme.color.white,
  },
  pinButton: {
    display: 'flex',
    width: 338,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 10,
    backgroundColor: '#394358',
  },
  pinButtonText: {
    color: theme.color.white,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
});

export default OpinionPostPage;
