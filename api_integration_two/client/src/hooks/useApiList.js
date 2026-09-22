/**
 * Optional pattern for learners:
 * keep fetch/loading/error logic reusable instead of repeating in every page.
 */
import { useCallback, useEffect, useState } from 'react';

export function useApiList(fetcher) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const reload = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetcher();
      setData(response.data);
    } catch (err) {
      setError(err.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  }, [fetcher]);

  useEffect(() => {
    reload();
  }, [reload]);

  return { data, loading, error, reload, setError };
}
