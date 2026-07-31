/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandShowcase from './components/BrandShowcase';
import ProductGrid from './components/ProductGrid';
import DistributorSection from './components/DistributorSection';
import About from './components/About';
import MapSection from './components/MapSection';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import { ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });

  // Handle navigation (clicks on Navbar or Footer links)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 50);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-[#DC2626] selection:text-white">
      
      <Navbar 
        onNavClick={handleNavClick} 
        onOpenDistributorModal={() => {
          if (view.type !== 'home') setView({ type: 'home' });
          setTimeout(() => scrollToSection('distributor'), 50);
        }}
      />
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero 
              onExploreProducts={() => scrollToSection('products')}
              onOpenDistributorModal={() => scrollToSection('distributor')}
            />
            
            <BrandShowcase />

            <ProductGrid 
              onProductClick={(p) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'product', product: p });
              }} 
            />

            <DistributorSection />

            <About />

            <MapSection />
          </>
        )}

        {view.type === 'product' && (
          <ProductDetail 
            product={view.product} 
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('products'), 50);
            }}
          />
        )}
      </main>

      <Footer onLinkClick={handleNavClick} />
      
      {/* JMV AI Concierge Floating Bot */}
      <Assistant />
    </div>
  );
}

export default App;
