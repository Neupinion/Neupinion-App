import { client } from '../../../shared/remotes/axios';
import { SameCategoryReprocessedIssue } from '../../../shared/types/news';

export const getSameCategoryReprocessedIssues = async (current: number, category: string) => {
  const { data } = await client.get<SameCategoryReprocessedIssue[]>(
    '/reprocessed-issue/by-category',
    {
      params: { current: current, category: category },
    },
  );

  return data;
};
