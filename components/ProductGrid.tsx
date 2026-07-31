/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

const CATEGORY_TABS = [
  'Semua Produk PT JMV',
  'Coolant & Radiator',
  'Car Detailing',
  'Air Freshener',
  'Wiper & Wash',
  'Biotech & Luminescence'
];

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('Semua Produk PT JMV');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyAstm, setOnlyAstm] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category Filter
      if (activeCategory !== 'Semua Produk PT JMV' && product.category !== activeCategory) return false;

      // ASTM Filter
      if (onlyAstm && !product.astmCertified) return false;

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        const matchCat = product.category.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchCat) return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery, onlyAstm]);

  return (
    <section id="products" className="py-24 px-6 sm:px-10 bg-slate-50 relative text-zinc-900 border-b border-zinc-200">
      <div className="max-w-[1700px] mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-600 bg-red-100 border border-red-300 px-4 py-1.5 rounded-full inline-block shadow-sm">
            Katalog Resmi Manufaktur PT JMV
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900">
            Formulasi Performa & Care Otomotif
          </h2>
          <p className="text-sm text-zinc-600 font-light leading-relaxed">
            Jelajahi seluruh jajaran produk resmi PT Jaya Mandiri Ventures: Radiator Coolant berstandar ASTM, lini autocare & detailing, hingga formulasi bioteknologi.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {CATEGORY_TABS.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 ${
                  isActive 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105 border border-red-400' 
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-300 shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filter Sub-Bar & Search */}
        <div className="bg-white rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-zinc-200 shadow-md">
          
          {/* Quick Filter ASTM */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setOnlyAstm(!onlyAstm)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                onlyAstm 
                  ? 'bg-yellow-400 text-black shadow-md border border-yellow-500' 
                  : 'bg-slate-100 text-red-600 border border-red-200 hover:bg-red-50'
              }`}
            >
              <span>{onlyAstm ? '✓ Hanya Standar ASTM Lab' : 'Filter ASTM Lab Certified'}</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Cari produk (e.g. Coolant, Back to Black, Wiper)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
            />
            <svg className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs text-zinc-600">
          <span>Menampilkan <strong className="text-zinc-900 font-bold">{filteredProducts.length}</strong> produk pilihan PT JMV</span>
          {(activeCategory !== 'Semua Produk PT JMV' || searchQuery !== '' || onlyAstm) && (
            <button 
              onClick={() => { setActiveCategory('Semua Produk PT JMV'); setSearchQuery(''); setOnlyAstm(false); }}
              className="text-red-600 hover:text-red-700 hover:underline font-bold"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={onProductClick} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-zinc-200 shadow-md space-y-3">
            <div className="text-3xl">🔍</div>
            <h3 className="text-lg font-serif font-bold text-zinc-900">Produk Tidak Ditemukan</h3>
            <p className="text-xs text-zinc-600">Coba ubah kata kunci pencarian atau reset filter kategori.</p>
            <button 
              onClick={() => { setActiveCategory('Semua Produk PT JMV'); setSearchQuery(''); setOnlyAstm(false); }}
              className="px-5 py-2 bg-red-600 text-white text-xs font-bold rounded-full"
            >
              Tampilkan Semua Produk
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductGrid;
