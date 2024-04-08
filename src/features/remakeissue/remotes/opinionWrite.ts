import { client } from '../../../shared/remotes/axios';
import { OpinionWrite } from '../../../shared/types/news';

export const getMyOpinionWrite = async (issueId: number) => {
  const { data } = await client.get<OpinionWrite[]>(`/reprocessed-issue/${issueId}/me`);
  return data;
};
