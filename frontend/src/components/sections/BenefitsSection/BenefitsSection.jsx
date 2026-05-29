import React from 'react';
import './BenefitsSection.scss';

const BenefitsSection = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__grid">
          <div className="benefits__item">
            <h4>Tư Vấn Miễn Phí</h4>
            <p>Hỗ trợ giải đáp tận tình</p>
          </div>
          <div className="benefits__item">
            <h4>Bảo Hành Siêu Tốc</h4>
            <p>Xử lý lỗi nhanh gọn</p>
          </div>
          <div className="benefits__item">
            <h4>Giao Hàng Nhanh</h4>
            <p>Toàn quốc an toàn</p>
          </div>
          <div className="benefits__item">
            <h4>Hỗ Trợ Kỹ Thuật</h4>
            <p>Online & Offline 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
