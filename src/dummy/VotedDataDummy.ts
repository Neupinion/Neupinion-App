import { TrustVoteData } from '../features/vote/types/bubbleChartData';

export const VotedDataDummy: TrustVoteData = {
  totalVoteCount: 100,
  mostVotedStatus: '매우 의심',
  mostVotedCount: 30,
  voteRankings: [
    {
      status: '매우 의심',
      votePercentage: 30,
    },
    {
      status: '약간 의심',
      votePercentage: 25,
    },
    {
      status: '약간 신뢰',
      votePercentage: 25,
    },
    {
      status: '매우 신뢰',
      votePercentage: 20,
    },
  ],
};
