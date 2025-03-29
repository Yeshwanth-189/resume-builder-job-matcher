import React from 'react';
import '../common/Logo.css';
import LogoIcon from '../../assets/icons/Transparent.png';

const Logo = () => {
  return (
    <img src={LogoIcon} className='logo' alt="Logo" />
  );
};

export default Logo;
