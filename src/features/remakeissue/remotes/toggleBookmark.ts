import { client } from '../../../shared/remotes/axios';
import { useRecoilValue } from 'recoil';
import { bookMarkState } from '../../../recoil/bookMarkState';

const toggleBookmark = async () => {
  const issueBookMarkState = useRecoilValue(bookMarkState);
  try {
    const payload = { isBookmarked: !issueBookMarkState.isBookMarkClicked };
    await client.put(`/reprocessed-issue/${issueBookMarkState.id}/bookmark`, payload);
  } catch (error) {
    console.error(error);
  }
};

export default toggleBookmark;
