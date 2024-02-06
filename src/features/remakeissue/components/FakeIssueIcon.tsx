import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../../../shared/styles/theme';

interface FakeIssueIconProps {
  views: string;
  posts: string;
}

const FakeIssueIcon = ({ views, posts }: FakeIssueIconProps) => {
  return (
    <View style={styles.container}>
      {/*<Svg width="17" height="17" viewBox="0 0 17 17" fill="none">*/}
      {/*  <Path*/}
      {/*    d="M11.332 10.625H5.66536C4.10056 10.625 2.83203 11.8935 2.83203 13.4583V14.875H14.1654V13.4583C14.1654 11.8935 12.8968 10.625 11.332 10.625Z"*/}
      {/*    stroke="#7E7D7A"*/}
      {/*    strokeLinecap="round"*/}
      {/*    strokeLinejoin="round"*/}
      {/*  />*/}
      {/*  <Path*/}
      {/*    d="M8.4987 7.79167C10.0635 7.79167 11.332 6.52314 11.332 4.95833C11.332 3.39353 10.0635 2.125 8.4987 2.125C6.93389 2.125 5.66536 3.39353 5.66536 4.95833C5.66536 6.52314 6.93389 7.79167 8.4987 7.79167Z"*/}
      {/*    stroke="#7E7D7A"*/}
      {/*    strokeLinecap="round"*/}
      {/*    strokeLinejoin="round"*/}
      {/*  />*/}
      {/*</Svg>*/}
      <Text style={styles.iconText}>{views}</Text>
      <View style={{ width: 10 }}></View>
      {/*<Svg width="17" height="17" viewBox="0 0 17 17" fill="none">*/}
      {/*  <Path*/}
      {/*    d="M10.9792 8.14583H10.9863M8.14583 8.14583H8.15292M5.3125 8.14583H5.31958M10.8375 13.5292L14.875 14.875L13.5292 10.8375C13.5292 10.8375 14.1667 9.91667 14.1667 8.14583C14.1667 4.82062 11.471 2.125 8.14583 2.125C4.82062 2.125 2.125 4.82062 2.125 8.14583C2.125 11.471 4.82062 14.1667 8.14583 14.1667C9.97666 14.1667 10.8375 13.5292 10.8375 13.5292Z"*/}
      {/*    stroke="#7E7D7A"*/}
      {/*    strokeLinecap="round"*/}
      {/*    strokeLinejoin="round"*/}
      {/*  />*/}
      {/*</Svg>*/}
      <Text style={styles.iconText}>{posts}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    marginTop: 14,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    marginLeft: 6,
    fontStyle: 'normal',
    fontSize: 14,
    color: theme.color.gray2,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.5,
  },
});

export default FakeIssueIcon;
