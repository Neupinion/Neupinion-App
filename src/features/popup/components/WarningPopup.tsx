import { ImageSourcePropType, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import Exclamation from '../../../assets/icon/warningpopupexclamation.svg';
import { WithLocalSvg } from 'react-native-svg';

interface WarningPopup {
  modalVisible: boolean;
  title: string;
  onClose: () => void;
  onConfirm: () => void;
}
const WarningPopup = ({ modalVisible, title, onClose, onConfirm }: WarningPopup) => {
  const [isModalVisible, setModalVisible] = useState(modalVisible);

  useEffect(() => {
    setModalVisible(modalVisible);
  }, [modalVisible]);
  const onClickCancel = () => {
    setModalVisible(false);
    onClose();
  };

  const onClickConfirm = () => {
    setModalVisible(false);
    onClose();
    onConfirm();
  };

  return (
    <Modal visible={isModalVisible} animationType={'fade'} transparent statusBarTranslucent>
      <View style={styles.overlay}>
        <View style={styles.popupContainer}>
          <View style={styles.exclamationCircle}>
            <WithLocalSvg width={7} height={28.5} asset={Exclamation as ImageSourcePropType} />
          </View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.warningText}>이 작업은 취소할 수 없습니다.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClickCancel} style={styles.cancelButton}>
              <Text style={styles.buttonText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickConfirm} style={styles.confirmButton}>
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
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
    height: 244,
    borderRadius: 10,
    backgroundColor: '#394358',
    flexDirection: 'column',
    alignItems: 'center',
  },
  exclamationCircle: {
    marginTop: 24,
    borderRadius: 56,
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
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.6,
  },
  warningText: {
    marginTop: 4,
    color: '#D1D3D8',
    fontFamily: fontFamily.pretendard.bold,
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
  },
  buttonContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 142,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#4E5867',
  },
  confirmButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 142,
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.color.main,
  },
  buttonText: {
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    fontStyle: 'normal',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
});
export default WarningPopup;
