class SocketService {
    constructor() {
        this.socket = null;
        this.listeners = {};
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.sessionId = localStorage.getItem('support_session_id') || 'new';
        this.baseUrl = import.meta.env.VITE_WS_URL || 'ws://localhost:8000';
    }

    connect() {
        if (this.socket && (this.socket.readyState === WebSocket.CONNECTING || this.socket.readyState === WebSocket.OPEN)) {
            return;
        }

        const url = `${this.baseUrl}/ws/support/chat/${this.sessionId}/`;
        this.socket = new WebSocket(url);

        this.socket.onopen = () => {
            console.log('Support WebSocket connected');
            this.reconnectAttempts = 0;
            this.trigger('connected');
        };

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            
            if (data.type === 'session_init') {
                this.sessionId = data.session_id;
                localStorage.setItem('support_session_id', this.sessionId);
            }

            this.trigger(data.type, data);
        };

        this.socket.onclose = () => {
            console.log('Support WebSocket disconnected');
            this.trigger('disconnected');
            this.attemptReconnect();
        };

        this.socket.onerror = (error) => {
            console.error('Support WebSocket error:', error);
            this.trigger('error', error);
        };
    }

    attemptReconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            console.log(`Reconnecting attempt ${this.reconnectAttempts}...`);
            setTimeout(() => this.connect(), 1000 * Math.min(this.reconnectAttempts, 5));
        }
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
    }

    send(type, payload) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({ type, ...payload }));
        } else {
            console.warn('Socket not connected, message not sent');
        }
    }

    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    off(event, callback) {
        if (this.listeners[event]) {
            this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
        }
    }

    trigger(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => callback(data));
        }
    }
}

export const socketService = new SocketService();
