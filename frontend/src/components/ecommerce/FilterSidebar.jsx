import React, { useState } from 'react';
import './FilterSidebar.scss';

const FilterSidebar = ({ filters, activeFilters, onFilterChange }) => {
    const [openGroups, setOpenGroups] = useState(
        filters.reduce((acc, filter) => ({ ...acc, [filter.id]: true }), {})
    );

    const toggleGroup = (id) => {
        setOpenGroups(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleCheckboxChange = (groupId, value) => {
        const currentGroupFilters = activeFilters[groupId] || [];
        let newGroupFilters;
        
        if (currentGroupFilters.includes(value)) {
            newGroupFilters = currentGroupFilters.filter(item => item !== value);
        } else {
            newGroupFilters = [...currentGroupFilters, value];
        }

        onFilterChange(groupId, newGroupFilters);
    };

    return (
        <aside className="eco-filter-sidebar">
            <div className="eco-filter-sidebar__header">
                <h3>Bộ lọc sản phẩm</h3>
                <button 
                    className="eco-filter-sidebar__clear"
                    onClick={() => filters.forEach(f => onFilterChange(f.id, []))}
                >
                    Xóa tất cả
                </button>
            </div>
            
            <div className="eco-filter-sidebar__groups">
                {filters.map(group => (
                    <div key={group.id} className="eco-filter-group">
                        <button 
                            className={`eco-filter-group__header ${openGroups[group.id] ? 'open' : ''}`}
                            onClick={() => toggleGroup(group.id)}
                        >
                            <span>{group.title}</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        
                        {openGroups[group.id] && (
                            <div className="eco-filter-group__content">
                                {group.options.map(option => (
                                    <label key={option.value} className="eco-filter-option">
                                        <input 
                                            type="checkbox"
                                            checked={(activeFilters[group.id] || []).includes(option.value)}
                                            onChange={() => handleCheckboxChange(group.id, option.value)}
                                        />
                                        <span className="eco-filter-option__custom"></span>
                                        <span className="eco-filter-option__label">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default FilterSidebar;
