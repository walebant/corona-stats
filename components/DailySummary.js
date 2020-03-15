import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import Loading from './Loading';
import useStats from './useStats';

export default function DailySummary() {
  const { loading, error, stats } = useStats(
    'https://covid19.mathdro.id/api/daily'
  );
  if (loading) {
    return <Loading />;
  }
  Object.entries(stats).map(day => {
    const dayNow = new Date().getDate();
    const month = new Date().getMonth() + 1;

    if (day[1].reportDateString === `2020/0${month}/${dayNow}`) {
      console.log(day);
    }
  });
}
