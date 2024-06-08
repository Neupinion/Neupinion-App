import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../../shared/styles/theme';
import submitVoteResult from '../remotes/submitVoteResult';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../rootStackParamList';
import { WINDOW_WIDTH } from '../../../shared/constants/display';
import { Stand } from '../../../shared/types/news';
import fontFamily from '../../../shared/styles/fontFamily';

interface ReliabilityEvaluation {
  navigation: StackNavigationProp<RootStackParamList>;
  stands: Stand[];
  issueId: number;
}

const ReliabilityEvaluation = ({ navigation, stands, issueId }: ReliabilityEvaluation) => {
  const [selectedButtons, setSelectedButtons] = useState<number[]>([]);

  const toggleSelection = (index: number) => {
    setSelectedButtons((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index],
    );
  };

  const onClickVoteResult = async () => {
    try {
      if (selectedButtons.length > 0) {
        const firstStandId = stands[selectedButtons[0]].id;
        const secondStandId = stands[selectedButtons[1]].id;
        const firstRelatable = selectedButtons.includes(0);
        const secondRelatable = selectedButtons.includes(1);

        await submitVoteResult(
          issueId,
          firstStandId,
          firstRelatable,
          secondStandId,
          secondRelatable,
        );
      }
      navigation.navigate('VoteResultPage', { id: issueId });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>어떤 입장에 공감하시나요?</Text>
        <Text style={styles.subText}>공감하는 입장을 눌러, 사용자 통계를 확인해보세요!</Text>
        <Text style={styles.subText}>중복 투표도 가능해요...!</Text>
      </View>
      <View style={styles.standsContainer}>
        {stands.map((stand, index) => (
          <TouchableOpacity
            key={stand.id}
            style={[styles.button, selectedButtons.includes(index) && styles.selectedButton]}
            onPress={() => toggleSelection(index)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButtons.includes(index) && styles.selectedButtonText,
              ]}
            >
              {stand.stand}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={onClickVoteResult}>
        <Text style={styles.submitButtonText}>투표하고 결과보기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: WINDOW_WIDTH,
    marginTop: 30,
    alignItems: 'center',
  },
  standsContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 60,
    backgroundColor: '#212A3C',
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5, // To ensure 10px total gap
  },
  buttonText: {
    color: '#4E5867',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  selectedButton: {
    backgroundColor: theme.color.main,
  },
  selectedButtonText: {
    color: theme.color.white,
  },
  submitButton: {
    width: 174,
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.color.gray3,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 17,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
  titleText: {
    fontSize: 18,
    fontFamily: fontFamily.pretendard.bold,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    marginBottom: 12,
  },
  subText: {
    fontSize: 13,
    fontFamily: fontFamily.pretendard.medium,
    color: theme.color.gray6,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22.5,
    letterSpacing: -0.51,
  },
});

export default ReliabilityEvaluation;
