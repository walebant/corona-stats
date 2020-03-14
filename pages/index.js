import React from 'react';
import Layout from '../components/MyLayout';
import useStats from '../components/useStats';
import CountryStat from '../components/CountryStat';
import Global from '../components/Global';

export default function Index() {
  const { loading, error, stats } = useStats('https://covid19.mathdro.id/api/');
  return (
    <Layout>
      <h1>COVID-19 Global Stats</h1>
      <Global stats={stats} />
      <CountryStat />
    </Layout>
  );
}
