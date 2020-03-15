import React from 'react';
import { Typography } from 'antd';
import Layout from '../components/MyLayout';
import useStats from '../components/useStats';
import CountryStat from '../components/CountryStat';
import Global from '../components/Global';
import DailySummary from '../components/DailySummary';

const { Title } = Typography;

export default function Index() {
  const { loading, error, stats } = useStats('https://covid19.mathdro.id/api/');
  return (
    <Layout>
      <Title level={4} style={{ textAlign: 'center' }}>
        COVID-19 Global Stats
      </Title>
      <Global stats={stats} loading={loading} />
      <DailySummary />
      <CountryStat />

      <style jsx="true" global>{`
        @import url('https://fonts.googleapis.com/css?family=Sen&display=swap');

        body {
          font-family: 'Sen', sans-serif;
        }
      `}</style>
    </Layout>
  );
}
