export interface TrustVoteData {
  totalVoteCount: number;
  mostVotedCount: number;
  mostVotedStatus: string;
  voteRankings: VoteData[];
}

export interface VoteData {
  status: string;
  votePercentage: number;
  children?: VoteData[];
}
