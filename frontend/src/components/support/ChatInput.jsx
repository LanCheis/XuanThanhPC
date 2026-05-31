import React, { useState } from 'react';

const ChatInput = ({ onSendMessage, onTyping }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
            onTyping(false);
        }
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
        if (e.target.value) {
            onTyping(true);
        } else {
            onTyping(false);
        }
    };

    return (
        <form className="chat-input-container" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nhập tin nhắn..." 
                value={message}
                onChange={handleChange}
            />
            <button 
                type="submit" 
                className="send-btn" 
                disabled={!message.trim()}
                aria-label="Send message"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
            </button>
        </form>
    );
};

export default ChatInput;
