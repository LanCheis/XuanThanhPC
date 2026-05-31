import React from 'react';
import FilterGroup from './FilterGroup';
import './FilterSidebar.scss';

export const filterConfig = [
  {
    title: 'Khoảng giá',
    options: ['Dưới 10 triệu', '10 - 20 triệu', '20 - 40 triệu', 'Trên 40 triệu']
  },
  {
    title: 'CPU',
    options: ['Intel', 'AMD']
  },
  {
    title: 'GPU',
    options: ['RTX 4060', 'RTX 4070', 'RTX 4080', 'RTX 4090']
  },
  {
    title: 'RAM',
    options: ['16GB', '32GB', '64GB']
  },
  {
    title: 'Mục đích sử dụng',
    options: ['Gaming', 'Streaming', 'Workstation', 'Editing']
  }
];

const FilterSidebar = ({ activeFilters, onFilterChange }) => {
  return (
    <div className="filter-sidebar">
      <div className="sidebar-header">
        <h3>Bộ lọc sản phẩm</h3>
      </div>
      <div className="sidebar-content">
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
    </div>
  );
};

export default FilterSidebar;
