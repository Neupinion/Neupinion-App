export interface Keyword {
  firstStand: string;
  firstKeywords: string[];
  secondStand: string;
  secondKeywords: string[];
}

export interface KeywordNode {
  keyword: string;
  value: number;
  children?: KeywordNode[];
}
