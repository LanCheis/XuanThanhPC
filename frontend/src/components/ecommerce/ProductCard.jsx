import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
    return (
        <div className="eco-product-card">
            <div className="eco-product-card__image-container">
                <img src={product.image || 'https://via.placeholder.com/250'} alt={product.name} />
                {product.isNew && <span className="eco-product-card__badge eco-product-card__badge--new">New</span>}
                {product.discount && <span className="eco-product-card__badge eco-product-card__badge--sale">-{product.discount}%</span>}
            </div>
            
            <div className="eco-product-card__content">
                <div className="eco-product-card__category">{product.category}</div>
                <h3 className="eco-product-card__title">{product.name}</h3>
                
                <div className="eco-product-card__specs">
                    {product.specs?.slice(0, 3).map((spec, index) => (
                        <span key={index} className="eco-product-card__spec-item">{spec}</span>
                    ))}
                </div>
                
                <div className="eco-product-card__footer">
                    <div className="eco-product-card__price">
                        <span className="current">{product.price.toLocaleString()}đ</span>
                        {product.oldPrice && <span className="old">{product.oldPrice.toLocaleString()}đ</span>}
                    </div>
                    <button className="eco-product-card__add-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
