export interface BubbleChartDataSet {
  totalVoteCount: number;
  mostVotedCount: number;
  mostVotedStatus: string;
  secondVote: string;
  voteRankings: VoteData[];
}

export interface VoteData {
  status: string;
  votePercentage: number;
}
