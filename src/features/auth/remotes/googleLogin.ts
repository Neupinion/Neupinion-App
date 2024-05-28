import { GOOGLE_CLIENT_ID } from '@env';

export const clientId = GOOGLE_CLIENT_ID;
export const redirectUri = 'https://dev.neupinion.com/google/redirect';
export const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=email&response_type=code&redirect_uri=${redirectUri}&client_id=${clientId}`;

export interface UserInfo {
  id: string;
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}
