import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import stringAvatar from '../utils/stringAvatar';

function getItem(label, key) {
  return {
    key,
    label
  };
}

const LetterAvatar = ({ userName }) => {
  const { name, color } = stringAvatar(userName);
  const items = [getItem('Logout', '1')];
  const handleMenuClick = (e) => {
    console.log('click', e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick
  };

  return (
    <Dropdown menu={menuProps}>
      <Avatar
        className="app-header__avatar"
        style={{
          backgroundColor: color
        }}
        size="medium"
      >
        {name}
      </Avatar>
    </Dropdown>
  );
};

export default LetterAvatar;
