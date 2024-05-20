import { client } from '../../../shared/remotes/axios';
import { OpinionParagraphId, OpinionTotalId } from '../../../shared/types/news';

export const getOpinionParagraph = async (
  issueId: number,
  viewMode: string,
  orderMode: string,
  pageNumber: number,
) => {
  const { data } = await client.get<OpinionParagraphId[]>(
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
  const { data } = await client.get<OpinionTotalId[]>(`/reprocessed-issue/${issueId}/opinion`, {
    params: { viewMode: viewMode, orderMode: orderMode, page: page },
  });
  return data;
};
