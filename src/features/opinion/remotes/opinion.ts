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

export const deleteReprocessedIssueOpinion = async (opinionId: number) => {
  return await client.delete(`reprocessed-issue/opinion/${opinionId}`);
};
