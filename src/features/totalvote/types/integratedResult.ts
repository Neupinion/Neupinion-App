import { VoteData } from "../../vote/types/bubbleChartData";

export interface IntegratedResult {
  mostVoted: string;
  mostVotedCount: number;
  totalVoteCount: number;
  voteResults: IntegratedVoteResult[];
  voteRankings: VoteData[];
}

export interface IntegratedVoteResult {
  trustRate: number;
  doubtRate: number;
}
