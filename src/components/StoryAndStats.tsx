/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Heart, Award, ShieldAlert } from 'lucide-react';

export default function StoryAndStats() {
  return (
    <section id="sobre" className="py-20 md:py-32 px-6 md:px-16 bg-[#ffffff] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Images & Floating Badges */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative aspect-[16/10] sm:aspect-[16/10] overflow-hidden rounded-2xl luxury-shadow hover-zoom">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx0va6qjmdufP6JT1fy3HE-iPO8qH7eyctRI3wvBR4XGvqR2WV_vPCkU0cTSUwuB5Gq0m1vK2tAl-tK99QVflKHT90-E0ninmbF3GefMJukJoH0QyUr5yZP2lardh2GgdcriMPo_OkSHAMrhMz4DVpVQKhp1DkFAd5AcxL1wbSiMJzx3fZwXRuz6bMVJapz3OH0jQp1ED5YDNui6u1a-BA17Q3nhC1kZvzA1O7QSkS_vZWhSejHzL2ViwLumSYFijlHjRLpQH6Ifg"
              alt="Atelier Néllope Nails interior"
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Soft transparent overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6c5a56]/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Champagne Floating Card - Bottom Right */}
          <div className="absolute -bottom-6 -right-4 md:right-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl luxury-shadow-lg border border-[#f4dcd6] max-w-[200px] md:max-w-[240px] transition-transform duration-500 group-hover:translate-y-[-5px]">
            <div className="flex gap-3 items-start">
              <div className="bg-[#f4dcd6] p-2 rounded-xl text-[#6c5a56] shrink-0">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-[#6c5a56]">Atendimento Vip</p>
                <p className="font-sans text-xs text-[#4f4542] mt-1">Exclusivo, individualizado e sem pressa.</p>
              </div>
            </div>
          </div>

          {/* Sparkle Floating Circle - Top Left */}
          <div className="absolute -top-5 -left-4 bg-[#6c5a56] text-white p-3 rounded-full luxury-shadow-lg animate-bounce duration-[4s]">
            <Sparkles className="w-5 h-5 text-[#e9c176]" />
          </div>

          {/* Background Decorative Blobs */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#f4dcd6]/15 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#ebe1d4]/35 rounded-full blur-3xl -z-10"></div>
        </div>

        {/* Right Side: Narrative */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="inline-flex items-center gap-1.5 bg-[#f4dcd6]/30 px-3.5 py-1 rounded-full w-fit mb-5 border border-[#6c5a56]/10">
            <Award className="w-3.5 h-3.5 text-[#6c5a56]" />
            <span className="font-sans text-[10px] tracking-widest text-[#6c5a56] uppercase font-bold">
              Estilo & Naturalidade
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl text-[#6c5a56] font-medium leading-tight mb-6">
            Prazer, Sou Néllope
          </h2>

          <div className="space-y-5 text-[#4f4542] font-sans text-sm md:text-base leading-relaxed font-light">
            <p>
              Minha jornada na arte das unhas começou com a busca incessante pela perfeição em cada pequeno detalhe. 
              Acredito piamente que as suas mãos são o seu cartão de visitas mais valioso e merecem um tratamento 
              de altíssimo padrão, unindo saúde, proteção e beleza intemporal.
            </p>
            <p className="font-normal text-[#6c5a56]">
              No meu atelier privado, cada atendimento é humanizado, exclusivo e realizado sob agendamento prévio. 
              Minha missão é muito mais do que estética: é elevar a sua autoestima através de unhas impecavelmente 
              resistentes, mantendo a leveza, a delicadeza e a máxima naturalidade.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-6 border-t border-[#6c5a56]/10 pt-8 mt-8">
            <div className="group">
              <div className="text-[#6c5a56] font-display text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-105 origin-left">
                5+
              </div>
              <div className="font-sans text-[10px] md:text-xs tracking-wider uppercase text-[#4f4542]/70 font-semibold mt-1">
                Anos de Experiência
              </div>
              <p className="text-[11px] text-[#4f4542]/50 font-sans mt-0.5">Técnica aperfeiçoada gradualmente.</p>
            </div>
            
            <div className="group">
              <div className="text-[#6c5a56] font-display text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-105 origin-left">
                1k+
              </div>
              <div className="font-sans text-[10px] md:text-xs tracking-wider uppercase text-[#4f4542]/70 font-semibold mt-1">
                Clientes Satisfeitas
              </div>
              <p className="text-[11px] text-[#4f4542]/50 font-sans mt-0.5">Fidelizadas pela excelência.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
