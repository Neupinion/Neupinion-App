import React, { useEffect, useState } from 'react';
import {
  Animated,
  Modal,
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

interface DateModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const DataModal: React.FC<DateModalProps> = ({ isOpen, onClose }) => {
  const [modalY] = useState(new Animated.Value(Dimensions.get('window').height));

  useEffect(() => {
    if (isOpen) {
      Animated.timing(modalY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(modalY, {
        toValue: Dimensions.get('window').height,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen, modalY]);

  return (
    <Modal visible={isOpen} transparent animationType="none">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <Animated.View
            style={[
              styles.container,
              {
                transform: [{ translateY: modalY }], // Y축으로 이동하는 애니메이션 적용
              },
            ]}
          >
            {/* 모달 내용 */}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 520,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#21202F',
    flexDirection: 'column',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
});

export default DataModal;
