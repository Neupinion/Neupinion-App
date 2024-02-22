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

    fetchData()
      .then(() => {
        // 데이터를 성공적으로 가져온 후 실행할 추가 로직
        console.log('데이터를 성공적으로 가져왔습니다.');
      })
      .catch((error) => {
        // 에러 처리 로직
        console.error('데이터 가져오기 실패:', error);
      });
  }, [defaultFetch]);

  return { data, isLoading, error, fetchData };
};

export default useFetch;
