import React from 'react';
import styled from 'styled-components';
import { useAuth } from './contexts/useAuth';
import { FiUser, FiMail, FiShield, FiCalendar } from 'react-icons/fi';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 32px;
    color: #2563eb;
    margin-bottom: 10px;
  }
  
  p {
    color: #64748b;
  }
`;

const UserAvatar = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: bold;
`;

const ProfileInfo = styled.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 30px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #e2e8f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  .icon {
    width: 50px;
    height: 50px;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3b82f6;
    font-size: 24px;
  }
  
  .info-content {
    flex: 1;
    
    h3 {
      font-size: 18px;
      margin-bottom: 5px;
      color: #1e293b;
    }
    
    p {
      color: #64748b;
    }
  }
`;

const Profile = () => {
  const { currentUser } = useAuth();
  
  // Get user initials for avatar
  const userInitials = currentUser 
    ? currentUser.email.split('@')[0].substring(0, 2).toUpperCase() 
    : '';
  
  // Format account creation date
  const accountCreated = currentUser?.metadata.creationTime
    ? new Date(currentUser.metadata.creationTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'Unknown';

  return (
    <ProfileContainer className="glass">
      <ProfileHeader>
        <UserAvatar>
          {userInitials}
        </UserAvatar>
        <h1>Your Profile</h1>
        <p>Manage your account information</p>
      </ProfileHeader>
      
      <ProfileInfo>
        <InfoItem>
          <div className="icon">
            <FiUser />
          </div>
          <div className="info-content">
            <h3>Account Name</h3>
            <p>{currentUser?.email.split('@')[0]}</p>
          </div>
        </InfoItem>
        
        <InfoItem>
          <div className="icon">
            <FiMail />
          </div>
          <div className="info-content">
            <h3>Email Address</h3>
            <p>{currentUser?.email}</p>
          </div>
        </InfoItem>
        
        <InfoItem>
          <div className="icon">
            <FiShield />
          </div>
          <div className="info-content">
            <h3>Account Security</h3>
            <p>Password protected • Two-factor authentication available</p>
          </div>
        </InfoItem>
        
        <InfoItem>
          <div className="icon">
            <FiCalendar />
          </div>
          <div className="info-content">
            <h3>Account Created</h3>
            <p>{accountCreated}</p>
          </div>
        </InfoItem>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default Profile;