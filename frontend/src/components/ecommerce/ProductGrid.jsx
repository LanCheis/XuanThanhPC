import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.scss';

const ProductGrid = ({ products, loading }) => {
    if (loading) {
        return (
            <div className="eco-product-grid">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="eco-product-skeleton">
                        <div className="skeleton-img"></div>
                        <div className="skeleton-text short"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text long"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (!products || products.length === 0) {
        return (
            <div className="eco-product-empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <h3>Không tìm thấy sản phẩm nào</h3>
                <p>Vui lòng thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm.</p>
            </div>
        );
    }

    return (
        <div className="eco-product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
