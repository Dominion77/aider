import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { 
  FiMenu, FiShoppingCart, FiCalendar, FiScissors, FiHome, 
  FiUser, FiLogIn, FiLogOut, FiSettings, FiHelpCircle, 
  FiX, FiChevronDown, FiPlusCircle, FiUserPlus
} from 'react-icons/fi';
import { useAuth } from '../components/contexts/useAuth';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 1000;
  border-bottom: 1px solid rgba(59, 130, 246, 0.1);

  @media (max-width: 768px) {
    padding: 0 15px;
    height: 70px;
  }
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: #2563eb;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  
  span {
    background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 15px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #2a4365;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  position: relative;

  &:hover {
    color: #2563eb;
    background: rgba(59, 130, 246, 0.1);
  }

  &.active {
    color: #2563eb;
    font-weight: 600;
  }
  
  .notification-badge {
    position: absolute;
    top: 0;
    right: 0;
    background: #ef4444;
    color: white;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    transform: translate(25%, -25%);
  }
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const SecondaryButton = styled(Link)`
  background: rgba(255, 255, 255, 0.15);
  color: #2563eb;
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: translateY(-3px);
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #2a4365;
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const UserDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(59, 130, 246, 0.1);
  }

  .user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 10px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  min-width: 220px;
  overflow: hidden;
  z-index: 100;
  animation: fadeIn 0.3s ease-out;
  transform-origin: top right;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

const DropdownHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  .user-name {
    font-weight: 600;
    margin-bottom: 4px;
    color: #1e293b;
  }
  
  .user-email {
    font-size: 14px;
    color: #64748b;
  }
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  text-decoration: none;
  color: #334155;
  font-size: 15px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    color: #2563eb;
  }
  
  &.logout {
    color: #ef4444;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    
    &:hover {
      background: #fee2e2;
    }
  }
`;

const Navbar = ({ setSidebarOpen }) => {
  const { currentUser, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
    setShowDropdown(false);
  };

  const userInitials = currentUser 
    ? currentUser.email.split('@')[0].substring(0, 2).toUpperCase() 
    : '';

  return (
    <NavbarContainer className="glass">
      <Logo to={currentUser ? "/app" : "/"}>
        <span>Aider</span>
      </Logo>

      <NavItems>
        {currentUser ? (
          <>
            <NavLink to="/app">
              <FiHome /> Dashboard
            </NavLink>
            <NavLink to="/store">
              <FiShoppingCart /> Store
            </NavLink>
            <NavLink to="/booking">
              <FiCalendar /> Bookings
            </NavLink>
            <NavLink to="/surgery-assistant">
              <FiScissors /> Surgery
            </NavLink>
            
            <UserDropdown>
              <DropdownToggle onClick={() => setShowDropdown(!showDropdown)}>
                <div className="user-avatar">
                  {userInitials}
                </div>
                <FiChevronDown />
              </DropdownToggle>
              
              {showDropdown && (
                <DropdownMenu>
                  <DropdownHeader>
                    <div className="user-name">
                      {currentUser.email.split('@')[0]}
                    </div>
                    <div className="user-email">
                      {currentUser.email}
                    </div>
                  </DropdownHeader>
                  
                  <DropdownItem to="/profile" onClick={() => setShowDropdown(false)}>
                    <FiUser /> My Profile
                  </DropdownItem>
                  
                  <DropdownItem to="/settings" onClick={() => setShowDropdown(false)}>
                    <FiSettings /> Account Settings
                  </DropdownItem>
                  
                  <DropdownItem to="/help" onClick={() => setShowDropdown(false)}>
                    <FiHelpCircle /> Help Center
                  </DropdownItem>
                  
                  <DropdownItem 
                    as="button" 
                    onClick={handleLogout}
                    className="logout"
                  >
                    <FiLogOut /> Log Out
                  </DropdownItem>
                </DropdownMenu>
              )}
            </UserDropdown>
          </>
        ) : (
          <>
            <NavLink to="/#features">Features</NavLink>
            <NavLink to="/#benefits">Benefits</NavLink>
            <NavLink to="/#pricing">Pricing</NavLink>
            
            <SecondaryButton to="/login">
              <FiLogIn /> Login
            </SecondaryButton>
            
            <PrimaryButton to="/signup">
              <FiUserPlus /> Sign Up
            </PrimaryButton>
          </>
        )}
      </NavItems>

      <MobileMenuButton onClick={() => setSidebarOpen(true)}>
        <FiMenu />
      </MobileMenuButton>
    </NavbarContainer>
  );
};

export default Navbar;