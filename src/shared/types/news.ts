export interface ReProcessedIssue {
  id: string | number;
  title: string;
  imageUrl: string;
  category: string;
  views: number;
  opinionCount: number;
  issueId: number;
  createdAt: string;
}

export interface ReprocessedIssueContent {
  id: string | number;
  paragraph: string;
  selected: boolean;
}
export interface ReprocessedIssueId {
  id: number;
  title: string;
  imageUrl: string;
  caption: string;
  category: string;
  isBookmarked: boolean;
  trustVote: string;
  createdAt: string;
  originUrl: string;
  content: ReprocessedIssueContent[];
  tags: string[];
}

export interface FollowUpIssue {
  id: string | number;
  title: string;
  voted: boolean;
  reprocessedIssueTitle: string;
  createdAt: string;
}
