import { ParagraphWithOpinions } from './shared/types/news';

export type RootStackParamList = {
  OpinionPost: undefined;
  OpinionPin: undefined;
  Main: undefined;
  ReprocessedIssueDetailPage: { id: number };
  VoteResultPage: { id: number };
  TotalVoteResultPage: { id: number };
  OpinionParagraphPage: { item: ParagraphWithOpinions };
  OpinionMainPage: { id: number };
};
