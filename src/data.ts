/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, PortfolioItem, Review, NailDesignOption } from './types';

export const SERVICES: Service[] = [
  {
    id: 'molde-f1',
    name: 'Molde F1',
    description: 'Técnica moderna de alongamento com acabamento perfeito e rápida aplicação.',
    iconName: 'Sparkles',
    duration: '1h 30m',
    priceEstimate: 'R$ 180,00'
  },
  {
    id: 'alongamento',
    name: 'Alongamento',
    description: 'Extensões duradouras que respeitam a saúde da sua unha natural.',
    iconName: 'Brush',
    duration: '2h 00m',
    priceEstimate: 'R$ 210,00'
  },
  {
    id: 'esmalte-gel',
    name: 'Esmaltação em Gel',
    description: 'Brilho intenso e durabilidade de semanas sem lascar.',
    iconName: 'Droplet',
    duration: '1h 00m',
    priceEstimate: 'R$ 90,00'
  },
  {
    id: 'manutencao',
    name: 'Manutenção',
    description: 'Cuidado contínuo para manter suas unhas sempre impecáveis.',
    iconName: 'ClockDetail',
    duration: '1h 15m',
    priceEstimate: 'R$ 120,00'
  },
  {
    id: 'nail-art',
    name: 'Nail Art',
    description: 'Designs exclusivos feitos à mão para refletir sua personalidade.',
    iconName: 'Palette',
    duration: '1h 45m',
    priceEstimate: 'Sob Consulta'
  },
  {
    id: 'blindagem',
    name: 'Blindagem',
    description: 'Capa protetora que fortalece unhas fracas e previne quebras.',
    iconName: 'Shield',
    duration: '45m',
    priceEstimate: 'R$ 80,00'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdBdp1TBMqPPhFZe9HbHdjFlHs-CsgYEliDag5-mHDhAI8Vv7u6J29ax3ktp4zZDsIbW7D2MuqUpeAG75Ifx9QOXuGnnoBxzGzkz2V3KwAx0eN-3BuyiPCCPtXp0sFRNuHSDzy2Pxz-8JhStXme5_5aQne1DGFaMxqnfzIG0YUQVBcJgkN9Uy9cVM8tM3OeRI_wluMvswDEW6tUk4OPXf8TBah__y7GsoMpm0z7k9cM6Lz-l0OPvxhuAhDMg_f5yObFiJMjztgiAE',
    altText: 'Unhas amendoadas elegantes com base nude suave e delicados espirais de glitter dourado, capturadas com iluminação de estúdio.',
    title: 'Nude com Toque Dourado',
    description: 'Formato Almond com base de quartzo rosa, decorada com micro-glitter de ouro champanhe.',
    likes: 342
  },
  {
    id: 'portfolio-2',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlOy387Jfqbo2GH3eggVH_6xm8Fax1xwZAgapgf5a6XOIQ5dZLaz3jtQMmQCa-mT70lftq6nsCqdMq9HaTHWerYg3M_zc6qmRM6sx-0QzicqpEdpJlFr2dgMoEfT_161OwfI03BxKE4AMrAdTSMVj4-gQaePpnKdVTNnAY6-jFf3QNs9L8_MUZTE6klFM8euQZUztBkwX75DJauZqrZSMZjI2FyaDC3rUBdf2SkpwpTSYSG7HWN6SpGwLk6OOBEIyWnYIzVQaREiw',
    altText: 'Foto macro detalhada de uma única unha almendoada no sofisticado tom nude taupe com pequenos brilhos prateados.',
    title: 'Taupe Sofisticado',
    description: 'Tom nude terroso com micropigmentação holográfica brilhante.',
    likes: 219
  },
  {
    id: 'portfolio-3',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQzjTJXIiM0SUlBsuoh6NUSdULdb-UP8iTFAOH5tQtAqNsPPS0lXUi_4GS6KpNL9uCV47dc6pksOTrjHnBr5EEXrFwcsX2RlpOXNISb7jOhz0jIYKwPpelQ9ZCub_T6LFr0LUY-TgRW2kpy3L9v5n1fpckqzROFH5OhuoutlxYMFauM75er7tEaiuSFQ399BbVZsg86IngF3CrQHaqhY9iZOPWkpRkvW0BQIWorHkaeDoKRposbDo3ImbsYQfr82r5mC41lUib_f8',
    altText: 'Mostruário de unhas de alta qualidade com padrões geométricos brancos e dourados.',
    title: 'Mármore Geométrico',
    description: 'Mistura sutil de efeito marmorizado com linhas em folha de ouro.',
    likes: 412
  }
];

export const CLIENT_REVIEWS: Review[] = [
  {
    id: 'review-1',
    clientName: 'Mariana Azevedo',
    rating: 5,
    comment: 'O atendimento da Néllope é simplesmente de outro nível! As unhas duram 30 dias intactas, sem nenhuma quebra. O ambiente é super calmo e relaxante, saio de lá renovada.',
    date: 'Há 1 semana',
    verified: true,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    role: 'Arquiteta',
    company: 'Azevedo Design'
  },
  {
    id: 'review-2',
    clientName: 'Carla Vasconcellos',
    rating: 5,
    comment: 'Melhor nail designer de São Bernardo. A técnica do Molde F1 fica extremamente natural, ninguém diz que é alongamento de tão perfeito e fininho que é o acabamento!',
    date: 'Há 2 semanas',
    verified: true,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    role: 'Gestora Comercial',
    company: 'Fintech Corp'
  },
  {
    id: 'review-3',
    clientName: 'Heloísa Rodrigues',
    rating: 5,
    comment: 'Amei a blindagem e a esmaltação em gel. Sou médica e lavo a mão o dia inteiro; o esmalte continuou brilhando igual no primeiro dia mesmo após dezenas de lavagens!',
    date: 'Há 3 semanas',
    verified: true,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    role: 'Médica Integrativa',
    company: 'Clínica Rodrigues'
  }
];

// Options for Virtual Nail Designer Customizer
export const NAIL_SHAPES: NailDesignOption[] = [
  { id: 'almond', name: 'Almond (Amendoada)', value: 'M12,2 C12,2 17,9 17,14 C17,16.76 14.76,19 12,19 C9.24,19 7,16.76 7,14 C7,9 12,2 12,2 Z' },
  { id: 'oval', name: 'Oval Elegante', value: 'M12,3 C15.5,3 16.5,8 16.5,13.5 C16.5,16.5 14.5,18.5 12,18.5 C9.5,18.5 7.5,16.5 7.5,13.5 C7.5,8 8.5,3 12,3 Z' },
  { id: 'coffin', name: 'Coffin (Bailarina)', value: 'M10,2 L14,2 L16.5,13 C16.5,16 14.5,18 12,18 C9.5,18 7.5,16 7.5,13 L10,2 Z' },
  { id: 'square', name: 'Quadrada Clássica', value: 'M8,2 L16,2 L16.5,13.5 C16.5,16 14.5,18 12,18 C9.5,18 7.5,16 7.5,13.5 L8,2 Z' }
];

export const NAIL_COLORS: NailDesignOption[] = [
  { id: 'blush-pink', name: 'Rosa Quatzo (Blush)', value: 'Quartz', hex: '#f0dcd6' },
  { id: 'classic-nude', name: 'Nude Ateliê', value: 'Nude', hex: '#cfc5b9' },
  { id: 'champagne-gold', name: 'Glaze Champanhe', value: 'Champagne', hex: '#e9c176' },
  { id: 'deep-cherry', name: 'Carmesim Real', value: 'RedCherry', hex: '#6c2b30' },
  { id: 'french-white', name: 'Branco Pérola', value: 'Pearl', hex: '#fbfbf9' },
  { id: 'emerald-luxury', name: 'Malachite Glamour', value: 'Emerald', hex: '#214e41' }
];

export const NAIL_FINISHES: NailDesignOption[] = [
  { id: 'glossy', name: 'Glossy Espelhado', value: 'Espelhado' },
  { id: 'matte', name: 'Fosco Aveludado', value: 'Matte' },
  { id: 'glitter', name: 'Micro-scintille (Brilho)', value: 'Glitter' },
  { id: 'marble', name: 'Mármore Quartzo', value: 'Marble' }
];

export const RINGS: NailDesignOption[] = [
  { id: 'none', name: 'Sem Anel', value: 'Nenhum' },
  { id: 'diamond', name: 'Solitário Diamante', value: 'Diamond' },
  { id: 'minimalist', name: 'Aro de Ouro Minimal', value: 'Minimal' }
];
