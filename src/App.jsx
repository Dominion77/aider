import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { AuthProvider } from './components/contexts/AuthProvider';
import { useAuth } from '../src/components/contexts/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import MedicalStore from './components/MedicalStore';
import BookingSystem from './components/BookingSystem';
import SurgeryAssistant from './components/SurgeryAssistant';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Profile from './components/Profile';
import Navbar from './components/NavBar';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }

  body {
    background: linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%);
    color: #2a4365;
    min-height: 100vh;
    overflow-x: hidden;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .glass {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .btn-primary {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  margin-top: 80px;
  margin-bottom: 60px;
  animation: fadeIn 0.5s ease-out;

  @media (max-width: 768px) {
    margin-top: 70px;
    padding: 15px;
  }
`;

// Simple 404 Component
const NotFound = () => (
  <div style={{ 
    textAlign: 'center', 
    padding: '100px 20px',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
    <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#2563eb' }}>404 - Page Not Found</h1>
    <p style={{ fontSize: '18px', marginBottom: '30px' }}>
      The page you're looking for doesn't exist or has been moved.
    </p>
    <Link to="/" className="btn-primary">Return to Home</Link>
  </div>
);

// Component to redirect after login
const AuthRedirect = () => {
  const { currentUser } = useAuth();
  
  return currentUser ? <Navigate to="/app" /> : <Navigate to="/" />;
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <Helmet>
          <title>Aider - Your Complete Medical Companion</title>
          <meta name="description" content="Aider combines medical supplies, doctor bookings, and surgical assistance in one seamless platform." />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyle />
        <AppContainer>
          <Navbar setSidebarOpen={setSidebarOpen} />
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <MainContent>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              
              {/* Protected app routes */}
              <Route path="/app" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } />
              
              <Route path="/store" element={
                <ProtectedRoute>
                  <MedicalStore />
                </ProtectedRoute>
              } />
              
              <Route path="/booking" element={
                <ProtectedRoute>
                  <BookingSystem />
                </ProtectedRoute>
              } />
              
              <Route path="/surgery-assistant" element={
                <ProtectedRoute>
                  <SurgeryAssistant />
                </ProtectedRoute>
              } />
              
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              
              {/* Redirects */}
              <Route path="/dashboard" element={<AuthRedirect />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </AuthProvider>
    </Router>
  );
}

export default App;