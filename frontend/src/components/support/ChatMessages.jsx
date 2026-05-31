import React, { useEffect, useRef } from 'react';
import TypingIndicator from './TypingIndicator';

const ChatMessages = ({ messages, isSupportTyping }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isSupportTyping]);

    const formatTime = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="chat-messages">
            {messages.map((msg, idx) => (
                <div key={idx} className={`message-bubble ${msg.sender === 'user' ? 'user' : 'support'}`}>
                    {msg.content}
                    {msg.timestamp && <span className="timestamp">{formatTime(msg.timestamp)}</span>}
                </div>
            ))}
            
            {isSupportTyping && <TypingIndicator />}
            
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatMessages;
