/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group rounded-3xl p-6 hover-lift border-2 border-zinc-200 hover:border-red-500/60 cursor-pointer flex flex-col justify-between transition-luxury relative bg-white text-zinc-900 shadow-md hover:shadow-xl"
      onClick={() => onClick(product)}
    >
      
      {/* Top Badges */}
      <div className="flex items-center justify-between gap-2 mb-4 z-10">
        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-100 text-red-600 border border-red-300">
          PT JMV Official
        </span>

        {product.astmCertified && (
          <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-yellow-400 text-black shadow">
            ASTM Certified
          </span>
        )}
      </div>

      {/* Product Image Stage */}
      <div className="relative w-full aspect-square rounded-2xl bg-slate-50 flex items-center justify-center p-6 mb-6 overflow-hidden border border-zinc-200">
        
        {/* Soft Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <img 
          src={product.imageUrl} 
          alt={product.name} 
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Quick View Button Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-red-600 text-white px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            Detail & Spek →
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2 text-left">
        <div className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider">
          {product.category} • {product.volume || '1 Unit'}
        </div>

        <h3 className="text-xl font-serif font-bold text-zinc-900 group-hover:text-red-600 transition-colors leading-snug">
          {product.name}
        </h3>

        <p className="text-xs text-zinc-600 font-light line-clamp-2 leading-relaxed">
          {product.tagline}
        </p>

        <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
          <span className="text-xs font-bold text-zinc-600 group-hover:text-red-600 transition-colors">
            Lihat Spesifikasi & Detail
          </span>

          <div className="p-2 rounded-xl bg-red-50 border border-red-200 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
