import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">XT<span>PC</span></div>
            <p>Hệ thống cung cấp linh kiện PC, Build PC Gaming & Workstation hàng đầu Việt Nam.</p>
          </div>
          <div>
            <h4>Thông Tin & Địa Chỉ</h4>
            <ul>
              <li>Địa chỉ: 123 Đường Điện Tử, TP.HCM</li>
              <li>Đối tác: Intel, AMD, ASUS, MSI</li>
              <li>Liên hệ: contact@xtpc.vn</li>
            </ul>
          </div>
          <div>
            <h4>Hỗ Trợ Khách Hàng</h4>
            <ul>
              <li>Hotline: 1900 9999</li>
              <li>Chính sách bảo hành</li>
              <li>Hướng dẫn thanh toán</li>
            </ul>
            <div className="footer__social">
              <span>FB</span>
              <span>IG</span>
              <span>DC</span>
              <span>YT</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          &copy; {new Date().getFullYear()} XuanThanhPC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
