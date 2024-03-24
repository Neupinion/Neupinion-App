import { client } from '../../../shared/remotes/axios';
import { ReProcessedIssue } from '../../../shared/types/news';

export const getsameCategoryReprocessedIssues = async (current: string, category: string) => {
  const { data } = await client.get<ReProcessedIssue[]>('/reprocessed-issue/by-category', {
    params: { current: current, category: category },
  });

  return data;
};
