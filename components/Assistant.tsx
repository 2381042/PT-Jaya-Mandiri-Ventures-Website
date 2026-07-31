/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { COMPANY_NAME, LOGO_IMAGE } from '../constants';
import { sendMessageToGemini } from '../services/geminiService';

const QUICK_PROMPTS = [
  'Apa keunggulan Coolant ASTM JMV?',
  'Bagaimana cara daftar Distributor PT/CV?',
  'Produk autocare unggulan apa saja?',
  'Dimana lokasi Head Office SOHO Pancoran?'
];

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: `Selamat datang di ${COMPANY_NAME}! Saya JMV Concierge dari Perusahaan Prinsipal (Principal Company). Ada yang bisa saya bantu terkait produk radiator coolant, autocare & detailing, atau kemitraan Distributor resmi PT/CV?`, 
      timestamp: Date.now() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      // Error handled
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="glass-card-light rounded-3xl shadow-2xl w-[92vw] sm:w-[420px] h-[580px] mb-4 flex flex-col overflow-hidden border-2 border-red-500/40 animate-fade-in-up text-zinc-900 bg-white">
          
          {/* Header */}
          <div className="bg-slate-50 p-4 px-6 border-b border-zinc-200 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-8 w-auto flex items-center justify-center">
                <img src={LOGO_IMAGE} alt="JMV Logo" className="h-full w-auto object-contain" />
              </div>
              <div>
                <div className="text-sm font-serif font-bold text-zinc-900">JMV Assistant Concierge</div>
                <div className="text-[10px] text-red-600 flex items-center gap-1 font-extrabold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                  <span>Online • Official Principal Representative</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-zinc-400 hover:text-zinc-900 p-1 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-red-600 text-white rounded-br-none shadow-md font-medium' 
                      : 'bg-white border border-zinc-200 text-zinc-800 rounded-bl-none shadow-sm font-medium'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white border border-zinc-200 p-3 rounded-2xl flex gap-1.5 items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="p-3 bg-white border-t border-zinc-200 flex gap-2 overflow-x-auto no-scrollbar">
            {QUICK_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 border border-zinc-200 text-[10px] text-zinc-700 font-bold rounded-full whitespace-nowrap transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-zinc-200">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ketik pertanyaan Anda..." 
                className="flex-1 bg-slate-50 border border-zinc-300 focus:border-red-600 px-4 py-2.5 rounded-xl text-xs outline-none transition-colors text-zinc-900 placeholder-zinc-400 font-medium"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isThinking}
                className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-xl font-extrabold text-xs transition-colors disabled:opacity-50 flex items-center justify-center shadow"
              >
                <span>Kirim</span>
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 relative border-2 border-red-400/40"
        aria-label="AI Concierge"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="flex flex-col items-center">
            <span className="font-serif font-extrabold text-xs tracking-tight">JMV</span>
            <span className="text-[7px] uppercase tracking-tighter text-yellow-300 font-extrabold">PRINSIPAL</span>
          </div>
        )}
      </button>

    </div>
  );
};

export default Assistant;