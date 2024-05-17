import { IntegratedResult } from '../features/totalvote/types/integratedResult';

export const TotalVotedDataDummy: IntegratedResult = {
  mostVoted: '완전 신뢰',
  totalVoteCount: 7000,
  mostVotedCount: 5342,
  voteResults: [
    {
      trustRate: 0,
      doubtRate: 100,
    },
  ],
  voteRankings: [
    {
      status: '매우 의심',
      votePercentage: 100,
    },
    {
      status: '매우 신뢰',
      votePercentage: 0,
    },
    {
      status: '약간 신뢰',
      votePercentage: 0,
    },
    {
      status: '약간 의심',
      votePercentage: 0,
    },
  ],
};
