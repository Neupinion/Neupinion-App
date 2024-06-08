import { VoteData } from '../../vote/types/bubbleChartData';

export interface IntegratedResult {
  mostVotedStand: string;
  mostVotedCount: number;
  totalVoteCount: number;
  voteResults: IntegratedVoteResult[];
  voteRankings: VoteData[];
}

export interface IntegratedVoteResult {
  firstStandRelatablePercentage: number;
  secondStandRelatablePercentage: number;
}
