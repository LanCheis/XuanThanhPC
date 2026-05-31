import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ onSearch, placeholder = "Tìm kiếm sản phẩm..." }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className="eco-search-bar" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="eco-search-bar__input" 
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="eco-search-bar__btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </form>
    );
};

export default SearchBar;
