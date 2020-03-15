import { useState, useEffect } from 'react';

export default function useCountryStats(selected) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countryStats, setCountryStats] = useState();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      const data = await fetch(
        `https://covid19.mathdro.id/api/countries/${selected}`
      )
        .then(res => res.json())
        .catch(err => setError(err));
      setCountryStats(data);
      setLoading(false);
    }

    fetchData();
    return () => {};
  }, [selected]);

  return { loading, error, countryStats };
}
