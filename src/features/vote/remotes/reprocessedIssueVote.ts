import { client } from '../../../shared/remotes/axios';
import { TrustVoteData } from '../types/bubbleChartData';

export const getReprocessedIssueVote = async (id: number) => {
  const { data } = await client.get<TrustVoteData>(`/reprocessed-issue/${id}/trust-vote`);
  return data;
};
