import React from 'react';
import './BuildChoiceSection.scss';

const BuildChoiceSection = () => {
  return (
    <section className="build-choice">
      <div className="container">
        <h2 className="section-title">Bạn muốn tự build PC hay chọn linh kiện?</h2>
        <div className="build-choice__grid">
          <div className="build-choice__card">
            <h3>Tự Build PC Chuyên Nghiệp</h3>
            <p>Hệ thống tự động kiểm tra tương thích, giúp bạn an tâm lựa chọn cấu hình.</p>
          </div>
          <div className="build-choice__card">
            <h3>Mua Sắm Linh Kiện Lẻ</h3>
            <p>Nâng cấp máy tính với kho linh kiện phong phú, giá ưu đãi mỗi ngày.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildChoiceSection;
