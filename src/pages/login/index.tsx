import React from 'react';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import {
  Col,
  Row,
  Image,
  Layout,
  Space,
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
} from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function Login() {
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
                >
                  <Title level={1}>Log in</Title>
                  <Title level={5}>
                    Welcome to animal planet! Please Enter your Details
                  </Title>

                  <div>
                    <label className="register-form-label">
                      <MailOutlined className="register-icon" />
                      Email Address *
                    </label>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your email!',
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your Email Address"
                        size="large"
                      />
                    </Form.Item>
                  </div>

                  <div>
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
                      labelAlign="left"
                      className="password-text"
                    >
                      <Input.Password
                        placeholder="Type your password"
                        size="large"
                      />
                      <Text type="secondary">
                        Must be 8 characters at least
                      </Text>
                    </Form.Item>
                  </div>

                  <Row justify="space-between">
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                      <Text type="danger">Forgot Password?</Text>
                    </Form.Item>
                  </Row>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block={true}
                      size="large"
                    >
                      Sign in
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
                  </Form.Item>
                  <Link to="/">Sign up today!</Link>
                </Form>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
}
