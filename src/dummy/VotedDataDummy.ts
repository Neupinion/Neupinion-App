import { TrustVoteData } from '../features/vote/types/bubbleChartData';

export const VotedDataDummy: TrustVoteData = {
  totalVoteCount: 100,
  mostVotedStatus: '매우 의심',
  mostVotedCount: 50,
  voteRankings: [
    {
      status: '매우 의심',
      votePercentage: 50,
    },
    {
      status: '약간 의심',
      votePercentage: 20,
    },
    {
      status: '약간 신뢰',
      votePercentage: 10,
    },
    {
      status: '매우 신뢰',
      votePercentage: 10,
    },
  ],
};
