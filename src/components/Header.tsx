/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Processo', href: '#processo' },
    { label: 'Sobre Néllope', href: '#sobre' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 80; // height of the header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        id="top-navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-16 py-4 flex justify-between items-center ${
          scrolled
            ? 'bg-[#f9f9f8]/90 backdrop-blur-xl border-b border-[#6c5a56]/10 shadow-sm shadow-[#6c5a56]/5'
            : 'bg-transparent py-6'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl md:text-3xl tracking-tight text-[#6c5a56] font-semibold select-none">
            Néllope Nails
          </span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-sans text-xs tracking-all font-semibold uppercase text-[#4f4542] hover:text-[#6c5a56] transition-colors duration-300 relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#6c5a56] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <button
            id="btn-agendar-header"
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-[#6c5a56] text-white px-7 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#6c5a56]/90 hover:shadow-lg hover:shadow-[#6c5a56]/20 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            Agendar
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="btn-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#6c5a56] p-1.5 rounded-full hover:bg-[#6c5a56]/5 active:scale-95 transition-all cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer menu */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-40 bg-[#f9f9f8] transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-24 px-8 pb-10 justify-between`}
      >
        <div className="flex flex-col gap-6">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{ transitionDelay: `${index * 50}ms` }}
              className="font-display text-2xl font-medium text-[#6c5a56] hover:translate-x-2 transition-transform duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-[#6c5a56]/10 pt-8">
          <p className="font-sans text-xs text-[#4f4542] text-center mb-2">
            Atelier de Luxo • São Bernardo do Campo
          </p>
          <button
            id="btn-agendar-mobile"
            onClick={() => {
              setIsOpen(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#6c5a56] text-white py-4 rounded-full font-sans text-xs font-semibold tracking-widest uppercase hover:bg-[#6c5a56]/90 transition-all duration-300 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            Agendar Reserva Exclusiva
          </button>
        </div>
      </div>
    </>
  );
}
