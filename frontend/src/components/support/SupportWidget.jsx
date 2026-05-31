import React, { useState, useEffect } from 'react';
import SupportLauncherButton from './SupportLauncherButton';
import ZaloContactCard from './ZaloContactCard';
import PhoneContactCard from './PhoneContactCard';
import RealtimeChat from './RealtimeChat';
import { socketService } from '../../services/socket/socket';

const SupportWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeView, setActiveView] = useState('menu'); // 'menu' or 'chat'
    
    // WebSocket State
    const [messages, setMessages] = useState([]);
    const [isSupportTyping, setIsSupportTyping] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    
    // Notification State
    const [unreadCount, setUnreadCount] = useState(0);
    const [incomingToast, setIncomingToast] = useState(null);

    useEffect(() => {
        // Connect to WebSocket on widget mount (globally)
        socketService.connect();

        const handleConnect = () => setIsConnected(true);
        const handleDisconnect = () => setIsConnected(false);
        const handleMessage = (data) => {
            const newMessage = {
                id: data.id || data.timestamp, // Use provided ID or timestamp
                sender: data.sender,
                content: data.message,
                timestamp: data.timestamp || new Date().toISOString()
            };
            
            setMessages(prev => {
                // Deduplicate message by ID if it exists (for optimistic UI updates)
                if (data.id && prev.some(msg => msg.id === data.id)) {
                    return prev;
                }
                return [...prev, newMessage];
            });
            
            // If chat is not open or not in focus, trigger notification
            if (data.sender !== 'user') {
                setIncomingToast(data.message);
                
                // Keep toast for 4 seconds
                setTimeout(() => setIncomingToast(null), 4000);

                // We need the latest state to know if chat is open, so we use a ref or check in updater
                setIsOpen((currentIsOpen) => {
                    setActiveView((currentActiveView) => {
                        if (!currentIsOpen || currentActiveView !== 'chat') {
                            setUnreadCount(prev => prev + 1);
                        }
                        return currentActiveView;
                    });
                    return currentIsOpen;
                });
            }
        };
        const handleTyping = (data) => {
            if (data.sender !== 'user') {
                setIsSupportTyping(data.is_typing);
            }
        };

        const handleOpenChatEvent = () => {
            setIsOpen(true);
            setActiveView('chat');
            setUnreadCount(0);
            setIncomingToast(null);
        };

        socketService.on('connected', handleConnect);
        socketService.on('disconnected', handleDisconnect);
        socketService.on('chat_message', handleMessage);
        socketService.on('typing', handleTyping);
        window.addEventListener('open-support-chat', handleOpenChatEvent);

        return () => {
            socketService.off('connected', handleConnect);
            socketService.off('disconnected', handleDisconnect);
            socketService.off('chat_message', handleMessage);
            socketService.off('typing', handleTyping);
            window.removeEventListener('open-support-chat', handleOpenChatEvent);
        };
    }, []);

    const toggleOpen = () => {
        if (isOpen) {
            setIsOpen(false);
            setTimeout(() => setActiveView('menu'), 300);
        } else {
            setIsOpen(true);
            setUnreadCount(0); // clear unread when opening
            setIncomingToast(null);
        }
    };

    const openChat = (e) => {
        if (e) e.preventDefault();
        setActiveView('chat');
        setUnreadCount(0);
        setIncomingToast(null);
    };

    const closeChat = () => {
        setIsOpen(false);
        setTimeout(() => setActiveView('menu'), 300);
    };

    const handleSendMessage = (content) => {
        const clientMessageId = `client-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        // 1. Optimistic UI Append
        setMessages(prev => [...prev, {
            id: clientMessageId,
            sender: 'user',
            content: content,
            timestamp: new Date().toISOString()
        }]);

        // 2. Send to backend with ID
        socketService.send('chat_message', { 
            message: content, 
            sender: 'user',
            id: clientMessageId 
        });
    };

    const handleTyping = (isTyping) => {
        socketService.send('typing', { is_typing: isTyping, sender: 'user' });
    };

    return (
        <div className="support-widget-container">
            {isOpen && activeView === 'menu' && (
                <>
                    <ZaloContactCard />
                    <PhoneContactCard />
                    <div className="contact-card chat-card" onClick={openChat} style={{ animationDelay: '0.1s' }}>
                        <div className="icon-wrapper" style={{ background: '#19C37D', position: 'relative' }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            {unreadCount > 0 && (
                                <span className="unread-badge-small">{unreadCount}</span>
                            )}
                        </div>
                        <div className="card-content">
                            <span className="title">Chat trực tuyến</span>
                            <span className="value">Hỗ trợ 24/7</span>
                        </div>
                    </div>
                </>
            )}

            {isOpen && activeView === 'chat' && (
                <RealtimeChat 
                    onClose={closeChat} 
                    messages={messages}
                    isConnected={isConnected}
                    isSupportTyping={isSupportTyping}
                    onSendMessage={handleSendMessage}
                    onTyping={handleTyping}
                />
            )}

            {incomingToast && (!isOpen || activeView !== 'chat') && (
                <div className="incoming-message-toast" onClick={openChat}>
                    <div className="toast-header">Tin nhắn mới</div>
                    <div className="toast-body">{incomingToast.length > 30 ? incomingToast.substring(0, 30) + '...' : incomingToast}</div>
                </div>
            )}

            {(!isOpen || activeView === 'menu') && (
                <div style={{ position: 'relative' }}>
                    <SupportLauncherButton onClick={toggleOpen} isOpen={isOpen} />
                    {unreadCount > 0 && !isOpen && (
                        <span className="unread-badge-large">{unreadCount}</span>
                    )}
                </div>
            )}
        </div>
    );
};

export default SupportWidget;
