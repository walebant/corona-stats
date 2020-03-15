import React from 'react';

import Layout from '../components/Layout';
import Global from '../components/Global';
import CountryStat from '../components/CountryStat';
import DailySummary from '../components/DailySummary';

export default function Index() {
  return (
    <Layout>
      <Global />
      <DailySummary />
      <CountryStat />

      <style jsx="true" global>{`
        @import url('https://fonts.googleapis.com/css?family=Sen&display=swap');

        body {
          font-family: 'Sen', sans-serif;
          overflow: hidden;
        }
      `}</style>
    </Layout>
  );
}
