import React from 'react';
import FilterGroup from './FilterGroup';
import { filterConfig } from './FilterSidebar';
import './MobileFilterDrawer.scss';

const MobileFilterDrawer = ({ isOpen, onClose, activeFilters, onFilterChange }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={onClose}></div>
      <div className={`filter-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3>Bộ lọc sản phẩm</h3>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="drawer-content">
          {filterConfig.map((filter, index) => (
            <FilterGroup
              key={index}
              title={filter.title}
              options={filter.options}
              activeOptions={activeFilters[filter.title] || []}
              onChange={onFilterChange}
            />
          ))}
        </div>
        <div className="drawer-footer">
          <button className="apply-btn" onClick={onClose}>
            Áp dụng
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileFilterDrawer;
