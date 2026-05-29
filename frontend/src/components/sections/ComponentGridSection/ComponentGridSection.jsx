import React from 'react';
import './ComponentGridSection.scss';
import { componentCategories as categories } from '../../../data/mockData';

const ComponentGridSection = () => {

  return (
    <section className="components">
      <div className="container">
        <h2 className="section-title">Linh Kiện Nổi Bật</h2>
        <div className="components__grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="components__item">
              <h4>{cat}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentGridSection;
