import { followUpUrl } from './baseUrl';
import { useEffect, useState } from 'react';
import { FollowUpIssue } from '../../../shared/types/news';

const useFetchData = (endpoint: string) => {
  const [data, setData] = useState<FollowUpIssue | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await followUpUrl.get<FollowUpIssue>(endpoint);
        setData(response.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchData;
