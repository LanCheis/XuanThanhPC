import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import InputField from '../../components/auth/InputField';
import PasswordInput from '../../components/auth/PasswordInput';
import SocialLoginButtons from '../../components/auth/SocialLoginButtons';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate('/profile');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Log in to your account to continue">
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <div className="error-message" style={{color: 'red', textAlign: 'center', marginBottom: '1rem', fontWeight: 500}}>{error}</div>}
        
        <InputField 
          label="Username" 
          name="username" 
          value={credentials.username} 
          onChange={handleChange} 
          placeholder="Enter your username"
          required 
        />
        
        <PasswordInput 
          label="Password" 
          name="password" 
          value={credentials.password} 
          onChange={handleChange} 
          placeholder="Enter your password"
          required 
          showStrength={false}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/forgot-password" style={{ fontSize: '0.875rem', color: '#1E88E5', textDecoration: 'none', fontWeight: 600 }}>Forgot password?</Link>
        </div>

        <button type="submit" className="btn-submit">Log In</button>
      </form>

      <SocialLoginButtons />

      <div className="auth-links">
        Don't have an account? <Link to="/register">Create one now</Link>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
