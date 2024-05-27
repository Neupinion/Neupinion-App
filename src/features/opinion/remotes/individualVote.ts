import { client } from '../../../shared/remotes/axios';
import { ParagraphWithOpinions, integratedOpinion } from '../../../shared/types/news';

export const getOpinionParagraph = async (
  issueId: number,
  viewMode: string,
  orderMode: string,
  pageNumber: number,
) => {
  const { data } = await client.get<ParagraphWithOpinions[]>(
    `/reprocessed-issue/${issueId}/opinion/paragraph`,
    {
      params: { viewMode: viewMode, orderMode: orderMode, pageNumber: pageNumber },
    },
  );
  return data;
};

export const getOpinionTotal = async (
  issueId: number,
  viewMode: string,
  orderMode: string,
  page: number,
) => {
  const { data } = await client.get<integratedOpinion[]>(`/issue/${issueId}/opinion`, {
    params: { viewMode: viewMode, orderMode: orderMode, page: page },
  });
  return data;
};
