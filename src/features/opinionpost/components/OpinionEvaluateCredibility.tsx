import React, { useState } from 'react';
import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg';
import OpinionInfoIcon from '../../../assets/icon/opinioninfoicon.svg';

interface OpinionEvaluateCredibilityProps {
  isActivate: boolean;
}

const OpinionEvaluateCredibility = ({ isActivate }: OpinionEvaluateCredibilityProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const onClickButton = (option: string) => {
    setSelectedOption(option);
  };

  const getButtonStyle = (option: string) => [
    styles.button,
    selectedOption === option && styles.selectedButton,
  ];

  const getButtonTextStyle = (option: string) => [
    styles.buttonText,
    selectedOption === option && styles.selectedButtonText,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={!isActivate || selectedOption === 'trust'}
          onPress={() => onClickButton('trust')}
          style={getButtonStyle('trust')}
        >
          <Text style={getButtonTextStyle('trust')}>믿을 수 있어요</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!isActivate || selectedOption === 'doubt'}
          onPress={() => onClickButton('doubt')}
          style={getButtonStyle('doubt')}
        >
          <Text style={getButtonTextStyle('doubt')}>의심이 가요</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoInsideContainer}>
          <View style={styles.infoIconContainer}>
            <WithLocalSvg width={16} height={16} asset={OpinionInfoIcon as ImageSourcePropType} />
          </View>
          <Text style={styles.infoText}>
            의견에 대한 신뢰도가 어느 쪽인지 눌러주세요! 본 의견은 전체 기사 투표에 들어가지
            않습니다.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 4,
    gap: 16,
  },
  textContainer: {
    display: 'flex',
    paddingHorizontal: 22,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 21,
    backgroundColor: '#191926',
    width: 338,
    height: 194,
    borderRadius: 10,
  },
  input: {
    marginTop: 10,
    height: 120,
    width: 298,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 23,
    letterSpacing: -0.45,
    color: theme.color.white,
  },
  textNumberContainer: {
    width: 298,
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
  },
  textNumberText: {
    marginTop: 4,
    color: '#71788F',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: 338,
  },
  infoContainer: {
    width: 338,
    height: 86,
    marginTop: 11,
    marginBottom: 85,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#191926',
  },
  infoInsideContainer: {
    width: 298,
    height: 46,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 10,
  },
  infoIconContainer: {
    width: 16,
    marginTop: 4.5,
  },
  infoText: {
    width: 272,
    color: '#71788F',
    textAlign: 'justify',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22.5,
    letterSpacing: -0.45,
  },
  button: {
    display: 'flex',
    borderRadius: 10,
    backgroundColor: '#212A3C',
    width: 164,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#4E5867',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: -0.54,
  },
  selectedButton: {
    backgroundColor: theme.color.main,
  },
  selectedButtonText: {
    color: theme.color.white,
  },
});

export default OpinionEvaluateCredibility;
