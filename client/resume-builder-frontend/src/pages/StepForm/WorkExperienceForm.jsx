import React from "react";
import { Input, Button, Space, Card } from "antd";

const WorkExperienceForm = ({ data, onChange }) => {
  const handleAdd = () => {
    onChange([...data, { company: "", role: "", duration: "" }]);
  };

  const handleChange = (index, key, value) => {
    const newData = [...data];
    newData[index][key] = value;
    onChange(newData);
  };

  const handleRemove = (index) => {
    const newData = data.filter((_, i) => i !== index);
    onChange(newData);
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
        <h2 style={{ fontFamily: 'manrope' }}>Tell us about your work</h2>
        <p style={{ fontFamily: 'manrope' }}>Let hiring managers know where you worked</p>
      </div>

      {data.map((item, index) => (
        <Space
          key={index}
          direction="vertical"
          style={{
            display: "block",
            marginBottom: 24,
            padding: 16,
            border: "1px solid #f0f0f0",
            borderRadius: 8,
            background: "#fafafa",
          }}
        >
          <Input
            placeholder="Enter employer name"
            value={item.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
            style={{ fontFamily: 'manrope' }}
          />
          <Input
            placeholder="Enter your job title here"
            value={item.role}
            onChange={(e) => handleChange(index, "role", e.target.value)}
            style={{ fontFamily: 'manrope' }}
          />
          <Input
            placeholder="Enter your job duration"
            value={item.duration}
            onChange={(e) => handleChange(index, "duration", e.target.value)}
            style={{ fontFamily: 'manrope' }}
          />
          <Button danger onClick={() => handleRemove(index)}>
            Remove
          </Button>
        </Space>
      ))}

      <Button
        type="dashed"
        onClick={handleAdd}
        style={{
          fontFamily: 'manrope',
          marginLeft: '5%',
          marginTop: '10%',
          height: 60,
          width: 180,
        }}
      >
        + Add Experience
      </Button>
    </Card>
  );
};

export default WorkExperienceForm;
