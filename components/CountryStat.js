import React, { useState, useEffect } from 'react';
import useCountryStats from './useCountryStats';
import useStats from './useStats';

export default function CountryStat() {
  const [seleceted, setSeleceted] = useState('NG');
  const { loading, error, stats } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const { countryStats } = useCountryStats(seleceted);

  const handleChange = e => setSeleceted(e.target.value);

  return (
    <div>
      <select onChange={handleChange} value={seleceted}>
        {stats?.countries &&
          Object.entries(stats.countries).map((country, i) => (
            <option value={country[1]} key={i}>
              {country[0]}
            </option>
          ))}
      </select>

      <p>Confirmed: {countryStats.confirmed.value}</p>
      <p>Recovered: {countryStats.recovered.value}</p>
      <p>Deaths: {countryStats.deaths.value}</p>
    </div>
  );
}
