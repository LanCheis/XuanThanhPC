import React from 'react';

const ZaloContactCard = () => {
    const zaloUrl = "https://zalo.me/0123456789";

    return (
        <a href={zaloUrl} target="_blank" rel="noopener noreferrer" className="contact-card zalo-card">
            <div className="icon-wrapper zalo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            </div>
            <div className="card-content">
                <span className="title">Chat qua Zalo</span>
                <span className="value">0123 456 789</span>
            </div>
        </a>
    );
};

export default ZaloContactCard;
