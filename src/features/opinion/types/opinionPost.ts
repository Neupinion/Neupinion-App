export interface OpinionPost {
  issueId: number;
  opinionId: number;
  sentenceIndex: number;
  text: string;
  isReliable: boolean;
  editMode: boolean;
}
