import { atom } from 'recoil';

export const issueNumberState = atom<number>({
  key: 'issueNumberState',
  default: 0,
});
