import React from "react";
import { Form, Input, Button, Space, Card, } from "antd";

const AdditionalForm = ({ data, onChange }) => {
  const handleChange = (changedValues) => {
    onChange({ ...data, ...changedValues });
  };

  return (
    <>
    <Card 
                   style={{
                      width: '80%',
                      margin: '5% auto',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      borderRadius: '12px',
                      padding: '40px',
                      background: '#fff',
                      fontFamily: 'manrope',
                    }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <h2 style={{ fontFamily: 'manrope' }}>Optional section to personalize</h2>
                      <p style={{ fontFamily: 'manrope' }}>Add Certifications, Awards or Publications here </p>
                    </div>
    
    <Form layout="vertical" initialValues={data} onValuesChange={(_, values) => handleChange(values)}>
      <Form.Item name="notes">
        <Input.TextArea style={{ fontFamily: 'manrope' }} rows={6} placeholder="Mention certifications, awards, or any other additional info" />
      </Form.Item>
    </Form>
    </Card>
    </>
  );
};

export default AdditionalForm;
