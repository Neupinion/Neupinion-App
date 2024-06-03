import {Keyword, KeywordNode} from "../type/keyword";

export const processApiResponse = (data: any): { firstStandKeywords: KeywordNode[], secondStandKeywords: KeywordNode[] } => {
    const { firstStand, firstKeywords, secondStand, secondKeywords } = data;

    const limitedFirstKeywords = firstKeywords.slice(0, 4);
    const limitedSecondKeywords = secondKeywords.slice(0, 4);

    const firstStandKeywords = limitedFirstKeywords.map((keyword: string, index: number) => ({
        keyword,
        value: Math.floor(Math.random() * 100) + 1,
    }));

    const secondStandKeywords = limitedSecondKeywords.map((keyword: string, index: number) => ({
        keyword,
        value: Math.floor(Math.random() * 100) + 1,
    }));

    return {
        firstStandKeywords,
        secondStandKeywords,
    };
};
