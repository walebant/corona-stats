import React, { useState } from 'react';
import { Statistic, Card, Row, Col, Spin } from 'antd';
import useDailyStats from './useDailyStats';

export default function DailySummary() {
  const [dailyStats, setDailyStats] = useState();
  const { loading, error, stats } = useDailyStats(
    'https://covid19.mathdro.id/api/daily'
  );

  if (loading) {
    return <Spin size="large" />;
  }

  Object.entries(stats).filter(day => {
    const dayNow = new Date().getDate();
    const month = new Date().getMonth() + 1;

    if (day[1].reportDateString === `2020/0${month}/${dayNow}`) {
      setDailyStats(day[1]);
    }
  });

  return (
    <Row gutter={32} style={{ textAlign: 'center' }}>
      <Col span={8}>
        <Card>
          <Statistic
            title="Confirmed"
            value={dailyStats?.deltaConfirmed}
            valueStyle={{ color: '#c38755' }}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="Recovered"
            value={dailyStats?.deltaRecovered}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
      {/* <Col span={8}>
        <Card>
          <Statistic
            title="Deaths"
            //   value={stats.deaths.value}
            valueStyle={{ color: '#cf1322' }}
          />
        </Card>
      </Col> */}
    </Row>
  );
}
