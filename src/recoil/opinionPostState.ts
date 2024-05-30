import { atom } from 'recoil';
import { OpinionPost, OpinionPostActivity } from "../features/opinion/types/opinionPost";

export const opinionPostState = atom<OpinionPost>({
  key: 'opinionPostState',
  default: {
    issueId: 0,
    opinionId: 0,
    sentenceIndex: 0,
    text: '',
    isReliable: false,
    editMode: false,
  },
});

export const opinionPostActivityState = atom<OpinionPostActivity>({
  key: 'opinionPostState',
  default: {
    sentenceDefined: false,
    reliableDefined: false,
  },
});
