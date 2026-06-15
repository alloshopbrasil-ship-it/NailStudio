/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';
import { Heart, Instagram, X, CheckSquare, Sparkles } from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectPortfolioSpecs: (specs: string) => void;
}

export default function PortfolioGallery({ onSelectPortfolioSpecs }: PortfolioGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [likedList, setLikedList] = useState<Record<string, boolean>>({});
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const toggleLike = (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation(); // Avoid triggering modal
    setLikedList((prev) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleCopySpecs = (specsText: string) => {
    onSelectPortfolioSpecs(`Estilo do Portfolio: "${specsText}"`);
    setCopiedSuccess(true);
    setTimeout(() => {
      setCopiedSuccess(false);
      setSelectedItem(null); // Close modal automatically
    }, 1500);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 md:px-16 bg-[#f3f4f3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="font-sans text-xs tracking-[0.3em] font-semibold uppercase text-[#6c5a56] block mb-3">
              Galeria Exclusiva
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#6c5a56] font-medium tracking-tight">
              Nosso Portfolio
            </h2>
          </div>
          
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-[#6c5a56] border-b border-[#6c5a56]/30 pb-1.5 hover:border-[#6c5a56] transition-all font-semibold"
          >
            <Instagram className="w-3.5 h-3.5" />
            Ver Mais no Instagram
          </a>
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => {
            const isLiked = !!likedList[item.id];
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white luxury-shadow transition-transform duration-500 hover:translate-y-[-6px]"
              >
                {/* Image Container with precise aspect ratios */}
                <div className="aspect-[4/5] overflow-hidden hover-zoom bg-[#ebe1d4]/30">
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glassy Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    
                    {/* Top corner indicator inside overlay */}
                    <div className="flex justify-end">
                      <button
                        onClick={(e) => toggleLike(e, item.id)}
                        className="bg-white/90 backdrop-blur-md p-2.5 rounded-full hover:scale-110 active:scale-95 transition-transform"
                        aria-label="Like"
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${
                            isLiked ? 'text-red-500 fill-current' : 'text-[#6c5a56]'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Bottom overlay info */}
                    <div className="text-white">
                      <span className="font-sans text-[10px] tracking-widest uppercase opacity-80 block">
                        Ver Detalhes
                      </span>
                      <h4 className="font-display text-lg font-semibold mt-1 leading-snug">
                        {item.title}
                      </h4>
                    </div>

                  </div>
                </div>

                {/* Plain description footer for safe screen devices */}
                <div className="p-5 flex justify-between items-center bg-white border-t border-[#f4dcd6]/10">
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#6c5a56]">{item.title}</h3>
                    <p className="font-sans text-[11px] text-[#4f4542]/60 mt-0.5">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-1 font-sans text-xs text-[#4f4542]/75">
                    <Heart className={`w-3.5 h-3.5 ${isLiked ? 'text-red-500 fill-current' : ''}`} />
                    <span>{item.likes + (isLiked ? 1 : 0)}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Detailed Close-up Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-[#1a1c1c]/70 backdrop-blur-md flex items-center justify-center p-4">
            
            <div className="bg-white rounded-[2.5rem] max-w-2xl w-full relative overflow-hidden luxury-shadow-lg max-h-[90vh] overflow-y-auto border border-[#6c5a56]/10">
              
              {/* Close Button */}
              <button
                id="btn-close-portfolio-modal"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-[#f9f9f8] p-2.5 rounded-full text-[#6c5a56] hover:bg-[#6c5a56]/10 transition-colors cursor-pointer"
                aria-label="Voltar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Left Side: High Density Zoom Image */}
                <div className="aspect-[4/5] bg-[#ebe1d4]/20">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.altText}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right Side: Specifications Breakdown */}
                <div className="p-8 flex flex-col justify-between bg-[#f9f9f8]">
                  <div>
                    <span className="font-sans text-[10px] tracking-widest uppercase font-bold text-[#6c5a56] bg-[#f4dcd6] px-2.5 py-1 rounded-full w-fit block mb-4">
                      Especificações Premium
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#6c5a56] leading-tight mb-3">
                      {selectedItem.title}
                    </h3>
                    <p className="font-sans text-xs text-[#4f4542] leading-relaxed font-light mb-6">
                      {selectedItem.altText}
                    </p>

                    {/* Metadata specs */}
                    <div className="space-y-3 font-sans text-xs border-t border-[#f4dcd6] pt-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-[#4f4542]/60">Estilo de Ateliê</span>
                        <span className="font-semibold text-[#6c5a56]">Fine Signature Art</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4f4542]/60">Durabilidade Esperada</span>
                        <span className="font-semibold text-[#6c5a56]">Até 30 Dias</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4f4542]/60">Esmalte Aplicado</span>
                        <span className="font-semibold text-[#6c5a56]">Gel Premium Hipoalergênico</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions to schedule this design pattern */}
                  <div className="space-y-2">
                    <button
                      id="btn-copy-specs-to-booking"
                      onClick={() => handleCopySpecs(`${selectedItem.title} - ${selectedItem.description}`)}
                      className="w-full bg-[#6c5a56] text-white py-3.5 rounded-full font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#6c5a56]/90 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {copiedSuccess ? (
                        <>
                          <Sparkles className="w-4 h-4 text-[#e9c176]" />
                          Copiado com Sucesso!
                        </>
                      ) : (
                        <>
                          <CheckSquare className="w-4 h-4" />
                          Quero Esta Combinação
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-center text-[#4f4542]/60 font-sans mt-1">
                      Copia esta especificação técnica para o seu formulário de agendamento abaixo.
                    </p>
                  </div>

                </div>

              </div>
              
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
