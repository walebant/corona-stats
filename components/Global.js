import React from 'react';
import { Statistic, Card, Row, Col, Typography, Divider } from 'antd';
import useStats from './useStats';
import Spinner from './Spinner';

const { Title } = Typography;

export default function Global() {
  const { loading, error, stats } = useStats('https://covid19.mathdro.id/api/');

  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={{ marginTop: '10%' }}>
      <Divider orientation="left" style={{ fontSize: '.9em' }}>
        <Title level={4}>🦠 COVID-19 Global Stats</Title>
      </Divider>
      <Row gutter={32} style={{ textAlign: 'center' }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Confirmed"
              value={stats?.confirmed?.value}
              valueStyle={{ color: '#c38755' }}
              style={{ position: 'relative', left: '-12px' }}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Recovered"
              value={stats?.recovered?.value}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Deaths"
              value={stats?.deaths?.value}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
