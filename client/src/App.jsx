import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Typography, theme } from 'antd';
import { StateContext } from './data/StateProvider';
import useToken from './utils/useToken';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import LetterAvatar from './components/LetterAvatar';
import SidebarNav from './components/SidebarNav';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const { state, dispatch } = useContext(StateContext);
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <Layout className="login-wrapper">
         <Router>
            <Routes>
              <Route path="/signin" element={<SignIn setToken={setToken} />} />
              <Route path="/signup" element={<SignUp setToken={setToken} />} />
            </Routes>
          </Router>
      </Layout>
    );
  }

  return (
    <Layout className="app-wrapper">
      <Sider
        className="app-sider"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <SidebarNav />
      </Sider>
      <Layout className="app-body">
        <Header
          className="app-header"
          style={{
            background: colorBgContainer
          }}
        >
          <Title className="app-header__title" level={3}>
            Dashboard
          </Title>
          <LetterAvatar userName={'John Dou'} />
        </Header>
        <Content
          className="app-content"
        >
          <Router>
            <Routes>
              <Route path="/signup" element={<SignUp setToken={setToken} />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects/calendar" element={<Dashboard />} />
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </Router>
        </Content>
        <Footer className="app-footer">Sailplane ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
