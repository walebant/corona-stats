import { useState, useEffect } from 'react';

export default function useStats(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetch(url);
        const response = await data.json();
        setStats(response);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }

    fetchData();
    return () => {};
  }, [url]);

  return { loading, error, stats };
}
