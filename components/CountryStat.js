import React, { useState } from 'react';
import { Statistic, Card, Row, Col, Select, Spin, Typography } from 'antd';
import useCountryStats from './useCountryStats';
import useStats from './useStats';

const { Title } = Typography;
const { Option } = Select;

export default function CountryStat() {
  const [seleceted, setSeleceted] = useState('NG');
  const { loading, error, stats } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const { countryStats } = useCountryStats(seleceted);

  const handleChange = value => setSeleceted(value);

  return (
    <div style={{ marginTop: '3em', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title level={4} style={{ marginRight: '1em' }}>
          In{' '}
        </Title>
        <Select
          defaultValue={seleceted}
          style={{ width: 200 }}
          onChange={handleChange}
        >
          {stats?.countries &&
            Object.entries(stats.countries).map((country, i) => (
              <Option value={country[1]} key={i}>
                {country[0]}
              </Option>
            ))}
        </Select>
      </div>
      {loading || (!countryStats && <Spin size="large" />)}

      {countryStats && (
        <Row gutter={32} style={{ marginTop: '1em' }}>
          <Col span={8}>
            <Card>
              <Statistic
                title="Confirmed"
                value={countryStats.confirmed?.value}
                valueStyle={{ color: '#c38755' }}
              />
            </Card>
          </Col>

          <Col span={8}>
            <Card>
              <Statistic
                title="Recovered"
                value={countryStats.recovered?.value}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>

          <Col span={8}>
            <Card>
              <Statistic
                title="Deaths"
                value={countryStats.deaths?.value}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
        </Row>
      )}
      {error && <h1>{error}</h1>}
    </div>
  );
}
