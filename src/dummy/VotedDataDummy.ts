import { BubbleChartData, BubbleChartDataSet } from "../features/vote/types/bubbleChartData";

export const VotedDataDummy: BubbleChartDataSet = {
  id: 1,
  mostVoted: '완전 의심',
  totalVoted: 7000,
  mostVotedNumber: 5342,
  secondVote: '조금 신뢰',
  data: [
    {
      id: '완전 의심',
      percent: 56,
    },
    {
      id: '조금 신뢰',
      percent: 26,
    },
    {
      id: '조금 의심',
      percent: 10,
    },
    {
      id: '완전 신뢰',
      percent: 9,
    },
  ],
};
