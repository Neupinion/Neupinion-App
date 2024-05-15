import { client } from '../../../shared/remotes/axios';
import { OpinionParagraphId } from '../../../shared/types/news';

export const getOpinionParagraph = async (issueId: number, viewMode: string) => {
  return await client.get<OpinionParagraphId[]>(`/reprocessed-issue/${issueId}/opinion/paragraph`, {
    params: { viewMode: viewMode },
  });
};
