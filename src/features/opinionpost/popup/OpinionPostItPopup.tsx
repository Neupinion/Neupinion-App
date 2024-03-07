import React from 'react';
import { ImageSourcePropType, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import DateModalClose from '../../../assets/icon/datemodalclose.svg';
import theme from '../../../shared/styles/theme';
import fontFamily from '../../../shared/styles/fontFamily';
import Pin from '../../../assets/icon/pin.svg';

interface OpinionPostItPopupProps {
  closeModal: () => void;
  title: string;
  opinion: string;
}
const OpinionPostItPopup: React.FC<OpinionPostItPopupProps> = ({ closeModal, title, opinion }) => {
  const onCloseModal = () => {
    closeModal();
  };

  const onClickDelete = () => {
    console.log('포스트잇 삭제 api를 연동해야합니다.');
  };

  const onClickEdit = () => {
    console.log('의견 수정 페이지로 이동하여 수정합니다.');
  };

  return (
    <Modal transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity onPress={onCloseModal} style={styles.closeButton}>
            <WithLocalSvg width={16} height={16} asset={DateModalClose as ImageSourcePropType} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.pin}>
            <WithLocalSvg width={20} height={20} asset={Pin as ImageSourcePropType} />
          </View>
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.dotLine} />
          <Text style={styles.opinionText}>{opinion}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClickDelete} style={styles.deleteButton}>
              <Text style={styles.buttonText}>삭제</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickEdit} style={styles.editButton}>
              <Text style={styles.buttonText}>수정하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 320,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: '#212A3C',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  overlay: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  closeButtonContainer: {
    width: 320,
    marginBottom: 12,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  closeButton: {
    backgroundColor: '#212A3C',
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: theme.color.white,
    marginTop: 24,
    display: 'flex',
    width: 280,
    textAlign: 'justify',
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22.5,
    letterSpacing: -0.45,
  },
  dotLine: {
    width: 280,
    marginVertical: 16,
    flexShrink: 0,
    height: 0,
    backgroundColor: '#D1D3D8',
    borderWidth: 0.6,
    borderStyle: 'dashed',
  },
  opinionText: {
    display: 'flex',
    color: theme.color.white,
    width: 280,
    fontSize: 14,
    flexShrink: 0,
    textAlign: 'justify',
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.42,
  },
  pin: {
    position: 'absolute',
    left: 14,
    top: 26,
  },
  buttonContainer: {
    marginTop: 28,
    marginBottom: 24,
    width: 280,
    height: 50,
    flexShrink: 0,
    gap: 16,
    flexDirection: 'row',
  },
  deleteButton: {
    width: 96,
    height: 50,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: '#394358',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    width: 168,
    height: 50,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: theme.color.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
    color: theme.color.white,
  },
});

export default OpinionPostItPopup;
