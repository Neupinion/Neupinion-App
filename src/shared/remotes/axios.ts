import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';
import { navigateToLogin } from '../utils/navigate/navigationService';

const defaultConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

const client = axios.create(defaultConfig);

client.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// client.interceptors.response.use(
//   (response) => response,
//   async (error: AxiosError) => {
//     const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
//
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//
//       const storedRefreshToken = await AsyncStorage.getItem('refreshToken');
//       const newAccessToken = await client.get<string>('/reissue', {
//         params: { refreshToken: storedRefreshToken },
//       });
//
//       if (newAccessToken) {
//         originalRequest.headers = originalRequest.headers || {};
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken.data}`;
//         return client(originalRequest);
//       } else {
//         navigateToLogin();
//       }
//     }
//     return Promise.reject(error);
//   },
// );

export { client };
