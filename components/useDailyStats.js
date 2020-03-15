import { useState, useEffect } from 'react';

export default function useDailyStats(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    confirmed: { value: 22 },
    recovered: { value: 22 },
    deaths: { value: 22 },
  });

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => setError(err));
      setStats(data);
      setLoading(false);
    }

    fetchData();
    return () => {};
  }, [url]);

  return { loading, error, stats };
}
