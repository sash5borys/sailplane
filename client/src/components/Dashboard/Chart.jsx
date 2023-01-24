import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const Chart = () => {
  return (
    <Row className="app-content__chart" gutter={16}>
      <Col span={12}>
        <Card className="app-card app-content__chart__card" bordered={false}>
          <Statistic
            className="app-statistic app-content__chart__statistic"
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{
              color: '#3f8600'
            }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card bordered={false} className="app-card app-content__chart__card">
          <Statistic
            className="app-statistic app-content__chart__statistic"
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{
              color: '#cf1322'
            }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Chart;
