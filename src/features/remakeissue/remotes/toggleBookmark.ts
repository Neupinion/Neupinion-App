import { client } from '../../../shared/remotes/axios';

const toggleBookmark = async (
  id: number,
  bookMarkClicked: boolean,
  setBookMarkClicked: (newValue: boolean) => void,
) => {
  try {
    const payload = { isBookmarked: !bookMarkClicked };
    await client.put(`/reprocessed-issue/${id}/bookmark`, payload);
    setBookMarkClicked(!bookMarkClicked);
    console.log('북마크 put: 성공');
  } catch (error) {
    console.error('북마크 put: 실패', error);
  }
};

export default toggleBookmark;
