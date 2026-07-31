/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { WHATSAPP_CONTACT, COMPANY_NAME } from '../constants';
import { DistributorFormInput } from '../types';

const DistributorSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState<DistributorFormInput>({
    companyName: '',
    entityType: 'PT',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const message = `Halo Management ${COMPANY_NAME},\n\nSaya mengajukan permohonan kemitraan Distributor Resmi:\n\n*Nama Perusahaan*: ${formData.companyName} (${formData.entityType})\n*Penanggung Jawab*: ${formData.contactPerson}\n*Kota/Kabupaten*: ${formData.city}\n*No. HP/WA*: ${formData.phone}\n*Email*: ${formData.email}\n*Catatan*: ${formData.notes || '-'}`;
    
    const waUrl = `https://wa.me/${WHATSAPP_CONTACT}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <section id="distributor" className="py-24 bg-gradient-to-b from-slate-50 via-white to-red-50/30 text-zinc-900 relative overflow-hidden border-b border-zinc-200">
      
      {/* Red & Yellow Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-600 text-xs font-extrabold tracking-widest uppercase shadow-sm">
            <span>Program Kemitraan Distributor Resmi</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight leading-tight text-zinc-900">
            Peluang Kemitraan Grosir PT / CV
          </h2>

          <p className="text-lg text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            Dapatkan hak distribusi resmi produk manufaktur <strong className="text-zinc-900 font-bold">{COMPANY_NAME}</strong> dengan marjin usaha hingga 30%, garansi garansi perputaran barang, dan fasilitas promosi wilayah.
          </p>
        </div>

        {/* Reward Prizes Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 mb-16 border-2 border-red-500/30 shadow-xl max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-red-600 font-extrabold">Insentif & Program Hadiah Kemitraan</span>
            <h3 className="text-2xl sm:text-4xl font-serif text-zinc-900 font-bold mt-1">
              Program Insentif Penjualan Berkelanjutan
            </h3>
            <p className="text-xs text-zinc-500 mt-1">Syarat & Ketentuan Kualifikasi Omset Berlaku untuk Mitra Resmi</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            
            <div className="bg-slate-50 border-2 border-red-200 p-5 rounded-2xl text-center space-y-3 hover:border-red-600 transition-all hover-lift shadow-sm">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto text-xl border border-red-300 shadow-sm">
                🚚
              </div>
              <div className="text-sm font-bold text-zinc-900">Mobil Isuzu Traga</div>
              <div className="text-[11px] text-zinc-500 font-medium">Grand Prize Omset Tahunan</div>
            </div>

            <div className="bg-slate-50 border-2 border-amber-300 p-5 rounded-2xl text-center space-y-3 hover:border-amber-500 transition-all hover-lift shadow-sm">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-xl border border-amber-300 shadow-sm">
                🪙
              </div>
              <div className="text-sm font-bold text-zinc-900">Logam Mulia Antam</div>
              <div className="text-[11px] text-zinc-500 font-medium">Emas Murni 10gr - 100gr</div>
            </div>

            <div className="bg-slate-50 border-2 border-red-200 p-5 rounded-2xl text-center space-y-3 hover:border-red-600 transition-all hover-lift shadow-sm">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto text-xl border border-red-300 shadow-sm">
                🛵
              </div>
              <div className="text-sm font-bold text-zinc-900">Motor Listrik</div>
              <div className="text-[11px] text-zinc-500 font-medium">Bonus Reward Semester</div>
            </div>

            <div className="bg-slate-50 border-2 border-amber-300 p-5 rounded-2xl text-center space-y-3 hover:border-amber-500 transition-all hover-lift shadow-sm">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-xl border border-amber-300 shadow-sm">
                📱
              </div>
              <div className="text-sm font-bold text-zinc-900">Smartphone Flagship</div>
              <div className="text-[11px] text-zinc-500 font-medium">Gadget Operasional Sales</div>
            </div>

            <div className="bg-slate-50 border-2 border-red-200 p-5 rounded-2xl text-center space-y-3 hover:border-red-600 transition-all hover-lift shadow-sm">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto text-xl border border-red-300 shadow-sm">
                ⛽
              </div>
              <div className="text-sm font-bold text-zinc-900">Voucher Pertamina</div>
              <div className="text-[11px] text-zinc-500 font-medium">Dukungan BBM Armada</div>
            </div>

          </div>
        </div>

        {/* Full Centered Registration Form */}
        <div id="form-distributor" className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border-2 border-red-500/40 shadow-2xl">
          
          <div className="text-center mb-8 border-b border-zinc-200 pb-6">
            <h3 className="text-3xl font-serif font-extrabold text-zinc-900">Formulir Pendaftaran Mitra PT / CV</h3>
            <p className="text-sm text-zinc-600 mt-2">Silakan lengkapi data legalitas perusahaan Anda untuk mendapatkan katalog grosir resmi dan proposal kerjasama.</p>
          </div>

          {formSubmitted ? (
            <div className="p-8 text-center space-y-4 bg-red-50 border-2 border-red-400 rounded-2xl">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-3xl mx-auto border-2 border-red-400">
                ✓
              </div>
              <h4 className="text-2xl font-serif font-bold text-red-600">Permohonan Terkirim!</h4>
              <p className="text-sm text-zinc-700 leading-relaxed max-w-md mx-auto">
                Terima kasih. Anda sedang terhubung langsung ke WhatsApp Management PT Jaya Mandiri Ventures untuk verifikasi berkas perusahaan.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-xs font-bold rounded-full text-white uppercase tracking-wider shadow"
              >
                Kirim Permohonan Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Nama Perusahaan *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Contoh: PT Maju Mandiri Otomotif"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Badan Hukum *</label>
                  <select 
                    value={formData.entityType}
                    onChange={(e) => setFormData({ ...formData, entityType: e.target.value as 'PT' | 'CV' })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-red-600 font-semibold"
                  >
                    <option value="PT">PT (Perseroan Terbatas)</option>
                    <option value="CV">CV (Commanditaire Vennootschap)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Nama Penanggung Jawab *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Nama Direktur / Manager"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Kota / Kabupaten *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Contoh: Surabaya, Medan, Makassar"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">No. WhatsApp Operasional *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Email Bisnis *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="distributor@perusahaan.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Catatan Tambahan (Opsional)</label>
                <textarea 
                  rows={3}
                  placeholder="Sebutkan cakupan wilayah distribusi atau pertanyaan spesifik perusahaan Anda..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-red-600 transition-colors"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-extrabold text-xs tracking-widest uppercase shadow-xl shadow-red-600/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 border border-red-400/40"
              >
                <span>Kirim Permohonan Kemitraan via WhatsApp</span>
                <span>→</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

export default DistributorSection;
