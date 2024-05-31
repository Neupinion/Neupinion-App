import { client } from '../../../shared/remotes/axios';

const toggleBookmark = async (id: number, isBookmarkClicked: boolean) => {
  try {
    const payload = { isBookmarked: !isBookmarkClicked };
    await client.put(`/reprocessed-issue/${id}/bookmark`, payload);
  } catch (error) {
    console.error(error);
  }
};

export default toggleBookmark;
