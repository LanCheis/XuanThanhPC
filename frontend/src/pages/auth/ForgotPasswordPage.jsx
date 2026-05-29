import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import InputField from '../../components/auth/InputField';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call for forgot password
    setSubmitted(true);
  };

  return (
    <AuthLayout title="Reset Password" subtitle="Enter your email to receive a reset link">
      {!submitted ? (
        <form className="auth-form" onSubmit={handleSubmit}>
          <InputField 
            label="Email Address" 
            type="email"
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="you@example.com"
            required 
          />
          <button type="submit" className="btn-submit">Send Reset Link</button>
        </form>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '60px', height: '60px', borderRadius: '50%', background: '#d1fae5', color: '#10b981', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem'
          }}>✓</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Check your email</h3>
          <p style={{ color: '#667085', marginBottom: '2rem' }}>We've sent a password reset link to {email}</p>
        </div>
      )}
      
      <div className="auth-links">
        <Link to="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
          ← Back to log in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
