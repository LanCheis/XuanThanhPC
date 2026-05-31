import React, { useState } from 'react';
import './ContactForm.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1000);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__group">
                <label>Họ và Tên</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Nhập họ và tên của bạn"
                />
            </div>
            
            <div className="contact-form__row">
                <div className="contact-form__group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="example@gmail.com"
                    />
                </div>
                <div className="contact-form__group">
                    <label>Số điện thoại</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        placeholder="0912 345 678"
                    />
                </div>
            </div>

            <div className="contact-form__group">
                <label>Lời nhắn</label>
                <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows="5"
                    placeholder="Bạn cần chúng tôi tư vấn gì?"
                ></textarea>
            </div>

            <button type="submit" className="eco-btn-primary" disabled={status === 'loading'}>
                {status === 'loading' ? 'Đang gửi...' : 'Gửi Yêu Cầu'}
            </button>

            {status === 'success' && (
                <div className="contact-form__success">
                    Gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm nhất.
                </div>
            )}
        </form>
    );
};

export default ContactForm;
