import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Row,
  Space,
  Typography,
} from 'antd';
import { registerFormData } from 'constants/DATA';
import React from 'react';

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
                className="custom-register-form"
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
                    {registerFormData?.map((item, index) => {
                      return (
                        <div className="grid-item" key={index}>
                          <label className="register-form-label">
                            {item?.icon}
                            {item?.title} {item?.required && '*'}
                          </label>
                          <Form.Item
                            name={item?.name}
                            rules={item?.rules as []}
                          >
                            {item?.type == 'password' ? (
                              <Input.Password
                                placeholder={item?.placeholder}
                                size="large"
                              />
                            ) : item?.type == 'number' ? (
                              <Input
                                placeholder={item?.placeholder}
                                size="large"
                                type="number"
                              />
                            ) : (
                              <Input
                                placeholder={item?.placeholder}
                                size="large"
                              />
                            )}
                          </Form.Item>
                        </div>
                      );
                    })}
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
                    <Text>Don&apos;t have an account yet?</Text>{' '}
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
