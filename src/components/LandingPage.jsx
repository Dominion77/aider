import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiCalendar, FiScissors, FiCheck, FiArrowRight, FiUser, FiLogIn } from 'react-icons/fi';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.1;
  }

  h1 {
    font-size: 64px;
    margin-bottom: 20px;
    font-weight: 800;
    position: relative;
    z-index: 2;
    animation: ${fadeIn} 0.8s ease-out;
    
    span {
      background: linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    font-size: 22px;
    max-width: 700px;
    margin: 0 auto 40px;
    line-height: 1.6;
    position: relative;
    z-index: 2;
    animation: ${fadeIn} 0.8s ease-out 0.2s;
    animation-fill-mode: both;
  }

  @media (max-width: 768px) {
    padding: 80px 15px;
    
    h1 {
      font-size: 40px;
    }
    
    p {
      font-size: 18px;
    }
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 0.8s ease-out 0.4s;
  animation-fill-mode: both;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  background: white;
  color: #2563eb;
  border: none;
  padding: 16px 32px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(Link)`
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 16px 32px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-5px);
  }
`;

const AppPreview = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 0.8s ease-out 0.6s, ${pulse} 8s ease-in-out infinite;
  animation-fill-mode: both;
  
  img {
    width: 100%;
    display: block;
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  color: #1e40af;
  margin-bottom: 20px;
  font-weight: 700;
  
  span {
    color: #3b82f6;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 18px;
  color: #4b5563;
  max-width: 700px;
  margin: 0 auto 60px;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.8s ease-out;
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

  .icon {
    font-size: 48px;
    color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto 30px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 15px;
    color: #1e293b;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #4b5563;
  }
`;

const BenefitsSection = styled.section`
  padding: 100px 20px;
  background: white;
`;

const BenefitsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const BenefitList = styled.ul`
  list-style: none;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 16px;
  background: rgba(59, 130, 246, 0.05);
  animation: ${fadeIn} 0.8s ease-out;
  animation-fill-mode: both;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }

  .icon {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
    min-width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #1e293b;
  }

  p {
    font-size: 16px;
    color: #4b5563;
    line-height: 1.6;
  }
`;

const CtaSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  color: white;
  text-align: center;
`;

const LandingPage = () => {
  return (
    <div>
      <HeroSection>
        <h1>Revolutionizing <span>Medical Care</span> in the 21st Century</h1>
        <p>Aider combines medical supplies, doctor bookings, and surgical assistance in one seamless platform designed for modern healthcare professionals.</p>
        
        <CTAButtons>
          <PrimaryButton to="/signup">
            <FiUser /> Get Started
          </PrimaryButton>
          <SecondaryButton to="/login">
            <FiLogIn /> Log In
          </SecondaryButton>
        </CTAButtons>
        
        <AppPreview>
          <div style={{
            background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%)',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2563eb',
            fontSize: '24px'
            }}>
            <img 
              src="/images/landing2.jpg" 
              alt="" 
              className="app-image"
              loading="lazy"
            />
      
          
          </div>
        </AppPreview>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Your Complete <span>Medical Companion</span></SectionTitle>
        <SectionSubtitle>Aider brings together everything you need for efficient medical practice in one intuitive platform.</SectionSubtitle>
        
        <FeaturesGrid>
          <FeatureCard className="glass">
            <div className="icon">
              <FiShoppingCart />
            </div>
            <h3>Medical Store</h3>
            <p>Purchase high-quality medical supplies and equipment with just a few taps. Fast delivery and premium products curated by healthcare professionals.</p>
            <PrimaryButton to="/signup" style={{ padding: '12px 24px', fontSize: '16px' }}>
              Browse Supplies <FiArrowRight />
            </PrimaryButton>
          </FeatureCard>
          
          <FeatureCard className="glass">
            <div className="icon">
              <FiCalendar />
            </div>
            <h3>Doctor Booking</h3>
            <p>Find and book appointments with top-rated medical professionals. View profiles, specialties, and availability in real-time.</p>
            <PrimaryButton to="/signup" style={{ padding: '12px 24px', fontSize: '16px' }}>
              Find Doctors <FiArrowRight />
            </PrimaryButton>
          </FeatureCard>
          
          <FeatureCard className="glass">
            <div className="icon">
              <FiScissors />
            </div>
            <h3>Surgery Assistant</h3>
            <p>Advanced real-time support during surgical procedures with AI-powered assistance(coming soon) and critical information at your fingertips.</p>
            <PrimaryButton to="/signup" style={{ padding: '12px 24px', fontSize: '16px' }}>
              Open <FiArrowRight />
            </PrimaryButton>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <BenefitsSection>
        <SectionTitle>Why Choose <span>Aider?</span></SectionTitle>
        <SectionSubtitle>Designed for healthcare professionals by healthcare professionals</SectionSubtitle>
        
        <BenefitsContainer>
          <BenefitList>
            <BenefitItem>
              <div className="icon">
                <FiCheck />
              </div>
              <div>
                <h3>All-in-One Solution</h3>
                <p>No more switching between multiple apps. Aider combines everything you need in one seamless platform.</p>
              </div>
            </BenefitItem>
            
            <BenefitItem>
              <div className="icon">
                <FiCheck />
              </div>
              <div>
                <h3>HIPAA Compliant</h3>
                <p>All data is securely encrypted and stored with healthcare compliance standards in mind.</p>
              </div>
            </BenefitItem>
            
            <BenefitItem>
              <div className="icon">
                <FiCheck />
              </div>
              <div>
                <h3>Time Saving</h3>
                <p>Reduce administrative tasks by up to 70% with our streamlined workflows and automation.</p>
              </div>
            </BenefitItem>
            
            <BenefitItem>
              <div className="icon">
                <FiCheck />
              </div>
              <div>
                <h3>Real-time Updates</h3>
                <p>Get instant notifications about appointment changes, supply deliveries, and critical updates.</p>
              </div>
            </BenefitItem>
            
            <BenefitItem>
              <div className="icon">
                <FiCheck />
              </div>
              <div>
                <h3>Designed for Professionals</h3>
                <p>Created with input from doctors, nurses, and medical staff to solve real-world challenges.</p>
              </div>
            </BenefitItem>
          </BenefitList>
        </BenefitsContainer>
      </BenefitsSection>

      <CtaSection>
        <SectionTitle style={{ color: 'white' }}>Ready to Transform Your Practice?</SectionTitle>
        <SectionSubtitle style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '40px' }}>
          Join thousands of medical professionals already using Aider to streamline their workflow.
        </SectionSubtitle>
        
        <CTAButtons>
          <PrimaryButton to="/signup" style={{ background: 'white', color: '#2563eb' }}>
            <FiUser /> Sign Up Free
          </PrimaryButton>
          <SecondaryButton to="/login">
            <FiLogIn /> Log In
          </SecondaryButton>
        </CTAButtons>
      </CtaSection>
    </div>
  );
};

export default LandingPage;