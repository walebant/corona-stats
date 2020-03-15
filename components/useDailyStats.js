import { useState, useEffect } from 'react';

export default function useDailyStats(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState();

  const dayNow = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const dateNow = `2020/0${month}/${dayNow}`;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => setError(err));

      data.map(day => {
        if (day.reportDateString === dateNow) {
          setStats(day);
        }
      });
      setLoading(false);
    }

    fetchData();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error, stats };
}
