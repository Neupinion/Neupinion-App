import { client } from '../../../shared/remotes/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const reissueAccessToken = async () => {
  const storedRefreshToken = await AsyncStorage.getItem('refreshToken');

  const { data } = await client.get<string>('/reissue', {
    params: { refreshToken: storedRefreshToken },
  });

  return data;
};
