import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FollowUpIssue, ReProcessedIssue } from '../../../shared/types/news';
import theme from '../../../shared/styles/theme';
import { SplashDataItem } from '../../splash/types/splashDataItem';

interface IndicatorProps {
  data: ReProcessedIssue[] | FollowUpIssue[] | SplashDataItem[] | React.JSX.Element[] | null;
  slideIndex: number;
}

const Indicator = ({ data, slideIndex }: IndicatorProps) => {
  if (!data) {
    return <View style={styles.container}></View>;
  }

  return (
    <View style={styles.container}>
      {data.map((_, index) => (
        <View
          testID={'indicator_dot_' + index.toString()}
          key={index}
          style={[
            styles.dotStyle,
            index === slideIndex ? styles.activeDotStyle : styles.inactiveDotStyle,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 16,
  },
  dotStyle: {
    marginLeft: 2,
    marginRight: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.color.main,
  },
  activeDotStyle: {
    width: 11,
    height: 5,
    backgroundColor: theme.color.main,
  },
  inactiveDotStyle: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: theme.color.white,
  },
});

export default Indicator;
