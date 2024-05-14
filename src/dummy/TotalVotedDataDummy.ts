export interface TotalTrustVoteData {
  totalVoteCount: number;
  mostVotedCount: number;
  mostVotedStatus: string;
  voteRankings: TotalVoteData[];
}

export interface TotalVoteData {
  issueId: number;
  issueOrder: string;
  trust: number;
  doubt: number;
}

export const TotalVotedDataDummy: TotalTrustVoteData = {
  totalVoteCount: 7000,
  mostVotedStatus: '완전 신뢰',
  mostVotedCount: 5342,
  voteRankings: [
    {
      issueId: 1,
      issueOrder: '최초 보도',
      trust: 30,
      doubt: 70,
    },
    {
      issueId: 2,
      issueOrder: '두 번째 보도',
      trust: 40,
      doubt: 60,
    },
    {
      issueId: 3,
      issueOrder: '세 번째 보도',
      trust: 50,
      doubt: 50,
    },
    {
      issueId: 4,
      issueOrder: '네 번째 보도',
      trust: 10,
      doubt: 90,
    },
  ],
};
