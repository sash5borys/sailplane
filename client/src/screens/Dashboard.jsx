import React, { useEffect } from 'react';
import { Space } from 'antd';
import Chart from '../components/Dashboard/Chart';
import History from '../components/Dashboard/History';
import useToken from '../utils/useToken';
import sender from '../utils/sender';

const Dashboard = () => {
  const { token } = useToken();
  
  const getUser1 = async () => {
    const user1 = await sender('/user/1', 'GET', null, token);
    console.log('user1', user1);
  }

  useEffect(async ()=>{
    getUser1();    
  }, [])

  return (
    <Space
      className="app-content__dashboard"
      direction="vertical"
      size="middle"
      style={{
        display: 'flex'
      }}
    >
      <Chart />
      <History />
    </Space>
  );
};

export default Dashboard;
