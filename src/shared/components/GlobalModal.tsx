import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../recoil/modalState';
import { Modal, StyleSheet, View } from 'react-native';

const GlobalModal: React.FC = () => {
  const [{ isOpen, content }, setModalState] = useRecoilState(modalState);

  const handleClose = () => {
    setModalState({ isOpen: false, content: null });
  };

  return (
    <Modal visible={isOpen} animationType="fade" transparent onRequestClose={handleClose}>
      <View style={styles.modalView}>{content}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
  },
});

export default GlobalModal;
