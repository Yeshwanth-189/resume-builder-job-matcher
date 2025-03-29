import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillMatchGauge = ({ percentage }) => {
  return (
    <div style={{ width: 120, height: 120 , marginBottom:60, paddingLeft:'50px', paddingTop:'50px', fontFamily:'manrope'}}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: '#333',
          pathColor: percentage > 75 ? '#52c41a' : percentage > 50 ? '#1890ff' : '#faad14',
          trailColor: '#e6f7ff',
          textSize: '18px',
          pathTransitionDuration: 1.5,
          fontFamily: 'manrope',
        })}
      />
    </div>
  );
};

export default SkillMatchGauge;
