/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { COMPANY_NAME, LOGO_IMAGE, AGIOO_LOGO, MIZUX_LOGO, BIOLUMINEX_LOGO } from '../constants';

interface HeroProps {
  onExploreProducts?: () => void;
  onOpenDistributorModal?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOpenDistributorModal }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-zinc-900 border-b border-zinc-200">

      {/* Red & Yellow Soft Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-amber-400/15 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Subtle Grid Mesh Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 w-full relative z-10 my-auto">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">

            {/* Tag Badge - HIGHLIGHTING PRINCIPAL COMPANY */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-100 border border-red-300 text-xs font-extrabold tracking-wider uppercase text-red-600 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
              <span>OFFICIAL PRINCIPAL COMPANY (PERUSAHAAN PRINSIPAL)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-extrabold tracking-tight leading-[1.08] text-zinc-900">
              Solusi Chemical & Otomotif <br />
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-amber-500 bg-clip-text text-transparent italic font-serif">
                Terdepan di Indonesia.
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-zinc-900 font-bold">{COMPANY_NAME}</strong> adalah <strong className="text-red-600 font-extrabold underline decoration-yellow-400 underline-offset-4">Perusahaan Prinsipal (Principal Company)</strong> terdepan di Indonesia yang memegang riset formulasi, sertifikasi <span className="text-red-600 font-semibold">ASTM Lab Certified</span>, dan hak lisensi merek resmi Agioo Radiator Coolant, Mizu-X Autocare, serta Bio-Luminex.
            </p>



            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
              <a
                href="#products"
                onClick={(e) => handleNavClick(e, 'products')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-full text-xs font-extrabold tracking-widest uppercase transition-all shadow-xl shadow-red-600/25 hover:scale-105 flex items-center justify-center gap-3 border border-red-400/40"
              >
                <span>Katalog Merek Prinsipal</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <button
                onClick={() => {
                  if (onOpenDistributorModal) onOpenDistributorModal();
                }}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-zinc-100 border-2 border-amber-400 text-zinc-900 rounded-full text-xs font-extrabold tracking-widest uppercase transition-all hover:scale-105 shadow-md"
              >
                Penawaran Mitra Prinsipal
              </button>
            </div>
          </div>

          {/* Right Showcase Graphic - HIGH CONTRAST WHITE CONTAINER FOR PT JMV LOGO */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">

              {/* Decorative Outer Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-red-400/30 bg-red-100/40 backdrop-blur-sm animate-spin-slow"></div>
              <div className="absolute inset-5 rounded-full border-2 border-dashed border-amber-400/50"></div>

              {/* Luminous White Showcase Stage Box for Crisp Logo Contrast */}
              <div className="relative z-10 w-full h-full rounded-3xl bg-white p-10 flex flex-col items-center justify-center border-4 border-red-500/30 shadow-2xl transition-all duration-700 transform hover:scale-105">

                {/* Clean Logo Display */}
                <img
                  src={LOGO_IMAGE}
                  alt={COMPANY_NAME}
                  className="max-h-[260px] max-w-[320px] w-auto object-contain filter drop-shadow-md animate-float-slow"
                />

                {/* Subtitle Badge */}
                <div className="mt-6 px-4 py-1.5 rounded-full bg-red-100 border border-red-300 text-[11px] font-extrabold uppercase text-red-600 tracking-wider shadow-sm">
                  {COMPANY_NAME} • PRINCIPAL
                </div>
              </div>

              {/* Floating Corporate Stamp Badge Overlay */}
              <div className="absolute -bottom-3 right-0 bg-white p-4 rounded-2xl border-2 border-red-500/40 shadow-2xl max-w-[250px] z-20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-red-50 p-1 flex items-center justify-center border border-red-500">
                    <img src={LOGO_IMAGE} alt="Logo" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-zinc-900">{COMPANY_NAME}</div>
                    <div className="text-[10px] text-red-600 font-extrabold">Perusahaan Prinsipal (Principal)</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Brand Advertisement Ribbon (Agioo, Mizu-X, Bio Luminex) */}
      <div className="relative z-10 w-full mt-12 pt-8 pb-4 bg-white border-t border-zinc-200">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10">

          <div className="text-center mb-6">
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-red-600 uppercase bg-red-50 border border-red-200 px-4 py-1.5 rounded-full inline-block shadow-sm">
              MEREK & PORTOFOLIO DI BAWAH PRINSIPAL PT JMV
            </span>
          </div>

          {/* Ad Banners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Ad 1: Agioo Logo Banner */}
            <div className="bg-slate-50 border-2 border-red-200 rounded-2xl p-5 flex items-center gap-4 hover:border-red-500 transition-all hover-lift group shadow-sm">
              <div className="h-16 w-28 bg-white rounded-xl p-2 flex items-center justify-center border border-red-300 flex-shrink-0 shadow-sm">
                <img src={AGIOO_LOGO} alt="Agioo Coolant" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-red-600 text-white shadow">PROMO ASTM</span>
                <h4 className="text-sm font-bold text-zinc-900 mt-1">Agioo Radiator Coolant</h4>
                <p className="text-[11px] text-zinc-600">Teruji ASTM D1120/D1384 & Hemat BBM 26%</p>
              </div>
            </div>

            {/* Ad 2: Mizu-X Logo Banner */}
            <div className="bg-slate-50 border-2 border-amber-300 rounded-2xl p-5 flex items-center gap-4 hover:border-amber-500 transition-all hover-lift group shadow-sm">
              <div className="h-16 w-28 bg-white rounded-xl p-2 flex items-center justify-center border border-amber-300 flex-shrink-0 shadow-sm">
                <img src={MIZUX_LOGO} alt="Mizu-X Autocare" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-yellow-400 text-black shadow">FAST MOVING</span>
                <h4 className="text-sm font-bold text-zinc-900 mt-1">Mizu-X Autocare</h4>
                <p className="text-[11px] text-zinc-600">Detailing, Wash & Wax, Back to Black</p>
              </div>
            </div>

            {/* Ad 3: Bio Luminex Logo Banner */}
            <div className="bg-slate-50 border-2 border-red-200 rounded-2xl p-5 flex items-center gap-4 hover:border-red-500 transition-all hover-lift group shadow-sm">
              <div className="h-16 w-28 bg-white rounded-xl p-2 flex items-center justify-center border border-red-300 flex-shrink-0 shadow-sm">
                <img src={BIOLUMINEX_LOGO} alt="Bio Luminex Biotech" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-red-600 text-white shadow">GREEN CHEM</span>
                <h4 className="text-sm font-bold text-zinc-900 mt-1">Bio-Luminex Biotech</h4>
                <p className="text-[11px] text-zinc-600">Kimia Organik & Solusi Luminesensi</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Corporate Metrics Ribbon */}
      <div className="relative z-10 w-full border-t border-b border-zinc-200 bg-white py-6">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div className="space-y-1 border-r border-zinc-200 last:border-r-0">
            <div className="text-3xl sm:text-4xl font-serif font-extrabold text-red-600">26%</div>
            <div className="text-xs tracking-wider uppercase text-zinc-600 font-bold">Efisiensi Bahan Bakar</div>
          </div>

          <div className="space-y-1 border-r border-zinc-200 last:border-r-0">
            <div className="text-3xl sm:text-4xl font-serif font-extrabold text-amber-500">Up To 30%</div>
            <div className="text-xs tracking-wider uppercase text-zinc-600 font-bold">Margin Grosir PT/CV</div>
          </div>

          <div className="space-y-1 border-r border-zinc-200 last:border-r-0">
            <div className="text-3xl sm:text-4xl font-serif font-extrabold text-red-600">5+</div>
            <div className="text-xs tracking-wider uppercase text-zinc-600 font-bold">Pengujian ASTM Lab</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-serif font-extrabold text-zinc-900">1,000+</div>
            <div className="text-xs tracking-wider uppercase text-zinc-600 font-bold">Jaringan Retail & Bengkel</div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
