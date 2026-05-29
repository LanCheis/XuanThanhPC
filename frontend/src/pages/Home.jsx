import React, { Suspense, lazy } from 'react';
import Header from '../components/layout/Header/Header';
import ChoiceModal from '../components/ui/ChoiceModal/ChoiceModal';
import HeroSection from '../components/sections/HeroSection/HeroSection';
import Footer from '../components/layout/Footer/Footer';

const ShopIntroSection = lazy(() => import('../components/sections/ShopIntroSection/ShopIntroSection'));
const FeaturedPCSection = lazy(() => import('../components/sections/FeaturedPCSection/FeaturedPCSection'));
const BuildChoiceSection = lazy(() => import('../components/sections/BuildChoiceSection/BuildChoiceSection'));
const ComponentGridSection = lazy(() => import('../components/sections/ComponentGridSection/ComponentGridSection'));
const BenefitsSection = lazy(() => import('../components/sections/BenefitsSection/BenefitsSection'));

const Home = () => {
  return (
    <div className="home-wrapper">
      <ChoiceModal />
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
          <ShopIntroSection />
          <FeaturedPCSection />
          <BuildChoiceSection />
          <ComponentGridSection />
          <BenefitsSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
