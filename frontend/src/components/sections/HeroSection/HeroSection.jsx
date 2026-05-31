import React, { useEffect, useState } from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after initial render
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isLoaded ? 'hero--loaded' : ''}`}>
      {/* Background elements */}
      <div className="hero__background">
        <div className="hero__background-image"></div>
        <div className="hero__overlay"></div>
        <div className="hero__gradient-glow"></div>
      </div>

      {/* Content Container */}
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Uy tín · Chất lượng · Bền vững
          </div>
          
          <h1 className="hero__title">
            <span className="hero__title-main">Xuân Thành</span>
            <span className="hero__title-accent">Computer</span>
          </h1>
          
          <p className="hero__description">
            Máy tính mới và cũ như mới.<br />
            Linh kiện chính hãng.<br />
            Tư vấn miễn phí với giá tốt.
          </p>
          
          <div className="hero__actions">
            <button className="btn-primary">
              Xem sản phẩm
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => window.dispatchEvent(new CustomEvent('open-support-chat'))}
            >
              Tư vấn miễn phí
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
