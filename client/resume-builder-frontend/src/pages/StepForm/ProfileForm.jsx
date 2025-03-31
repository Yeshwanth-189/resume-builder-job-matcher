import React from "react";
import { Form, Input, Card } from "antd";

const ProfileForm = ({ data, onChange }) => {
  const handleChange = (changedValues) => {
    onChange({ ...data, ...changedValues });
  };

  return (
    <Card
      style={{
        width: "80%",
        margin: "5% auto",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        padding: "40px",
        background: "#fff",
        fontFamily: "manrope",
      }}
    >
      <div style={{ textAlign: "left" }}>
        <h2 style={{ fontFamily: "manrope" }}>Let employers know who you are</h2>
        <p style={{ fontFamily: "manrope" }}>
          Enter your personal information for employers to contact you
        </p>
      </div>

      <Form
        layout="vertical"
        initialValues={data}
        onValuesChange={(_, values) => handleChange(values)}
      >
        <Form.Item
          label={<span style={{ fontFamily: "manrope" }}>Full Name</span>}
          name="fullName"
        >
          <Input
            style={{ fontFamily: "manrope" }}
            placeholder="Enter your full name"
          />
        </Form.Item>

        <Form.Item
          label={<span style={{ fontFamily: "manrope" }}>Email</span>}
          name="email"
        >
          <Input
            type="email"
            style={{ fontFamily: "manrope" }}
            placeholder="Enter your email here"
          />
        </Form.Item>

        <Form.Item
          label={<span style={{ fontFamily: "manrope" }}>Phone Number</span>}
          name="phone"
        >
          <Input
            style={{ fontFamily: "manrope" }}
            placeholder="+1 XXX XXX XXXX"
          />
        </Form.Item>

        <Form.Item
          label={<span style={{ fontFamily: "manrope" }}>Location</span>}
          name="location"
        >
          <Input
            style={{ fontFamily: "manrope" }}
            placeholder="City, Country"
          />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProfileForm;
