import { useState, useEffect } from 'react';

export default function useCountryStats(selected) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countryStats, setCountryStats] = useState();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetch(
          `https://covid19.mathdro.id/api/countries/${selected}`
        );
        const response = await data.json();
        setCountryStats(response);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }

    fetchData();
    return () => {};
  }, [selected]);

  return { loading, error, countryStats };
}
