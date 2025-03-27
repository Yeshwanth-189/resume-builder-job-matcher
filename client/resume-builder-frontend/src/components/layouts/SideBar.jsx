import React from 'react';
import { Col, Layout, Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../store/slices/uiSlices';
import expandIcon from '../../assets/icons/expand.png';
import collapseIcon from '../../assets/icons/collapse.png';
import dashboardIcon from '../../assets/icons/Dashboard.png';
import resumeIcon from '../../assets/icons/ResumeIcon.png';
import historyIcon from '../../assets/icons/history.png';
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
    },
    {
      key: '2',
      icon: <img src={resumeIcon} alt="Resume Builder" className="menu-icon" />,
      label: 'Resume Builder',
    },
    {
      key: '3',
      icon: <img src={historyIcon} alt="Scan History" className="menu-icon" />,
      label: 'Scan History',
    },
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
        <div className="font-manrope custom-sidebar-trigger" style={{ backgroundColor: '#2e85ff', borderRadius: '5px' }} onClick={() => dispatch(toggleSidebar(!collapsed))}>
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
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>
    </Col>
  );
};

export default Sidebar;
