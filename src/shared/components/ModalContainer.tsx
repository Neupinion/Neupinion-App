import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { modalState } from '../../recoil/modalState';
import { StyleSheet, View } from 'react-native';
import { ModalContent } from '../types/modal';
import { Modal } from 'react-native';

interface ModalWrapperProps {
  children?: ReactNode;
  component: ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, component }) => (
  <Modal style={styles.modalView} visible={true} animationType="fade" transparent>
    {component}
    {children}
  </Modal>
);

const ModalContainer: React.FC = () => {
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

export default ModalContainer;
