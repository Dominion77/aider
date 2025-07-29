import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
  color: white;
  padding: 40px 20px;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 600;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 12px;
  }

  a {
    color: #e2e8f0;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 15px;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 14px;
  color: #cbd5e1;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>Aider</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
            Your complete medical companion - combining medical supplies, doctor bookings, and surgical assistance in one seamless platform.
          </p>
          <SocialLinks>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiFacebook /></a>
            <a href="#"><FiInstagram /></a>
            <a href="#"><FiLinkedin /></a>
          </SocialLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/store">Medical Store</Link></li>
            <li><Link to="/booking">Doctor Booking</Link></li>
            <li><Link to="/surgery-assistant">Surgery Assistant</Link></li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
            <li><Link to="/security">Security</Link></li>
          </ul>
        </FooterColumn>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Aider Medical Technologies. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;