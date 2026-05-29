import React from 'react';
import AuthBackgroundEffects from './AuthBackgroundEffects';
import './AuthLayout.scss';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="premium-auth-container">
      <div className="auth-left-panel">
        <AuthBackgroundEffects />
        <div className="brand-content">
          <div className="logo-placeholder">XT</div>
          <h1 className="brand-heading">Xuan Thanh<br/>Computer</h1>
          <p className="brand-subtext">Premium Gaming Gear & PC Building</p>
        </div>
      </div>
      
      <div className="auth-right-panel">
        <div className="auth-card">
          <div className="auth-header">
            <h2 className="auth-title">{title}</h2>
            {subtitle && <p className="auth-subtitle">{subtitle}</p>}
          </div>
          <div className="auth-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
