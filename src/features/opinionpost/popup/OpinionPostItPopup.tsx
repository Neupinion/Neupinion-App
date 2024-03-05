import React from 'react';
import { ImageSourcePropType, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import DateModalClose from '../../../assets/icon/datemodalclose.svg';
import theme from "../../../shared/styles/theme";
import fontFamily from "../../../shared/styles/fontFamily";

interface OpinionPostItPopupProps {
  closeModal: () => void;
  title: string;
  opinion: string;
}
const OpinionPostItPopup: React.FC<OpinionPostItPopupProps> = ({ closeModal, title, opinion }) => {
  const onCloseModal = () => {
    closeModal();
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
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 480,
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
    textAlign: 'justify',
    fontFamily: fontFamily.pretendard.medium,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22.5,
    letterSpacing: -0.45,
  },
});

export default OpinionPostItPopup;
