import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import theme from '../styles/theme';
import fontFamily from '../styles/fontFamily';

interface ReportModalProps {
  title: string;
  onClose: () => void;
  onSubmit: (reason: string, details: string) => void | Promise<void>;
}

const reasons = [
  { label: '스팸', value: 'spam' },
  { label: '부적절한 내용', value: 'inappropriate' },
  { label: '개인정보 침해', value: 'privacy' },
  { label: '저작권 침해', value: 'copyright' },
  { label: '기타', value: 'other' },
];

const ReportModal = ({ title, onClose, onSubmit }: ReportModalProps) => {
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [details, setDetails] = useState<string>('');

  const onClickCancel = () => {
    onClose();
  };

  const onClickSubmit = () => {
    void onSubmit(selectedReason, details);
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.popupContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.warningText}>신고 이유를 선택하고, 상세 설명을 입력해 주세요.</Text>

        <ScrollView style={styles.reasonContainer}>
          {reasons.map((reason) => (
            <TouchableOpacity
              key={reason.value}
              style={[
                styles.reasonButton,
                selectedReason === reason.value && styles.selectedReasonButton,
              ]}
              onPress={() => setSelectedReason(reason.value)}
            >
              <Text style={styles.reasonText}>{reason.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={4}
          placeholder="상세 설명을 작성해 주세요."
          placeholderTextColor="#D1D3D8"
          value={details}
          onChangeText={setDetails}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onClickCancel} style={styles.cancelButton}>
            <Text style={styles.buttonText}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClickSubmit} style={styles.submitButton}>
            <Text style={styles.buttonText}>제출</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(17, 17, 26, 0.8)',
  },
  popupContainer: {
    width: 340,
    borderRadius: 10,
    backgroundColor: '#394358',
    padding: 16,
    alignItems: 'center',
  },
  exclamationCircle: {
    marginTop: 16,
    borderRadius: 28,
    width: 56,
    height: 56,
    backgroundColor: '#4E5867',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginTop: 12,
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.6,
  },
  warningText: {
    marginTop: 8,
    color: '#D1D3D8',
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
    textAlign: 'center',
  },
  reasonContainer: {
    width: '100%',
    maxHeight: 150,
    marginTop: 12,
    marginBottom: 12,
  },
  reasonButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4E5867',
    marginBottom: 8,
  },
  selectedReasonButton: {
    backgroundColor: theme.color.main,
  },
  reasonText: {
    color: '#D1D3D8',
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 16,
  },
  textInput: {
    width: '100%',
    height: 100,
    backgroundColor: '#4E5867',
    borderRadius: 10,
    padding: 10,
    color: '#D1D3D8',
    fontFamily: fontFamily.pretendard.medium,
    fontSize: 16,
    marginVertical: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#4E5867',
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.color.main,
  },
  buttonText: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
});

export default ReportModal;
