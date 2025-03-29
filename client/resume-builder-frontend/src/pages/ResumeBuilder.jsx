import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Layout, Steps, Button, Space } from "antd";
import ProfileForm from "./StepForm/ProfileForm";
import WorkExperienceForm from "./StepForm/WorkExperienceForm";  
import EducationForm from "./StepForm/EducationForm";
import SkillsForm from "./StepForm/SkillsForm";
import AdditionalForm from "./StepForm/AdditionalForm";
import ResumePreview from "./ResumePreview";
import Sidebar from '../components/layouts/SideBar';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './ResumeBuilder.css';
import Logo from '@/components/common/Logo';
import ResumeBuilderBg from '../assets/icons/ResumeBuilderBg.png';
const { Content, Sider } = Layout;

const steps = [
  { title: "Profile" },
  { title: "Work" },
  { title: "Education" },
  { title: "Skills" },
  { title: "Additional" },
];

const ResumeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    profile: {},
    experience: [],
    education: [],
    skills: [],
    additional: {},
  });

  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const next = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const collapsed = useSelector((state) => state.ui.sidebarCollapsed);

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <ProfileForm data={formData.profile} onChange={(data) => updateFormData("profile", data)} />;
      case 1:
        return <WorkExperienceForm data={formData.experience} onChange={(data) => updateFormData("experience", data)} />;
      case 2:
        return <EducationForm data={formData.education} onChange={(data) => updateFormData("education", data)} />;
      case 3:
        return <SkillsForm data={formData.skills} onChange={(data) => updateFormData("skills", data)} />;
      case 4:
        return <AdditionalForm data={formData.additional} onChange={(data) => updateFormData("additional", data)} />;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: "100v" , fontFamily: 'manrope', backgroundImage:`url(${ResumeBuilderBg})` ,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat' , backgroundPosition: 'center' , backgroundAttachment: 'fixed'}}>
        <Sidebar />
        <div
        style={{
          flex: 1,
          marginLeft: collapsed ? 80 : 200,
          transition: 'margin-left 0.3s ease',
        }}
      ><Layout style={{backgroundColor:' #e6f4ff', fontFamily: 'manrope', backgroundImage:`url(${ResumeBuilderBg})`,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat' , backgroundPosition: 'center' , backgroundAttachment: 'fixed'}}>
      <div
          className="resume-builder-header"
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
          <h2>Craft Your Resume 📝</h2>
          <Logo/>
        </div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
        <Content style={{ padding: "24px", display: "flex", gap: "24px", fontFamily: 'manrope' }}>
          <div style={{ flex: 1, fontFamily: 'manrope'}}>
            <Steps current={currentStep} direction="horizontal" items={steps} className="custom-steps" />
            <div style={{ marginTop: 24 }}>{renderStepContent()}</div>
            <div style={{ marginTop: 24 }}>
            <Space style={{ marginLeft: '45%',fontFamily:'manrope'}}size='middle'>
              {currentStep > 0 && (
                <Button onClick={prev} style={{ height: 40, width: 100 ,fontFamily:'manrope'}}>
                  Previous
                </Button>
              )}
            {currentStep < steps.length - 1 && (
              <Button type="primary" onClick={next} style={{ height: 40, width: 100,fontFamily:'manrope' }}>
                Next
              </Button>
            )}
          </Space>
            </div>
          </div>

          <div
              style={{
                background: "#fff",
                padding: "40px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                height: "750px",
                width: "100%",
                fontFamily: "manrope",
                boxSizing: "border-box",
              }}
            >
            <ResumePreview data={formData} />
          </div>
        </Content>
        </motion.div>
      </Layout></div>

      
    </Layout>
  );
};

export default ResumeBuilder;
