import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image">[Hình {product.name}]</div>
      <div className="product-card__content">
        <h4>{product.name}</h4>
        <ul className="product-card__specs">
          <li>CPU: {product.cpu}</li>
          <li>VGA: {product.gpu}</li>
          <li>RAM: {product.ram}</li>
        </ul>
        <div className="product-card__footer">
          <span className="price">{product.price}</span>
          <button>Mua Ngay</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
