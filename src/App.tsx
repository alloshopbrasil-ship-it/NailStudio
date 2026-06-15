/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import StoryAndStats from './components/StoryAndStats';
import PortfolioGallery from './components/PortfolioGallery';
import ReviewsAndFeedback from './components/ReviewsAndFeedback';
import BookingForm from './components/BookingForm';

import { SERVICES } from './data';
import { 
  Sparkles, 
  Droplet, 
  Clock, 
  ShieldAlert, 
  Heart, 
  Palette, 
  Brush, 
  Award, 
  Smile, 
  ArrowUpRight, 
  Compass, 
  Activity,
  MessageSquare,
  Gift,
  Instagram
} from 'lucide-react';

export default function App() {
  const [preFilledBookingSpecs, setPreFilledBookingSpecs] = useState('');
  const [isSplashActive, setIsSplashActive] = useState(true);

  useEffect(() => {
    // Lock scroll on the body during splash screen
    if (isSplashActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSplashActive]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashActive(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Handle coordination between the Virtual Designer/Portfolio and the Booking Area
  const handleSelectSpecs = (specs: string) => {
    setPreFilledBookingSpecs(specs);
    
    // Smooth scroll directly to the Booking Form
    const target = document.querySelector('#reservar');
    if (target) {
      const topOffset = 85; // fixed header offset
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenBookingScroll = () => {
    const target = document.querySelector('#reservar');
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Helper to resolve Lucide Icons dynamically for the services section
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-10 h-10 text-[#6c5a56] stroke-[1.2]" />;
      case 'Brush':
        return <Brush className="w-10 h-10 text-[#6c5a56] stroke-[1.2]" />;
      case 'Droplet':
        return <Droplet className="w-10 h-10 text-[#6c5a56] stroke-[1.2]" />;
      case 'ClockDetail':
        return <Clock className="w-10 h-10 text-[#6c5a56] stroke-[1.2]" />;
      case 'Palette':
        return <Palette className="w-10 h-10 text-[#6c5a56] stroke-[1.2]" />;
      case 'Shield':
        return <Compass className="w-10 h-10 text-[#6c5a56] stroke-[1.2]" />;
      default:
        return <Sparkles className="w-10 h-10 text-[#6c5a56] stroke-[1.2]" />;
    }
  };

  return (
    <>
      {/* Elegant entrance splash loading screen */}
      <AnimatePresence>
        {isSplashActive && (
          <motion.div
            key="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
            }}
            className="fixed inset-0 z-[100] flex flex-col justify-center items-center bg-[#f9f9f8] overflow-hidden"
          >
            {/* Elegant backgrounds with blurred bubbles */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.45 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute w-[500px] h-[500px] bg-[#f4dcd6]/40 rounded-full blur-[120px] -z-10"
            />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.55 }}
              transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
              className="absolute w-[400px] h-[400px] bg-[#ebe1d4]/50 rounded-full blur-[100px] -z-10"
            />

            {/* Central Animated Content Container */}
            <div className="flex flex-col items-center max-w-md px-6 text-center">

              {/* Centered logo text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="space-y-4"
              >
                <h1 className="font-display text-4xl md:text-5xl text-[#6c5a56] font-semibold tracking-tight">
                  Néllope Nails
                </h1>
                
                {/* Clean lines expanding out */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 68 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                  className="h-[1px] bg-[#e9c176] mx-auto"
                />

                <span className="block font-sans text-[10px] tracking-[0.35em] uppercase text-[#4f4542]/60 font-semibold">
                  Atelier de Luxo • SBC
                </span>
              </motion.div>

              {/* Seamless linear loading indicator */}
              <div className="w-48 h-[2px] bg-[#6c5a56]/5 rounded-full overflow-hidden mt-10 relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2.2, delay: 0.2, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 bg-gradient-to-r from-transparent via-[#6c5a56]/50 to-transparent w-full"
                />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#f9f9f8] flex flex-col font-sans select-none antialiased">
        
        {/* 1. Header (Navbar component) */}
      <Header onOpenBooking={handleOpenBookingScroll} />

      {/* 2. Hero Section */}
      <header className="min-h-screen flex flex-col lg:flex-row-reverse pt-24 md:pt-28 items-stretch relative overflow-hidden bg-[#ffffff]">
        
        {/* Left Side: Editorial portrait */}
        <div className="flex-1 flex justify-center items-center p-6 md:p-12 relative">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden luxury-shadow bg-[#f4dcd6]/10">
            <img
              src="/src/assets/images/hero_nellope_portrait_1781359888281.jpg"
              alt="Portrait of Néllope"
              className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6c5a56]/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Subtle decoration elements */}
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#f4dcd6]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#ebe1d4]/40 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Copywriting */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-10 lg:py-14 bg-[#ffffff]">
          
          {/* Top special badge */}
          <div className="inline-flex items-center gap-2 bg-[#f4dcd6]/30 px-4 py-1.5 rounded-full w-fit mb-6 border border-[#6c5a56]/10">
            <span className="w-2 h-2 rounded-full bg-[#6c5a56] inline-block animate-pulse"></span>
            <span className="font-sans text-[10px] tracking-widest text-[#6c5a56] uppercase font-bold">
              Nail Designer Especialista
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#6c5a56] font-medium leading-[1.1] tracking-tight mb-6">
            Unhas Naturais,<br />
            <span className="font-light italic text-[#6c5a56]/90">Elegantes</span> e Duradouras
          </h1>

          <p className="font-sans text-sm md:text-base text-[#4f4542] mb-10 max-w-xl font-light leading-relaxed">
            Especialista renomada na saúde, blindagem e estética das mãos. Aplicando técnicas refinadas que garantem 
            durabilidade impecável de até 30 dias com acabamento esbelto e extremamente natural.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              id="btn-whatsapp-scroll"
              onClick={handleOpenBookingScroll}
              className="bg-[#6c5a56] text-white px-9 py-4 rounded-full font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#6c5a56]/95 hover:shadow-xl hover:shadow-[#6c5a56]/15 transition-all duration-300 active:scale-95 text-center cursor-pointer"
            >
              Agendar Pelo WhatsApp
            </button>
            
            <a
              href="#portfolio"
              className="border border-[#6c5a56] text-[#6c5a56] px-9 py-4 rounded-full font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#6c5a56]/5 transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              Ver Trabalhos
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </header>

      {/* 3. Personal Story & Counters Component */}
      <StoryAndStats />

      {/* 5. Services Section */}
      <section id="servicos" className="py-20 md:py-32 px-6 md:px-16 bg-[#ffffff] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-[0.3em] font-semibold uppercase text-[#6c5a56] block mb-3 leading-none">
              Experiência Signature
            </span>
            <h2 className="font-display text-2xl md:text-4xl text-[#6c5a56] font-medium tracking-tight">
              Nossos Serviços
            </h2>
            <div className="w-12 h-[1px] bg-[#6c5a56] mx-auto mt-4"></div>
          </div>

          {/* Service Cards Grid - 6 item bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="glass-panel p-8 rounded-[2rem] luxury-shadow border border-[#6c5a56]/5 hover:translate-y-[-6px] transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-6 bg-[#f4dcd6]/20 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-[#f4dcd6]/40">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#6c5a56] mb-3">
                    {srv.name}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#4f4542]/80 leading-relaxed font-light mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-[#f4dcd6]/20 pt-4 mt-auto">
                  <span className="font-sans text-[10px] uppercase text-[#4f4542]/60 font-semibold flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#6c5a56]" />
                    {srv.duration}
                  </span>
                  
                  <button
                    onClick={() => handleSelectSpecs(`Reserva Direta: ${srv.name}`)}
                    className="font-sans text-xs font-semibold text-[#6c5a56] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Agendar Horário
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. High-Fidelity Portfolio Section Component */}
      <PortfolioGallery onSelectPortfolioSpecs={handleSelectSpecs} />

      {/* 7. Differentials Grid block */}
      <section className="py-20 md:py-28 px-6 md:px-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="p-6 border-l border-[#6c5a56]/15 hover:border-[#6c5a56]/40 transition-colors">
            <span className="font-display text-4xl text-[#6c5a56]/30 font-bold block mb-3 select-none">01</span>
            <h4 className="font-display text-md font-semibold text-[#6c5a56] mb-2">Resultado Natural</h4>
            <p className="font-sans text-xs text-[#4f4542]/80 leading-relaxed font-light">
              Técnicas ergonômicas que priorizam a flexibilidade, anatomia e espessura real do leito ungueal.
            </p>
          </div>

          <div className="p-6 border-l border-[#6c5a56]/15 hover:border-[#6c5a56]/40 transition-colors">
            <span className="font-display text-4xl text-[#6c5a56]/30 font-bold block mb-3 select-none">02</span>
            <h4 className="font-display text-md font-semibold text-[#6c5a56] mb-2">Acabamento Impecável</h4>
            <p className="font-sans text-xs text-[#4f4542]/80 leading-relaxed font-light">
              Atenção cirúrgica e minucioso alinhamento de cutículas com simetria ímpar de ponta a ponta.
            </p>
          </div>

          <div className="p-6 border-l border-[#6c5a56]/15 hover:border-[#6c5a56]/40 transition-colors">
            <span className="font-display text-4xl text-[#6c5a56]/30 font-bold block mb-3 select-none">03</span>
            <h4 className="font-display text-md font-semibold text-[#6c5a56] mb-2">Atendimento Humanizado</h4>
            <p className="font-sans text-xs text-[#4f4542]/80 leading-relaxed font-light">
              Sessões com hora marcada, sem pressa, num lounge zen reservado para o seu repouso.
            </p>
          </div>

          <div className="p-6 border-l border-[#6c5a56]/15 hover:border-[#6c5a56]/40 transition-colors">
            <span className="font-display text-4xl text-[#6c5a56]/30 font-bold block mb-3 select-none">04</span>
            <h4 className="font-display text-md font-semibold text-[#6c5a56] mb-2">Durabilidade Superior</h4>
            <p className="font-sans text-xs text-[#4f4542]/80 leading-relaxed font-light">
              Uso exclusivo de químicos hipoalergênicos e géis flexíveis que protegem e duram 30 dias.
            </p>
          </div>

        </div>
      </section>

      {/* 8. Process Section "Seu Caminho para a Perfeição" */}
      <section id="processo" className="py-20 md:py-28 px-6 md:px-16 bg-[#f3f4f3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-[0.3em] font-semibold uppercase text-[#6c5a56] block mb-3">
              Jornada de Atendimento
            </span>
            <h2 className="font-display text-2xl md:text-4xl text-[#6c5a56] font-medium tracking-tight">
              Seu Caminho para a Perfeição
            </h2>
          </div>

          {/* Process steps horizontal / vertical grid */}
          <div className="relative">
            {/* Center connector line on large viewports */}
            <div className="hidden lg:block absolute top-[43px] left-[10%] right-[10%] h-[1.5px] bg-[#6c5a56]/10 -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Step 1 */}
              <div className="lg:col-span-3 bg-white p-6 sm:p-8 rounded-2xl border border-[#6c5a56]/5 text-center flex flex-col items-center justify-between group luxury-shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#6c5a56] text-white flex items-center justify-center font-display text-sm font-semibold mb-6 group-hover:scale-105 transition-transform">
                    1
                  </div>
                  <h3 className="font-display text-md font-semibold text-[#6c5a56] mb-2">
                    Escolha
                  </h3>
                  <p className="font-sans text-xs text-[#4f4542]/80 leading-relaxed font-light">
                    Escolha as cores de esmalte, acabamentos e os detalhes no nosso portfolio exclusivo.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="lg:col-span-3 bg-white p-6 sm:p-8 rounded-2xl border border-[#6c5a56]/5 text-center flex flex-col items-center justify-between group luxury-shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#6c5a56] text-white flex items-center justify-center font-display text-sm font-semibold mb-6 group-hover:scale-105 transition-transform">
                    2
                  </div>
                  <h3 className="font-display text-md font-semibold text-[#6c5a56] mb-2">
                    Agende
                  </h3>
                  <p className="font-sans text-xs text-[#4f4542]/80 leading-relaxed font-light">
                    Escolha o procedimento desejado em nossa tabela de preços e combine o horário ideal diretamente pelo WhatsApp.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="lg:col-span-3 bg-white p-6 sm:p-8 rounded-2xl border border-[#6c5a56]/5 text-center flex flex-col items-center justify-between group luxury-shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#6c5a56] text-white flex items-center justify-center font-display text-sm font-semibold mb-6 group-hover:scale-105 transition-transform">
                    3
                  </div>
                  <h3 className="font-display text-md font-semibold text-[#6c5a56] mb-2">
                    Compareça
                  </h3>
                  <p className="font-sans text-xs text-[#4f4542]/80 leading-relaxed font-light">
                    Venha até o nosso lounge privado em São Bernardo do Campo para uma sessão de imersão e puro retiro.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="lg:col-span-3 bg-white p-6 sm:p-8 rounded-2xl border border-[#6c5a56]/5 text-center flex flex-col items-center justify-between group luxury-shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#6c5a56] text-white flex items-center justify-center font-display text-sm font-semibold mb-6 group-hover:scale-105 transition-transform">
                    4
                  </div>
                  <h3 className="font-display text-md font-semibold text-[#6c5a56] mb-2">
                    Impecável
                  </h3>
                  <p className="font-sans text-xs text-[#4f4542]/80 leading-relaxed font-light">
                    Saia brilhando com unhas perfeitas, ultraduradouras e sua autoestima revigorada por semanas de luxo.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. Verified Reviews & Client Feedback Section Component */}
      <ReviewsAndFeedback />

      {/* 10. Glamour Call To Action Champagne block */}
      <section className="py-20 md:py-28 px-6 md:px-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto champagne-gradient p-10 md:p-20 rounded-[3rem] text-center luxury-shadow relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-[#6c5a56] font-medium leading-none mb-6">
              Dê às suas mãos o luxo que elas merecem.
            </h2>
            
            <p className="font-sans text-xs md:text-sm text-[#4f4542] leading-relaxed mb-10 font-light">
              Trabalhamos com vagas e horários limitados para garantir a privacidade, exclusividade e a segurança sanitária de cada ateliê. Reserve sua vaga hoje mesmo.
            </p>

            <button
              id="btn-reserve-bottom-cta"
              onClick={handleOpenBookingScroll}
              className="inline-flex items-center gap-3 bg-[#6c5a56] text-white px-10 py-4.5 rounded-full font-sans text-xs font-semibold tracking-widest uppercase hover:bg-[#6c5a56]/95 hover:shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#e9c176] fill-current" />
              Reservar pelo WhatsApp
            </button>
          </div>

          {/* Decorative Blur glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/45 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/45 rounded-full blur-3xl -z-0"></div>

        </div>
      </section>

      {/* 11. Appointment Fields (Dynamic Form Component) */}
      <BookingForm 
        preFilledSpecs={preFilledBookingSpecs} 
        onClearPreFilledSpecs={() => setPreFilledBookingSpecs('')} 
      />

      {/* 12. Footer */}
      <footer className="bg-[#f9f9f8] border-t border-[#6c5a56]/10 py-16 px-6 md:px-16 text-xs text-[#4f4542]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#6c5a56]/5 pb-10">
          
          {/* Brand info */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-semibold text-[#6c5a56] mb-2 leading-none">
              Néllope Nails
            </h3>
            <p className="font-sans text-xs text-[#4f4542]/60 mt-1 max-w-xs font-light leading-snug">
              São Bernardo do Campo - SP. Elevando a beleza nobre da nail art com técnicas exclusivas e requinte.
            </p>
          </div>

          {/* Quick social links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center font-sans font-medium text-[11px] uppercase tracking-wider">
            <div className="flex flex-wrap gap-6 sm:gap-8 items-center justify-center">
              <a href="#servicos" className="hover:text-[#6c5a56] transition-colors">Serviços</a>
              <a href="#portfolio" className="hover:text-[#6c5a56] transition-colors">Portfolio</a>
              <a href="#processo" className="hover:text-[#6c5a56] transition-colors">Processo</a>
              <a href="#sobre" className="hover:text-[#6c5a56] transition-colors">Sobre</a>
            </div>
            <span className="hidden sm:inline text-[#6c5a56]/20">|</span>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#6c5a56] transition-colors text-xs font-semibold lowercase tracking-normal text-[#6c5a56]/80"
              id="footer-instagram"
            >
              <Instagram className="w-4 h-4 text-[#6c5a56]" />
              @nellopenails
            </a>
          </div>

          {/* Right copyright notice */}
          <div className="text-center md:text-right font-sans text-[11px] text-[#4f4542]/70 font-light">
            © 2026 Néllope Nails. Atelier de Luxo. Todos os direitos reservados.
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#4f4542]/40 font-sans gap-4">
          <p>Unidades: SBC Centro & Grand Boulevard Jardim - SP.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Políticas de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:underline">Termos e Acordos do Ateliê</a>
          </div>
        </div>
      </footer>

      {/* 13. Pulsative Floating WhatsApp Button (Green) */}
      <a
        href="https://wa.me/5511000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-whatsapp"
        title="Falar direto no WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

    </div>
    </>
  );
}
