import React from "react";
import { Form, Input, Card } from "antd";

const ProfileForm = ({ data, onChange }) => {
  const handleChange = (changedValues) => {
    onChange({ ...data, ...changedValues });
  };

  return (
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
        <h2 style={{ fontFamily: 'manrope' }}>Let employers know who you are</h2>
        <p style={{ fontFamily: 'manrope' }}>Enter your personal information for employers to contact you</p>
      </div>

      <Form
        layout="vertical"
        initialValues={data}
        onValuesChange={(_, values) => handleChange(values)}
      >
        <Form.Item name="fullName">
          <span style={{ fontFamily: 'manrope' }}>Full Name</span>
          <Input
            style={{ fontFamily: 'manrope' }}
            placeholder="Enter your full name"
          />
        </Form.Item>
        <Form.Item name="email">
          <span style={{ fontFamily: 'manrope' }}>Email</span>
          <Input
            type="email"
            style={{ fontFamily: 'manrope' }}
            placeholder="Enter your email here"
          />
        </Form.Item>
        <Form.Item name="phone">
          <span style={{ fontFamily: 'manrope' }}>Phone Number</span>
          <Input
            style={{ fontFamily: 'manrope' }}
            placeholder="+1 234 567 890"
          />
        </Form.Item>
        <Form.Item name="location">
          <span style={{ fontFamily: 'manrope' }}>Location</span>
          <Input
            style={{ fontFamily: 'manrope' }}
            placeholder="City, Country"
          />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProfileForm;
