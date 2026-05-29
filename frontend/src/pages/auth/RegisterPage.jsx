import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import InputField from '../../components/auth/InputField';
import PasswordInput from '../../components/auth/PasswordInput';
import * as authService from '../../services/authService';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', password_confirm: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirm) {
      setError('Passwords do not match');
      return;
    }
    try {
      await authService.register(formData);
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please check your details.');
    }
  };

  return (
    <AuthLayout title="Create Account" subtitle="Join Xuan Thanh Computer today">
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <div className="error-message" style={{color: 'red', textAlign: 'center', marginBottom: '1rem', fontWeight: 500}}>{error}</div>}
        
        <InputField 
          label="Username" 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
          placeholder="Choose a username"
          required 
        />
        
        <InputField 
          label="Email Address" 
          type="email"
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="you@example.com"
          required 
        />
        
        <PasswordInput 
          label="Password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          placeholder="Create a strong password"
          required 
          showStrength={true}
        />
        
        <PasswordInput 
          label="Confirm Password" 
          name="password_confirm" 
          value={formData.password_confirm} 
          onChange={handleChange} 
          placeholder="Confirm your password"
          required 
          showStrength={false}
        />

        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem' }}>
          <input type="checkbox" required style={{ marginTop: '0.25rem' }} />
          <span>I agree to the <Link to="/terms" style={{color: '#1E88E5'}}>Terms of Service</Link> and <Link to="/privacy" style={{color: '#1E88E5'}}>Privacy Policy</Link></span>
        </div>

        <button type="submit" className="btn-submit">Create Account</button>
      </form>

      <div className="auth-links">
        Already have an account? <Link to="/login">Log in here</Link>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
