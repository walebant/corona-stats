import React from 'react';
import { Statistic, Card, Row, Col, Typography } from 'antd';
import Spinner from './Spinner';
import useDailyStats from './useDailyStats';

const { Title } = Typography;

export default function DailySummary() {
  const { loading, error, stats } = useDailyStats(
    'https://covid19.mathdro.id/api/daily/'
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Title level={4} style={{ textAlign: 'center', marginTop: '2em' }}>
        Daily Summary
      </Title>

      <Row gutter={32} style={{ textAlign: 'center' }}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Confirmed"
              value={stats?.deltaConfirmed}
              valueStyle={{ color: '#c38755' }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Recovered"
              value={stats?.deltaRecovered}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
