/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { AGIOO_LOGO, MIZUX_LOGO, BIOLUMINEX_LOGO } from '../constants';

const BrandShowcase: React.FC = () => {
  return (
    <section id="pillars" className="py-24 bg-white relative overflow-hidden text-zinc-900 border-b border-zinc-200">
      
      {/* Decorative Red & Yellow Subtle Gradient Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-600 bg-red-100 border border-red-300 px-4 py-1.5 rounded-full inline-block">
            Pilar Formulasi & Manufaktur PT JMV
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900">
            Solusi Kimia & Otomotif Standar Mutu Tinggi
          </h2>
          <p className="text-base text-zinc-600 font-light leading-relaxed">
            PT Jaya Mandiri Ventures memproduksi dan mendistribusikan rangkaian produk kimia berkualitas tinggi yang dirancang untuk performa mesin, estetika kendaraan, dan efisiensi industri.
          </p>
        </div>

        {/* 3 Engineering Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Radiator Coolant Chemistry */}
          <div className="rounded-3xl p-8 hover-lift border-2 border-red-500/30 flex flex-col justify-between group transition-luxury bg-[#09090B] text-white shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-red-600 text-white shadow">
                  Coolant & Antifreeze
                </span>
                <span className="text-xs text-yellow-400 font-extrabold">ASTM Lab Certified</span>
              </div>

              {/* Agioo Brand Logo Display */}
              <div className="h-20 bg-white/95 rounded-2xl p-3 flex items-center justify-center mb-6 border-2 border-red-500/30 shadow-md">
                <img 
                  src={AGIOO_LOGO} 
                  alt="Agioo Radiator Coolant Logo" 
                  className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                Formulasi Radiator Coolant
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                Cairan pendingin radiator unggulan PT JMV yang teruji laboratorium internasional ASTM D1120/D1384. Mencegah overheating, garansi anti-karat, dan menghemat konsumsi BBM hingga 26%.
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Teruji Standar ASTM D1120, D1170, D1384, D4340, D2809
                </li>
                <li className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Efisiensi Pembakaran Mesin & BBM Hingga 26%
                </li>
                <li className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Perlindungan Anti-Karat & Anti-Kavitasi Pompa Air
                </li>
              </ul>
            </div>

            <a
              href="#products"
              className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
            >
              <span>Lihat Produk Coolant</span>
              <span>→</span>
            </a>
          </div>

          {/* Card 2: Autocare & Detailing */}
          <div className="rounded-3xl p-8 hover-lift border-2 border-amber-400/50 flex flex-col justify-between group transition-luxury bg-[#09090B] text-white shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-yellow-400 text-black shadow">
                  Autocare & Detailing
                </span>
                <span className="text-xs text-red-400 font-extrabold">Fast Moving Retail</span>
              </div>

              {/* Mizu-X Brand Logo Display */}
              <div className="h-20 bg-white/95 rounded-2xl p-3 flex items-center justify-center mb-6 border-2 border-amber-400/30 shadow-md">
                <img 
                  src={MIZUX_LOGO} 
                  alt="Mizu-X Autocare Logo" 
                  className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                Perawatan Kendaraan Retail
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                Rangkaian perawatan kendaraan fast-moving dari PT JMV: Penghitam Trim Hydrophobic, Shampoo Wash & Wax Carnauba, Pembersih Jamur Kaca, Cairan Wiper, dan Pengharum Kabin.
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  Back to Black Formula Daun Talas (Hydrophobic)
                </li>
                <li className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  Shampoo Wash & Wax High Carnauba Gloss
                </li>
                <li className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  Varian Pouch 200mL & Sachet 40mL Ekonomis
                </li>
              </ul>
            </div>

            <a
              href="#products"
              className="w-full py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/30"
            >
              <span>Lihat Produk Detailing</span>
              <span>→</span>
            </a>
          </div>

          {/* Card 3: Bio Luminex Biotech */}
          <div className="rounded-3xl p-8 hover-lift border-2 border-red-500/30 flex flex-col justify-between group transition-luxury bg-[#09090B] text-white shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-red-600 text-white shadow">
                  Biotech & Chemistry
                </span>
                <span className="text-xs text-yellow-400 font-extrabold">Green Chemical</span>
              </div>

              {/* Bio Luminex Brand Logo Display */}
              <div className="h-20 bg-white/95 rounded-2xl p-3 flex items-center justify-center mb-6 border-2 border-red-500/30 shadow-md">
                <img 
                  src={BIOLUMINEX_LOGO} 
                  alt="Bio Luminex Logo" 
                  className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                Bioteknologi & Kimia Industri
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                Inovasi formulasi kimia hijau ramah lingkungan dari PT Jaya Mandiri Ventures untuk efisiensi termal sistem otomotif modern dan aplikasi luminesensi industri.
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Formulasi Hijau Biodegradable Ramah Lingkungan
                </li>
                <li className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Perlindungan Tingkat Molekuler Suhu Ekstrem
                </li>
                <li className="flex items-center gap-2 text-xs text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Riset & Pengembangan Laboratorium PT JMV
                </li>
              </ul>
            </div>

            <a
              href="#products"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600 text-white font-extrabold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Lihat Produk Biotech</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BrandShowcase;
