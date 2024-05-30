import { atom } from 'recoil';
import { OpinionPost } from '../features/opinion/types/opinionPost';

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
