import React from 'react';
import './GamingShowcase.scss';

const GamingShowcase = ({ setups }) => {
    return (
        <div className="gaming-showcase">
            <h2 className="eco-section-title">Góc Máy Đỉnh Cao</h2>
            <div className="gaming-showcase__grid">
                {setups.map((setup, i) => (
                    <div key={i} className={`gaming-showcase__item item-${i}`}>
                        <img src={setup.image} alt={setup.title} />
                        <div className="gaming-showcase__info">
                            <h3>{setup.title}</h3>
                            <p>{setup.desc}</p>
                            <button className="eco-btn-primary">Xem Chi Tiết</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamingShowcase;
