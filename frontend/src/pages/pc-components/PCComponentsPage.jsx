import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import SearchBar from '../../components/ecommerce/SearchBar';
import FilterSidebar from '../../components/ecommerce/FilterSidebar';
import ProductGrid from '../../components/ecommerce/ProductGrid';
import Pagination from '../../components/ecommerce/Pagination';
import './PCComponentsPage.scss';

// Mock Data
const MOCK_FILTERS = [
    { id: 'category', title: 'Danh mục', options: [
        { label: 'CPU', value: 'cpu' },
        { label: 'VGA / GPU', value: 'gpu' },
        { label: 'Mainboard', value: 'mainboard' },
        { label: 'RAM', value: 'ram' },
        { label: 'Ổ cứng SSD', value: 'ssd' },
        { label: 'Nguồn (PSU)', value: 'psu' },
        { label: 'Case máy tính', value: 'case' },
        { label: 'Tản nhiệt', value: 'cooling' }
    ]},
    { id: 'brand', title: 'Thương hiệu', options: [
        { label: 'Intel', value: 'intel' },
        { label: 'AMD', value: 'amd' },
        { label: 'NVIDIA', value: 'nvidia' },
        { label: 'ASUS', value: 'asus' },
        { label: 'GIGABYTE', value: 'gigabyte' },
        { label: 'MSI', value: 'msi' }
    ]}
];

const MOCK_PRODUCTS = Array.from({ length: 45 }).map((_, i) => ({
    id: i + 1,
    name: `Linh kiện PC Cao Cấp ${i + 1} - RTX 4090 / i9 14900K`,
    category: i % 2 === 0 ? 'VGA / GPU' : 'CPU',
    price: 15000000 + (Math.random() * 10000000),
    oldPrice: Math.random() > 0.5 ? 28000000 : null,
    discount: Math.random() > 0.5 ? 15 : null,
    isNew: Math.random() > 0.8,
    specs: ['Bảo hành 36 tháng', 'Chính hãng', 'Sẵn hàng'],
    image: `https://picsum.photos/seed/${i + 100}/300/300`
}));

const ITEMS_PER_PAGE = 20;

const PCComponentsPage = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [activeFilters, setActiveFilters] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        // Simulate API Fetch
        setLoading(true);
        setTimeout(() => {
            let filtered = [...MOCK_PRODUCTS];

            if (searchQuery) {
                filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
            }

            if (activeFilters.category && activeFilters.category.length > 0) {
                // Mock filtering logic
                // In real app, you'd send activeFilters to API
            }

            if (sortBy === 'price_asc') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortBy === 'price_desc') {
                filtered.sort((a, b) => b.price - a.price);
            }

            setProducts(filtered);
            setLoading(false);
        }, 600);
    }, [activeFilters, searchQuery, sortBy]);

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    const currentProducts = products.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className="eco-page-wrapper">
            <Header />
            <div className="eco-page pc-components-page">
                <div className="pc-components-page__hero">
                    <div className="eco-container">
                        <h1 className="eco-section-title" style={{ color: 'white', marginBottom: '24px' }}>
                            Linh Kiện PC Chính Hãng
                        </h1>
                        <p className="pc-components-page__subtitle">Nâng cấp sức mạnh với những linh kiện hàng đầu thế giới</p>
                        <SearchBar onSearch={setSearchQuery} placeholder="Tìm kiếm VGA, CPU, RAM..." />
                    </div>
                </div>

                <div className="eco-container pc-components-page__main">
                    <div className="pc-components-page__sidebar">
                        <FilterSidebar 
                            filters={MOCK_FILTERS}
                            activeFilters={activeFilters}
                            onFilterChange={(groupId, values) => {
                                setActiveFilters(prev => ({ ...prev, [groupId]: values }));
                                setCurrentPage(1);
                            }}
                        />
                    </div>

                    <div className="pc-components-page__content">
                        <div className="pc-components-page__toolbar">
                            <span className="results-count">Hiển thị {currentProducts.length} trên {products.length} sản phẩm</span>
                            <select 
                                className="sort-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="newest">Mới nhất</option>
                                <option value="price_asc">Giá: Thấp đến cao</option>
                                <option value="price_desc">Giá: Cao đến thấp</option>
                            </select>
                        </div>

                        <ProductGrid products={currentProducts} loading={loading} />
                        
                        {!loading && <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PCComponentsPage;
