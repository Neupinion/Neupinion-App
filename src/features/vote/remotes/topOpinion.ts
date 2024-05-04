import { client } from '../../../shared/remotes/axios';
import { Opinion } from '../types/opinion';

export const getReprocessedIssueTopOpinion = async (id: number) => {
  const { data } = await client.get<Opinion[]>(`/reprocessed-issue/${id}/opinion/top`);
  return data;
};
