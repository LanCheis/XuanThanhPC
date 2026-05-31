import React from 'react';
import './SocialContactCard.scss';

const SocialContactCard = ({ type, title, subtitle, link, color }) => {
    const icons = {
        zalo: <span className="social-icon">Zalo</span>,
        messenger: <span className="social-icon">MSG</span>,
        phone: <span className="social-icon">📞</span>
    };

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`social-contact-card ${type}`} style={{ '--brand-color': color }}>
            <div className="social-contact-card__icon">
                {icons[type]}
            </div>
            <div className="social-contact-card__content">
                <span className="title">{title}</span>
                <span className="subtitle">{subtitle}</span>
            </div>
            <div className="social-contact-card__arrow">&rarr;</div>
        </a>
    );
};

export default SocialContactCard;
