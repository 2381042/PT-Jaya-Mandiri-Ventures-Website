/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { COMPANY_NAME, LOGO_IMAGE } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  onOpenDistributorModal?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavClick, 
  onOpenDistributorModal 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen 
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-red-500/20' 
            : 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-zinc-200'
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Left Brand Identity with Prominent Logo Container */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, '');
              }}
              className="flex items-center gap-3.5 group"
            >
              {/* Prominent White Logo Frame Box */}
              <div className="h-12 sm:h-14 md:h-16 px-3 py-1 rounded-2xl bg-white flex items-center justify-center border-2 border-red-500/30 shadow-md group-hover:scale-105 transition-transform">
                <img 
                  src={LOGO_IMAGE} 
                  alt={COMPANY_NAME} 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-xl font-serif font-extrabold tracking-tight text-zinc-900 group-hover:text-red-600 transition-colors">
                  {COMPANY_NAME}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-extrabold text-red-600">
                  PERUSAHAAN PRINSIPAL (PRINCIPAL COMPANY)
                </span>
              </div>
            </a>
          </div>
          
          {/* Center Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-zinc-700">
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-red-600 transition-colors py-2">Katalog Produk</a>
            <a href="#distributor" onClick={(e) => handleLinkClick(e, 'distributor')} className="hover:text-red-600 transition-colors py-2">Mitra Distributor</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-red-600 transition-colors py-2">Profil Prinsipal</a>
            <a href="#location" onClick={(e) => handleLinkClick(e, 'location')} className="hover:text-red-600 transition-colors py-2">Kantor Pusat</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            
            {/* Distributor CTA Button */}
            <a 
              href="#distributor"
              onClick={(e) => {
                if (onOpenDistributorModal) {
                  e.preventDefault();
                  onOpenDistributorModal();
                } else {
                  handleLinkClick(e, 'distributor');
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-xs font-extrabold tracking-wider uppercase shadow-md shadow-red-600/20 transition-all hover:scale-105 border border-red-400/40"
            >
              <span>Mitra PT / CV</span>
              <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-[10px] font-black">Up to 30%</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="block lg:hidden p-2.5 rounded-xl bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`fixed inset-0 bg-white/98 text-zinc-900 z-40 lg:hidden flex flex-col justify-between p-8 pt-32 backdrop-blur-2xl transition-all duration-500 ease-in-out ${
        mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-zinc-200">
            <img src={LOGO_IMAGE} alt="Logo" className="h-12 w-auto object-contain" />
            <div>
              <div className="font-bold font-serif text-zinc-900 text-sm">{COMPANY_NAME}</div>
              <div className="text-[10px] text-red-600 uppercase font-extrabold">Perusahaan Prinsipal (Principal Company)</div>
            </div>
          </div>

          <div className="flex flex-col space-y-5 text-lg font-serif font-bold text-zinc-900">
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-red-600 transition-colors">Katalog Produk & Formulasi</a>
            <a href="#distributor" onClick={(e) => handleLinkClick(e, 'distributor')} className="hover:text-red-600 transition-colors">Program Distributor PT/CV</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-red-600 transition-colors">Profil Prinsipal JMV</a>
            <a href="#location" onClick={(e) => handleLinkClick(e, 'location')} className="hover:text-red-600 transition-colors">Head Office SOHO Pancoran</a>
          </div>
        </div>

        <div className="space-y-4 pt-6 border-t border-zinc-200">
          <a 
            href="#distributor"
            onClick={(e) => {
              handleLinkClick(e, 'distributor');
              if (onOpenDistributorModal) onOpenDistributorModal();
            }}
            className="w-full block text-center py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-sans font-extrabold text-sm tracking-wider uppercase shadow-xl"
          >
            Peluang Mitra Distributor (Up to 30%)
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
