import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../rootStackParamList';

export const extractOpinionId = (route: RouteProp<RootStackParamList, 'OpinionPost'>) => {
  return route.params?.opinionWrite?.id || 0;
};

export const extractText = (route: RouteProp<RootStackParamList, 'OpinionPost'>) => {
  return route.params?.opinionWrite?.content || '';
};

export const extractSentenceIndex = (route: RouteProp<RootStackParamList, 'OpinionPost'>) => {
  if (route.params?.opinionWrite?.paragraphId !== undefined) {
    return route.params.opinionWrite.paragraphId;
  }
  return route.params.sentenceNumber !== undefined ? route.params.sentenceNumber : 0;
};

export const extractIsReliable = (route: RouteProp<RootStackParamList, 'OpinionPost'>) => {
  return route.params?.opinionWrite?.isReliable || true;
};
