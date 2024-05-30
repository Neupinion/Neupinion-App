import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { WithLocalSvg } from 'react-native-svg/css';
import { useRecoilState } from 'recoil';
import { ImageSourcePropType } from 'react-native';
import { bookMarkState } from '../../../recoil/bookMarkState';
import BookMarkSvg from '../../../assets/icon/bookmark.svg';
import AnotherBookMarkSvg from '../../../assets/icon/anotherBookmark.svg';
import toggleBookmark from '../remotes/toggleBookmark';

const BookMarkButton: React.FC = () => {
  const [issueBookMarkState, setIssueBookMarkState] = useRecoilState(bookMarkState);

  const onClickBookMark = async () => {
    await toggleBookmark();
    setIssueBookMarkState((prevState) => ({
      ...prevState,
      isBookMarkClicked: !prevState.isBookMarkClicked,
    }));
  };

  return (
    <TouchableOpacity style={styles.headerSvg} onPress={onClickBookMark}>
      {issueBookMarkState.isBookMarkClicked ? (
        <WithLocalSvg width={23} height={23} asset={AnotherBookMarkSvg as ImageSourcePropType} />
      ) : (
        <WithLocalSvg width={23} height={23} asset={BookMarkSvg as ImageSourcePropType} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerSvg: {
    marginLeft: 14,
  },
});

export default BookMarkButton;
