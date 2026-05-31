import React from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import GamingHero from '../../components/ecommerce/GamingHero';
import GamingCategoryCard from '../../components/ecommerce/GamingCategoryCard';
import ProductGrid from '../../components/ecommerce/ProductGrid';
import GamingShowcase from '../../components/ecommerce/GamingShowcase';
import './GamingPage.scss';

const MOCK_GAMING_CATEGORIES = [
    { title: 'PC Gaming', icon: '🖥️', image: 'https://picsum.photos/seed/pc/400/300' },
    { title: 'Laptop Gaming', icon: '💻', image: 'https://picsum.photos/seed/laptop/400/300' },
    { title: 'Gaming Gear', icon: '⌨️', image: 'https://picsum.photos/seed/gear/400/300' },
    { title: 'Màn hình 144Hz+', icon: '📺', image: 'https://picsum.photos/seed/monitor/400/300' }
];

const MOCK_FEATURED_PRODUCTS = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `ASUS ROG Strix Gaming ${i + 1}`,
    category: 'Laptop Gaming',
    price: 35000000 + (Math.random() * 15000000),
    isNew: true,
    specs: ['Core i9', 'RTX 4080', '32GB RAM'],
    image: `https://picsum.photos/seed/${i + 200}/300/300`
}));

const MOCK_SETUPS = [
    { title: 'The Obsidian', desc: 'Setup Full Black tối giản, hiệu năng tối đa', image: 'https://picsum.photos/seed/setup1/800/600' },
    { title: 'Cyberpunk Red', desc: 'Góc máy đậm chất viễn tưởng', image: 'https://picsum.photos/seed/setup2/800/400' },
    { title: 'Streamer Pro', desc: 'Giải pháp streaming chuyên nghiệp', image: 'https://picsum.photos/seed/setup3/400/400' },
    { title: 'White Snow', desc: 'Thanh lịch và sang trọng', image: 'https://picsum.photos/seed/setup4/400/400' }
];

const GamingPage = () => {
    return (
        <div className="eco-page-wrapper">
            <Header />
            <div className="eco-page gaming-page">
                <GamingHero />

                <div className="eco-container">
                    <section className="gaming-page__categories">
                        <h2 className="eco-section-title">Hệ Sinh Thái Gaming</h2>
                        <div className="gaming-page__categories-grid">
                            {MOCK_GAMING_CATEGORIES.map((cat, i) => (
                                <GamingCategoryCard 
                                    key={i}
                                    title={cat.title}
                                    icon={cat.icon}
                                    image={cat.image}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="gaming-page__featured">
                        <h2 className="eco-section-title">Sản Phẩm Nổi Bật</h2>
                        <ProductGrid products={MOCK_FEATURED_PRODUCTS} loading={false} />
                    </section>

                    <GamingShowcase setups={MOCK_SETUPS} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GamingPage;
