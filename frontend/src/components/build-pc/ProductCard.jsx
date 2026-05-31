import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="card-image-wrapper">
        <img src={product.image} alt={product.name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <ul className="card-specs">
          {product.specs.slice(0, 3).map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <div className="card-footer">
          <div className="card-price">
            {product.price.toLocaleString('vi-VN')} ₫
          </div>
          <button className="cta-button">Xem chi tiết</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
