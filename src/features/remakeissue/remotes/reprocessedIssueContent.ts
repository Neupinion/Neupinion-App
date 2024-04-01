import { client } from '../../../shared/remotes/axios';
import { ReprocessedIssueContent } from '../../../shared/types/news';

export const getReprocessedIssueContent = async (id: number) => {
  const { data } = await client.get<ReprocessedIssueContent>(`/reprocessed-issue/${id}`);
  return data;
};
