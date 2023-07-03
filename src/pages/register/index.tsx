import React, { ChangeEvent, useState } from 'react';
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import {
  Col,
  Row,
  Image,
  Layout,
  Space,
  Button,
  Form,
  Input,
  Typography,
} from 'antd';

import { Link } from 'react-router-dom';
import './index.scss';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function Register() {
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: '100vh',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
  };

  const formStyle: React.CSSProperties = {
    paddingLeft: '100px',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Layout hasSider>
          <Content style={contentStyle}>
            <Row justify="space-around" style={{ height: '100vh' }}>
              <Col xs={24} sm={24} md={10} lg={10} className="login-image">
                <Image
                  src="/assets/images/login.jpg"
                  width={'100%'}
                  preview={false}
                />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={14}
                lg={14}
                className="custom-form"
                style={formStyle}
              >
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  layout="vertical"
                  labelAlign="left"
                  className="myform"
                >
                  <Title level={1}>Register</Title>
                  <Title level={5}>
                    Welcome to animal planet! Please Enter your Details for
                    registration
                  </Title>
                  <div className="grid-container">
                    <div className="grid-item">
                      <label className="register-form-label">
                        <UserOutlined className="register-icon" />
                        First Name *
                      </label>
                      <Form.Item
                        name="first_name"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your first name!',
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter your First Name"
                          size="large"
                        />
                      </Form.Item>
                    </div>
                    <div className="grid-item">
                      <label className="register-form-label">
                        <UserOutlined className="register-icon" />
                        Last Name *
                      </label>
                      <Form.Item
                        name="last_name"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your last name!',
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter your Last Name"
                          size="large"
                        />
                      </Form.Item>
                    </div>
                    <div className="grid-item">
                      <label className="register-form-label">
                        <MailOutlined className="register-icon" />
                        Email Address *
                      </label>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your email address!',
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter your email address"
                          size="large"
                        />
                      </Form.Item>
                    </div>
                    <div className="grid-item">
                      <label className="register-form-label">
                        <PhoneOutlined className="register-icon" />
                        Phone Number *
                      </label>
                      <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your phone number!',
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter your Phone Number"
                          size="large"
                        />
                      </Form.Item>
                    </div>
                    <div className="grid-item">
                      <label className="register-form-label">
                        <LockOutlined className="register-icon" />
                        Password *
                      </label>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your password!',
                          },
                        ]}
                      >
                        <Input placeholder="Enter your Password" size="large" />
                      </Form.Item>
                    </div>
                    <div className="grid-item">
                      <label className="register-form-label">
                        <LockOutlined className="register-icon" />
                        Re Enter Password *
                      </label>
                      <Form.Item
                        name="confirm_password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your password again!',
                          },
                        ]}
                      >
                        <Input
                          placeholder="Re Enter your Password"
                          size="large"
                        />
                      </Form.Item>
                    </div>
                  </div>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block={true}
                      size="large"
                    >
                      Register Now!
                    </Button>
                  </Form.Item>
                  <Form.Item className="social-login-buttons">
                    <Button type="primary" htmlType="submit" size="large">
                      Sign in with Intuit
                    </Button>
                    <Button
                      type="primary"
                      ghost={true}
                      htmlType="submit"
                      size="large"
                    >
                      Sign in with Xero
                    </Button>
                  </Form.Item>
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    // wrapperCol={{ offset: 8, span: 16 }}
                  >
                    <Text>Don't have an account yet?</Text>{' '}
                    <Link to="/login">Login Now!</Link>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
}
