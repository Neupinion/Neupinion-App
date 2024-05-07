import { client } from '../../../shared/remotes/axios';
import { RelatedIssue } from '../types/relatedIssue';

export const getRelatedIssuesById = async (issueId: number) => {
  const { data } = await client.get<RelatedIssue[]>(`/reprocessed-issue/${issueId}/related-issue`);

  return data;
};
