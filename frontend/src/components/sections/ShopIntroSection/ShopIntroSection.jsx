import React from 'react';
import './ShopIntroSection.scss';

const ShopIntroSection = () => {
  return (
    <section className="shop-intro">
      <div className="container shop-intro__grid">
        <div className="shop-intro__text">
          <h2>Về XuanThanhPC</h2>
          <p>Chúng tôi tự hào là đơn vị hàng đầu trong việc cung cấp và lắp ráp các hệ thống PC cao cấp. Từ Gaming PC cực đỉnh cho đến Workstation mạnh mẽ dành cho chuyên gia, tất cả đều được cấu thành từ linh kiện chính hãng 100%.</p>
          <ul>
            <li>Gaming PC Hiệu Năng Cao</li>
            <li>Workstation Chuyên Nghiệp</li>
            <li>Custom Build Theo Yêu Cầu</li>
            <li>Linh Kiện Chính Hãng</li>
            <li>Hỗ Trợ Kỹ Thuật 24/7</li>
          </ul>
        </div>
        <div className="shop-intro__image">
          [Hình ảnh Showroom]
        </div>
      </div>
    </section>
  );
};

export default ShopIntroSection;
