import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from '@env';

export const googleOAuthUri = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile&response_type=code&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}`;
