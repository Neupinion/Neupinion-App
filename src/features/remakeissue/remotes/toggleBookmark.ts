import { client } from '../../../shared/remotes/axios';

const toggleBookmark = async (id: number, isBookMarkClicked: boolean) => {
  try {
    const payload = { isBookmarked: !isBookMarkClicked };
    await client.put(`/reprocessed-issue/${id}/bookmark`, payload);
  } catch (error) {
    console.error(error);
  }
};

export default toggleBookmark;
