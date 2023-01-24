import React from 'react';
import { Button, Form, Input, theme } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import sender from '../utils/sender';

const SignUp = ({setToken}) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  
  const onFinish = async (user) => {
    const token = await sender('/signup', 'POST', { ...user });
    setToken(token);
  };

  return (
    <Form
      className="login-form"
      name="login-form"
      onFinish={onFinish}
      style={{
        background: colorBgContainer
      }}
    >
      <Form.Item
        className="app-form-item login-form__item"
        name="login"
        rules={[
          {
            required: true,
            message: 'Please input your Login!'
          }
        ]}
      >
        <Input
          className="app-input login-form__input"
          prefix={<UserOutlined className="login-form__item-icon" />}
          placeholder="Login"
        />
      </Form.Item>
      <Form.Item
        className="app-form-item login-form__item"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!'
          }
        ]}
      >
        <Input
          className="app-input login-form__input"
          prefix={<LockOutlined className="app-form-icon login-form__item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item className="app-form-item login-form__item">
        <Button className="app-button login-form__button" type="primary" htmlType="submit">
          Register
        </Button>
        Or <a href='/signin' className="app-link login-form__link">log in</a>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
