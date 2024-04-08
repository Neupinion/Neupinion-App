import { useCallback, useEffect, useState } from 'react';
import { ErrorResponse } from '../types/errorResponse';

const useFetch = <T>(fetcher: () => Promise<T>, defaultFetch: boolean = true) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorResponse | null>(null);

  const fetchData = useCallback(async () => {
    //에러메시지, 로딩상태 초기화
    setError(null);
    setIsLoading(true);

    try {
      const data = await fetcher();
      setData(data);
    } catch (error) {
      setError(error as ErrorResponse);
    } finally {
      setIsLoading(false);
    }
  }, [fetcher]);

  useEffect(() => {
    if (!defaultFetch) return;

    void fetchData();
  }, [defaultFetch]);

  return { data, isLoading, error, fetchData };
};

export default useFetch;
