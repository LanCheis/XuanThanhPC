import React, { useState } from 'react';
import InputField from './InputField';
import './PasswordInput.scss';

const PasswordInput = ({ label, name, value, onChange, placeholder, required, showStrength }) => {
  const [showPassword, setShowPassword] = useState(false);

  const calculateStrength = (pass) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length > 6) score += 1;
    if (pass.length > 10) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return Math.min(score, 4);
  };

  const strength = calculateStrength(value);
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['#ff4d4f', '#ff4d4f', '#faad14', '#52c41a', '#19C37D'];

  return (
    <div className="password-input-container">
      <div className="password-wrapper">
        <InputField
          label={label}
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
        <button 
          type="button" 
          className="toggle-btn"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {showStrength && value && (
        <div className="strength-meter">
          <div className="strength-bars">
            {[1, 2, 3, 4].map(idx => (
              <div 
                key={idx} 
                className={`bar ${strength >= idx ? 'active' : ''}`}
                style={{ backgroundColor: strength >= idx ? strengthColors[strength] : '#e5e7eb' }}
              ></div>
            ))}
          </div>
          <span className="strength-text" style={{ color: strengthColors[strength] }}>
            {strengthLabels[strength]}
          </span>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
