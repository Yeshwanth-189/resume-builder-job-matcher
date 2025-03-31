import React from 'react';
import ResumeBuilderBg from '../assets/icons/ResumeBuilderBg.png';
import LandingPageImage from '../assets/icons/LandingPage.png';
import { Layout, Row, Col, Button, Form, Input } from 'antd';
import LoginPageImage from '../assets/icons/LoginPage.png';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Register = () => {
    const navigate = useNavigate();

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } }
    };

    const inputVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <>
        <Layout className="min-h-screen" style={{ backgroundColor: '#eff8ff' }}>
            <h1 style={{ fontSize:'3rem', marginLeft:'5%', color: '#4d4d4d', fontFamily: 'manrope' }}>ResumeCraft.AI</h1>
            <Row justify="center" align="middle" style={{ height: '100vh', padding: '0 10%' }}>
                <Col span={12} style={{ textAlign: 'left', paddingLeft: '5%' }}>
                    <motion.img
                        src={LoginPageImage}
                        alt="Resume Builder"
                        style={{ width: '500px', height: 'auto', objectFit: 'cover', borderRadius: 20 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </Col>
                
                <Col 
                    span={10} 
                    style={{ 
                        textAlign: 'left',
                        backgroundColor: 'white', 
                        padding: '40px', 
                        borderRadius: '16px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        marginLeft: '5%'
                    }}
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 style={{ fontSize: '2rem', marginBottom: '30px', marginLeft:'23%',fontFamily: 'manrope', color: '#4d4d4d' }}>
                            Welcome Back!
                        </h2>
                        
                        <Form
                            name="register_form"
                            layout="vertical"
                            style={{ width: '90%' }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' , marginLeft: '7%'}}>

                                <motion.div variants={inputVariants}>
                                    <Form.Item
                                        label={<span style={{ fontFamily: "manrope" }}>Email</span>}
                                        name="email"
                                        rules={[{ required: true, message: 'Please enter your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                                    >
                                        <Input placeholder="Enter your email" style={{ fontFamily: "manrope" }} />
                                    </Form.Item>
                                </motion.div>

                                <motion.div variants={inputVariants}>
                                    <Form.Item
                                        label={<span style={{ fontFamily: "manrope" }}>Password</span>}
                                        name="password"
                                        rules={[{ required: true, message: 'Please enter your password!' }]}
                                    >
                                        <Input.Password placeholder="Enter your password" style={{ fontFamily: "manrope" }} />
                                    </Form.Item>
                                </motion.div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' , marginLeft: '35%'}}>
                            <Button 
                                    type="primary" 
                                    size="large" 
                                    style={{ width: '50%', borderRadius: '8px' }}
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </Button>
                                <Button 
                                    type="default" 
                                    size="large" 
                                    style={{ width: '50%', borderRadius: '8px' }}
                                    onClick={() => navigate('/register')}
                                >
                                    Register
                                </Button>
                                
                            </div>
                        </Form>
                    </motion.div>
                </Col>
            </Row>
        </Layout>
        </>
    );
};

export default Register;
