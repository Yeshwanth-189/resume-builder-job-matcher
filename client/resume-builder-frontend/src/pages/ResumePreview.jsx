import React from "react";
import html2pdf from "html2pdf.js";
import { Layout, Steps, Button, Space } from "antd";

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
    <Button type="primary" onClick={handleDownload} style={{ marginBottom: 16 }}>
      Download PDF
    </Button>

    <div
      style={{
        background: "#fff",
        padding: "40px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        minHeight: "100%",
        width: "100%",
        fontFamily: "manrope",
      }}
    >
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
          {experience.map((item, idx) => (
            <div key={idx}>
              <strong>{item.role}</strong> at <em>{item.company}</em>
              <p>{item.duration}</p>
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <h2>Education</h2>
          {education.map((item, idx) => (
            <div key={idx}>
              <strong>{item.degree}</strong> from <em>{item.institution}</em>
              <p>{item.year}</p>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <h2>Skills</h2>
          <p>{skills.join(", ")}</p>
        </div>
      )}

      {additional.notes && (
        <div>
          <h2>Additional Info</h2>
          <p>{additional.notes}</p>
        </div>
      )}
    </div>
    </>
    
  );
};

export default ResumePreview;
