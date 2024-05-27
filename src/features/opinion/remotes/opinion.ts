import { client } from '../../../shared/remotes/axios';

export const postReprocessedIssueOpinion = async (
  paragraphId: number,
  reprocessedIssueId: number,
  content: string,
  isReliable: boolean,
) => {
  return await client.post('/reprocessed-issue/opinion', {
    paragraphId: paragraphId,
    reprocessedIssueId: reprocessedIssueId,
    content: content,
    isReliable: isReliable,
  });
};

export const patchReprocessedIssueOpinion = async (
  opinionId: number,
  paragraphId: number,
  content: string,
  isReliable: boolean,
) => {
  return await client.patch(`reprocessed-issue/opinion/${opinionId}`, {
    paragraphId: paragraphId,
    content: content,
    isReliable: isReliable,
  });
};

export const deleteReprocessedIssueOpinion = async (opinionId: number) => {
  return await client.delete(`reprocessed-issue/opinion/${opinionId}`);
};

const updateFavorite = async (
  reprocessedIssueId: number,
  opinionId: number,
  newLikeClicked: boolean,
) => {
  try {
    const payload = { isLiked: newLikeClicked };
    await client.put(`/reprocessed-issue/${reprocessedIssueId}/opinion/${opinionId}/like`, payload);
  } catch (error) {
    console.error('좋아요 put: 실패', error);
  }
};
export default updateFavorite;
