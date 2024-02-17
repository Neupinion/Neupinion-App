export interface ReWriteNews {
  id: string | number;
  title: string;
  imageUrl: string;
  category: string;
  views: number;
  opinionCount: number;
  issueId: number;
  createdAt: string;
}

export interface FollowUpIssue {
  id: string | number;
  title: string;
  voted: boolean;
  reprocessedIssueTitle: string;
  createdAt: string;
}
