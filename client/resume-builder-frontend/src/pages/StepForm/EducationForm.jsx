import React from "react";
import { Input, Button, Space, Card } from "antd";

const EducationForm = ({ data, onChange }) => {
  const handleAdd = () => {
    onChange([...data, { institution: "", degree: "", GPA: "" }]);
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
        <h2 style={{ fontFamily: "manrope" }}>Tell us about your education</h2>
        <p style={{ fontFamily: "manrope" }}>
          Include all the schools you graduated or will be graduating from
        </p>
      </div>

      {data.map((item, index) => (
        <Space
          key={index}
          direction="vertical"
          style={{
            display: "block",
            marginBottom: 24,
            padding: 24,
            borderRadius: 8,
          }}
        >
           <span style={{ fontFamily: 'manrope', fontSize: 13, fontWeight: 600 }}>Institution</span>
          <Input
            placeholder="Enter Institution name"
            value={item.institution}
            onChange={(e) => handleChange(index, "institution", e.target.value)}
            style={{ fontFamily: 'manrope', paddingTop: 10, paddingBottom: 10 ,marginBottom: 10}}
          />
          <span style={{ fontFamily: 'manrope', fontSize: 13, fontWeight: 600 }}>Degree</span>
          <Input
            placeholder="Enter your degree here"
            value={item.degree}
            onChange={(e) => handleChange(index, "degree", e.target.value)}
            style={{ fontFamily: 'manrope', paddingTop: 10, paddingBottom: 10 ,marginBottom: 10}}
          />
          <span style={{ fontFamily: 'manrope', fontSize: 13, fontWeight: 600 }}>GPA</span>
          <Input
            placeholder="Enter your GPA"
            value={item.GPA}
            onChange={(e) => handleChange(index, "GPA", e.target.value)}
            style={{ fontFamily: 'manrope', paddingTop: 10, paddingBottom: 10 ,marginBottom: 20}}
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
          fontFamily: "manrope",
          marginLeft: "5%",
          marginTop: "10%",
          height: 60,
          width: 180,
        }}
      >
        + Add Education
      </Button>
    </Card>
  );
};

export default EducationForm;
