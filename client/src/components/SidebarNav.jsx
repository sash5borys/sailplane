import React from 'react';
import {
  ProjectOutlined,
  DesktopOutlined,
  CalendarOutlined,
  SettingOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { Menu, Divider } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  };
}

const SidebarNav = () => {
  const items = [
    getItem(
      '',
      'grp1',
      <Divider />,
      [
        getItem('Dashboard', '1', <DesktopOutlined />),
        getItem('Projects', '2', <CalendarOutlined />, [
          getItem('List', '3'),
          getItem('Kanban', '4'),
          getItem('Calendar', '5')
        ]),
        getItem('Management', '6', <TeamOutlined />),
        getItem('Report', '7', <ProjectOutlined />)
      ],
      'group'
    ),
    getItem('', 'grp2', <Divider />, [getItem('Settings', '8', <SettingOutlined />)], 'group')
  ];

  return (
    <Menu
      className="app-sider__app-nav"
      theme="dark"
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
    />
  );
};
export default SidebarNav;
