import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Input, Button, Typography, Row, Col, Space, Layout, Card } from 'antd';
import { ScanOutlined } from '@ant-design/icons';
import Sidebar from '../components/layouts/SideBar';
import Logo from '@/components/common/Logo';

const { Title } = Typography;
const { Header, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout className="min-h-screen" style={{backgroundColor:'rgb(230, 250, 254)'}}>
      <Sidebar />

      {/* Main Content */}
      <Layout style={{backgroundColor:' #e6f4ff'}}>
        <div
          className="dashboard-header"
          style={{
            paddingLeft: '5%',
            fontSize: 'xx-large',
            display: 'flex',
            justifyContent: 'space-between',
            color: '#4d4d4d',
            marginTop: '20px',
            fontFamily: 'manrope',
          }}
        >
          <h2>Welcome, User!</h2>
          <Logo/>
        </div>

        <Content className="m-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card
              style={{
                fontFamily: 'manrope',
                maxWidth: 1000,
                margin: '5% 0% 0% 15%',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                background: '#ffffff',
              }}
            >
              <div style={{ padding: '20px' }}>
                <Title level={2} style={{ fontWeight: '600' }}>
                  🔍 New Scan
                </Title>

                <Row gutter={24} style={{ marginBottom: 32 }}>
                  <Col span={12}>
                    <Title level={5}>Resume</Title>
                    <Input.TextArea
                      placeholder="Paste Resume here..."
                      autoSize={{ minRows: 12 }}
                      style={{ borderRadius: 8,backgroundColor:'#eff8ff' }}
                    />
                  </Col>
                  <Col span={12}>
                    <Title level={5}>Job Description</Title>
                    <Input.TextArea
                      placeholder="Paste Job Description here..."
                      autoSize={{ minRows: 12 }}
                      style={{ borderRadius: 8,backgroundColor:'#eff8ff' }}
                    />
                  </Col>
                </Row>

                <div style={{ textAlign: 'right' }}>
                  <Space>
                    <Button
                      type="primary"
                      icon={<ScanOutlined />}
                      style={{
                        fontFamily: 'manrope',
                        borderRadius: 6,
                        height: 40,
                      }}
                    >
                      Scan
                    </Button>
                  </Space>
                </div>
              </div>
            </Card>
          </motion.div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
