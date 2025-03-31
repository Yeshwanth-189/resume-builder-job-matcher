// components/SkillMatchModal.jsx
import React from 'react';
import { Modal, Typography, Button, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import SkillMatchGauge from '../pages/SkillMatchGauge';

const { Title } = Typography;
const MotionDiv = motion.div;

const getSuggestionStyle = (suggestion, matchPercentage) => {
  if (suggestion.includes('Your match verdict')) {
    if (matchPercentage > 75) {
      return { backgroundColor: 'rgb(131 236 178)', color: 'white' };
    } else if (matchPercentage > 50) {
      return { backgroundColor: 'rgb(127 185 252)', color: 'white' };
    } else {
      return { backgroundColor: 'rgb(255 174 174)', color: 'white' };
    }
  }
  
  // Check if it's about "missing skills"
  if (suggestion.toLowerCase().includes('missing')) {
    return { backgroundColor: 'rgb(255 174 174)', color: 'white' };
  }
  
  // Check if it's about "found headers" in the resume
  if (suggestion.toLowerCase().includes('found')) {
    return { backgroundColor: 'rgb(131 236 178)', color: 'white' };
  }

  if (suggestion.toLowerCase().includes('could not find')) {
    return { backgroundColor: 'rgb(255 174 174)', color: 'white' };
  }
  
  // Default style
  return {};
};

const SkillMatchModal = ({ visible, onClose, matchPercentage, suggestions }) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      closable
      width={900}
      style={{ borderRadius: 12 }}
      bodyStyle={{ padding: '30px', textAlign: 'center' }}
    >
      <MotionDiv
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Title level={4} style={{ marginBottom: 40, fontFamily: 'manrope' }}>
          Skill Match Rate
        </Title>

        <div
          style={{
            fontFamily: 'manrope',
            border: '1px solid #f4f4f4',
            borderRadius: 6,
            backgroundColor:
              matchPercentage > 75
                ? 'rgb(222 252 235)'
                : matchPercentage > 50
                ? '#eff8ff'
                : 'rgb(255 243 219)',
            padding: 20,
            marginBottom: 20,
          }}
        >
          <Row gutter={16}>
            {/* Skill Gauge */}
            <Col
              span={12}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <SkillMatchGauge percentage={matchPercentage} />
            </Col>

            {/* Suggestions */}
            <Col span={12}>
              {suggestions.slice(0, 4).map((suggestion, index) => {
                const suggestionStyle = getSuggestionStyle(suggestion, matchPercentage);
                return (
                  <MotionDiv
                    key={index}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    style={{
                      marginBottom: 10,
                      fontFamily: 'manrope',
                      backgroundColor: suggestionStyle.backgroundColor || '#fff',
                      color: 'black',
                      padding: '10px 15px',
                      borderRadius: 8,
                      boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
                      textAlign: 'left',
                    }}
                  >
                    {suggestion}
                  </MotionDiv>
                );
              })}
            </Col>
          </Row>
        </div>

        <Button
          type="primary"
          style={{
            marginTop: 20,
            backgroundColor: '#0070f3',
            borderRadius: 6,
            width: '120px',
            height: '40px',
            fontFamily: 'manrope',
          }}
          onClick={onClose}
        >
          Scan Again
        </Button>
      </MotionDiv>
    </Modal>
  );
};

export default SkillMatchModal;
