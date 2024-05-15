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
  id: number;
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

export interface SameCategoryReprocessedIssue {
  id: number;
  title: string;
  imageUrl: string;
  createdAt: string;
}

export interface FollowUpIssue {
  id: string | number;
  title: string;
  voted: boolean;
  reprocessedIssueTitle: string;
  createdAt: string;
}

export interface OpinionWrite {
  id: number;
  paragraphId: number;
  paragraphContent: string;
  content: string;
  isReliable: boolean;
}

export interface OpinionParagraphId {
  id: number;
  content: string;
  opinions: Opinions[];
}

export interface Opinions {
  id: number;
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  isReliable: boolean;
  paragraphId: number;
  paragraphContent: string;
  content: string;
  likeCount: number;
  isLiked: boolean;
}

export interface OneOpinionParagraphId{

}