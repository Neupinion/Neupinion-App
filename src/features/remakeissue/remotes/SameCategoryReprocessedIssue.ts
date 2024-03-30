import { client } from '../../../shared/remotes/axios';
import { SameCategoryReProcessedIssue } from '../../../shared/types/news';

export const getSameCategoryReprocessedIssues = async (current: number, category: string) => {
  const { data } = await client.get<SameCategoryReProcessedIssue[]>(
    '/reprocessed-issue/by-category',
    {
      params: { current: current, category: category },
    },
  );

  return data;
};
