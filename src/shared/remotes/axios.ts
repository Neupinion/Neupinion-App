import axios, { CreateAxiosDefaults } from 'axios';
import { API_URL } from '@env';

const defaultConfig: CreateAxiosDefaults = {
  baseURL: API_URL,
};

const client = axios.create(defaultConfig);

export { client };
