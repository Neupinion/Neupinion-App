import { ParagraphWithOpinions, OpinionWrite } from './shared/types/news';

export type RootStackParamList = {
  OpinionPost: { opinionWrite?: OpinionWrite; sentenceNumber?: number; issueId: number };
  OpinionPin: undefined;
  Main: undefined;
  ReprocessedIssueDetailPage: { id: number };
  VoteResultPage: { id: number };
  TotalVoteResultPage: { id: number };
  OpinionParagraphPage: { item: ParagraphWithOpinions; issueId: number };
  OpinionMainPage: { id: number };
};
