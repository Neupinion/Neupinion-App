import { client } from '../../../shared/remotes/axios';
import { Keyword } from '../type/keyword';

export const getIssueKeyword = async (issueId: number) => {
  const { data } = await client.get<Keyword>(`/issue/${issueId}/keyword`);

  return data;
};
