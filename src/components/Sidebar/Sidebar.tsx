import React from 'react';
import './Sidebar.css';
import '../Button/Button.css';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className='sidebar'>
      <img src="path/to/logo.png" alt="Logo" className="logo" />
      {children}
    </aside>
  );
};

export default Sidebar;