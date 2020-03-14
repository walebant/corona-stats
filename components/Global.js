import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  confirmed: {
    color: 'black',
    border: '1px solid red',
    padding: 10,
    width: '10rem',
  },
  recovered: {
    color: 'green',
  },
  death: {
    color: 'red',
  },
};
export default function Global({ stats }) {
  return (
    <div style={styles.container}>
      <div style={styles.confirmed}>
        <p>Confirmed: {stats.confirmed.value}</p>
      </div>
      <div style={styles.recovered}>
        <p>Recovered: {stats.recovered.value}</p>
      </div>
      <div style={styles.death}>
        <p>Deaths: {stats.deaths.value}</p>
      </div>
    </div>
  );
}
