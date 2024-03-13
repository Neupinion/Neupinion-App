import React from 'react';
import { Platform, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../shared/styles/theme';

const AppLinkTestPage = () => {
  const appLink =
    Platform.OS === 'ios'
      ? 'https://apps.apple.com/us/app/kakaotalk/id362057947'
      : 'https://play.google.com/store/search?q=%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1%ED%86%A1&c=apps&hl=ko';

  const appLinkShare = () => async () => {
    try {
      const result = await Share.share({
        message: appLink,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('activityType!');
        } else {
          console.log('Share!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log('An unknown error occurred');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ width: 220, height: 110, backgroundColor: 'white' }}
        onPress={appLinkShare}
      >
        <Text style={{ backgroundColor: 'black' }}>공유하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppLinkTestPage;
