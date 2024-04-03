import { client } from '../../../shared/remotes/axios';
interface ReliabilityItem {
  id: number;
  text: string;
  value: string;
}
const submitVoteResult = async (
  issueId: number,
  selectedButton: number,
  reliabilityText: ReliabilityItem[],
) => {
  try {
    const selectedText = reliabilityText.find((item) => item.id === selectedButton)?.value;
    const data = {
      status: selectedText,
    };
    await client.put(`/reprocessed-issue/${issueId}/trust-vote`, data, {
      params: {
        issueId: issueId,
      },
    });
    console.log('투표 결과 제출: 성공');
  } catch (error) {
    console.error('투표 결과 제출: 실패', error);
  }
};

export default submitVoteResult;
