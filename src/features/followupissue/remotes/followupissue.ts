import { client } from '../../../shared/remotes/axios';
import { FollowUpIssue } from '../../../shared/types/news';

export const getFollowUpIssues = async (category: string, date: string, viewMode = 'ALL') => {
  const { data } = await client.get<FollowUpIssue[]>('/follow-up-issue', {
    params: { category: category, date: date, viewMode: viewMode },
  });

  return data;
};

export const getFollowUpIssuesId = async (id: number, memberId: number) => {
  const { data } = await client.get<FollowUpIssue[]>('/follow-up-issue/', {
    params: { id: id, memberId: memberId },
  });

  return data;
};

export const getFollowUpIssuesUnviewd = async (memberId: number) => {
  const { data } = await client.get<FollowUpIssue[]>('/follow-up-issue/unviewed', {
    params: { memberId: memberId },
  });

  return data;
};
