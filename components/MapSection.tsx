/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { COMPANY_NAME, LOGO_IMAGE } from '../constants';

const MapSection: React.FC = () => {
  const fullAddress = "Gedung SOHO Pancoran, Jl. Letjen M.T. Haryono Kav. 2-3, RT.3/RW.3, Tebet Barat, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810, Indonesia";
  const mapAddressQuery = encodeURIComponent(fullAddress);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapAddressQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-20 bg-slate-50 text-zinc-900 border-b border-zinc-200 relative">
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 space-y-12">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-red-600 bg-red-100 border border-red-300 px-4 py-1.5 rounded-full inline-block shadow-sm">
            KANTOR PUSAT & OPERASIONAL
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900">
            Lokasi Head Office PT JMV
          </h2>
          <p className="text-sm text-zinc-600 font-light leading-relaxed">
            Kunjungi Kantor Pusat PT Jaya Mandiri Ventures untuk konsultasi kemitraan, verifikasi berkas distributor, dan pertemuan bisnis resmi.
          </p>
        </div>

        {/* Map & Office Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Detail Card */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border-2 border-red-500/30 shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-auto flex items-center justify-center">
                  <img src={LOGO_IMAGE} alt={COMPANY_NAME} className="h-full w-auto object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-extrabold text-zinc-900">{COMPANY_NAME}</h3>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Head Office SOHO Pancoran</span>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-zinc-200 space-y-2">
                <div className="text-xs font-extrabold text-red-600 uppercase tracking-wider flex items-center gap-1.5">
                  <span>📍 Alamat Resmi Kantor Pusat</span>
                </div>
                <p className="text-xs text-zinc-800 leading-relaxed font-bold">
                  {fullAddress}
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-zinc-200">
                  <span className="text-zinc-500 font-medium">Gedung / Kompleks:</span>
                  <span className="font-extrabold text-zinc-900">SOHO Pancoran Jakarta</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-zinc-200">
                  <span className="text-zinc-500 font-medium">Jam Operasional:</span>
                  <span className="font-bold text-zinc-900">Senin - Jumat (08.00 - 17.00 WIB)</span>
                </div>
                <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-zinc-200">
                  <span className="text-zinc-500 font-medium">Layanan WA CS:</span>
                  <span className="font-extrabold text-red-600">+62 812-3456-7890</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200">
              <a
                href={`https://maps.google.com/?q=${mapAddressQuery}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 border border-red-400/40"
              >
                <span>Buka Navigasi Rute di Google Maps</span>
                <span>🧭</span>
              </a>
            </div>

          </div>

          {/* Right Interactive Google Maps Embed Container */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border-2 border-zinc-200 shadow-xl min-h-[440px] relative">
            <iframe
              title="Lokasi Gedung SOHO Pancoran PT Jaya Mandiri Ventures"
              src={mapEmbedUrl}
              className="w-full h-full min-h-[440px] border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MapSection;
