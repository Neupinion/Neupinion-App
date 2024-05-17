import { client } from '../../../shared/remotes/axios';
import { TimeLineInfo } from '../types/timeLine';

export const getTimeLineIssues = async (id: number) => {
  const { data } = await client.get<TimeLineInfo[]>(`/issue/${id}/time-line`);
  return data;
};
