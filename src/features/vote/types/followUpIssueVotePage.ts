export interface FollowUpIssueVotePage {
  title: string;
  followUpIssues: FollowUpIssueVotePageItem[];
  isIntegratedVotePossible: boolean;
}

export interface FollowUpIssueVotePageItem {
  id: number;
  title: string;
  category: string;
  createdAt: string;
}
