import React, { useRef, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { scanResumeRequest } from '../features/resume/resumeActions';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Input, Button, Typography, Row, Col, Space, Layout, Card, message } from 'antd';
import { ScanOutlined, UploadOutlined } from '@ant-design/icons';
import Sidebar from '../components/layouts/SideBar';
import Logo from '@/components/common/Logo';
import * as pdfjsLib from 'pdfjs-dist';
import ResumeBuilderBg from '../assets/icons/ResumeBuilderBg.png';
import SkillMatchModal from './SkillMatchModal';
import mammoth from 'mammoth';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const { Title } = Typography;
const { Header, Content } = Layout;

const Dashboard = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.ui.sidebarCollapsed);
  const fileInputRef = useRef(null);
  const [resumeText, setResumeText] = useState('');4
  const [jobDescriptionText, setJobDescriptionText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [matchPercentage, setMatchPercentage] = useState(null);
const [modalVisible, setModalVisible] = useState(false);
// eslint-disable-next-line no-unused-vars
const [suggestions, setSuggestions] = useState([]);



  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileType = file.name.split('.').pop().toLowerCase();

    try {
      if (fileType === 'pdf') {
        const fileReader = new FileReader();
        fileReader.onload = async function () {
          const typedArray = new Uint8Array(this.result);
          const pdf = await pdfjsLib.getDocument(typedArray).promise;
          let text = '';
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map((s) => s.str).join(' ') + '\n';
          }
          setResumeText(text);
          setIsDisabled(true);
        };
        fileReader.readAsArrayBuffer(file);
      } else if (fileType === 'docx') {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        setResumeText(result.value);
        setIsDisabled(true);
      } else {
        message.error('Unsupported file format. Please upload a PDF or DOCX file.');
      }
    } catch (error) {
      message.error('Failed to extract resume content.');
      console.error(error);
    }
  };
  
  	
  const handleScanClick = () => {
    if (!resumeText || !jobDescriptionText) {
      message.error('Please provide both Resume text and Job Description text.');
      return;
    }
    // 🔥 Dispatching Redux action with both payloads
    dispatch(scanResumeRequest(resumeText, jobDescriptionText));
  };

  return (
    <Layout className="min-h-screen" style={{backgroundImage:`url(${ResumeBuilderBg})`}}>
      <Sidebar />
      <div
        style={{
          flex: 1,
          marginLeft: collapsed ? 80 : 200,
          transition: 'margin-left 0.3s ease',
        }}
      >
        <Layout style={{ backgroundColor: '#e6f4ff', backgroundImage:`url(${ResumeBuilderBg})` }}>
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
            <Logo />
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
                  margin: '0% 0% 0% 15%',
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  background: '#ffffff',
                }}
              >
                <div style={{ padding: '0 px 20px 20px 20px' }}>
                  <Title level={2} style={{ fontWeight: '600', margin: 'auto' , fontFamily:'manrope'}}>
                    New Scan 🔍
                  </Title>
                  <p style={{ fontFamily: 'manrope' }}>
                    Upload your resume and job description, and let our AI efficiently assess and score your match.
                  </p>

                  <Row gutter={24} style={{ marginBottom: 32 }}>
                    <Col span={12}>
                      <Title level={5}>Resume</Title>
                      <Input.TextArea
                          placeholder="Paste Resume here..."
                          autoSize={false}
                          disabled={isDisabled}
                          onChange={e => setResumeText(e.target.value)}
                          style={{
                            height: '200px',
                            overflowY: 'auto',
                            borderRadius: 8,
                            backgroundColor: isDisabled ? '#eff8ff' : '#eff8ff',
                            filter: isDisabled ? 'blur(7px)' : 'none',
                          }}
                        />

                    </Col>
                    <Col span={12}>
                      <Title level={5}>Job Description</Title>
                      <Input.TextArea
                          placeholder="Paste Job Description here..."
                          autoSize={false}
                          value={jobDescriptionText}
                          onChange={e => setJobDescriptionText(e.target.value)}
                          style={{
                            height: '200px',
                            overflowY: 'auto',
                            borderRadius: 8,
                            backgroundColor: '#eff8ff',
                          }}
                        />

                    </Col>
                  </Row>

                  <div style={{ textAlign: 'right' }}>
                    <Space>
                      <input
                        type="file"
                        accept=".pdf,.docx"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                      />
                      <Button
                        type="dashed"
                        icon={<UploadOutlined />}
                        onClick={() => fileInputRef.current.click()}
                        style={{
                          fontFamily: 'manrope',
                          height: 40,
                          marginRight: '475px',
                          width: 200,
                          borderRadius: 6,
                        }}
                      >
                        Upload Your Resume
                      </Button>
                      <Button
                        type="primary"
                        icon={<ScanOutlined />}
                        style={{
                          fontFamily: 'manrope',
                          borderRadius: 6,
                          height: 40,
                        }}
                        onClick={() => {
                          handleScanClick();
                          // Simulate skill match from API
                          // setTimeout(() => {
                          //   const score = Math.floor(Math.random() * 41) + 60; // Random score 60-100
                          //   setMatchPercentage(score);
                          //   const sampleSuggestions = [
                          //     "Add more action verbs in your experience section.",
                          //     "Mention more relevant skills like Redux and FastAPI.",
                          //     "Improve your project descriptions to highlight accomplishments."
                          //   ];
                          //   setSuggestions(sampleSuggestions);
                          //   message.success('Scan completed!');
                          //   setModalVisible(true);
                          // }, 1000);
                        }}
                      >
                        Scan
                      </Button>
                      <SkillMatchModal
                        visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                        matchPercentage={matchPercentage}
                        suggestions={suggestions}
                      />
                    </Space>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Content>
        </Layout>
      </div>
    </Layout>
  );
};

export default Dashboard;
