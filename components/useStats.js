import { useState, useEffect } from 'react';

export default function useStats(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState();

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
