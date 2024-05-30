import React from 'react';
import { ImageSourcePropType, Platform, Share, TouchableOpacity } from 'react-native';
import { WithLocalSvg } from 'react-native-svg/css';
import ShareSvg from '../../../assets/icon/share.svg';

const AppShareButton: React.FC = () => {
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
    <TouchableOpacity onPress={appLinkShare} key="share">
      <WithLocalSvg width={24} height={23} asset={ShareSvg as ImageSourcePropType} />
    </TouchableOpacity>
  );
};

export default AppShareButton;
