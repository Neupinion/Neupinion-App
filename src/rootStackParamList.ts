import { OpinionWrite } from './shared/types/news';

export type RootStackParamList = {
  OpinionPost:
    | { opinionWrite?: OpinionWrite; opinionId?: number }
    | { sentenceNumber?: number }
    | undefined;
  OpinionPin: undefined;
  Main: undefined;
  Detail: undefined;
};
