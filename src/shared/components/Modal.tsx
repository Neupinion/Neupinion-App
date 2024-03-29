import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../recoil/modalState';
import { StyleSheet, View } from 'react-native';

const Modal: React.FC = () => {
  const [{ isOpen, content }, setModalState] = useRecoilState(modalState);

  const handleClose = () => {
    setModalState({ isOpen: false, content: null });
  };

  return (
    isOpen ? <View style={styles.modalView}>{content}</View> : null;
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
  },
});

export default Modal;
