import React from "react";
import { Input, Tag, Card } from "antd";

const SkillsForm = ({ data, onChange }) => {
  const [inputValue, setInputValue] = React.useState("");

  const addSkill = () => {
    const normalized = inputValue.trim();
    if (!normalized) return;

    const capitalized = normalized.charAt(0).toUpperCase() + normalized.slice(1);

    // Check for case-insensitive duplicate
    const exists = data.some(skill => skill.toLowerCase() === capitalized.toLowerCase());

    if (!exists) {
      onChange([...data, capitalized]);
    }
    setInputValue("");
  };

  const removeSkill = (removedSkill) => {
    onChange(data.filter((skill) => skill !== removedSkill));
  };

  return (
    <div>
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
          <h2 style={{ fontFamily: 'manrope' }}>Tell us about your core skills</h2>
          <p style={{ fontFamily: 'manrope' }}>
            Press Enter after each skill to add it to the list of professional skills
          </p>
        </div>

        <div style={{ marginBottom: 16 }}>
          {data.map((skill, index) => (
            <Tag
              key={index}
              closable
              onClose={() => removeSkill(skill)}
              style={{ marginBottom: 4, fontSize: 14 }}
            >
              {skill}
            </Tag>
          ))}
        </div>

        <Input
          placeholder="Add a skill and press Enter"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={(e) => {
            e.preventDefault();
            addSkill();
          }}
          style={{ fontFamily: 'manrope' }}
        />
      </Card>
    </div>
  );
};

export default SkillsForm;
