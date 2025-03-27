import React from 'react';
import '../common/Logo.css';
import LogoIcon from '../../assets/icons/ResumeCraftLogoFinal.png';

const Logo = () => {
  return (
    <img src={LogoIcon} className='logo' alt="Logo" />
  );
};

export default Logo;
