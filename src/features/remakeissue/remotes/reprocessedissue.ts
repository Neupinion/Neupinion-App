import { client } from '../../../shared/remotes/axios';
import { ReProcessedIssue } from '../../../shared/types/news';

export const getReprocessedIssues = async (date: string) => {
  const { data } = await client.get<ReProcessedIssue[]>('/reprocessed-issue', {
    params: { date: date },
  });

  return data;
};
