import React from "react";
import { Input, Button, Space, Card } from "antd";

const WorkExperienceForm = ({ data, onChange }) => {
  const handleAdd = () => {
    onChange([...data, { company: "", role: "", duration: "", description: "" }]);
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
            paddingTop: 24,
            borderRadius: 8,
          }}
        >
          <span style={{ fontFamily: 'manrope', fontSize: 13, fontWeight: 600 }}>Employer</span>
          <Input
            placeholder="Enter employer name"
            value={item.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
            style={{ fontFamily: 'manrope', paddingTop: 10, paddingBottom: 10 ,marginBottom: 10}}    
          />
          <span style={{ fontFamily: 'manrope', fontSize: 13, fontWeight: 600 }}>Job Title</span>
          <Input
            placeholder="Enter your job title here"
            value={item.role}
            onChange={(e) => handleChange(index, "role", e.target.value)}
            style={{ fontFamily: 'manrope', paddingTop: 10, paddingBottom: 10 ,marginBottom: 10 }}
          />
          <span style={{ fontFamily: 'manrope', fontSize: 13, fontWeight: 600 }}>Job Duration</span>
          <Input
            placeholder="Enter your job duration"
            value={item.duration}
            onChange={(e) => handleChange(index, "duration", e.target.value)}
            style={{ fontFamily: 'manrope', paddingTop: 10, paddingBottom: 10 ,marginBottom: 10 }}
          />
          <span style={{ fontFamily: 'manrope', fontSize: 13, fontWeight: 600 }}>Job Description</span>
          <Input.TextArea style={{ fontFamily: 'manrope' , paddingTop: 10, paddingBottom: 10 ,marginBottom: 20  }} rows={4} placeholder="Enter your job description" value={item.description}
            onChange={(e) => handleChange(index, "description", e.target.value)} />
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
