import { client } from '../../../shared/remotes/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const reissueAccessToken = async (): Promise<string | null> => {
  try {
    const storedRefreshToken = await AsyncStorage.getItem('refreshToken');
    const { data } = await client.get<string>('/reissue', {
      params: { refreshToken: storedRefreshToken },
    });

    if (data) {
      await AsyncStorage.setItem('accessToken', data);
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
