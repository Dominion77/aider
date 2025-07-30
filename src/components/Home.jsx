import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiCalendar, FiScissors } from 'react-icons/fi';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  color: white;
  padding: 80px 20px;
  border-radius: 24px;
  text-align: center;
  margin-bottom: 40px;
  animation: fadeIn 0.8s ease-out;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 700;
  }

  a{
     text-decoration: none
  }

  p {
    font-size: 18px;
    max-width: 700px;
    margin: 0 auto 30px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 60px 15px;
    
    h1 {
      font-size: 32px;
    }
    
    p {
      font-size: 16px;
    }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const FeatureCard = styled(Link)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #2a4365;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  animation: slideUp 0.5s ease-out;
  animation-fill-mode: both;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 24px;
    margin: 20px 0 15px;
    color: #2563eb;
  }

  a{
     text-decoration: none;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .icon {
    font-size: 40px;
    color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto;
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection className="glass">
        <h1>Welcome to Aider</h1>
        <p>Your complete medical companion - combining medical supplies, doctor bookings, and surgical assistance in one seamless platform.</p>
        <Link to="/store" className="btn-primary" style={{ background: 'white', color: '#2563eb' }}>Get Started</Link>
      </HeroSection>

      <FeaturesGrid>
        <FeatureCard>
          <div className="icon">
            <FiShoppingCart />
          </div>
          <h2>Medical Store</h2>
          <p>Purchase high-quality, safe medical supplies and equipment with just a few taps. Fast delivery and premium products.</p>
          <Link to="/store" className="btn-primary">Browse Store</Link>
        </FeatureCard>

        <FeatureCard>
          <div className="icon">
            <FiCalendar />
          </div>
          <h2>Doctor Booking</h2>
          <p>Find and book appointments with top-rated medical professionals. View profiles, specialties, and availability in real-time.</p>
          <Link to="/booking" className="btn-primary">Find Doctors</Link>
        </FeatureCard>

        <FeatureCard>
          <div className="icon">
            <FiScissors />
          </div>
          <h2>Surgery Assistant</h2>
          <p>Advanced real-time support during surgical procedures with AI-powered assistance(coming soon) and critical information at your fingertips.</p>
          <Link to="/surgery-assistant" className="btn-primary">Open</Link>
        </FeatureCard>
      </FeaturesGrid>
    </>
  );
};

export default Home;
