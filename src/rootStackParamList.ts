import { OpinionWrite } from './shared/types/news';

export type RootStackParamList = {
  OpinionPost: { opinionWrite?: OpinionWrite; sentenceNumber?: number; issueId: number };
  OpinionPin: undefined;
  Main: undefined;
  Detail: undefined;
};
