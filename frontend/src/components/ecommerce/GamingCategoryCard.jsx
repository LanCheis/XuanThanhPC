import React from 'react';
import './GamingCategoryCard.scss';

const GamingCategoryCard = ({ title, icon, image }) => {
    return (
        <div className="gaming-category-card">
            <img src={image} alt={title} className="gaming-category-card__bg" />
            <div className="gaming-category-card__overlay"></div>
            <div className="gaming-category-card__content">
                <div className="gaming-category-card__icon">{icon}</div>
                <h3 className="gaming-category-card__title">{title}</h3>
                <span className="gaming-category-card__link">Khám phá &rarr;</span>
            </div>
        </div>
    );
};

export default GamingCategoryCard;
