import React from 'react';
import './Pagination.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="eco-pagination">
            <button 
                className="eco-pagination__btn" 
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                &laquo; Trước
            </button>
            
            <div className="eco-pagination__numbers">
                {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    return (
                        <button 
                            key={page}
                            className={`eco-pagination__number ${currentPage === page ? 'active' : ''}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

            <button 
                className="eco-pagination__btn" 
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Sau &raquo;
            </button>
        </div>
    );
};

export default Pagination;
