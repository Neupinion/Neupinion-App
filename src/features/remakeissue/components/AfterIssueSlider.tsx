import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { FollowUpIssue } from '../../../shared/types/news';
import AfterIssueItem from './AfterIssueItem';
import Indicator from './Indicator';

interface AfterIssueProps {
  afterNews: FollowUpIssue[] | null;
}
const AfterIssueSlider = ({ afterNews }: AfterIssueProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').width}
        data={afterNews}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <AfterIssueItem item={item} />}
        onScroll={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
          );
          setSlideIndex(newIndex);
        }}
        decelerationRate="fast"
        bounces={false}
      />
      <Indicator data={afterNews} slideIndex={slideIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: 26,
  },
});

export default AfterIssueSlider;
