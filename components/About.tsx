/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { COMPANY_NAME, LOGO_IMAGE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white text-zinc-900 relative overflow-hidden border-b border-zinc-200">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1700px] mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
        
        <div className="lg:w-5/12 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-14 w-auto flex items-center justify-center">
              <img src={LOGO_IMAGE} alt={COMPANY_NAME} className="h-full w-auto object-contain filter drop-shadow-md" />
            </div>
            <div>
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-red-600">PROFIL PERUSAHAAN</span>
              <h3 className="text-lg font-serif font-bold text-zinc-900">{COMPANY_NAME}</h3>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-zinc-900 leading-tight">
            Dedikasi Mutu & Inovasi Formulasi Otomotif.
          </h2>

          <div className="p-6 bg-slate-50 rounded-3xl border border-zinc-200 shadow-md space-y-3">
            <div className="text-xl font-serif font-bold text-red-600">Manufaktur Kimia Terpercaya</div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Perusahaan manufaktur & distribusi nasional yang memproduksi radiator coolant berstandar internasional ASTM, solusi autocare fast-moving, dan formulasi kimia hijau ramah lingkungan.
            </p>
          </div>
        </div>

        <div className="lg:w-7/12 space-y-6">
          <p className="text-lg md:text-xl text-zinc-700 font-light leading-relaxed">
            <strong className="text-zinc-900 font-semibold">{COMPANY_NAME}</strong> didirikan dengan komitmen untuk menghadirkan produk cairan pendingin mesin dan perawatan kendaraan berstandar internasional bagi masyarakat Indonesia. Kami meyakini bahwa perlindungan mesin yang handal adalah fondasi kenyamanan berkendara.
          </p>

          <p className="text-lg md:text-xl text-zinc-700 font-light leading-relaxed">
            Melalui riset laboratorium mandiri dan pengujian ketat berbasis standar <strong className="text-red-600 font-bold">ASTM International</strong>, produk-produk kami terbukti ampuh mencegah karat, menstabilkan suhu mesin di kemacetan, dan menghemat konsumsi BBM hingga 26%.
          </p>

          {/* National Footprint Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-200">
            <div className="p-5 bg-slate-50 rounded-2xl border border-zinc-200 shadow-md space-y-1">
              <div className="text-3xl font-serif font-extrabold text-red-600">34</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Provinsi Terjangkau</div>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-zinc-200 shadow-md space-y-1">
              <div className="text-3xl font-serif font-extrabold text-amber-500">1,000+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Mitra Bengkel & Retail</div>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-zinc-200 shadow-md space-y-1">
              <div className="text-3xl font-serif font-extrabold text-zinc-900">5+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Pengujian ASTM Lab</div>
            </div>
          </div>
        </div>

      </div>

      {/* Filosofi Kualitas - BRIGHT & ATTRACTIVE RED-SLATE GRADIENT THEME (NO DARK PATCHES) */}
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500/30">
          
          <div className="flex flex-col justify-center p-12 lg:p-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
             <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-yellow-300 mb-4 bg-red-900/60 border border-red-400/40 px-3 py-1 rounded-full w-fit">
               FILOSOFI KUALITAS
             </span>
             <h3 className="text-4xl md:text-5xl font-serif font-extrabold mb-6 text-white leading-tight">
               Presisi Standar <br/> ASTM International.
             </h3>
             <p className="text-base text-red-100 font-light leading-relaxed mb-8 max-w-lg">
               Setiap batch formulasi diproduksi melalui kontrol kualitas berlapis untuk memenuhi spesifikasi ASTM D1120 (Boiling Point), ASTM D1384 (Corrosion Test), dan ASTM D2809 (Cavitation Protection). Memastikan blok mesin kendaraan bebas dari keretakan kavitasi.
             </p>
             <div className="inline-flex items-center gap-3 text-xs font-extrabold text-yellow-300 uppercase tracking-wider bg-white/10 p-3 rounded-xl border border-white/20 w-fit">
               <span>Formulasi Teruji Laboratorium Induk</span>
               <span>✓</span>
             </div>
          </div>

          <div className="relative h-[420px] lg:h-auto overflow-hidden group bg-slate-50 flex items-center justify-center p-12 border-l border-red-200">
             <img 
               src={LOGO_IMAGE} 
               alt="PT Jaya Mandiri Ventures" 
               className="max-h-[340px] w-auto object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_15px_30px_rgba(220,38,38,0.3)]"
             />
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;