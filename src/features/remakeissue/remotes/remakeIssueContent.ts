import { client } from '../../../shared/remotes/axios';
import { RemakeIssueContent } from '../../../shared/types/news';

export const getRemakeIssueContent = async (id: number) => {
  const { data } = await client.get<RemakeIssueContent>(`/reprocessed-issue/${id}`);
  return data;
};
