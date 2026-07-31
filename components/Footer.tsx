/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { COMPANY_NAME, LOGO_IMAGE, WHATSAPP_CONTACT, AGIOO_LOGO, MIZUX_LOGO, BIOLUMINEX_LOGO } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-gradient-to-b from-slate-100 via-white to-red-50/40 text-zinc-900 pt-20 pb-12 px-6 sm:px-10 border-t-4 border-red-600 relative shadow-inner">
      
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Brand Identity & Logo Column */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-14 sm:h-16 md:h-20 px-3 py-1.5 rounded-2xl bg-white flex items-center justify-center border-2 border-red-500/40 shadow-md">
              <img 
                src={LOGO_IMAGE} 
                alt={COMPANY_NAME} 
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-zinc-900 tracking-tight">{COMPANY_NAME}</h4>
              <span className="text-xs font-extrabold tracking-widest text-red-600 uppercase">
                PERUSAHAAN PRINSIPAL (PRINCIPAL COMPANY)
              </span>
            </div>
          </div>

          <p className="text-sm text-zinc-600 font-light leading-relaxed max-w-lg">
            PT Jaya Mandiri Ventures (JMV) adalah Perusahaan Prinsipal (Principal Company) terdepan di Indonesia. Memegang riset lisensi formulasi cairan pendingin radiator berstandar internasional ASTM, solusi perawatan kendaraan fast-moving, dan formulasi kimia industri modern.
          </p>

          <div className="p-4 bg-white rounded-2xl border border-zinc-200 shadow-sm space-y-1">
            <div className="text-xs font-extrabold text-red-600 uppercase tracking-wider">📍 Kantor Pusat / Head Office</div>
            <div className="text-xs text-zinc-800 font-bold leading-relaxed">
              Gedung SOHO Pancoran, Jl. Letjen M.T. Haryono Kav. 2-3, RT.3/RW.3, Tebet Barat, Kec. Tebet, Kota Jakarta Selatan, DKI Jakarta 12810
            </div>
          </div>

          <div className="pt-2">
            <a 
              href={`https://wa.me/${WHATSAPP_CONTACT}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-red-600/20 transition-all border border-red-400/40"
            >
              <span>Hubungi Management / Layanan WA</span>
              <span>📲</span>
            </a>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-extrabold text-red-600 text-xs uppercase tracking-widest">Navigasi Utama</h4>
          <ul className="space-y-3 text-xs text-zinc-700 font-bold">
            <li>
              <a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-red-600 transition-colors">
                Katalog Produk & Solusi Formulasi
              </a>
            </li>
            <li>
              <a href="#distributor" onClick={(e) => onLinkClick(e, 'distributor')} className="hover:text-red-600 transition-colors">
                Program Kemitraan Distributor PT / CV
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-red-600 transition-colors">
                Profil & Standar Mutu Prinsipal
              </a>
            </li>
            <li>
              <a href="#location" onClick={(e) => onLinkClick(e, 'location')} className="hover:text-red-600 transition-colors">
                Lokasi Head Office & Peta Maps
              </a>
            </li>
          </ul>
        </div>

        {/* Brand Showcase Advertisements in Footer */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-extrabold text-red-600 text-xs uppercase tracking-widest">Merek & Lini Formulasi Prinsipal</h4>
          <div className="space-y-3">
            <div className="bg-white border border-zinc-200 p-3 rounded-2xl flex items-center gap-3.5 shadow-sm hover:border-red-400 transition-colors">
              <img src={AGIOO_LOGO} alt="Agioo" className="h-9 w-auto bg-slate-50 p-1 rounded-lg border border-red-200 object-contain" />
              <div className="text-[11px]">
                <div className="font-extrabold text-zinc-900">Agioo Radiator Coolant</div>
                <div className="text-zinc-500 font-medium text-[10px]">Teruji ASTM D1120/D1384 & Hemat BBM 26%</div>
              </div>
            </div>

            <div className="bg-white border border-zinc-200 p-3 rounded-2xl flex items-center gap-3.5 shadow-sm hover:border-amber-400 transition-colors">
              <img src={MIZUX_LOGO} alt="Mizu-X" className="h-9 w-auto bg-slate-50 p-1 rounded-lg border border-amber-200 object-contain" />
              <div className="text-[11px]">
                <div className="font-extrabold text-zinc-900">Mizu-X Autocare</div>
                <div className="text-zinc-500 font-medium text-[10px]">Detailing, Wash & Wax, Back to Black</div>
              </div>
            </div>

            <div className="bg-white border border-zinc-200 p-3 rounded-2xl flex items-center gap-3.5 shadow-sm hover:border-red-400 transition-colors">
              <img src={BIOLUMINEX_LOGO} alt="Bio Luminex" className="h-9 w-auto bg-slate-50 p-1 rounded-lg border border-red-200 object-contain" />
              <div className="text-[11px]">
                <div className="font-extrabold text-zinc-900">Bio-Luminex Biotech</div>
                <div className="text-zinc-500 font-medium text-[10px]">Formulasi Biokimia Hijau Ramah Lingkungan</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-[1700px] mx-auto mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 space-y-2 sm:space-y-0">
        <p>© 2026 {COMPANY_NAME}. All rights reserved.</p>
        <p className="text-zinc-600 font-bold">Website Resmi Perusahaan Prinsipal (Principal Company) PT Jaya Mandiri Ventures</p>
      </div>

    </footer>
  );
};

export default Footer;
