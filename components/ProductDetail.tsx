/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Product } from '../types';
import { COMPANY_NAME, WHATSAPP_CONTACT } from '../constants';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.imageUrl);
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.imageUrl];

  const handleInquireWA = () => {
    const text = `Halo Tim ${COMPANY_NAME},\n\nSaya ingin berkonsultasi & menanyakan informasi lebih lanjut mengenai produk:\n*Produk*: ${product.name}\n*Kategori*: ${product.category}\n*Kemasan*: ${product.volume || '-'}\n\nMohon dibantu. Terima kasih.`;
    window.open(`https://wa.me/${WHATSAPP_CONTACT}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-28 min-h-screen bg-slate-50 text-zinc-900 animate-fade-in-up">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-red-600 hover:text-zinc-900 transition-colors mb-8"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Kembali ke Katalog Produk</span>
        </button>

        {/* Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Gallery */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main Image Container */}
            <div className="w-full aspect-square rounded-3xl bg-white p-8 flex items-center justify-center border-2 border-zinc-200 relative overflow-hidden shadow-xl">
              <img 
                src={selectedImage} 
                alt={product.name} 
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-500 hover:scale-105"
              />
              
              {product.astmCertified && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow border border-yellow-500">
                  ASTM Lab Certified Formula
                </div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-xl bg-white p-2 border-2 transition-all flex-shrink-0 shadow-sm ${
                      selectedImage === img ? 'border-red-600 scale-105 shadow-md' : 'border-zinc-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Specs & CTAs */}
          <div className="lg:col-span-6 space-y-8 bg-white p-8 sm:p-10 rounded-3xl border-2 border-zinc-200 shadow-xl">
            
            {/* Header info */}
            <div className="space-y-3 border-b border-zinc-200 pb-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-100 text-red-600 border border-red-300">
                  {COMPANY_NAME}
                </span>
                <span className="text-xs text-red-600 uppercase tracking-wider font-bold">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-zinc-700 font-medium">
                {product.tagline}
              </p>

              {product.volume && (
                <div className="pt-1 text-xs text-zinc-500 font-semibold">
                  Kemasan Varian: <span className="text-zinc-900 font-bold">{product.volume}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest font-bold text-red-600">Deskripsi & Keunggulan Formulasi</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-light">
                {product.longDescription || product.description}
              </p>
            </div>

            {/* Key Features List */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest font-bold text-red-600">Fitur Utama & Sertifikasi</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-800 font-medium">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs Table */}
            {product.specs && (
              <div className="space-y-3 pt-4 border-t border-zinc-200">
                <h3 className="text-xs uppercase tracking-widest font-bold text-red-600">Spesifikasi Teknis</h3>
                <div className="bg-slate-50 rounded-2xl border border-zinc-200 divide-y divide-zinc-200 text-xs">
                  {product.specs.map((s, idx) => (
                    <div key={idx} className="flex justify-between p-3.5">
                      <span className="text-zinc-500 font-medium">{s.label}</span>
                      <span className="font-bold text-zinc-900 text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* B2B Action Button */}
            <div className="pt-6">
              <button
                onClick={handleInquireWA}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-extrabold text-xs tracking-widest uppercase shadow-xl shadow-red-600/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 border border-red-400/40"
              >
                <span>Konsultasi & Tanya Informasi Produk via WA</span>
                <span>💬</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
