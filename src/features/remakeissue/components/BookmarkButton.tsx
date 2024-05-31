import React from 'react';
import { TouchableOpacity } from 'react-native';
import { WithLocalSvg } from 'react-native-svg/css';
import { useRecoilState } from 'recoil';
import { ImageSourcePropType } from 'react-native';
import { bookmarkState } from '../../../recoil/bookmarkState';
import BookmarkSvg from '../../../assets/icon/bookmark.svg';
import AnotherBookmarkSvg from '../../../assets/icon/anotherbookmark.svg';
import toggleBookmark from '../remotes/toggleBookmark';

const BookmarkButton: React.FC = () => {
  const [issueBookmarkState, setIssueBookmarkState] = useRecoilState(bookmarkState);

  const onClickBookmark = async () => {
    await toggleBookmark(issueBookmarkState.id, issueBookmarkState.isBookmarkClicked);
    setIssueBookmarkState((prevState) => ({
      ...prevState,
      isBookmarkClicked: !prevState.isBookmarkClicked,
    }));
  };

  return (
    <TouchableOpacity onPress={onClickBookmark}>
      {issueBookmarkState.isBookmarkClicked ? (
        <WithLocalSvg width={23} height={23} asset={AnotherBookmarkSvg as ImageSourcePropType} />
      ) : (
        <WithLocalSvg width={23} height={23} asset={BookmarkSvg as ImageSourcePropType} />
      )}
    </TouchableOpacity>
  );
};

export default BookmarkButton;
