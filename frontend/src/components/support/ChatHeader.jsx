import React from 'react';

const ChatHeader = ({ onClose, isOnline = true }) => {
    return (
        <div className="chat-header">
            <div className="header-info">
                <div className="avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
                <div className="details">
                    <h3>Hỗ trợ khách hàng</h3>
                    <span className="status">{isOnline ? 'Đang hoạt động' : 'Đang ngoại tuyến'}</span>
                </div>
            </div>
            <button className="close-btn" onClick={onClose} aria-label="Close chat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
        </div>
    );
};

export default ChatHeader;
