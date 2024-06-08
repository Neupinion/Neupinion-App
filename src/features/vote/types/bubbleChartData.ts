export interface TrustVoteData {
  totalVoteCount: number;
  mostVotedStand: string;
  mostVotedCount: number;
  voteRankings: VoteData[];
}

export interface VoteData {
  stand: string;
  relatedPercentage: number;
  children?: VoteData[];
}
