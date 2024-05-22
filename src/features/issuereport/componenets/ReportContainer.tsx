import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import Indicator from '../../remakeissue/components/Indicator';
import theme from '../../../shared/styles/theme';
import ReportBubbleChart from './ReportBubbleChart';
import ReportRadarChart from './ReportRadarChart';

interface ReportContainerProps {
  id: number;
  onClose: () => void;
}

const ReportContainer = ({ id, onClose }: ReportContainerProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  // eslint-disable-next-line react/jsx-key
  const contents: React.ReactNode[] = [<ReportBubbleChart />, <ReportRadarChart />];

  const handleNext = () => {
    if (slideIndex < contents.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          {contents.map((content, index) => (
            <View key={index} style={styles.content}>
              {content}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handlePrev} disabled={slideIndex === 0} />
        <Indicator data={contents} slideIndex={slideIndex} />
        <TouchableOpacity onPress={handleNext} disabled={slideIndex === contents.length - 1} />
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
    height: '70%',
    backgroundColor: theme.color.white,
    borderRadius: 10,
    overflow: 'hidden',
  },
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    padding: 10,
  },
});

export default ReportContainer;
