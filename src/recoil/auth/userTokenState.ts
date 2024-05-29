import { atom } from 'recoil';
import { UserToken } from '../../shared/types/userToken';

export const userTokenState = atom<UserToken>({
  key: 'userToken',
  default: {
    accessToken: '',
  },
});
