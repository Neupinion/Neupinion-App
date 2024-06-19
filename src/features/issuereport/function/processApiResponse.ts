import { Keyword, KeywordNode } from '../type/keyword';

export const processApiResponse = (
  data: Keyword,
): { firstStandKeywords: KeywordNode[]; secondStandKeywords: KeywordNode[] } => {
  const { firstKeywords, secondKeywords } = data;

  const limitedFirstKeywords = firstKeywords.slice(0, 4);
  const limitedSecondKeywords = secondKeywords.slice(0, 4);

  const firstStandKeywords = limitedFirstKeywords.map((keyword: string) => ({
    keyword,
    value: Math.floor(Math.random() * 11) + 25,
  }));

  const secondStandKeywords = limitedSecondKeywords.map((keyword: string) => ({
    keyword,
    value: Math.floor(Math.random() * 11) + 25,
  }));

  return {
    firstStandKeywords,
    secondStandKeywords,
  };
};
