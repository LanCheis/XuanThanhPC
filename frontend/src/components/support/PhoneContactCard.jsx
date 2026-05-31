import React, { useState, useEffect } from 'react';

const PhoneContactCard = () => {
    const phoneNumber = "0123456789";
    const displayPhone = "0123 456 789";
    const [isMobile, setIsMobile] = useState(false);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleClick = (e) => {
        if (!isMobile) {
            e.preventDefault();
            navigator.clipboard.writeText(phoneNumber);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    return (
        <>
            <a 
                href={isMobile ? `tel:${phoneNumber}` : '#'} 
                onClick={handleClick}
                className="contact-card phone-card"
            >
                <div className="icon-wrapper phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                </div>
                <div className="card-content">
                    <span className="title">Hotline hỗ trợ</span>
                    <span className="value">{displayPhone}</span>
                </div>
            </a>
            
            {showToast && (
                <div className="support-toast">
                    Đã copy số điện thoại vào khay nhớ tạm!
                </div>
            )}
        </>
    );
};

export default PhoneContactCard;
