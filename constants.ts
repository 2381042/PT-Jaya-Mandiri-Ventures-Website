/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Product } from './types';

export const COMPANY_NAME = 'PT Jaya Mandiri Ventures';
export const SHORT_NAME = 'PT JMV';
export const LOGO_IMAGE = '/images/jmv_logo-removebg-preview (1).png';
export const WHATSAPP_CONTACT = '6281234567890';

export const AGIOO_LOGO = '/images/Agioo Logo 1.png';
export const MIZUX_LOGO = '/images/Mizu-X Logo 1.png';
export const BIOLUMINEX_LOGO = '/images/FA_Bio_Luminex_Page_2-removebg-preview.png';

export const PRIMARY_COLOR = '#DC2626';
export const SECONDARY_COLOR = '#EAB308';
export const DARK_BG = '#09090B';

export const DISTRIBUTOR_BENEFITS = [
  {
    title: 'Margin Keuntungan Besar Up To 30%',
    desc: 'Skema harga grosir bertingkat yang memberikan marjin usaha sangat tinggi untuk distributor berbadan hukum PT / CV.',
    icon: 'chart'
  },
  {
    title: 'Program Penjualan & Garansi Turn-over',
    desc: 'PT JMV membantu pemasaran melalui program promosi nasional, iklan digital, dan dukungan materi promosi lengkap.',
    icon: 'rocket'
  },
  {
    title: 'Hadiah Langsung Tanpa Diundi',
    desc: 'Raih bonus Mobil Isuzu Traga, Logam Mulia Emas Antam, Motor Listrik, Smartphone Flagship, hingga Voucher Pertamina.',
    icon: 'gift'
  },
  {
    title: 'Jaringan Distribusi Nasional',
    desc: 'Produk PT JMV telah tersebar di ribuan toko retail, bengkel resmi, minimarket, dan supermarket di seluruh Indonesia.',
    icon: 'map'
  }
];

export const ASTM_STANDARDS = [
  { code: 'ASTM D1120', label: 'Boiling Point Standard', desc: 'Pengujian titik didih tinggi untuk mencegah penguapan dan penggelembungan udara.' },
  { code: 'ASTM D1170', label: 'Material Compatibility', desc: 'Uji ketahanan terhadap komponen karet, selang sintetis, dan seal mesin.' },
  { code: 'ASTM D1384', label: 'Corrosion Test in Glassware', desc: 'Pengujian perlindungan logam multi-komponen (tembaga, solder, kuningan, baja, besi, aluminium).' },
  { code: 'ASTM D4340', label: 'Heat Rejection in Aluminium', desc: 'Efisiensi pelepasan panas ekstrem pada blok mesin berbahan aluminium murni.' },
  { code: 'ASTM D2809', label: 'Cavitation Erosion', desc: 'Mencegah kerusakan erosi kavitasi pada pompa air (water pump) kendaraan.' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'agioo-1l',
    brand: 'jmv',
    brandName: 'PT Jaya Mandiri Ventures',
    name: 'Agioo Antifreeze + Coolant 1L',
    tagline: 'Teruji ASTM International - Hemat BBM hingga 26%',
    description: 'Radiator coolant performa tinggi yang direkayasa khusus mencegah overheating, menjaga suhu kerja mesin tetap dingin presisi, serta melindungi sistem pendingin dari karat dan korosi.',
    longDescription: 'Agioo Antifreeze + Coolant 1 Liter dirumuskan dengan teknologi aditif organik mutakhir dari PT Jaya Mandiri Ventures yang memenuhi standar internasional ASTM D1120, D1170, D1384, D4340, dan D2809. Teruji secara independen mampu meningkatkan efisiensi pembakaran mesin sehingga menghemat BBM hingga 26% dibanding air radiator biasa.',
    volume: '1 Liter',
    category: 'Coolant & Radiator',
    imageUrl: '/images/Agioo Antifreeze+Coolant 1L.png',
    gallery: [
      '/images/Agioo Antifreeze+Coolant 1L.png',
      '/images/Agioo Jerry Can.png'
    ],
    features: [
      'Teruji Laboratorium ASTM D1120 & D1384',
      'Efisiensi Konsumsi BBM Hingga 26%',
      'Perlindungan Maksimal Terhadap Karat & Erosi Kavitasi',
      'Mencegah Overheating Saat Kemacetan Panjang',
      'Aman Untuk Semua Jenis Radiator Aluminium & Tembaga'
    ],
    specs: [
      { label: 'Standar Mutu', value: 'ASTM D1120, D1170, D1384, D4340, D2809' },
      { label: 'Volume Bersih', value: '1,000 mL (1 Liter)' },
      { label: 'Suhu Didih', value: '> 108°C High Boiling Point' },
      { label: 'Ketahanan', value: 'Hingga 50.000 KM / 2 Tahun' }
    ],
    astmCertified: true,
    fastMoving: true
  },
  {
    id: 'agioo-5l',
    brand: 'jmv',
    brandName: 'PT Jaya Mandiri Ventures',
    name: 'Agioo Coolant Jerry Can 5L',
    tagline: 'Kapasitas Fleet & Bengkel Profesional 5 Liters',
    description: 'Solusi hemat & efisien untuk pengisian penuh sistem radiator kendaraan roda empat, armada bus, truk, serta bengkel otomotif profesional.',
    longDescription: 'Agioo 5 Liters Jerry Can memberikan perlindungan sistem pendingin skala industri dan kendaraan komersial dari PT Jaya Mandiri Ventures. Memastikan temperatur kerja mesin selalu stabil dalam tekanan tinggi.',
    volume: '5 Liters',
    category: 'Coolant & Radiator',
    imageUrl: '/images/Agioo Jerry Can.png',
    gallery: ['/images/Agioo Jerry Can.png', '/images/Agioo Antifreeze+Coolant 1L.png'],
    features: [
      'Kapasitas Ekonomis 5 Liters Siap Pakai',
      'Formula Fleet-Grade Kinerja Berat',
      'Mengurangi Suhu Ruang Bakar Mesin',
      'Teruji Bebas Deposit Mineral & Endapan'
    ],
    specs: [
      { label: 'Standar Mutu', value: 'ASTM Certified Formula' },
      { label: 'Volume Bersih', value: '5 Liters (5,000 mL)' },
      { label: 'Kemasan', value: 'HDPE Heavy Duty Jerry Can' }
    ],
    astmCertified: true,
    fastMoving: false
  },
  {
    id: 'mizux-btb-pouch',
    brand: 'jmv',
    brandName: 'PT Jaya Mandiri Ventures',
    name: 'Mizu-X Back to Black Pouch 200mL',
    tagline: 'Penghitam Trim Plastik & Karet Efek Hydrophobic',
    description: 'Formula khusus penghitam plastik kusam pada bodi motor & mobil. Mengembalikan warna hitam pekat alami serta memberikan proteksi daun talas tahan lama.',
    longDescription: 'Mizu-X Back to Black Pouch 200mL dirancang khusus oleh PT Jaya Mandiri Ventures untuk memulihkan warna plastik kusam yang teroksidasi oleh panas matahari dan cuaca.',
    volume: '200 mL',
    category: 'Car Detailing',
    imageUrl: '/images/Mizu-X Back to Black Pouch 200mL.png',
    gallery: ['/images/Mizu-X Back to Black Pouch 200mL.png', '/images/Mizu-X Back to Black Sachet 40mL.png'],
    features: [
      'Efek Hitam Pekat Alami Tahan Berbulan-bulan',
      'Formula Hydrophobic (Efek Daun Talas)',
      'Tahan Terhadap Sabun & Washing Berulang',
      'Melindungi Dari Sinar UV Agar Tidak Kusam'
    ],
    specs: [
      { label: 'Kemasan', value: 'Stand-Up Pouch 200mL Ergonomis' },
      { label: 'Daya Sebar', value: 'Dapat Digunakan Hingga 15-20 Kendaraan' },
      { label: 'Hasil Akhir', value: 'Deep Black Satin Finish' }
    ],
    fastMoving: true
  },
  {
    id: 'mizux-btb-sachet',
    brand: 'jmv',
    brandName: 'PT Jaya Mandiri Ventures',
    name: 'Mizu-X Back to Black Sachet 40mL',
    tagline: 'Kemasan Sachet Fast-Moving Sekali Pakai',
    description: 'Solusi ekonomis penghitam trim dan karet kendaraan dalam kemasan sachet praktis yang sangat diminati konsumen retail.',
    longDescription: 'Kemasan sachet 40mL dari Mizu-X Back to Black memberikan kemudahan bagi pengendara untuk melakukan peremajaan warna bodi kasar kendaraan di mana saja dengan biaya terjangkau.',
    volume: '40 mL',
    category: 'Car Detailing',
    imageUrl: '/images/Mizu-X Back to Black Sachet 40mL.png',
    features: [
      'Praktis Sekali Pakai untuk Motor/Mobil',
      'Produk Retail Terlaris di Counter & Bengkel',
      'Hasil Langsung Terlihat Seketika'
    ],
    fastMoving: true
  },
  {
    id: 'mizux-wash-wax-pouch',
    brand: 'jmv',
    brandName: 'PT Jaya Mandiri Ventures',
    name: 'Mizu-X Wash & Wax Pouch 200mL',
    tagline: 'Shampoo Mobil & Motor High-Foam Gloss Protection',
    description: 'Shampoo cuci kendaraan dengan kandungan Carnauba Wax murni. Busa melimpah yang mengangkat kotoran tanpa menggores cat dan memberikan efek kilau wet-look.',
    longDescription: 'Mizu-X Wash & Wax menggabungkan formula pembersih PH netral dengan konsentrat wax pelindung dari PT Jaya Mandiri Ventures.',
    volume: '200 mL',
    category: 'Car Detailing',
    imageUrl: '/images/Mizu-X Wash & Wax Pouch 200mL.png',
    features: [
      'Formula pH Netral (Safe For Clearcoat & Nano Coating)',
      'Rich Carnauba Wax Addition',
      'Busa Ekstra Melimpah Mengangkat Debu Halus',
      'Wangi Fresh Aromatic'
    ],
    fastMoving: true
  },
  {
    id: 'mizux-wash-glow-sachet',
    brand: 'jmv',
    brandName: 'PT Jaya Mandiri Ventures',
    name: 'Mizu-X Wash & Glow Sachet 40mL',
    tagline: 'Shampoo Cuci Mengkilap Kemasan Sachet Ekonomis',
    description: 'Pembersih dan pengkilat kendaraan praktis sachet 40mL dengan aroma citrus menyegarkan.',
    longDescription: 'Diproduksi untuk segmen retail harian, sachet Mizu-X Wash & Glow cepat larut dalam air dan menghasilkan busa melimpah.',
    volume: '40 mL',
    category: 'Car Detailing',
    imageUrl: '/images/Mizu-X Wash & Glow Sachet 40mL.png',
    features: [
      'Busa Melimpah Larut Sempurna',
      'Aman Untuk Semua Jenis Warna Cat',
      'Harga Ekonomis Retail Fast Sale'
    ],
    fastMoving: true
  },
  {
    id: 'mizux-waterspot-remover',
    brand: 'jmv',
    brandName: 'PT Jaya Mandiri Ventures',
    name: 'Mizu-X Waterspot Remover 250mL',
    tagline: 'Pembersih Jamur Kaca & Bodi Mobil Reaksi Cepat',
    description: 'Cairan pembersih khusus mengikis jamur kaca, kerak air, dan residu mineral pada kaca serta bodi kendaraan dalam hitungan detik.',
    longDescription: 'Jamur kaca yang membandel dapat mengganggu jarak pandang saat hujan. Mizu-X Waterspot Remover bekerja secara kimiawi memecah molekul kerak air.',
    volume: '250 mL',
    category: 'Car Detailing',
    imageUrl: '/images/Mizu-X Waterspot Remover.jpg',
    features: [
      'Reaksi Cepat Mengikis Kerak & Jamur Kaca',
      'Mengembalikan Kejernihan Kaca Kendaraan',
      'Aman Digunakan Untuk Kaca Depan & Samping',
      'Juga Efektif Untuk Kerak Pada Emblem & Chrome'
    ]
  },
  {
    id: 'mizux-wiper-fluid',
    brand: 'jmv',
    brandName: 'PT Jaya Mandiri Ventures',
    name: 'Mizu-X Wiper Fluid Sachet 40mL',
    tagline: 'Cairan Tangki Wiper Anti-Jamur & Sapuan Jernih',
    description: 'Konsentrat pembersih tangki wiper yang melumasi karet wiper, mencegah jamur kaca, dan mengusir serangga serta minyak seketika.',
    longDescription: 'Cairan Wiper Mizu-X diformulasikan khusus agar tidak menyumbat nozzle wiper. Kandungan surfaktan lembutnya menjaga karet wiper tidak cepat keras.',
    volume: '40 mL',
    category: 'Wiper & Wash',
    imageUrl: '/images/Mizu-X Wiper Fluid Sachet 40mL.png',
    features: [
      'Mencegah Keretakan & Keras Pada Karet Wiper',
      'Membersihkan Noda Minyak & Bekas Serangga',
      'Mencegah Lumut & Endapan Di Tangki Wiper',
      'Hasil Sapuan Bebas Bunyi Decit'
    ],
    fastMoving: true
  },
  {
    id: 'mizux-air-coffee',
    brand: 'jmv',
    brandName: 'PT Jaya Mandiri Ventures',
    name: 'Mizu-X Air Freshener Morning Coffee',
    tagline: 'Aroma Biji Kopi Sangrai Autentik Relaksasi Kabin',
    description: 'Parfum kabin mobil beraroma roasted coffee bean murni yang menyerap bau apek dan memberikan kesegaran rileks hingga 30 hari.',
    longDescription: 'Mizu-X Air Freshener Morning Coffee tidak hanya mengharumkan ruangan kabin tetapi juga aktif mengikat molekul bau tidak sedap.',
    volume: '1 Pcs',
    category: 'Air Freshener',
    imageUrl: '/images/Mizu-X Air Freshener Morning Coffee.png',
    features: [
      'Aroma Roasted Coffee Bean Mewah',
      'Menetralkan Bau Apek & Bau Rokok',
      'Daya Tahan Penggunaan Up To 30 Hari',
      'Desain Gantung Estetik'
    ],
    fastMoving: true
  },
  {
    id: 'mizux-air-icecream',
    brand: 'jmv',
    brandName: 'PT Jaya Mandiri Ventures',
    name: 'Mizu-X Ice Cream Bar Air Freshener',
    tagline: 'Aroma Sweet Creamy Vanilla Unique Shaped',
    description: 'Pengharum kabin kendaraan berbentuk es krim unik dengan wangi manis vanilla yang menyenangkan.',
    longDescription: 'Desain ikonik berbentuk Ice Cream Bar menjadikan interior mobil tampak manis dan harum menyegarkan sepanjang perjalanan.',
    volume: '1 Pcs',
    category: 'Air Freshener',
    imageUrl: '/images/Mizu-X Ice Cream Bar.png',
    features: [
      'Bentuk Unik Ice Cream Bar Popsicle',
      'Aroma Vanilla Cream Sweet Scent',
      'Keharuman Halus Tidak Bikin Pusing'
    ],
    fastMoving: true
  },
  {
    id: 'bioluminex-100ml',
    brand: 'jmv',
    brandName: 'PT Jaya Mandiri Ventures',
    name: 'Bio-Luminex Fluid Technology 100mL',
    tagline: 'Solusi Kimia Luminesensi & Bioteknologi Berkelanjutan',
    description: 'Cairan bioteknologi ramah lingkungan tingkat tinggi kemasan 100mL untuk aplikasi luminesensi industri dan perlindungan molekuler mesin modern.',
    longDescription: 'Bio-Luminex 100mL adalah hasil riset terdepan PT Jaya Mandiri Ventures yang memadukan senyawa organik terbarukan untuk perlindungan permukaan tingkat tinggi dan efisiensi termal.',
    volume: '100 mL',
    category: 'Biotech & Luminescence',
    imageUrl: '/images/Bio Luminex.png',
    gallery: ['/images/Bio Luminex.png', '/images/FA_Bio_Luminex_Page_2-removebg-preview.png'],
    features: [
      'Inovasi Formulasi Bioteknologi Hijau',
      'Ramah Lingkungan & Biodegradable',
      'Ketahanan Molekuler Suhu Ekstrem',
      'Dukungan Riset Kimia Tingkat Lanjut'
    ],
    specs: [
      { label: 'Klasifikasi', value: 'Green Chemical & Luminescence Fluid' },
      { label: 'Volume Bersih', value: '100 mL' },
      { label: 'Pengaplikasian', value: 'Industri Otomotif & Manufaktur Presisi' }
    ]
  }
];