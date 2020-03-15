import React from 'react';
import { Statistic, Card, Row, Col, Spin, Typography } from 'antd';
import useStats from './useStats';

const { Title } = Typography;

export default function Global() {
  const { loading, error, stats } = useStats('https://covid19.mathdro.id/api/');

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <>
      <Title level={4} style={{ textAlign: 'center' }}>
        COVID-19 Global Stats
      </Title>
      <Row gutter={32} style={{ textAlign: 'center' }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Confirmed"
              value={stats?.confirmed?.value}
              valueStyle={{ color: '#c38755' }}
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
    </>
  );
}
