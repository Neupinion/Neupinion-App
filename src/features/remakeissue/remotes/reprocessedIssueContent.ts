import { client } from '../../../shared/remotes/axios';
import { ReprocessedIssueId } from '../../../shared/types/news';

export const getReprocessedIssueContent = async (id: number) => {
  const { data } = await client.get<ReprocessedIssueId>(`/reprocessed-issue/${id}`);
  return data;
};
