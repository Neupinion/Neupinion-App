import { client } from '../../../shared/remotes/axios';
import { FollowUpIssueVotePage } from '../types/followUpIssueVotePage';

export const getFollowUpIssueByIdVotePage = async (issueId: number) => {
  const { data } = await client.get<FollowUpIssueVotePage>(
    `reprocessed-issue/${issueId}/follow-up-issue`,
  );
  return data;
};
