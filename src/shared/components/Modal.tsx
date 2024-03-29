import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalState } from '../../recoil/modalState';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ModalContent } from '../types/modal';

const Modal: React.FC = () => {
  const { isOpen, content } = useRecoilValue(modalState);

  if (!isOpen) return null;

  return (
    <View style={styles.container}>
      {content.map((modalContent: ModalContent, index) => (
        <View key={index} style={styles.modalView}>
          {modalContent.component}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Modal;
