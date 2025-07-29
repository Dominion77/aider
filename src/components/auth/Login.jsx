// src/components/auth/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../contexts/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Error = styled.div`
  color: #ef4444;
  margin-top: 1rem;
`;


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/app');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <SignUpContainer className="glass">
      <h2>Log In</h2>
      {error && <Error>{error}</Error>}
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button disabled={loading} type="submit">
          Log In
        </Button>
      </Form>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </SignUpContainer>
  );
}