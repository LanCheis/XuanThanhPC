import React from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const RealtimeChat = ({ 
    onClose, 
    messages, 
    isConnected, 
    isSupportTyping, 
    onSendMessage, 
    onTyping 
}) => {
    return (
        <div className="support-chat-window">
            <ChatHeader onClose={onClose} isOnline={isConnected} />
            <ChatMessages messages={messages} isSupportTyping={isSupportTyping} />
            <ChatInput onSendMessage={onSendMessage} onTyping={onTyping} />
        </div>
    );
};

export default RealtimeChat;
