import { client } from '../../../shared/remotes/axios';
import { ReProcessedIssue, ReprocessedIssueId } from "../../../shared/types/news";

export const getReprocessedIssues = async (date: string) => {
  const { data } = await client.get<ReProcessedIssue[]>('/reprocessed-issue', {
    params: { date: date },
  });

  return data;
};

export const getReprocessedIssueById = async (id: number) => {
  const { data } = await client.get<ReprocessedIssueId>(`/reprocessed-issue/${id}`);
  return data;
};
