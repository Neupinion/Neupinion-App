import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Linking,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import PopupCloseButton from '../../../assets/icon/popupclosebutton.svg';
import { ReferenceResponse } from '../../../shared/types/news';
import theme from '../../../shared/styles/theme';
import { WithLocalSvg } from 'react-native-svg/css';

interface OriginalIssueModalProps {
  references: ReferenceResponse[];
  onClose: () => void;
}

const MAX_LINK_TEXT_LENGTH = 30;

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength - 3)}...`;
};

const OriginalIssueModal = ({ references, onClose }: OriginalIssueModalProps) => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  const renderSourceItem = (source: string) => (
    <TouchableOpacity
      key={source}
      onPress={() => handleLinkPress(source)}
      style={styles.sourceButton}
    >
      <Text style={styles.sourceButtonText}>{truncateText(source, MAX_LINK_TEXT_LENGTH)}</Text>
    </TouchableOpacity>
  );

  const renderStandItem = (item: ReferenceResponse) => (
    <View style={styles.content} key={item.stand}>
      <TouchableOpacity style={styles.standButton}>
        <Text style={styles.standButtonText}>{item.stand}</Text>
      </TouchableOpacity>
      {item.sources.map(renderSourceItem)}
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.svg} onPress={onClose}>
        <WithLocalSvg width={16} height={16} asset={PopupCloseButton as ImageSourcePropType} />
      </TouchableOpacity>
      <View style={styles.contentBox}>
        <ScrollView>{references.map(renderStandItem)}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBox: {
    width: '80%',
    marginTop: 30,
    marginHorizontal: 34,
    backgroundColor: theme.color.background,
    borderRadius: 10,
    overflow: 'hidden',
    maxHeight: '80%',
    padding: 20,
  },
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  svg: {
    width: 16,
    top: 20,
    alignSelf: 'flex-end',
    marginRight: 46,
  },
  standButton: {
    backgroundColor: theme.color.main,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  standButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.color.white,
  },
  sourceButton: {
    backgroundColor: theme.color.gray2,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  sourceButtonText: {
    color: theme.color.main,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default OriginalIssueModal;
