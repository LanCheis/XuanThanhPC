import React from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import ContactForm from '../../components/ecommerce/ContactForm';
import ContactInfoCard from '../../components/ecommerce/ContactInfoCard';
import SocialContactCard from '../../components/ecommerce/SocialContactCard';
import './ContactPage.scss';

const ContactPage = () => {
    return (
        <div className="eco-page-wrapper">
            <Header />
            <div className="eco-page contact-page">
                <div className="contact-page__hero">
                    <div className="eco-container">
                        <h1 className="eco-section-title" style={{ color: 'white', marginBottom: '16px' }}>Liên Hệ Với Chúng Tôi</h1>
                        <p className="contact-page__subtitle">
                            Xuân Thành PC luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7.
                        </p>
                    </div>
                </div>

                <div className="eco-container">
                    <div className="contact-page__socials">
                        <SocialContactCard 
                            type="zalo"
                            title="Chat qua Zalo"
                            subtitle="Phản hồi trong 5 phút"
                            link="https://zalo.me/yourid"
                            color="#0068FF"
                        />
                        <SocialContactCard 
                            type="messenger"
                            title="Chat Messenger"
                            subtitle="Hỗ trợ trực tuyến"
                            link="https://m.me/yourpage"
                            color="#00B2FF"
                        />
                        <SocialContactCard 
                            type="phone"
                            title="Gọi Hotline"
                            subtitle="1900 1234"
                            link="tel:19001234"
                            color="#19C37D"
                        />
                    </div>

                    <div className="contact-page__main">
                        <div className="contact-page__form-wrapper">
                            <h2 className="eco-section-title" style={{ textAlign: 'left', fontSize: '1.5rem' }}>Gửi Yêu Cầu Hỗ Trợ</h2>
                            <ContactForm />
                        </div>
                        <div className="contact-page__info-wrapper">
                            <ContactInfoCard />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
