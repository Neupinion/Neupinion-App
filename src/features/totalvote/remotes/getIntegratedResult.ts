import { client } from '../../../shared/remotes/axios';
import { IntegratedResult } from "../types/integratedResult";

export const getIntegratedResult = async (id: number) => {
  const { data } = await client.get<IntegratedResult>(`/reprocessed-issue/${id}/integrated-result`);
  return data;
};
