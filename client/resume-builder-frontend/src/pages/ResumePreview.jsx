import React from "react";
import html2pdf from "html2pdf.js";
import { Layout, Steps, Button, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import AnimatedDivider from "./StepForm/AnimateDivider";

const ResumePreview = ({ data }) => {
  const { profile, experience, education, skills, additional } = data;

  const handleDownload = () => {
    const element = document.getElementById("resume-preview");
    const opt = {
      margin:       0,
      filename:     "My_Resume.pdf",
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };
  

  return (
    <>
    <div 
      style={{
        background: "#fff",
        padding: "40px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        minHeight: "600px",
        maxHeight: '600px',
        fontFamily: "manrope",
        fontSize: "8px",
        boxSizing: "border-box",      // ✅ allow wrapping of long strings
        wordBreak: "break-word",      // ✅ force break if needed
        whiteSpace: "pre-wrap",
        overflowWrap: "anywhere",

      }}
    >
      <div id="resume-preview" style={{
        background: "#fff",
        padding: "40px",
        borderRadius: "8px",
        fontFamily: "manrope",
      }}>
      {profile.fullName && (
        <div style={{ marginBottom: 20 }}>
          <h1>{profile.fullName}</h1>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
          <p>{profile.location}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <h2>Work Experience</h2>
          {<AnimatedDivider/>}
          {experience.map((item, idx) => (
            <div key={idx}>
              <strong>{item.role}</strong> at <em>{item.company}</em>
              <p>{item.duration}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <h2>Education</h2>
          {<AnimatedDivider/>}
          {education.map((item, idx) => (
            <div key={idx}>
              <strong>{item.degree}</strong> from <em>{item.institution}</em>
              <p>GPA : {item.GPA}</p>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <h2>Skills</h2>
          {<AnimatedDivider/>}
          <p>{skills.join(", ")}</p>
        </div>
      )}

      {additional.notes && (
        <div>
          <h2>Accomplishments</h2>
          {<AnimatedDivider/>}
          <p>{additional.notes}</p>
        </div>
      )}
      </div>
    </div>
    <Button type="primary" icon={<DownloadOutlined/>} onClick={handleDownload} style={{ marginTop: 16 , fontFamily: 'manrope' , marginLeft: '40%'}}>
      Download
    </Button>
    </>
    
  );
};

export default ResumePreview;
