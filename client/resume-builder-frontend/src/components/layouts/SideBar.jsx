import React from 'react';
import { Col, Layout, Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../store/slices/uiSlices';
import expandIcon from '../../assets/icons/expand.png';
import collapseIcon from '../../assets/icons/collapse.png';
import dashboardIcon from '../../assets/icons/Dashboard.png';
import resumeIcon from '../../assets/icons/ResumeIcon.png';
import historyIcon from '../../assets/icons/history.png';
import ParserIcon from '../../assets/icons/Parser.png';
import JobsIcon from '../../assets/icons/Jobs.png';
import PrivacyIcon from '../../assets/icons/Privacy.png';
import SettingsIcon from '../../assets/icons/Settings.png';
import HelpIcon from '../../assets/icons/Help.png';
import './Sidebar.css';

const { Sider } = Layout;

const Sidebar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.ui.sidebarCollapsed);

  const menuItems = [
    {
      key: '1',
      icon: <img src={dashboardIcon} alt="Dashboard" className="menu-icon" />,
      label: 'Dashboard',
      onClick: () => {
        window.location.href = '/dashboard';
      },
    },
    {
      key: '2',
      icon: <img src={resumeIcon} alt="Resume Builder" className="menu-icon" />,
      label: 'Resume Builder',
      onClick: () => {
        window.location.href = '/resume-builder';
      },
    },
    {
      key: '3',
      icon: <img src={historyIcon} alt="Scan History" className="menu-icon" />,
      label: 'History',
      onClick: () => {
        window.location.href = '/history';
      },
    },
    {
      key: '4',
      icon: <img src={ParserIcon} alt="Scan History" className="menu-icon" />,
      label: 'Resume Parser',
      onClick: () => {
        window.location.href = '/history';
      },
    },
    {
      key: '5',
      icon: <img src={JobsIcon} alt="Scan History" className="menu-icon" />,
      label: 'Find Jobs',
      onClick: () => {
        window.location.href = '/history';
      },
    },
    {
      key: '6',
      icon: <img src={PrivacyIcon} alt="Scan History" className="menu-icon" />,
      label: 'Privacy Policy',
      onClick: () => {
        window.location.href = '/history';
      },
    },
    {
      key: '7',
      icon: <img src={SettingsIcon} alt="Scan History" className="menu-icon" />,
      label: 'Settings',
      onClick: () => {
        window.location.href = '/history';
      },
    },
    {
      key: '8',
      icon: <img src={HelpIcon} alt="Scan History" className="menu-icon" />,
      label: 'Help',
      onClick: () => {
        window.location.href = '/history';
      },
    }
  ];

  return (
    <Col className="sidebar-sider">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(val) => dispatch(toggleSidebar(val))}
        className="font-manrope sidebar-sider"
        trigger={null}
        width={200}
        collapsedWidth={80}
      >
        <div className="font-manrope custom-sidebar-trigger" style={{ backgroundColor: '#1677FF'}} onClick={() => dispatch(toggleSidebar(!collapsed))}>
          <img
            src={collapsed ? expandIcon : collapseIcon}
            alt="Toggle Sidebar"
            className="trigger-icon"
          />
        </div>

        <Menu
          theme="light"
          mode="inline"
          className="sidebar-menu"
          items={menuItems}
        />
      </Sider>
    </Col>
  );
};

export default Sidebar;
