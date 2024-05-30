import React from 'react';
import { ImageSourcePropType, Share, TouchableOpacity } from 'react-native';
import ShareSvg from '../../../assets/icon/share.svg';
import { WithLocalSvg } from 'react-native-svg/css';
import { appLink } from '../../constants/appLink';

const AppShareButton: React.FC = () => {
  const appLinkShare = async () => {
    try {
      await Share.share({
        message: appLink,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableOpacity onPress={appLinkShare} key="share">
      <WithLocalSvg width={24} height={23} asset={ShareSvg as ImageSourcePropType} />
    </TouchableOpacity>
  );
};

export default AppShareButton;
