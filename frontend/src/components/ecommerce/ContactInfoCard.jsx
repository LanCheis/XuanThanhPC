import React from 'react';
import './ContactInfoCard.scss';

const ContactInfoCard = () => {
    return (
        <div className="contact-info-card">
            <h3 className="contact-info-card__title">Thông tin liên hệ</h3>
            
            <ul className="contact-info-card__list">
                <li>
                    <span className="icon">📍</span>
                    <div className="details">
                        <strong>Địa chỉ Showroom</strong>
                        <p>123 Đường Công Nghệ, Quận Thủ Đức, TP. Hồ Chí Minh</p>
                    </div>
                </li>
                <li>
                    <span className="icon">📞</span>
                    <div className="details">
                        <strong>Hotline CSKH (24/7)</strong>
                        <p>1900 1234 - 0912 345 678</p>
                    </div>
                </li>
                <li>
                    <span className="icon">✉️</span>
                    <div className="details">
                        <strong>Email hỗ trợ</strong>
                        <p>support@xuanthanhpc.vn</p>
                    </div>
                </li>
                <li>
                    <span className="icon">🕒</span>
                    <div className="details">
                        <strong>Giờ làm việc</strong>
                        <p>Thứ 2 - Chủ Nhật: 8:00 AM - 10:00 PM</p>
                    </div>
                </li>
            </ul>

            <div className="contact-info-card__map">
                <iframe 
                    title="Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4206639915833!2d106.78253131483669!3d10.841127592277498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276cb5e2581f%3A0x633e6015b6375f46!2zS2h1IENvbmcgTmdoZSBDYW8gUXXhuq1uIDk!5e0!3m2!1sen!2s!4v1655385800000!5m2!1sen!2s" 
                    width="100%" 
                    height="200" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
    );
};

export default ContactInfoCard;
