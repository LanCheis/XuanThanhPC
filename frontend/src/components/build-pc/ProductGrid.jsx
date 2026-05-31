import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.scss';

const ProductGrid = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="no-products">
        <h3>Không tìm thấy sản phẩm nào phù hợp</h3>
        <p>Vui lòng thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
