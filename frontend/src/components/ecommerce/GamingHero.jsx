import React from 'react';
import './GamingHero.scss';

const GamingHero = () => {
    return (
        <div className="gaming-hero">
            <div className="gaming-hero__background"></div>
            <div className="gaming-hero__overlay"></div>
            
            <div className="eco-container gaming-hero__content">
                <span className="gaming-hero__badge">Ultimate Gaming Experience</span>
                <h1 className="gaming-hero__title">
                    Chinh Phục Mọi Đỉnh Cao <br/>
                    <span className="highlight">Esports</span>
                </h1>
                <p className="gaming-hero__desc">
                    Trang bị sức mạnh vô hạn với hệ sinh thái gaming cao cấp từ Xuân Thành PC. 
                    Hiệu năng tối thượng - Thiết kế đậm chất game thủ.
                </p>
                <div className="gaming-hero__actions">
                    <button className="eco-btn-primary">
                        Khám Phá Ngay
                    </button>
                    <button className="eco-btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                        Build PC Gaming
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GamingHero;
