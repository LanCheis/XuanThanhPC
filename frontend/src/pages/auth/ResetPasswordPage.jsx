import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import PasswordInput from '../../components/auth/PasswordInput';

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({ password: '', password_confirm: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.password_confirm) {
      alert("Password successfully reset!");
      navigate('/login');
    }
  };

  return (
    <AuthLayout title="Create New Password" subtitle="Your new password must be different from previous used passwords.">
      <form className="auth-form" onSubmit={handleSubmit}>
        <PasswordInput 
          label="New Password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          placeholder="Create a strong password"
          required 
          showStrength={true}
        />
        
        <PasswordInput 
          label="Confirm New Password" 
          name="password_confirm" 
          value={formData.password_confirm} 
          onChange={handleChange} 
          placeholder="Confirm your new password"
          required 
          showStrength={false}
        />

        <button type="submit" className="btn-submit">Reset Password</button>
      </form>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
