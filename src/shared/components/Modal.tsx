import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { modalState } from '../../recoil/modalState';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ModalContent } from '../types/modal';

interface ModalWrapperProps {
  children?: ReactNode;
  component: ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, component }) => (
  <View style={styles.modalView}>
    {component}
    {children}
  </View>
);

const Modal: React.FC = () => {
  const { isOpen, content } = useRecoilValue(modalState);

  if (!isOpen || content.length === 0) return null;

  const modalStack = content.reduceRight<ReactNode>(
    (children, modalContent: ModalContent, index) => {
      return (
        <ModalWrapper key={index} component={modalContent.component}>
          {children}
        </ModalWrapper>
      );
    },
    null,
  );

  return <View style={styles.container}>{modalStack}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    zIndex: 1,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Modal;
