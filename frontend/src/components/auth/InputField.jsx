import React from 'react';
import './InputField.scss';

const InputField = ({ label, type = "text", name, value, onChange, placeholder, required, icon }) => {
  return (
    <div className="input-field">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={icon ? 'with-icon' : ''}
        />
      </div>
    </div>
  );
};

export default InputField;
