import React from 'react';
import './Sidebar.css';
import '../Button/Button.css';
import heartLogo from './assets/heart.png';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className='sidebar'>
      <img src={heartLogo} alt="Logo" className="logo" />
      {children}
    </aside>
  );
};

export default Sidebar;