import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiX, FiShoppingCart, FiCalendar, FiScissors, FiHome } from 'react-icons/fi';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ sidebarOpen }) => (sidebarOpen ? '0' : '-100%')};
  width: 280px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: #2a4365;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 30px;
`;

const SidebarLink = styled(Link)`
  color: #2a4365;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  padding: 15px 20px;
  border-radius: 12px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.1);
    color: #2563eb;
    transform: translateX(5px);
  }
`;

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <SidebarContainer sidebarOpen={sidebarOpen}>
      <CloseButton onClick={() => setSidebarOpen(false)}>
        <FiX />
      </CloseButton>

      <SidebarLink to="/" onClick={() => setSidebarOpen(false)}>
        <FiHome /> Home
      </SidebarLink>
      <SidebarLink to="/store" onClick={() => setSidebarOpen(false)}>
        <FiShoppingCart /> Medical Store
      </SidebarLink>
      <SidebarLink to="/booking" onClick={() => setSidebarOpen(false)}>
        <FiCalendar /> Book Doctor
      </SidebarLink>
      <SidebarLink to="/surgery-assistant" onClick={() => setSidebarOpen(false)}>
        <FiScissors /> Surgery Assistant
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;