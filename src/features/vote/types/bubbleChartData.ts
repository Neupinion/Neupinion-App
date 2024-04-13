export interface BubbleChartDataSet {
  id: number;
  mostVoted: string;
  mostVotedNumber: number;
  totalVoted: number;
  secondVote: string;
  data: BubbleChartData[];
}

export interface BubbleChartData {
  id: string;
  percent: number;
}
