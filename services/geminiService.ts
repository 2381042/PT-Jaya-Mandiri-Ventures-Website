/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
import { PRODUCTS, COMPANY_NAME } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- [${p.brandName}] ${p.name}: ${p.description}. Fitur: ${p.features.join(', ')}`
  ).join('\n');

  return `Anda adalah "JMV AI Concierge", asisten AI resmi dari PT Jaya Mandiri Ventures (JMV).
  Gaya bahasa Anda sangat profesional, ramah, solutif, dan berpengetahuan luas tentang produk otomotif & bioteknologi JMV.
  
  Profil Perusahaan & Lini Produk:
  - PT Jaya Mandiri Ventures: Perusahaan manufaktur & jaringan distribusi nasional produk otomotif di Indonesia.
  - Agioo Radiator Coolant: Teruji ASTM D1120, D1170, D1384, D4340, D2809. Mencegah overheating, garansi anti-karat, dan hemat BBM hingga 26%.
  - Mizu-X Autocare: Lini perawatan bodi & interior kendaraan (Wash & Wax Carnauba, Back to Black Hydrophobic, Waterspot Remover, Wiper Fluid, Air Freshener Morning Coffee & Ice Cream Bar).
  - Bio-Luminex: Bioteknologi luminesensi ramah lingkungan.
  - Program Distributor: Khusus PT / CV, margin hingga 30%, program garansi buang barang (turn-over), dan hadiah langsung (Mobil Isuzu Traga, Emas Antam, Motor Listrik, Voucher Pertamina).
  
  Katalog Produk Saat Ini:
  ${productContext}
  
  Tugas Anda:
  1. Jawab pertanyaan calon konsumen & calon distributor dengan tepat dan ringkas (maksimal 3-4 kalimat).
  2. Berikan rekomendasi produk yang cocok (Agioo untuk air radiator, Mizu-X untuk cuci & penghitam bodi).
  3. Arahkan calon distributor PT/CV ke formulir kemitraan di website.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    try {
      apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return generateOfflineFallback(newMessage);
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || generateOfflineFallback(newMessage);

  } catch (error) {
    console.error("Gemini API Error:", error);
    return generateOfflineFallback(newMessage);
  }
};

function generateOfflineFallback(input: string): string {
  const query = input.toLowerCase();

  if (query.includes('agioo') || query.includes('coolant') || query.includes('radiator') || query.includes('overheating')) {
    return "Agioo Radiator Coolant adalah cairan pendingin performa tinggi berstandar ASTM D1120 & D1384 dari PT JMV. Teruji mampu mencegah overheating, melindungi mesin dari korosi, serta menghemat BBM hingga 26%!";
  }

  if (query.includes('mizu') || query.includes('black') || query.includes('wash') || query.includes('detailing')) {
    return "Mizu-X Autocare menyediakan produk perawatan kendaraan fast-moving seperti Wash & Wax Carnauba, Back to Black Hydrophobic, Waterspot Remover, hingga Air Freshener Morning Coffee. Sangat diminati di minimarket & bengkel!";
  }

  if (query.includes('distributor') || query.includes('mitra') || query.includes('pt') || query.includes('cv') || query.includes('grosir')) {
    return "Program Distributor PT Jaya Mandiri Ventures khusus untuk badan usaha PT/CV dengan potensi margin hingga 30%, garansi perputaran barang, serta insentif langsung (Mobil Traga, Emas Antam, Motor Listrik). Silakan isi Form Mitra di menu Distributor!";
  }

  if (query.includes('astm') || query.includes('uji') || query.includes('sertifikasi')) {
    return "Produk Agioo Coolant teruji laboratorium internasional ASTM D1120, D1170, D1384, D4340, dan D2809 untuk menjamin ketahanan korosi alumunium & tembaga di suhu ekstrem.";
  }

  return "Terima kasih telah menghubungi PT Jaya Mandiri Ventures! Kami siap membantu kebutuhan informasi Agioo Radiator Coolant, Mizu-X Autocare, Bio-Luminex, maupun peluang Distributor PT/CV.";
}