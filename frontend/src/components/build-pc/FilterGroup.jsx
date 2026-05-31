import React, { useState } from 'react';
import './FilterGroup.scss';

const FilterGroup = ({ title, options, activeOptions, onChange }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxChange = (option) => {
    onChange(title, option);
  };

  return (
    <div className="filter-group">
      <div className="filter-header" onClick={toggleExpand}>
        <h4 className="filter-title">{title}</h4>
        <span className={`filter-icon ${isExpanded ? 'expanded' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>
      
      {isExpanded && (
        <div className="filter-options">
          {options.map((option, index) => (
            <label key={index} className="filter-option">
              <input
                type="checkbox"
                checked={activeOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <span className="checkbox-custom"></span>
              <span className="option-label">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterGroup;
