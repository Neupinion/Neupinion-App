import { ParagraphWithOpinions } from './shared/types/news';

export type RootStackParamList = {
  OpinionPost: undefined;
  OpinionPin: undefined;
  MainPage: undefined;
  ReprocessedIssueDetailPage: { id: number };
  VoteResultPage: { id: number };
  TotalVoteResultPage: { id: number };
  OpinionParagraphPage: { item: ParagraphWithOpinions; issueId: number };
  OpinionMainPage: { id: number };
  LoginPage: undefined;
  SplashPage: undefined;
};
