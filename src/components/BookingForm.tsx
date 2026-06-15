/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Clock, MessageSquare, ArrowUpRight, Sparkle } from 'lucide-react';

interface BookingFormProps {
  preFilledSpecs: string; // Kept for compatibility with other components
  onClearPreFilledSpecs: () => void; // Kept for compatibility with other components
}

const PRICE_GROUPS = [
  {
    category: "Alongamentos & Extensões",
    subtitle: "Técnicas modernas de alongamento com acabamento ultrafino e anatômico",
    items: [
      { id: "molde-f1", name: "Molde F1", price: "R$ 180,00", duration: "1h 30m", desc: "Alongamento com molde inteligente. Reduz o tempo de cabine e proporciona acabamento impecável por cima e por baixo da unha." },
      { id: "alongamento", name: "Alongamento em Gel", price: "R$ 210,00", duration: "2h 00m", desc: "Aplicação escultural clássica que respeita perfeitamente o arco e a curvatura natural de cada leito ungueal." }
    ]
  },
  {
    category: "Cuidados, Blindagem & Manutenções",
    subtitle: "Manutenção do alongamento e tratamentos de resistência para suas unhas",
    items: [
      { id: "esmalte-gel", name: "Esmaltação em Gel", price: "R$ 90,00", duration: "1h 00m", desc: "Esmalte com cura em cabine LED. Mantém brilho de vidro e unhas pintadas sem lascar por semanas." },
      { id: "manutencao", name: "Manutenção Periódica", price: "R$ 120,00", duration: "1h 15m", desc: "Ajuste na raiz, nivelamento, redução da espessura e renovação do gel para continuar impecável até a próxima visita." },
      { id: "blindagem", name: "Blindagem de Unhas", price: "R$ 80,00", duration: "45m", desc: "Camada protetora ultraflexível ideal para unhas naturais fracas, impedindo que lasquem ou dobrem." }
    ]
  },
  {
    category: "Personalização & Procedimentos Premium",
    subtitle: "Diferenciais artísticos exclusivos e momentos de puro mimo",
    items: [
      { id: "nail-art", name: "Nail Art Exclusiva", price: "Sob Consulta", duration: "Varie", desc: "Desenhos artísticos manuais minuciosos, folha de ouro, degradê de glitter ou efeito de pedra de quartzo natural." },
      { id: "spa-maos", name: "Spa de Mãos Premium", price: "R$ 60,00", duration: "30m", desc: "Tratamento relaxante com esfoliação de grãos suaves, máscara de hidratação térmica e massagem relaxante." },
      { id: "reparo-unidade", name: "Reparo Unitário", price: "R$ 20,00", duration: "15m", desc: "Conserto, selagem de fissuras ou colocação isolada de uma única unha danificada fora da manutenção." }
    ]
  }
];

export default function BookingForm({ preFilledSpecs, onClearPreFilledSpecs }: BookingFormProps) {
  
  const handleRequestService = (serviceName: string, price: string) => {
    let text = `Olá Néllope! Vi a tabela de preços no site e gostaria de solicitar um agendamento:\n\n✨ *SOLICITAÇÃO DE ATENDIMENTO* ✨\n• *Procedimento:* ${serviceName}\n• *Preço de Referência:* ${price}`;
    
    if (preFilledSpecs) {
      text += `\n• *Especificações Escolhidas:* ${preFilledSpecs}`;
    }
    
    text += `\n\nPor favor, me informe as datas e horários disponíveis na sua agenda!`;
    
    const url = `https://wa.me/5511000000000?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noreferrer');

    // Clean up specifications if linked
    if (preFilledSpecs) {
      onClearPreFilledSpecs();
    }
  };

  return (
    <section id="reservar" className="py-20 md:py-32 px-6 md:px-16 bg-[#ffffff] border-t border-[#6c5a56]/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-xs tracking-[0.3em] font-semibold uppercase text-[#6c5a56] block mb-3">
            Menu de Atendimento
          </span>
          <h2 className="font-display text-2xl md:text-4xl text-[#6c5a56] font-medium tracking-tight">
            Nossa Tabela de Preços
          </h2>
          <p className="font-sans text-xs text-[#4f4542]/80 mt-3 font-light leading-relaxed">
            Procedimentos executados com biossegurança rigorosa, materiais de primeiríssima linha e um acabamento excepcionalmente natural.
          </p>
          <div className="w-12 h-[1px] bg-[#6c5a56] mx-auto mt-6"></div>
        </div>

        {/* Unified Full-Width Price Menu */}
        <div className="space-y-16">
          {PRICE_GROUPS.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              
              {/* Category Header */}
              <div className="border-b border-[#f4dcd6] pb-2">
                <h3 className="font-display text-lg font-semibold text-[#6c5a56] flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="text-[10px] uppercase font-sans font-normal tracking-widest text-[#4f4542]/50">Ateliê SBC</span>
                </h3>
                <p className="font-sans text-xs text-[#4f4542]/60 mt-1 leading-snug font-light">{group.subtitle}</p>
              </div>

              {/* Items list */}
              <div className="space-y-6">
                {group.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="group flex flex-col md:flex-row md:items-start justify-between gap-4 p-4 hover:bg-[#fcfaf9] rounded-2xl transition-all duration-300 border border-transparent hover:border-[#6c5a56]/5"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h4 className="font-display text-base font-semibold text-[#6c5a56] group-hover:text-[#6c5a56]/90 transition-colors">
                          {item.name}
                        </h4>
                        <span className="inline-flex items-center gap-1 text-[9px] font-sans text-[#4f4542]/60 bg-[#f4dcd6]/30 px-2 py-0.5 rounded-full font-medium">
                          <Clock className="w-2.5 h-2.5 stroke-[1.5]" />
                          {item.duration}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-[#4f4542]/80 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#6c5a56]/10">
                      <span className="font-display text-base font-bold text-[#6c5a56] whitespace-nowrap bg-[#f4dcd6]/30 px-3.5 py-1.5 rounded-xl">
                        {item.price}
                      </span>
                      
                      <button
                        onClick={() => handleRequestService(item.name, item.price)}
                        className="text-xs font-sans font-semibold text-[#6c5a56] hover:text-[#6c5a56]/80 flex items-center gap-1 hover:underline transition-colors cursor-pointer bg-[#fbf5f3] px-3 py-1.5 rounded-full border border-[#f4dcd6] md:bg-transparent md:p-0 md:border-transparent"
                      >
                        Agendar via WhatsApp
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

          {/* Quick Warning/Note of Excellence centered */}
          <div className="bg-[#fdfaf8] rounded-3xl p-6 border border-[#e9c176]/20 flex items-start gap-4">
            <span className="p-2 bg-[#e9c176]/10 text-[#6c5a56] rounded-2xl">
              <Sparkles className="w-6 h-6 stroke-[1.5]" />
            </span>
            <div>
              <h5 className="font-display text-sm font-semibold text-[#6c5a56]">Biossegurança & Excelência Reconhecida</h5>
              <p className="font-sans text-xs text-[#4f4542]/80 leading-relaxed font-light mt-1.5">
                Todos os nossos instrumentos de metal passam por esterilização rígida em autoclave hospitalar. Só utilizamos géis flexíveis hipoalergênicos importados que não agridem nem enfraquecem as unhas. Atendimento exclusivo com hora marcada.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
