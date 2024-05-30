import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { WithLocalSvg } from 'react-native-svg/css';
import { useRecoilState, useRecoilValue } from "recoil";
import { ImageSourcePropType } from 'react-native';
import { bookMarkState } from '../../../recoil/bookMarkState';
import BookMarkSvg from '../../../assets/icon/bookmark.svg';
import AnotherBookMarkSvg from '../../../assets/icon/anotherbookmark.svg';
import toggleBookmark from '../remotes/toggleBookmark';
import { issueNumberState } from "../../../recoil/issueNumberState";

const BookMarkButton: React.FC = () => {
  const [issueBookMarkState, setIssueBookMarkState] = useRecoilState(bookMarkState);

  const onClickBookMark = async () => {
    await toggleBookmark(issueBookMarkState.id, issueBookMarkState.isBookMarkClicked);
    setIssueBookMarkState((prevState) => ({
      ...prevState,
      isBookMarkClicked: !prevState.isBookMarkClicked,
    }));
  };

  return (
    <TouchableOpacity onPress={onClickBookMark}>
      {issueBookMarkState.isBookMarkClicked ? (
        <WithLocalSvg width={23} height={23} asset={AnotherBookMarkSvg as ImageSourcePropType} />
      ) : (
        <WithLocalSvg width={23} height={23} asset={BookMarkSvg as ImageSourcePropType} />
      )}
    </TouchableOpacity>
  );
};

export default BookMarkButton;
