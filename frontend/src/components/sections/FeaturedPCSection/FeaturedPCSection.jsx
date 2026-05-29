import React from 'react';
import ProductCard from '../../ui/ProductCard/ProductCard';
import './FeaturedPCSection.scss';

import { mockPCs } from '../../../data/mockData';

const FeaturedPCSection = () => {
  return (
    <section className="featured-pcs">
      <div className="container">
        <h2 className="section-title">Sản Phẩm PC Nổi Bật</h2>
        <div className="featured-pcs__grid">
          {mockPCs.map(pc => <ProductCard key={pc.id} product={pc} />)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPCSection;
