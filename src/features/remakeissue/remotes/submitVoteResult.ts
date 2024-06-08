import { client } from '../../../shared/remotes/axios';

const submitVoteResult = async (
  issueId: number,
  firstStandId: number,
  firstRelatable: boolean,
  secondStandId: number,
  secondRelatable: boolean,
) => {
  try {
    return await client.put(`/reprocessed-issue/${issueId}/trust-vote`, {
      firstStandId: firstStandId,
      firstRelatable: firstRelatable,
      secondStandId: secondStandId,
      secondRelatable: secondRelatable,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default submitVoteResult;
